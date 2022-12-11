// 카카오톡 오목 기능입니다.

let base = "";
let x = "";
let d = 0;

function initializationOmok(){
   base = "";
   x = "";
   d = 0;
}

function response(room, msg, sender, isGroupChat, replier)
{
   if (msg == "!오목")
   {
      base = "▒▒▒▒▒▒▒▒▒▒▒▒①\n▒▒▒▒▒▒▒▒▒▒▒▒②\n▒▒▒▒▒▒▒▒▒▒▒▒③\n▒▒▒▒▒▒▒▒▒▒▒▒④\n▒▒▒▒▒▒▒▒▒▒▒▒⑤\n▒▒▒▒▒▒▒▒▒▒▒▒⑥\n▒▒▒▒▒▒▒▒▒▒▒▒⑦\n▒▒▒▒▒▒▒▒▒▒▒▒⑧\n▒▒▒▒▒▒▒▒▒▒▒▒⑨\n▒▒▒▒▒▒▒▒▒▒▒▒⑩\n▒▒▒▒▒▒▒▒▒▒▒▒⑪\n▒▒▒▒▒▒▒▒▒▒▒▒⑫\n①②③④⑤⑥⑦⑧⑨⑩⑪⑫";
      x = "1";
      d = 0;
      replier.reply("ㅡ플레이방식ㅡ\n초기화:오목 \n●돌:1.x좌표.y좌표\n○돌:2.x좌표.y좌표\n무르기:무르기\n(x,y는 1~12)\n"+base);
   }
   if (msg.indexOf("1.") == 0 && msg.length == 5 && base != "")
   {
      if (x == "1")
      {
         if(base[d] == "☆")
         {
            let e = base.substring(0, d);
            let f = base.substr(d+1, 266-d);
            base = e + "○" + f;
         }
         let b = msg;
         let c = b.split(".");
         d = 0;
         d += parseFloat(c[1]-1);
         d += (parseFloat(c[2]-1)*10)+(parseFloat(c[2]-1)*4);
         if (base[d] == "▒")
         {
            let e = base.substring(0, d);
            let f = base.substr(d+1, 266-d);
            base = e + "★" + f;
            x = 2;
            replier.reply(base);
         }else{
            replier.reply("잘못된 좌표");
         }
      }else{
         replier.reply("백돌(2) 차례");
      }
   }
   if (msg.indexOf("2.") == 0 && msg.length == 5 && base != "")
   {
      if (x == "2")
      {
         if(base[d] == "★")
         {
            let e = base.substring(0, d);
            let f = base.substr(d+1, 266-d);
            base = e + "●" + f;
         }
         let b = msg;
         let c = b.split(".");
         d = 0;
         d += parseFloat(c[1]-1);
         d += (parseFloat(c[2]-1)*10)+(parseFloat(c[2]-1)*4);
         if (a[d] == "▒")
         {
            let e = base.substring(0, d);
            let f = base.substr(d+1, 266-d);
            base = e + "☆" + f;
            x = 1;
            replier.reply(base);
         }else{
            replier.reply("잘못된 좌표");
         }
      }else{
         replier.reply("흑돌(1) 차례");
      }
   }
   if (msg == "무르기")
   {
      if (base[d] == "★" || base[d] == "☆")
      {
         let e = base.substring(0, d);
         let f = base.substr(d+1, 266-d);
         base = e + "▒" + f;
         replier.reply(a);
         if (x == "1")
         {
            x = 2;
         }else if (x == "2"){
            x = 1;
         }
      }else{
         replier.reply("이미 사용함");
      }
   }
   if (msg == "!포기오목")
   {
      initializationOmok();
      replier.reply("오목 게임이 종료되었습니다.");
   }

}