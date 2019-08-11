var exec=require("child_process").exec;//生出小孩去執行，等小孩執行完再回來叫伺服器
var querystring=require('querystring');//因為取得postData時只需要文字部分，所以用這個分析傳回的text
function start(response,postData){
    console.log("This is start.");
    var body='<html>'+
                '<head>'+
                    '<meta http-equiv="Content-Type" content="text/html"; '+
                    'charset=UTF-8" />'+
                '</head>'+
                '<body>'+
                    '<p>哈哈哈哈</p>'+
                    '<form action="/upload" method="post">'+
                        '<textarea name="text" rows="20" cols="60"></textarea>'+
                        '<input type="submit" value="Submit text" />'+
                    '</form>'+
                '</body>'+
            '</html>'//html文檔，建置一個文字提交框，供使用者提交文字。

    exec("ls",{timeout:10000,maxBuffer:20000*1024},function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
      });//讓child去執行就可以實現non-blocking.
};
function upload(response,postData){
    console.log("This is upload.");
    response.writeHead(200,{"Content-type":"text/plain"});
    response.write("You sent "+querystring.parse(postData).text+'.');//使用querystring取得text的部分
    response.end();
};

exports.start=start;
exports.upload=upload;