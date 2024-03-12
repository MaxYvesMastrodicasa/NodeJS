import http from 'http';
import fs from 'fs';

const server = http.createServer( (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/"){
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
            );
        res.write("</html>");
        return res.end();
    }
    if(url === "/message" && method === "POST"){
        fs.writeFileSync("message.txt", "DUMMY");
        res.statusCode = 302;
        res.setHeader("Location", '/');
        return res.end();
    }
})

// le serveur écoute sur le port 3000 : http://localhost:3000
server.listen(4000)