module.exports = {
 config: {
	 name: "attacque",
	 version: "1.0",
	 author: "NYLĒS SATÃNÄSS ",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "attaque") {
 return message.reply({
 body: "te dans la merde mon choux 😚",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/V2sQ8CL/image.gif")
 });
 }
 }
}