import profilImg from '../assets/profil.png';
import { profileData } from '../data/profile.js';

export function About() {
  const statsHtml = profileData.stats.map(stat => `
    <div class="p-4 bg-brand-surface rounded-xl border border-slate-100">
      <span class="block text-xl font-bold text-brand-navy">${stat.value}</span>
      <span class="text-slate-500 text-sm">${stat.label}</span>
    </div>
  `).join('');

  return `
    <section class="py-24 bg-white" id="about">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
              <img
                alt="Portrait of ${profileData.name}"
                class="w-full h-full object-cover"
                src="${profilImg}"
                loading="lazy"
              />
            </div>
            <!-- Decorative accent for image -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/10 -z-10 rounded-full"></div>
          </div>
          <div data-purpose="about-text-content">
            <h2 class="text-3xl font-display font-bold mb-6 border-l-4 border-brand-accent pl-6">
              Professional Profile
            </h2>
            <p class="text-lg text-slate-600 mb-6 leading-relaxed">
              ${profileData.bio}
            </p>
            <div class="grid grid-cols-2 gap-6 text-center mt-8">
              ${statsHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
