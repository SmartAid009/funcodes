//This may help you understand three way handshake
function tcpTransfer(seq,ack){
  //Starting of Three way Handshake
  console.log("Setting SYN flag ");
  console.log("Seq:"+ seq+" & ACK: "+ ack  );
  //SYN/ACK flag
  console.log("SYN/ACK");
    //ANy random number. IN real it is unpredictable
  var seq2 = Math.floor(Math.random() * 101);
  seq = seq+1;
  console.log("Seq:"+ seq2 +" & ACK:"+ seq);
  //ACK flag
  console.log("ACK");
  console.log("Seq:"+ seq + " & ACK:"+ (seq2+1));
  //End of three way handshake
}
