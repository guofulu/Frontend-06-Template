学习笔记：
    对象与组件
        对象
            Properties
            Methods
            Inherit         继承关系
        组件
            Properties
            Methods
            Inherit         继承关系
            Attribute       特性
            Config & State
            Event
            Lifecycle       生命周期
            Children        树形结构必要性

    Component
        真实用户会影响组件的State Children
        使用组件的人会影响  Attribute config Property
        开发组件的人会影响 Methods Property Event(组件对开发人员的反馈)

    Attribute 与 Property

        Attribute   强调描述性
            XML中使用的概念

        Property    强调从属关系
            对象中使用的概念

        HTML是Property和Attribute不等效的案例
            htem的class 与 className

            style

            a标签的href

            input attribute相当于默认值，更改Property的值，显示上会优先显示，但是attribute上的值不会更改

    Lifecycle   生命周期

        Create  -   mount（挂载） - unmount（卸载）-destroyed

                    js change/set   - render/update  -  destroyed

                    用户输入    -   render/update   -   destroyed


    Children
        content类型
            有几个就显示几个，普通值类型

        Remplate类型
            不能直接的表示出实例会有多少个需要数据驱动