import { skillsData } from '../data/skills.js';

export function Skills() {
  const cardsHtml = skillsData.map(skill => `
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center hover-card transition-all" data-purpose="skill-item">
      <div class="w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mb-3">
        ${skill.icon}
      </div>
      <h3 class="font-bold text-slate-800 text-center text-sm leading-snug">
        ${skill.title}
        ${skill.subtitle ? `<br/><span class="text-xs text-slate-500 font-normal">${skill.subtitle}</span>` : ''}
      </h3>
    </div>
  `).join('');

  return `
    <section class="py-24 bg-brand-surface" id="skills">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-display font-bold mb-4">Technical Expertise</h2>
          <div class="w-16 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
