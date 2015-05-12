###项目主页
[三直的博客](http://sanzhi.me)

###前置条件
1. 电脑已经配置了Ruby环境，Mac自带

2. 安装sass

    `sudo gem install sass`

3. 安装bourbon（sass mixins库，方便书写css3兼容性代码）

    `sudo gem install bourbon`

    `bourbon install`

4. 在主样式文件里导入bourbon

    `@import 'bourbon/_bourbon'`

>为了让webstorm的file watcher插件能找到bourbon，此处需更改webstorm设置，settings-tools-filewatchers-scss，在arguments最后添加--load-path $ProjectFileDir$

*标记项目根目录为Resource root，这样使用相对路径时webstorm可以正确引用*


###启动应用
1. 安装node
2. 安装grunt和bower

    `sudo npm install grunt -g`

    `sudo npm install bower -g`

3. 在项目根目录下执行命令

    `npm install`

    `bower install`

4. 启动web服务器

    `node app`

###开发
安装nodemon

`sudo npm install -g nodemon`

*nodemon是一个nodejs守护程序，当js文件变化时，自动重启web服务*

启动命令

`nodemon app`