# knex-express-app
tested app using knex query builder. Used PostgreSQL,Express. Tested using postman for req.body 
# 1)create a folder routes-> index.js (boilerplate code)
# 2)create model folder model-> db.js ->within this file use this command
# 3) npx knex init 
Created ./knexfile.js ----->(file will be created)
# 4)move this knexfile into db folder
# 5)now change the values as per postgresql within the development object
# 6)update your username and password
# 7)now within db.js file 
initialize knexjs 
# 8)invoke knexjs file within db.js file
# 9) now use this command
const db = knex(knexfile.development)
note : we are invoking knex function and passing knexfile parameters
# 10) export this file
# 11) within terminal, from root directory -> cd to model
# 12)mkdir migrations
# 13)within db folder use this command
npx knex migrate:make init --migrations-directory db/migrations 
# 14) a file will be created withn migrations folder
# 15)within this file  refer this docs
https://knexjs.org/guide/migrations.html#transactions-in-migrations
# 16) create table as per requirements
# 17)within root directory
npx knex migrate:latest --knexfile model/knexfile.js
# 18) we can use this command within scripts 
"scripts":{
"migrate":"npx knex migrate:latest --knexfile model/knexfile.js"
}

# 19)within routes ->index.js 
create CRUD routes

/////to  be continued---







