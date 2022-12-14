import NewTaskVue from "@/components/NewTask.vue"
import { mount } from "@vue/test-utils"

describe("Test thêm công việc", () => {
    test("Ví dụ 1. test khi click button thì hàm addNewTask có được gọi không", async () => {
        const wrapper = mount(NewTaskVue);
        const spy = jest.spyOn(wrapper.vm, "addNewTask");

        const input = wrapper.find("input");
        await input.setValue("write unit test nvcuong1");
      //  await wrapper.find("button").trigger("click"); //lần đầu emit ra giá trị new task
        wrapper.vm.addNewTask();
        expect(spy).toBeCalled();
    })
    test("Ví dụ 2. test ham addNewTask khi gia tri newTaskText khong co", async () => {
        const wrapper = mount(NewTaskVue);

        const spy = jest.spyOn(wrapper.vm, "inValidTask");
        // const spyOn1 = jest.spyOn(wrapper.vm, "checkIsNullTask");

        // act
        wrapper.setData({ newTaskText: "" });
        await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task

        expect(spy).toBeCalled();
        // expect(wrapper.vm.checkIsNullTask).toBeCalled();
    });
    test("Ví dụ 3.test ham addNewTask co giá trị", async () => {
        const wrapper = mount(NewTaskVue);
    
        const spy = jest.spyOn(wrapper.vm, "emitTask");
        const spyOn1 = jest.spyOn(wrapper.vm, "checkIsNullTask");
    
        // wrapper.vm.checkIsNullTask = jest.fn(() => {
        //   return true;
        // });
    
        wrapper.vm.newTaskText = "";
    
        // act
        // wrapper.vm.emitTask = jest.fn(() => {
        //   wrapper.vm.$emit("addNewTask", wrapper.vm.newTaskText);
        //   wrapper.vm.newTaskText = "nvcuong9";
        // });
    
        await wrapper.find("button").trigger("click"); // lần đầu emit ra giá trị new task
        expect(spyOn1).toBeCalled();
       // expect(wrapper.vm.newTaskText).toEqual("nvcuong9");
      });
    

})