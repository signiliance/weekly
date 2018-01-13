
//入口文件

const Koa = require('koa');
//const path = require('path');
const bodyParser = require('koa-bodyparser');
//const cors = require('koa-cors');
const router = new (require('koa-router'))();
//const Homeee = require('../static/public');
const  serve = require("koa-static");
const DBhandle = require('./init/sql/dbhandle');
const app = new Koa();

let WeeklyName = '';
let content = '';
let contentData = {};
//const staticpath = '../static/public/'
app.use(bodyParser());
//app.use(cors());
app.use(serve(__dirname+ "/static/build",{ extensions: ['html']}));
app.use(async (ctx) =>{

    if(ctx.url === '/liste' && ctx.method === 'GET'){

        ctx.body = DBhandle.getData(WeeklyName);

    }else if(ctx.url === '/login' && ctx.method === 'POST'){
        console.log(ctx.request.body);
        let postData = ctx.request.body;
        if(postData.userName == 'ofo' && postData.password == '123'){
            WeeklyName = postData.userName;
            ctx.body = {login:'true'};
        }else{
            ctx.body = '404'
        }
    }else if(ctx.url === '/write' && ctx.method === 'POST') {
        //console.log(ctx.request.body.title);
            content =  DBhandle.getData(WeeklyName);
            if(content === undefined){
                contentData[ctx.request.body.title] = ctx.request.body.content;
                contentData = JSON.stringify(contentData);
                //console.log(contentData);
                DBhandle.inputData(WeeklyName, contentData);
            }else {
                content = JSON.parse(content);
                content[ctx.request.body.title] = ctx.request.body.content;
                content = JSON.stringify(content);
                DBhandle.inputData(WeeklyName, content);
                //console.log(content);
            }
            ctx.body = {'login':'trie'};
       /* DBhandle.inputData(WeeklyName, content);
        ctx.body = {'login':'trie'};*/
    }

});

function fn2(){
    content =  DBhandle.getData(WeeklyName);
    content = JSON.parse(content);
    //console.log(content);
}
//router.get('/',async ()=>{});


app.listen(3001);