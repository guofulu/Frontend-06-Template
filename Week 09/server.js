const http = require('http')

http.createServer((request, response) => {
    let body = []
    request.on('err', (err) => {
        console.error(err)
    }).on('data', (chunk) => {
        console.log('chunk', chunk)
        body.push(chunk.toString());
    }).on('end', () => {
        console.log('body-', body, Buffer);
        // body = Buffer.concat(body).toString();
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(
            `<html maaa=a >
<head>
    <style>
body div #myid{
    width:100px;
    background-color: #ff5000;
}

div .red {
    background: #ff5000;
}
    </style>
</head>
<body>
    <div>
        <img id="myid"/>
        <img class="star red" />
    </div>
</body>
</html>`);
    })
}).listen(8088)

console.log('server Started')