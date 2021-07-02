const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./src/assets/config.json');
const prefix = config.prefix;
client.on("ready", () => {
    console.log("vamoooo");
 });
 
 client.on("message", (message) => {
    try{
      const commandfile = require("./src/comandos/set.js");
    commandfile.run(client,message);
     }catch(e){
     console.log(e);
   }}
  
 );
 
 client.login(config.token);