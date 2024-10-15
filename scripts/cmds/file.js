 const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61566713853703"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("Ta mère fils de porc 😐🥃", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("balance le nom du fichier mon pudding 😙.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`ce fichier n'existe pas 😐🥃: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
