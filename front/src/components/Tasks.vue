<template>
  <div class="list-group">
    <p v-if="tasks.length <= 0">Sem tarefas...</p>
    <div
      class="list-group-item"
      v-for="(task, index) in tasks"
      v-bind:key="task.id"
    >
      <span class="comment__author">
        <strong>Título:</strong> {{ task.name }}
      </span>
      <p>{{ task.description }}</p>
      <a
        href="#"
        class="btn btn-success"
        v-if="!task.isDone"
        v-on:click.prevent="updateTask(index, task)"
      >
        Feito
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  methods: {
    updateTask(index, task) {
      fetch(`http://187.49.232.153:3013/tasks/${task.id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((resJson) => console.log(resJson));

      this.tasks.splice(index, 1);
      this.$emit('completed', task)
    },
    addTask(task) {
      this.tasks.push(task);
    },
  }
};
</script>