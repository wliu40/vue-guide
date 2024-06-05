<template>
  <div id="app">
    <Comment
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
      @rename="renameComment(index, $event)"
      @delete="deleteComment(index)"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import Comment from './components/Comments.vue';

export default {
  name: 'App',
  components: {
    Comment
  },
  setup() {
    const comments = ref([
      'This is the first comment.',
      'This is the second comment.',
      'This is the third comment.'
    ]);

    const renameComment = (index, newComment) => {
      comments.value[index] = newComment;
    };

    const deleteComment = (index) => {
      comments.value.splice(index, 1);
    };

    return {
      comments,
      renameComment,
      deleteComment
    };
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
