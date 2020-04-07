const express = require('express')
const { ssr } = require('@sveltech/ssr')
const app = express()

const {PORT = 5000} = process.env
const distDir = '../../dist'
const bundleDir = `${distDir}/build/bundle.js`
const templateDir = `${distDir}/__app.html`

// Serve assets and prerendered pages
app.use(express.static(distDir))

// Fallback to SSR rendering if the file doesn't exist
app.get('*', async (req, res) => {
    const HTML = await ssr(templateDir, bundleDir, req.url)
    res.send(HTML)
})

console.log('Serving on http://localhost:' + PORT)
app.listen(PORT)
