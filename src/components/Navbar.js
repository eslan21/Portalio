import { profileData } from '../data/profile.js';

export function Navbar() {
  return `
    <nav id="navbar" class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 transition-shadow duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0">
            <a href="#home" class="font-display font-bold text-2xl tracking-tight text-brand-accent hover:opacity-80 transition-opacity">
              ${profileData.initials}
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8 font-medium">
              <a class="nav-link hover:text-brand-accent transition-colors" href="#home">Home</a>
              <a class="nav-link hover:text-brand-accent transition-colors" href="#about">About</a>
              <a class="nav-link hover:text-brand-accent transition-colors" href="#skills">Skills</a>
              <a class="nav-link hover:text-brand-accent transition-colors" href="#projects">Projects</a>
              <a class="px-4 py-2 bg-brand-navy text-white rounded-lg hover:bg-brand-accent transition-colors shadow-sm" href="#contact">Hire Me</a>
            </div>
          </div>

          <!-- Mobile Hamburger Button -->
          <div class="flex md:hidden">
            <button
              id="mobile-menu-btn"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-brand-accent hover:bg-slate-100 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Abrir menú de navegación"
            >
              <svg id="menu-icon-open" class="block w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg id="menu-icon-close" class="hidden w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div class="px-4 pt-2 pb-6 space-y-3 font-medium">
          <a class="mobile-nav-link block px-3 py-2 rounded-lg text-slate-700 hover:text-brand-accent hover:bg-slate-50 transition-colors" href="#home">Home</a>
          <a class="mobile-nav-link block px-3 py-2 rounded-lg text-slate-700 hover:text-brand-accent hover:bg-slate-50 transition-colors" href="#about">About</a>
          <a class="mobile-nav-link block px-3 py-2 rounded-lg text-slate-700 hover:text-brand-accent hover:bg-slate-50 transition-colors" href="#skills">Skills</a>
          <a class="mobile-nav-link block px-3 py-2 rounded-lg text-slate-700 hover:text-brand-accent hover:bg-slate-50 transition-colors" href="#projects">Projects</a>
          <a class="mobile-nav-link block text-center px-4 py-2.5 bg-brand-navy text-white rounded-lg hover:bg-brand-accent transition-colors font-semibold shadow-sm mt-2" href="#contact">Hire Me</a>
        </div>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');
  const navbar = document.getElementById('navbar');

  if (menuBtn && mobileMenu) {
    const toggleMenu = () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
      iconOpen?.classList.toggle('hidden');
      iconClose?.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
          toggleMenu();
        }
      });
    });
  }

  // Add elevation shadow on scroll
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-md');
      } else {
        navbar.classList.remove('shadow-md');
      }
    }
  });
}
