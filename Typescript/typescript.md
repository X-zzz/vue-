# TypeScript

## TypeScript变量

### 1.基础类型

#### 1.任意类型：any

```ts
//ps：声明为 any 的变量可以赋予任意类型的值。
let anytext:any = 下面任意类型

let x: any = 1;    // 数字类型
x = 'I am who I am';    // 字符串类型
x = false;    // 布尔类型
```

#### 2.数字类型：number

```ts
//ps：双精度 64 位浮点值。它可以用来表示整数和分数。
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制
```

#### 3.字符串类型：string

```ts
//ps：一个字符系列，使用单引号（**'**）或双引号（**"**）来表示字符串类型。反引号（**`**）来定义多行文本和内嵌表达式。
let name: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;
```

#### 4.布尔类型：boolean

```ts
//ps：表示逻辑值：true 和 false。
let flag: boolean = true;
```

#### 5.数组类型：无

```ts
//ps：声明变量为数组。
// 在元素类型后面加上[]
let arr: number[] = [1, 2];
// 或者使用数组泛型
let arr: Array<number> = [1, 2];
```

#### 6.元组：无

```ts
//ps：元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let x: [string, number];
x = ['Runoob', 1];    // 运行正常
x = [1, 'Runoob'];    // 报错
console.log(x[0]);    // 输出 Runoob
```

#### 7.枚举：enum

```ts
//ps：枚举类型用于定义数值集合。
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2
```

#### 8.void：void，

```ts
//ps：用于标识方法返回值的类型，表示该方法没有返回值。
function hello(): void {
    alert("Hello Runoob");
}
```

#### 9.null：null， 

```ts
//ps：表示对象值缺失。
```

#### 10.undefined：undefined，

```ts
//ps：用于初始化变量为一个未定义的值
```

#### 11.never：never，

```ts
//ps：never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
```

### 2.TypeScript变量声明

#### 1.命名规则：

- 变量名称可以包含数字和字母。
- 除了下划线 **_** 和美元 **$** 符号外，不能包含其他特殊字符，包括空格。
- 变量名不能以数字开头。

#### 2.声明方式

- 声明变量的类型及初始值：

  ```ts
  var [变量名] : [类型] = 值;
  var uname:string = "Runoob";
  ```

- 声明变量的类型，但没有初始值，变量值会设置为 undefined：

  ```ts
  var [变量名] : [类型];
  var uname:string;
  ```

- 声明变量并初始值，但不设置类型，该变量可以是任意类型：

  ```ts
  var [变量名] = 值;
  var uname = "Runoob";
  ```

- 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：

  ```ts
  var [变量名];
  var uname;
  ```

#### 3.类型断言

- 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。语法格式：

  ```ts
  //<类型>值  或者  值 as 类型
  var str = '1' 
  var str2:number = <number> <any> str   //str、str2 是 string 类型
  console.log(str2)
  ```

#### 4.类型推断

- 当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。

- 如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。

  ```ts
  var num = 2;    // 类型推断为 number
  console.log("num 变量的值为 "+num); 
  num = "12";    // 编译错误
  console.log(num);
  //第一行代码声明了变量 num 并=设置初始值为 2。 注意变量声明没有指定类型。因此，程序使用类型推断来确定变量的数据类型，第一次赋值为 2，num 设置为 number 类型。
  //第三行代码，当我们再次为变量设置字符串类型的值时，这时编译会错误。因为变量已经设置为了 number 类型。
  ```

#### 5.变量作用域

- 变量作用域指定了变量定义的位置，程序中变量的可用性由变量作用域决定。

- TypeScript 有以下几种作用域：

  1. **全局作用域** − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用
  2. **类作用域** − 这个变量也可以称为 **字段**。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
  3. **局部作用域** − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。

  ```ts
  var global_num = 12          // 全局变量
  class Numbers { 
     num_val = 13;             // 实例变量
     static sval = 10;         // 静态变量
     
     storeNum():void { 
        var local_num = 14;    // 局部变量
     } 
  } 
  console.log("全局变量为: "+global_num)  
  console.log(Numbers.sval)   // 静态变量
  var obj = new Numbers(); 
  console.log("实例变量: "+obj.num_val)
  ```

## TypeScript语法

### 1.TypeScript 运算符 

#### 1.算术运算符

```ts
var y=5
//加法：x=y+2
//减法：x=y-2
//乘法：x=y*2
//除法：x=y/2
//取模：x=y%2
//自增：x=++y；x=y++，前面x=6，后面x=5；前后的y=6
//自减：x=--y；x=y--，前面x=4，后面x=5；前后的y=4
```

#### 2.关系运算符

```ts
var y=5
//等于==：x==8，返回false
//不等于!=：x!=8，返回true
//大于>
//小于<
//大于或等于>=
//小于或等于<=
```

#### 3.逻辑运算符

```ts
//&&表示and，都对才对
//||表示or，有一个对就对
//!表示not，返回相反值
```

#### 4.短路运算符(&& 与 ||)

- && 与 || 运算符可用于组合表达式。 && 运算符只有在左右两个表达式都为 true 时才返回 true
- || 运算符只要其中一个表达式为 true ，则该组合表达式就会返回 true。

#### 5.位运算符

- 位操作是程序设计中对位模式按位或二进制数的一元和二元操作。
- 一般用不到

#### 6.赋值运算符

- 一般用不到

#### 7.三元运算符 (?)

```
Test ? expr1 : expr2
```

#### 8.类型运算符

1. ##### typeof 运算符：typeof 是一元运算符，返回操作数的数据类型。

   ```ts
   var num = 12 
   console.log(typeof num);   //输出结果: number
   ```

2. ##### instanceof：instanceof 运算符用于判断对象是否为指定的类型，后面章节我们会具体介绍它。

3. ##### 负号运算符(-)：

   ```ts
   var x:number = 4 
   var y = -x; 
   console.log("x 值为: ",x);   // 输出结果 4 
   console.log("y 值为: ",y);   // 输出结果 -4
   ```

4. ##### 连接运算符 (+)

   ```ts
   var msg:string = "RUNOOB"+".COM" 
   console.log(msg)
   ```

### 2.TypeScript 条件语句

1. **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码
2. **if...else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
3. **if...else if....else 语句**- 使用该语句来选择多个代码块之一来执行
4. **switch 语句** - 使用该语句来选择多个代码块之一来执行

### 3.TypeScript 循环