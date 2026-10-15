const DB_NAME = 'PorticoMediaDB';
const STORE_NAME = 'media';
const VIDEO_KEY = 'banner_video_mp4';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveBannerVideoBlob(blob: Blob): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.put(blob, VIDEO_KEY);
    request.onsuccess = () => {
      window.dispatchEvent(new CustomEvent('banner-video-updated'));
      resolve();
    };
    request.onerror = () => reject(request.error);
  });
}

export async function getBannerVideoBlob(): Promise<Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(VIDEO_KEY);
      request.onsuccess = () => {
        resolve(request.result || null);
      };
      request.onerror = () => reject(request.error);
    });
  } catch {
    return null;
  }
}

export async function clearBannerVideoBlob(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.delete(VIDEO_KEY);
      request.onsuccess = () => {
        window.dispatchEvent(new CustomEvent('banner-video-updated'));
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  } catch {
    // ignore
  }
}
