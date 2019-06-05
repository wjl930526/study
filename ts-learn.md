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
