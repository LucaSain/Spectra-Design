"use client";

import { useRef, useEffect } from "react";

export default function FadingLoopVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Set up the CSS transition for opacity
    vid.style.opacity = "0";
    vid.style.transition = "opacity 2s linear";

    let fadeOutTriggered = false;

    const handleCanPlay = () => {
      // Fade in over 2s, then play
      requestAnimationFrame(() => {
        vid.style.opacity = "1";
      });
      vid.play();
    };

    const handleTimeUpdate = () => {
      const { currentTime, duration } = vid;
      // If we're within the last second and haven't yet started fading out:
      if (!fadeOutTriggered && currentTime >= duration - 1) {
        fadeOutTriggered = true;
        // Trigger fade-out (2s) even though 1s of video remains;
        // the video will end in 1s, but opacity transition continues for another 1s
        vid.style.opacity = "0";
      }
    };

    const handleEnded = () => {
      // Reset for next loop
      fadeOutTriggered = false;
      vid.currentTime = 0;
      // Immediately reset opacity to invisible, then fade in again
      vid.style.transition = "none";
      vid.style.opacity = "0";
      // force reflow so the next transition takes effect
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      vid.offsetHeight;
      vid.style.transition = "opacity 2s linear";

      // Let the browser settle, then fade in & play
      setTimeout(() => {
        vid.style.opacity = "1";
        vid.play();
      }, 20);
    };

    vid.addEventListener("canplay", handleCanPlay);
    vid.addEventListener("timeupdate", handleTimeUpdate);
    vid.addEventListener("ended", handleEnded);

    // kick things off in case the video is already buffered
    if (vid.readyState >= 3) handleCanPlay();

    return () => {
      vid.removeEventListener("canplay", handleCanPlay);
      vid.removeEventListener("timeupdate", handleTimeUpdate);
      vid.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/spectra-background.mp4"
      muted
      playsInline
      height={1080}
      width={1920}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        opacity: 0,
        transition: "opacity 2s linear",
      }}
    />
  );
}
