import http from 'http';
import app from './app.js';

let port = 5000;
let server = http.createServer(app);

server.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Server is running on port no ${port}...!`);
});