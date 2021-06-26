<template>
  <div class="container">
    <Header
      @toggle-add-btn="toggleAddBtn"
      title="Task Tracker"
      :showAddTaskBtn="showAddTask"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @delete-task="deleteTask" v-bind:tasks="tasks" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
export default {
  name: "App", //register components here
  components: {
    Header,
    Footer,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
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
    toggleAddBtn() {
      this.showAddTask = !this.showAddTask;
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

<style>
/* #app { //original css created by vue scaffold
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
