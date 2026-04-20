<script setup lang="ts">
useHead({
  title: 'Wedding invitation for Sijil and Rinsha',
  meta: [
    {
      name: 'description',
      content:
        "You're warmly invited to celebrate Sijil and Rinsha. Open the wedding link for the date, venue, and full invitation details."
    },
    { property: 'og:url', content: 'https://sijil-weds-rinsha.netlify.app/' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Wedding invitation for Sijil and Rinsha' },
    {
      property: 'og:description',
      content:
        "You're warmly invited to celebrate Sijil and Rinsha. Open the wedding link for the date, venue, and full invitation details."
    },
    {
      property: 'og:image',
      content: 'https://sijil-weds-rinsha.netlify.app/opengraph.webp'
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'sijil-weds-rinsha.netlify.app' },
    { property: 'twitter:url', content: 'https://sijil-weds-rinsha.netlify.app/' },
    { name: 'twitter:title', content: 'Wedding invitation for Sijil and Rinsha' },
    {
      name: 'twitter:description',
      content:
        "You're warmly invited to celebrate Sijil and Rinsha. Open the wedding link for the date, venue, and full invitation details."
    },
    {
      name: 'twitter:image',
      content: 'https://sijil-weds-rinsha.netlify.app/opengraph.webp'
    }
  ],
  link: [{ rel: 'canonical', href: 'https://sijil-weds-rinsha.netlify.app/' }]
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
