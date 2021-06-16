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
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
export default {
  name: "App", //register components here
  components: {
    Header,
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
    addTask(task) {
      console.log(task);
      this.tasks = [...this.tasks, task];
    },
    deleteTask(task) {
      if (confirm(`Delete Task: ${task.text}?`))
        this.tasks = this.tasks.filter((x) => x.id !== task.id);
    },
    toggleAddBtn() {
      this.showAddTask = !this.showAddTask;
    },
  },
  created() {
    //created is a lifecycle method; similar to ngOnInit
    this.tasks = [
      {
        id: 1,
        text: "learn vue",
        dateTime: "March 19th at 1:00PM",
        reminder: true,
      },
      {
        id: 2,
        text: "create app with vue",
        dateTime: "March 21st at 5:00PM",
        reminder: true,
      },
    ];
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
