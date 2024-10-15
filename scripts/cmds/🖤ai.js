module.exports = {
 config: {
	 name: "Ai",
	 version: "1.0",
	 author: "NYLĒS SATÃNÄSS 🖤👑",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Ai") {
 return message.reply({
 body: "😠fils de pute.!!!🔪",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/qJK6kdy/image.gif")
 });
 }
 }
}