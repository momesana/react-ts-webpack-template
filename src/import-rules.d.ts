// this is needed so typescript doesn't complain if we try to import svg files
// see https://webpack.js.org/guides/typescript/#importing-other-assets

declare module "*.svg?url" {
  const content: string;
  export default content;
}

declare module "*.svg?component" {
  const content: AnyStyledComponent;
  export default content;
}

declare module "*.svg" {
  const content: AnyStyledComponent;
  export default content;
}
