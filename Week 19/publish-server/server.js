let http = require('http')
let https = require('https');
let unzipper = require('unzipper')
let querystring = require('querystring')

// 2、 auth路由：接受code，用coed+client_id+client_aecret换token


function auth(request, response){
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1])

    getToken(query.code, function(info) {
        console.log('info', info)
        // response.rite(JSON.stringify(info))
        request.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`)
        response.end();
    })
}

function getToken(code, callback) {
    console.log('getToken')
    let request = https.request({
        hostname: 'github.com',
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.f51b4a2cf15d8ada&client_secret=20c1b94a47b8a6670f9ae963370756d5b99dcef8`,
        port: 443,
        method: 'POST',
    }, function(response){
        let body = '';
        response.on('data', chunk => {
            body += chunk.toString();
        })

        request.on('end', () => {
            console.log('getToken-body', body)
            callback(querystring.parse(body))
        })
    })
    request.end();
}


// 3、publish路由： 用token获取用户信息，检查权限，接受发布

function publish(request, response){
    let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1])

    getUser(query.token, info => {
        if (info.name){
            // let outFile = fs.createWriteStream("../../server/public/tmp.zip")
            // request.pipe(outFile)
            request.pipe(unzipper.Extract({ path: '../../server/public/'}))
            request.on('end', function(){
                response.end("Success")
            })
            
        }
    })
}

function getUser(token, callback) {
    console.log('getUser')
    let request = https.request({
        hostname: 'api.github.com',
        path: `/user`,
        port: 443,
        headers: {
            "Authorization": `token ${token}`,
            "User-Agent": "toy-publish-gfl"
        }
    }, function(response){
        let body = '';
        response.on('data', chunk => {
            body += chunk.toString();
        })

        request.on('end', () => {
            // console.log('body', body)
            callback(JSON.parse(body))
        })
    })
    request.end();
}



http.createServer(function(request, response){
    console.log("request")

    if (request.url.match(/^\/auth\?/)){
        auth(request, response);
    }
    if (request.url.match(/^\/publish\?/)){
        publish(request, response);
    }
    

}).listen(8082);