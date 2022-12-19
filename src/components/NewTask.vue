<template>
    <div class="wrap-input">
        <!-- <MsInput :input="newTaskText" @valueChange="changeValueInput"></MsInput> -->
        <input v-model="task" />

        <button class="wrap-button" data-test="add-task" @click="addNewTask()">
            Thêm mới
        </button>
    </div>
</template>
  
<script>
export default {
    name: "NewTask",

    data() {
        return {
            task: '',
            newTaskText: "",
        };
    },
    computed: {
        isNullTask() {
            return !this.task || this.task.trim() == ""
        }
    },
    methods: {
        addNewTask() {
            if (this.isNullTask) {
                this.$emit("addNewTask", 'Task rong');
            } else {
                this.$emit("addNewTask", this.task);
            }
            this.task = ''
        }
    },
};
</script>
  
<style scoped>
.wrap-input {
    height: 32px;
    width: 50%;
    display: flex;
    align-items: center;
    max-width: 600px;
}

.input-task {
    height: 100%;
    flex-grow: 1;
    margin-right: 16px;
    border-radius: 8px;
    padding: 0px 8px;
    border: 1px solid #000;
}

.wrap-button {
    height: 100%;
    cursor: pointer;
    padding: 0px 16px;
    background: #3085d6;
    border: unset;
    border-radius: 8px;
    color: red;
    font-weight: bold;
}
</style>