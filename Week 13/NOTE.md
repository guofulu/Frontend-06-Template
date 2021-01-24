学习总结

HTML
1、DTD与namespace
    www.w3.org/TR/xhtml1/DTD/html1-strict.dtd
    www.w3.org/1999/xhtml
    [HTML标签嵌套规则](https://www.softwhy.com/article-33-1.html)


    DTD是SGML定义他饿自己的一种文档格式

    实体定义： 其实就是&符 后边更一系列的字，最后有一个分号
        例如 &nbsp;

        比较重要的转义字符
        quot    引号
        amp     &符号
        lt      左尖括号      
        gt      右尖括号


        strong  em 的区别
        strong表示这样的一个重要性的一个场景 em表示这个词在句子里面的的重音是什么


合法元素
    Element:                标签<tarname>...</tarname>
    Text:                   文本节点text
    Comment：               注释节点<!-- comments -->
    DocumentType:           Doctype 节点<!Doctype html> html5只有这一个
    ProcessingUnstruction:  预处理语法<?a 1?>
    CDATA:                  本质上是文本节点<![CDATA[]]>

字符引用

    &#161；
    &amp;
    &lt;
    &quot;

浏览器API

    DOM API
        Node API

        Node 所有节点都要继承的总类
            Element:元素型节点 跟标签相对应
                HTMLElement 所有的HTML标签

                SVGElement 所有的SVG标签

            Document: 文档跟节点

            CharacterData:字符数据
                Text:文本节点
                    CDATASection： CADATA节点 继承文本节点的类

                Commemt:注释节点

                ProcessingInstruction:处理信息

            DocumeentFragment:文档片段

            DocumentType：文档类型 就一个
        

        导航类操作  节点包含元素节点和文本节点
            parentNode              父节点
            childNodes              子节点
            firstChild              第一个子节点
            lastChild               最后一个子节点
            nextSibling             下一个邻居节点
            previousSibling         上一个邻居节点

            parentElement           父元素
            childreen               子元素
            firstElementChild       第一个子元素
            lastElementChild        最后一个子元素
            neextElementSinling     下一个邻居元素
            previousElementSibling  上一个邻居元素

        修改操作
            appendChild     当前节点插入到对后一个
            insertBefore    当前节点之前
            removeChild     移除节点，只能在父节点 操作
            replaceChild    相当于一次remove加上一次insert

        高级操作

            compareDocumentPosition 是一个用于比较两个节点中的关系的函数
            contains                检查一个节点时候包含另一个节点的函数
            isEqualNode             检查两个节点是否相同
            isSameNode              检查两个节点是否是同一个节点 实际上在js中可以用===
            cloneNode               复制一个节点，如果传入参数true 则会连同子元素做深拷贝



    Event API
        addEventListener(type, listener, [, options])

            type        事件类型 click等

            listener    事件处理函数

            options：[]
                capture 事件触发类型 冒泡或者捕获

                once    是否只响应一次

                passive： 是否单纯的想要监听事件  设为true可提升scroll性能  你是否只是单纯的监听事件
    Range API

        var range = new Range()
        range.setStart(element, 9)
        range.setEnd(element,0)
        var range = document.getSelection().getRangeAt(0)
            documeent.getSelection() 是使用鼠标在屏幕上选中
        
        range起始点的便捷方式
            range.setStartBefore
            range.setEndBefore
            range.setStartAfter
            range.setEndAfter
            range.selectNode            选择当前节点
            range.selectNodeContents    选择当前节点的内容

        range的操作
            var fragment= range.extractContents（）                取出当前range
            range.insertname(document.createTextNode("aaa"))      往当前range插入

CSSOM
    基础部分
        document.styleSheets
        子类
            document.styleSheets[0].cssRules
            document.styleSheets[0].insertRule("p { color: pink;}", 0)
            document.styleSheets[0].remove(0)

            Rule 具体css规则
                CSSStyleRule    普通规则
                    SelectorText    String
                    style K-V结构    
                At-Rule
                CSSCharsetRule
                CSSImportRule
                CSSMediaRule
                CSSFontFaceRule
                CSSPageRule
                CSSNamespaceRule
                CSSKeyframesRule
                CSSKeyframeRule
                CSSSupportsRule
                ...........
        特殊操作
            getComputedStyle(element, pseudoElt(可获取为元素)) 
    View部分
        window  
            window.innerHeight  浏览器视口高度
            window.innerWidth   浏览器视口宽度

            window.devicePixeRatio  获取DPR 浏览器物理像素和px的比值

            window.screen
                width
                height
                availWidth
                availHeight
        
            window.open("地址"， “blank”， “width: 100, height: 100”)  打开一个新的浏览器窗口
                moveTo(x,y)
                moveBy(x,y)
                resizeTo(x,y)
                rresizeBy(x,y)

        scroll  滚动条
            window部分
                scrollY             当前位置
                scrollX
                scroll（x，y）       指定位置
                scrollBy（x， y）    指定位置滚动差值

            元素部分
                scrollTop           当前位置
                scrollLeft
                scrollWidth         最大宽
                scrollHeight
                scroll(x,y)         指定位置
                scrollBy(x, y)      当前基础上滚动差值
                scrollIntoView()    强制到可见区域

        layout相关

            getClientRects()
                获取当前元素内细分的所有盒信息
            getBoundingClientRect()
                获取当前元素的整体盒信息


所有API
    
    whatwg.org

        Compatibility

        Console

        DOM

        Encoding

        Fetch

        Fullscreen API

        HTML

        Infra

        MIME Sniffing

        Notifications API

        Quirks Mode

        Storage

        Streams

        URL

        XMLHttpRequest





