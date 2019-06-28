// 这里封装我们常用代码的JS代码
var kits = {} ;
// 封装一个获取指定区间的随机整数的方法
kits.randomInt = function ( m , n) {
  Math.floor(Math.random()*(m - n + 1) + n);
}