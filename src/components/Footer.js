import { profileData } from '../data/profile.js';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="bg-white py-12 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a href="#home" class="font-display font-bold text-xl text-brand-navy block mb-4 hover:text-brand-accent transition-colors">
          ${profileData.initials}
        </a>
        <p class="text-slate-500 text-sm">
          &copy; ${currentYear} ${profileData.name}. All rights reserved. Built with passion and clean code.
        </p>
      </div>
    </footer>
  `;
}
