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
                        "後は野となれ山となれ","頭隠して尻隠さず",
                        "急がば回れ","命あっての物種",
                        "魚心あれば水心","馬の耳に念仏",
                        "海老で鯛を釣る","縁の下の力持ち",
                        "負うた子に教えられて浅瀬を渡る","鬼に金棒",
                        //か行
                        "飼い犬に手を嚙まれる","河童の川流れ",
                        "聞いて極楽見て地獄","聞くは一時の恥聞かぬは一生の恥",
                        "口は災いの門","口も八丁手も八丁",
                        "毛を吹いて疵を求む","芸は身を助く",
                        "後悔先に立たず","弘法にも筆の誤り",
                        //さ行
                        "猿も木から落ちる","触らぬ神に祟りなし",
                        "親しき中にも礼儀あり","朱に交われば赤くなる",
                        "好きこそ物の上手なれ","過ぎたるは猶及ばざるが如し",
                        "背に腹はかえられぬ","千里の道も一歩より",
                        "損して得取れ","備わるを一人に求むなかれ",
                        //た行
                        "大海を手で塞ぐ","対岸の火事",
                        "知恵と力は重荷にならぬ","血で血を洗う",
                        "月と鼈","月の前の灯火",
                        "敵に塩を送る","手習いは坂に車を押すが如し",
                        "時は金なり","渡世は八百八品",
                        //な行
                        "泣いて馬謖を斬る","長口上は欠伸の種",
                        "二階から目薬","憎き鷹には餌を飼え",
                        "盗人猛猛しい","濡れ手で粟",
                        "猫の手も借りたい","念力岩を徹す",
                        "暖簾に腕押し","鑿と言えば槌",
                        //は行
                        "敗軍の将は兵を語らず","馬鹿の一つ覚え",
                        "一筋縄で行かぬ","冷酒と親の意見は後の薬",
                        "覆水盆に返らず","深い川は静かに流れる",
                        "弁慶の泣き所","ペンは剣よりも強し",
                        "骨折り損の草臥れ儲け","棒に振る",
                        //ま行
                        "枚挙に遑がない","馬子にも衣裳",
                        "右の耳から左の耳","御輿を担ぐ",
                        "無用の長物","虫酸が走る",
                        "目から鱗が落ちる","目に入れても痛くない",
                        "もぬけの殻","元の鞘へ収まる",
                        //や行
                        "焼け石に水","藪から棒",
                        "有終の美","夢は逆夢",
                        "横槍を入れる","欲に頂き無し",
                        //ら行
                        "楽あれば苦あり","烙印を押される",
                        "両手に花","良薬は口に苦し",
                        "類は友を呼ぶ","坩堝と化す",
                        "歴史は繰り返す","礼も過ぎれば無礼になる",
                        "ローマは一日にして成らず","論より証拠",
                        // わ行
                        "若気の至り","笑う門には福来る",

                        // 気になったことわざ集
                        "怒れる拳笑顔に当たらず","一寸の光陰軽んずべからず","田舎の学問より京の昼寝","鵜の真似する烏",
                        "馬には乗ってみよ人には添うてみよ","運は天にあり","易者身の上知らず","縁なき衆生は度し難し",
                        "男は閾を跨げば七人の敵あり","渇しても盗泉の水を飲まず","科に満ちて後進む","金持ち喧嘩せず"

                    ];//単語リスト(日本語)
                    
var time_limit = 90;//制限時間
// var time_limit = 1;//テスト用
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