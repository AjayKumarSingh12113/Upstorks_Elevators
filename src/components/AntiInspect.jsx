// src/components/AntiInspect.jsx
import React ,{ useEffect } from "react";

export default function AntiInspect({ enableDevtoolsDetect = true }) {
  useEffect(() => {
    // Disable right-click
    const onContext = (e) => e.preventDefault();
    document.addEventListener("contextmenu", onContext);

    // Disable text selection start & copy
    const onSelectStart = (e) => e.preventDefault();
    const onCopy = (e) => e.preventDefault();
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("copy", onCopy);

    // Block some DevTools keys
    const onKeyDown = (e) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        e.stopPropagation();
      }
      // Ctrl+Shift+I / J / C
      if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === "i" || e.key.toLowerCase() === "j" || e.key.toLowerCase() === "c")) {
        e.preventDefault();
        e.stopPropagation();
      }
      // Ctrl+U (view-source)
      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    // Optional: simple DevTools open detection (best-effort)
    let devtoolsOpen = false;
    let devtoolsInterval;
    if (enableDevtoolsDetect) {
      const threshold = 160;
      devtoolsInterval = setInterval(() => {
        const widthDiff = window.outerWidth - window.innerWidth > threshold;
        const heightDiff = window.outerHeight - window.innerHeight > threshold;
        if (widthDiff || heightDiff) {
          if (!devtoolsOpen) {
            devtoolsOpen = true;
            // action: hide sensitive content, show warning or redirect
            // Example: show alert (replace with a better UX in production)
            alert("Please close developer tools to continue.");
            // Or: document.body.style.display = 'none';
            // Or: window.location.href = '/';
          }
        } else {
          devtoolsOpen = false;
        }
      }, 1000);
    }

    // CSS deterrent: disable select via style (keeps persisted)
    const originalUserSelect = document.documentElement.style.userSelect;
    const originalWebkitUserSelect = document.documentElement.style.webkitUserSelect;
    document.documentElement.style.userSelect = "none";
    document.documentElement.style.webkitUserSelect = "none";

    // cleanup
    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("keydown", onKeyDown);
      if (devtoolsInterval) clearInterval(devtoolsInterval);
      document.documentElement.style.userSelect = originalUserSelect;
      document.documentElement.style.webkitUserSelect = originalWebkitUserSelect;
    };
  }, [enableDevtoolsDetect]);

  return null; // this component only installs handlers
}
