function copyIp() {
    var copyText = document.getElementById("ip-to-copy");
    var button = document.getElementById("copy-ip");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    button.classList.add("copied");
    setTimeout(function(){ button.classList.remove("copied"); }, 3000);
  }