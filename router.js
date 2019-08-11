function route(pathname,handle,response,postData){
    //console.log("About route to a request for "+pathname);
    if(typeof(handle[pathname])==='function'){
        console.log(typeof(handle[pathname]));
        handle[pathname](response,postData);
    }
    else{

    }
}
exports.route=route;