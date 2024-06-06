<template>
  <div id="app">    
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

<style>
#app {
  position: relative;
  width: 100%;
  height: 90vh; /* Full viewport height */
}

.comments-container {
  position: absolute;
  top: 0;
  left: 0;
  margin: 15px; /* Optional: margin for spacing */
}

.add-comment-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 15px; /* Optional: margin for spacing */

}
</style>
