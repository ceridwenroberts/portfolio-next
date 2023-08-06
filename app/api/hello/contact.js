// import nodemailer from "nodemailer"
// import { config } from 'dotenv';


// export default async function ContactAPI(res, req) {
//     const {name, email, message } = req.body

//     const data = {
//         name, email, message
//     }
//     const user = process.env.user


//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.net",
//         port: 465,
//         secure: true,
//         auth: {
//           // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//           user: user,
//           pass: process.env.pass,
//         },
//       });

//       try {
          
//           const mail = await transporter.sendMail({
//               from: user,
//               to: 'ceridwen.robert@gmail.com',
//               replyTo: email,
//               subject: `Contact svar från ${name}` ,
//               html:`
//               <p>Name: ${name}</p>
//               <p>Email: ${email}</p>
//               <p>Message: ${message}</p>
//               `,
//             });
            
//             console.log("Message sent: %s", mail.messageId);

//             return res.status(200).json({message: "success" });
            
//       } catch (error) {
//         console.log(error)
//         res.status(500).json({message: "Problem sending. Message not sent."})        
//       }

// }