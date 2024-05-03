import React from "react"
import s from './Dialogs.module.css'
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Никита'},
        {id: 2, name: 'Миша'},
        {id: 3, name: 'Илья'},
        {id: 4, name: 'Андрей'},
        {id: 5, name: 'Глеб'},
        {id: 6, name: 'Влад'}
    ]

    let messages = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как дела?'},
        {id: 2, message: 'Что делаешь?'}
    ]
    
    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messages.map( message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}  
            </div>
        </div>
    )
}

export default Dialogs