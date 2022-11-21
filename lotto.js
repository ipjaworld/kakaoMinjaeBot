/**
로또 번호 사이트를 크롤링해서 그 정보들을 조합해내 최신 번호를 알려주는 기능을 가지고 있습니다.

작성자 : 이민재(Minjae Lee)
최종수정일 : 2022.10.30
**/

const scriptName = "로또";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */

let today = new Date();
let dayOfWeek = new Array("(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)");



let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = ('0' + today.getDate()).slice(-2);
let dateString1 = year + '-' + month  + '-' + day;
let now_hour = today.getHours();
let now_minute = today.getMinutes();
let now_sec = today.getSeconds();
let dateString2 = now_hour + ':' + now_minute + ':' + now_sec;

// 밑에 선언된 변수들은 로또 당첨 번호를 얻어올 때 사용하는 변수들입니다.
let str = "";
let lottoround = org.jsoup.Jsoup.connect("https://dhlottery.co.kr/gameResult.do?method=byWin").get().select("div.win_result").select("h4").text();
let lottodate = org.jsoup.Jsoup.connect("https://dhlottery.co.kr/gameResult.do?method=byWin").get().select("div.win_result").select("p.desc").text().replace("(", "").replace(")", "");
let lottonum = org.jsoup.Jsoup.connect("https://dhlottery.co.kr/gameResult.do?method=byWin").get().select("div.win_result").select("span");
let lottomoney = org.jsoup.Jsoup.connect("https://dhlottery.co.kr/gameResult.do?method=byWin").get().select("td");


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

 if( msg == "!로또확인" || msg == "!로또확인" ) {
  
  
  str = str + "★ 로또6/45  " + lottoround + " ★\n       " + lottodate + "\n";
  str = str + "\n당첨번호 : " + lottonum.get(0).text() + ", " + lottonum.get(1).text() + ", " + lottonum.get(2).text() + ", " + lottonum.get(3).text() + ", " + lottonum.get(4).text() + ", " + lottonum.get(5).text();
  str = str + "\n보너스 번호 : "  + lottonum.get(6).text();
    

  str = str + "\n\n1등 당첨게임 수 : " + lottomoney.get(2).text() + "\n1등 당첨금 : " + lottomoney.get(3).text();
  str = str + "\n\n2등 당첨게임 수 : " + lottomoney.get(8).text() + "\n2등 당첨금 : " + lottomoney.get(9).text();
  str = str + "\n\n3등 당첨게임 수 : " + lottomoney.get(13).text() + "\n3등 당첨금 : " + lottomoney.get(14).text();
  replier.reply(str);
 }

 if( msg == "!로또생성" || msg == "!로또뽑기" ) {
  replier.reply(sender + `님! 
  
  ${lottoGenerator()}
  
  행복이 깃들길 바래요 :)`);
 }
  
}


function lottoGenerator(){
  let message = `민재복권
  Lotto 6/45
  발급일 : ${dateString1} ${getTodayLabel()} ${dateString2}
  ${generateRandomString(16)}
  -------------------------------------
  A 자   동  ${lottoRandomSixNumber()}
  B 자   동  ${lottoRandomSixNumber()}
  C 자   동  ${lottoRandomSixNumber()}
  D 자   동  ${lottoRandomSixNumber()}
  E 자   동  ${lottoRandomSixNumber()}
  -------------------------------------
  
  `
  return message;
}

function getTodayLabel(){
  let dow = new Date().getDay();
  let todayLabel = dayOfWeek[dow];
  return todayLabel;
}

// 고유 번호 16자리를 출력하는 펑션입니다.
const generateRandomString = (num) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function lottoRandomSixNumber(){
  let lottoNumber = [];
  for(let i = 0; i<6; i++){
    let lotto = Math.floor((Math.random()*45)+1);
    
    if(lottoNumber.indexOf(lotto)==-1){
      lottoNumber.push(lotto);
    }else{
      i--
    }
  }
  lottoNumber.sort(function(a, b)  {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
  });
  return `${lottoNumber[0]} ${lottoNumber[1]} ${lottoNumber[2]} ${lottoNumber[3]} ${lottoNumber[4]} ${lottoNumber[5]} `
}






//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}