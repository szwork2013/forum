本文将以开发一个pc端论坛为主线，讲述论坛是如何从零到完成，最终上线的这个全过程。

以下排列顺序，完全按照项目进行顺序

## 需求分析

任何软件存在的唯一合理性就是解决一项或多项问题，如何解决这个问题，怎么解决这个问题，都需要经过思考，讨论，总结，决定这一系列过程，统称一下就是需求分析。

> 那么问题来了，我希望做一个网站，让不同的人在这个网站上交流，沟通，解决他们常见的问题，最好这些问题有一些分类，当然需要注册......

以上是我做外包时，常从客户嘴中听到的话术(内容不一致)，由于客户的不专业性，这个过程中必须专业的人员，将客户的话术整理成项目说明书，至少有功能列表，并且，引导客户说出他的全部需求。譬如上述内容中并不完整，注册是通过手机号验证码注册，还是邮箱注册；需求不一样，开发不一样，价格不一样。

## 原型开发

完成需求分析后，接下来就应该是将功能用图形的方式展示出来，图形的直观性是任何言语都无法比拟的，作图很重要。

墨刀，是一个快速构建移动应用原型与线框图，云端保存，实时手机预览，多种手势及页面切换特效支持的工具，非常好用，特别推荐，用它画出来论坛结果大概如下：

![](http://resources.ohuoyi.com/fasdfaf.png)

(上图只是论坛的一张图片，真实过程不止一张)

## UI设计

通过原型设计做出来的图片美观度并不高，但是原型图基本上满足所有的功能点，仅仅是不够大气，不够漂亮而已。那么如何做得高大上呢？这个时候重任就落在设计师身上了。

网站够不够漂亮，完全看设计师的水平。价格从1块钱到上不封顶的设计师任君选择。

## 前端界面

完成UI设计后，作为上帝的你，至少能拿到设计图了。下面一步更重要的步骤就是将设计图做成静态的页面，这个工程中，我们采用的相关技术包括：react,less,storybook。该过程的验收结果如下：

![](http://resources.ohuoyi.com/header1x.png)

(简单描述下：我们采用的组件开发，左侧是所有的组件及其状态，当前是头部栏，"已登陆"的状态，下图是"未登陆"的状态的头部栏)

![](http://resources.ohuoyi.com/header2323.png)



## 模型设计

接下来，我们还有更重要的事情需要做。当前我们需要开发一个论坛，论坛中的帖子，回复，用户信息，这些都是需要我们存放起来的，如何有序的存放，如何存放才能以最快的速度获取到，这就是考验工程师的能力了。

把模型想象成一个excel更加便于理解，如下是excel版本的：

![](http://resources.ohuoyi.com/excel.png)

但是excel对开发来说并不友好，当有很多表之后，excel管理起来也有很大的问题，所以开发者一般采用 uml 图，如下：

![](http://resources.ohuoyi.com/uml.png)

## 服务端开发

web开发，服务端开发的内容，按功能划分大概可以分如下几类：

1. 数据进行操作(如：增删改查)
2. 数据操作相关功能(如：权限，统计)
3. 计算或其他功能(如：计算，登陆)

那么下面看看我们服务端程序部分代码。

![](http://resources.ohuoyi.com/dsadasdasd.png)左侧：模型的定义。

中间：获取数据列表。

右侧：插入一条数据。



上面，通过实例简单描述了服务端的开发，实际工作内容不只是如此。

## 单元测试

对于服务端的程序，细分到每一个功能是否能正常运行，得出我们想要的结果，我们需要进行单元测试。如下是我们对某一个功能进行测试的相关代码：

![](http://resources.ohuoyi.com/file_test.png)

## 集成开发

当我们完成了服务端的开发，界面的开发之后，需要完成的工作就是如何将这两种有机的连接起来。

譬如，通过调用服务端的功能，获取论坛帖子的列表数据，然后显示到页面上。完成这一个工作，我称之为集成开发。

这一环节中，我们目前的技术实现是通过，订阅数据，通过props的形式传送给react component。如下是我们相关的代码：

![](http://resources.ohuoyi.com/container.png)

## 人工测试

完成上述开发后，web基本上可以完整的运行起来了。这个时候，再进行人工测试。对照项目需求，逐项的check。如下是该论坛使用中的截图：

![](http://resources.ohuoyi.com/jietu.png)



## 特殊服务

文档是非常重要的，尤其是程序接口文档，可以使用jsdoc

为了方便其他客户端使用调用本服务端的接口，开发一套restful api则很有必要了

为了让我们的网站有更快的响应速度，必须采用cdn服务

为了方便运营人员了解网站的访问量，地理位置等多方面的信息，将采用google analytics服务

为了便于搜索引擎找到我们，必须采用seo,对关键词进行优化

等等...



## 总结

以上是我们当前项目开发的流程，代码部分截止写稿时间真实有效，随着我们技术的进步，流程，代码会做相应的改善。

以此流程开发的项目已有一个上线，并将持续运行，地址是 http://coderapp.ohuoyi.com/，如果你有任何问题，可以在这个论坛上发表你的意见，我们将尽快回复。