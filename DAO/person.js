const db = require('../db/db');

class PersonDao {
async createPerson(userName,Email,Password){
  const [id]=  await  db('test').insert({
    username:userName,
    email:Email,
    password:Password
   })
   .returning('user_id');
   return id
}

}
module.exports = new PersonDao();