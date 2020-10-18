<template>
  <div>

    <header class="alt-header">
        <div class="alt-header__column">
            <router-link to="/settings">
              <i class="fas fa-angle-left fa-3x"></i>
            </router-link>
        </div>
        <div class="alt-header__column">
        </div>
        <div class="alt-header__column">
        </div>
    </header>

    <div class="selcetedcolor">
      <p :class="changedFontColor">selected font color</p>
    </div>
    <div class="changefontcolor">
      <div class="changefontcolor__div">
          <div class="bgfontcolor1" @click="getfontcolor('fontcolor1', changedFontColor)">#E74C3C</div>
          <div class="bgfontcolor2" @click="getfontcolor('fontcolor2', changedFontColor)">#3498DB</div>
          <div class="bgfontcolor3" @click="getfontcolor('fontcolor3', changedFontColor)">#8E44AD</div>
          <div class="bgfontcolor4" @click="getfontcolor('fontcolor4', changedFontColor)">#16A085</div>
          <div class="bgfontcolor5" @click="getfontcolor('fontcolor5', changedFontColor)">#2ECC71</div>
      </div>
      <div class="changefontcolor__div"> 
          <div class="bgfontcolor6" @click="getfontcolor('fontcolor6', changedFontColor)">#F39C12</div>
          <div class="bgfontcolor7" @click="getfontcolor('fontcolor7', changedFontColor)">#D35400</div>
          <div class="bgfontcolor8" @click="getfontcolor('fontcolor8', changedFontColor)">#BDC3C7</div>
          <div class="bgfontcolor9" @click="getfontcolor('fontcolor9', changedFontColor)">#7F8C8D</div>
          <div class="bgfontcolor10" @click="getfontcolor('fontcolor10', changedFontColor)">#2C3E50</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			showColor: true,
			selectedFontColor: '',
			changedFontColor: this.$store.state.changedfontcolor,
		};
	},
	methods: {
		getfontcolor(selectedFontColor, changedFontColor) {
			if (changedFontColor === '') {
				if (this.showColor === true) {
					this.$store.commit('changefontColor', selectedFontColor);
					this.showColor = false;
					this.selectedFontColor = selectedFontColor;
					this.changedFontColor = selectedFontColor;
				}
			} else {
				if (changedFontColor === selectedFontColor) {
					this.$store.commit('changefontColor', 'black');
					this.showColor = true;
					this.selectedFontColor = selectedFontColor;
					this.changedFontColor = 'black';
				} else {
					this.$store.commit('changefontColor', selectedFontColor);
					this.showColor = false;
					this.selectedFontColor = selectedFontColor;
					this.changedFontColor = selectedFontColor;
				}
			}
		},
	},
};
</script>

<style>
</style>