<template>
  <div class="home">
    <h1>CPM</h1>
    <div id="CookieDeclaration"></div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  mounted() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://consent.cookiebot.com/d83dbe81-af22-45e4-9b02-e87100e76d4e/cd.js';
    document.head.appendChild(script);
  },
};
</script>

<style>
.home {
  min-height: 100vh;
}
</style>
