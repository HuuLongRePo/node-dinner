
<template>
    <div v-for="(task, index) in tasksNew" :key="index" class="task-item">
        <input type="checkbox" class="task-checkbox">
        <div>{{ task.text }}</div>
    </div>
</template>
  
<script>
export default {
    props: {
        tasks: []
    },
    data() {
        return {
            newdata: this.tasks
        }
    },
    computed: {
        tasksNew() {
            return this.newdata 
        }
    }
}
</script>