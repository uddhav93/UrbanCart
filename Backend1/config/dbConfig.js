const mongoose=require('mongoose')

const url=process.env.MONGO_URL
//const url='mongodb+srv://pingleuddhav197_db_user:Test123@cluster0.j9mb3cl.mongodb.net/?appName=Cluster0'

async function connectDb()
{
    try
    {
        await mongoose.connect(url);
        console.log('Database is connected ✔️')
    }
    catch(err)
    {
        console.log('Database is not connected❌')
    }
}
module.exports=connectDb;