#Weekly 周报系统

###启动

git clone https://github.com/signiliance/weekly.git;
cd static
npm i
npm run build
cd ../init/sql
redis-server
cd ../../
nodemon index.js

###浏览

浏览器输入 127.0.0.1:3000


这个周报系统，只是搭了个架子，还有很多地方需要完善（大家轻喷），后续有时间的话会完善。
