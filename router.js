// route 처리

function route(pathname, handle, response, productId) { // 전달받은 pathname의 데이터값을 console.log로 출력
    console.log(pathname);

    if(typeof handle[pathname] == 'function') {
        handle[pathname](response, productId);
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('404 error');
        response.end();
    }
}

exports.route = route;