var XMLHttpRequest = require('xhr2');

token = "token lol";

channel_url = `https://discord.com/api/v9/channels/896986867671650335/messages`

var cmd = "Happy Bday!";

setInterval(function() {
   if (new Date().getHours()==0 && new Date().getMinutes()==0) {
      request = new XMLHttpRequest();
      request.withCredentials = true;
      request.open("POST", channel_url);
      request.setRequestHeader("authorization", token);
      request.setRequestHeader("accept", "/");
      request.setRequestHeader("authority", "discord.com");
      request.setRequestHeader("content-type", "application/json");
      request.send(JSON.stringify({ content: cmd }));
   }
}, 60000);
