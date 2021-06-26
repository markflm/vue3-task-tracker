<template>
  <footer v-show="home">
    <router-link to="/info">Info</router-link>
  </footer>
</template>



<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>

<script>
export default {
  computed: {
    home() {
      if (this.$route.path == "/") {
        return true;
      }
      return false;
    },
  },
};
</script>