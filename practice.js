var http=require('http');
var url=require('url');
function start(route){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname;
        console.log("Request for "+pathname+" is received");
        route(pathname);
        response.writeHead(200,{"Content-type":"text/plain"});
        response.write("export.name_for_function = function");
        response.end();
    };
    http.createServer(onRequest).listen(8888);
};
exports.start=start;