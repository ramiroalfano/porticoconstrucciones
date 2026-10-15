import React, { useState, useEffect, useRef } from 'react';
import { Upload, X, CheckCircle, Film, RefreshCw, AlertCircle } from 'lucide-react';
import { saveBannerVideoBlob, clearBannerVideoBlob, getBannerVideoBlob } from '../utils/videoStorage.ts';

interface AdminVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminVideoModal: React.FC<AdminVideoModalProps> = ({ isOpen, onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [hasCustomVideo, setHasCustomVideo] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      getBannerVideoBlob().then((blob) => {
        setHasCustomVideo(!!blob);
      });
      setStatus('idle');
      setStatusMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleProcessFile = async (file: File) => {
    if (!file.type.includes('mp4') && !file.name.toLowerCase().endsWith('.mp4')) {
      setStatus('error');
      setStatusMessage('Por favor selecciona un archivo con formato .mp4');
      return;
    }

    try {
      setStatus('uploading');
      setStatusMessage('Guardando video exacto en la memoria del sitio...');

      // Save into persistent client DB for immediate playback
      await saveBannerVideoBlob(file);

      // Attempt server-side sync if backend endpoint is reachable
      try {
        await fetch('/api/upload-video', {
          method: 'POST',
          headers: {
            'Content-Type': 'video/mp4',
            'X-Filename': encodeURIComponent(file.name),
          },
          body: file,
        });
      } catch {
        // local IndexedDB is already active
      }

      setHasCustomVideo(true);
      setStatus('success');
      setStatusMessage(`¡El archivo "${file.name}" se configuró con éxito como fondo del banner en bucle!`);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Error desconocido al guardar el video';
      setStatus('error');
      setStatusMessage(errorMsg);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleReset = async () => {
    await clearBannerVideoBlob();
    setHasCustomVideo(false);
    setStatus('success');
    setStatusMessage('Se ha restablecido el video original del banner.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#1E293B] border border-slate-700 rounded-xl shadow-2xl p-6 text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FF8A00]/20 flex items-center justify-center text-[#FF8A00]">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Gestión Privada de Video de Fondo
              </h3>
              <p className="text-xs text-slate-400">
                Panel exclusivo para el propietario · No visible a visitantes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative notice */}
        <div className="mb-5 p-3.5 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-slate-300 leading-relaxed">
          <p className="mb-1 font-semibold text-[#FF8A00]">
            ✓ Web 100% limpia para visitantes:
          </p>
          <p>
            Los clientes o visitantes de la constructora nunca verán botones de subida ni opciones de carga. Tu video <strong>videobanner.mp4</strong> correrá en bucle automáticamente en el banner principal.
          </p>
        </div>

        {/* Dropzone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-[#FF8A00] bg-[#FF8A00]/10'
              : 'border-slate-600 hover:border-slate-400 bg-slate-800/50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="video/mp4,video/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleProcessFile(e.target.files[0]);
              }
            }}
          />

          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-700/80 flex items-center justify-center text-[#FF8A00]">
            <Upload className="w-6 h-6" />
          </div>

          <p className="text-sm font-semibold text-white mb-1">
            Arrastra aquí tu archivo <span className="text-[#FF8A00]">videobanner.mp4</span>
          </p>
          <p className="text-xs text-slate-400">
            o haz clic para buscarlo en tu computadora (.mp4)
          </p>
        </div>

        {/* Status Feedback */}
        {status === 'uploading' && (
          <div className="mt-4 p-3 bg-blue-900/30 border border-blue-700/50 rounded-lg flex items-center gap-2.5 text-xs text-blue-300">
            <RefreshCw className="w-4 h-4 animate-spin text-blue-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {status === 'success' && (
          <div className="mt-4 p-3 bg-emerald-900/30 border border-emerald-700/50 rounded-lg flex items-center gap-2.5 text-xs text-emerald-300">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 p-3 bg-rose-900/30 border border-rose-700/50 rounded-lg flex items-center gap-2.5 text-xs text-rose-300">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between text-xs">
          {hasCustomVideo ? (
            <button
              onClick={handleReset}
              className="text-slate-400 hover:text-rose-400 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restablecer video predeterminado</span>
            </button>
          ) : (
            <span className="text-slate-500">Video por defecto activo</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors cursor-pointer font-medium"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
