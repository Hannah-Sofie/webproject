import React from 'react';
import styles from './reflections.module.css';
import { useNavigate } from 'react-router-dom';


export default function WriteNew() {

    const navigate = useNavigate();


    return (
        <div className={styles.formpage}>
            <form className={styles.writenew}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
        
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" />

                <div className={styles.formline}></div>
                <div className={styles.formbuttons}>
                    <button onClick={() => navigate('/reflections')}>Cancel</button>
                    <input className={styles.submitbutton} type="submit" value="Submit" onClick={() => navigate('/reflections')} />
                </div>
            </form>
        </div>
    );
}