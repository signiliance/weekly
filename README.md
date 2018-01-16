# Weekly 周报系统

### 启动

git clone https://github.com/signiliance/weekly.git;<br />
cd static<br />
npm i<br />
npm run build<br />
cd ../init/sql<br />
redis-server（需要装redis）<br />
cd ../../<br />
nodemon index.js<br />

### 浏览

127.0.0.1:3001<br />

登陆账号：ofo<br />
登陆密码：123<br />

定时发送邮件的功能需要执行crontab命令；<br />

项目中并未体现出来；<br />

这个周报系统，只是搭了个架子，还有很多地方需要完善（大家轻喷），后续有时间的话会完善。

