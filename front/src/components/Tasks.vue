<template>
  <div class="list-group">
    <p v-if="tasks.length <= 0">Sem tarefas...</p>
    <div
      class="list-group-item"
      v-for="(task, index) in allTasks"
      v-bind:key="index"
    >
      <span class="comment__author">
        Autor:
        <strong>{{ task.name }}</strong>
      </span>
      <p>{{ task.description }}</p>
      <a
        href="#"
        class="btn btn-success delete"
        v-on:click.prevent="removeTask(index)"
        >Feito</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask(task) {
      this.tasks.push(task);
    },
  },
  computed: {
    allTasks() {
      return this.tasks.map((task) => ({
        ...task,
        name: task.name.trim() === "" ? "Anonimo" : task.name,
      }));
    },
  },
  watch: {
    tasks(val) {
      console.log("val", val);
    },
  },
};
</script>