import { profileData } from '../data/profile.js';

export function Contact() {
  return `
    <section class="py-24 bg-brand-surface" id="contact">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div class="grid lg:grid-cols-5">
            <!-- Contact Info Sidebar -->
            <div class="lg:col-span-2 bg-brand-navy p-10 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <h2 class="text-4xl font-display font-bold mb-6">Let's build something great.</h2>
                <p class="text-slate-300 mb-10 leading-relaxed">
                  I'm currently accepting new projects and consulting engagements. Reach out today.
                </p>
                <div class="space-y-6">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path clip-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fill-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span>${profileData.location}</span>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <a href="mailto:${profileData.email}" class="hover:text-brand-accent transition-colors">${profileData.email}</a>
                  </div>
                </div>
              </div>
              <div class="pt-10 border-t border-white/10 flex gap-4 mt-8 lg:mt-0">
                <a
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-colors"
                  href="${profileData.socials.linkedin}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-colors"
                  href="${profileData.socials.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="lg:col-span-3 p-10 lg:p-16">
              <form action="${profileData.formAction}" class="space-y-6" id="contact-form" method="POST">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-2" for="name">Name</label>
                    <input class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none" id="name" name="name" required="" type="text" placeholder="Your name"/>
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-2" for="email">Email</label>
                    <input class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none" id="email" name="email" required="" type="email" placeholder="you@example.com"/>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2" for="subject">Subject</label>
                  <input class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none" id="subject" name="subject" type="text" placeholder="Project inquiry"/>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2" for="message">Message</label>
                  <textarea class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none resize-y" id="message" name="message" required="" rows="5" placeholder="Tell me about your project..."></textarea>
                </div>
                <button id="submit-btn" class="w-full py-4 bg-brand-accent text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer" type="submit">
                  <span>Send Message</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContact() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (form && submitBtn) {
    form.addEventListener('submit', () => {
      submitBtn.setAttribute('disabled', 'true');
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      `;
    });
  }
}
