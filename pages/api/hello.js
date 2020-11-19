// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

module.exports = (req, res) => {
  res.statusCode = 200
  /*res.body = {
    header:{
      'Content-Type': 'application/json'
    }
  }*/
  res.json({ name: 'John Doe' })
}
