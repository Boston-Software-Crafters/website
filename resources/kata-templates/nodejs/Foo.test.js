const Foo = require("./Foo");

describe("Basic tests", () => {
  it("is named correctly", () => {
    expect(Foo.getFoo()).toMatch(/Foo/);
  })
})

describe("Fibonacci tests", () => {
  it("computes Fibonacci correctly", () => {
    expect(Foo.fibonacci(0)).toEqual(1);
    expect(Foo.fibonacci(1)).toEqual(1);
    expect(Foo.fibonacci(2)).toEqual(2);
    expect(Foo.fibonacci(3)).toEqual(3);
    expect(Foo.fibonacci(4)).toEqual(5);
  })
  it("computes to 1 for values < 1", () => {
    expect(Foo.fibonacci(-1)).toEqual(1)
  })
})

describe("Full name class Person tests", () => {
  const name = new Foo.Person('John','Smith')
  it("Full name function returns first+last", () => {
    expect(name.fullName()).toEqual('John Smith')
  })
})
