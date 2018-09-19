#### HTML基础
超文本标记语言 (HTML) 是用来构建你的网页内容并将其语义化的代码。举例来说， 我的内容是一些段落还是带点的列表?我的网页上有插入图片吗？有数据表格吗？
#### CSS基础
层叠样式表(CSS) 是用来添加样式到你网站的代码。举例来说, 你想让文字是黑色还是红色的？在屏幕的何处展示内容？用什么背景图像和颜色来装饰你的网站？
#### JavaScript基础
JavaScript是一种被用来添加交互功能到你的网站的编程语言。比如游戏，比如当按下按钮后会发生什么，或者将数据输入表格，动态样式效果，动画等等。
********************
# git 命令
* #### 一般配置
```
git --version  //查看git的版本信息
git config --global user.name   //获取当前登录的用户
git config --global user.email  //获取当前登录用户的邮箱登录git

git config --global user.name "你的名字"  //配置用户名
git config --global user.email "你的邮箱@xx.com"  //配置e-mail
```

* #### 连接GitHub
先有本地仓库，后有远程仓库，将本地仓库push到远程仓库

```
git init  //创建本地仓库
git remote add origin 网站上的仓库地址  //关联本地仓库和GitHub库
git push –f origin master  //第一次将本地仓库推送到GitHub上
```
先有远程仓库，后有本地仓库，从远程仓库clone到本地仓库
```
git clone <URL>  //从远程仓库clone到本地
```

* #### 添加
```
git init  //将当前目录变为仓库
git add 文件名   //将文件添加到暂存区
git ass -A  //添加全部文件
git commit –m "描述"  //将暂存区提交到仓库
```

* #### 查询
```
git status  //查询变更状态
git diff 文件名  //比较差异(git add之前使用)
git log  //查看仓库历时记录(详细)
git log --online  //产看仓库历史记录(单行)
git reflog  //查看所有版本的commit ID
```

* #### 撤销
```
git checkout --文件名  //撤销工作去的修改
git reset HEAD 文件名  //撤销暂存区的修改
git reset --hard 该版本ID  //回退到历史版本
git reset --hard HEAD^  //回退到上个版本
```

* #### 分支
```
git branch dev  //创建分支
git checkout dev  //切换分支
git checkout -b dev  //创建分支并切换分支
git branch -d dev  //删除分支
git merge dev  //合并分支
```

* #### 标签
```
git tag 标签名  //为当前版本打标签
git tag 标签名 该版本ID  //为历史版本打标签
git tag –a 标签名 –m "标签"  //指定标签说明
git tag  //查看所有标签
git show 标签名  //查看某一标签
git tag –d 标签名  //删除某一标签
```
# 使用SSH连接GitHub
* #### 创建SSH密钥
查看是否有ssh密钥，或进入.ssh目录

```
cd ~/.ssh
```
创建密钥
```
ssh-keygen -t rsa -C "email@example.com"
```
可以修改密钥的默认名如`id_rsa.github`
一路回车，完成创建

* #### 在GitHub中添加
登录GitHub，头像下拉框选择settings
左侧边栏`SSH and GPG keys`
点击`New SSH key`，将id_rsa.pub中内容复制进去

* #### 将SSH Key添加到ssh-agent
当创建了多个密钥时，需要将每个密钥都添加

```
eval `ssh-agent`
ssh-add ~/.ssh/id_rsa
```

* #### 新建config文件
在.ssh目录中新建config文件
```
touch config
```
在config中添加以下内容
```
# github
Host github.com
    HostName github.com
    User email@example.com
    IdentityFile ~/.ssh/id_rsa.github

# github2
Host github.com
    HostName github.com
    User email@example.com
    IdentityFile ~/.ssh/id_rsa.github2
```

* #### 验证SSH连接
```
ssh -T git@github.com
```