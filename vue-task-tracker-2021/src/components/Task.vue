<template>
  <div class="task">
    <div class="task-title">
      <i
        @click="toggleReminder(task)"
        class="fas fa-flag"
        :class="[task.reminder ? 'reminder' : 'notReminder']"
      ></i>
      <h2>{{ task.text }}</h2>
      <i @click="onDelete(task)" class="fas fa-times"></i>
    </div>
    <p>{{ task.dateTime }}</p>
  </div>
</template>


<script>
export default {
  name: "Task",
  props: {
    task: Object, //datatype of prop
  },
  methods: {
    async toggleReminder(task) {
      task.reminder = !task.reminder;
      await fetch(`api/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
    },
    onDelete(id) {
      console.log(id);
      this.$emit("delete-task", id); //emitting 'custom event' to parent components
    },
  },
  data() {
    return {
      reminderInitialState: this.task.reminder,
    };
  },
};
</script>


<style>
@keyframes reminder-flag {
  from {
    color: black;
  }
  to {
    color: orangered;
  }
}
.task {
  background: #f4f4f4;
  margin: 3px;
  padding: 10px 20px;
  cursor: pointer;
}
.reminder {
  transition: color 0.3s ease-in-out;
  color: orangered !important;
}

.task-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task-title h2 {
  margin-left: 1em;
}

.fa-times {
  color: red;
  margin-left: auto;
}

/* .notReminder {
  color: black;
  transition: color 0.3s ease-in-out;
} */
.fa-flag {
  color: black;
  transition: color 0.3s ease-in-out;
}
</style>