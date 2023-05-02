const express = require("express");
const { faker } = require('@faker-js/faker');
const app =express();

const createUser = () => {
    const newUser = {
        _id:faker.database.collation(),
        firstName: faker.name.firstName(),
        lastName:faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber:faker.phone.number,
        password:faker.internet.password

    };
    return newUser;
};
    

const createCompany = () => {
    const newCompany = {
        _id:faker.database.collation(),
        name: faker.company.name(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()

        }
    };
    return newCompany;
};
const newUser = createUser();
const newCompany = createCompany();

app.get("/api/users/new", (req, res) => {
    res.json( newUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json( newCompany);
});

app.get("/api/user/company", (req, res) => {
    res.json([newUser,newCompany]);
});
    






















const port = 8000;
app.listen(port,() => console.log(`Listening on port: ${port}`));