const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected };
        },
        boxBClasses() {
            return { active: this.boxBSelected };
        },
        boxCClasses() {
            return { active: this.boxCSelected };
        },
        testDomoClasses(){
            return false;
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                console.log('boxASelected: ', this.boxASelected);
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }});


app.mount('#styling');