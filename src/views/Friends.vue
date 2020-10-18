<template>
  <div>

    <header class="screen-header">
      <h1 class="screen-header__title">Friends</h1>
    </header>
    
    <main class="friends-screen">
      <a @click="toLink(myinfo.url, myinfo.name)">
        <div class="user-component">
          <div class="user-component__column">
            <img
              :src="myinfo.url"
              class="user-component__avatar user-component__avatar--xl"
            />
            <div class="user-component__text">
              <h4 class="user-component__title">{{ myinfo.name }}</h4>
            </div>
          </div>
          <div class="user-component__column"></div>
        </div>
      </a>

      <div class="friends-screen__part">
        <div class="friends-screen__part-header">
          <span>Birthday of the month</span>
        </div>
        <div class="user-component">
          <ul>
            <li v-for="(birthday, idx) in getBirthday" :key="idx">
              <a @click="toLink(birthday.url, birthday.name)">
                <div class="user-component__column">
                  <img
                    :src="birthday.url"
                    class="user-component__avatar user-component__avatar--sm"
                  />
                  <div class="user-component__text">
                    <h4
                      class="user-component__title user-component__title--not-bold"
                    >
                      {{ birthday.name }}
                    </h4>
                  </div>
                </div>
                <div class="user-component__column"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="friends-screen__part">
        <div class="friends-screen__part-header">
          <span>Friends</span>
        </div>
        <div class="user-component">
          <ul>
            <li v-for="(friend, idx) in friends" :key="idx">
              <a @click="toLink(friend.url, friend.name)">
                <div class="user-component__column">
                  <img
                    :src="friend.url"
                    class="user-component__avatar user-component__avatar--sm"
                  />
                  <div class="user-component__text">
                    <h4
                      class="user-component__title user-component__title--not-bold"
                    >
                      {{ friend.name }}
                    </h4>
                  </div>
                </div>
                <div class="user-component__column"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
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
			nowMonth: '',
		};
	},
	computed: {
		myinfo() {
			return this.$store.state.myinfo;
		},
		friends() {
			return this.$store.state.friends;
		},
		getBirthday(state) {
			const users = [state.myinfo, ...state.friends];
			const birthday = users.filter(
				user => this.nowMonth === user.birthday_month,
			);
			return birthday;
		},
	},
	created() {
		this.getMoth();
		window.scrollTo(0, 0);
	},
	methods: {
		getMoth() {
			const date = new Date();
			this.nowMonth = date.getMonth() + 1;
		},
		toLink(url, name) {
			this.$router.push({ name: 'userdetail', params: { url, name } });
		},
	},
};
</script>