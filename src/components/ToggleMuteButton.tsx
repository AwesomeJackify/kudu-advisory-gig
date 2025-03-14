import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ToggleButton = () => {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = document.getElementById(
      "introVideo"
    ) as HTMLVideoElement | null;
    if (video) {
      video.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    const video = document.getElementById(
      "introVideo"
    ) as HTMLVideoElement | null;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <button className="btn" onClick={toggleMute}>
      {isMuted ? (
        <Icon icon="bi:volume-mute" className="text-2xl" />
      ) : (
        <Icon icon="bi:volume-up" className="text-2xl" />
      )}
    </button>
  );
};

export default ToggleButton;
