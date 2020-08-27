<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
    <footer>
      <div>

          <a href="#" @click="openConsent($event)">Cookie settings</a>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    const { redirect } = window.sessionStorage;
    delete window.sessionStorage.redirect;
    if (redirect && redirect !== window.location.href) {
      this.$router.push(redirect);
    }
  },
  methods: {
    openConsent(e) {
      window.CookieConsent.show();
      e.stopPropagation();
      e.preventDefault();
    },
  },
};
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background: lightcyan;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#CybotCookiebotDialogBody {
  max-width: 100% !important;
}

footer {
  padding-bottom: 120px;
}

</style>
