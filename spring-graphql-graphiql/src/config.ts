declare global {
  interface Window {
    GRAPHIGL_LOGO: string
  }
}

const LOGO: string = window.GRAPHIGL_LOGO || '';

export {
  LOGO
};
