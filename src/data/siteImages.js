/**
 * Card imagery — Unsplash CDN. IDs sourced from Unsplash browse/search pages.
 * Replace with files in /public when you have branded photography.
 */
const q = 'auto=format&fit=crop&w=1200&q=82';
const u = (id) => `https://images.unsplash.com/photo-${id}?${q}`;

/** Sectors — order matches sectors[] in App.jsx. */
export const sectorCardImages = [
  u('1507525428757-48767ee7c9ed'), // landscape / travel
  u('1509391366360-2e959784a276'), // solar
  u('1758605876861-5ebd1b1973f2'), // towers / built environment
  u('1586528116311-ad8dd3c8310d'), // warehouse / logistics
  u('1611974789855-9c2a0a7236a3'), // markets / finance
  u('1497435334941-8c899ee9e8e9'), // aerial / scale (trade corridors)
  u('1558449028-b53a39d100fc'), // retail / commerce
  u('1517048676732-d65bc937f952'), // workshop / collaboration
  u('1622675363311-3e1904dc1885'), // boardroom / digital
  u('1625246333195-78d9c38ad449'), // agriculture
  u('1587854692152-cbe660dbde88'), // lab / research
  u('1544531586-fde5298cdd40'), // speaker / broadcast
];

/** Events — order matches firmEvents[]. */
export const eventCardImages = [
  u('1517048676732-d65bc937f952'),
  u('1450101499163-c8848c66ca85'),
  u('1540575467063-178a50c2df87'),
  u('1542744173-8e7e53415bb0'),
  u('1573164574572-cb89e39749b4'),
  u('1573167507387-6b4b98cb7c13'),
  u('1624555130581-1d9cca783bc0'),
  u('1542744095-fcf48d80b0fd'),
  u('1573164574511-73c773193279'),
  u('1573165759995-5865a394a1aa'),
];

/** About — professional meeting / advisory context (not architecture). */
export const aboutSectionImage = u('1542744173-8e7e53415bb0');

/** Team — illustrative portraits; swap for /public headshots when available. */
export const teamPortraitImages = [
  u('1560250097-0b93528c311a'),
  u('1573496359142-b8d87734a5a2'),
  u('1472099645785-5658abf4ff4e'),
  u('1580489944761-15a19d654956'),
];

/** Analytics cards — order matches insightPublications[]. */
export const insightCoverImages = [
  u('1497435334941-8c899ee9e8e9'),
  u('1454165804606-c3d57bc86b40'),
  u('1450101499163-c8848c66ca85'),
  u('1542744173-8e7e53415bb0'),
  u('1507679799987-c73779587ccf'),
  u('1454165208754-43bfe72d2cb8'),
  u('1573164574572-cb89e39749b4'),
  u('1503387762-592deb58ef4e'),
  u('1521791136064-7986c2920216'),
  u('1540575467063-178a50c2df87'),
  u('1542744095-fcf48d80b0fd'),
  u('1613665813446-82a78c468a1d'),
  u('1573165231977-3f0e27806045'),
  u('1561489413-985b06da5bee'),
  u('1507003211169-0a1dd7228f2d'),
  u('1522071820081-009f0129c71c'),
  u('1573166364839-1bfe9196c23e'),
  u('1593080358201-08e4ff5f93d9'),
];
