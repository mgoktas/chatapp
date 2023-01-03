var fs = require('fs');
const Sequelize = require('sequelize');

const config = {
    db: {
                },
        email: {
            
        }

}

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  
})

async function connect(){
    try {
        await sequelize.authenticate()
        console.log('mysql sequelize connected')
    }
    catch(err){
        console.log('error' , err)
    }
}

connect()

module.exports = sequelize
