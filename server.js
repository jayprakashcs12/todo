import http from 'http'
import app from './app.js';


let PORT=5000;

let server=http.createServer(app)


server.listen(PORT,(error)=>{
    if(error)console.log(error);
    console.log(`Server is running on port ${PORT}...`);
})