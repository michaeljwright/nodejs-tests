
const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    var htmlBody = '<p>Page not found</p>';

    if (url === '/') {

        htmlBody = '<h1>hello this is cluster</h1>';

    }

    if (url === '/' && method === 'POST') {

        const body = [];
        req.on('data', (chuck) => {
            console.log(chuck);
            body.push(chuck);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.writeHead(302, { 'Location': '/' });
            res.end();
        });

    }

    if (url === '/users') {

        const users = ['Mike', 'Ian', 'Dave', 'Hemm', 'Bahi'];
        htmlBody = '<ul>';

        for(var user of users) {
            htmlBody += '<li>' + user + '</li>';
        }

        htmlBody += '</ul>';

    }

    if (url === '/create-user') {

        htmlBody = '<form action="/" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>';
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Test page</title></head>');
    res.write('<body>');
    res.write(htmlBody);
    res.write('</body>');
    res.write('</html>');
    res.end();

};

module.exports = {
    handler: requestHandler
};
