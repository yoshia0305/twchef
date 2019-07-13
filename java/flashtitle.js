/* 此程式為 網頁設計排困解難 DIY (程秉輝 John Hawke 合著) 範例程式,詳細使用說明請見該書 */
var titletxt = new Array (
 "台灣小廚~~健康養生食品",
 "產品:酵素、大燕麥片、鳳梨酵素、蜆精、蔬果汁 ", 
 "採用天然原料，無添加人工物，為健康加分！",
 "歡迎來電訂購"
 
);
var ary_p=0;
function changetitle() 
{ 
window.document.title=titletxt[ary_p];    // 顯示標題文字
if (ary_p == 3) ary_p=0; else ary_p++;
setTimeout("changetitle()",3000);         // 等待 3 秒後顯示另一個標題文字

}
changetitle();
