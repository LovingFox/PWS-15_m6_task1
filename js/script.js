let progressValue = 50;
const diffIDs = {
   p1: 1,
   p3: 3,
   p7: 7,
   m1: -1,
   m3: -3,
   m7: -7,
}

function handleButton(e) {
   // console.log(e.target.id);
   changeProgressValue( diffIDs[e.target.id] );
   changeProgress();
   e.preventDefault();
}

function changeProgress() {
   $("#prb").width(progressValue + "%");
   $("#prb").text(progressValue + "%");
}

function changeProgressValue(diffValue) {
   // console.log("progressValue = " + progressValue);
   // console.log("diffValue = " + diffValue);
   progressValue += diffValue;
   if(progressValue>100) {
      progressValue = 100;
   }
   else if(progressValue<0) {
      progressValue = 0;
   }
   // console.log("progressValue = " + progressValue);
}

function init() {
   $(".btn").click(handleButton); // hanble all of btn
   changeProgress(); // set default value
   // console.log("скрипт подгрузился");
}

$(document).ready(init);

