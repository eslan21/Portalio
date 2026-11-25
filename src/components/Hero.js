import { profileData } from '../data/profile.js';

export function Hero() {
  return `
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-navy text-white" id="home">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center animate-reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-brand-accent font-semibold text-xs uppercase tracking-wider mb-6">
            <span class="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            ${profileData.status}
          </div>
          <h1 class="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            Hi, I'm ${profileData.name}. <br/>
            <span class="text-slate-400">${profileData.role}.</span>
          </h1>
          <p class="max-w-2xl mx-auto text-xl text-slate-300 mb-10 leading-relaxed">
            ${profileData.headline}
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a class="px-8 py-4 bg-brand-accent hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20" href="#projects">
              View My Work
            </a>
            <a class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/20" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <!-- Decorative background glow elements -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[100px]"></div>
      </div>
    </section>
  `;
}
