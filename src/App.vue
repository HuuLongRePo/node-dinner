<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NewTask @addNewTask="addTask"/>
  <TaskList :tasks="tasks" />
</template>

<script>
import NewTask from './components/NewTask.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    NewTask,
    TaskList
}, 
data() {
    return {
      tasks: [],
      // newTask: { id: 1, text: '', isCompleted: false },
      // description: "one task selected"
    }
  },
  methods: {
    addTask(name) {
      this.tasks.push({ id: this.tasks.length + 1, text: name })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
