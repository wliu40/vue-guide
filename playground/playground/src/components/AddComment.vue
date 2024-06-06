<template>
    <div class="chatbox-container">
        <textarea ref="chatbox" id="chatbox" 
        rows="2" 
        placeholder="Type your message..." 
        v-model="newComment"
        @input="adjustHeight" 
        @keyup.enter="addComment"
        ></textarea>
      <button @click="addComment" id="submit-button">Submit</button>
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
          this.$refs.chatbox.style.height = 'auto';
        }
      },
      adjustHeight() {
      const chatbox = this.$refs.chatbox;
      chatbox.style.height = 'auto';
      chatbox.style.height = chatbox.scrollHeight + 'px';
    },
    }
  };
  </script>
  
  <style scoped>
  /* .add-comment-container {
    display: flex;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
    position: fixed;
    bottom: 20px;
    left: 50%;
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
  } */

  .chatbox-container {
  position: relative;
   width: 700px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

#chatbox {
  width: 100%;
  resize: none;
  overflow: hidden;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1.4;
  padding: 5px;
  box-sizing: border-box;
}


  </style>
  