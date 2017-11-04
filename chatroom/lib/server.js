/**
 * Created by Administrator on 2017/11/4.
 */
var http = require('http');//内置的http模块提供了HTTP服务器和客户端的功能
var fs = require('fs');//内置的fs模块提供了与文件系统相关的功能
var path = require('path');//内置的path模块提供了与文件系统路径相关的功能
var mime = require('mime');//附加的mime模块有根据文件扩展名得出MIME类型的能力
var cache = {};//cache是用来缓存文件内容的对象

//请求的文件不存在时发送404错误
function send404(response){
    response.writeHead(404,{'Content-type':'text/plain'});
    response.write('Error 404:resource not found.');
    response.send();
}

//提供文件数据服务
function sendFile(response,filePath,fileContents){
    response.writeHead(
        200,
        {"Content-type":mime.lookup(path.basename(filePath))}
    );
    response.send(fileContents);
}