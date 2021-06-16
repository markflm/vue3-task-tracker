<template>
  <button
    @click="onBtnClick(btnText)"
    v-bind:style="{ background: btnColor }"
    class="btn"
  >
    {{ btnText }}
  </button>
</template>


<script>
export default {
  name: "Button",
  props: {
    btnText: String,
    btnColor: String,
  },
  methods: {
    onBtnClick(btnText) {
      console.log(`button ${btnText} has been clicked`);
    },
  },
};
</script>
