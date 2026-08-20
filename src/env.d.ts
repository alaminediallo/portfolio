interface Window {
  /** Umami analytics tracker, injected by the bip.js script when not blocked. */
  umami?: {
    track(eventName?: string, eventData?: Record<string, unknown>): void;
  };
}
