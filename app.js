// javascript server
require('dotenv').config({ path: '.env' })
const http = require("http");

const requestListener = function (req, res) {

    try {

        switch (req.url) {

            case "/":
                res.writeHead(200, { 'Content-Type': 'text/html' }); 
                res.write('<html><body><h1>heading1</h1><p>para text</p></body></html>');
                res.end();
                break;
    
            case "/ping":

                const responseData = {
                    code: "200", 
                    message: "Pong",
                    version: "2022.11.29-1"
                }
                const jsonContent = JSON.stringify(responseData);
        
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(jsonContent);
                res.end();
                break;

            default:
                res.writeHead(404);
                res.end('Invalid Request!');
                break;
        }

    } catch (e) {
        res.end(e.stack); 
    }
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT || process.env.LOCALHOST_PORT, () => {
    console.log(`Server is running...`);
});

