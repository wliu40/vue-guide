<template>
    <div>
        <form @submit.prevent="SubmitEvent" class="styled-form">
            <input type="text" v-model="friendName" placeholder="Friend's Name" class="styled-input">
            <input type="text" v-model="phoneNumber" placeholder="Phone Number" class="styled-input">
            <input type="text" v-model="emailAddress" placeholder="Email Address" class="styled-input">
            <button type="submit" class="styled-button">Add Friend</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                friendName: '',
                phoneNumber: '',
                emailAddress: ''
            };
        },
        methods: {
            SubmitEvent() {
                this.$emit('add-friend', {
                    id: new Date().toISOString(),
                    name: this.friendName,
                    phone: this.phoneNumber,
                    email: this.emailAddress
                });
                this.friendName = '';
                this.phoneNumber = '';
                this.emailAddress = '';
            }
        }
    };

</script>


<style scoped>
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.styled-form {
  display: flex;
  flex-direction: column;
}

.styled-input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.styled-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
}

.styled-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.styled-button:hover {
  background-color: #0056b3;
}

.styled-button:focus {
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
}
</style>