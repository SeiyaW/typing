var wordlist = [
                //あ行 
                "atohanotonareyamatonare","atamakakusitesirikakusazu",
                "isogabamaware","inotiattenomonodane",
                "uogokoroarebamizugokoro","umanomimininennbutu",
                "ebidetaiwoturu","ennositanotikaramoti",
                "outakoniosierareteasasewowataru","oninikanabou",
                //か行
                "kaiinunitewokamareru","kappanokawanagare",
                "kiitegokurakumitejigoku","kikuhaittokinohajikikanuhaissyounohaji",
                "kutihawazawainomonn","kutimohattyoutemohattyou",
                "kewohuitekizuwomotomu","geihamiwotasuku",
                "koukaisakinitatazu","koubounimohudenoayamari",
                //さ行
                "sarumokikaraotiru","sawaranukaminitatarinasi",
                "sitasikinakanimoreigiari","syunimajiwarebaakakunaru",
                "sukikosomononojouzunare","sugitaruhanaooyobazarugagotosi",
                "seniharahakaerarenu","sennrinomitimoippoyori",
                "sonnsitetokutore","sonawaruwoitininnnimotomunakare",
                //た行
                "taikaiwotedehusagu","taigannnokaji",
                "tietotikarahaomonininaranu","tidetiwoarau",
                "tukitosupponn","tukinomaenotomosibi",
                "tekinisiowookuru","tenaraihasakanikurumawoosugagotosi",
                "tokihakanenari","toseihahappyakuyasina",
                //な行
                "naitebasyokuwokiru","nagakoujouhaakubinotane",
                "nikaikaramegusuri","nikukitakanihaewokae",
                "nusubitotakedakesii","nuretedeawa",
                "nekonotemokaritai","nennrikiiwawotoosu",
                "norennniudeosi","nomitoiebatuti",
                //は行
                "haigunnnosyouhaheiwokatarazu","bakanohitotuoboe",
                "hitosujinawadeyukanu","hiyazaketooyanoikennhaatonokusuri",
                "hukusuibonnnikaerazu","hukaikawahasizukaninagareru",
                "bennkeinonakidokoro","pennhakennyorimotuyosi",
                "honeorizonnnokutabiremouke","bounihuru",
                //ま行
                "maikyoniitomaganai","magonimoisyou",
                "miginomimikarahidarinomimi","mikosiwokatugu",
                "muyounotyoubutu","musizugahasiru",
                "mekaraurokogaotiru","meniiretemoitakunai",
                "monukenokara","motonosayaheosamaru",
                //や行
                "yakeisinimizu","yabukarabou",
                "yuusyuunobi","yumehasakayume",
                "yokoyariwoireru","yokuniitadakinasi",
                //ら行
                "rakuarebakuari","rakuinnwoosareru",
                "ryoutenihana","ryouyakuhakutininigasi",
                "ruihatomowoyobu","rutubotokasu",
                "rekisihakurikaesu","reimosugirebabureininaru",
                "ro-mahaitinitinisitenarazu","ronnyorisyouko",
                // わ行
                "wakagenoitari","waraukadonihahukukitaru",

                // 気になったことわざ集
                "ikarerukobusiegaoniatarazu","issunnnokouinnkaronnzubekarazu","inakanogakumonnyorikyounohirune","unomanesurukarasu",
                "umanihanottemiyohitonihasoutemiyo","unnhatennniari","ekisyaminouesirazu","ennnakisyujouhadosigatasi",
                "otokohasikiiwomatagebanananinnnotekiari","kassitemotousennnomizuwonomazu","kanimititenotisusumu","kanemotikennkasezu"

            ];//単語リスト(ローマ字)
var wordlistJapanese = [
                        //あ行
                        "<ruby>後<rt>あと</rt></ruby>は<ruby>野<rt>の</rt></ruby>となれ<ruby>山<rt>やま</rt></ruby>となれ",
                        "<ruby>頭<rt>あたま</rt></ruby><ruby>隠<rt>かく</rt></ruby>して<ruby>尻<rt>しり</rt></ruby><ruby>隠<rt>かく</rt></ruby>さず",
                        "<ruby>急<rt>いそ</rt></ruby>がば<ruby>回<rt>まわ</rt></ruby>れ",
                        "<ruby>命<rt>いのち</rt></ruby>あっての<ruby>物種<rt>ものだね</rt></ruby>",
                        "<ruby>魚心<rt>うおごころ</rt></ruby>あれば<ruby>水心<rt>みずごころ</rt></ruby>",
                        "<ruby>馬<rt>うま</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>に<ruby>念仏<rt>ねんぶつ</rt></ruby>",
                        "<ruby>海老<rt>えび</rt></ruby>で<ruby>鯛<rt>たい</rt></ruby>を<ruby>釣<rt>つ</rt></ruby>る",
                        "<ruby>縁<rt>えん</rt></ruby>の<ruby>下<rt>した</rt></ruby>の<ruby>力持<rt>ちからも</rt></ruby>ち",
                        "<ruby>負<rt>お</rt></ruby>うた<ruby>子<rt>こ</rt></ruby>に<ruby>教<rt>おし</rt></ruby>えられて<ruby>浅瀬<rt>あさせ</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>る",
                        "<ruby>鬼<rt>おに</rt></ruby>に<ruby>金棒<rt>かなぼう</rt></ruby>",
                        //か行
                        "<ruby>飼<rt>か</rt></ruby>い<ruby>犬<rt>いぬ</rt></ruby>に<ruby>手<rt>て</rt></ruby>を<ruby>嚙<rt>か</rt></ruby>まれる",
                        "<ruby>河童<rt>かっぱ</rt></ruby>の<ruby>川流<rt>かわなが</rt></ruby>れ",
                        "<ruby>聞<rt>き</rt></ruby>いて<ruby>極楽見<rt>ごくらくみ</rt></ruby>て<ruby>地獄<rt>じごく</rt></ruby>",
                        "<ruby>聞<rt>き</rt></ruby>くは<ruby>一時<rt>いっとき</rt></ruby>の<ruby>恥聞<rt>はじき</rt></ruby>かぬは<ruby>一生<rt>いっしょう</rt></ruby>の<ruby>恥<rt>はじ</rt></ruby>",
                        "<ruby>口<rt>くち</rt></ruby>は<ruby>災<rt>わざわ</rt></ruby>いの<ruby>門<rt>もん</rt></ruby>",
                        "<ruby>口<rt>くち</rt></ruby>も<ruby>八丁手<rt>はっちょうて</rt></ruby>も<ruby>八丁<rt>はっちょう</rt></ruby>",
                        "<ruby>毛<rt>け</rt></ruby>を<ruby>吹<rt>ふ</rt></ruby>いて<ruby>疵<rt>きず</rt></ruby>を<ruby>求<rt>もと</rt></ruby>む",
                        "<ruby>芸<rt>げい</rt></ruby>は<ruby>身<rt>み</rt></ruby>を<ruby>助<rt>たす</rt></ruby>く",
                        "<ruby>後悔先<rt>こうかいさき</rt></ruby>に<ruby>立<rt>た</rt></ruby>たず",
                        "<ruby>弘法<rt>こうぼう</rt></ruby>にも<ruby>筆<rt>ふで</rt></ruby>の<ruby>誤<rt>あやま</rt></ruby>り",
                        //さ行
                        "<ruby>猿<rt>さる</rt></ruby>も<ruby>木<rt>き</rt></ruby>から<ruby>落<rt>お</rt></ruby>ちる",
                        "<ruby>触<rt>さわ</rt></ruby>らぬ<ruby>神<rt>かみ</rt></ruby>に<ruby>祟<rt>たた</rt></ruby>りなし",
                        "<ruby>親<rt>した</rt></ruby>しき<ruby>中<rt>なか</rt></ruby>にも<ruby>礼儀<rt>れいぎ</rt></ruby>あり",
                        "<ruby>朱<rt>しゅ</rt></ruby>に<ruby>交<rt>まじ</rt></ruby>われば<ruby>赤<rt>あか</rt></ruby>くなる",
                        "<ruby>好<rt>す</rt></ruby>きこそ<ruby>物<rt>もの</rt></ruby>の<ruby>上手<rt>じょうず</rt></ruby>なれ",
                        "<ruby>過<rt>す</rt></ruby>ぎたるは<ruby>猶及<rt>なおおよ</rt></ruby>ばざるが<ruby>如<rt>ごと</rt></ruby>し",
                        "<ruby>背<rt>せ</rt></ruby>に<ruby>腹<rt>はら</rt></ruby>はかえられぬ",
                        "<ruby>千里<rt>せんり</rt></ruby>の<ruby>道<rt>みち</rt></ruby>も<ruby>一歩<rt>いっぽ</rt></ruby>より",
                        "<ruby>損<rt>そん</rt></ruby>して<ruby>得取<rt>とくと</rt></ruby>れ",
                        "<ruby>備<rt>そな</rt></ruby>わるを<ruby>一人<rt>いちにん</rt></ruby>に<ruby>求<rt>もと</rt></ruby>むなかれ",
                        //た行
                        "<ruby>大海<rt>たいかい</rt></ruby>を<ruby>手<rt>て</rt></ruby>で<ruby>塞<rt>ふさ</rt></ruby>ぐ",
                        "<ruby>対岸<rt>たいがん</rt></ruby>の<ruby>火事<rt>かじ</rt></ruby>",
                        "<ruby>知恵<rt>ちえ</rt></ruby>と<ruby>力<rt>ちから</rt></ruby>は<ruby>重荷<rt>おもに</rt></ruby>にならぬ",
                        "<ruby>血<rt>ち</rt></ruby>で<ruby>血<rt>ち</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>う",
                        "<ruby>月<rt>つき</rt></ruby>と<ruby>鼈<rt>すっぽん</rt></ruby>",
                        "<ruby>月<rt>つき</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>の<ruby>灯火<rt>ともしび</rt></ruby>",
                        "<ruby>敵<rt>てき</rt></ruby>に<ruby>塩<rt>しお</rt></ruby>を<ruby>送<rt>おく</rt></ruby>る",
                        "<ruby>手習<rt>てなら</rt></ruby>いは<ruby>坂<rt>さか</rt></ruby>に<ruby>車<rt>くるま</rt></ruby>を<ruby>押<rt>お</rt></ruby>すが<ruby>如<rt>ごと</rt></ruby>し",
                        "<ruby>時<rt>とき</rt></ruby>は<ruby>金<rt>かね</rt></ruby>なり",
                        "<ruby>渡世<rt>とせい</rt></ruby>は<ruby>八百八品<rt>はっぴゃくやしな</rt></ruby>",
                        //な行
                        "<ruby>泣<rt>な</rt></ruby>いて<ruby>馬謖<rt>ばしょく</rt></ruby>を<ruby>斬<rt>き</rt></ruby>る",
                        "<ruby>長口上<rt>ながこうじょう</rt></ruby>は<ruby>欠伸<rt>あくび</rt></ruby>の<ruby>種<rt>たね</rt></ruby>",
                        "<ruby>二階<rt>にかい</rt></ruby>から<ruby>目薬<rt>めぐすり</rt></ruby>",
                        "<ruby>憎<rt>にく</rt></ruby>き<ruby>鷹<rt>たか</rt></ruby>には<ruby>餌<rt>え</rt></ruby>を<ruby>飼<rt>か</rt></ruby>え",
                        "<ruby>盗人猛猛<rt>ぬすびとたけだけ</rt></ruby>しい",
                        "<ruby>濡<rt>ぬ</rt></ruby>れ<ruby>手<rt>て</rt></ruby>で<ruby>粟<rt>あわ</rt></ruby>",
                        "<ruby>猫<rt>ねこ</rt></ruby>の<ruby>手<rt>て</rt></ruby>も<ruby>借<rt>か</rt></ruby>りたい",
                        "<ruby>念力岩<rt>ねんりきいわ</rt></ruby>を<ruby>徹<rt>とお</rt></ruby>す",
                        "<ruby>暖簾<rt>のれん</rt></ruby>に<ruby>腕押<rt>うでお</rt></ruby>し",
                        "<ruby>鑿<rt>のみ</rt></ruby>と<ruby>言<rt>い</rt></ruby>えば<ruby>槌<rt>つち</rt></ruby>",
                        //は行
                        "<ruby>敗軍<rt>はいぐん</rt></ruby>の<ruby>将<rt>しょう</rt></ruby>は<ruby>兵<rt>へい</rt></ruby>を<ruby>語<rt>かた</rt></ruby>らず",
                        "<ruby>馬鹿<rt>ばか</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つ<ruby>覚<rt>おぼ</rt></ruby>え",
                        "<ruby>一筋縄<rt>ひとすじなわ</rt></ruby>で<ruby>行<rt>ゆ</rt></ruby>かぬ",
                        "<ruby>冷酒<rt>ひやざけ</rt></ruby>と<ruby>親<rt>おや</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>は<ruby>後<rt>あと</rt></ruby>の<ruby>薬<rt>くすり</rt></ruby>",
                        "<ruby>覆水盆<rt>ふくすいぼん</rt></ruby>に<ruby>返<rt>かえ</rt></ruby>らず",
                        "<ruby>深<rt>ふか</rt></ruby>い<ruby>川<rt>かわ</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かに<ruby>流<rt>なが</rt></ruby>れる",
                        "<ruby>弁慶<rt>べんけい</rt></ruby>の<ruby>泣<rt>な</rt></ruby>き<ruby>所<rt>どころ</rt></ruby>",
                        "ペンは<ruby>剣<rt>けん</rt></ruby>よりも<ruby>強<rt>つよ</rt></ruby>し",
                        "<ruby>骨折<rt>ほねお</rt></ruby>り<ruby>損<rt>ぞん</rt></ruby>の<ruby>草臥<rt>くたび</rt></ruby>れ<ruby>儲<rt>もう</rt></ruby>け",
                        "<ruby>棒<rt>ぼう</rt></ruby>に<ruby>振<rt>ふ</rt></ruby>る",
                        //ま行
                        "<ruby>枚挙<rt>まいきょ</rt></ruby>に<ruby>遑<rt>いとま</rt></ruby>がない",
                        "<ruby>馬子<rt>まご</rt></ruby>にも<ruby>衣裳<rt>いしょう</rt></ruby>",
                        "<ruby>右<rt>みぎ</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>から<ruby>左<rt>ひだり</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>",
                        "<ruby>御輿<rt>みこし</rt></ruby>を<ruby>担<rt>かつ</rt></ruby>ぐ",
                        "<ruby>無用<rt>むよう</rt></ruby>の<ruby>長物<rt>ちょうぶつ</rt></ruby>",
                        "<ruby>虫酸<rt>むしず</rt></ruby>が<ruby>走<rt>はし</rt></ruby>る",
                        "<ruby>目<rt>め</rt></ruby>から<ruby>鱗<rt>うろ</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちる",
                        "<ruby>目<rt>め</rt></ruby>に<ruby>入<rt>い</rt></ruby>れても<ruby>痛<rt>いた</rt></ruby>くない",
                        "もぬけの<ruby>殻<rt>から</rt></ruby>",
                        "<ruby>元<rt>もと</rt></ruby>の<ruby>鞘<rt>さや</rt></ruby>へ<ruby>収<rt>おさ</rt></ruby>まる",
                        //や行
                        "<ruby>焼<rt>や</rt></ruby>け<ruby>石<rt>いし</rt></ruby>に<ruby>水<rt>みず</rt></ruby>",
                        "<ruby>藪<rt>やぶ</rt></ruby>から<ruby>棒<rt>ぼう</rt></ruby>",
                        "<ruby>有終<rt>ゆうしゅう</rt></ruby>の<ruby>美<rt>び</rt></ruby>",
                        "<ruby>夢<rt>ゆめ</rt></ruby>は<ruby>逆夢<rt>さかゆめ</rt></ruby>",
                        "<ruby>横槍<rt>よこやり</rt></ruby>を<ruby>入<rt>い</rt></ruby>れる",
                        "<ruby>欲<rt>よく</rt></ruby>に<ruby>頂<rt>いただ</rt></ruby>き<ruby>無<rt>な</rt></ruby>し",
                        //ら行
                        "<ruby>楽<rt>らく</rt></ruby>あれば<ruby>苦<rt>く</rt></ruby>あり",
                        "<ruby>烙印<rt>らくいん</rt></ruby>を<ruby>押<rt>お</rt></ruby>される",
                        "<ruby>両手<rt>りょうて</rt></ruby>に<ruby>花<rt>はな</rt></ruby>",
                        "<ruby>良薬<rt>りょうやく</rt></ruby>は<ruby>口<rt>くち</rt></ruby>に<ruby>苦<rt>にが</rt></ruby>し",
                        "<ruby>類<rt>るい</rt></ruby>は<ruby>友<rt>とも</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ぶ",
                        "<ruby>坩堝<rt>るつぼ</rt></ruby>と<ruby>化<rt>か</rt></ruby>す",
                        "<ruby>歴史<rt>れきし</rt></ruby>は<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>す",
                        "<ruby>礼<rt>れい</rt></ruby>も<ruby>過<rt>す</rt></ruby>ぎれば<ruby>無礼<rt>ぶれい</rt></ruby>になる",
                        "ローマは<ruby>一日<rt>いちにち</rt></ruby>にして<ruby>成<rt>な</rt></ruby>らず",
                        "<ruby>論<rt>ろん</rt></ruby>より<ruby>証拠<rt>しょうこ</rt></ruby>",
                        // わ行
                        "<ruby>若気<rt>わかげ</rt></ruby>の<ruby>至<rt>いた</rt></ruby>り",
                        "<ruby>笑<rt>わら</rt></ruby>う<ruby>門<rt>かど</rt></ruby>には<ruby>福来<rt>ふくきた</rt></ruby>る",

                        // 気になったことわざ集
                        "<ruby>怒<rt>いか</rt></ruby>れる<ruby>拳笑顔<rt>こぶしえがお</rt></ruby>に<ruby>当<rt>あ</rt></ruby>たらず",
                        "<ruby>一寸<rt>いっすん</rt></ruby>の<ruby>光陰軽<rt>こういんかろ</rt></ruby>んずべからず",
                        "<ruby>田舎<rt>いなか</rt></ruby>の<ruby>学問<rt>がくもん</rt></ruby>より<ruby>京<rt>きょう</rt></ruby>の<ruby>昼寝<rt>ひるね</rt></ruby>",
                        "<ruby>鵜<rt>う</rt></ruby>の<ruby>真似<rt>まね</rt></ruby>する<ruby>烏<rt>からす</rt></ruby>",
                        "<ruby>馬<rt>うま</rt></ruby>には<ruby>乗<rt>の</rt></ruby>ってみよ<ruby>人<rt>ひと</rt></ruby>には<ruby>添<rt>そ</rt></ruby>うてみよ",
                        "<ruby>運<rt>うん</rt></ruby>は<ruby>天<rt>てん</rt></ruby>にあり",
                        "<ruby>易者身<rt>えきしゃみ</rt></ruby>の<ruby>上知<rt>うえし</rt></ruby>らず",
                        "<ruby>縁<rt>えん</rt></ruby>なき<ruby>衆生<rt>しゅじょう</rt></ruby>は<ruby>度<rt>ど</rt></ruby>し<ruby>難<rt>がた</rt></ruby>し",
                        "<ruby>男<rt>おとこ</rt></ruby>は<ruby>閾<rt>しきい</rt></ruby>を<ruby>跨<rt>また</rt></ruby>げば<ruby>七人<rt>ななにん</rt></ruby>の<ruby>敵<rt>てき</rt></ruby>あり",
                        "<ruby>渇<rt>かっ</rt></ruby>しても<ruby>盗泉<rt>とうせん</rt></ruby>の<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>まず",
                        "<ruby>科<rt>か</rt></ruby>に<ruby>満<rt>み</rt></ruby>ちて<ruby>後進<rt>のちすす</rt></ruby>む",
                        "<ruby>金持<rt>かねも</rt></ruby>ち<ruby>喧嘩<rt>けんか</rt></ruby>せず"

                    ];//単語リスト(日本語)
                    
var time_limit = 90;//制限時間
var readytime = 3;//開始3秒前
var score;//スコア変数
var correct;//正解数
var mistake;//タイプミスの回数変数
var char_num = 0;//文字数の変数
var word_char;//文字
var random;//ランダムに単語を表示する変数

//開始3秒前関数
function ready(){
    readytime = 3;//3秒前
    scoredis.innerHTML = "";
    message.innerHTML = ""
    start_button.style.visibility = "hidden";

    // カウントを表示し、0になったらスタートと表示する
    // その後、ゲームを開始する。
    var readytimer = setInterval(function(){
        count.innerHTML = readytime;
        readytime--;
        if(readytime < 0){
            count.innerHTML = "スタート";
            clearInterval(readytimer);
            gameStart();
        }
    },1000);
}

// ゲームスタート関数
function gameStart(){
    score = 0.0;
    mistake = 0;
    correct = 0;
    wordDisplay();
    var time_remaining = time_limit;
    var gametimer = setInterval(function(){
        count.innerHTML = "残り時間：" + time_remaining;
        time_remaining--;
        if(time_remaining <= 0){
            clearInterval(gametimer);
            finish();
        }
    },1000);
}

//単語(ローマ字、日本語)を表示する関数
function wordDisplay(){
    random = Math.floor(Math.random() * wordlist.length);
    word.innerHTML = wordlist[random];
    japanese.innerHTML = wordlistJapanese[random];
    charInsort();
}

//次入力する文字の判定
function charInsort(){
    word_char = wordlist[random].charAt(char_num);
}

// 結果表示関数
function finish(){
    score = Math.floor(Math.pow(correct,2) * Math.pow((correct/ (correct + mistake)),5));
    scoredis.innerHTML = "スコア:" + score + "点" + "<hr>正タイプ数" + correct + "<br>ミスタイプ数:" + mistake + "<br>正答率" + (correct / (correct + mistake) * 100).toFixed(1) + "%";
    // scoreによって文字を表示する
    if(0 <= score && score < 60000){
        message.innerHTML = "頑張りましょう"
    }else if(score <= 60000 && score <= 120000){
        message.innerHTML = "よくできました。"
    }else if(120000 < score){
        message.innerHTML = "大変よくできました。"
    }else{
        message.innerHTML = "頑張りましょう"
    }
    count.innerHTML = "";
    word.innerHTML = "";
    japanese.innerHTML = "";
    start_button.style.visibility = "visible";
    word_char = 0;
    random = 0;
    char_num = 0;
}

// タイピング判定処理
document.onkeydown = function(e){
    if(e.keyCode == 189){
        keyStr = "-";
    }else if(e.keyCode == 188){
        keyStr = ",";
    }else{
        var keyStr = String.fromCharCode(e.keyCode);
        keyStr = keyStr.toLowerCase();
    }
    if(keyStr == word_char){
        word.innerHTML = "<span style='color: red;'>" + wordlist[random].substr(0, char_num + 1) + "</span>" + wordlist[random].substr(char_num + 1, wordlist[random].length);
        char_num++;
        correct++;
        charInsort();
    }else{
        mistake++;
    }
    if(char_num == wordlist[random].length){
        char_num = 0;
        wordDisplay();
    }
    console.log("code0" + e.keyCode);
};




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : タイピングクラス
// note  :
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

var codelist = {8:["BackSpase","BackSpace"], 9:["Tab","Tab"], 13:["Enter","Enter"], 16:["Shift",""], 17:["Ctrl",""]
                , 20:["","caps"], 32:[" "," "], 45:["-","="], 48:["0",""], 49:["1","!"], 50:["2",'"'], 51:["3","#"]
                , 52:["4","$"], 53:["5","%"], 54:["6","&"], 55:["7","'"], 56:["8","("], 57:["9",")"], 58:[":","*"]
                , 59:[";","+"], 61:[";","+"], 64:["@","`"], 65:["a","A"], 66:["b","B"], 67:["c","C"], 68:["d","D"]
                , 69:["e","E"], 70:["f","F"], 71:["g","G"], 72:["h","H"], 73:["i","I"], 74:["j","J"], 75:["k","K"]
                , 76:["l","L"], 77:["m","M"], 78:["n","N"], 79:["o","O"], 80:["p","P"], 81:["q","Q"], 82:["r","R"]
                , 83:["s","S"], 84:["t","T"], 85:["u","U"], 86:["v","V"], 87:["w","W"], 88:["x","X"], 89:["y","Y"]
                , 90:["z","Z"], 92:["\\","_"], 96:["0",""], 97:["1",""], 98:["2",""], 99:["3",""], 100:["4",""], 101:["5",""]
                , 102:["6",""], 103:["7",""], 104:["8",""], 105:["9",""], 107:[";","+"], 109:["-","="], 160:["^","~"]
                , 173:["-","="], 186:[":","*"], 187:[";","+"], 188:[",","＜"], 189:["-","="], 190:[".","＞"], 191:["/","?"]
                , 192:["@","`"], 219:["[","{"], 220:["\\","_"], 221:["]","}"], 222:["^","~"], 226:["\\","_"], 222:["^","~"]
                , 240:["英数",""], 244:["半/全",""]};
                
var capslist = {8:["BackSpase","BackSpace"], 9:["Tab","Tab"], 13:["Enter","Enter"], 16:["Shift",""], 17:["Ctrl",""]
                , 20:["","caps"], 32:[" "," "], 45:["-","="], 48:["0",""], 49:["1","!"], 50:["2",'"'], 51:["3","#"]
                , 52:["4","$"], 53:["5","%"], 54:["6","&"], 55:["7","'"], 56:["8","("], 57:["9",")"], 58:[":","*"]
                , 59:[";","+"], 61:[";","+"], 64:["@","`"], 65:["A","a"], 66:["B","b"], 67:["C","c"], 68:["D","d"]
                , 69:["E","e"], 70:["F","f"], 71:["G","g"], 72:["H","h"], 73:["I","i"], 74:["J","j"], 75:["K","k"]
                , 76:["L","l"], 77:["M","m"], 78:["N","n"], 79:["O","o"], 80:["P","p"], 81:["Q","q"], 82:["R","r"]
                , 83:["S","s"], 84:["T","t"], 85:["U","u"], 86:["V","v"], 87:["W","w"], 88:["X","x"], 89:["Y","y"]
                , 90:["Z","z"], 92:["\\","_"], 96:["0",""], 97:["1",""], 98:["2",""], 99:["3",""], 100:["4",""], 101:["5",""]
                , 102:["6",""], 103:["7",""], 104:["8",""], 105:["9",""], 107:[";","+"], 109:["-","="], 160:["^","~"]
                , 173:["-","="], 186:[":","*"], 187:[";","+"], 188:[",","＜"], 189:["-","="], 190:[".","＞"], 191:["/","?"]
                , 192:["@","`"], 219:["[","{"], 220:["\\","_"], 221:["]","}"], 222:["^","~"], 226:["\\","_"], 222:["^","~"]
                , 240:["英数",""], 244:["半/全",""]};

var leftcode = {"!":"", '"':"", "#":"", "$":"", "%":"", "&":"", "Q":"", "W":"", "E":"", "R":"", "T":"", "A":"", "S":""
                , "D":"", "F":"", "G":"", "Z":"", "X":"", "C":"", "V":"", "B":""};

var leftcaps = {"!":"", '"':"", "#":"", "$":"", "%":"", "&":"", "q":"", "w":"", "e":"", "r":"", "t":"", "a":"", "s":""
                , "d":"", "f":"", "g":"", "z":"", "x":"", "c":"", "v":"", "b":""};
                
var eachactive = {"\\":"220", "|":"220", "_":"226", ";":"187", "+":"187", ":":"186", "*":"186"};

var keyboardHTML = '' 
            + '<table id="keyboard">'
            + '<tr class="tr0">'
            + '<td colspan="30" class="col30">'
            + '<span class="col key code027">Esc</span>'
            + '<span class="col key">F1</span>'
            + '<span class="col key">F2</span>'
            + '<span class="col key">F3</span>'
            + '<span class="col key">F4</span>'
            + '<span class="col key">F5</span>'
            + '<span class="col key">F6</span>'
            + '<span class="col key">F7</span>'
            + '<span class="col key">F8</span>'
            + '<span class="col key">F9</span>'
            + '<span class="col key">F10</span>'
            + '<span class="col key">F11</span>'
            + '<span class="col key">F12</span>'
            + '<span class="col key">Num</span>'
            + '<span class="col key">Prt</span>'
            + '<span class="col key">Ins</span>'
            + '<span class="col key">Del</span>'
            + '</td>'
            + '</tr>'
            + '<tr class="tr1">'
            + '<td colspan="1" class="col1 key"><div class="table code244">半</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code049">1<span class="subkey">!</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code050">2<span class="subkey">”</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code051">3<span class="subkey">#</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code052">4<span class="subkey">$</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code053">5<span class="subkey">%</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code054">6<span class="subkey">&</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code055">7<span class="subkey">’</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code056">8<span class="subkey">（</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code057">9<span class="subkey">）</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code048">0</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code189 code109 code173 code045">-<span class="subkey">=</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code222 code160">^<span class="subkey">~</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code220">\<span class="subkey">|</span></div></td>'
            + '<td colspan="3" class="col3 key"><div class="table code008">Back</div></td>'
            + '</tr>'
            + '<tr class="tr2">'
            + '<td colspan="2" class="col2 key"><div class="table code009">Tab</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code081">Q</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code087">W</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code069">E</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code082">R</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code084">T</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code089">Y</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code085">U</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code073">I</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code079">O</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code080">P</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code192 code064">@<span class="subkey">`</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code219">[<span class="subkey">{</span></div></td>'
            + '<td colspan="1" class="col1 key"></td>'
            + '<td colspan="3" rowspan="2" class="col3 key"><div class="table code013 row2">Enter</div></td>'
            + '</tr>'
            + '<tr class="tr3">'
            + '<td colspan="3" class="col3 key"><div class="table code240 code020">英数</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code065">A</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code083">S</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code068">D</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code070">F</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code071">G</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code072">H</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code074">J</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code075">K</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code076">L</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code187 code107 code059">;<span class="subkey">+</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code186 code058">:<span class="subkey">*</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code221">]<span class="subkey">}</span></div></td>'
            + '</tr>'
            + '<tr class="tr4">'
            + '<td colspan="4" class="col4 key"><div class="table code016 code020">Shift</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code090">Z</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code088">X</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code067">C</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code086">V</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code066">B</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code078">N</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code077">M</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code188">,<span class="subkey"><</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code190">.<span class="subkey">></span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code191">/<span class="subkey">?</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code226">\<span class="subkey">_</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">↑</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code016">Shift</div></td>'
            + '</tr>'
            + '<tr class="tr5">'
            + '<td colspan="2" class="col2 key"><div class="table">Ctrl</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Fn</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Win</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Alt</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">無</div></td>'
            + '<td colspan="5" class="col5 key"><div class="table code032"></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">変</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">か</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Alt</div></td>'
            + '<td colspan="1" class="col1 key"><div class="table">App</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Ctrl</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">←</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">↓</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">→</div></td>'
            + '</tr>'
            + '</table>';

class Typing {

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : コンストラクタ
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    constructor() {
        this.capslock = ""
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーボードのhtmlを挿入
    // note  : 
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    insertKeyboard(id) {
        document.getElementById(id).innerHTML = keyboardHTML;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : 入力した文字を取得
    // note  : 
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    checkWord(event) {
        var keycode, shiftcode, chara
		keycode = event.keyCode;
        shiftcode = event.shiftKey;
        if(this.capslock==1){
            chara = this.getcapschar(keycode,shiftcode);  
        }else{
            chara = this.getchar(keycode,shiftcode);
        }
        return chara;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーコードとシフト押下状態から文字を取得
    // note  : CapsLock OFF
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    getchar(keycode, shiftcode){
        var chara;
        
        if(keycode in codelist){
            if(shiftcode){
                   chara = codelist[keycode][1];
            }else{
                   chara = codelist[keycode][0];
            }
        }else{
            chara = "";
        }
        return chara;
    }
    
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーコードとシフト押下状態から文字を取得
    // note  : CapsLock ON
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    getcapschar(keycode, shiftcode){
        var chara;

        if(keycode in capslist){
            if(shiftcode){
                   chara = capslist[keycode][1];
            }else{
                   chara = capslist[keycode][0];
            }
        }else{
            chara = "";
        }
        return chara;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : 対象のキーを色付けする。
    // note  : targetClass -> 色付けするクラス
    //         targetNo    -> 色付けする対象が複数ある場合の何番目かどうか
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    setactive(targetClass,targetNo){
        var allElements;
        var elementname;

        var foundElements = new Array();
        if (document.all){
            allElements = document.all;
        }else {
            allElements = document.getElementsByTagName("*");
        }
        var elementslen;
        var j=0;
        for(var i=0,elementslen=allElements.length;i<elementslen;i++){
            elementname = allElements[i].className;
            if(elementname.indexOf(targetClass,0) > -1) {
                foundElements[j] = allElements[i];
                j++;
            }
        }
        foundElements[targetNo].style.background="#00ffff";
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーの色付けを解除する。
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    resetactive(){
        var allElements;
        var elementname;
        
        if (document.all){
            allElements = document.all;
        }else {
            allElements = document.getElementsByTagName("*");
        }
        var elementslen;
        for(var i=0,elementslen=allElements.length;i<elementslen;i++){
            elementname = allElements[i].className;
            if(elementname.indexOf("table",0) > -1) {
                allElements[i].style.background="#ffffff";
            }
        }
    }
}