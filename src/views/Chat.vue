<template>
  <div class="chat-screen" :class="getbgColor">

	<header class="alt-header alt-header__chatBgColor" :class="getbgColor">
        <div class="alt-header__column">
            <router-link to="/chats">
                <i class="fas fa-angle-left fa-3x"></i>
            </router-link>
        </div>
        <div class="alt-header__column">
            <h1 class="alt-header__title">{{ infoName }}</h1>
        </div>
        <div class="alt-header__column">
        </div>
    </header>

    <main class="main-screen main-chat">
        <template v-if="infoName === 'Max'">
                <ul>
                    <li v-for="(chat, idx) in gettype" :key="idx">
                        <template v-if="chat.type === 'T'">
                            <div class="chat__timestamp">
                                {{ chat.date }}
                            </div>
                        </template>
                        <template v-else>
                            <div class="message-row message-row--own">
                                <div class="message-row__content">
                                    <div class="message__info">
                                        <span class="message__bubble">{{chat.text}}</span>
                                        <span class="message__time">{{ chat.time.slice(-5) }}</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </li>
                </ul>
        </template>

        <template v-else>
                <ul>
                    <li v-for="(chat, idx) in gettype" :key="idx">
                        <template v-if="chat.type === 'T'">
                            <div class="chat__timestamp">
                                {{ chat.date }}
                            </div>
                        </template>
                        <template class="" v-else-if="chat.type ==='M'">
                            <div class="message-row message-row--own">
                                <div class="message-row__content">
                                    <div class="message__info">
                                        <span class="message__bubble">{{chat.text}}</span>
                                        <span class="message__time">{{ chat.time.slice(-5) }}</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
							<div class="message-row">
								<img :src="infoUrl" />
								<div class="message-row__content">
									<span class="message__author">{{ infoName }}</span>
									<div class="message__info">
										<span class="message__bubble">{{chat.text}}</span>
										<span class="message__time">{{ chat.time.slice(-5) }}</span>
									</div>
								</div>
							</div>
                        </template>
                    </li>
                </ul>
        </template>
    </main>

    <div class="reply">
        <div class="reply__column">
            <i class="far fa-plus-square fa-lg"></i>
        </div>
        <div class="reply__column">
            <input type="text" v-model="inputText" v-on:keyup.enter="addChat" placeholder="Write a message..." />
            <i class="far fa-smile-wink fa-lg"></i>
            <button v-on:click="addChat">
                <i class="fas fa-arrow-up"></i>
            </button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
	data() {
		return {
			infoUrl: this.$route.params.url,
			infoName: this.$route.params.name,
			getbgColor: this.$store.state.changedbgcolor,
			getchatLists: this.$store.state.chatlist,
			idx: this.$store.state.idx,
			inputText: '',
		};
	},
	computed: {
		getname(state) {
			const users = [...state.getchatLists];
			const name = users.filter(user => this.infoName === user.name);
			return name;
		},
		gettype() {
			if (this.getname.length !== 0) {
				const chatTexts = this.getname[0].chat_text;
				return chatTexts;
			}
			return false;
		},
		getChatDate() {
			if (this.getname.length !== 0) {
				const chatTexts = this.getname[0].chat_text;
				const type_t = chatTexts.filter(textType => textType.type === 'T');
				const last_t = type_t[type_t.length - 1];
				return last_t;
			}
			return false;
		},
	},
	methods: {
		addChat() {
			const today = new Date();
			const year = today.getFullYear();
			const month = today.getMonth() + 1;
			const date = today.getDate();
			const hours =
				today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
			const minutes =
				today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();

			const todayDate = year + '/' + month + '/' + date;
			const nowtime =
				year + '/' + month + '/' + date + ' ' + hours + ':' + minutes;

			if (this.inputText !== '') {
				let oneName = '';
				let oneIdx = '';

				if (this.getname.length !== 0) {
					oneName = this.getname[0].name;
					oneIdx = this.getname[0].idx;
				}

				if (oneName === '') {
					if (this.infoName === 'Max') {
						this.idx++;
						this.$store.commit('addOneChat', {
							idx: this.idx,
							date: todayDate,
							url: this.infoUrl,
							name: this.infoName,
							inputText: this.inputText,
							type: 'M',
							time: nowtime,
						});
						this.inputText = '';
					} else {
						this.idx++;
						this.$store.commit('addOneChat', {
							idx: this.idx,
							date: todayDate,
							url: this.infoUrl,
							name: this.infoName,
							inputText: this.inputText,
							type: 'M',
							time: nowtime,
						});
						if (this.infoName !== 'Max') {
							const staytext = this.inputText;
							setTimeout(() => {
								this.$store.commit('addText', {
									idx: this.idx,
									inputText: staytext,
									type: 'Y',
									time: nowtime,
								});
								this.inputText = '';
							}, 1000);
						}
					}
				} else {
					if (this.infoName === 'Max') {
						const subtime = nowtime.substring(0, 9);
						const nowTimeNum = subtime.replaceAll('/', '');
						const subnowtime = this.getChatDate.date.substring(0, 9);
						const chatLastTimeNum = subnowtime.replaceAll('/', '');

						if (nowTimeNum !== chatLastTimeNum) {
							this.$store.commit('addText', {
								idx: oneIdx,
								date: todayDate,
								inputText: this.inputText,
								type: 'M',
								time: nowtime,
							});
						} else {
							this.$store.commit('addText', {
								idx: oneIdx,
								inputText: this.inputText,
								type: 'M',
								time: nowtime,
							});
						}
						this.inputText = '';
					} else {
						const subtime = nowtime.substring(0, 9);
						const nowTimeNum = subtime.replaceAll('/', '');
						const subnowtime = this.getChatDate.date.substring(0, 9);
						const chatLastTimeNum = subnowtime.replaceAll('/', '');

						if (nowTimeNum !== chatLastTimeNum) {
							this.$store.commit('addText', {
								idx: oneIdx,
								date: todayDate,
								inputText: this.inputText,
								type: 'M',
								time: nowtime,
							});
							if (this.infoName !== 'Max') {
								const staytext = this.inputText;
								setTimeout(() => {
									this.$store.commit('addText', {
										idx: oneIdx,
										inputText: staytext,
										type: 'Y',
										time: nowtime,
									});
									this.inputText = '';
								}, 1000);
							}
						} else {
							this.$store.commit('addText', {
								idx: oneIdx,
								inputText: this.inputText,
								type: 'M',
								time: nowtime,
							});
							if (this.infoName !== 'Max') {
								const staytext = this.inputText;
								setTimeout(() => {
									this.$store.commit('addText', {
										idx: oneIdx,
										inputText: staytext,
										type: 'Y',
										time: nowtime,
									});
									this.inputText = '';
								}, 1000);
							}
						}
					}
				}
			}
		},
	},
};
</script>

<style>
</style>