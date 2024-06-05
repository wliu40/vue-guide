<script setup>
import Friend from './components/Friend.vue';
import NewFriend from './components/NewFriend.vue';
</script>

<template>
  <div id="App">
    <Friend 
    v-for='friend in friends'
      :key="friend.id"
      :friendName="friend.name"
      :phoneNumber="friend.phone"
      :emailAddress="friend.email"
      @edit-email="editEmail"> 
    </Friend>
    <NewFriend @add-friend="addFriend"></NewFriend>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Friend,
  },
  data(){
    return{
      friends: [
          {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "0123 45678 90",
            email: "manual@yahoo.com",
          },
          {
            id: "julie",
            name: "Julie Jones",
            phone: "0987 654421 21",
            email: "julie@yahoo.com",
          }
        ]
      }
    },
    methods: {
      editEmail(email){
        console.log(email);
      },
      addFriend(friend){
        this.friends.push(friend);
      }
    }

};
</script>
