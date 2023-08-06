"use client"

import React from 'react'
import styles from "styles/MailForm.module.css"
import { brightYoungThings } from "@/styles/fonts"
import { Montserrat, Montserrat_Alternates } from "next/font/google";

// className={brightYoungThings.className} style={{fontSize: "3rem", color: "#faebd7", letterSpacing: "0.2rem", opacity: "40%" }}

export default function MailForm() {

    console.log("mailform");
  return (
  <>
  <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", paddingTop: "2rem" }}>
  <div className={styles.contactBox} >
    <h2 className={`${styles.id} ${brightYoungThings.className}`} >Me:</h2>
    <p className={styles.contactText}>Ceridwen Roberts</p>
    <p className={styles.contactText}>ceridwen.roberts@gmail.com</p>
  </div>
  <div className={`{styles.contactBox}`}>
    <h2 className={`${styles.id} ${brightYoungThings.className}`}>You:</h2>
    <form action="mailto:ceridwen.roberts@cmeducations.se" method="post" type="text/plain">
    <div className="styles.field">
        <label htmlFor='name'>Name
     <input className={styles.inputField} type="text" id="name" name="name" required placeholder="Required" />
     </label>
    </div>
    <div className={styles.field}>
        <label htmlFor="email">Email
        <input className={styles.inputField} 
        type="text" 
        id="email" 
        name="email" 
        required 
        placeholder="Required" />
        </label>
    </div>
    <div className={styles.field}>
        <label htmlFor="message">Leave a message
            <textarea className={styles.textarea} id="message" name="message" rows="5" cols="10" required placeholder="Express yourself!">
            </textarea>
        </label>
    </div>
        <input type="submit" value="submit" className={styles.submitButton} />
</form>
</div>
</div>
</>
  )
}
