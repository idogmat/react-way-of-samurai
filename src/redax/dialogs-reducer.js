const ADD_NEW_MSG_TEXT = 'ADD-NEW-MSG-TEXT';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';
let initialState={
    dialogs: {
        dialogsPerson: [
            {id: '1', name: 'Jack'},
            {id: '2', name: 'Dimych'},
            {id: '3', name: 'Choppy'},
            {id: '4', name: 'Goggy'},
            {id: '5', name: 'Rufus'},
            {id: '6', name: 'Semen'},
            {id: '7', name: 'Sasha'}
        ],
        msgData: [
            {id: '1', msg: 'Hi gay', likes: 20},
            {id: '2', msg: 'Hi gay', likes: 12},
            {id: '3', msg: 'How is ur it-kamasutra', likes: 43},
            {id: '4', msg: 'How is ur it-kamasutra', likes: 23},
            {id: '5', msg: 'hi yo', likes: 12},
            {id: '6', msg: 'hi yo', likes: 17},
            {id: '7', msg: 'hi yo', likes: 20}
        ],
        newMassage: 'hey.ho'
    },
}
const dialogsReducer = (state = initialState, action) => {
    let stateCopy ={...state};
    stateCopy.dialogs = {...state.dialogs};
    stateCopy.dialogs.msgData = [...state.dialogs.msgData];

    switch (action.type) {
        case ADD_NEW_MSG_TEXT: {
            let newMsg = {
                id: '101',
                msg: stateCopy.dialogs.newMassage,
                likes: 0
            };
            stateCopy.dialogs.msgData.push(newMsg);
            stateCopy.dialogs.newMassage = '';
            return stateCopy;
        }
        case UPDATE_NEW_MSG_TEXT: {
            stateCopy.dialogs.newMassage = action.newMsg;
            return stateCopy;
        }
        default:
            return state;
    }

}
export const addNewMsgText=()=>{
    return ({type:ADD_NEW_MSG_TEXT})
}
export const updateNewMsgTextActionCreator=(text)=>{
    return ({type: UPDATE_NEW_MSG_TEXT, newMsg:text})
}
export default dialogsReducer;