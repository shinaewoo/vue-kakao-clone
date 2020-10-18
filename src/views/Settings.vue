<template>
    <div>

        <header class="screen-header">
            <h1 class="screen-header__title">Settings</h1>
            <div class="screen-header__icons">
            </div>
        </header>

        <main class="main-screen more-screen">
            <ul class="settings-list">
                <li class="settings__setting">
                    <div class="settings__setting-column">
                        <router-link to="/fontfamily">
                            <i class="fas fa-font"></i>
                            <span>font-family</span>
                        </router-link>
                    </div>
                </li>
                <li class="settings__setting">
                    <div class="settings__setting-column">
                        <router-link to="/fontcolor">
                            <i class="fas fa-paint-brush"></i>
                            <span>font-color</span>
                        </router-link>
                    </div>
                </li>
                <li class="settings__setting">
                    <div class="settings__setting-column">
                        <router-link to="/backgroundcolor">
                            <i class="fas fa-palette"></i>
                            <span>backgroud-color (chat)</span>
                        </router-link>
                    </div>
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
	created() {
		window.scrollTo(0, 0);
	},
};
</script>

<style>
</style>