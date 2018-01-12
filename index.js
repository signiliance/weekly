
//入口文件

const Koa = require('koa');
//const path = require('path');
const bodyParser = require('koa-bodyparser');
//const cors = require('koa-cors');
const router = new (require('koa-router'))();
//const Homeee = require('../static/public');
const  serve = require("koa-static");
const app = new Koa();
//const staticpath = '../static/public/'
app.use(bodyParser());
//app.use(cors());
app.use(serve(__dirname+ "/static/build",{ extensions: ['html']}));
app.use(async (ctx) =>{

    if(ctx.url === '/liste' && ctx.method === 'GET'){

        ctx.body = {value:'2999'};
    }else if(ctx.url === '/login' && ctx.method === 'POST'){
        console.log(ctx.request.body);
        let postData = ctx.request.body;
        if(postData.userName == 'ofo' && postData.password == '123'){
            ctx.body = {login:'true'};
        }else{
            ctx.body = '404'
        }
    }

});
router.get('/',async ()=>{});


app.listen(3001);