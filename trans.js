/*
번역기 기능을 이용할 수 있게 해주는 곳 입니다.
API를 끌어와서 그 내용을 변수로 활용해 어떻게 활용할 수 있는지를 보여줄 수 있습니다.

작성자 : 이민재(Minjae Lee)
최종수정일 : 2022.08.06
*/

const scriptName = "번역기";

function papago(s, t, text) {
  let Client_Id = "AS2Ox8wUgofSmoQx_Lg1";
  let Client_Secret = "j7XuBMU1BU";
  let u = org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/papago/n2mt")
    .header("content-type", "application/x-www-form-urlencoded; charset=UTF-8")
    .header("x-naver-client-id", Client_Id)
    .header("x-naver-client-secret", Client_Secret)
    .data("source", s)
    .data("target", t)
    .data("text", text)
    .ignoreContentType(true)
    .post()
    .body()
    .text();
  let d = JSON.parse(u);
  return d.message.result.translatedText;
}

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {
  if (msg.startsWith("!번역기")) {
    replier.reply(
      "현재 번역 가능한 언어\n\n1.!한영 <> !영한 (원하는 말 입력)\n2.!한일 <> 일한 (원하는 말 입력)\n3.!한중 <> 중한 (원하는 말 입력)"
    );
  }

  if (msg.indexOf("!한영 ") == 0) {
    let koen = msg.replace("!한영", "");
    let koenr = papago("ko", "en", koen);
    replier.reply(koenr);
  }

  if (msg.indexOf("!k ") == 0) {
    let koen2 = msg.replace("!k", "");
    let koenr2 = papago("ko", "en", koen2);
    replier.reply(koenr2);
  }

  if (msg.indexOf("!i ") == 0) {
    let idko = msg.replace("!i", "");
    let idkoa = papago("id", "ko", idko);
    replier.reply(idkoa);
  }

  if (msg.indexOf("!ki ") == 0) {
    let idko2 = msg.replace("!ki", "");
    let idkoa2 = papago("ko", "id", idko2);
    replier.reply(idkoa2);
  }

  if (msg.indexOf("!영한 ") == 0) {
    let enko = msg.replace("!영한", "");
    let enkor = papago("en", "ko", enko);
    replier.reply(enkor);
  }

  if (msg.indexOf("!e ") == 0) {
    let enko2 = msg.replace("!e", "");
    let enkor2 = papago("en", "ko", enko2);
    replier.reply(enkor2);
  }

  if (msg.indexOf("!한일 ") == 0) {
    let kojp = msg.replace("!한일", "");
    let kojpb = papago("ko", "ja", kojp);
    replier.reply(kojpb);
  }

  if (msg.indexOf("!일한 ") == 0) {
    let jpko = msg.replace("!일한", "");
    let jpkob = papago("ja", "ko", jpko);
    replier.reply(jpkob);
  }

  if (msg.indexOf("!한중 ") == 0) {
    let kocn = msg.replace("!한중", "");
    let kocnb = papago("ko", "zh-CN", kocn);
    replier.reply(kocnb);
  }

  if (msg.indexOf("!중한 ") == 0) {
    let cnko = msg.replace("!중한", "");
    let cnkob = papago("zh-CN", "ko", cnko);
    replier.reply(cnkob);
  }
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  let textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}
