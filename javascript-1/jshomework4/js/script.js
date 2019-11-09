function createNewUser() {
    let name=prompt("Please enter your name : ");
    let surname=prompt("Please enter your surname : ");


    const newUser  = {
        firstName: name,
        lastName: surname,
        getLogin: function () {

            return this.firstName.toLowerCase().substr(0, 1) + this.lastName.toLowerCase();
        }
    };
    return newUser;
};
console.log(createNewUser().getLogin());