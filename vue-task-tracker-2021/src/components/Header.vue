<template>
  <header>
    <h1>{{ title }}</h1>
    <Button btnText="Add Task" btnColor="blue" />
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "Header",
  props: {
    title: {
      //properties on title prop optional
      type: String,
      default: "Default Title", //if no prop passed, this is the value of title
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>