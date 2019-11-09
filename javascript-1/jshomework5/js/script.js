function createNewUser() {
    let name=prompt("Please enter your name : ");
    let surname=prompt("Please enter your surname : ");
    let birthday=prompt(`Please enter your birthday : dd.mm.yyyy`);
    const date= new Date();
    const newUser  = {
        firstName: name,
        lastName: surname,
        getAge :  function () {
            return   parseInt(date.getFullYear())-parseInt(birthday.split('.').pop());
        },
        getPassword : function () {
            return  this.firstName.toUpperCase().substr(0, 1) + this.lastName.toLowerCase()+birthday.split('.').pop();
        }

    }
    return newUser;
};
console.log(createNewUser().getPassword());
console.log(createNewUser().getAge());