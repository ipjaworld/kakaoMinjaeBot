/**
욕설감지 기능을 구현했습니다.

작성자 : 이민재(Minjae Lee)
최종수정일 : 2022.11.21
**/

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

   if(msg.startsWith("시") || msg.startsWith("씨")){
      if(msg.indexOf("년") != -1 || msg.indexOf("놈") != -1 || msg.indexOf("새끼") != -1 || msg.indexOf("씨") != -1 || msg.indexOf("팔") != -1 || msg.indexOf("발") != -1 || msg.indexOf("펄") != -1){
         replier.reply(sender + `님 욕설이 감지되었습니다. 고운 언어 생활을 할 수 있도록 합시다 :)
         
         감지된 욕설 : 시X`);
      }
   }
   if ( msg.indexOf("니애미") != -1 || msg.indexOf("니애비") != -1 || msg.indexOf("니미럴") != -1 || msg.indexOf("또라이") != -1 || msg.indexOf("엠창") != -1 || msg.indexOf("좆병신") != -1) {
      replier.reply("욕설이 감지되었습니다. 고운 언어 생활을 할 수 있도록 합시다 :)");
   }
   if(msg.startsWith("개")){
      if(msg.indexOf("년") != -1 || msg.indexOf("놈") != -1 || msg.indexOf("새끼") != -1 || msg.indexOf("씨") != -1 || msg.indexOf("팔") != -1){
         replier.reply(sender + `님 욕설이 감지되었습니다. 고운 언어 생활을 할 수 있도록 합시다 :)
         
         감지된 욕설 : 개X`);
      }
   }
   if(msg.indexOf("미친") != -1){
      if(msg.indexOf("년") != -1 || msg.indexOf("놈") != -1 || msg.indexOf("새끼") != -1 || msg.indexOf("씨") != -1 || msg.indexOf("팔") != -1){
         replier.reply(sender + `님 욕설이 감지되었습니다. 고운 언어 생활을 할 수 있도록 합시다 :)
         
         감지된 욕설 : 미X`);
      }
   }if(msg.indexOf("병신") != -1){
      if(msg.indexOf("샛") != -1 || msg.indexOf("년") != -1 || msg.indexOf("놈") != -1 || msg.indexOf("새끼") != -1 || msg.indexOf("씨") != -1 || msg.indexOf("팔") != -1){
         replier.reply(sender + `님 욕설이 감지되었습니다. 고운 언어 생활을 할 수 있도록 합시다 :)
         
         감지된 욕설 : 병X`);
      }
   }
   if(msg.startsWith("애미")){
      if(msg.indexOf("뒤") != -1 || msg.indexOf("년") != -1 || msg.indexOf("놈") != -1 || msg.indexOf("새끼") != -1 || msg.indexOf("씨") != -1 || msg.indexOf("팔") != -1){
         replier.reply(sender + `님 욕설이 감지되었습니다. 고운 언어 생활을 할 수 있도록 합시다 :)
         
         감지된 욕설 : 애XX`);
      }
   }
   

}