const mongoose  = require('mongoose')

require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log('DB Connection success'))
    .catch((error)=>{onsole.log('Issue in db connection')
    console.log('error.message')
    process.exit(1)
        }
    )
}

module.exports = dbConnect;