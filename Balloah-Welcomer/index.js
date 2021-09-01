const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('IF YOURE SEEING THIS DM HARSHUBOIPLAYZ YO BOIIII'))

app.listen(port, () =>
  console.log(`Your app is listening to http://localhost:${port}`)
);

const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", async () => {
  console.log(`Bot is has been deployed 🚀`)
  client.user
    .setActivity(`New Member In Balooah Craft https://dsc.gg/balooahcraft`, { type: "WATCHING" }) //status code
    .catch(error => console.log(error))
})

const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "813342998813343764") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({ format: "png" }))
  .setColor("title", "#FEFCFC") //white
  .setColor("username-box", "#FEFCFC") //white
  .setColor("discriminator-box", "#FEFCFC") //white
  .setColor("message-box", "#FEFCFC") //white
  .setColor("border", "#000000") //black
  .setColor("avatar", "#FEFCFC") //white
  .setBackground("https://cdn.discordapp.com/attachments/882136381273546753/882528720206852136/Jungle.png") //should be png format
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
  member.guild.channels.cache.get("882136104185241612").send(member.user.toString(), attachment)
})


client.login(process.env.token)