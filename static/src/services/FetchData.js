//import 'whatwg-fetch';

const Fetch = {};

const comFetch = (flag,url,formData,succCallback) => {
    if(flag === 'get'){
        fetch(url,{method:'GET'}).then((res)=>{res.json().then(succCallback)})
    }
    if(flag === 'post'){
        fetch(url,{method:'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },body:JSON.stringify(formData)}).then((res)=>{res.json().then(succCallback)})
    }
};


Fetch.getListMsg = (succCallback) =>{
    comFetch('get','/liste',{},succCallback);
};

Fetch.loginMsgVaildate = (formData,succCallback) => {
    comFetch('post','/login',formData,succCallback);
};

Fetch.newWeeklyMsg = (formData,succCallback) => {
    comFetch('post','/write',formData,succCallback);
};

export default Fetch;