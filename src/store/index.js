import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        myinfo: {
            "id": "0",
            "url": "https://i.pinimg.com/originals/e4/c1/f9/e4c1f9078f815a129752d16e134ffd8a.jpg",
            "name": "Max",
            "birthday_month": 9,
            "birthday_day": 9,
        },
        // mychat:[],
        friends: [{
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR900Y8DOq4EFen0P95T7bRTCf0_VApsdCPRQ&usqp=CAU",
                "name": "Chloe",
                "birthday_month": 11,
                "birthday_day": 11,
            },
            {
                "url": "https://1.gall-img.com/hygall/files/attach/images/82/867/931/304/4a41a7ce357aa62ebc81bf482ad86d4d.png",
                "name": "Gidget",
                "birthday_month": 10,
                "birthday_day": 10,
            },
            {
                "url": "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_%2817%29.jpg?type=w420",
                "name": "Snowball",
                "birthday_month": 11,
                "birthday_day": 11,
            },
            {
                "url": "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1oCI/image/1en7uxWK7BnJgbfU-7EpR8sfow8.jpeg",
                "name": "Duke",
                "birthday_month": 11,
                "birthday_day": 11,
            },
        ],
        chatlist: [],
        idx: -1,
        date: [],
        news: [],
        changedfontfamily: '',
        changedfontcolor: '',
        changedbgcolor: '',
        
    },
    actions,
    mutations,
});