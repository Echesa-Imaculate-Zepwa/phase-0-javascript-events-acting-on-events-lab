 //Your code here
 const leftNumbers = dodger.style.left.replace("px", "");
 const left = parseInt(leftNumbers, 10);
 const dodger = document.getElementById("dodger");
 function moveDodgerLeft() {
   if (left > 0) {
       dodger.style.left = `${left - 1}px`;
     }
   }

  function moveDodgerRight() {
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
     }
  }
   
   
   
   
   



















// concati("Philip", "going")
// concati("Lucy", "walking")

// noun    verb
// Mary is going to school


  