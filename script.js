let code = document.getElementById("code").innerHTML;
let change = document.getElementById("change");
console.log(code);
code = code.replace(/ /g, `　`);
code = code.replace(/\r?\n/g, `<br>`);
code = code.replace(/　"/g, `　<span class='string'>"`);
code = code.replace(/",/g, `"</span>,`);
code = code.replace(/";/g, `"</span>;`);
code = code.replace(/"　/g, `"</span>　`);
// code = code.replace(/\[/g, `<span class='brackets'>[`);
// code = code.replace(/\]/g, `]</span>`);
// code = code.replace(/=　/g, `=　<span class='number'>`);
// code = code.replace(/;/g, `</span>;`);
// code = code.replace(//g, `<span class='name'>this`);
// code = code.replace(/　=/g, `</span>　=`);

// 数字
code = code.replace(/　[0-9]*;/g, `<span class='number'>$&</span>`);
// this
code = code.replace(/this*/g, `<span class='property'>$&</span>`);
// code = code.replace(/this.[0-9a-zA-Z]*/g, `<span class='name'>$&</span>`);
// メソッド
code = code.replace(/　[0-9a-zA-Z]*\(\)/g, `<span class='methods'>$&</span>`);
// クラス return
code = code.replace(/class　/g, `<span class='class'>class　</span>`);
// クラス名
code = code.replace(/RuiOkazaki/g, `<span class='className'>$&</span>`);
code = code.replace(/return　/g, `<span class='className'>return　</span>`);
// () {} =
code = code.replace(
  /\(|\)|\[|\]|　\=|\{|\}/g,
  `<span class='brackets'>$&</span>`
);

change.innerHTML = code;
