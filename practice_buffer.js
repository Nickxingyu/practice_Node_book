var buf1=Buffer.allocUnsafe(10);
var buf2=Buffer.from([0,1,2,3]);
var buf3=Buffer.from('test','hex');
var buf4=Buffer.from('test','latin1');
console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);
len=buf1.write("Yiyi_Wang",);
console.log(buf1);
console.log(buf1.toString());
console.log(buf1.toJSON());
console.log(len);
console.log(buf1.toString('utf8',1,6));

