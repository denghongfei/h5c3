
//通过一些列的方法来创建,createServer
let http = require('http');
let url = require('url');
let server = http.createServer();

//通过服务器实例的listen方法来实现端口的监听
server.listen(3000);

//通过服务器实例的request 事件来处理客户端(浏览器)的请求
// 通过on方法来实现事件的监听
server.on('request',(req, res) => {
	console.log('有人来访问了...');
	console.log(url.parse(req.url,true));

	//在回调函数中可以设置两个恶参数,分别对应请求和响应
	res.writeHead('200',{
		'Content-Type': 'text/html; charset=UTF-8'
	})
	res.write('hello,browse');
	res.write('哈哈哈');
	//表示终止,响应结束
	res.end();
})