// "use client"

// import React from 'react'
// import styles from "@/styles/ContactForm.module.css"
// import { useState } from 'react'
// import { func } from 'prop-types';
// import ContactAPI from '../../api/contact';

// export default function ContactForm() {

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const data = {
//       name: String(event.target.name.value),
//       email: String(event.target.email.value),
//       message: String(event.target.message.value),
//     }

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })

//     if (res.ok) {
//       console.log("Success sending")
//     }
//     if (!res.ok) {
//       console.log("error sending message")
//     }
//     console.log({ data });

//   }

//   return (
//     <div className={styles.main} >ContacForm
//       <form onSubmit={handleSubmit}>
//         <div className={styles.inputGroup}>
//           <label htmlFor='name'>Name</label>
//           <input
//             id="name"
//             type='text'
//             minLength={3}
//             maxLength={50}
//             autoComplete="off"
//           />
//         </div>

//         <div
//           className={styles.inputGroup}>
//           <label htmlFor='email'>E-mail</label>
//           <input
//             id='email'
//             type='email'
//             minLength={5}
//             maxLength={150}
//             required
//             autoComplete='off'

//           />
//         </div>

//         <div className={styles.inputGroup}>
//           <label htmlFor='message'>Message
//           </label>
//           <textarea
//             // id="message"
//             name="message"
//             required
//             rows={4}
//             placeholder="Express yourself!"
//             minLength={10}
//             maxLength={500}
//             styles={styles.textArea}
//           />
//         </div>
//         <button
//           type="submit">Send message</button>

//       </form>
//     </div>
//   )

// }


// // const [name, setName] = useState("");
// // const [email, setEmail] = useState("");
// // const [message, setMessage] = useState("");
// // const [subitted, setSubmitted] = useState(false);


// // label htmlFor='message'>Message</label>
// //           <input type='text' onChange={(e) => {
// //             setMessage(e.target.value)
// //           }} name='message' required className={styles.inputField} />
// //         </div>



// {/* < input type='submit' onClick={(e) => { handleSubmit(e) }} />
// {/* < input type='submit'
//   onClick={(e) => {
//     console.log("Submit clicked")
//     handleSubmit(e)
//   }}
// /> */}


// // const handleSubmit = (e) => {
// //   e.preventDefault()
// //   console.log('Sending')

// //   let data = {
// //     name,
// //     email,
// //     message
// //   }

// //   fetch("app/api/hello/contact.js", {
// //     method: 'POST',
// //     headers: {
// //       'Accept': 'application/json, text/plain, */*',
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify(data)
// //   }).then((res) => {
// //     console.log('Response received')
// //     if (res.status === 200) {
// //       console.log('Response succeeded!')
// //       setSubmitted(true)
// //       setName('')
// //       setEmail('')
// //       setMessage('')
// //     }
// //   })
// // }
