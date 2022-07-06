/*定义全局变量*/
var index_1 = 0; /* index_1 图库1 指针*/
var index_2 = 0; /* index_2 图库2 指针*/
var index_3 = 0; /* index_1 图库3 指针*/
var index_4 = 0; /* index_2 图库4 指针*/
var index_5 = 0; /* index_1 图库5 指针*/
var index_6 = 0; /* index_2 图库6 指针*/
var img_1 = [
"static/pro1/1.png","static/pro1/2.png","static/pro1/3.png","static/pro1/4.png","static/pro1/5.png",
"static/pro1/6.png","static/pro1/7.png","static/pro1/8.png","static/pro1/9.png"];
/* 图库1 */
var img_2 = ["static/pro1/10.png","static/pro1/11.png"];
/* 图库2 */
var img_3 = [
"static/pro2/1.png","static/pro2/2.png","static/pro2/3.png","static/pro2/5.png","static/pro2/6.png",
"static/pro2/7.png","static/pro2/8.png","static/pro2/9.jpg","static/pro2/10.png"];
/* 图库3 */
var img_4 = ["static/pro3/2.png","static/pro3/3.png"];
/* 图库4 */
var img_5 = [
"static/pro4/1.png","static/pro4/2.png","static/pro4/3.png","static/pro4/4.png","static/pro4/5.png",
"static/pro4/6.png","static/pro4/7.png","static/pro4/8.png","static/pro4/9.png"];
/* 图库5 */
var img_6 = ["static/pro4/11.png","static/pro4/12.png","static/pro4/13.png"];
/* 图库6 */
var imgObject_1;
var imgObject_2;
var imgObject_3;
var imgObject_4;
var imgObject_5;
var imgObject_6;
//var info;
var timer;

window.onload = function () {/*当页面加载完成后再执行这部分js代码 该代码自动执行*/
/*当前图片窗口执行的图像次序*/
    imgObject_1 = document.getElementsByTagName("img")[1];
    imgObject_2 = document.getElementsByTagName("img")[2];
    imgObject_3 = document.getElementsByTagName("img")[3];
    imgObject_4 = document.getElementsByTagName("img")[4];
    imgObject_5 = document.getElementsByTagName("img")[6];
    imgObject_6 = document.getElementsByTagName("img")[5];
    var info = document.getElementById("info");
    clearInterval(timer);
    timer = setInterval(function () {
        index_1++;
        index_2++;
        index_3++;
        index_4++;
        index_5++;
        index_6++;
        if(index_1 > img_1.length-1){
            index_1 = 0;
            }
        if(index_2 > img_2.length-1){
            index_2 = 0;
            }
        if(index_3 > img_3.length-1){
            index_3 = 0;
            }
        if(index_4 > img_4.length-1){
            index_4 = 0;
            }
        if(index_5 > img_5.length-1){
            index_5 = 0;
            }
        if(index_6 > img_6.length-1){
            index_6 = 0;
            }
        imgObject_1.src = img_1[index_1];
        imgObject_2.src = img_2[index_2];
        imgObject_3.src = img_3[index_3];
        imgObject_4.src = img_4[index_4];
        imgObject_5.src = img_5[index_5];
        imgObject_6.src = img_6[index_6];
        },2000); /* 一张图片的延时时间 */
}