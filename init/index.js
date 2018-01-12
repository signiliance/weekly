
//入口文件

const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const router = new (require('koa-router'))();
const Homeee = require('../static/public');

const app = new Koa();
const staticpath = '../static/public/'
app.use(bodyParser());
//app.use(cors());

/*app.use(async (ctx) =>{

    if(ctx.url === '/list' && ctx.method === 'GET'){

        router.get('/list',Homeee.index);
    }else if(ctx.url === '/admin' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        ctx.body = '';
    }

});*/
router.get('/',async ()=>{})

app.listen(3000);