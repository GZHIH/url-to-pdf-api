const R10 = 10,
    R5 = 5,
    R1 = 1;
/*
    随机获得一个正整数
        int : 10 100 1000 10000 ……
        
        return Number
*/
export const randomInt = function (int = R10) {
    // 输入非10倍数，转为10
    const int_ = arguments[0] % R10 ? R10 : arguments[0];
    return Number((Math.random() * int_).toFixed());
};
/*
    随机获得一个整数
        int : 10 100 1000 10000 ……
        
        return Number
*/
export const randomInt_ = (int = R10) => {
    const symbol = randomTF() ? '' : '-';
    const v = randomInt(int);
    return v ? Number(`${symbol}${v}`) : v;
};
/*
    随机获得一个正浮点数
        float: 1 2 3 4 5 ……
        isNumber: 返回值是否是Number类型，有这个参数是为了避免Number转换 将 0.1200 这种浮点数后面的0省略掉
        
        return isNumber ? Number : String
*/
export const randomFloat = function (float = R1, isNumber = true) {
    const float_ = arguments[0] <= R1 ? R1 : arguments[0];
    return arguments[1] ? Number(Math.random().toFixed(float_)) : Math.random().toFixed(float_);
};
/*
    随机获得一个浮点数
        float: 1 2 3 4 5 ……
        isNumber: 返回值是否是Number类型
        
        return isNumber ? Number : String
*/
export const randomFloat_ = (float = R1, isNumber = true) => {
    const symbol = randomTF() ? '' : '-';
    const v = randomFloat(float, isNumber);
    return v ? `${symbol}${v}` : v;
};
/*
    随机获取范围内的整数
        start 开始范围
        end 结束范围

        return Number
*/
export const randomRange = (start: number, end: number) => {
    const length = end - start;
    return Number((Math.random() * length).toFixed()) + start;
};
/*
    随机 是否
*/
export const randomTF = () => {
    return randomInt(R10) >= R5;
};
