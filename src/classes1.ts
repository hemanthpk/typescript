class Person
{
    first_name: string;
    last_name: string;
    constructor(first_name:string,last_name:string){
        this.first_name = first_name
        this.last_name = last_name
    }
    getFullName():string{
        return '${this.first_name} ${this.last_name}'
    }
}

const p = new Person("John","Doe")
console.log(p.getFullName())