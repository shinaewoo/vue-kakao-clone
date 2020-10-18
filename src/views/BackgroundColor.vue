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

    <div class="selcetedbgcolor">
      <p :class="changedBgColor">selected background color</p>
    </div>
    <div class="changebackground">
      <div class="changebackground__div">
        <div class="bgcolor1" @click="getBgColor('bgcolor1', changedBgColor)">#EC7063</div>
        <div class="bgcolor2" @click="getBgColor('bgcolor2', changedBgColor)">#A569BD</div>
        <div class="bgcolor3" @click="getBgColor('bgcolor3', changedBgColor)">#5DADE2</div>
        <div class="bgcolor4" @click="getBgColor('bgcolor4', changedBgColor)">#45B39D</div>
        <div class="bgcolor5" @click="getBgColor('bgcolor5', changedBgColor)">#58D68D</div>
      </div>
      <div class="changebackground__div"> 
        <div class="bgcolor6" @click="getBgColor('bgcolor6', changedBgColor)">#F5B041</div>
        <div class="bgcolor7" @click="getBgColor('bgcolor7', changedBgColor)">#DC7633</div>
        <div class="bgcolor8" @click="getBgColor('bgcolor8', changedBgColor)">#CACFD2</div>
        <div class="bgcolor9" @click="getBgColor('bgcolor9', changedBgColor)">#99A3A4</div>
        <div class="bgcolor10" @click="getBgColor('bgcolor10', changedBgColor)">#566573</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			showColor: true,
			selectedBgColor: '',
			changedBgColor: this.$store.state.changedbgcolor,
		};
	},
	methods: {
		getBgColor(selectedBgColor, changedBgColor) {
			console.log(selectedBgColor);
			console.log(changedBgColor);
			if (changedBgColor === '') {
				if (this.showColor === true) {
					this.$store.commit('changebgColor', selectedBgColor);
					this.showColor = false;
					this.selectedBgColor = selectedBgColor;
					this.changedBgColor = selectedBgColor;
				}
			} else {
				if (changedBgColor === selectedBgColor) {
					this.$store.commit('changebgColor', 'white');
					this.showColor = true;
					this.selectedBgColor = selectedBgColor;
					this.changedBgColor = 'white';
				} else {
					this.$store.commit('changebgColor', selectedBgColor);
					this.showColor = false;
					this.selectedBgColor = selectedBgColor;
					this.changedBgColor = selectedBgColor;
				}
			}
		},
	},
};
</script>

<style>
</style>