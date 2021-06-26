<template>
  <div>
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @delete-task="deleteTask" v-bind:tasks="tasks" />
  </div>
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
export default {
  name: "Home", //register components here
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async addTask(task) {
      const resq = await fetch("api/tasks", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(task),
      });

      var data = await resq.json();
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(task) {
      if (confirm(`Delete Task: ${task.text}?`)) {
        const resq = await fetch(`api/tasks/${task.id}`, {
          method: "DELETE",
        });

        resq.status === 200
          ? (this.tasks = this.tasks.filter((x) => x.id !== task.id))
          : alert(`Error deleting task ${task.text}`);
      }
    },
    async getTasks() {
      //populate list on load
      const response = await fetch("api/tasks");

      const data = await response.json();

      return data;
    },
    async getTask(id) {
      const response = await fetch(`api/tasks/${id}`);

      const data = await response.json();

      return data;
    },
  },
  async created() {
    //created is a lifecycle method; similar to ngOnInit
    this.tasks = await this.getTasks();
  },
};
</script>