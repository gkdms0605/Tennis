// 페이지 호출, 서버 시작만 담당

let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler');

const mariaDB = require('./database/connect/mariadb');
mariaDB.connect();

server.start(router.route, requestHandler.handle); // 서버 시작과 함께 현재 url 정보를 server.js의 start 함수로 전달