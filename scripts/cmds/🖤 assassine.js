module.exports = {
 config: {
	 name: "🖤assassine",
	 version: "1.0",
	 author: "GTA",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "") {
 return message.reply({
 body: "nouveau projet d'assassinat ",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/zGC8QrB/image.jpg")
 });
 }
 }
}
