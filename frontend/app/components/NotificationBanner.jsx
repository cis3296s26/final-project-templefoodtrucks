"use client";

import { useEffect, useState } from "react";

export default function NotificationBanner({
  message,
  color = "blue",
  duration = 3000,
  show = true,
  onClose,
}) {
  const [visible, setVisible] = useState(show);
  const [render, setRender] = useState(show); // controls DOM presence

  useEffect(() => {
    if (show) {
      setRender(true);
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false); // triggers fade out

        // wait for animation before unmounting
        setTimeout(() => {
          setRender(false);
          onClose && onClose();
        }, 300); // match transition duration
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!render) return null;

  const colorStyle = `bg-${color}-500/50 border-${color}-400 text-${color}-900`;

  return (
    <div
      className={`
        fixed top-20 left-1/2 -translate-x-1/2 z-50
        w-full max-w-7/12
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
      `}
    >
      <div
        className={`
          backdrop-blur-lg border shadow-lg rounded-2xl px-6 py-4
          ${colorStyle}
        `}
      >
        <p className="text-center font-bold text-2xl">{message}</p>
      </div>
    </div>
  );
}
