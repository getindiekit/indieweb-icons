const process = require('node:process')

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addGlobalData('categories', {
    concepts: {
      title: 'Concepts',
      description: 'Icons that represent common IndieWeb principles and ideas.',
      color: 'ffb100'
    },
    microformats: {
      title: 'Formats',
      description: 'Icons that represent Microformats and its serialisations.',
      color: '8c0'
    },
    protocols: {
      title: 'Protocols',
      description: 'Icons that represent IndieWeb standards and protocols.'
    }
  })

  eleventyConfig.addGlobalData('icons', [
    { category: 'concepts', title: 'Personal domain' },
    { category: 'concepts', title: 'PESOS' },
    { category: 'concepts', title: 'POSSE' },
    { category: 'microformats', title: 'Microformats' },
    { category: 'microformats', title: 'h-card' },
    { category: 'microformats', title: 'h-cite' },
    { category: 'microformats', title: 'h-entry' },
    { category: 'microformats', title: 'h-event' },
    { category: 'microformats', title: 'h-feed' },
    { category: 'microformats', title: 'h-review' },
    { category: 'microformats', title: 'JF2' },
    { category: 'microformats', title: 'mf2' },
    { category: 'microformats', title: 'rel-me' },
    { category: 'protocols', title: 'IndieAuth', color: '903' },
    { category: 'protocols', title: 'Micropub', color: '099' },
    { category: 'protocols', title: 'Microsub', color: '39c' },
    { category: 'protocols', title: 'Webmention', color: 'ff5c00' },
    { category: 'protocols', title: 'Salmention', color: 'ff5c00' },
    { category: 'protocols', title: 'Vouch', color: 'ff5c00' },
    { category: 'protocols', title: 'Websub', color: '609' }
  ]);

  return {

    pathPrefix: process.env.GITHUB_ACTIONS
      ? '/indieweb-icons/'
      : '/'
  }
}
