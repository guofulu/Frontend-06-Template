学习笔记

浏览器的工作原理
	浏览器渲染流程
	
		输入url （发出http请求）-》	得到HTML（解析HTML生成DOM树） -〉得到DOM树 解析CSS样式，完成合并和覆盖 （css computing）-》 完成CSS计算 然后排版 -》 得到所有DOM with Position -〉 render渲染 -》 得到Bitmap

    有限状态机  
        我的个人理解是，状态机是一个给定特定事物的一种状态自循环，没种状态根据条件进入下一状态，下一状态可以是当前状态不发生变化，也可以是新的状态，一直循环
        特点
            每一个状态都是一个机器
                在每一个机器里，我们可以做计算、存储、输出。。。。
                所有的这些机器接受的输入是一致的
                状态机的每一个机器本身没有状态，如果用函数来表示的话，应该是纯函数（无副作用）
            每一个机器知道下一个状体
                每个机器都有确定的下一个状态（Moore）
                每个机器根据输入决定下一个状态（Mealy）
                    Mealy的具体函数表现形式
                        function state(input) // 函数参数就是输入
                        {
                            // 在当前函数中，可以自由的编写代码，处理每一个状态的逻辑
                            return next // 返回值作为下一个状态
                        }   

                        以下是调用代码
                            while（ipput）{
                                // 获取输入
                                state = state(input)
                            }
    HTTP协议解析

    应用
    表示
    会话                  HTTP          require('http')
    ------------------------------
    传输                  TCP           require('net')
    ------------------------------
    网络                  Intrenet        找到对应的点 IP协议
    -------------------------------
    数据链路                4G/5G/Wi-Fi  对数据准确传输 点对点
    物理层

        TCP与IP的基础知识       TCP 双通道协议
            流              无单位的数据传输形式 能保证数据的顺序
            端口            软件从网卡那数据的位置对应端口 TCP协议的概念
            require（net）  TCP协议node对应的库
            包              TCP协议传输就是使用包的概念，可大可小，取决于网络设备
            IP地址          更具地址去找到这个包应该从哪到哪 网络连接很复杂会用到大型的路由节点 
            libnet/libpcap  IP协议底层库 c++对应库 分别是 发包/抓包

        HTTP
            requset
            response    必有有一个requset 对应一个response 如果有一种多了说明出错

            HTTP协议是一种文本型的协议，协议里面所有的被容都是字符串
                POST/HTTP/1.1                                                    Request line 包换method path HTTP 版本
                Host： 127.0.0.1                                                 Headers
                Content-Type： application/x-www-form-ux-www-form-urlencoded

                field=aaa&code=x%3D1                                              body

                总结
                    第一步涉及HTTP
                        设计一个HTTP请求的类
                        content type 是一个必要的字段，要有默认值
                        body是kv格式
                        不同的content-type影响body的格式

                    第二部send函数总结
                        在requset的构造器中收集必要信息
                        设计一个send函数吧请求真实的发送到服务端
                        send函数应该是一个异步的，返回一个Premise


                        response的返回结构
                            HTTP/1.1 200 ok                         status line http版本/状态码/状态文本
                            Content-Type： text/html                 header
                            Date： Mon，23 Dec 2019 06:46:19 GMT
                            Connection： keep-alive
                            Transfer-Encoding： chunked


                            26                                         body
                            <html><body>Hello word<body><html>
                            0

                    第三部发送请求
                        设计支持已有的connection或者自己新建commection
                        收到数据包原封不动传给parser
                        更具parser的状态resolve Promise

                    第四部ResponseParser
                        Response必须分段构造，所以我们要用一个ResponseParser来“装配”
                        Response分段处理ResponseText， 我们用状态机来分析文本结构
                        
                    第五步 BodyParser
                        Response的body可能根据Content-Type有不同的结构，因此我们会采用ziParer为例的结构来解决问题
                        以TunkedBodyParser为例， 我们同样用状态及来处理body的格式