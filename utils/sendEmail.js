import fetch from 'node-fetch'
import Cors from 'cors'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'



const cors = Cors({
    methods: ['POST']
})

function runMiddleware(req, res, fn){
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if(result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}


const sendEmail = async ({ name, email, message, req, res }) => {
    //await runMiddleware(req, res, cors)
    console.log("Sending...");
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: 'Demo success :)'
            }
          ],
          from: {
            email: 'naimulislam19149@gmail.com',
            name: 'Test SendGrid'
          },
          content: [
            {
              type: 'text/html',
              value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid.
                     ${message}`
            }
          ]
        })
    })
    .then(res => {
        if(!res.ok){
            console.log("Error in sendEmail fn")
        }
        return res;
    })
}

export { sendEmail };