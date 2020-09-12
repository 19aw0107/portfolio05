/*ここでは勝敗数を記録する箱を作ります。*/
var win = 0;/*勝利数の初期化*/
var draw = 0;/*引き分け数の初期化*/
var los = 0;/*敗北数の初期化*/

/*常に表示する部分です。練習の為にHTMLではなくjsを使ってみました。*/
window.onload = function () {
    document.getElementById("title").innerText = "じゃんけんゲーム";/*タイトルを表示します。*/
    document.getElementById("nanidasu").innerText = "先に3勝した方の勝ちです!!" + "あなたは何を出しますか？";/*テキストを表示します。*/
}

function guudes(dt){
    var x = dt.value;
    /*何を出したのかを判定しています。グーチョキパーのそれぞれにvalueで指定していて、それを引っ張ってきています。*/
    document.getElementById("show").innerHTML = "あなたは「" + x + "」を出しました。";
    /*HTMLのshowの場所に、ユーザーが何を出したのかを表示します。先ほどのvalueから引っ張ってきたものがxになります。*/
    var cpu = ["グー", "チョキ", "パー"];
    /*配列にコンピュータが出すことができるものを縛ります。*/
    var cpupoi = Math.floor(Math.random() * 3);
    /*0-2までをランダムで出します。0からグーチョキパーとなります。*/
    document.getElementById("cpushow").innerHTML = "わたしは「" + cpu[cpupoi] + "」を出しました。";
    if (cpupoi == 0) {/*CPUがグーを出す*/
        document.getElementById("kekka").innerHTML = "今回はあいこでしたね。";/*結果*/
        draw++;/*数値+1*/
    }
    else if (cpupoi == 1) {/*CPUがチョキを出す*/
        document.getElementById("kekka").innerHTML = "今回はあなたの勝ちです。";/*結果*/
        win++;/*数値+1*/
    }
    else if (cpupoi == 2) {/*CPUがパーを出す*/
        document.getElementById("kekka").innerHTML = "今回はわたしの勝ちです。";/*結果*/
        los++;/*数値+1*/
    }
    document.getElementById("suuji").innerHTML = "【結果】" + "勝利:" + win + "回" + " 引き分け:" + draw + "回" + " 負け:" + los + "回";/*結果を表示します。*/
    if (los == 3) {/*3回負けた場合*/
        document.getElementById("owata").innerHTML = "<h2>お疲れさまでした。私の勝ちですね！</h2>";/*コンピュータが勝ったテキストを表示*/
        win = 0;/*以下数値の初期化*/
        draw = 0;
        los = 0;
    }
    else if (win == 3) {/*3回勝った場合*/
        document.getElementById("owata").innerHTML = "<h2>お疲れさまでした。あなたの勝ちですね！</h2>";/*ユーザーが勝ったテキストを表示*/
        win = 0;/*以下数値の初期化*/
        draw = 0;
        los = 0;
    }
    else if (win < 3 || los < 3) {/*勝負中です。*/
        document.getElementById("owata").innerHTML = "";/*空欄*/
    }
}
function tyokides(dt) {
    var x = dt.value;
    /*何を出したのかを判定しています。グーチョキパーのそれぞれにvalueで指定していて、それを引っ張ってきています。*/
    document.getElementById("show").innerHTML = "あなたは「" + x + "」を出しました。";
    /*HTMLのshowの場所に、ユーザーが何を出したのかを表示します。先ほどのvalueから引っ張ってきたものがxになります。*/
    var cpu = ["グー", "チョキ", "パー"];
    /*配列にコンピュータが出すことができるものを縛ります。*/
    var cpupoi = Math.floor(Math.random() * 3);
    /*0-2までをランダムで出します。0からグーチョキパーとなります。*/
    document.getElementById("cpushow").innerHTML = "わたしは「" + cpu[cpupoi] + "」を出しました。";
    if (cpupoi == 0) {/*CPUがグーを出す*/
        document.getElementById("kekka").innerHTML = "今回はわたしの勝ちです。";/*結果*/
        los++;/*数値+1*/
    }
    else if (cpupoi == 1) {/*CPUがチョキを出す*/
        document.getElementById("kekka").innerHTML = "今回はあいこでしたね";/*結果*/
        draw++;/*数値+1*/
    }
    else if (cpupoi == 2) {/*CPUがパーを出す*/
        document.getElementById("kekka").innerHTML = "今回はあなたの勝ちです。";/*結果*/
        win++;/*数値+1*/
    }
    document.getElementById("suuji").innerHTML = "【結果】" + "勝利:" + win + "回" + " 引き分け:" + draw + "回" + " 負け:" + los + "回";/*結果を表示します。*/
    if (los == 3) {/*3回負けた場合*/
        document.getElementById("owata").innerHTML = "<h2>お疲れさまでした。私の勝ちですね！</h2>";/*コンピュータが勝ったテキストを表示*/
        win = 0;/*以下数値の初期化*/
        draw = 0;
        los = 0;
    }
    else if (win == 3) {/*3回勝った場合*/
        document.getElementById("owata").innerHTML = "<h2>お疲れさまでした。あなたの勝ちですね！</h2>";/*ユーザーが勝ったテキストを表示*/
        win = 0;/*以下数値の初期化*/
        draw = 0;
        los = 0;
    }
    else if (win < 3 || los < 3) {/*勝負中です。*/
        document.getElementById("owata").innerHTML = "";/*空欄*/
    }
}
function paades(dt) {
    var x = dt.value;
    /*何を出したのかを判定しています。グーチョキパーのそれぞれにvalueで指定していて、それを引っ張ってきています。*/
    document.getElementById("show").innerHTML = "あなたは「" + x + "」を出しました。";
    /*HTMLのshowの場所に、ユーザーが何を出したのかを表示します。先ほどのvalueから引っ張ってきたものがxになります。*/
    var cpu = ["グー", "チョキ", "パー"];
    /*配列にコンピュータが出すことができるものを縛ります。*/
    var cpupoi = Math.floor(Math.random() * 3);
    /*0-2までをランダムで出します。0からグーチョキパーとなります。*/
    document.getElementById("cpushow").innerHTML = "わたしは「" + cpu[cpupoi] + "」を出しました。";
    if (cpupoi == 0) {/*CPUがグーを出す*/
        document.getElementById("kekka").innerHTML = "今回はあなたの勝ちです。";/*結果*/
        win++;/*数値+1*/
    }
    else if (cpupoi == 1) {/*CPUがチョキを出す*/
        document.getElementById("kekka").innerHTML = "今回はわたしの勝ちです。";/*結果*/
        los++;/*数値+1*/
    }
    else if (cpupoi == 2) {/*CPUがパーを出す*/
        document.getElementById("kekka").innerHTML = "今回はあいこでしたね";/*結果*/
        draw++;/*数値+1*/
    }
    document.getElementById("suuji").innerHTML = "【結果】" + "勝利:" + win + "回" + " 引き分け:" + draw + "回" + " 負け:" + los + "回";/*結果を表示します。*/
    if (los == 3) {/*3回負けた場合*/
        document.getElementById("owata").innerHTML = "<h2>お疲れさまでした。私の勝ちですね！</h2>";/*コンピュータが勝ったテキストを表示*/
        win = 0;/*以下数値の初期化*/
        draw = 0;
        los = 0;
    }
    else if (win == 3) {/*3回勝った場合*/
        document.getElementById("owata").innerHTML = "<h2>お疲れさまでした。あなたの勝ちですね！</h2>";/*ユーザーが勝ったテキストを表示*/
        win = 0;/*以下数値の初期化*/
        draw = 0;
        los = 0;
    }
    else if (win < 3 || los < 3) {/*勝負中です。*/
        document.getElementById("owata").innerHTML = "";/*空欄*/
    }
}

