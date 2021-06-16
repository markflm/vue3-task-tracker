<template>
  <div>
    <!-- div above to bypass "v-for not allowed in template root element" warning from linter -->
    <div :key="member.id" v-for="member in tasks">
      <Task @delete-task="$emit('delete-task', member)" :task="member" />
    </div>
  </div>
</template>

<script>
import Task from "./Task";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task"],
};
</script>