export default function handler (req, res) {
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')
    res.send(`<h1>Bismillah</h1>`)
}