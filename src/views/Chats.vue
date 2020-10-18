<template>
  <div>

    <header class="screen-header">
        <h1 class="screen-header__title">Chats</h1>
    </header>

    <main class="main-screen">
      <ul>
        <li v-for="(list, idx) in chatList" :key="idx">
            <a @click="toChat(list.url, list.name)" class="chats__a">
              <div class="user-component">
                  <div class="user-component__column">
                      <img :src="list.url" class="user-component__avatar user-component__avatar--xl">
                      <div class="user-component__text">
                          <h4 class="user-component__title">{{list.name}}</h4>
                          <h6 class="user-component__subtitle">{{ list.chat_text[list.chat_text.length-1].text }}</h6>
                      </div>
                  </div>
                  <div class="user-component__column">
                      <span class="user-component__time">{{ list.chat_text[list.chat_text.length-1].time.slice(-5) }}</span>
                  </div>
              </div>
            </a>
        </li>
      </ul>
    </main>

    <nav-bar></nav-bar>

  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
	components: {
		NavBar,
	},
	data() {
		return {
			chatList: this.$store.state.chatlist,
		};
	},
	created() {
		window.scrollTo(0, 0);
	},
	methods: {
		toChat(url, name) {
			this.$router.push({ name: 'chat', params: { url, name } });
		},
	},
};
</script>

<style>
</style>