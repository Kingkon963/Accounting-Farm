export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    if(req.method === 'POST')
      res.end(JSON.stringify({ method: "POST" }))
    else
      res.json({method: "GET"})
  }