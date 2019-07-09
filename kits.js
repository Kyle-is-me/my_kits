// 这里封装我们常用代码的JS代码
var kits = {};
// 封装一个获取指定区间的随机整数的方法
kits.randomInt = function (m, n) {
  Math.floor(Math.random() * (m - n + 1) + n);
}

// 封装一个时间函数
kits.formateDate = function () {
  let date = new Date();
  let y = date.getFullYear();
  let M = date.getMonth();
  let d = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  // 判断是否小于10，如果是则前面加0
  M = M < 10 ? '0' + M : M;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return y + '- ' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
}


// 封装一个可以生成唯一ID的函数（方法）
kits.primaryKey = function () {
  // 我们通过时间戳+一个大范围的随机数来生成id
  let now = Date.now();//得到从1970年到现在的总的毫秒数
  // 为了防止在1毫秒内生成很多个id，我们再加上一个大范围的随机数
  let r = kits.randomInt(100000, 999999);
  // 把得到的两组数字拼接起来
  return now + '' + r;
}