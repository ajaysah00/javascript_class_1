const user = {
    username: "Ajay",
    email: "ajay@12.com",
    age: 22,
    isAdmin: false,
    isLoggedIn: true,
    tea: ["leamon", "ginger", "coffe0"],
    adress:{
        district: "Siraha",
        City: "Mirchaiya"
    }
}


console.log(user["username"]);
console.log(user.username);
console.log(user.adress.City);
console.log(user)
delete user.isAdmin
const userListfromDatabase = [{}, {}, {}];
// console.log(user.keyboard);
console.log(user.hasOwnproperty('tea'));
console.log(Object.entries(user));
