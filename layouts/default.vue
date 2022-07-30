<template>
  <div>
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
          integrity:
            'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p',
          crossorigin: 'anonymous',
        },
      ],
      link: [
        {
          href: 'https://bootswatch.com/5/zephyr/bootstrap.min.css',
          rel: 'stylesheet',
        },
      ],
    }
  },
}
</script>
