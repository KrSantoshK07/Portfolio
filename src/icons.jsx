// Tiny stroke-icon set — matches stroke 1.5, currentColor
const _ic = (path, size = 16) => (props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {path}
  </svg>
);

const ArrowUpRight = _ic(<><path d="M7 17L17 7" /><path d="M8 7h9v9" /></>);
const ArrowRight   = _ic(<><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>);
const Spark        = _ic(<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></>);
const Bolt         = _ic(<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />);
const Code         = _ic(<><path d="M8 6l-6 6 6 6" /><path d="M16 6l6 6-6 6" /><path d="M14 4l-4 16" /></>);
const Layers       = _ic(<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 12l9 5 9-5" /><path d="M3 17l9 5 9-5" /></>);
const Cpu          = _ic(<><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></>);
const Database     = _ic(<><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" /><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></>);
const Globe        = _ic(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></>);
const Shield       = _ic(<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />);
const Zap          = _ic(<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />);
const Mail         = _ic(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>);
const Phone        = _ic(<path d="M22 16.92V21a1 1 0 01-1.1 1 19.9 19.9 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.9 19.9 0 013.2 4.1 1 1 0 014.2 3h4.08a1 1 0 011 .75l1.1 4a1 1 0 01-.27 1L8.6 10.4a16 16 0 006 6l1.6-1.6a1 1 0 011-.27l4 1.1a1 1 0 01.75 1z" />);
const Linkedin     = _ic(<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 11v6M8 7.5v.01M12 17v-3.5a2.5 2.5 0 015 0V17M12 11v6" /></>);
const Github       = _ic(<path d="M9 19c-4 1.5-4-2-6-2m12 5v-3.87a3.4 3.4 0 00-.94-2.61C17.46 14.62 21 13 21 8a4.8 4.8 0 00-1.36-3.32 4.5 4.5 0 00-.07-3.34S18 1 15 3a13 13 0 00-7 0C5 1 3.43.34 3.43.34a4.5 4.5 0 00-.07 3.34A4.8 4.8 0 002 8c0 5 3.5 6.62 5.93 6.92A3.4 3.4 0 007 17.5V21" />);
const Download     = _ic(<><path d="M12 3v13" /><path d="M7 11l5 5 5-5" /><path d="M5 21h14" /></>);
const Check        = _ic(<path d="M5 12l5 5L20 7" />);
const Plus         = _ic(<><path d="M12 5v14M5 12h14" /></>);
const Minus        = _ic(<path d="M5 12h14" />);
const Dot          = _ic(<circle cx="12" cy="12" r="2" fill="currentColor" />);
const Filter       = _ic(<path d="M3 5h18M6 12h12M10 19h4" />);
const ChevronRight = _ic(<path d="M9 6l6 6-6 6" />);
const ChevronDown  = _ic(<path d="M6 9l6 6 6-6" />);
const Quote        = _ic(<path d="M7 7h4v4H7c0 3 0 5 4 6m6-10h4v4h-4c0 3 0 5 4 6" />);

Object.assign(window, {
  ArrowUpRight, ArrowRight, Spark, Bolt, Code, Layers, Cpu, Database, Globe,
  Shield, Zap, Mail, Phone, Linkedin, Github, Download, Check, Plus, Minus,
  Dot, Filter, ChevronRight, ChevronDown, Quote,
});
