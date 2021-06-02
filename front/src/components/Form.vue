<template>
  <div class="form-group">
    <p>
      <input
        placeholder="Título"
        type="text"
        name="author"
        class="form-control"
        v-model="name"
      />
    </p>

    <p>
      <textarea
        name="description"
        class="form-control"
        placeholder="Descrição"
        v-model="description"
      ></textarea>
    </p>

    <button class="btn btn-primary" @click="addTask">
      Adicionar Tarefa
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: ""
    };
  },
  props: {
    tasks: Array
  },
  methods: {
    addTask() {
      const isEqual = this.tasks.find(task => {
        return this.name.toLowerCase() === task.name.toLowerCase()
      });

      if (isEqual || this.name.trim() === '' || this.description.trim() === '') {
        window.alert('Erro ao adicionar a tarefa.');
        return;
      }

      fetch("http://187.18.37.190:3013/tasks", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          description: this.description
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
        .then(res => res.json())
        .then(resJson => {
          this.$emit("add-task", {
            name: resJson.name,
            description: resJson.description,
            id: resJson.id,
            isDone: resJson.isDone
          });
        })
        .catch(err => console.log(err));

      this.name = "";
      this.description = "";
    },
  },
};
</script>