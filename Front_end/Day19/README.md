### web浏览器的重要部分

* window是载入浏览器的标签，在JavaScript中用`Window`对象来表示，使用这个对象的可用方法，你可以返回窗口的大小（参见`Window.innerWidth`和`Window.innerHeight`），操作载入窗口的文档，存储客户端上文档的特殊数据（例如使用本地数据库或其他存储设备），为当前窗口绑定event handler，等等。

* navigator表示浏览器存在于web上的状态和标识（即用户代理）。在JavaScript中，用`Navigator`来表示。你可以用这个对象获取一些信息，比如来自用户摄像头的地理信息、用户偏爱的语言、多媒体流等等。

* document（在浏览器中用DOM表示）是载入窗口的实际页面，在JavaScript中用`Document`对象表示，你可以用这个对象来返回和操作文档中HTML和CSS上的信息。例如获取DOM中一个元素的引用，修改其文本内容，并应用新的样式，创建新的元素并添加为当前元素的子元素，甚至把他们一起删除。

