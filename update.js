const dbConnect = require('./connect.js')

const change =async ()=>{
    let db = await dbConnect();
    let result =await db.updateOne(
        {name:'Deepak'}, {$set:{name:'Manish',mail:'manish@gmail.com'}}
    );
    console.log(result)
}

change()