
function computeSalesCommission(isSalaried,sales) {
    let commission = 0;
    if (isSalaried) {
       if (sales >= 0 && sales < 300){
        commission = 0;
       }
       else if (sales <= 500) {
        commission = sales * 0.01;
      }
       else { 
        commission = 5 + (sales - 500) * 0.02;
      }
     }
     else {
        if (sales >= 0 && sales < 300){
            commission = 0;
          }
       else if (sales <= 500){
         commission = sales * 0.02;
       }
       else {
         commission = 10 + ((sales - 500) * 0.03);
       }
     }
     return commission;
   }
   
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));




