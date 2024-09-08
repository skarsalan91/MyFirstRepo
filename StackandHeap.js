let FirstVariable = "test"
let SecondVariable = "test2"

FirstVariable = SecondVariable

console.log(FirstVariable)

console.log(SecondVariable)


//Heap memory example i.e.  changes are made in the orignal value()
let userOne = {
    email : "arsalan.shaikh@gmail.com",
    upiId : "arsalan.shaikh@oksbi"
}
let userTwo = userOne
userTwo.email = "shaikharsalan@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

