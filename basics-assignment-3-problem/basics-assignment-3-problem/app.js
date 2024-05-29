const app = Vue.createApp({
    data() {
        return {
            summation: 0,
        };
    },
    computed: {
        output() {
            if (this.summation > 37) {
                return 'Too much!' + this.summation;
            } else if (this.summation === 37) {
                return '37';
            } else {
                return 'Not there yet' + this.summation;
            }
        }
    },
    watch: {
        result() {
          console.log('Watcher executing...');
          const that = this;
          setTimeout(function() {
            that.number = 0;
          }, 5000);
        }
    },

    methods: { 
        addNumber(val){
            this.summation = this.summation + val;
        },
        
    }
}); 

app.mount('#assignment');

// <!-- Show "Not there yet" until you reach a result of exactly 37 -->
// <!-- Show "Too much!" if the result is greater than 37 -->