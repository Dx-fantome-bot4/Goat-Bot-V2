module.exports = {
 config: {
	 name: "🖤kick",
	 version: "1.0",
	 author: "NYLĒS SATÃNÄSS 🖤",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "🖤kick") {
 return message.reply({
 body: "bye bye 👋😙",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/LZ9g9zd/image.gif")
 });
 }
 }
}