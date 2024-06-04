<template>
    <div class="Friend">
        <strong>{{ friendName }}</strong>
        <button @click="toggleDetails">{{ detailsAreVisible? 'Hide': 'Show' }}</button>
        <ul v-if="detailsAreVisible">

            <p>Phone: {{ phoneNumber }}</p>
            <p>Email: {{ emailAddress }}</p>


        </ul>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        detailsAreVisible: false,
      };
    },
    props: {
        friendName: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },  
        phoneNumber: {
            type: String,
            required: true,
            default: '012 345 6789'
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
  };
</script>