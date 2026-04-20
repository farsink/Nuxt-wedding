<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import '~/assets/css/shiny-text.css'

type Direction = 'left' | 'right'

interface Props {
  text?: string
  disabled?: boolean
  speed?: number
  className?: string
  color?: string
  shineColor?: string
  spread?: number
  yoyo?: boolean
  pauseOnHover?: boolean
  direction?: Direction
  delay?: number
  svgSrc?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  disabled: false,
  speed: 2,
  className: '',
  color: '#b5b5b5',
  shineColor: '#ffffff',
  spread: 120,
  yoyo: false,
  pauseOnHover: false,
  direction: 'left',
  delay: 0,
  svgSrc: '',
  ariaLabel: ''
})

const isPaused = ref(false)
const progress = ref(0)
const isSvgMode = computed(() => Boolean(props.svgSrc))

const animationDuration = computed(() => Math.max(props.speed, 0.1) * 1000)
const delayDuration = computed(() => Math.max(props.delay, 0) * 1000)
const directionSign = computed(() => (props.direction === 'left' ? 1 : -1))

let elapsed = 0
let lastTime: number | null = null
let rafId: number | null = null

const stopAnimation = () => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

const tick = (time: number) => {
  if (props.disabled || isPaused.value) {
    lastTime = null
    rafId = requestAnimationFrame(tick)
    return
  }

  if (lastTime === null) {
    lastTime = time
    rafId = requestAnimationFrame(tick)
    return
  }

  const deltaTime = time - lastTime
  lastTime = time
  elapsed += deltaTime

  if (props.yoyo) {
    const cycle = animationDuration.value + delayDuration.value
    const fullCycle = cycle * 2
    const cycleTime = elapsed % fullCycle

    if (cycleTime < animationDuration.value) {
      const p = (cycleTime / animationDuration.value) * 100
      progress.value = directionSign.value === 1 ? p : 100 - p
    } else if (cycleTime < cycle) {
      progress.value = directionSign.value === 1 ? 100 : 0
    } else if (cycleTime < cycle + animationDuration.value) {
      const reverseTime = cycleTime - cycle
      const p = 100 - (reverseTime / animationDuration.value) * 100
      progress.value = directionSign.value === 1 ? p : 100 - p
    } else {
      progress.value = directionSign.value === 1 ? 0 : 100
    }
  } else {
    const cycle = animationDuration.value + delayDuration.value
    const cycleTime = elapsed % cycle

    if (cycleTime < animationDuration.value) {
      const p = (cycleTime / animationDuration.value) * 100
      progress.value = directionSign.value === 1 ? p : 100 - p
    } else {
      progress.value = directionSign.value === 1 ? 100 : 0
    }
  }

  rafId = requestAnimationFrame(tick)
}

const resetAnimation = () => {
  elapsed = 0
  lastTime = null
  progress.value = 0
}

const handleMouseEnter = () => {
  if (props.pauseOnHover) {
    isPaused.value = true
  }
}

const handleMouseLeave = () => {
  if (props.pauseOnHover) {
    isPaused.value = false
  }
}

const gradientStyle = computed(() => ({
  backgroundImage: `linear-gradient(${props.spread}deg, ${props.color} 0%, ${props.color} 35%, ${props.shineColor} 50%, ${props.color} 65%, ${props.color} 100%)`,
  backgroundPosition: `${150 - progress.value * 2}% center`
}))

const textModeStyle = computed(() => ({
  ...gradientStyle.value,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}))

const svgModeStyle = computed(() => ({
  ...gradientStyle.value,
  WebkitMaskImage: `url(${props.svgSrc})`,
  maskImage: `url(${props.svgSrc})`
}))

const finalStyle = computed(() => (isSvgMode.value ? svgModeStyle.value : textModeStyle.value))

watch(
  () => [props.direction, props.speed, props.delay, props.yoyo, props.disabled],
  () => {
    resetAnimation()
  }
)

onMounted(() => {
  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  stopAnimation()
})
</script>

<template>
  <span
    :class="['shiny-text', isSvgMode ? 'shiny-text--svg' : 'shiny-text--text', props.className]"
    :style="finalStyle"
    :role="isSvgMode ? 'img' : undefined"
    :aria-label="isSvgMode ? props.ariaLabel : undefined"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <template v-if="!isSvgMode">{{ props.text }}</template>
  </span>
</template>
