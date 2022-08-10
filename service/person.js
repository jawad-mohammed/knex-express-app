const personDAO = require('../DAO/person')


class PersonService {

    createPerson(personDto){
     const {userName,Email,Password} =    personDto
     personDAO.createPerson(userName,Email,Password)
    }
}

module.exports = new PersonService();