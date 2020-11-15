import styles from '../styles/ContactForm.module.scss'

export default function ContactForm(){
    return(
        <form className={styles.Form} onSubmit={(e) => e.preventDefault()}>
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input type="text" className={`form-control ${styles.nameInput}`}/>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control'/>
            </div>
            <div className='form-group'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"
                className='form-control'></textarea>
            </div>
            <button className={styles.sendBtn}>Send</button>
        </form>
    )
}