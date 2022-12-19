function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);


describe("test mock", () => {
    it("1", async () => {
        // The mock function is called twice
        console.log(mockCallback.mock.calls.length);
        expect(mockCallback.mock.calls.length).toBe(2);
    });
    it("1", async () => {
        // The first argument of the first call to the function was 0
        console.log(mockCallback.mock.calls.length);
        expect(mockCallback.mock.calls[0][0]).toBe(0);
    });
    it("1", async () => {
        // The first argument of the second call to the function was 1
        console.log(mockCallback.mock.calls.length);
        expect(mockCallback.mock.calls[1][0]).toBe(1);
    });
    it("1", async () => {

        // The return value of the first call to the function was 42
        console.log(mockCallback.mock.calls.length);
        expect(mockCallback.mock.results[0].value).toBe(42);
    });
})

describe("test mock", () => {
    const myMock1 = jest.fn();
    const a = new myMock1();
    console.log(myMock1.mock.instances);
    // > [ <a> ]

    const myMock2 = jest.fn();
    const b = {};
    const bound = myMock2.bind(b);
    bound();
    console.log(myMock2.mock.contexts);
    // > [ <b> ]
    // The function was called exactly once

    it("1", async () => {
        expect(myMock1.mock.calls.length).toBe(1);
    });

})
