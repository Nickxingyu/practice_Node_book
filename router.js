function route(pathname,handle){
    //console.log("About route to a request for "+pathname);
    if(typeof(handle[pathname])==='function'){
        console.log(typeof(handle[pathname]));
        handle[pathname]();
    }
    else{
        console.log(typeof(handle[pathname]));
        console.log("404 ERROR . I don't know this url.");
    }
}
exports.route=route;