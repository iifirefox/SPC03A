const Discord = require('discord.js');
module.exports.run = async (message,arg,User) => {
    const helpemmbed = new Discord.MessageEmbed();
    var index =0;
         message.channel.send( helpemmbed.setTitle(":question::grey_question: How to fight").setDescription("Throughout your adventures in Hunted House 3 you will encounter monster of many types and some more powerful then the rest."+
         "\nYou can define them by their name, lv and HP.").setFooter("To continue reading react ➡️")).then((message)=>{message.react('➡️');
         function sample(){
         const filter = (reaction, user) => {
          return ['➡️'].includes(reaction.emoji.name) && user.id === User.id;
      };
         message.awaitReactions(filter, { max: 1})
      .then((collected) => {
          const reaction = collected.first();
          if (reaction.emoji.name === '➡️'&index==0) {
              message.edit(helpemmbed.setDescription("You will encounter monsters with lv and their HP.\nMonsters you will find will have purple HP bar, those are bosses and bosses will always have unique ability also can use skill like you can\nyou can view what monster your facing using `check` command.").setImage("https://i.ibb.co/Ltmg9Wq/Screenshot-2021-10-24-115632.png")).then((message)=>{message.reactions.resolve('➡️').users.remove(User.id);});
              index=1;
              sample();
          }
          else if (reaction.emoji.name === '➡️'&index==1) {
            message.edit(helpemmbed.setDescription("You can engage the monster in combat by using the `act`command with `attack`,`defend`,`skill`,`potion`,`avoid`and `flee`")).then((message)=>{message.reactions.resolve('➡️').users.remove(User.id);});
            index=2;
            sample();
        }
        else if (reaction.emoji.name === '➡️'&index==2) {
            message.edit(helpemmbed.setDescription("command `act attack` will attack the foe with normal hit and gain Skill energy from it.\nyour attack depends on what weapon you have equiped, there are `Sword` `Wand` and `Bow` type of weapons").setImage("https://i.ibb.co/7Xd77DS/guide2.png")).then((message)=>{message.reactions.resolve('➡️').users.remove(User.id);});
            index=3;
            sample();
        }
        else if (reaction.emoji.name === '➡️'&index==3) {
            message.edit(helpemmbed.setDescription("command `act defend` will defend against foe's attack and gain Skill energy whenever you take damage.")).then((message)=>{message.reactions.resolve('➡️').users.remove(User.id);});
            index=4;
            sample();
        }
        else if (reaction.emoji.name === '➡️'&index==4) {
            message.edit(helpemmbed.setDescription("command `act avoid` will avoid the foe's attack whenever you move first but it will fail when your last to move, it cost 1 skill energy to use this.")).then((message)=>{message.reactions.resolve('➡️').users.remove(User.id);});
            index=5;
            sample();
        }
        else if (reaction.emoji.name === '➡️'&index==5) {
            message.edit(helpemmbed.setDescription("command `act potion` will use an HP Potion item from your items bag to heal yourself, you can also use `act potion <Potion name>` you can use different types of potions\nExample\n`act potion pure potion`")).then((message)=>{message.reactions.resolve('➡️').users.remove(User.id);});
            index=6;
            sample();
        }
        else if (reaction.emoji.name === '➡️'&index==6) {
            message.edit(helpemmbed.setDescription("command `act skill <number 1-4>` depending on what skills you have equipped with will use them in combat, you can edit your skills by using `skill` command\nyou can also use skills in combat by using `act <skill's name>`command.").setImage("https://i.ibb.co/fdyPxJr/Guide3.png")).then((message)=>{message.reactions.resolve('➡️').users.remove(User.id);});
            index=7;
            sample();
        }
        else if (reaction.emoji.name === '➡️'&index==7) {
            message.edit(helpemmbed.setDescription("command `act flee` will cause you to exit the combat with the foe by chance, depending on your speed, when you flee from a foe, you go back few steps.").setFooter("that's all you need to know how to fight in combat goodluck!")).then((message)=>{message.reactions.cache.get('➡️').remove();});
            sample();
        }
      })
  }
      sample();
  })
  
}
module.exports.key = {
    name: "fighthelp",
    description: "need help to fight?"
}