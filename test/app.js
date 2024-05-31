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
            alert('We need to know your origin to plan your trip!')
        },
        deleteMessage(index) {
            this.userInputs.splice(index, 1); // Remove the message at the given index
          },
        addUserInput(event) {
            if (this.userInput.trim() !== '') {
                this.userInputs.unshift(this.userInput.trim());
                console.log(this.userInputs);
                this.userInput = '';
                this.textAreaHeight = 40; // Reset height
            }
        },
        adjustHeight() {
            this.$nextTick(() => {
              const textarea = this.$refs.textarea;
              if (textarea.scrollHeight > textarea.clientHeight) {
                this.textAreaHeight = textarea.scrollHeight;
              }
            });
        },

    }});
app.mount('#app');