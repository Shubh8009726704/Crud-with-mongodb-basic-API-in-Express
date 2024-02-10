const dbConnect = require('./connect.js')

const del =async ()=>{
    let db = await dbConnect();
    let result = await db.deleteOne()
    console.log(result)
}

del();