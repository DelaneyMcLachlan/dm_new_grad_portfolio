// Utility to handle image paths with basePath for GitHub Pages
export function getImagePath(path: string): string {
  // In production (GitHub Pages), prepend basePath
  // In development, use path as-is
  const basePath = process.env.NODE_ENV === 'production' ? '/delaneym' : ''
  return `${basePath}${path}`
}

