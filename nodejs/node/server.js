

let http = require('http');

let url = require('url');

let querystring = require('quwrystring');

let server = http.createServer();

server.listen(3000, () => {
	console.log('中国队必胜');
});

server.on('request', (req,res)=> {

		//请求方式: req.method         请求地址 req.url

		//通过req.headers可以获得请求头

		//当请求方式为post时,才会有请求主体,(请求主体主要是参数)

		// 当请求方式为get时,没有请求主体,参数放到地址上

		//如果get方式请求,可以通过解析地址来获得参数
		//nodejs提供了专门模块url()来解析地址上的参数

		let params = url.parse(req.url,true);



		当请求方式为post时,才会有请求主体(请求主体主要是参数)
		当数据以post方式上传时会触发 一个事件 data	

		var formData = '';

		req.on('data', (chunk) => {
			frmData += chunk;				
		});

		// console.log(formData); 数据刚监听没有数据

		//当post数据传输完毕以后 会触发另一个事件 end

		req.on('end', ()=> {

			//得到的数据为一个字符串,使用不方便,可以使用系统模块 querystring来解析
			console.log(formData);

			let params = querystring.parse(formData);
			console.log(params);
		});



		res.end();	
});