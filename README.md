[![npm](https://img.shields.io/npm/v/logogen.svg)](https://www.npmjs.com/package/logogen)
[![install size](https://packagephobia.now.sh/badge?p=logogen)](https://packagephobia.now.sh/result?p=logogen)

[![NPM](https://nodei.co/npm/logogen.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/logogen/)

# logogen
# remember, this is still in beta, not many features, but ill add more :)

## Installation
```
npm i logogen
```
Below are some examples on how to use logogen!
# Examples:

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const { Logo } = require('logogen')
const logo = new Logo()
//some basic setup for a discord bot and logogen

const prefix = '!'
//prefix

client.on('ready', () => {
    console.log('Ready to generate logos!')
})
//Ready event

client.on('message', async message => {
        if(!message.content.startsWith(prefix)) return;
     let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd;
        cmd = args.shift().toLowerCase();

        //setup commands and stuff like that

    if (cmd === 'arcade') {
        let text = args.join(' ')
        let image = await logo.arcade(text)
        message.channel.send(image)
    }
    //arcade cmd :)
})

client.login('token')
//login
```
## DOCUMENTATION
**WARNING!** You must do this at the top of your code:
```js
const { Logo } = require('logogen')
const logo = new Logo()
```

**anaglyphopera(text)**: Gives you an anaglyphopera logo!
```js
//you need to define 'text' by yourself.
let image = await logo.anaglyphopera(text)
message.channel.send(image)
```

