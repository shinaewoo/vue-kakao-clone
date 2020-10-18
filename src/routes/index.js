import vue from 'vue';
import VueRouter from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import Friends from '../views/Friends.vue';
import UserDetail from '../views/UserDetail.vue';
import Chats from '../views/Chats.vue';
import Chat from '../views/Chat.vue';
import News from '../views/News.vue';
import Settings from '../views/Settings.vue';
import BackgroundColor from '../views/BackgroundColor.vue';
import FontColor from '../views/FontColor.vue';
import FontFamily from '../views/FontFamily.vue';

vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LoginForm,
    },
    {
      path: '/friends',
      component: Friends,
    },
    {
      path: '/userdetail',
      name: 'userdetail',
      component: UserDetail,
    },
    {
      path: '/chats',
      name: 'chats',
      component: Chats,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
    {
      path: '/news',
      component: News,
    },
    {
      path: '/settings',
      component: Settings,
    },
    {
      path: '/backgroundcolor',
      component: BackgroundColor,
    },
    {
      path: '/fontcolor',
      component: FontColor,
    },
    {
      path: '/fontfamily',
      component: FontFamily,
    },
  ],
});
