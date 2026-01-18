"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
};

export default function VideoModal({ open, onClose, videoUrl, title }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div className="relative z-[1000] w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-black/60">
          <p className="text-white text-sm font-semibold truncate">
            {title || "Video"}
          </p>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-lg leading-none"
          >
            ✕
          </button>
        </div>

        <div className="relative w-full aspect-video bg-black">
          {videoUrl ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={videoUrl}
              title="Video Player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-white/70">
              No video available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
