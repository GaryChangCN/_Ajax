_Ajax
====

#### 简单封装的ajax库

#### 支持post和get方法 兼容IE7及以上浏览器

#### 和jQuery Ajax格式相似

#### 2016-05-15 更新支持jsonp
* api

  ```
  _Ajax({
                "url":"",
                "method":"",//默认get
                "async":true,//默认为false
                "data":{
                },
                "header":{                    
                },
                "cache":true,//默认为false
                "dataType":"",//"text"  "json"  "xml"  默认为text
                success:function(){
                },
                beforeSend:function(){
                }
            })
  ```

* libs: 通过 `<script>标签引入<script src="lib/_Ajax.min.js" type="text/javascript" charset="utf-8"></script>`
                通过CDN获取`http://ajax-10030624.file.myqcloud.com/_Ajax.js` `http://ajax-10030624.file.myqcloud.com/_Ajax.min.js`

* example

  ```
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8" />
        <title>_Ajax_Demo</title>
        <script src= " lib/_Ajax.min.js" type="text/javascript" charset="utf-8"></script>
    </head>
    <body>
        <script type="text/javascript">
            _Ajax({
                "url":"server.php",
                "method":"post",//默认get
                "async":true,//默认为false
                "data":{
                    "key":"value",
                    "key2":"value2"
                },
                "header":{
                    "h":"c",
                    "h2":"c2"                    
                },
                "cache":true,//默认为false
                "dataType":"json",//"text"  "json"  "xml"  默认为text
                success:function(data){
                },
                beforeSend:function(){
                }
            })
        </script>
    </body>
  </html>
  ```