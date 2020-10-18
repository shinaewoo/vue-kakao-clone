export default {
    SET_NEWS(state, news) {
        state.news = news;
    },
    addOneChat(state, item) {
        const objdate = {
            date: item.date,
            type: "T"
        }
        const obj = {
            text: item.inputText,
            type: item.type,
            time: item.time
        };
        const chat_text = [];
        chat_text.push(objdate);
        chat_text.push(obj);

        const listItem = {
            idx: item.idx,
            url: item.url,
            name: item.name,
            chat_text: chat_text
        };
        state.chatlist.push(listItem);
        state.idx = item.idx;
    },
    addText(state, item) {
        if (item.date === undefined) {
            const obj = {
                text: item.inputText,
                type: item.type,
                time: item.time
            };
            state.chatlist[item.idx].chat_text.push(obj);
        } else {
            const objdate = {
                date: item.date,
                type: "T"
            }
            const obj = {
                text: item.inputText,
                type: item.type,
                time: item.time
            };
            state.chatlist[item.idx].chat_text.push(objdate);
            state.chatlist[item.idx].chat_text.push(obj);
        }
    },
    changefontfamily(state, text) {
        state.changedfontfamily = text;
    },
    changefontColor(state, text) {
        state.changedfontcolor = text;
    },
    changebgColor(state, text) {
        state.changedbgcolor = text;
    },
}