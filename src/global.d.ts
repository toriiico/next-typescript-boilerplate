declare module "remark-html" {
  const content: any
  export default content
}

declare module "*.module.css" {
  const content: { [key: string]: string }
  export default content
}

declare module "*.css" {
  const content: { [key: string]: string }
  export default content
}

declare module "*module.scss" {
  const content: { [key: string]: string }
  export default content
}

declare module "*.scss" {
  const content: { [key: string]: string }
  export default content
}
