"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // wait 3 seconds before starting fade-in

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen relative">
      <div className="h-full w-full absolute -z-10">
        <div className="bg-gradient-to-t from-base-100 via-base-100/30 to-base-100/30   z-10 h-[100vh] w-screen absolute top-0 left-0 "></div>
        <FadingLoopVideo />
      </div>
      <div className="h-screen w-screen flex flex-col sm:flex-row ">
        <div className="w-full h-full basis-1/2"></div>
        <div
          id="spectra"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
          className="w-full text-4xl font-semibold flex scale-75 h-full justify-center items-center basis-1/2"
        >
          <Image
            alt=""
            src="/logo.svg"
            height={1000}
            width={2000}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

function FadingLoopVideo() {
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
      className="object-cover transform rotate-180"
      playsInline
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
