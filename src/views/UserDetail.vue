<template>
  <div class="userdetail-div" id="userdetail-fontcolor">
    
    <header class="userdetail-header">
      <router-link to="/friends">
        <i class="fas fa-times fa-2x"></i>
      </router-link>
    </header>
    
    <main class="userdetail-main">
      <div class="userdetail-main__userinfo">
        <img
          class="userdetail-main__userinfo-img"
          :src="infoUrl"
        />
        <div>
          <h4 class="userdetail-main__title">{{ infoName }}</h4>
        </div>
      </div>
      <div class="userdetail-main__userinfo">
        <a @click="toChat(infoUrl, infoName)" class="userdetail-main__userinfo-chat">
          <i class="fas fa-comment fa-2x"></i>
          <span>chatting</span>
        </a>
      </div>
    </main>

  </div>
</template>

<script>
export default {
	data() {
		return {
			infoUrl: this.$route.params.url,
			infoName: this.$route.params.name,
		};
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
