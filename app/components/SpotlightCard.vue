<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/spotlight-card.css'

interface Props {
  className?: string
  spotlightColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  spotlightColor: 'rgba(255, 255, 255, 0.25)'
})

const cardRef = ref<HTMLElement | null>(null)

const handleMouseMove = (event: MouseEvent) => {
  const element = cardRef.value
  if (!element) {
    return
  }

  const rect = element.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  element.style.setProperty('--mouse-x', `${x}px`)
  element.style.setProperty('--mouse-y', `${y}px`)
  element.style.setProperty('--spotlight-color', props.spotlightColor)
}
</script>

<template>
  <div ref="cardRef" :class="['card-spotlight', props.className]" @mousemove="handleMouseMove">
    <slot />
  </div>
</template>
