<script setup lang="ts">
import { useCountdown } from '~/composables/useCountdown'
import confetti from 'canvas-confetti'
import { useRouter } from 'vue-router'

const router = useRouter()
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/+$/, '')
const canonicalUrl = `${siteUrl}/`
const ogImageUrl = `${siteUrl}/opengraph.webp`

useSeoMeta({
  title: 'Sijil weds Rinsha',
  ogTitle: 'Sijil weds Rinsha',
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Wedding invitation for Sijil and Rinsha',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Sijil weds Rinsha',
  twitterImage: ogImageUrl
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

const { countdown } = useCountdown('May 17, 2026 11:30:00')

const handleRsvp = () => {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.65 },
    colors: ['#6B8E6B', '#8FB98F', '#FFFFFF', '#FFD700']
  })
  setTimeout(() => {
    router.push('/page-2')
  }, 500)
}
</script>

<template>
  <div class="h-screen overflow-hidden flex items-center justify-center p-4 sm:p-8 relative selection:bg-brand-secondary selection:text-white">
    <div class="loader-overlay fixed inset-0 bg-brand-bg z-50 flex flex-col items-center justify-center font-playfair">
      <ShinyText
        svg-src="/bismillah.svg"
        aria-label="Bismillah"
        :speed="3.6"
        :delay="0"
        color="#a6a6a6"
        shine-color="#ffffff"
        :spread="120"
        direction="left"
        :yoyo="false"
        :pause-on-hover="false"
        class-name="mb-4"
      />
      <div class="w-24 h-px bg-brand-secondary opacity-50" />
      <p class="mt-4 text-xs tracking-[0.2em] text-brand-textMuted uppercase font-georgia italic">Preparing Invitation</p>
    </div>

    <SpotlightCard
      class-name="w-full max-w-[540px] h-[88vh] max-h-[760px] border border-white/50 flex flex-col items-center text-center scale-content transition-all duration-500 overflow-hidden"
      spotlight-color="rgba(107, 142, 107, 0.18)"
    >
      <main class="relative w-full h-full overflow-y-auto overflow-x-hidden overscroll-x-none scrollbar-hide px-7 sm:px-12 py-12 sm:py-16 flex flex-col items-center">
        <img
          src="/decoration.svg"
          alt=""
          aria-hidden="true"
          class="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 lg:-top-12 lg:-left-12 w-20 sm:w-28 lg:w-32 opacity-[0.08] sm:opacity-[0.10] pointer-events-none select-none"
        >
        <img
          src="/decoration.svg"
          alt=""
          aria-hidden="true"
          class="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 lg:-top-12 lg:-right-12 w-20 sm:w-28 lg:w-32 opacity-[0.08] sm:opacity-[0.10] pointer-events-none select-none scale-x-[-1]"
        >
        <img
          src="/decoration.svg"
          alt=""
          aria-hidden="true"
          class="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 lg:-bottom-14 lg:-left-14 w-20 sm:w-28 lg:w-32 opacity-[0.08] sm:opacity-[0.10] pointer-events-none select-none scale-y-[-1]"
        >
        <img
          src="/decoration.svg"
          alt=""
          aria-hidden="true"
          class="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 lg:-bottom-14 lg:-right-14 w-20 sm:w-28 lg:w-32 opacity-[0.08] sm:opacity-[0.10] pointer-events-none select-none rotate-180"
        >

      <div class="stagger-1 relative z-10 flex flex-col items-center w-full">
        <img src="/image.svg" alt="Bismillah" class="w-40 sm:w-38 mb-0 opacity-80">
        <p class="text-[12px] sm:text-[14px] text-brand-textMuted tracking-wide font-light uppercase mt-2">
          IN THE NAME OF ALLAH
          <br>
          THE MOST GRACIOUS & THE MOST MERCIFUL
        </p>
        <img src="/divider.svg" alt="" aria-hidden="true" class="w-[60%] sm:w-[70%] md:w-[80%] max-w-[100px] h-auto opacity-50 mx-auto my-4 pointer-events-none select-none">
        <p class="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-brand-textBase font-medium leading-relaxed max-w-[85%] mx-auto">
          MR. SAYDALAVI MASTER AND MRS. RAJEENA
          <br><br>
          MOST WARMLY REQUEST YOUR PRESENCE WITH FAMILY
          <br>
          FOR THE WEDDING CEREMONY OF
          <br>
          OUR BELOVED SON
        </p>
      </div>

      <div class="stagger-2 relative z-10 mt-8 mb-6 w-full flex flex-col items-center text-center">
        <h1 class="-rotate-1 drop-shadow-sm leading-[1.2] py-1 overflow-visible">
          <ShinyText
            text="Muhammed Sijil K"
            :speed="5.2"
            :delay="0.25"
            color="#6B8E6B"
            shine-color="#FFFFFF"
            :spread="120"
            direction="left"
            :pause-on-hover="false"
            class-name="inline-block font-vibes text-4xl sm:text-5xl leading-[1.2] px-4 py-4"
          />
        </h1>
        <p class="mt-4 text-[11px] sm:text-[13px] text-brand-textBase italic">Grand S/O Late Moiduppu Kodassery<br>&amp; Mrs. Fathima</p>
        <div class="my-5 flex items-center justify-center gap-2 sm:gap-3" aria-hidden="true">
          <div class="relative w-12 sm:w-14 h-6 sm:h-7 overflow-hidden opacity-50 pointer-events-none select-none">
            <img src="/heart.svg" alt="" class="absolute left-0 top-1/2 -translate-y-1/2 w-24 sm:w-28 max-w-none h-auto">
          </div>
          <span class="font-playfair text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-brand-textBase">Weds</span>
          <div class="relative w-12 sm:w-14 h-6 sm:h-7 overflow-hidden opacity-50 pointer-events-none select-none">
            <img src="/heart.svg" alt="" class="absolute right-0 top-1/2 -translate-y-1/2 w-24 sm:w-28 max-w-none h-auto">
          </div>
        </div>
        <h1 class="rotate-1 drop-shadow-sm leading-[1.2] py-1 overflow-visible">
          <ShinyText
            text="Rinsha K"
            :speed="5.2"
            :delay="0.45"
            color="#6B8E6B"
            shine-color="#FFFFFF"
            :spread="120"
            direction="left"
            :pause-on-hover="false"
            class-name="inline-block font-vibes text-4xl sm:text-5xl leading-[1.2] px-4 py-4"
          />
        </h1>
        <p class="mt-4 text-[11px] sm:text-[13px] text-brand-textBase italic">D/O Mr. Abdul Razak Master<br>&amp; Mrs. Kamarulnisa</p>
      </div>

      <div class="stagger-3 relative z-10 mt-4 w-full flex justify-center">
        <div class="border border-brand-secondary/70 rounded-[14px] bg-white flex w-full max-w-[380px] shadow-sm relative overflow-hidden">
          <div class="flex-1 flex flex-col items-center justify-center py-3 px-2">
            <span class="text-[11px] font-bold tracking-widest text-brand-primary uppercase">May</span>
            <span class="text-[9px] text-brand-textMuted mt-1 uppercase">2026, Sunday</span>
          </div>
          <div class="border-x border-brand-secondary/40 px-6 py-2 flex items-center justify-center bg-brand-bg/50">
            <span class="font-playfair text-4xl sm:text-5xl font-medium text-brand-primary">17</span>
          </div>
          <div class="flex-1 flex flex-col items-center justify-center py-3 px-2 text-[10px] font-medium text-brand-textBase tracking-wider">
            <span>11:30 AM -</span>
            <span class="mt-0.5">2:00 PM</span>
          </div>
        </div>
      </div>

      <div class="stagger-4 relative z-10 mt-8 w-full">
        <img src="/divider.svg" alt="" aria-hidden="true" class="w-[60%] sm:w-[70%] md:w-[80%] max-w-[100px] h-auto opacity-50 mx-auto mb-6 pointer-events-none select-none">
        <p class="text-[11px] sm:text-[13px] italic text-brand-textMuted mb-6 px-4 font-georgia">
          Sharing the Happiness and compliments from<br>Muhammed Shibin K and family
        </p>
        <h2 class="font-playfair text-lg sm:text-xl font-semibold text-brand-primary tracking-widest uppercase mb-3 px-4 leading-relaxed">
          JB LAWNS CONVENTION CENTER
        </h2>
        <div class="flex items-start justify-center gap-2 text-[11px] sm:text-[13px] text-brand-textMuted max-w-[80%] mx-auto leading-relaxed">
          <i class="ph ph-map-pin text-brand-secondary mt-1 text-sm" />
          <p>PUTHANANGHADI</p>
        </div>
      </div>

      <div class="stagger-5 relative z-10 mt-10 w-full">
        <div class="mb-7 w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Reception%20-%20Muhammed%20Sijil%20K%20%26%20Rinsha%20K&dates=20260517T11300000/20260517T14000000&location=JB%20Laws%20Convention%20Center%2C%20Puthananghadi&details=Wedding%20reception%20of%20Muhammed%20Sijil%20K%20and%20Rinsha%20K" target="_blank" rel="noopener noreferrer" class="btn-premium-pill btn-spotlight inline-flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-green-accent font-semibold tracking-wide rounded-full py-2.5 px-5 sm:px-7 bg-green-light/60 border border-green-border/50 shadow-[0_2px_10px_rgba(107,142,107,0.12)] whitespace-nowrap">
            <i class="ph ph-calendar-check" />
            Save Date
          </a>
          <a href="https://maps.google.com/?q=JB+Laws+Convention+Center+Puthananghadi" target="_blank" rel="noopener noreferrer" class="btn-premium-pill btn-spotlight inline-flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-green-accent font-semibold tracking-wide rounded-full py-2.5 px-5 sm:px-7 bg-green-light/60 border border-green-border/50 shadow-[0_2px_10px_rgba(107,142,107,0.12)] whitespace-nowrap">
            <i class="ph ph-map-pin" />
            Location
          </a>
        </div>
        <p class="text-[9px] sm:text-[10px] tracking-[0.2em] text-brand-textMuted uppercase mb-5">Countdown to Reception</p>
        <div class="flex items-center justify-center gap-3 sm:gap-5">
          <div class="flex flex-col items-center gap-2">
            <div class="w-[50px] h-[55px] sm:w-[60px] sm:h-[65px] border-[1.5px] border-brand-secondary/60 rounded-[20px] sm:rounded-[24px] flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm transition-transform hover:scale-105 duration-300">
              <span class="font-playfair text-xl sm:text-2xl text-brand-textBase">{{ countdown.days }}</span>
            </div>
            <span class="text-[8px] sm:text-[9px] uppercase tracking-widest text-brand-textMuted">Days</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-[50px] h-[55px] sm:w-[60px] sm:h-[65px] border-[1.5px] border-brand-secondary/60 rounded-[20px] sm:rounded-[24px] flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm transition-transform hover:scale-105 duration-300">
              <span class="font-playfair text-xl sm:text-2xl text-brand-textBase">{{ countdown.hours }}</span>
            </div>
            <span class="text-[8px] sm:text-[9px] uppercase tracking-widest text-brand-textMuted">Hrs</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-[50px] h-[55px] sm:w-[60px] sm:h-[65px] border-[1.5px] border-brand-secondary/60 rounded-[20px] sm:rounded-[24px] flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm transition-transform hover:scale-105 duration-300">
              <span class="font-playfair text-xl sm:text-2xl text-brand-textBase">{{ countdown.minutes }}</span>
            </div>
            <span class="text-[8px] sm:text-[9px] uppercase tracking-widest text-brand-textMuted">Min</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-[50px] h-[55px] sm:w-[60px] sm:h-[65px] border-[1.5px] border-brand-secondary/60 rounded-[20px] sm:rounded-[24px] flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm transition-transform hover:scale-105 duration-300">
              <span class="font-playfair text-xl sm:text-2xl text-brand-textBase">{{ countdown.seconds }}</span>
            </div>
            <span class="text-[8px] sm:text-[9px] uppercase tracking-widest text-brand-textMuted">Sec</span>
          </div>
        </div>
        <img src="/divider.svg" alt="" aria-hidden="true" class="w-[60%] sm:w-[70%] md:w-[80%] max-w-[100px] h-auto opacity-50 mx-auto mt-6 mb-2 pointer-events-none select-none">
      </div>

      <div class="stagger-6 relative z-10 mt-6 w-full flex flex-col items-center">
        <p class="text-[10px] tracking-[0.2em] text-brand-textMuted uppercase mb-6 font-medium text-center">Kindly Confirm Your Presence</p>
        <div class="flex flex-row gap-2 sm:gap-4 w-full justify-center max-w-[380px]">
          <button @click="handleRsvp" class="flex-1 min-w-0 bg-brand-primary text-white font-georgia text-xs sm:text-base py-3 sm:py-3.5 px-3 sm:px-4 rounded-[12px] shadow-lg shadow-brand-primary/20 hover:shadow-btn-hover hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 group whitespace-nowrap cursor-pointer">
            <span>Yes, In Sha Allah!</span>
            <span class="text-lg group-hover:scale-110 transition-transform">🥳</span>
          </button>
          <NuxtLink to="/page-not-coming" class="flex-1 min-w-0 bg-brand-bg text-brand-btnRedText border border-brand-btnRedBorder font-georgia text-xs sm:text-base italic py-3 sm:py-3.5 px-3 sm:px-4 rounded-[12px] hover:bg-red-50/50 transition-colors duration-300 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span>Can't make it</span>
            <span class="text-lg opacity-80">😔</span>
          </NuxtLink>
        </div>
      </div>

      <div class="stagger-7 relative z-10 mt-8 w-full text-center">
        <p class="text-[10px] sm:text-[11px] text-brand-textMuted italic font-light tracking-wide">
          We look forward to celebrating this joyous occasion with you
        </p>
      </div>
      </main>
    </SpotlightCard>
  </div>
</template>
