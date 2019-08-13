var dns=require('dns');
var os=require('os');
var http=require('http');
var url=require('url');
function start(route,handle){
    function onRequest(request,response){
        var postData='';
        var pathname=url.parse(request.url).pathname;
        console.log(os.hostname());
        console.log(dns.getServers());
        console.log("Request for "+pathname+" is received");

        //request.setEncoding("utf8");//設定使用utf8的解碼格式，為了讀取中文，但不知為何沒有用?!

        request.on('data',function(postDataChunk){ //設置一個監聽，並接受資料的Listener.
            postData+=postDataChunk;//因為一串資料傳輸時會被切成很多資料塊所以每次資料塊傳到時都要將其合併
            console.log("Post data : "+postData+' is received');
        })

        request.on('end',function(){//監聽使用者發出的請求
            route(pathname,handle,response,postData)
        });
        
    };
    http.createServer(onRequest).listen(8888);
};
exports.start=start;