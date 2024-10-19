module.exports = {
	config: {
		name: "nyles",
		aliases: ["pudding"],
		version: "1.0",
		author: "Gta",
    

		countDown: 5,
		role: 2,
		shortDescription: "developer only dear",
		longDescription: "",
		category: "🖤💀NYLĒS SATÃNÄSS 🖤👑",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	    var link = [
 "https://i.ibb.co/rsYkt6Y/image.gif",
"https://i.ibb.co/2hPsLSt/image.gif",
"https://i.ibb.co/yFRgzQ5/image.gif",
"https://i.ibb.co/P1VhRBb/image.gif",
"https://i.ibb.co/r3z0yTV/image.gif",
"https://i.ibb.co/S3pD259/image.gif",
"https://i.ibb.co/mXQny8L/image.gif",
"https://i.ibb.co/88Jz3Kn/image.gif",
"https://i.ibb.co/Gcqc9jG/image.gif",
"https://i.ibb.co/Z2VjsCJ/image.gif",
"https://i.ibb.co/k3JkRmR/image.gif",
"https://i.ibb.co/V2sQ8CL/image.gif",
"https://i.ibb.co/g3q3rcz/image.gif",
"https://i.ibb.co/932Lqpy/image.gif",
"https://i.ibb.co/g71pNbC/image.gif",
"https://i.ibb.co/74QMHBD/image.gif"    
        
]

let img = link[Math.floor(Math.random()*link.length)]
message.reply({body: "NYLĒS SATÃNÄSS 🖤👑 humeur gif",
  attachment: await global.utils.getStreamFromURL(img)
})
}
        }
