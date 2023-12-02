"use client";

import ReactPlayer from "react-player";

export default function Cosmetics() {
  return (
    <div className="flex justify-end">
      <ReactPlayer
        width={450}
        url="cosmetics.mp4"
        controls={false}
        playing={true}
      />
    </div>
  );
}
