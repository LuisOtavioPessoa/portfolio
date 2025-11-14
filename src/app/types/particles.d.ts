declare module "particles.js";

declare global {
  interface Window {
    particlesJS: {
      load: (
        tagId: string,
        pathConfigJson: string,
        callback?: () => void
      ) => void;
      (tagId: string, params: object): void;
    };
  }
}

export {};
