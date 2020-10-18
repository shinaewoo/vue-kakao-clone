<template>
    <div class="status-bar">
        <div class="status-bar__column">
            <span>No Service</span>
            <i class="fas fa-wifi"></i>
        </div>
        <div class="status-bar__column">
            <span>{{ nowTime }}</span>
        </div>
        <div class="status-bar__column">
            <span>11%</span>
            <i class="fas fa-battery-quarter fa-lg"></i>
            <i class="fas fa-bolt"></i>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			nowTime: '00:00:00',
		};
	},
	methods: {
		getTime() {
			const date = new Date();
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const seconds = date.getSeconds();
			this.nowTime = `${hours < 10 ? `0${hours}` : hours} : ${
				minutes < 10 ? `0${minutes}` : minutes
			} : ${seconds < 10 ? `0${seconds}` : seconds}`;
		},
	},
	created() {
		setInterval(this.getTime, 1000);
	},
};
</script>

<style>
</style>