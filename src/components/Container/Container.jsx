"use client"

import React, { useEffect, useState } from "react";

const Container = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setIsClient(true);
    // Check if window object is available (client-side only)
    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);
  // return <div className="w-[1200px] mx-auto">{children}</div>;
  return (
    <div
      className={`${
        windowDimensions.width < 1200 ? "w-full" : "w-[1140px]"
      }  mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
