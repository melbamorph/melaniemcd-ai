'use client';

import { useEffect, useRef, useState } from 'react';

const HEYGEN_EMBED_URL =
  'https://app.heygen.com/embedded-player/7da0e39f75f44cd0a73d8431bb56a5d1';
const FALLBACK_DELAY_MS = 4000;

type EmbedStatus = 'loading' | 'ready' | 'failed' | 'timeout';

export default function HeroVideoEmbed() {
  const [status, setStatus] = useState<EmbedStatus>('loading');
  const [embedKey, setEmbedKey] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setStatus((prev) => (prev === 'loading' ? 'timeout' : prev));
    }, FALLBACK_DELAY_MS);
  };

  useEffect(() => {
    startTimeout();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setStatus('ready');
  };

  const handleError = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setStatus('failed');
  };

  const handleRetry = () => {
    setStatus('loading');
    setEmbedKey((prev) => prev + 1);
    startTimeout();
  };

  const showFallback = status === 'failed' || status === 'timeout';

  return (
    <figure className="card glow-accent rounded-3xl p-4">
      <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          key={embedKey}
          className="h-full w-full scale-[1.02] origin-center"
          src={HEYGEN_EMBED_URL}
          title="HeyGen video player"
          allow="encrypted-media; fullscreen;"
          allowFullScreen
          loading="lazy"
          frameBorder={0}
          scrolling="no"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
      {showFallback ? (
        <p className="mt-3 text-xs text-muted-400" aria-live="polite">
          {status === 'timeout'
            ? 'Video is taking longer than expected.'
            : 'Having trouble loading the video?'}{' '}
          <a
            className="text-accent-400 hover:underline"
            href={HEYGEN_EMBED_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open it in HeyGen.
          </a>
          <button
            className="ml-3 text-accent-400 hover:underline"
            type="button"
            onClick={handleRetry}
          >
            Try again.
          </button>
        </p>
      ) : null}
      <noscript>
        <p className="mt-2 text-xs text-muted-400">
          Video embed requires JavaScript.{' '}
          <a
            className="text-accent-400 hover:underline"
            href={HEYGEN_EMBED_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the video directly.
          </a>
        </p>
      </noscript>
    </figure>
  );
}
