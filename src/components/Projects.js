import { projectsData } from '../data/projects.js';

export function Projects() {
  const projectsHtml = projectsData.map(project => {
    const tagsHtml = project.tags.map(tag => `
      <span class="text-[10px] font-bold uppercase tracking-wider ${tag.bg} ${tag.text} px-2.5 py-1 rounded-md">
        ${tag.name}
      </span>
    `).join('');

    return `
      <article class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover-card flex flex-col justify-between" data-purpose="project-card">
        <div>
          <div class="aspect-video overflow-hidden bg-slate-100">
            <img
              alt="${project.title}"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="${project.image}"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              ${tagsHtml}
            </div>
            <h3 class="text-xl font-bold mb-2 text-brand-navy">${project.title}</h3>
            <p class="text-slate-600 text-sm mb-4 leading-relaxed">${project.description}</p>
          </div>
        </div>
        <div class="px-6 pb-6 pt-0">
          <a class="inline-flex items-center text-brand-navy font-bold text-sm border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors group-hover:border-blue-600" href="${project.link}" ${project.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            View Project
            <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="py-24 bg-white" id="projects">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 class="text-3xl font-display font-bold mb-4">Featured Projects</h2>
            <p class="text-slate-500 max-w-lg">A selection of recent projects that showcase my technical capabilities and attention to detail.</p>
          </div>
          <a class="text-brand-accent font-semibold hover:underline flex items-center gap-2 group" href="#projects">
            Browse Archive
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projectsHtml}
        </div>
      </div>
    </section>
  `;
}
