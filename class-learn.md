# Js中继承学习笔记(构造函数，Class)

## 构造函数和Class

``` 构造函数
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```

``` Class
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p =new Point(2, 3);
```

`constructor,toString等方法都是定义在Point的原型上的,this关键字都指向实例对象，所以x,y都定义在实例上`

``` constructor
Point === Point.prototype.constructor // true
p.constructor === Point.prototype.constructor
```

`Point.prototype.constructor` 返回创建实例对象的 Point 构造函数的引用。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。

所有对象都会从它的原型上继承一个 constructor 属性：

``` constructor
p.constructor === Point; // true // 实例对象的构造方法指向构造函数
p.constructor === Point.prototype.constructor; // true

var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array // true

var n = new Number(3);
n.constructor === Number; // true
```
