const app = Vue.createApp({
    data() {
        return {
            userInputs: [],
        }
    },
    methods: {
        showAlert() {
            alert('Hello World!')
        },
        addUserInput(event) {
            this.userInputs.push(event.target.value);
        }

    }});
app.mount('#app');