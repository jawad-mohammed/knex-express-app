//import the file from service 
const servicePerson = require('../service/person')
class PersonController {
async createPerson(req,res){
try {
    const id = await servicePerson.createPerson(req.body);
      res.status(201).json({msg:"created"}) 
                      
} catch (error) {
    console.log(error);
    res.status(401).json(`error`)
}
}



}
module.exports = new PersonController()