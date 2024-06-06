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
    <!-- <div>
      <img :src="imageUrl" alt="Example Image">
    </div> -->
    <div class="add-comment-container">
      <AddComment @add-comment="addComment" />
    </div> 
  </div>

</template>

<script>
import { ref } from 'vue';
import AddComment from './components/AddComment.vue';
import Comment from './components/Comment.vue';
import Myimage from './assets/vue.svg';

export default {
  name: 'App',
  components: {
    AddComment,
    Comment
  },
  data(){
    return {
      imageUrl: Myimage,
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
</style>
