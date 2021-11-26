// define window extension to get through typechecking
declare global {
  interface Window {
    GRAPHIGL_LOGO: string
    GRAPHIGL_PATH: string
  }
}

// we expect main html to load config.js which sets these
const LOGO: string = window.GRAPHIGL_LOGO || '';
const PATH: string = window.GRAPHIGL_PATH || '';

export {
  LOGO,
  PATH
};
