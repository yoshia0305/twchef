/* ���{���� �����]�p�Ƨx���� DIY (�{�ý� John Hawke �X��) �d�ҵ{��,�ԲӨϥλ����Ш��Ӯ� */
var titletxt = new Array (
 "�x�W�p�p~~���d�i�ͭ��~",
 "���~:�ï��B�j�P�����B����ï��B�ú�B���G�� ", 
 "�ĥΤѵM��ơA�L�K�[�H�u���A�����d�[���I",
 "�w��ӹq�q��"
 
);
var ary_p=0;
function changetitle() 
{ 
window.document.title=titletxt[ary_p];    // ��ܼ��D��r
if (ary_p == 3) ary_p=0; else ary_p++;
setTimeout("changetitle()",3000);         // ���� 3 �����ܥt�@�Ӽ��D��r

}
changetitle();
