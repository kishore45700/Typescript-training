var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let's create an instance
var myCustomer = new Customer("Kishore", "Muthuraman");
console.log("My name is ".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
