<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const invitationDescription =
  "You're warmly invited to celebrate Harif and Farsana. Open the wedding link for the date, venue, and full invitation details."


useHead({
  title: 'Wedding invitation for Harif and Farsana',
  meta: [
    { name: 'description', content: invitationDescription },
    { property: 'og:url', content: siteUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Wedding invitation for Harif and Farsana' },
    { property: 'og:description', content: invitationDescription },
    { property: 'og:image', content: `${siteUrl}/opengraph.webp` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: new URL(siteUrl).hostname },
    { property: 'twitter:url', content: siteUrl },
    { name: 'twitter:title', content: 'Wedding invitation for Harif and Farsana' },
    { name: 'twitter:description', content: invitationDescription },
    { name: 'twitter:image', content: `${siteUrl}/opengraph.webp` }
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
