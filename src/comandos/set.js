exports.run = function(client,message){
  const Discord = require('discord.js');
  /////////////La gracia del cinco/////////
  if(message.content =="5" || message.content ==  "cinco") {
    message.channel.send("por el culo te la hinco");
  };
////////////El numero prohibido/////////////
  if(message.content == "13" || message.content ==  "trece") {
  message.channel.send("Agarramela que me la crece")
  };
///////////////memes///////////////////////////
  if(message.content == 'meme') {
  const meme = new Discord.MessageAttachment('https://imagenes.milenio.com/BjtG_i8M_s-abzJMdv-GBi8TpuE=/958x596/https://www.milenio.com/uploads/media/2020/01/30/meme-de-wey-ya_34_0_680_423.jpeg')
  message.channel.send(meme)
  }
};
