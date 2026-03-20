/** Legacy paths → current site (extend via Search Console 404s). Paths omit basePath. */
export type LegacyRedirect = {
  source: string;
  destination: string;
  permanent?: boolean;
};

export const LEGACY_REDIRECTS: LegacyRedirect[] = [
  // Invisalign (old standalone pages → clear aligners section)
  { source: '/invisalign', destination: '/services/treatments/#clear-aligners', permanent: true },
  { source: '/invisalign/', destination: '/services/treatments/#clear-aligners', permanent: true },
  { source: '/services/invisalign', destination: '/services/treatments/#clear-aligners', permanent: true },
  { source: '/services/invisalign/', destination: '/services/treatments/#clear-aligners', permanent: true },
  { source: '/orthodontics/invisalign', destination: '/services/treatments/#clear-aligners', permanent: true },
  { source: '/orthodontics/invisalign/', destination: '/services/treatments/#clear-aligners', permanent: true },

  // Common treatment hubs on old sites
  { source: '/braces', destination: '/services/treatments/#metal-braces', permanent: true },
  { source: '/braces/', destination: '/services/treatments/#metal-braces', permanent: true },
  { source: '/services/braces', destination: '/services/treatments/#metal-braces', permanent: true },
  { source: '/services/braces/', destination: '/services/treatments/#metal-braces', permanent: true },

  { source: '/retainers', destination: '/services/retainers/', permanent: true },
  { source: '/retainers/', destination: '/services/retainers/', permanent: true },
  { source: '/services/retainers', destination: '/services/retainers/', permanent: true },

  // Typical WordPress-style contact / about slugs
  { source: '/contact-us', destination: '/contact/', permanent: true },
  { source: '/contact-us/', destination: '/contact/', permanent: true },
  { source: '/about-us', destination: '/about/', permanent: true },
  { source: '/about-us/', destination: '/about/', permanent: true },

  // Old “services” index → treatments hub
  { source: '/services', destination: '/services/treatments/', permanent: true },
  { source: '/services/', destination: '/services/treatments/', permanent: true },

  // Orthodontics landing variants
  { source: '/orthodontics', destination: '/orthodontics/kids/', permanent: true },
  { source: '/orthodontics/', destination: '/orthodontics/kids/', permanent: true },
];
