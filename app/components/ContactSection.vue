<template>
  <section id="contact" class="py-32 relative overflow-hidden">
    <div class="absolute inset-0 opacity-5"
      style="background: radial-gradient(ellipse 80% 50% at 50% 100%, #0d9488, transparent)" />

    <UContainer>
      <div class="text-center mb-20 reveal">
        <p class="text-teal-400 font-mono text-sm mb-3">// let's connect</p>
        <h2 class="font-display font-black text-5xl md:text-6xl text-white mb-4">
          Get In <span class="gradient-text">Touch</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto mb-6" />
        <p class="text-slate-400 max-w-xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          Let's build something amazing together.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Left: Contact info -->
        <div class="space-y-6 reveal-left">
          <div class="border-gradient rounded-3xl p-1">
            <div class="glass rounded-3xl p-8 space-y-6">
              <h3 class="font-display font-bold text-2xl text-white">Let's work together</h3>
              <p class="text-slate-400 leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities.
                Whether you need a complete web application, UI design, or just want to chat about tech —
                my inbox is always open.
              </p>

              <div class="space-y-4">
                <a v-for="contact in contactItems" :key="contact.label"
                  :href="contact.href"
                  class="flex items-center gap-4 p-4 glass rounded-2xl card-hover group">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    :style="{ background: `${contact.color}15` }">
                    <UIcon :name="contact.icon" class="w-5 h-5" :style="{ color: contact.color }" />
                  </div>
                  <div>
                    <p class="text-slate-500 text-xs">{{ contact.label }}</p>
                    <p class="text-slate-200 text-sm font-medium group-hover:text-teal-400 transition-colors">
                      {{ contact.value }}
                    </p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 text-slate-600 ml-auto group-hover:text-teal-400 transition-colors" />
                </a>
              </div>

              <!-- Social links -->
              <div>
                <p class="text-slate-600 text-xs font-mono mb-3">// find me online</p>
                <div class="flex gap-3">
                  <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
                    class="flex-1 flex flex-col items-center gap-2 p-3 glass rounded-xl hover:border-teal-500/30 transition-all card-hover group">
                    <UIcon :name="social.icon" class="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors" />
                    <span class="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">{{ social.label }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Contact form -->
        <div class="reveal-right">
          <div class="glass rounded-3xl p-8">
            <h3 class="font-display font-bold text-xl text-white mb-6">Send a Message</h3>

            <form class="space-y-5" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-slate-400 text-xs font-mono mb-2 block">// name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Your name"
                    class="w-full px-4 py-3 rounded-xl glass text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 transition-all border border-transparent focus:border-teal-500/30 bg-transparent"
                  />
                </div>
                <div>
                  <label class="text-slate-400 text-xs font-mono mb-2 block">// email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="your@email.com"
                    class="w-full px-4 py-3 rounded-xl glass text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 transition-all border border-transparent focus:border-teal-500/30 bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label class="text-slate-400 text-xs font-mono mb-2 block">// subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Project inquiry, collaboration..."
                  class="w-full px-4 py-3 rounded-xl glass text-slate-200 placeholder-slate-600 text-sm focus:outline-none transition-all border border-transparent focus:border-teal-500/30 bg-transparent"
                />
              </div>

              <div>
                <label class="text-slate-400 text-xs font-mono mb-2 block">// message</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  class="w-full px-4 py-3 rounded-xl glass text-slate-200 placeholder-slate-600 text-sm focus:outline-none transition-all border border-transparent focus:border-teal-500/30 bg-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                :disabled="sending"
                class="btn-magnetic w-full py-4 rounded-2xl font-semibold text-white relative overflow-hidden group disabled:opacity-50"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-500" />
                <div class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span class="relative flex items-center justify-center gap-2">
                  <template v-if="!sending && !sent">
                    <UIcon name="i-heroicons-paper-airplane" class="w-4 h-4" />
                    Send Message
                  </template>
                  <template v-else-if="sending">
                    <UIcon name="i-heroicons-arrow-path" class="w-4 h-4 animate-spin" />
                    Sending...
                  </template>
                  <template v-else>
                    <UIcon name="i-heroicons-check" class="w-4 h-4" />
                    Message Sent!
                  </template>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const form = reactive({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const sent = ref(false)

async function handleSubmit() {
  sending.value = true
  await new Promise(r => setTimeout(r, 1500))
  sending.value = false
  sent.value = true
  setTimeout(() => { sent.value = false }, 3000)
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
}

const contactItems = [
  { label: 'Email', value: 'laibanaseertts@gmail.com', href: 'mailto:laibanaseertts@gmail.com', icon: 'i-heroicons-envelope', color: '#0d9488' },
  { label: 'Phone', value: '+92 345 7671494', href: 'tel:+923457671494', icon: 'i-heroicons-phone', color: '#06b6d4' },
  { label: 'Location', value: 'Toba Tek Singh, Punjab, Pakistan', href: '#', icon: 'i-heroicons-map-pin', color: '#818cf8' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-simple-icons-linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'i-simple-icons-x' },
]
</script>
