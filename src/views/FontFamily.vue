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

    <div class="selcetedfont">
      <p :class="changedFontFamily">selected font family</p>
    </div>
    <div class="changefontfamily">
      <div class="changefontfamily__div">
          <div class="fontfamily1" @click="getfontfamily('fontfamily1', changedFontFamily)">Dancing Script</div>
          <div class="fontfamily2" @click="getfontfamily('fontfamily2', changedFontFamily)">Architects Daughter</div>
          <div class="fontfamily3" @click="getfontfamily('fontfamily3', changedFontFamily)">Indie Flower</div>
          <div class="fontfamily4" @click="getfontfamily('fontfamily4', changedFontFamily)">Shadows Into Light</div>
          <div class="fontfamily5" @click="getfontfamily('fontfamily5', changedFontFamily)">Roboto</div>
      </div>
      <div class="changefontfamily__div"> 
          <div class="fontfamily6" @click="getfontfamily('fontfamily6', changedFontFamily)">Noto Sans</div>
          <div class="fontfamily7" @click="getfontfamily('fontfamily7',changedFontFamily)">Quicksand</div>
          <div class="fontfamily8" @click="getfontfamily('fontfamily8', changedFontFamily)">Balsamiq Sans</div>
          <div class="fontfamily9" @click="getfontfamily('fontfamily9', changedFontFamily)">Hammersmith One</div>
          <div class="fontfamily10" @click="getfontfamily('fontfamily10', changedFontFamily)">Fredoka One</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			showfont: true,
			selectedFontFamily: '',
			changedFontFamily: this.$store.state.changedfontfamily,
		};
	},
	methods: {
		getfontfamily(selectedFontFamily, changedFontFamily) {
			if (changedFontFamily === '') {
				if (this.showfont === true) {
					this.$store.commit('changefontfamily', selectedFontFamily);
					this.showfont = false;
					this.selectedFontFamily = selectedFontFamily;
					this.changedFontFamily = selectedFontFamily;
				}
			} else {
				if (changedFontFamily === selectedFontFamily) {
					this.$store.commit('changefontfamily', "Open Sans', sans-serif");
					this.showfont = true;
					this.selectedFontFamily = selectedFontFamily;
					this.changedFontFamily = "Open Sans', sans-serif";
				} else {
					this.$store.commit('changefontfamily', selectedFontFamily);
					this.showfont = false;
					this.selectedFontFamily = selectedFontFamily;
					this.changedFontFamily = selectedFontFamily;
				}
			}
		},
	},
};
</script>

<style>
</style>