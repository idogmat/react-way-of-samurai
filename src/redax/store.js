// import {rerenderEntireTree} from "../index";
// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: '1', age: '28', msg: 'Hi gay', name: 'Jack', likes: '123'},
//                 {id: '2', age: '32', msg: 'Hi gay', name: 'Dimych', likes: '2'},
//                 {id: '3', age: '44', msg: 'How is ur it-kamasutra', name: 'Choppy', likes: '23'},
//                 {id: '4', age: '22', msg: 'How is ur it-kamasutra', name: 'Goggy', likes: '12'},
//                 {id: '5', age: '30', msg: 'hi yo', name: 'Rufus', likes: '23'},
//                 {id: '6', age: '34', msg: 'hi yo', name: 'Semen', likes: '42'},
//                 {id: '7', age: '30', msg: 'hi yo', name: 'Sasha', likes: '2'}
//             ],
//             newPostText: 'some text'
//         },
//         dialogs: {
//             dialogsPerson: [
//                 {id: '1', name: 'Jack'},
//                 {id: '2', name: 'Dimych'},
//                 {id: '3', name: 'Choppy'},
//                 {id: '4', name: 'Goggy'},
//                 {id: '5', name: 'Rufus'},
//                 {id: '6', name: 'Semen'},
//                 {id: '7', name: 'Sasha'}
//             ],
//             msgData: [
//                 {id: '1', msg: 'Hi gay', likes: 20},
//                 {id: '2', msg: 'Hi gay', likes: 12},
//                 {id: '3', msg: 'How is ur it-kamasutra', likes: 43},
//                 {id: '4', msg: 'How is ur it-kamasutra', likes: 23},
//                 {id: '5', msg: 'hi yo', likes: 12},
//                 {id: '6', msg: 'hi yo', likes: 17},
//                 {id: '7', msg: 'hi yo', likes: 20}
//             ],
//             newMassage: 'hey.ho'
//         },
//         sidebar: [
//             {id: '1', img: 'https://cdn.pixabay.com/photo/2017/06/02/17/47/friendship-2366955__340.jpg', name: 'Jack'},
//             {
//                 id: '2',
//                 img: 'https://i.pinimg.com/originals/92/60/10/9260100b12fe39d90bed2bccdc55fe38.jpg',
//                 name: 'Dimych'
//             },
//             {id: '3', img: 'https://beaglesays.files.wordpress.com/2017/07/reflection.jpg', name: 'Choppy'}
//         ]
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         observer();
//     },
//
// //
//
//     dispatch(action) {
//
//         this._state.profilePage=profileReducer(this._state.profilePage, action);
//         this._state.dialogs=dialogsReducer(this._state.dialogs, action);
//         this._state.sidebar=sidebarReducer(this._state.sidebar, action);
//         this.rerenderEntireTree(this._state);
//
//     }
// }
// export default store;
// window.store = store;