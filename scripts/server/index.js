const { existsSync } = require('fs')
const { spawnSync } = require('child_process')

if(!existsSync('node_modules')){
    console.log('[Routify] Installing preview server')
    spawnSync('npm', ['i'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
    });
}

spawnSync('node', ['server'], {
    stdio: ['ignore', 'inherit', 'inherit'],
    shell: true
})