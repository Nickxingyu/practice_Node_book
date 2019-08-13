var ulit=require('util');
function Body(name){
    this.name=name;
    this.getname=function getname(){
        console.log(this.name);
        return this.name;
    }
}
Body.prototype.showname=function(){
    console.log(this.name);
}
function iher(name){
    this.name=name;
}

let nick=new Body('Nick');
ulit.inherits(iher,Body);
let yiyi=new iher('Yiyi');
console.log(nick.name);
nick.getname();
console.log(yiyi.name);
yiyi.showname();

console.log(ulit.inspect(nick,true));