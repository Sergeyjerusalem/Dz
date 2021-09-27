let str = "69Word"
let bool = false
let num = 1

 console.log(str + bool); //- boolean переходит в значение string - Wordfalse
 console.log(str + num); // - number переходит в значение string - 69Word1
 console.log(num + bool); // - boolean переходит в значение number, false=>0, 1+0=1

 console.log(str * bool); // - возвращает значение NaN
 console.log(str * num);  // - возвращает значение NaN
 console.log(num * bool); // - возваращает ноль, false => 0, 1 * 0 = 0


 console.log(str - bool);  // - возвращает значение NaN
 console.log(str - num);  // - возвращает значение NaN
 console.log(num - bool); // - возваращает ноль, false => 0, 1 - 0 = 1


 console.log(str / bool); // - возвращает значение NaN
 console.log(str / num);  //  - возвращает значение NaN
 console.log(num / bool); // - возваращает infinity, false => 0, 1 / 0 = infinity

  str = parseInt(str);
  console.log(typeof str);

  bool = Number(bool);
  console.log(typeof bool);

  num = String(num);
  console.log(typeof num);

  bool = String(bool);
  console.log(typeof bool);
  
  str = Boolean(str);
  console.log(typeof str);

  num = Boolean(num);
  console.log(typeof num);

