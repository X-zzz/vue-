var global_num = 12          // 全局变量
export class Numbers {
    num_val = 13;             // 实例变量
    static sval = 10;         // 静态变量
    static sval1 = 10;         // 静态变量
    static sval2 = Numbers.sval1 + 10;         // 静态变量
    static sval3 = Numbers.sval1 + 10;         // 静态变量

    storeNum(): void {
        var local_num = 14;    // 局部变量
    }
}
console.log("全局变量为: " + global_num)
console.log(Numbers.sval)   // 静态变量
console.log(Numbers.sval2)   // 静态变量
var obj = new Numbers();
console.log("实例变量: " + obj.num_val)