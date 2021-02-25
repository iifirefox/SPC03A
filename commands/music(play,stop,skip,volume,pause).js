const Discord = require('discord.js');
const ytdl = require('discord-ytdl-core');
const ytsh = require('youtube-sr');
const queue = new Map();
module.exports.run = async (message, arg, commandname ,User,client) => {
    const vc = message.member.voice.channel;
    const playerembed = new Discord.MessageEmbed();
    const serverqueue = queue.get(message.guild.id);
    if (commandname=="play") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        subarg = arg.trim();
        if (subarg === "") {
            playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
            if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
            playerembed.setDescription(":x: Track already Playing.").setColor('#FF5BF2');
            if (serverqueue.playing) return message.channel.send(playerembed.setFooter("To add a track try command: -play with title or URL."));
            serverqueue.playing = true;
            serverqueue.connection.dispatcher.resume();
            playerembed.setDescription(":musical_note: Resuming " + serverqueue.songs[0].title + ".").setColor('#FF5BF2'); message.channel.send(playerembed);
            return undefined;
        }
        else {
            let newarg;
            if(arg.includes("https://")){
            if(arg.includes("https://www.youtube.com/watch?v=")){newarg = arg}
            else{
                playerembed.setDescription(":x: That is not Youtube Link.").setColor('#FF5BF2');
                return message.channel.send(playerembed);
            }
        }
           else{ let video = await ytsh.search(arg);
            playerembed.setDescription(":x: Nothing was found.").setColor('#FF5BF2');
            var result=0;
            if(!video[result]){
            for(var result=0;video[result]!=undefined&result<video.length;result++){if(result>9){result=-1; break}}}
            if (result==-1||!video[result]) return message.channel.send(playerembed);
            newarg ="https://www.youtube.com/watch?v="+video[result].id;}
            const thesong = await ytdl.getInfo(newarg,{filter: "audioonly",opusEncoded: true,fmt: "mp3",encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']});
            var pic = thesong.videoDetails.thumbnails[3].url;
            var upload = thesong.videoDetails.publishDate;
            var getpic = await ytsh.search(thesong.videoDetails.title);
            if(getpic[0]){pic=getpic[0].thumbnail.url;upload=getpic[0].uploadedAt}
            const song = {
                title: Discord.escapeMarkdown(thesong.videoDetails.title),
                thumbnail:pic,
                Duration:fancyTimeFormat(thesong.videoDetails.lengthSeconds),
                uploaded:upload,
                requestedby:User.name,
                loop: false,
                url: thesong.videoDetails.video_url
            }
            if (!serverqueue) {
                const servermap = {
                    textChannel: message.channel,
                    voiceChanel: vc,
                    connection: null,
                    songs: [],
                    volume: 5,
                    playing: true
                }
                queue.set(message.guild.id, servermap);
                servermap.songs.push(song);
                try {
                    var connection = await vc.join();
                    servermap.connection = connection;
                    play(message.guild, servermap.songs[0])
                } catch (error) {
                    queue.delete(message.guild.id);
                    console.log("-Error-: " + error);
                    playerembed.setDescription(":x: Player Error").setColor('#FF5BF2');
                    return message.channel.send(playerembed);
                }
            }
            else {
                serverqueue.songs.push(song);
                playerembed.setDescription(":arrow_forward: added to playlist " + song.title).setFooter("Command: -playlist to view playlist").setColor('#FF5BF2');
                return message.channel.send(playerembed);
            }
            return undefined;
        }
    }
    else if (commandname == "stop") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        serverqueue.songs = [];
        serverqueue.connection.dispatcher.end();
        playerembed.setDescription(":octagonal_sign:  Song has stopped.").setColor('#FF5BF2'); message.channel.send(playerembed);
        return undefined;
    }
    else if (commandname == "skip") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        if(serverqueue.songs[0]){
        if(serverqueue.songs[0].loop==true) serverqueue.songs[0].loop=false;}
        serverqueue.connection.dispatcher.end();
        playerembed.setDescription(":arrow_forward: Track has been skipped .").setColor('#FF5BF2'); message.channel.send(playerembed);
        return undefined;
    }
    else if (commandname == "vol") {
        playerembed.setDescription(":x: no voice channel").setColor('#FF5BF2');
        if (!message.member.voice.channel) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed);
        playerembed.setDescription(":x: volume is " + serverqueue.volume).setColor('#FF5BF2');
        if (!arg) return message.channel.send(playerembed);
        playerembed.setDescription(":x: volume can only be change from 1 - 5.").setColor('#FF5BF2');
        if (isNaN(arg)) return  message.channel.send(playerembed);
        serverqueue.connection.dispatcher.setVolumeLogarithmic(arg / 5)
        playerembed.setDescription(":loud_sound: Volume has been changed to " + arg + "/5").setColor('#FF5BF2'); message.channel.send(playerembed);
        return undefined;
    }
    else if (commandname == "playing") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed);
        playerembed.setColor('#FF5BF2');
        playerembed.setDescription(":minidisc: Currently playing: " + serverqueue.songs[0].title+"\nDuration: "+ serverqueue.songs[0].Duration+"\nUploaded: "+serverqueue.songs[0].uploaded+"\nRequested By: "+ serverqueue.songs[0].requestedby);
        playerembed.setImage(serverqueue.songs[0].thumbnail);
         message.channel.send(playerembed);
    }
    else if (commandname == "playlist") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        const listembed = new Discord.MessageEmbed();
        var totalduration =0;
        var addback =serverqueue.songs[0];
        var first= convertdur(serverqueue.songs[0].Duration);
        totalduration+=first
        serverqueue.songs.shift();
        displaytext="";
        for(var index=0;index<serverqueue.songs.length;index++){
            var listed = index+1;
            displaytext+=listed+" "+serverqueue.songs[index].title+"\nDuration: "+fancyTimeFormat(totalduration)+"\nRequestedBy: "+serverqueue.songs[index].requestedby+"\n";
            totalduration+=convertdur(serverqueue.songs[index].Duration);
        }
        serverqueue.songs.unshift(addback);
        listembed.setDescription(`
        **Now playing:** ${serverqueue.songs[0].title+"\n"+serverqueue.songs[0].Duration+"\nRequested By:"+serverqueue.songs[0].requestedby}
        __**Song queue:**__${displaytext}`
        )
        listembed.setColor('#FF5BF2');
        message.channel.send(listembed);

    }
    else if (commandname == "pause") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue.playing) return  message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        serverqueue.playing = false;
        serverqueue.connection.dispatcher.pause();
        playerembed.setDescription(":pause_button: Track has been paused.").setColor('#FF5BF2'); message.channel.send(playerembed);
    }
    else if(commandname=="disconnect"){
        playerembed.setDescription(":x: Not connected to voice channel.").setColor('#FF5BF2');
        if (!message.guild.voice.channel) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        playerembed.setDescription(":mobile_phone_off: The Music has stopped and left "+message.member.voice.channel.name +" (Voice Channel)").setColor('#FF5BF2');message.channel.send(playerembed);
        if(serverqueue){
        serverqueue.songs = [];
        serverqueue.connection.dispatcher.end();}
        message.guild.voice.channel.leave();
        queue.delete(message.guild.id);
    }
    else if (commandname == "loop") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        serverqueue.songs[0].loop =true;
        serverqueue.songs[0].title+=" - :repeat:`REPEATED TRACK`"
        playerembed.setDescription(":repeat:  Current Song is looped").setColor('#FF5BF2');message.channel.send(playerembed);
    }
    else if (commandname == "unloop") {
        playerembed.setDescription(":x: no voice channel").setColor('#FF5BF2');
        if (!message.member.voice.channel) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        serverqueue.songs[0].loop =false;
        serverqueue.songs[0].title=serverqueue.songs[0].title.replace(" - :repeat:`REPEATED TRACK`","");
        playerembed.setDescription(":musical_note: Current Song is unlooped").setColor('#FF5BF2');message.channel.send(playerembed);
    }
    function play(guild, song) {
        const serverqueue = queue.get(guild.id);
        if (!song) {
            queue.delete(guild.id);
            return 
        }
        const dispatcher = serverqueue.connection.play(ytdl(song.url),{type:"opus"})
            .on('finish', () => {
                if(serverqueue.songs[0]){
               if(serverqueue.songs[0].loop==false)serverqueue.songs.shift();
                play(guild, serverqueue.songs[0]);}
            })
            .on('error', error => {
                playerembed.setDescription(":x: Cannot play " + song.title).setColor('#FF5BF2');
                console.log(error);
                 message.channel.send(playerembed);
                 dispatcher.end();
            });
        dispatcher.setVolumeLogarithmic(serverqueue.volume / 5);
       if(!serverqueue.songs[0].title.includes(" - :repeat:`REPEATED TRACK`")){playerembed.setDescription(":musical_note:  Playing  " + serverqueue.songs[0].title).setColor('#FF5BF2');message.channel.send(playerembed);}
    }
    function fancyTimeFormat(duration)
{
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
function convertdur(x){
   x= Number(x.replace(`:`,``))
    return x;
}
}
module.exports.key = {
    name: "music(play,stop,skip,volume,pause)",
    description: "play your music."
}