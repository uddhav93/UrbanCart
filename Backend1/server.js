require('dotenv').config({path:`./${process.env.NODE_ENV}.env`,quiet:true})
const server=require('./app')
const connectDb=require('./config/dbConfig');
connectDb();
console.log(process.env.NODE_ENV)
const port=process.env.PORT;
server.listen(port,(err)=>{
    if(err) throw err
    console.log(`the server is running http://localhost:${port}`);
})
