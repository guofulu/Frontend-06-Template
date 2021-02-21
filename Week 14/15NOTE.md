js中处理帧的工具
    setInterval(() => {}, 16.6)  定时器

    setTimeout(() => 16.6)    延时器

        let tick = () =>{
            // 此处可执行一些操作
            setTimeout(tick, 16.6)
        }


    requestAnimationFrame   申请浏览器执行下一帧的时候执行函数

        let tick = () =>{
            // 此处可执行一些操作
            let handler = requestAnimationFrame(tick)

            cancelAnimationFrame(handler)
        }

