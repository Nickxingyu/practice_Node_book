var server=require("./server");
var router=require("./router");
var requestHandler=require("./requestHandler");

var handle={};//一個類似字典的集合，存放著不同請求路由所對應的請求處理程序
handle["/"]=requestHandler.start;
handle["/start"]=requestHandler.start;
handle["/upload"]=requestHandler.upload;

server.start(router.route,handle);
