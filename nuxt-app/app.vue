<template>
  <a
    v-if="previewEnabled && !inFrame"
    :href="`/preview/disable?redirect=${route.fullPath}`"
    class="preview-toggle"
  >
    <span>Preview Enabled</span>
    <span>Disable Preview</span>
  </a>

  <div class="container">
    <header class="header">
      <a class="header__title" href="/">Patrick Leckey</a>
      <div class="header__social-container">
        <a class="header__social" href="https://linkedin.com/in/patrickleckey" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>
        <a class="header__social" href="/pleckey-cv.pdf" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2z"/>
          </svg>
        </a>
        <!-- <a class="header__social" href="https://bsky.app/profile/pleckey.me" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.002 2L9.99 4.55l-1.824-.664L6.5 7h1.675l-3.138 5.113.947 1.432L10.002 9l3.018 4.545.947-1.432L10.829 7h1.673l-1.666-3.114L9.012 4.55 7 2h5.002zm-1.43 7.495l-2.694 4.07-.437-.662L9.41 9.5H7.244l1.107-2.087 1.245.453L12 4.771l2.404 3.095 1.245-.453L16.756 9.5h-2.166l1.969 3.403-.437.662-2.694-4.07L12 11.729l-1.428-2.234z"/>
          </svg>
        </a> -->
      </div>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="footer">
      <p class="footer__text">
        Made with
        <svg
          data-sanity-icon="heart-filled"
          width="1em"
          height="1em"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.2"
          ></path>
        </svg>
        using Nuxt and Sanity.io
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState()
</script>

<style>
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 20px;
  --space-5: 32px;
  --space-6: 52px;
  --space-7: 84px;
  --space-8: 136px;
  --space-9: 220px;

  --font-family-sans: Outfit;
  --font-family-serif: PT Serif;
  --font-family-mono: IBM Plex Mono;

  --font-size-0: 12px;
  --font-size-1: 14px;
  --font-size-2: 16px;
  --font-size-3: 18px;
  --font-size-4: 20px;
  --font-size-5: 24px;
  --font-size-6: 30px;
  --font-size-7: 36px;
  --font-size-8: 48px;
  --font-size-9: 60px;
  --font-size-10: 72px;

  --line-height-0: 16px;
  --line-height-1: 20px;
  --line-height-2: 24px;
  --line-height-3: 28px;
  --line-height-4: 28px;
  --line-height-5: 32px;
  --line-height-6: 36px;
  --line-height-7: 40px;
  --line-height-8: 48px;
  --line-height-9: 60px;
  --line-height-10: 72px;
  --line-height-11: 96px;
  --line-height-12: 128px;

  --white: #fff;
  --black: #101112;
  --background: #242a30;
  --text: #f0e6dc;
  --highlight: #819a9d;
  --gray-200: #ced2d9;
  --gray-600: #6e7683;
  --blue-600: #1e61cd;
  --magenta-100: #f9d7eb;

  --max-width-0: 320px;
  --max-width-1: 768px;
}

html {
  background-color: var(--background);
  font-family: var(--font-family-sans), var(--font-family-serif), sans-serif;
  text-size-adjust: 100%;
  color: var(--text);
}

body {
  margin: 0;
}
</style>

<style scoped>
.container {
  margin: 0 auto;
}

main {
  margin-top: 45px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-1);
  border-bottom: 1px solid var(--highlight);

  z-index: 10;
  background: var(--background);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  & .header__title {
    font-weight: 800;
    font-size: var(--font-size-3);
    line-height: var(--line-height-1);
    padding-left: var(--space-2);
    margin: var(--space-3) 0;
    text-decoration: none;
    color: var(--text);
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 var(--space-3);

  & .footer__text {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    display: flex;
    align-items: center;
    gap: 2px;
  }
}

@media (min-width: 575px) {
  .container {
    max-width: var(--max-width-1);
    padding: 0 var(--space-4);
  }

  main {
    margin-top: unset;
  }

  .header {
    position: unset;
    border-bottom: none;
    margin: var(--space-3) 0;
    padding: var(--space-2) 0;
    background: unset;

    & .header__title {
      margin: var(--space-3) 0 var(--space-2);
      font-size: var(--font-size-5);
    }
  }

  .footer {
    margin: var(--space-3) 0;
  }
}

.preview-toggle {
  backdrop-filter: blur(12px);
  border-radius: 0.25rem;
  bottom: 1rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  color: #1f2937;
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  position: fixed;
  right: 1rem;
  text-align: center;
  text-decoration: none;
  z-index: 50;
}

.preview-toggle:hover {
  background-color: #ef4444;
  color: #ffffff;
}

.preview-toggle span:first-child {
  display: block;
}
.preview-toggle:hover span:first-child {
  display: none;
}

.preview-toggle span:last-child {
  display: none;
}
.preview-toggle:hover span:last-child {
  display: block;
}

.header__social-container {
  display: flex;
  gap: var(--space-2);
  align-items: center;
}

.header__social {
  color: var(--text);
}

.header__social:hover {
  color: var(--highlight);
}
</style>
