const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userInputs: [],
            textAreaHeight: 40, // Initial height

        }
    },
    methods: {
        showAlert() {
            alert('Hello World!')
        },
        addUserInput(event) {
            this.userInput = event.target.value;
            this.userInputs.push(event.target.value);
            console.log(this.userInput);
            this.userInput = '';
            console.log(this.userInput.height);
        },
        adjustHeight() {
            this.$nextTick(() => {
              const textarea = this.$refs.textarea;
              if (textarea.scrollHeight > textarea.clientHeight) {
                this.textAreaHeight = textarea.scrollHeight;
              }
            });},

    }});
app.mount('#app');