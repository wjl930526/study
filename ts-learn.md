# TS 学习笔记 

## TS中基础类型

### 1. boolean

```let isDone: boolean = false;```

### 2. string

``` string
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
```

### 3. number

``` number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
```

### 4. Array

``` array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

### 5. Tuple 元组

``` tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
x[4] = true; // Error
```

### 6. enum 枚举

### 7. Any

### 8. Void

### 9. Null和Undefined

### 10. Never

### 11. Object

<font color=#bf414a size=4 face="黑体">object</font>表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

## 泛型


<font color=#bf414a size=4 face="黑体">泛型很复杂，需要经常翻看！！！ https://www.tslang.cn/docs/handbook/generics.html</font>
```
function identity<T>(arg: T): T {
    return arg;
}
```
我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。



