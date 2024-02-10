const dbConnect = require('./connect.js')

const store = async ()=>{
    let db = await dbConnect();
    let result =await db.insertOne(
       { name:'yuvraj',mail : 'yuvi@gmail.com',address:'chattisgarh'})
    
       if(result.acknowledged){
        console.log('inserted data successfully')
    }
}

store()