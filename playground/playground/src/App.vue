<template>
  <div id="app" class="app-background">    
    <div class="comments-container">
      <Comment
        v-for="(comment, index) in comments"
        :key="index"
        :comment="comment"
        @rename="renameComment(index, $event)"
        @delete="deleteComment(index)"
      />
    </div>
    <div>
      <img :src="imageUrl" alt="Example Image">
    </div>
    <div class="add-comment-container">
      <AddComment @add-comment="addComment" />
    </div>
    <div class="events-container">
      <Cards :events="events" />
    </div>
  </div>

</template>

<script>
import { ref } from 'vue';
import AddComment from './components/AddComment.vue';
import Comment from './components/Comment.vue';
import Myimage from './assets/vue.svg';
import Cards from './components/Cards.vue';

export default {
  name: 'App',
  components: {
    AddComment,
    Comment,
    Cards,
  },
  data(){
    return {
      imageUrl: Myimage,
      events: [
        {
          timestamp: '2023-06-01 10:00:00',
          category: 'Category 1',
          detail: 'Detail for event 1',
          link: 'https://example.com/1',
          icon: 'https://example.com/icon1.png',
        },
        {
          timestamp: '2023-06-02 11:00:00',
          category: 'Category 2',
          detail: 'Detail for event 2',
          link: 'https://example.com/2',
          icon: 'https://example.com/icon2.png',
        },
        {
          timestamp: '2023-06-03 12:00:00',
          category: 'Category 3',
          detail: 'Detail for event 3',
          link: 'https://example.com/3',
          icon: 'https://example.com/icon3.png',
        },]
    };
  },
  setup() {
    const comments = ref([
      'This is the first comment.',
      'This is the second comment.',
      'This is the third comment.'
    ]);

    const addComment = (newComment) => {
      comments.value.unshift(newComment);
    };

    const renameComment = (index, newComment) => {
      comments.value[index] = newComment;
    };

    const deleteComment = (index) => {
      comments.value.splice(index, 1);
    };

    return {
      comments,
      addComment,
      renameComment,
      deleteComment
    };
  }
};
</script>

<style scoped>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  color: #333;
}

#app {
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.comments-container {
  position: absolute;
  margin-left: 8%;
  margin-top: 60px;
  top: 0;
  left: 0;
  overflow-y: auto; 
  max-height: 800px;
  /* margin: 30px; */
}

.add-comment-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 15px; /* Optional: margin for spacing */

}

.events-container {
  position: fixed;
  top: 0;
  right: 8%;
  width: 25%;
  height: 100vh; /* Adjust height as needed */
  overflow-y: auto; /* To handle overflow content */
}

</style>
