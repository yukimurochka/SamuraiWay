import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

type DialogItemType = {
    id: string
    name: string
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    
    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Никита' id="1"/>
                <DialogItem name='Миша' id="2"/>
                <DialogItem name='Илья' id="3"/>
                <DialogItem name='Андрей' id="4"/>
                <DialogItem name='Глеб' id="5"/>
                <DialogItem name='Влад' id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="привет"/>
                <Message message="как дела?"/>
                <Message message="что делаешь?"/>
            </div>
        </div>
    )
}

export default Dialogs