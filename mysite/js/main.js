$(function(){

    imagesProgress();
    initNav();


    // 画像の読み込み状況をプログレス表示関数
    function imagesProgress(){

        var $container = $('#progress'),                        //プログレス表示全体のコンテナー
            $progressBar = $container.find('.progress-bar'),    //プログレス表示のバーブ部分
            $progressText = $container.find('.progress-text'),  //プログレス表示のテキスト部分

            // imagesLoadedライブラリでbody要素内の画像の読み込み状況を監視
            //同時にbody全体の画像の総数を保存
            imgLoad = imagesLoaded('body'),
            imgTotal = imgLoad.images.length,

            //読み込みの完了した画像の数のカウンターと、
            //プログレス表示の現在地にあたる数値(ともに最初は0)
            imgLoaded = 0,
            current = 0,

            //1秒間に60回のペースで読み込み状況をチェック
            progressTimer = setInterval(updateProgress, 1000 / 60);

        //imagesLoadedを利用し、画像が読み込まれるごとにカウンターを加算
        imgLoad.on('progress', function(){
            imgLoaded++;
        });

        //画像の読み込み状況をもとにプログレス表示を更新
        //この関数はsetInterval()メソッドにより1秒間に60回呼び出される
        function updateProgress(){

            //読み込み完了した画像のパーセンテージ
            var target = (imgLoaded / imgTotal) * 100;

            //current(現在地)とtarget(目的地)の距離をもとにイージングをかける
            current += (target - current) * 0.1;

            //表示のバーの幅とテキストにcurrentの値を反映
            //テキストは小数点以下を切り捨てて整数に
            $progressBar.css({ width: current + '%'});
            $progressText.text(Math.floor(current) + '%');

            //終了処理
            if(current >= 100){

                //プログレス表示の更新をストップ
                clearInterval(progressTimer);
                //CSSでスタイルを変えるためクラスを追加
                $container.addClass('progress-complete');
                //プログレスバーとテキストを同時にアニメーションさせるため、
                //グループ化して1つのjQueryオブジェクトに
                $progressBar.add($progressText)
                    //0.5秒待つ
                    .delay(500)
                    //0.25秒かけてプログレスバーとテキストを透明にする
                    .animate({ opacity:0 }, 250, function(){
                        //1秒かけてオーバーレイを上方向へスライドアウト
                        $container.animate({top: '-100%' }, 1000, 'easeInOutQuint');
                    });
            }

            //currentが99.9より大きければ100とみなして終了処理へ
            if(current > 99.9){
                current = 100;
            }
        }
    }

    // ナビゲーション初期化関数
    function initNav(){
        
        var $pageMain = $("#page-main"),
            $nav = $("#nav"),
            $navItem = $nav.find('li'),
            currentScene = 0;

        updateNav();

        $nav.on('click', 'a', function(event){
            event.preventDefault();
            var i = $(this).closest($navItem).index();
            if (i === currentScene){
                return;
            }
            // if(i === 1){
            //     initScene2();
            // }
            currentScene = i;
            $pageMain.
                stop(true).
                animate({ top: -100 * i + '%'}, 1200, 'easeInOutQuint', function(){
                    // if (i === 1){
                    //     activateScene2();//Scene 2描画
                    // }
                    // else{
                    //     initScene2();
                    // }
                });
            updateNav();
        });

        function updateNav () {
            $navItem.
                removeClass('active').
                eq(currentScene).addClass('active');
        }
    }
    

    var qrtext = "http://tecchiri007.html.xdomain.jp/";
    var utf8qrtext = unescape(encodeURIComponent(qrtext));
    $("#img-qr").html("");
    $("#img-qr").qrcode({text: utf8qrtext});
});

