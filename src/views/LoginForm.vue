<template>
  <div>

    <header class="welcome-header">
        <h1 class="welcome-header__title">welcome to KaKao Clone</h1>
        <p class="welcome-header__text">
            If you have a KoKoa Account, log in with tour email or phone number.
        </p>
    </header>

    <form v-on:submit.prevent="loginUser" id="login-form">
        <input name="username" type="text" placeholder="Email or phone number" ref="username">
        <input name="password" type="password" placeholder="Password" ref="password">
        <input type="submit" value="Log In">
        <a href="#">Find Kakao Account or Password</a>
    </form>

  </div>
</template>

<script>
export default {
	methods: {
		loginUser() {
			this.$router.push('/friends');
		},
	},
};
</script>

<style>
</style>