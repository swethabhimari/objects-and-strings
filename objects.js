// Oject Literals
var a={
    name:"swetha",
    attendance:"89%",
    tasks:"97%",
    seminars:"98%"
}
console.log(a);
//Creating Object with NEW keyword
var b=new Object();
b.name="rakesh",
b.age=16
console.log(b);
// Shorthand of object property
var name="swetha";
var age=16;
var sdetails={name,age};
console.log(sdetails);
//Object Methods
var a={
    name:"S",
    age:16,
    sal:50000
}
console.log(a);
//Object keys()
console.log(Object.keys(a));
//Object values
console.log(Object.values(a));
//Object entries
console.log(Object.entries(a));
