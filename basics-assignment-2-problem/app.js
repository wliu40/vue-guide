const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: ''            
        };
    },
    methods: { // Add a colon after the method name

        showAlert() {
            alert('Hello, World!');
        },
        getUserInput(event) {
            this.userInput = event.target.value;
        },
        getConfirmedInput() {
            this.confirmedInput = this.userInput;
        },
        displayText(){
            this.confirmedInput = this.userInput;
            this.userInput = '';
        }
        
    }
});
app.mount('#assignment'); // Mount the app to the div with the id of 'assignment'