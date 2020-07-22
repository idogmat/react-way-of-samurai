let initialState = {
    sidebar: [
        {id: '1', img: 'https://cdn.pixabay.com/photo/2017/06/02/17/47/friendship-2366955__340.jpg', name: 'Jack'},
        {
            id: '2',
            img: 'https://i.pinimg.com/originals/92/60/10/9260100b12fe39d90bed2bccdc55fe38.jpg',
            name: 'Dimych'
        },
        {id: '3', img: 'https://beaglesays.files.wordpress.com/2017/07/reflection.jpg', name: 'Choppy'}
    ]
};

const sidebarReducer = (state = initialState) => {

    return state;
}
export default sidebarReducer;