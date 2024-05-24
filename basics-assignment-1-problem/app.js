const app = Vue.createApp({
    data() {
        return {
            name: 'John Doe',
            age: 30,
            imageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        };
    },
    methods: { // Add a colon after the method name
        calculateAge() {
            return this.age + 5;
        },
        getRandomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment'); // Mount the app to the div with the id of 'assignment'

const otherapp = Vue.createApp({
    data() {
      return {
        name: 'John Doe'
      };
    }
  });
  
otherapp.mount('#app2');