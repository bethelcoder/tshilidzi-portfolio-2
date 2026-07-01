/* ============================================================
   CUSTOM SVG ICON SET — hand-drawn, single-stroke, no brand marks
   ============================================================ */
export const IconSpark = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none">
    <path d="M50 2 L58 42 L98 50 L58 58 L50 98 L42 58 L2 50 L42 42 Z" fill="currentColor" />
  </svg>
);

export const IconBars = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M8 40V22" /><path d="M20 40V8" /><path d="M32 40V27" /><path d="M44 40V15" />
  </svg>
);

export const IconDatabase = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
    <ellipse cx="24" cy="10" rx="16" ry="6" />
    <path d="M8 10v14c0 3.3 7.2 6 16 6s16-2.7 16-6V10" strokeLinecap="round" />
    <path d="M8 24v14c0 3.3 7.2 6 16 6s16-2.7 16-6V24" strokeLinecap="round" />
  </svg>
);

export const IconCode = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 14L6 24l11 10" /><path d="M31 14l11 10-11 10" /><path d="M27 10l-6 28" />
  </svg>
);

export const IconFlow = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <circle cx="9" cy="12" r="5" /><circle cx="39" cy="12" r="5" /><circle cx="24" cy="36" r="5" />
    <path d="M9 17v6a4 4 0 004 4h5" /><path d="M39 17v6a4 4 0 01-4 4h-5" />
  </svg>
);

export const IconTool = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M31 10a9 9 0 00-11.9 11.9L7 34l4 4 12.1-12.1A9 9 0 0034 14z" />
  </svg>
);

export const IconDoc = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 4h16l8 8v32H13z" /><path d="M29 4v8h8" />
    <path d="M18 26h12M18 32h12M18 20h6" />
  </svg>
);

export const IconCert = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="17" r="12" />
    <path d="M17 27l-4 15 11-6 11 6-4-15" />
  </svg>
);

export const IconArrowUpRight = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M9 7h8v8" />
  </svg>
);

export const IconMail = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconLink = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    <path d="M10 21v-7a2 2 0 012-2 2 2 0 012 2v1a3 3 0 016 0v6" />
  </svg>
);

export const IconGit = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
    <path d="M6 9v6" /><path d="M18 9a9 9 0 01-9 9" />
  </svg>
);
