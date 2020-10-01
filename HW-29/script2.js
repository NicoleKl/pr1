class User {
    constructor(name) {
        this.name = name;
    }

    login() {
    }

    logout() {
        console.log("Logout successful");
    }
}

class SuperAdmin extends User {
    constructor(name) {
        super(name);
    }

    login() {
        console.log("Logged in as SuperAdmin")
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
    }

    login() {
        console.log("Logged in as Admin")
    }
}

class Customer extends User {
    constructor(name) {
        super(name);
    }

    login() {
        console.log("Logged in as Customer")
    }
}

const myCustomer = new Customer("Nick");

const myAdmin = new Admin("Andrew");

const mySuperAdmin = new SuperAdmin("John");

console.log(mySuperAdmin instanceof SuperAdmin) // true
console.log(mySuperAdmin instanceof User) // true
console.log(myCustomer instanceof Customer) // true
console.log(myAdmin instanceof Admin) // true

mySuperAdmin.login() // in console - "Logged in as SuperAdmin"
myAdmin.login() // in console - "Logged in as Admin"
myCustomer.login() // in console - "Logged in as Customer"

myCustomer.logout() // in console - "Logout successful"
myAdmin.logout() // in console - "Logout successful"
mySuperAdmin.logout() // in console - "Logout successful"