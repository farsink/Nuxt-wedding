<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl

useHead({
  title: 'Wedding invitation for Mohammed Shihas and Nasniya Varda',
  meta: [
    {
      name: 'description',
      content:
        "You're warmly invited to celebrate Mohammed Shihas and Nasniya Varda. Open the wedding link for the date, venue, and full invitation details."
    },
    { property: 'og:url', content: siteUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Wedding invitation for Mohammed Shihas and Nasniya Varda' },
    {
      property: 'og:description',
      content:
        "You're warmly invited to celebrate Mohammed Shihas and Nasniya Varda. Open the wedding link for the date, venue, and full invitation details."
    },
    {
      property: 'og:image',
      content: `${siteUrl}/opengraph.webp`
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: new URL(siteUrl).hostname },
    { property: 'twitter:url', content: siteUrl },
    { name: 'twitter:title', content: 'Wedding invitation for Mohammed Shihas and Nasniya Varda' },
    {
      name: 'twitter:description',
      content:
        "You're warmly invited to celebrate Mohammed Shihas and Nasniya Varda. Open the wedding link for the date, venue, and full invitation details."
    },
    {
      name: 'twitter:image',
      content: `${siteUrl}/opengraph.webp`
    }
  ],
  link: [{ rel: 'canonical', href: siteUrl }]
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
