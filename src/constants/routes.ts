/**
 * Application route definitions
 */
export const ROUTES = {
  HOME: "/",
  ITEMS: "#items",
  FEATURES: "#features",
  ABOUT: "#about",
  CONTACT: "#contact",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
