<template>
  <div>
    <header class="screen-header">
        <h1 class="screen-header__title">News</h1>
        <div class="screen-header__icons">
        </div>
    </header>

    <main class="main-screen">
        <ul class="news-list">
            <li v-for="(news, idx) in newList" :key="idx" class="news-list__li">
                <p class="news-list__title">
                    {{idx + 1}}.
                    <span @click="openNew(news.url)">
                    {{news.title}}
                    </span>
                </p>
                <small class="news-list__link">
                    {{news.time_ago}} by {{news.user}}
                </small>
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
	computed: {
		newList() {
			return this.$store.state.news;
		},
	},
	created() {
		this.$store.dispatch('FETCH_NEWS');
		window.scrollTo(0, 0);
	},
	methods: {
		openNew(url) {
			window.open(url);
		},
	},
};
</script>

<style>
</style>