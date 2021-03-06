const { Command } = require('discord-akairo');

class Oops extends Command {
	constructor() {
		super('oops', {
			aliases: ['oops'],
		    args: [
		        {
		            id: 'count'
		        }
		    ],
		});
	}

	exec(message, args) {
		if (this.client.user.lastMessage === null) { return message.reply('I don\'t remember sending any messages :worried:'); }
		if (!args.count) { this.client.user.lastMessage.channel.id === message.channel.id ? this.client.user.lastMessage.delete() : null }
		else { 
			const mine = message.channel.messages.filter(m => m.author.id === '336749794460696580');
			[...mine].slice(-Math.abs(args.count)).forEach(m => m[1].delete());
		}
	}
}

module.exports = Oops;
