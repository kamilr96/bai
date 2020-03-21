class Person
{
    constructor(firstname, surname)
    {
        this.firstname = firstname;
        this.surname = surname;
    }

    getFullName()
    {
        return this.firstname + " " + this.surname.toUpperCase();
    }

    getInitials()
    {
        return this.firstname[0].toUpperCase() + '.' + this.surname[0].toUpperCase() + '.';
    }
}

firstperson = new Person("Kamil", "Rąpała");
console.log(firstperson.getFullName());
console.log(firstperson.getInitials());

secondperson = new Person("Jan", "Nowak");
console.log(secondperson.getFullName());
console.log(secondperson.getInitials());

