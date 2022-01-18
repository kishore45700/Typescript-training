//use tsc --init to create the tsconfig.json file
class Customer{



    constructor(private _firstName: string, private _lastName: string){
        
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName=value;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName=value;
    }
}

//let's create an instance
let myCustomer=new Customer("Kishore","Muthuraman");
console.log(`My name is ${myCustomer.firstName} ${myCustomer.lastName}`)