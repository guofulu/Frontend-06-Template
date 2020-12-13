学习笔记

javaScript
	Atom 			原子
	Expresion			表达式
	Statement		声明
	Structure			结构
	Program/Module	程序 / 模块

Expresion 表达式
	Grammar Tree vs Priority				语法树 vs 优先级
		优先级越高越优先形成语法树， 圆括号  -> 乘除 -> 加减 优先级越高，语法树等级越低
		一、Expression 表达式
			Member	成员访问
				a.b
				a[b]
				foo`string`
				super.b
				super[ `b`  ]
				new.target
				mew Foo()

			New
				new Foo
			
			Call		函数调用.  此处（）会拉低其后的表达式的优先级
				foo()
				super()
				foo()[“b”]
				foo().b
				foo()`abc`

			Left hand side  左结合
				Left hand side		a.b 等号左边必须是Left hand side 只要能放到等号左边一定是 Left hand side 否则就是Right hand side

			Right hand side 右结合	a+b	Right hand side 表达式 是从update 表达式开始的 代表右结合

			Unary	单目运算
				delete a.b		删除，后面必须是饮用类型
				void foo()		vide后面跟任何东西都会产生一个undefined
				typeof a		获取类型
				+a			没什么用
				-a			会把数字变为负值
				～a			反转值并加1
				!a			强制转为Banlean
				await a
			
			Exponential	乘方运算	右结合运算	3 ** 2 3的2次方

			Multiplicative	乘除运算 + 取余

			Additive		加减运算

			Shift			移位运算 1 << 3. 为2的3次方

			Relationship	比较运算	< > <= >= instanceof in

			Equality		相等比较	== != === !==
			
			Bitwise		位运算运算	& ^ ｜ 

			Logical		逻辑运算 &&  || 

			Conditional	三目运算符		短路原则 逻辑运算和三目运算只会按条件执行，部分逻辑可能不会执行，某种程度可代替if else

Runtime	运行时
	二、Type Convertion	类型转换
		知识点： == 是最为复杂的类型转换，同类型可直接比较，不同类型大部分会转化为数字 尽量不用。      		位运算也会转位Number类型还必须转为整数				￼


		Unboxing		拆箱转换		把Object转换为普通配型
			主要过程	Object上有三个方法会影响ToPremitive 分别为 ToString valueOF [Symbol.ToPremitive]（）{  return 3 } 
					加法会优先调用valueOf	Symbol的优先级最高 最为属性是优先ToString 会更具场景获取值	
				ToPremitive
				ToString	vs	valueOf
				Symbol.toPremitive

		Boxing		装箱转换
			对于每一个类型Objext都提供了一个包装的类 比如Sring  Number  Object
			￼
			
			Symbol 类是不需要new的	当我们去访问基础类型的属性时，会自动进行装箱转换，不需要new也可以直接得到对象上的方法



	Reference 		引用类型
		js类型  标准中类型  结构	key和object 


statement		语句
		Grammar 语法
			简单语句
				ExpressionStatement	表达式语句 赋值类
				EmptyStatement		空语句 只有一个分号
				DebuggerStatement		debugger 关键字 调试使用，可打断点
				ThrowStatement		抛出异常语句 以下四个语句都是控制语句 thtow a = 1 可抛出异常 
				ContinueStatement		continue语句
				BreakStatement		break语句
				ReturnStatement		return语句
	

			组合语句

				BlockStatement		块级语句 { 语句列表 把单条变为多条 }
										[[type]]: normal
										[[value]]: --
										[[target]]: --
									
				IfStatement			if语句
				SwitchStatement		switch语句 容易写错 建议使用if代替 
				IterationStatement		循环语句 while for
										while(表达式) 语句
										do 语句 （表达式）语句 必执行一次
										for（表达式 ； 表达式； 表达式）语句
										for  (表达式 in 表达式）语句
										for  (表达式 of 表达式）语句

				WithStatement			打开一个对象但是有不确定性，类似 。。。
				LabelledStatement		label语句 再简单或复合语句前家label 一般用于 跳出循环
										[[type]]: break continue
										[[value]]: --
										[[target]]: label
				TryStatement			try catch finally语句
										
										[[type]]: return
										[[value]]: --
										[[target]]: label

										try {
											语句
										} catch(表达式) {
											语句
										} finally {
											语句
										}

			声明
				FunctionDeclaration			函数声明
				GeneratorDeclaration		generator函数声明
				AsyncFunctionDeclaration	异步函数声明
				AsyncGeneratorDeclaration	异步generator函数声明
				VariableStatement			变量声明 var
				ClassDeclaration			类声明
				LexicalDecleration			const let 声明

				区别
					function function* async function async function* var 只认function body 会最先执行，没有先后关系，不管此类声明写在哪，都能够访问到

					class let const 声明之前使用，就会报错

				预处理机制 
					是指在一段代码执行之前js引擎，会对代码本省做一次预先处理
					比如js会把代码中的var 全部挑出来，执行, const let 也是有预处理的

				作用域 
					var 作用在函数级作用域 而let const 作用在block级作用域


		Runtime	运行时
			Completion Record		记录完成
				completion record是一个运行时的数据结构 属于一种数据类型 但是js使用中无法访问  用来储存语句执行的结果

				组成
					[[type]]: normal, break, continue, return, or throw
					[[value]]: 值一般都是基本类型 
					[[target]]: 其实就是循环中的label，可能标记当前循环，可用于break和continue

			Lexical Environment		作用域


		结构化程序
			
			js执行粒度（运行时）
				宏任务 						我们传给js引擎的任务，最大粒度的任务
				微任务(Promise)				引擎内部的任务，只有Promise能生成微任务
					当我们写一段代码，其中有Promise，那么这段代码去执行，就是一个宏任务，其中的Promise。then执行就是微任务
				函数调用(Execution Context)
				语句/声明(Completion Record)
				表达式(Reference)
				直接量/变量/this。。。。。

				
				事件循环	event loop
					
					获取代码 — 执行代码 — 等待 — 获取代码 — 执行代码 — 。。。。。。。



函数调用
    函数调用最终形成的是一个栈式的结构 整体叫做Execution Context Stack 运行时，每个单独栈的叫做Execution Context，当执行到当前栈会有一个栈顶元素，就会说能访问的变量，叫做Running Execution Context， 代码中需要的信息都需要从Running Execution Context中取出

    Execution Context 执行上下文 中的内容
        code evaluation state   用于async 和 generator函数的，记录代码执行到哪了
        Function                由function来初始化的会有
        Script or Module        要么有script 要么有module，js只有这两种上下文
        Generator               只有generator函数的需要，每次generator执行所生成的隐藏的generator
        Realm                   保存着所有使用的内置对象
        LexicalEnvironment      let const 声明的店变量
            this
            new.target
            super
            变量
        VariableEnvironment      var声明的变量


        Environment Records 环境记录
            Declarative Environment Records  块级作用于会产生的环境记录 多个

                Function Environment Records    函数级环境记录

                module Envirenment Record       模块级环境记录

            Global Environment Records      全局环境记录 只有一个 

            Object Environment Records      对象环境记录 只有一个

    
    在js里面，每一个函数都会生成一个闭包

闭包 Function-Closure
    var y = 2
    function foo2（）{
        console.log（y）
    }

    export foo2
    在这段代码执行时解析时会形成一个
        Function：foo2
            Environment Record:{ y:2 } 变量序列 函数定义时会会把所在的Environment Records 保存在自己的函数对象身上变成一个属性
            code: console.log(y)


    var y = 2

    function foo2(){
        var z = 3;
        return () => {
            console.log(y,z)
        }
    }

    var foo3 = foo2();
    export foo3;

    在上面这段代码中
    Function：foo3 此处箭头函数会保存当前环境的this
        Environment Records：{ z:3， this：global } => Environment Record：{ y:2 }
        code：console.log(x， y)

Realm 
    js中 函数表达式 和对象直接量都会创建对象 类型转换中也会创建对象 这些对象都是有原型的，就是Realm，

    
