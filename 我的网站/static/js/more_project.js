/*定义全局变量*/
var index_1 = 0; /* index_1 图库1 指针*/
var index_2 = 0; /* index_2 图库2 指针*/
var index_3 = 0; /* index_1 图库3 指针*/
var index_4 = 0; /* index_2 图库4 指针*/
var index_5 = 0; /* index_1 图库5 指针*/
var index_6 = 0; /* index_2 图库6 指针*/
var index_7 = 0; /* index_2 图库7 指针*/
var index_8 = 0; /* index_2 图库7 指针*/
var img_1 = ["static/pro5/1.jpg","static/pro5/2.jpg","static/pro5/3.jpg","static/pro5/4.jpg"];
/* 图库1 */
var img_2 = ["static/pro5/5.jpg","static/pro5/6.jpg","static/pro5/6-1.png"];
/* 图库2 */
var img_3 = ["static/pro5/7.jpg","static/pro5/8.jpg"];
/* 图库3 */
var img_4 = ["static/pro5/9.jpg","static/pro5/10.jpg"];
/* 图库4 */
var img_5 = ["static/pro5/11.jpg","static/pro5/11.1.jpg","static/pro5/12.jpg"];
/* 图库5 */
var img_6 = ["static/pro5/16.jpg","static/pro5/17.jpg","static/pro5/18.jpg","static/pro5/19.jpg","static/pro5/20.jpg"];
/* 图库6 */
var img_7 = ["static/pro5/21.jpg","static/pro5/21.jpg","static/pro5/22.jpg","static/pro5/23.jpg"];
/* 图库7 */
var img_8 = ["static/pro5/13.jpg","static/pro5/14.jpg","static/pro5/15.jpg"];
/* 图库8 */
var imgObject_1;
var imgObject_2;
var imgObject_3;
var imgObject_4;
var imgObject_5;
var imgObject_6;
var imgObject_7;
var imgObject_8;
//var info;
var timer;

window.onload = function () {/*当页面加载完成后再执行这部分js代码 该代码自动执行*/
/*当前图片窗口执行的图像次序*/
    imgObject_1 = document.getElementsByTagName("img")[1];
    imgObject_2 = document.getElementsByTagName("img")[2];
    imgObject_3 = document.getElementsByTagName("img")[3];
    imgObject_4 = document.getElementsByTagName("img")[4];
    imgObject_5 = document.getElementsByTagName("img")[5];
    imgObject_6 = document.getElementsByTagName("img")[6];
    imgObject_7 = document.getElementsByTagName("img")[7];
    imgObject_8 = document.getElementsByTagName("img")[8];
    var info = document.getElementById("info");

    clearInterval(timer);
    timer = setInterval(function () {
        index_1++;
        index_2++;
        index_3++;
        index_4++;
        index_5++;
        index_6++;
        index_7++;
        index_8++;
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
        if(index_7 > img_7.length-1){
            index_7 = 0;
            }
        if(index_8 > img_8.length-1){
            index_8 = 0;
            }
        imgObject_1.src = img_1[index_1];
        imgObject_2.src = img_2[index_2];
        imgObject_3.src = img_3[index_3];
        imgObject_4.src = img_4[index_4];
        imgObject_5.src = img_5[index_5];
        imgObject_6.src = img_6[index_6];
        imgObject_7.src = img_7[index_7];
        imgObject_8.src = img_8[index_8];
        },2000); /* 一张图片的延时时间 */
}