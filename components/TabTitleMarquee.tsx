"use client";

import { useEffect } from "react";

// Browser tabs truncate long titles, so "Elevate your Connectivity" never
// shows next to "Advantage Networks". Scrolling document.title lets the
// browser's own truncation act as a moving window over the full text.
const BASE_TITLE = "Advantage Networks — Elevate your Connectivity";
const LOOP_GAP = "     •     ";
const SCROLL_TEXT = BASE_TITLE + LOOP_GAP;
const STEP_MS = 280;

export function TabTitleMarquee() {
  useEffect(() => {
    const originalTitle = document.title;
    let index = 0;

    const id = setInterval(() => {
      document.title = SCROLL_TEXT.slice(index) + SCROLL_TEXT.slice(0, index);
      index = (index + 1) % SCROLL_TEXT.length;
    }, STEP_MS);

    return () => {
      clearInterval(id);
      document.title = originalTitle;
    };
  }, []);

  return null;
}
