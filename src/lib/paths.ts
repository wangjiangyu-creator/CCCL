const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

export const withBase = (path: string) => {
  if (!path || path.startsWith("#") || path.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
};
