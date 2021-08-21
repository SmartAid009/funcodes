//Lol to my art:laughing: 
let array = [];
//beforeTransfer
function beforeTransfer(str){
  for(i=0;i<str.length;i++){
    array.push(btoa(str.charAt(i)));
  }
}
//During Transfer
function onTransferIntercept(){
  console.log(array);
}
//After Transfer
function completeTransfer(){
  message = "";
  for(i=array.length-1;i>-1;i--){
        message = atob(array[i])+ "" + message; 
  }
  console.log(message);
}
//Result
beforeTransfer("Hey!");
onTransferIntercept();
completeTransfer();
