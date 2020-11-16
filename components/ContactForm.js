import { useState } from 'react'
import styles from '../styles/ContactForm.module.scss'

export default function ContactForm(){
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Message, setMessage] = useState('')

    const handleChange = (e) => {
        switch(e.target.name){
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'message':
                setMessage(e.target.value);
                break;  
            default:
                console.log("Error handling the onChange Event in ContactForm!"); 
        }
        //console.log(e.target.value);
    };

    return(
        <form className={styles.Form} onSubmit={(e) => e.preventDefault()}>
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' className={`form-control ${styles.nameInput}`} value={Name} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' className='form-control' value={Email} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"
                className='form-control' value={Message} onChange={handleChange}></textarea>
            </div>
            <button className={styles.sendBtn}>Send</button>
        </form>
    )
}