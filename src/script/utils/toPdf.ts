import { getParameter } from '@/script/tools/base/location';
import { PageRenderOkDomId } from '@/script/static/common';

// 思路：在页面用定时器模拟接口，拿到数据后渲染页面后，用 nexttick 调用该方法
export default () => {
    const exportRes = getParameter(PageRenderOkDomId);
    if (exportRes) {
        // 首先把分割页面的dom插入
        // 最后插入代表渲染ok的dom
    }
};
