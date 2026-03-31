<template>
  <section class="py-16 relative overflow-hidden">
    <UContainer>
      <div class="mb-14 reveal">
        <p class="text-violet-400 font-mono text-xs mb-2">// let's connect</p>
        <h2 class="font-display font-black text-4xl md:text-5xl text-white">
          Get In Touch<span class="gradient-text">.</span>
        </h2>
        <p class="text-stone-400 mt-3 max-w-lg text-sm">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-10">
        <!-- Left: contact info -->
        <div class="space-y-5 reveal-left">
          <div class="card-surface rounded-2xl p-6 space-y-5">
            <h3 class="font-display font-semibold text-xl text-white">Let's work together</h3>
            <p class="text-stone-400 text-sm leading-relaxed">
              I'm available for freelance projects and open to full-time opportunities.
              Whether it's a web app, UI design, or just a chat about tech — reach out.
            </p>

            <div class="space-y-3">
              <a
                v-for="contact in contactItems"
                :key="contact.label"
                :href="contact.href"
                class="flex items-center gap-4 p-4 card-surface-light rounded-xl hover:border-violet-500/30 transition-all group"
              >
                <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  :style="{ background: `${contact.color}15` }">
                  <UIcon :name="contact.icon" class="w-4 h-4" :style="{ color: contact.color }" />
                </div>
                <div class="min-w-0">
                  <p class="text-stone-600 text-xs">{{ contact.label }}</p>
                  <p class="text-stone-200 text-sm font-medium group-hover:text-violet-300 transition-colors truncate">
                    {{ contact.value }}
                  </p>
                </div>
                <UIcon name="i-heroicons-arrow-up-right" class="w-3.5 h-3.5 text-stone-700 ml-auto group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </a>
            </div>

            <div>
              <p class="text-stone-600 text-xs font-mono mb-3">// find me online</p>
              <div class="flex gap-3">
                <a
                  v-for="social in socials"
                  :key="social.label"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex flex-col items-center gap-1.5 p-3 card-surface-light rounded-xl hover:border-violet-500/30 transition-all group"
                >
                  <UIcon :name="social.icon" class="w-4 h-4 text-stone-500 group-hover:text-violet-400 transition-colors" />
                  <span class="text-xs text-stone-600 group-hover:text-stone-400 transition-colors">{{ social.label }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <div class="reveal-right">
          <div class="card-surface rounded-2xl p-6">
            <h3 class="font-display font-semibold text-xl text-white mb-6">Send a Message</h3>

            <!-- Error banner -->
            <div v-if="error" class="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-2">
              <UIcon name="i-heroicons-exclamation-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" />
              {{ error }}
            </div>

            <form class="space-y-4" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-stone-500 text-xs font-mono mb-1.5 block">name *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Your name"
                    required
                    class="w-full px-4 py-3 rounded-xl text-stone-200 placeholder-stone-700 text-sm focus:outline-none transition-all border bg-stone-900/50"
                    :class="fieldError.name ? 'border-red-500/50' : 'border-white/5 focus:border-violet-500/40'"
                  />
                </div>
                <div>
                  <label class="text-stone-500 text-xs font-mono mb-1.5 block">email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    class="w-full px-4 py-3 rounded-xl text-stone-200 placeholder-stone-700 text-sm focus:outline-none transition-all border bg-stone-900/50"
                    :class="fieldError.email ? 'border-red-500/50' : 'border-white/5 focus:border-violet-500/40'"
                  />
                </div>
              </div>

              <div>
                <label class="text-stone-500 text-xs font-mono mb-1.5 block">subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Project inquiry, collaboration..."
                  class="w-full px-4 py-3 rounded-xl text-stone-200 placeholder-stone-700 text-sm focus:outline-none transition-all border border-white/5 focus:border-violet-500/30 bg-stone-900/50"
                />
              </div>

              <div>
                <label class="text-stone-500 text-xs font-mono mb-1.5 block">message *</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  class="w-full px-4 py-3 rounded-xl text-stone-200 placeholder-stone-700 text-sm focus:outline-none transition-all border bg-stone-900/50 resize-none"
                  :class="fieldError.message ? 'border-red-500/50' : 'border-white/5 focus:border-violet-500/30'"
                />
              </div>

              <button
                type="submit"
                :disabled="sending || sent"
                class="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm disabled:opacity-60 flex items-center justify-center gap-2 transition-all"
              >
                <template v-if="sent">
                  <UIcon name="i-heroicons-check-circle" class="w-4 h-4" />
                  Message sent — I'll get back to you soon!
                </template>
                <template v-else-if="sending">
                  <UIcon name="i-heroicons-arrow-path" class="w-4 h-4 animate-spin" />
                  Sending...
                </template>
                <template v-else>
                  <UIcon name="i-heroicons-paper-airplane" class="w-4 h-4" />
                  Send Message
                </template>
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
const error = ref('')
const fieldError = reactive({ name: false, email: false, message: false })

async function handleSubmit() {
  // Reset state
  error.value = ''
  fieldError.name = false
  fieldError.email = false
  fieldError.message = false

  // Client-side validation
  let valid = true
  if (!form.name.trim()) { fieldError.name = true; valid = false }
  if (!form.email.trim() || !form.email.includes('@')) { fieldError.email = true; valid = false }
  if (!form.message.trim()) { fieldError.message = true; valid = false }
  if (!valid) { error.value = 'Please fill in all required fields.'; return }

  sending.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      },
    })
    sent.value = true
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
    // Reset success state after 6s
    setTimeout(() => { sent.value = false }, 6000)
  }
  catch (err: any) {
    error.value = err?.data?.statusMessage || 'Something went wrong. Please email me directly at laibanaseertts@gmail.com'
  }
  finally {
    sending.value = false
  }
}

const contactItems = [
  { label: 'Email', value: 'laibanaseertts@gmail.com', href: 'mailto:laibanaseertts@gmail.com', icon: 'i-heroicons-envelope', color: '#7c3aed' },
  { label: 'Phone', value: '+92 345 7671494', href: 'tel:+923457671494', icon: 'i-heroicons-phone', color: '#f472b6' },
  { label: 'Location', value: 'Toba Tek Singh, Punjab, Pakistan', href: 'https://maps.google.com/?q=Toba+Tek+Singh,+Pakistan', icon: 'i-heroicons-map-pin', color: '#fb923c' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/laibanaseer', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/laibanaseer', icon: 'i-simple-icons-linkedin' },
  { label: 'Email', href: 'mailto:laibanaseertts@gmail.com', icon: 'i-heroicons-envelope' },
]
</script>
