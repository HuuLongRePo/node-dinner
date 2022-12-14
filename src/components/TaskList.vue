<template>
    <div class="task-list">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
    </div>
</template>
<script>
import TaskItem from './TaskItem.vue';


export default {
    props: ['tasks'],
    components: { TaskItem },
    mounted() {
        console.log(this.tasks);
    }
}
</script>

<style scoped>
.task-list {
    width: 50%;
    margin-top: 30px;
}
</style>