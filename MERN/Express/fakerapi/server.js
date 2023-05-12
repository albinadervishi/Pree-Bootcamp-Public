const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = ()=>{
    const user = {
        id: faker.internet.id(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
      };
      return user;
}

const createCompany = () => {
    const company = {
        id: faker.internet.id(),
        name: faker.company.companyName(),
        address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
        }
    };
    return company;
};

app.get("/api/faker/user/", (req, res) => {
    const fakeUser = createUser()
    users.push(fakeUser)
    res.json( users );
});

app.get("/api/faker/company/", (req, res) => {
    const fakeCompany = createCompany()
    companies.push(fakeCompany)
    res.json( companies );
});

app.get("/api/faker/company/users", (req, res) => {
    const fakeCompany = createCompany()
    companies.push(fakeCompany)
    const fakeUser = createUser()
    users.push(fakeUser)
    res.json( {companies: companies, users: users} );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );