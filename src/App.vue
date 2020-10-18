<template>
  <div>
    <status-bar></status-bar>
    <router-view class="screen-div" :class="[getfontcolor, getfontfamily]"></router-view>
  </div>
</template>

<script>
import StatusBar from './components/StatusBar.vue';

export default {
	components: {
		StatusBar,
	},
	computed: {
		// getbgColor() {
		// 	return this.$store.state.changebgcolor;
		// },
		getfontfamily() {
			return this.$store.state.changedfontfamily;
		},
		getfontcolor() {
			return this.$store.state.changedfontcolor;
		},
	},
};
</script>

<style>
@import url(./css/styles.css);
</style>