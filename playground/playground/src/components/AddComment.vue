<template>
    <div class="chatbox-container">
        <font-awesome-icon id="advance-setting" icon="cogs" />
        <textarea ref="chatbox" id="chatbox" 
        placeholder="Plan my trip to New York City on this weekend! I want to visit the Statue of Liberty and I also want try some local food." 
        v-model="newComment"
        @input="adjustHeight" 
        @keyup.enter="addComment"
        ></textarea>
        <!-- <button @click="addComment" id="submit-button">Submit</button>  -->

        <font-awesome-icon icon="check"
        @click="addComment" 
        id="submit-button" 
        :class="{ active: newComment }" 
        :disabled="!newComment"
        ></font-awesome-icon>

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
  align-items: center;
  display: flex;
  width: 700px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

#chatbox {
  width: 100%;
  resize: none;
  overflow: hidden;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1.5;
  padding: 15px;
  box-sizing: border-box;
  flex: 1;
  background-color: transparent;
}

#submit-button:disabled {
  cursor: not-allowed;
}
#submit-button {
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: transparent;
  padding: 0;
  font-size: 24px;
}

#submit-button.active {
  color:black;
}

#submit-button:disabled {
  cursor: not-allowed;

}
#advance-setting {
  cursor: pointer;
  padding: 5px;
  width: 25px;
  height: 25px;
  display: flex;
  transition: background-color 0.3s ease;
  color:#A9A9A9;
}

#advance-setting:hover {
  color: black;
}

  </style>
  