const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    const newemmbed = new Discord.MessageEmbed();
    if (arg === "") {
        var colorname="";
        newemmbed.setColor(User.colortheme);
        newemmbed.setTitle(":rainbow:  Color Theme");
        newemmbed.setImage("https://i.ibb.co/fkRBXTs/Colortheme.png");
        newemmbed.setFooter("to change your color theme Command: -color with the color of your choice,\n you can also add light or dark.");
        message.channel.send(newemmbed);
        }
        else {
            if (arg.includes("red")) {
                if (arg.includes("light")) {
                    colorname = "Light Red";
                    User.colortheme = "#FF5747";
                }
                else if (arg.includes("dark")) {
                    colorname = "Dark Red";
                    User.colortheme = "#CC1200";
                }
                else {
                    colorname = "Red";
                    User.colortheme = "#FF1600";
                }
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear: Your color theme has been changed to " + colorname + ".");
            }
            else if (arg.includes("white")) {
                colorname = "White";
                User.colortheme = "#FFFEFE";
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear: Your color theme has been changed to " + colorname + ".");
            }
            else if (arg.includes("blue")) {
                if (arg.includes("light")) {
                    colorname = "Light Blue";
                    User.colortheme = "#00F5FF";
                }
                else if (arg.includes("dark")) {
                    colorname = "Dark Blue";
                    User.colortheme = "#000AFF";
                }
                else {
                    colorname = "Blue";
                    User.colortheme = "#0086FF";
                }
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear: Your color theme has been changed to " + colorname + ".");
            }
            else if (arg.includes("green")) {
                if (arg.includes("light")) {
                    colorname = "Light Green";
                    User.colortheme = "#A7FC5A";
                }
                else if (arg.includes("dark")) {
                    colorname = "Dark Green";
                    User.colortheme = "#00D215";
                }
                else {
                    colorname = "Green";
                    User.colortheme = "#28FF00";
                }
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear: Your color theme has been changed to " + colorname + ".");
            }
            else if (arg.includes("orange")) {
                if (arg.includes("light")) {
                    colorname = "Light Orange";
                    User.colortheme = "#FFDE4A";
                }
                else if (arg.includes("dark")) {
                    colorname = "Dark Orange";
                    User.colortheme = "#FF8F00";
                }
                else {
                    colorname = "Orange";
                    User.colortheme = "#FFB900";
                }
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear: Your color theme has been changed to " + colorname + ".");
            }
            else if (arg.includes("yellow")) {
                colorname = "Yellow";
                User.colortheme = "#FF8F00"
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear:Your color theme has been changed to Yellow.");
            }
            else if (arg.includes("black")) {
                colorname = "Black";
                User.colortheme ="#000000"
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear: Your color theme has been changed to " + colorname + ".");
            }
            else if (arg.includes("pink")) {
                if (arg.includes("light")) {
                    colorname = "Light Pink";
                    User.colortheme = "#FF93C7"
                }
                else if (arg.includes("dark")) {
                    colorname = "Dark Pink";
                    User.colortheme = "#FF027C"
                }
                else {
                    colorname = "Pink";
                    User.colortheme = "#FF6AB2"
                }
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear: Your color theme has been changed to " + colorname + ".");
            }
            else if (arg.includes("purple")) {
                if (arg.includes("light")) {
                    colorname = "Light Pink";
                    User.colortheme = "#F993FF"
                }
                else if (arg.includes("dark")) {
                    colorname = "Dark Pink";
                    User.colortheme = "#A000AD"
                }
                else {
                    colorname = "Purple";
                    User.colortheme = "#FF00FB"
                }
                newemmbed.setColor(User.colortheme);
                newemmbed.setDescription(":gear: Your color theme has been changed to " + colorname + ".");
            }
            else {
                newemmbed.setDescription(":x: That color does not exist.");
        }
        message.channel.send(newemmbed);
        }
}
module.exports.key = {
    name: "color",
    description: "Pick the color of your text theme."
}