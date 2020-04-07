<template>
  <div>
    <nuxt />
    <app-github-corner />
  </div>
</template>

<script>
import AppGithubCorner from "@/components/AppGithubCorner.vue";

export default {
  components: {
    AppGithubCorner,
  },
};
</script>

<style lang="scss">
html {
  font-family: "Sen", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button {
  cursor: pointer;
  transition: 0.1s all ease;
  &:hover {
    transform: translateY(10px);
    transition: 0.2s all ease;
  }
}
</style>
