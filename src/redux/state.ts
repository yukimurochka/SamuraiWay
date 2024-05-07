type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    postsData: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: SidebarType
}

let state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'где я?', likes: 123},
            {id: 2, message: 'здарова', likes: 41}
        ],
    },
    dialogsPage : {
        messages: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Как дела?'},
            {id: 2, message: 'Что делаешь?'}
        ],
        dialogs: [
            {id: 1, name: 'Никита'},
            {id: 2, name: 'Миша'},
            {id: 3, name: 'Илья'},
            {id: 4, name: 'Андрей'},
            {id: 5, name: 'Глеб'},
            {id: 6, name: 'Влад'}
        ],    
    }
    
  }

export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0
    }
    state.profilePage.postsData.push(newPost)
  }

  export default state;