class Customer{

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName=theFirst;
        this.lastName=theLast;
    }
}

//let's create an instance
let myCustomer=new Customer("Kishore","Muthuraman");
console.log(`My name is ${myCustomer.firstName} ${myCustomer.lastName}`)