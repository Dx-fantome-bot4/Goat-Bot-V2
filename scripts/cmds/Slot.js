module.exports = {
  config: {
    name: "slot",
    version: "1.1",
    author: "GTA",
    role: 0,
    shortDescription: "𝐉𝐨𝐮𝐞 𝐚𝐮 𝐉𝐞𝐮𝐱 𝐒𝐥𝐨𝐭",
    longDescription: "𝐉𝐨𝐮𝐞 𝐚𝐮 𝐉𝐞𝐮𝐱 𝐒𝐥𝐨𝐭",
    category: "game",
    guide: {
      en: "{p}slot {money} / reply to gift box by number"
    }
  },

  onStart: async function ({ args, message, event, api, usersData }) {
    try {
      const amount = parseInt(args[0]);
      if (isNaN(amount) || amount <= 0) {
        return message.reply("quel montant voulez-vous parié 😐🥃");
      }

      const senderID = event.senderID;

      const userData = await usersData.get(senderID);

      if (amount > userData.money) {
        return message.reply(" ce jeu est interdite aux pauvres 😐🥃");
      }

      const sentMessage = await message.reply("🎁 🎁 🎁");

      const emojis = ['❌', '❌', '💵'];
      emojis.sort(() => Math.random() - 0.5); 

      const shuffledEmojis = emojis.join('');

      const gemPosition = emojis.indexOf('💵');

      global.GoatBot.onReply.set(sentMessage.messageID, {
        commandName: "slot",
        messageID: sentMessage.messageID,
        correctAnswer: gemPosition,
        amount: amount,
        senderID: senderID
      });

    } catch (error) {
      console.error("😕:", 𝐄𝐫𝐫𝐞𝐮𝐫);
      message.reply("😕 erreur temporaire ");
    }
  },

  onReply: async function ({ message, event, Reply, api, usersData }) {
    try {
      if (!event || !message || !Reply) return; 
      const userAnswer = event.body.trim();

      if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 3) {
        return message.reply("  répond par  1 ; 2 où 3.");
      }

      const gemPosition = Reply.correctAnswer;
      const chosenPosition = parseInt(userAnswer) - 1; 

      const senderID = Reply.senderID;
      const userData = await usersData.get(senderID);

      if (chosenPosition === gemPosition) {
        const winnings = Reply.amount * 2000;
        await usersData.set(senderID, { money: userData.money + winnings }); 
        await message.reply(`bravo👏 tu as gagné ${winnings} balles. bien joué !!!.😐🥃`);
      } else {
        const lostAmount = Reply.amount;
        await usersData.set(senderID, { money: userData.money - lostAmount });
        await message.reply(`tu as perdu  ${lostAmount} balles merci pour ton fric😐🥃`);
      }

      const emojis = ['❌', '❌', '💵'];
      const revealedEmojis = emojis.map((emoji, index) => (index === gemPosition) ? '💵' : '❌').join('');
      await api.editMessage(revealedEmojis, Reply.messageID);
    } catch (error) {
      console.error("Error while handling user reply:", error);
    }
  }
};
  
