# 项目结构

## public

vite 默认的文件夹，将原样打包至项目根目录

## env

vite 配置的环境变量

## src

项目代码

### assets

存放各种资源文件

### components

存放各种组件

#### business

存放业务组件

#### share

存放公共组件

### router

路由

### script

各种脚本

#### static

存放静态的公共变量、方法等脚本代码

#### tools

存放公共工具脚本代码

#### utils

存放被执行的公共脚本代码

### store

状态管理

### types

存放公共的 ts 类型声明

### view

具体页面

# 代码格式化

项目所有代码依赖 vuter 和 prettier 插件进行格式化，vscode 需要安装这两个插件来确保可以正确格式化代码。

# 命名规则

-   文件名/文件夹名：小驼峰
-   普通变量名：小驼峰
-   静态变量名：大驼峰
-   组件变量名：大驼峰
-   路由路径名：大驼峰
-   css 变量名：下划线
