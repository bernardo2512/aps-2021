<template>
  <div class="container">
    <h1>Todo-list</h1>
    <hr />

    <Form v-on:add-task="addTask" :tasks="tasks"></Form>

    <Tasks :tasks="tasks" v-on:completed="addCompleted" />
    <hr />

    <h1>Concluidas</h1>
    <Tasks :tasks="completedTasks" />
  </div>
</template>

<script>
import Form from "./components/Form";
import Tasks from "./components/Tasks.vue";

export default {
  name: "app",
  components: {
    Form,
    Tasks,
  },
  data() {
    return {
      tasks: [],
      completedTasks: [],
    };
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask(task) {
      this.tasks.push(task);
    },
    addCompleted(task) {
      task.isDone = true;
      this.completedTasks.push(task);
    },
  },
  mounted() {
    fetch("http://187.18.37.190:3013/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        for (let i = 0; i < resJson.length; i++) {
          if (resJson[i].isDone === true) {
            this.completedTasks.push(resJson[i]);
          } else {
            this.tasks.push(resJson[i]);
          }
        }
      });
  },
};
</script>

