const svite = require('svite');
const path = require('path');
const fs = require('fs');
const baseDir = path.resolve(__dirname);
const absoluteLayoutDir = path.join(baseDir,'src','layouts');
const relativeLayoutDir = path.relative(baseDir,absoluteLayoutDir);
const layoutAliases = fs.readdirSync(absoluteLayoutDir, {withFileTypes: true})
  .filter(item => item.isFile() && !item.isDirectory() && item.name.endsWith('.svelte'))
  .map(item => item.name)
  .reduce((aliasMap,layoutFile)=>{ aliasMap[`${absoluteLayoutDir}/${layoutFile}`]=`/${relativeLayoutDir}/${layoutFile}`;return aliasMap;},{})


module.exports = {
  alias: {
    ...layoutAliases,
    '/static/':'/static/'
  },
  plugins: [svite()],
  optimizeDeps: {
    include: ['@sveltech/routify/runtime/plugins/tree', '@sveltech/routify/runtime/plugins/assignAPI', '@sveltech/routify/runtime'],
    exclude: ['@sveltech/routify']
  }
};


