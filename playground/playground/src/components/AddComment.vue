<template>
    <div class="add-comment-container">
      <input
        type="text"
        v-model="newComment"
        @keyup.enter="addComment"
        placeholder="Type your comment here"
        class="comment-input"
      />
      <button @click="addComment" class="add-button">Add Comment</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddComment',
    data() {
      return {
        newComment: ''
      };
    },
    methods: {
      addComment() {
        if (this.newComment.trim()) {
          this.$emit('add-comment', this.newComment);
          this.newComment = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .add-comment-container {
    display: flex;
    margin-bottom: 20px;
  }
  
  .comment-input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    margin-right: 10px;
  }
  
  .add-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  