import MsInputVue from "@/components/MsInput.vue";
import NewTaskVue from "@/components/NewTask.vue"
import TaskListVue from "@/components/TaskList.vue";
import { mount, shallowMount } from "@vue/test-utils"
import { nextTick } from "vue";

describe("Test component NewTask", () => {

    test("Ví dụ 1. test hàm addNewTask khi gia tri newTaskText khong co", async () => {
        const wrapper = mount(NewTaskVue);
        const spy = jest.spyOn(wrapper.vm, "inValidTask");
        const spyOn1 = jest.spyOn(wrapper.vm, "checkIsNullTask");

        // act
        // wrapper.setData({ newTaskText: "" });
        const input = wrapper.find("input");
        await input.setValue("");
        await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task

        expect(spy).toBeCalled();
        expect(spyOn1).toBeCalled();
        // expect(wrapper.vm.checkIsNullTask).toBeCalled();
    });
    test("Ví dụ 2.test hàm addNewTask có giá trị", async () => {
        const wrapper = mount(NewTaskVue);

        const spy = jest.spyOn(wrapper.vm, "emitTask");
        const spyOn1 = jest.spyOn(wrapper.vm, "checkIsNullTask");

        // wrapper.vm.checkIsNullTask = jest.fn(() => {
        //   return true;
        // });
        const input = wrapper.find("input");
        await input.setValue("test hàm addNewTask có giá trị");

        // wrapper.setData({ newTaskText: "" });
        await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task
        // wrapper.vm.newTaskText = "test hàm addNewTask có giá trị";
        // nextTick
        // act
        // wrapper.vm.emitTask = jest.fn(() => {
        //   wrapper.vm.$emit("addNewTask", wrapper.vm.newTaskText);
        //   wrapper.vm.newTaskText = "nvcuong9";
        // });

        // await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task
        expect(spyOn1).toBeCalled();
        expect(spy).toBeCalled();
        expect(wrapper.vm.newTaskText).toBe("");
    });


})
