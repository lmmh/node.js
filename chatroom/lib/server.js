/**
 * Created by Administrator on 2017/11/4.
 */
var http = require('http');//���õ�httpģ���ṩ��HTTP�������Ϳͻ��˵Ĺ���
var fs = require('fs');//���õ�fsģ���ṩ�����ļ�ϵͳ��صĹ���
var path = require('path');//���õ�pathģ���ṩ�����ļ�ϵͳ·����صĹ���
var mime = require('mime');//���ӵ�mimeģ���и����ļ���չ���ó�MIME���͵�����
var cache = {};//cache�����������ļ����ݵĶ���

//������ļ�������ʱ����404����
function send404(response){
    response.writeHead(404,{'Content-type':'text/plain'});
    response.write('Error 404:resource not found.');
    response.send();
}

//�ṩ�ļ����ݷ���
function sendFile(response,filePath,fileContents){
    response.writeHead(
        200,
        {"Content-type":mime.lookup(path.basename(filePath))}
    );
    response.send(fileContents);
}