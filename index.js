const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const scrt = process.env.token;

let dogurl;

client.on('ready', ()=>{
    console.log('bot online');
    getRandomDog();
});

function getRandomDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => handleData(data))
      .catch(error => {console.log(error)})
}

function handleData(data){
    dogurl = data.message;
}

client.on('message', msg=>{
    if(msg.content.toLowerCase().includes("dog") && !msg.content.includes("http")){
        getRandomDog();

        msg.reply(dogurl);
    }
});

client.login(scrt);