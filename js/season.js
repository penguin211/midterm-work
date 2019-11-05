window.onload = function () {
    var intro = document.getElementById('intro');
    var img1 = document.getElementById('img1');//圖片1
    var img2 = document.getElementById('img2');//圖片2
    var arr1 = ['img/snow1.jpg', 'img/snow2.jpg', 'img/snow3.jpg', 'img/snow4.jpg', 'img/snow5.jpg']; //圖片地址
    var timer1 = null;
    var timer2 = null;
    var timer3 = null;
    //初始化
    var a = 0;
    var b = 1;
    intro.style['top'] = '400px';
    img1.src = arr1[a];
    img2.src = arr1[b];

    
    timer1 = setInterval(changeImg, 3000);
    timer3 = setInterval(autoText, 30);
    function changeImg() {
        clearInterval(timer2);
        clearInterval(timer3);
        intro.style['top'] = '400px';
        timer2 = setInterval(autoPic, 30);
        timer3 = setInterval(autoText, 30);
    };

    function autoPic() {
        var length1 = parseInt(getStyle(img1, 'left')) - 10;
        var length2 = parseInt(getStyle(img2, 'left')) - 10;
        img1.style['left'] = length1 + 'px';
        img2.style['left'] = length2 + 'px';

        if (length1 == -400) {
            a += 2;
            if (a >= arr1.length) a -= arr1.length;
            img1.style['left'] = '400px';
            img1.src = arr1[a];
            clearInterval(timer2);
        }
        if (length2 == -400) {
            b += 2;
            if (b >= arr1.length) b -= arr1.length;
            img2.style['left'] = '400px';
            img2.src = arr1[b];
            clearInterval(timer2);
        }
    };

    function autoText() {
        var height = parseInt(getStyle(intro, 'top')) - 2;
        intro.style['top'] = height + 'px';
        if (height <= 340) clearInterval(timer3);
    };
    function getStyle(obj, str) { return obj.currentStyle ? obj.currentStyle[str] : getComputedStyle(obj)[str]; };
};