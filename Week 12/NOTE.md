学习笔记


标签（Tag）、元素（Element）、盒（Box） HTML 中的是标签，DOM 中的是元素，CSS 排版的是盒。CSS 选择器选中的元素，在排版时可能产生多个盒。排版和渲染的基本单位时盒。

盒模型
    content-box、padding、border-box、margin box-sizing 默认为 content-box，可设置为 border-box。

正常流（Normal Flow）
    正常流是第一代的排版技术，比第二代的 flex 排版技术能力差，实现却更复杂。 CSS 的排版里，只排两样东西，盒和文字。一切 CSS 的东西，都不外乎这两样。 正常流与平时书写文字的习惯完全一致，所以称为正常流。

    正常流排版步骤
    收集盒和文字进行
    计算盒和文字在行中的排布
    计算行的排布
    文字和 inline-level-box 组成 line-box，再和 block-level-box 进行排布。


    行内（IFC：Inline level Formating Context，行内级格式化上下文）：

    盒和文字在一个行内的，从左到右排，有一定的对齐规则。inline-box，即inline-level-box（行内级别的盒）。

    block-level-box，块级盒，单独占一行。

    文字和 inline-box 排出来的行，叫做 行盒（line-box）。

    行间（BFC：Block level Formating Context，块级格式化上下文）：

    正常流就是 line-box 和 block-level-box 从上到下排布。

正常流的行级排布
    Baseline：基线对齐。英文为小写字母 x 的下沿

    Text：字形，由字体决定。origin 指示了基线的位置。


行模型：

    行的 base-line 会根据行内的文字和盒改变。

    text-top 和 text-bottom 由行内字体的最大字高确定，确定后本行内的都不变。

    行内盒的基线是随着内部文字的基线变化的，大部分情况下不建议对行内盒使用基线对齐。通过设置 vertical-align 会影响行内盒的 top 和 bottom。

正常流的块级排布
    float 与 clear
    float：先排到正常的位置，然后再往指定方向浮动，再根据 float 元素占据的区域调整行盒的位置。float 元素不止影响一行，高度范围内的行盒都会受影响。float 元素间不会重叠。

    clear：找一个干净的空间来执行浮动的操作。设置后会调整元素的纵向位置，不与已有的 float 元素在纵向有重合。

    通过给同级元素都设置 float，可以模拟正常流的布局效果。此时使用 br 强制换行不生效，需要使用 clear 来开始新行。

margin 折叠
    上下同级元素之间的 margin 会折叠。Margin Collapse 只会发生在同一个 BFC 里面。

BFC
    Block Container：里面能容纳 BFC 的盒，里面默认是正常流
    block
    inline-block
    table-cell
    flex item
    grid item
    table-caption
    Block-level Box：外面有 BFC 的盒
    block level：block、flex、table、grid
    inline level：inline-block、inline-flex、inline-table、inline-grid
    run-in（继承父级的 display）
    Block Box = Block Container + Block-level Box：里外都有 BFC

Flex 排版
    收集盒进行
    计算盒在主轴方向的排布
    计算盒在交叉轴方向的排布

动画
    使用@keyframes定义动画效果，使用animation驱动动画

    案例
        @keyframes mykf
        {
            from { background:red}
            to {background:yellow}
        }

        div {
            animation:mykf 5s infinite;
        }

    Animation的属性
        naimation-name 时间曲线(keyframes)
        naimation-duration 动画的时长
        naimation-timing-function 动画的时间曲线
        naimation-delay 动画开始前的延迟
        naimation-iteration-count 动画的播放次数
        naimation-direction 动画的方向 

    keyframes
        可以定义from to 
        @keyframes mykf
        {
            from { background:red}
            to {background:yellow}
        }
        也可以定义百分比
        @keyframes
        {
            0%{top：0； transition：top ease}
            0%{top：30px； transition：top ease-in}
            0%{top：10px； transition：top ease-out}
            0%{top：0； transition：top linear}
        }

    Tramsition的属性
        transition-properrty 要变化的属性
        transition-duration 要变化的时长
        transition-timing-function 时间曲线
        transition-delay 延迟

        
        时间曲线  其实是三次贝塞尔曲线  地址cubic-bezier.com/#.2,1.52,.51,-0.44
            内置的曲线类型
                ease 自然类型
                linear 直线型
                ease-in 缓动启动 一般用于退出屏幕动画
                ease-out 缓动停止 用于进入屏幕动画


        抛物线贝塞尔算法
            function generateCubicBezier（v,g,t）{
                var a = v /g
                var b = t + v /g

                return [
                    [(a / 3 + （a + b) / 3 -a) / (b - a), (a * a / 3 + a * b  * 2 / 3 - a * a) / (b * b - a * a)],
                    [(b / 3 + (a + b) / 3 -a) / (b - a), (b * b / 3 + a * 吧 2 / 3 - a * a) / (b * b - a * a)]
                ]
            }

颜色
    颜色表示法
        HSL
            H: Hue          六色色盘的角度
            S：Sturation    颜色纯度 S越高越鲜艳
            L：Lightness    亮度 两个极端为黑白 100%为白色
        HSV
           H: Hue           六色色盘的角度
           S：Sturation     颜色纯度 S越高越鲜艳
           V：Value         色值 明度 value的100%为当前颜色的纯色

绘制
    几何图形
        border
        box-shadow
        border-radius

    文字
        font
        text-decoration

    位图
        background-image

