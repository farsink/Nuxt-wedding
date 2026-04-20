<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { useCountdown } from '~/composables/useCountdown'

useHead({
  title: 'Thank You - Muhammed Sijil K & Rinsha K'
})

const { countdown } = useCountdown('May 17, 2026 11:30:00')

const audio = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const audioStatus = ref('Starting...')
const iconClass = computed(() => (isPlaying.value ? 'ph-fill ph-pause' : 'ph-fill ph-play'))

const startAudio = async () => {
  if (!audio.value) {
    return
  }

  try {
    await audio.value.play()
    isPlaying.value = true
    audioStatus.value = 'Playing...'
  } catch {
    isPlaying.value = false
    audioStatus.value = 'Tap to play'
  }
}

onMounted(async () => {
  await nextTick()
  await startAudio()
})

const toggleAudio = async () => {
  if (!audio.value) {
    return
  }

  if (isPlaying.value) {
    audio.value.pause()
    isPlaying.value = false
    audioStatus.value = 'Paused'
    return
  }

  await startAudio()
}

const onAudioEnded = () => {
  isPlaying.value = false
  audioStatus.value = 'Finished'
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div style="position: absolute; top: -60px; left: -40px; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(107, 142, 107, 0.25) 0%, transparent 70%); filter: blur(40px);" class="animate-orbFloat1" />
      <div style="position: absolute; bottom: -30px; right: -50px; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(143, 175, 143, 0.25) 0%, transparent 70%); filter: blur(40px);" class="animate-orbFloat2" />
      <div style="position: absolute; top: 15%; right: 5%; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(107, 142, 107, 0.2) 0%, transparent 70%); filter: blur(35px);" class="animate-orbFloat3" />
      <div style="position: absolute; top: 50%; left: -20px; width: 180px; height: 180px; border-radius: 50%; background: radial-gradient(circle, rgba(168, 204, 168, 0.22) 0%, transparent 70%); filter: blur(30px); animation-direction: reverse;" class="animate-orbFloat2" />
      <div style="position: absolute; bottom: 15%; left: 10%; width: 140px; height: 140px; border-radius: 50%; background: radial-gradient(circle, rgba(107, 142, 107, 0.18) 0%, transparent 70%); filter: blur(25px); animation-direction: reverse;" class="animate-orbFloat1" />
    </div>

    <div class="w-full sm:max-w-[520px] max-h-full overflow-y-auto rounded-2xl sm:rounded-3xl animate-scale-in scrollbar-hide">
      <div class="relative w-full max-w-[520px] bg-card rounded-2xl sm:rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.12)] border-2 border-green-soft/15 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <svg class="absolute -top-1 -left-1 w-28 h-36 opacity-[0.10]" viewBox="0 0 110 140" fill="none">
            <path d="M8 5 C15 25, 20 50, 22 75 C24 95, 20 115, 15 135" stroke="#6B8E6B" stroke-width="0.9" stroke-linecap="round" />
            <path d="M12 28 C22 18, 38 14, 50 18 C38 24, 22 28, 12 28" stroke="#8FAF8F" stroke-width="0.7" fill="#8FAF8F" fill-opacity="0.04" />
            <path d="M16 50 C6 42, -2 32, 2 22 C8 32, 14 42, 16 50" stroke="#8FAF8F" stroke-width="0.7" fill="#8FAF8F" fill-opacity="0.04" />
            <path d="M20 72 C32 62, 48 58, 60 62 C46 68, 30 70, 20 72" stroke="#8FAF8F" stroke-width="0.7" fill="#8FAF8F" fill-opacity="0.04" />
            <path d="M22 92 C12 86, 5 78, 8 70 C14 78, 20 86, 22 92" stroke="#8FAF8F" stroke-width="0.6" fill="#8FAF8F" fill-opacity="0.03" />
            <path d="M8 5 C4 10, 2 18, 5 22" stroke="#6B8E6B" stroke-width="0.6" stroke-linecap="round" />
            <path d="M12 28 C18 20, 30 17, 42 18" stroke="#8FAF8F" stroke-width="0.25" opacity="0.5" />
            <path d="M20 72 C28 66, 40 62, 52 62" stroke="#8FAF8F" stroke-width="0.25" opacity="0.5" />
          </svg>
          <svg class="absolute -bottom-1 -right-1 w-28 h-36 opacity-[0.10]" viewBox="0 0 110 140" fill="none" style="transform: rotate(180deg);">
            <path d="M8 5 C15 25, 20 50, 22 75 C24 95, 20 115, 15 135" stroke="#6B8E6B" stroke-width="0.9" stroke-linecap="round" />
            <path d="M12 28 C22 18, 38 14, 50 18 C38 24, 22 28, 12 28" stroke="#8FAF8F" stroke-width="0.7" fill="#8FAF8F" fill-opacity="0.04" />
            <path d="M16 50 C6 42, -2 32, 2 22 C8 32, 14 42, 16 50" stroke="#8FAF8F" stroke-width="0.7" fill="#8FAF8F" fill-opacity="0.04" />
            <path d="M20 72 C32 62, 48 58, 60 62 C46 68, 30 70, 20 72" stroke="#8FAF8F" stroke-width="0.7" fill="#8FAF8F" fill-opacity="0.04" />
            <path d="M22 92 C12 86, 5 78, 8 70 C14 78, 20 86, 22 92" stroke="#8FAF8F" stroke-width="0.6" fill="#8FAF8F" fill-opacity="0.03" />
            <path d="M8 5 C4 10, 2 18, 5 22" stroke="#6B8E6B" stroke-width="0.6" stroke-linecap="round" />
            <path d="M12 28 C18 20, 30 17, 42 18" stroke="#8FAF8F" stroke-width="0.25" opacity="0.5" />
            <path d="M20 72 C28 66, 40 62, 52 62" stroke="#8FAF8F" stroke-width="0.25" opacity="0.5" />
          </svg>
        </div>

        <div class="relative z-10 py-8 px-6">
          <div class="flex justify-center mb-5 animate-scale-in">
            <div class="w-16 h-16 rounded-full border-2 border-green-soft/30 flex items-center justify-center bg-green-light animate-float shadow-[0_4px_20px_rgba(107,142,107,0.15)]">
              <svg width="28" height="28" viewBox="0 0 24 24" class="text-green-soft">
                <path d="M5 12L10 17L19 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="check-draw" />
              </svg>
            </div>
          </div>

          <div class="text-center mb-2 animate-fade-in-up delay-100">
            <h1 class="font-vibes text-[38px] text-metallic leading-tight">Thank You</h1>
          </div>

          <div class="text-center mb-5 animate-fade-in-up delay-200">
            <p class="text-[15px] font-semibold text-brand-textBase mb-1">We are delighted to have you join us.</p>
          </div>

          <div class="flex items-center justify-center gap-3 mb-5 animate-fade-in-up delay-200">
            <span class="block w-14 h-px bg-gradient-to-r from-transparent to-green-soft/30" />
            <svg width="12" height="12" viewBox="0 0 16 16" class="text-green-soft/40">
              <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5Z" fill="currentColor" />
            </svg>
            <span class="block w-14 h-px bg-gradient-to-l from-transparent to-green-soft/30" />
          </div>

          <p class="text-[14px] text-green-accent font-medium italic leading-relaxed text-center mb-5 animate-fade-in-up delay-400">May Allah bless this gathering and fill it with barakah.</p>

          <div class="text-center mb-5 animate-fade-in-up delay-300">
            <ShinyText
              text="Muhammed Sijil K & Rinsha K"
              :speed="3.2"
              :delay="0.3"
              color="#6B8E6B"
              shine-color="#FFFFFF"
              :spread="120"
              direction="left"
              :pause-on-hover="false"
              class-name="text-[14px] tracking-[2px] uppercase font-semibold"
            />
          </div>

          <div class="flex items-center gap-4 mb-5 animate-fade-in-up delay-400">
            <div class="text-center shrink-0">
              <p class="text-[32px] font-bold leading-none text-brand-primary">17</p>
              <p class="text-[12px] tracking-[1px] uppercase text-brand-textMuted mt-1">May</p>
              <div class="mt-2 pt-2 border-t border-green-border/60">
                <p class="text-[9px] tracking-[1px] uppercase text-brand-textMuted">2026, Sunday</p>
                <p class="text-[12px] font-semibold mt-0.5">11:30 AM - 2:00 PM</p>
              </div>
            </div>
            <div class="w-px h-20 bg-green-border shrink-0" />
            <div class="flex-1">
              <h3 class="text-[16px] font-bold tracking-[1.5px] uppercase text-green-accent">JB LAWS CONVENTION CENTER</h3>
              <p class="text-[12px] text-brand-textMuted tracking-wide mt-1 leading-relaxed">PUTHANANGHADI</p>
            </div>
          </div>

          <div class="flex items-center justify-center gap-3 mb-5 animate-fade-in-up delay-400">
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Reception%20-%20Muhammed%20Sijil%20K%20%26%20Rinsha%20K&dates=20260517T11300000/20260517T14000000&location=JB%20Laws%20Convention%20Center%2C%20Puthananghadi&details=Wedding%20reception%20of%20Muhammed%20Sijil%20K%20and%20Rinsha%20K" target="_blank" rel="noopener noreferrer" class="btn-premium-pill btn-spotlight inline-flex items-center gap-2 text-[12px] text-green-accent font-semibold tracking-wide rounded-full py-2 px-8 bg-green-light/60 shadow-[0_2px_8px_rgba(107,142,107,0.12)]">
              <i class="ph ph-calendar-check" />
              Save Date
            </a>
            <a href="https://maps.google.com/?q=JB+Laws+Convention+Center+Puthananghadi" target="_blank" rel="noopener noreferrer" class="btn-premium-pill btn-spotlight inline-flex items-center gap-2 text-[12px] text-green-accent font-semibold tracking-wide rounded-full py-2 px-8 bg-green-light/60 shadow-[0_2px_8px_rgba(107,142,107,0.12)]">
              <i class="ph ph-map-pin" />
              Location
            </a>
          </div>

          <div class="mb-5 animate-fade-in-up delay-500">
            <div class="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-green-soft/5 border border-green-border/30">
              <audio ref="audio" src="/audio.m4a" preload="auto" @ended="onAudioEnded" />
              <button class="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center hover:scale-110 transition-transform" @click="toggleAudio">
                <i :class="iconClass" />
              </button>
              <div class="flex-1">
                <p class="text-[11px] text-brand-textMuted">Background Music</p>
                <p class="text-[10px] text-brand-textMuted/70">{{ audioStatus }}</p>
              </div>
            </div>
          </div>

          <a href="tel:+918943150263" class="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-brand-primary text-white text-[14px] font-semibold tracking-wide btn-hover active:scale-[0.98] mb-4 animate-fade-in-up delay-500 shadow-[0_4px_16px_rgba(107,142,107,0.25)]">
            <i class="ph ph-phone" />
            Contact Us
          </a>

          <div class="animate-fade-in-up delay-600">
            <section class="py-3 px-5 text-center">
              <p class="text-[12px] tracking-[2.5px] uppercase text-green-soft/70 mb-3 font-medium">Countdown To Reception</p>
              <div class="flex justify-center gap-3">
                <div class="flex flex-col items-center">
                  <div class="w-[52px] h-[38px] rounded-xl border border-green-border bg-green-soft/5 flex items-center justify-center shadow-[0_2px_8px_rgba(107,142,107,0.06)]">
                    <span class="text-[22px] font-bold tabular-nums text-green-accent">{{ countdown.days }}</span>
                  </div>
                  <span class="text-[9px] tracking-[1.5px] text-green-soft/60 mt-1.5 font-medium">DAYS</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="w-[52px] h-[38px] rounded-xl border border-green-border bg-green-soft/5 flex items-center justify-center shadow-[0_2px_8px_rgba(107,142,107,0.06)]">
                    <span class="text-[22px] font-bold tabular-nums text-green-accent">{{ countdown.hours }}</span>
                  </div>
                  <span class="text-[9px] tracking-[1.5px] text-green-soft/60 mt-1.5 font-medium">HRS</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="w-[52px] h-[38px] rounded-xl border border-green-border bg-green-soft/5 flex items-center justify-center shadow-[0_2px_8px_rgba(107,142,107,0.06)]">
                    <span class="text-[22px] font-bold tabular-nums text-green-accent">{{ countdown.minutes }}</span>
                  </div>
                  <span class="text-[9px] tracking-[1.5px] text-green-soft/60 mt-1.5 font-medium">MIN</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="w-[52px] h-[38px] rounded-xl border border-green-border bg-green-soft/5 flex items-center justify-center shadow-[0_2px_8px_rgba(107,142,107,0.06)]">
                    <span class="text-[22px] font-bold tabular-nums text-green-accent">{{ countdown.seconds }}</span>
                  </div>
                  <span class="text-[9px] tracking-[1.5px] text-green-soft/60 mt-1.5 font-medium">SEC</span>
                </div>
              </div>
            </section>
          </div>

          <NuxtLink to="/" class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-textBase text-white text-[13px] font-semibold tracking-[1.5px] uppercase btn-hover active:scale-[0.98] cursor-pointer animate-fade-in-up delay-700">
            <i class="ph ph-arrow-left" />
            Change Response
          </NuxtLink>

          <p class="text-[11px] text-brand-textMuted/50 italic mt-5 text-center tracking-wide animate-fade-in-up delay-800">We look forward to welcoming you</p>
        </div>
      </div>
    </div>
  </div>
</template>
