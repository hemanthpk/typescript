interface f {
    name : string,
    age : number
}

interface f1 extends f {
    address : string
}

let p : f1 = {
    name : "something",
    age : 456,
    address : "someOtherThing",
}
console.log(p.name+" "+p.age+" "+p.address+" ")