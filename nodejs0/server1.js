
var httpMod = require('http');
var urlMod = require("url");
var queryStringMod = require('querystring');

var fct = function(req, res) {

  // input
  var urlReq = urlMod.parse(req.url);
  var pathReq = urlReq.pathname;
  var queryReq = urlReq.query;
  var paramReq = queryStringMod.parse(queryReq);
  
  // process
  var codeRes;
  var msgBodyRes;
  
  if(pathReq == "/home") {

    codeRes = "200";
    if("name" in paramReq) {
      msgBodyRes = '"Welcome ' + paramReq['name'] + '!"';
    } else {
      msgBodyRes = '"Welcome in home page!"';
    }

  } else {
    codeRes = "404";
    msgBodyRes = '"Error, the page does not exists!"';
  }

  // output
  var headersRes = {"Content-Type": "text/json", "Access-Control-Allow-Origin": "*"};
  res.writeHead(codeRes, headersRes);
  var bodyRes = '{' + '"message": ' + msgBodyRes + '}';
  res.write(bodyRes);
  res.end();
}

var server = httpMod.createServer(fct);
server.listen(1987);

