var server=require("./practice");
var router=require("./router")
server.start(router.route);
