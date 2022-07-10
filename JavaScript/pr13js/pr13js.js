let person = 
{
    firstName: "Denys",
    age: 20,
    sayHello: function (X, Y)
    {
        alert("Hello! My name is " + X + " ,I`m " + Y + "!");
    }
};

person.sayHello(person.firstName, person.age);