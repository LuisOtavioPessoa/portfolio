declare global {
  interface Window {
    particlesJS: {
      (tagId: string, params: object): void;
      load: (tagId: string, pathConfigJson: string, callback?: () => void) => void;
    };
  }
}

export {};
