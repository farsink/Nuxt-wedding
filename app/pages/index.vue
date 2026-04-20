<script setup lang="ts">
import { useCountdown } from '~/composables/useCountdown'

useHead({
  title: 'Muhammed Sijil K & Rinsha K - Wedding Invitation'
})

const { countdown } = useCountdown('May 17, 2026 11:30:00')
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
      class-name="w-full max-w-[540px] h-[88vh] max-h-[760px] border border-white/50 flex flex-col items-center text-center scale-content transition-all duration-500"
      spotlight-color="rgba(107, 142, 107, 0.18)"
    >
      <main class="relative w-full h-full overflow-y-auto scrollbar-hide px-6 sm:px-12 py-12 sm:py-16 flex flex-col items-center">
        <div class="bg-leaves-tl" />
        <div class="bg-leaves-br" />

      <div class="stagger-1 flex flex-col items-center w-full">
        <img src="/image.svg" alt="Bismillah" class="w-40 sm:w-38 mb-0 opacity-80">
        <p class="text-[12px] sm:text-[14px] text-brand-textMuted tracking-wide font-light uppercase mt-2">
          IN THE NAME OF ALLAH
          <br>
          THE MOST GRACIOUS & THE MOST MERCIFUL
        </p>
        <div class="tiny-diamond w-full" />
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

      <div class="stagger-2 mt-8 mb-6 relative w-full flex flex-col items-center z-10">
        <div class="flex items-center justify-center gap-4 sm:gap-6 w-full">
          <h1 class="font-vibes text-4xl sm:text-5xl text-brand-primary drop-shadow-sm -rotate-1">Muhammed Sijil K</h1>
          <span class="text-brand-secondary text-sm sm:text-base opacity-70 animate-pulse pb-2">
            <i class="ph-fill ph-heart" />
          </span>
          <h1 class="font-vibes text-4xl sm:text-5xl text-brand-primary drop-shadow-sm rotate-1">Rinsha K</h1>
        </div>
        <div class="flex items-center justify-center gap-6 sm:gap-12 w-full mt-4 text-[11px] sm:text-[13px] text-brand-textBase italic text-center">
          <p>Grand S/O Late Moiduppu Kodassery<br>&amp; Mrs. Fathima</p>
          <p>D/O Mr. Abdul Razak Master<br>&amp; Mrs. Kamarulnisa</p>
        </div>
      </div>

      <div class="stagger-3 mt-4 w-full flex justify-center">
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

      <div class="stagger-4 mt-8 w-full">
        <div class="tiny-diamond w-full mt-0 mb-6" />
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

      <div class="stagger-5 mt-10 w-full">
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
        <div class="tiny-diamond w-full mt-6 mb-2" />
      </div>

      <div class="stagger-6 mt-6 w-full flex flex-col items-center">
        <p class="text-[10px] tracking-[0.2em] text-brand-textMuted uppercase mb-6 font-medium text-center">Kindly Confirm Your Presence</p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center max-w-[380px]">
          <NuxtLink to="/page-2" class="flex-1 bg-brand-primary text-white font-georgia text-sm sm:text-base py-3 sm:py-3.5 px-4 rounded-[12px] shadow-lg shadow-brand-primary/20 hover:shadow-btn-hover hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
            <span>Yes, In Sha Allah!</span>
            <span class="text-lg group-hover:scale-110 transition-transform">🥳</span>
          </NuxtLink>
          <NuxtLink to="/page-2" class="flex-1 bg-brand-bg text-brand-btnRedText border border-brand-btnRedBorder font-georgia text-sm sm:text-base italic py-3 sm:py-3.5 px-4 rounded-[12px] hover:bg-red-50/50 transition-colors duration-300 flex items-center justify-center gap-2">
            <span>Can't make it</span>
            <span class="text-lg opacity-80">😔</span>
          </NuxtLink>
        </div>
      </div>

      <div class="stagger-7 mt-8 w-full text-center">
        <p class="text-[10px] sm:text-[11px] text-brand-textMuted italic font-light tracking-wide">
          We look forward to celebrating this joyous occasion with you
        </p>
      </div>
      </main>
    </SpotlightCard>
  </div>
</template>
