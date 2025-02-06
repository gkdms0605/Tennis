const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'utf-8');
const orderlist_view = fs.readFileSync('./orderlist.html', 'utf-8');

const mariaDB = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    mariaDB.query("SELECT * FROM product", function(err, rows){
        console.log(rows);
    })

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(main_view);
    response.end();
}

function orderlist(response){
    console.log('orderlist');

    mariaDB.query("select * from orderlist", function(err, rows){
        response.write(orderlist_view);

        rows.forEach(element => {
            response.write(
                "<tr>"
                + "<td>" + element.product_id + "</td>"
                + "<td>" + element.order_date + "</td>"
                + "</tr>" );
        });

        response.write("</table>");
    })
}

function redRacket(response){
    fs.readFile('./img/redRacket.png', function(err, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}

function blueRacket(response){
    fs.readFile('./img/blueRacket.png', function(err, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}

function blackRacket(response){
    fs.readFile('./img/blackRacket.png', function(err, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}

function order(response, productId){
    response.writeHead(200, {'Content-Type' : 'text/html'});

    mariaDB.query("insert into orderlist values (" + productId + ", '"+ new Date().toLocaleDateString() + "');", function(err, rows){
        console.log(rows);
    })

    response.write('order page');
    response.end();
}

let handle = {}; // key:value 쌍으로 이루어진 변수
handle['/'] = main;
handle['/order'] = order;
handle['/orderlist'] = orderlist;

// img 경로
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;


exports.handle = handle;












// function login(response) {
//     console.log('login');

//     response.writeHead(200, {'Content-Type' : 'text/html'});
//     response.write('Login Page');
//     response.end();
// }
// handle['/login'] = login;