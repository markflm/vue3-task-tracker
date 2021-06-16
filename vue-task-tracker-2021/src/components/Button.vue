<template>
  <button
    @click="onBtnClick()"
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
    onBtnClick() {
      this.$emit("toggle-add-btn");
    },
  },
};
</script>
