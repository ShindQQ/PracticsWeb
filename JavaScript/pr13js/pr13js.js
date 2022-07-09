let person = 
{
    firstName: "Denys",
    age: 20,
    sayHello: function ()
    {
        alert("Hello! My name is " + this.firstName + " ,I`m " + this.age + "!");
    }
};

person.sayHello();