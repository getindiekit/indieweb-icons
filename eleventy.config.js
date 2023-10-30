const path = require("node:path");
const process = require("node:process");

const icons = {
  concepts: {
    title: "Concepts",
    description:
      "Icons that represent common IndieWeb principles and ideas. These share the same ‘node’ motif used in the protocol icons.",
    color: "ffb100",
    icons: {
      "personal-domain": { name: "Personal domain" },
      pesos: { name: "PESOS" },
      posse: { name: "POSSE" },
    },
  },
  microformats: {
    title: "Formats",
    description:
      "Icons that represent Microformats and its serialisations. These build on the existing Microformats identity.",
    color: "a3cc00",
    icons: {
      microformats: { name: "Microformats" },
      "h-card": { name: "h-card" },
      "h-cite": { name: "h-cite" },
      "h-entry": { name: "h-entry" },
      "h-event": { name: "h-event" },
      "h-feed": { name: "h-feed" },
      "h-review": { name: "h-review" },
      jf2: { name: "JF2" },
      mf2: { name: "mf2" },
      "rel-me": { name: "rel-me" },
    },
  },
  protocols: {
    title: "Protocols",
    description:
      "Icons that represent IndieWeb standards and protocols. These share the same ‘node’ motif used in the concept icons.",
    icons: {
      indieauth: { name: "IndieAuth", color: "cc0081" },
      micropub: { name: "Micropub", color: "13b919" },
      microsub: { name: "Microsub", color: "00ccb1" },
      websub: { name: "WebSub", color: "6d00cc" },
      webmention: { name: "Webmention", color: "ff5c00" },
      salmention: { name: "Salmention", color: "ff5c00" },
      vouch: { name: "Vouch", color: "ff5c00" },
    },
  },
};

module.exports = function (eleventyConfig) {
  // Generate icons with color fill, useful when embedding as an `img`
  eleventyConfig.addExtension("svg", {
    compile: async (inputContent, inputPath) => {
      const { dir, name } = path.parse(inputPath);
      const category = dir.split("/")[2];
      const icon = icons[category].icons[name];
      const color = icon.color || icons[category].color;

      let output = inputContent.replace("currentcolor", `#${color}`);

      return async () => {
        return output;
      };
    },
    outputFileExtension: "svg",
  });

  eleventyConfig.addTemplateFormats("svg");

  eleventyConfig.addGlobalData("icons", icons);

  eleventyConfig.ignores.add("README.md");

  return {
    pathPrefix: process.env.GITHUB_ACTIONS ? "/indieweb-icons/" : "/",
  };
};
