学习笔记

TicTacTeo
    实现思路 
    1、要能判断是否胜出： 根据所有获胜方式是先判断
    2、判断当前所有空位作为下一步是否能赢： 循环所有空位置，模拟下一步检测是否胜出，返回结果
    3、判断出最优落子，有两种可能，第一是我可以赢，第二就是对方可以赢（取反操作），通过递归的方式模拟空位置的所有落子，返回最优位置或最后位置

五子棋
    实现思路
    1、判断获胜方式（根据已有落子，判断当前落子是否在横竖、左右斜四个方向是否五连）
    2、根据当前落子，模拟下一步的所有位置，返回可获胜位置或null
    3、最优落子位置判断，同样是两种可能，显示能赢最优，其次对方能赢最优
    注意：需要设计递归的深度

异步编程
    Promise 是一个古老的概念（最初提出于 1976 年），通常与 future 结合在一起。Future 指的是未来的值，通常在 Promise 里被作为参数和返回值传来传去。Promise 只是一个概念，很多常见语言的标准库都有 Promise 关联的特性（比如 C++ 11 的 std::promise 和 std::future、Java 8 的 java.util.concurrent.Future、Python 3.2+ 的 concurrent.futures等）。即使标准库里没有，大部分语言里也有第三方实现的 Promise（比如 Ruby 的 Promise gem）。在 JavaScript 的世界里，最早得到广泛使用的 Promise 是 jQuery 的 AJAX 模块中出现的 jQuery.Deferred()。Promise/A+ 标准规定了一系列 API，并配有大量的测试用例，ECMAScript 2015 直接整合了这个标准。Promise/A+ 提供的 API 非常有限，很多 Promise 库（Q、bluebird 等）在兼容 Promise/A+ 的基础上添加了一些其他的扩展。jQuery 3.0 也已经将 Deferred 迁移成了与 Promise/A+ 兼容。
    