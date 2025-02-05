// 데이터 처리

let http = require('http');
let url = require('url');

function start(route, handle) {  // 서버 시작
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname; // server 시작과 함께 전달받은 route 명을 pathname에 저장, 그후 pathname을 router.js로 전달
        route(pathname, handle, response);
    }
    
    http.createServer(onRequest).listen(8888);
}

exports.start = start; // 다른 파일에서 start 함수명을 호출하여 server.js의 start 함수를 사용할 수 있도록 함.