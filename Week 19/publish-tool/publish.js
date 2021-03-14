let http = require('http');
let fs = require('fs');
let archiver = require('archiver');
let child_process = require('child_process');
let querystring = require('querystring')


// 1、 打开 https://github.com/login/oauth/authorize

child_process.exec(`start https://github.com/login/oauth/authorize?client_id=Iv1.f51b4a2cf15d8ada`)



// 4、 创建server， 接受token，后点击发布

http.createServer(function(request, response){
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1])

    publish(query.token)

}).listen(8083);

function publish(token){
    let request = http.request({
        hostname: '127.0.0.1',
        port: 8082,
        method: 'POST',
        path: "/publish?token=" + token,
        headers: {
            "Content-Type": 'application/octet-straem',
            // "Content-Length": stats.size
        }
    }, response => {
        console.log(response)
    })
    
    // let file = fs.createReadStream("./sample.html")
    
    
    const archive = archiver('zip', {
        zlib: { level: 9 }
    })
    
    archive.directory('./sample/', false)
    
    archive.finalize();
    
    archive.pipe(request)
}
