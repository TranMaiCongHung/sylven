/**
 * Application route definitions
 */
export const ROUTES = {
  HOME: "/",
  CREATIONS: "/san-pham",
  CAMPAIGN: "/campaign",
  ITEMS: "#items",
  FEATURES: "#features",
  ABOUT: "/about",
  CONTACT: "mailto:curator@sylven.dev",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
