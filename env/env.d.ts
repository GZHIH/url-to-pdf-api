/// <reference types="vite/client" />
// 这个 /// 不是注释，/// <reference ... />是一个三斜线指令，仅可放在包含它的文件的最顶端 ，三斜线指令也是 ts 在早期版本中为了描述模块之间的依赖关系而创造的语法

interface ImportMetaEnv {
    // 添加各种环境变量的对应ts接口类型提示
    readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
