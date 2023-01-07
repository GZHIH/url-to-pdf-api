import { StoreDemo } from '@index/store/index';
import { getCurrentInstance } from 'vue';

export default () => {
    console.log('VITE_APP_TITLE', import.meta.env.VITE_APP_TITLE);
    document.title = import.meta.env.VITE_APP_TITLE;
    let aaa = '';
    aaa = import.meta.env.VITE_APP_TITLE;

    const Demo = StoreDemo();
    console.log('pinia测试 修改前', Demo.$state);
    Demo.change('change', 10);
    console.log('pinia测试 修改后', Demo.$state);

    const this_ = getCurrentInstance();
    console.log('根组件实例', this_);
};
