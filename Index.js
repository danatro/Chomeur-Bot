const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./config.json");


//Start et Activité (Stream Sub)

client.on("ready", async () =>{
    console.log("ON");
    client.user.setActivity(`+dev`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/levraiswordy",
        preview: "https://www.twitch.tv/levraiswordy"
    
    })});

    //statut explication 
    
    client.on('message', (message) =>{
        if (message.content === `+stream`) {
            message.channel.send(`Pour être dans l'activité stream du bot il faut boost le serveur: https://discord.gg/tKtNdQkM2v`);
        }
    });

    
    





client.login(process.env.TOKEN);