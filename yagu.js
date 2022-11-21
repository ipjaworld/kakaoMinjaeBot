/*
번역기 기능을 이용할 수 있게 해주는 곳 입니다.
API를 끌어와서 그 내용을 변수로 활용해 어떻게 활용할 수 있는지를 보여줄 수 있습니다.

작성자 : 이민재(Minjae Lee)
최종수정일 : 2022.08.06
*/

let answer = []; 
let is_start = 0; 
let count = 0; 

function response(room,msg,sender,isGroupChat,replier,imageDB,packageName) { 

   if (msg.startsWith("!help") || msg.startsWith("!헬프") || msg.startsWith("!list")) {
      replier.reply("현재 가능한 명령어 List \n 1. !플레이볼 \n 2. !검색 (입력)\n 3. !로또확인\n 4. !번역기");
   }
   
   if(msg.startsWith("!플레이볼") && is_start ==! 0) {
     replier.reply("누군가 사용중입니다. \n사용을 원할 경우\n 강제 종료를 해주세요. \n\n 명령어: !강제종료 ");
   }
   
   if (msg.startsWith("!플레이볼") && is_start == 0) { 
      answer = setNumber(); 
      replier.reply("베이스볼 게임을 시작합니다.\n 4자리 숫자를 입력해주세요. \n\n (게임끝내기 -> !포기)"); 
      is_start = 1; 
      count = 20; 
   } 

   if (is_start === 1) { 
      if (!isNaN(Number(msg)) && msg.length == 4) { 
         let result = compare(msg); 
         count -= 1; 

         if (result[0] == 4) { 
            replier.reply(sender + "님, 정답입니다!\n게임을 종료합니다."); 
            is_start = 0; 
            count = 20; 
         } else if (result[0] == 0 && result[1] == 0) { 
            replier.reply(sender + "님 입력 \n입력 숫자: " + Number(msg) + "\n\n아웃!\n\n남은기회 " + count + "번"); 
         } else { 
            replier.reply(sender + "님 입력 \n입력 숫자: " + Number(msg) + "\n \n" + result[0] + "스트라이크\n" +result[1] +" 볼\n\n남은기회 " +count +"번"); 
         } 
      } 
      if (count == 0) { 
         replier.reply("기회를 모두 사용했습니다\n패배! \n정답 : " +String(answer[0]) +String(answer[1]) +String(answer[2]) +String(answer[3])); 
         is_start = 0; 
         count = 20; 
      } 
      if (msg == "!포기") { 
         replier.reply("정답 : " +String(answer[0]) +String(answer[1]) +String(answer[2]) +String(answer[3])); 
         is_start = 0; 
         count = 20; 
      } 
      if (msg == "!강제종료") {
        replier.reply("강제 종료되었습니다.");
        is_start = 0;
      }
   } 
} 

function setNumber() { 
   let answer = []; 
   let check = true; 

   while (answer.length < 4) { 
      let randomNumber = Math.floor(Math.random() * 10); 
      for (let data of answer) { 
         if (data == randomNumber) { 
            check = false; 
            break; 
         } 
      } 
      if (check) { 
         answer.push(randomNumber); 
      } 
      check = true; 
   } 
   return answer; 
} 

function compare(msg) { 
   let SB = [0, 0]; 
   for (let i = 0; i < 4; i++) { 
      for (let j = 0; j < 4; j++) { 
         if (answer[i] == msg[j]) { 
            if (i == j) { 
               SB[0] += 1; 
            } else { 
               SB[1] += 1; 
            } 
         } 
      } 
   } 
   return SB; 
}