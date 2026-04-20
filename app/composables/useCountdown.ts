import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type CountdownValue = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const formatUnit = (value: number) => (value < 10 ? `0${value}` : `${value}`)

export const useCountdown = (targetDate: string) => {
  const targetMs = new Date(targetDate).getTime()
  const value = ref<CountdownValue>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  let timer: ReturnType<typeof setInterval> | null = null

  const update = () => {
    const now = Date.now()
    const distance = targetMs - now

    if (distance <= 0) {
      value.value = { days: '00', hours: '00', minutes: '00', seconds: '00' }
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    value.value = {
      days: formatUnit(days),
      hours: formatUnit(hours),
      minutes: formatUnit(minutes),
      seconds: formatUnit(seconds)
    }
  }

  onMounted(() => {
    update()
    timer = setInterval(update, 1000)
  })

  onBeforeUnmount(() => {
    if (timer) {
      clearInterval(timer)
    }
  })

  return {
    countdown: computed(() => value.value)
  }
}
