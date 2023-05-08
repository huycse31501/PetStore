
const myObjectProto = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
};
  
function myObject(name) {
    this.name = name;
}
Object.assign(myObject.prototype, myObjectProto)


let test1 = new myObject("Huy1")
let test2 = new myObject("Huy2")

test1.__proto__.greet()

test1.__proto__.greet = function () {
    console.log("I change because proto of me change")
}

test2.__proto__.greet()

console.log(test1.__proto__ === test2.__proto__)