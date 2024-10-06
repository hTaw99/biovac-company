import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="loading-overlay">
      <Image
        width={64}
        height={64}
        src={process.env.PUBLIC_URL + "/images/loading.gif"}
        alt="Loading image"
        className="size-[64px]"
      />
    </div>
  );
}
