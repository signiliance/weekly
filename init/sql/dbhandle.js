const Redis = require('ioredis');
const redis = new Redis({
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: 'auth',
    db: 0
});

let dataValue;
//let flag;
//redis.set('ofo','{}')
/*redis.set('foo','bar');
redis.get('foo',(err,res)=>{
    console.log(res);
});

const dbhand = (userName,title,content)=>{kp[i
    redis.set(userName,title);
    redis.get(userName,(err,res)=>{
        console.log(res)
    })
};
dbhand('232313','31321312312');*/

//const newWeeklypush = ()=> {}
/*const dbHandle = module.exports = {};


dbHandle.inputData = (userName,title,content)=>{
    redis.set(userName,redis.set(title,content));
    redis.get(userName).then(
        (res)=>{
            console.log(res);

        }
    )
};

dbHandle.inputData('ddddd','wdadawd','wdawdawdadawda');*/


const DBhandle  = module.exports = {};


 DBhandle.inputData = (userName,content)=>{
    async function fn(userName,content){
         await redis.set(userName,content);
         redis.get(userName).then((res)=>{
             //console.log(res);
         })
     }
     fn(userName,content);
};


DBhandle.getData1 = (userName)=>{
    /*let myPromise =  new Promise(function (resolve,reject) {
        redis.get(userName).then((res)=>{
            if(res) {
                resolve(res);
                //dataValue = res;
            }else{
                reject(err);
            }
        },function (e) {
            console.info(e);
        });

    });
    return myPromise;*/
    //redis.set('ofo','{}');
     async function fn(){
         /*await redis.get(userName).then((res)=>{
             if(res) {
                 dataValue = res;
             }else{
                 flag = 0;
             }
         });*/
         let a
         let res = await redis.get(userName).then(function(r){
             a = r
             console.log('======',r)
         })
         console.log(a)
     }
     //console.log(fn());
     fn();
     return dataValue;

};

DBhandle.getData = async (userName)=>{
   // let a
    await redis.get(userName).then(function(res){
        dataValue = res;
        //console.log('======',r)
    })
    //console.log('===',a)
    //console.log(dataValue);
    return dataValue;

};
