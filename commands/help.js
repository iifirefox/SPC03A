const Discord = require('discord.js');
module.exports.run = async (client, message, arg) => {

    const newemmbed = new Discord.MessageEmbed();
    newemmbed.setColor("#66FFFF");
    newemmbed.setTitle(client.user.username+"'s Commands");
    if(arg==""|!arg.includes("game")&!arg.includes("music")){
    newemmbed.setDescription("List below shows all the bot commands");
    newemmbed.addField("Command: `-stat`", "Displays your status and game status");
    newemmbed.addField("Command: `-color`", "Will display a color guide to change your color theme");
    newemmbed.addField("Command: `-dice`", "will roll a dice ");
    newemmbed.addField("Command: `-fate <option> & <option2>`", "This Command will take 1 choices after `-fate` then another after `&` and give you the best result");
    newemmbed.addField("Command: `-animehunt`", "guess your anime smarts game");
    newemmbed.addField("Command: `-statistic`","your account statistics");
    newemmbed.setFooter("To view Game Commands: -help game\nTo view Music Commands: -help music\n"+client.user.username+" Ver 9.8.8 \n Made by: AhhLoli#5983");}
    else if(arg.includes("game")){
        newemmbed.addField("Command: `-roll`","Roll a dice to Progress in HH3");
        newemmbed.addField("Command: `-check`","To View what Floor your on or foe status");
        newemmbed.addField("Command: `-items`","Check or use items in your bag");
        newemmbed.addField("Command: `-give < User Tag > < Item >`","Give items to your friends");
        newemmbed.addField("Command: `-equip`","View the equipment in your bag or `-equip < equipment number >` to use equipment");
        newemmbed.addField("Command: `-unequip`","unequip current equip you have on");
        newemmbed.addField("Command: `-discard < equipment number >`","discard");
        newemmbed.addField("Command: `-crystal`","Check or use crystals in your bag");
        newemmbed.addField("Command: `-shop`","To vist the shop");
        newemmbed.addField("Command: `-sell`","To sell equipment");
        newemmbed.addField("Command: `-craft`","To vist the craft shop");
        newemmbed.addField("Command: `-brew`","To vist the brew shop");
        newemmbed.addField("Command: `-repair`","To vist the repair shop");
        newemmbed.addField("Command: `-upgrade`","To upgrade your status");
        newemmbed.addField("Command: `-skill`","To view your skills");
        newemmbed.addField("Command: `-act attack`","Attack the foe (You gain skill energy from this) `Combat Only`");
        newemmbed.addField("Command: `-act defend`","defend from the (You gain skill energy from this) foe `Combat Only`");
        newemmbed.addField("Command: `-act potion`","to Heal with HP potion or `-act potion < potion's name >` to use other potions `Combat Only`");
        newemmbed.addField("Command: `-act skill < skill's name >`","Deal massive attacks with using skill energy `Combat Only`");
        newemmbed.addField("Command: `-act flee`","flee from the foe `Combat Only`");
        newemmbed.addField("Command: `-again`","when you are defeated you can continue fighting from where you last left off");
        newemmbed.addField("Command: `-open`","when you encounter a door");
        newemmbed.addField("Command: `-floor`","You will need to complete the game to use this command");
        newemmbed.addField("Command: `-restart`","You will need to complete the game to use this command");
    }
    else if(arg.includes("music")){
        newemmbed.addField("Command: `-play`", "Resumes a paused track or `-play <Video Title>` plays a track or for exact results try URL");
        newemmbed.addField("Command: `-p`", "plays your most recent track request");
        newemmbed.addField("Command: `-mylist`", "plays songs in your song list");
        newemmbed.addField("Command: `-addlist`", "plays songs in your song list");
        newemmbed.addField("Command: `-fav`", "plays your favorite track");
        newemmbed.addField("Command: `-pause`", "Pauses a playing track.");
        newemmbed.addField("Command: `-stop`", "stops and ends the track and playlist.");
        newemmbed.addField("Command: `-skip`", "Skips the playing track and plays the next track in playlist.");
        newemmbed.addField("Command: `-playing`", "Displays the current track playing.");
        newemmbed.addField("Command: `-playlist`", "Displays the playlist.");
        newemmbed.addField("Command: `-vol`", "Ajusts the volume of the track `-vol <Number>`(Max volume is 5).");
        newemmbed.addField("Command: `-loop`", "Loop the current track playing.");
        newemmbed.addField("Command: `-unloop`", "Unloop the current track.");
        newemmbed.addField("Command: `-disconnect`", "The playing track and listed tracks deleted and Bot is disconnected from voice channel.");
    }
    message.channel.send(newemmbed);
}
module.exports.key = {
    name: "help",
    description: "tell me your name."
}