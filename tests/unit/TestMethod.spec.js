import AppVue from "@/App.vue";
import NewTaskVue from "@/components/NewTask.vue"
import TaskListVue from "@/components/TaskList.vue";
import { mount } from "@vue/test-utils"

describe("Test component NewTask", () => {
    it("Khi task nhan du lieu rong", async () => {
        const wrapper = mount(NewTaskVue)
        const spy = jest.spyOn(wrapper.vm, "addNewTask")
        const inputSearch = wrapper.find('input')
        inputSearch.setValue("")
        await wrapper.find('button').trigger('click');
        expect(spy).toBeCalled()
        expect(wrapper.emitted().addNewTask.length).toBe(1)
        expect(wrapper.emitted().addNewTask[0]).toEqual(["Task rong"])
    }),
        it("Khi task nhan du lieu đúng", async () => {
            const wrapper = mount(NewTaskVue)
            const spy = jest.spyOn(wrapper.vm, "addNewTask")
            const inputSearch = wrapper.find('input')
            inputSearch.setValue("đúng")
            await wrapper.find('button').trigger('click');
            expect(spy).toBeCalled()
            expect(wrapper.emitted().addNewTask.length).toBe(1)
            expect(wrapper.emitted().addNewTask[0]).toEqual(["đúng"])
        })

})

describe("Test component TaskList", () => {
    it("Khi task nhan du lieu đúng", () => {
        const wrapper = mount(TaskListVue, {
            props: {
                tasks: [{ text: "abcd" }, { text: "abcdeee" }]
            }
        })
        expect(wrapper.text()).toContain("abcd");
        expect(wrapper.text()).toContain("abcdeee");
    })
})
describe.only("Test Component App", () => {
    it("khi co su kien addNewTask co gia tri",  () => {
        const wrapper = mount(AppVue, {
            data() {
                return {
                    tasks: [{id: 1, text: ''}]
                }
            }
           
        })
        const spy = jest.spyOn(wrapper.vm, "addTask")
        const testSpy = wrapper.vm.addTask("abcd")

        expect(spy).toBeCalled()
        expect(testSpy).toBeCalled()
        expect(wrapper.vm.tasks[1]).toEqual({ id: 2, text: "abcd" })

    })
    it("khi co su kien addNewTask Khong co gia tri",  () => {
        const wrapper = mount(AppVue, {
            data() {
                return {
                    tasks: [{id: 1, text: ''}]
                }
            }
           
        })
        const spy = jest.spyOn(wrapper.vm, "addTask")
        const testSpy = wrapper.vm.addTask("")

        expect(spy).toBeCalled()
        expect(testSpy).toBeCalled()
        expect(wrapper.vm.tasks[1]).toEqual({ id: 2, text: "" })

    })
})
