function fibonacci (n) {
  return n <= 1 ? 1 : this.fibonacci(n - 1) + this.fibonacci(n - 2)
}

function getFoo() {
  return "Foo!"
}

class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  fullName() {
    return this.firstName+' '+this.lastName
  }
}

module.exports = {fibonacci,getFoo,Person}
