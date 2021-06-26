<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-btn')"
      :btnText="showAddTaskBtn ? 'Close' : 'Add Task'"
      :btnColor="showAddTaskBtn ? 'Red' : 'Blue'"
    />
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
    showAddTaskBtn: Boolean,
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