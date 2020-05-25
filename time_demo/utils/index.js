
export function dateFormat(date, fmt = 'yyyy-MM-dd hh:mm', clearHour = false) {
  //fmt=''这里可以为空，只是作为一个参考标准
  if (!date || (date && date.toString() === 'Invalid Date')) return null
  if (typeof date === 'string' || typeof date === 'number')
    date = new Date(date)
  if (clearHour) {
    date.setHours(0, 0, 0)
  }
  const texts = {
    //下面的+表示不严格匹配
    'M+': date.getMonth() + 1, // 月
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季
    'S+': date.getMilliseconds(), // 毫秒的情况
  }
  const week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d',
  }
  if (/(y+)/.test(fmt)) {//这是匹配年的，暂时我们的代码不用
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  if (/(E+)/.test(fmt)) {//这个也暂时没用
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? '\u661f\u671f'
          : '\u5468'
        : '') + week[date.getDay() + '']
    )
  }
  for (const k in texts) {//这个是匹配基本texts中
    if (new RegExp('(' + k + ')').test(fmt)) {//匹配位置找到
      fmt = fmt.replace(//进行替换
        RegExp.$1,
        RegExp.$1.length === 1//如果输入的是一位数，比如ss
          ? texts[k]//则直接替换
          : ('00' + texts[k]).substr(('' + texts[k]).length)//否则在前面补0，补成两位数
      )
    }
  }
  //返回生成的时间文本
  return fmt
}