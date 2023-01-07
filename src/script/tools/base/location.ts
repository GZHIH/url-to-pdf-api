/*
    getAllParameter 获取所有参数
        返回一个包含所有参数的对象，如果没有参数则是空对象
*/
export const getAllParameter = () => {
    const splitSymbol = '&';
    const equalSymbol = '=';
    const OBJ: any = {};
    const StartI = 1;
    const Parames = window.location.search.slice(StartI).split(splitSymbol);
    for (let i = 0; i < Parames.length; i++) {
        const item = Parames[i].split(equalSymbol);
        const key = item[0];
        const value = item[1];
        key && (OBJ[key] = value);
    }
    return OBJ;
};

/*
    getParameter 获取某个参数的值
        keyName 需要获取的参数名 缺省返回空字符串
*/
export const getParameter = (keyName: string) => {
    const splitSymbol = '&';
    const equalSymbol = '=';
    const zero = 0;
    const noData = '';
    if (keyName) {
        const { search } = window.location;
        const startI_ = search.indexOf(`${keyName}${equalSymbol}`);
        if (startI_ >= 0) {
            const startI = startI_ + keyName.length + equalSymbol.length;
            const residueSearch = search.slice(startI);
            const endI = residueSearch.indexOf(splitSymbol);
            return residueSearch.slice(zero, endI >= zero ? endI : residueSearch.length);
        } else {
            return noData;
        }
    } else {
        return noData;
    }
};
