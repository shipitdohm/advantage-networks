import { useSyncExternalStore } from "react";

// The landing page opens with a staged intro (background, typed headline,
// then header, then subtitle + buttons). The header lives in the root layout,
// so it needs to know when the intro has reached its step. This is a tiny
// module-level flag: it flips once per page load and never resets, so
// navigating back to the landing page later doesn't replay the intro.
let done = false;
const listeners = new Set<() => void>();

export function completeIntro() {
  if (done) return;
  done = true;
  listeners.forEach((l) => l());
}

export function isIntroDone() {
  return done;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useIntroDone() {
  return useSyncExternalStore(subscribe, () => done, () => false);
}
