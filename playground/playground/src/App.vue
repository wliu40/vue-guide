<template>
  <div id="app">
    <div class="layout">
      <div class="topbar">
        <h2>This is the bar!</h2>
      </div>

      <div class="layout-content">   
        <div class="comments-container">
          <Comment
            v-for="(comment, index) in comments"
            :key="index"
            :comment="comment"
            @rename="renameComment(index, $event)"
            @delete="showConfirmDialog(index)"

          />
        </div>

        <div class="center-container">
          <div> 
            <img :src="imageUrl" alt="Example Image"> 
          </div>
          
          <div id="app">
            <h1>Icon List</h1>
            <MyIcons />
          </div>

          <div class="add-comment-container">
            <AddComment @add-comment="addComment" />
          </div>
        </div>

        <div class="events-container">
          <Cards :events="events" class="events-seq"/>
          <div class="feedback-icons">

          <font-awesome-icon  :icon="['fas', 'thumbs-up']" @click="likeEvents" class="events-like-button"/>
          <font-awesome-icon  :icon="['fas', 'thumbs-down']" @click="dislikeEvents" class="events-dislike-button"/>
          <font-awesome-icon  :icon="['fas', 'envelope']" @click="emailEvents" class="events-email-button" />
          <font-awesome-icon  :icon="['fas', 'download']" @click="saveEvents" class="events-save-button"/>
        </div>
        </div>
      </div>

      <ConfirmDelete
        :visible="showDialog"
        @confirm="deleteComment"
        @cancel="cancelDelete"
      />

    </div>

  </div>

</template>

<script>
import { ref } from 'vue';
import AddComment from './components/AddComment.vue';
import Comment from './components/Comment.vue';
import Myimage from './assets/vue.svg';
import Cards from './components/Cards.vue';
import ConfirmDelete from './components/ConfirmDelete.vue';
import MyIcons from './components/MyIcons.vue';

export default {
  name: 'App',
  components: {
    AddComment,
    Comment,
    Cards,
    ConfirmDelete,
    MyIcons
  },
  data(){
    return {
      imageUrl: Myimage,
      showDialog: false,
      commentToDelete: null,
      comments: [
      'first comment',
      'second comment',
      ],
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
  methods: {
    showConfirmDialog(commentId) {
      this.commentToDelete = commentId;
      
      this.showDialog = true;
      this.commentToDelete = commentId;
      console.log('commentId', commentId);
      console.log('commentToDelete', this.commentToDelete);
    },
    addComment(newComment) {
      this.comments.unshift(newComment);
    },
    renameComment(index, newComment) {
      this.comments[index] = newComment;
    },
    deleteComment() {

      console.log('commentToDelete in deletecomment', this.commentToDelete);
      // this.comments = this.comments.filter(comment => comment.id !== this.commentToDelete);
      this.comments.splice(this.commentToDelete, 1);
      this.showDialog = false;
      this.commentToDelete = null;
    },
    likeEvents() {
      console.log('Liking events...');
    },
    dislikeEvents() {
      console.log('Disliking events...');
    },
    emailEvents() {
      console.log('Emailing events...');
    },
    saveEvents() {
      console.log('Exporting events...');
    },

    cancelDelete() {
      this.showDialog = false;
      this.commentToDelete = null;
    }
  },
  // setup() {
  //   // const comments = ref([
  //   //   'This is the first comment.',
  //   //   'This is the second comment.',
  //   //   'This is the third comment.'
  //   // ]);

  //   const addComment = (newComment) => {
  //     this.comments.value.unshift(newComment);
  //   };

  //   const renameComment = (index, newComment) => {
  //     this.comments.value[index] = newComment;
  //   };

  //   const deleteComment = (index) => {
  //     this.comments.value.splice(index, 1);
  //   };

  //   return {
  //     comments,
  //     addComment,
  //     renameComment,
  //     deleteComment
  //   };
  // }
};
</script>

<style scoped>

/* html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  color: #333;
} */

#app {
  width: 100vw;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* display: grid; */
  /* grid-template-rows: 2%, 98%;  */
}
.layout {
  display: grid;
  grid-template-rows: 80px 1fr;
  height: 100%;
}
.topbar {
  background-color: #333;
  color: white;
  text-align: center;
  height: 80px;
}
.layout-content {
  display: grid;
  grid-template-columns: 15% 55% 30%;
  height: calc(100vh - 80px);
}
.comments-container {
  background-color: #F5f5f5;
  height: 100%;
  overflow-y: auto;
 }

.events-container {
  background-color: #F5f5f5;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.center-container {
  background-color: white;
  overflow-y: auto;
  padding: 16px;
  box-sizing: border-box;
}

.add-comment-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 15px; 
}

.events-seq {
  flex: 1;
  overflow: auto; 
  height: calc(100vh - 50px);
 }

.feedback-icons {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.events-like-button, .events-dislike-button, .events-email-button, .events-save-button {
  height: 15px;
  width: 15px; 
  background-color: transparent;
  padding: 5px;
  margin-right: 10px;
  color: #a9a9a9;
}
.events-like-button:hover{
  background-color: #f0f0f0;
  color: #333;
}
.events-dislike-button:hover{
  background-color: #f0f0f0;
  color: #333;
}
.events-email-button:hover{
  background-color: #f0f0f0;
  color: #333;
}
.events-save-button:hover{
  background-color: #f0f0f0;
  color: #333;
}


/* .events-save-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 40px;
  width: 100px; 
  background-color: #f0f0f0;
  padding: 10px;
} */

/* .comments-container {
  position: fixed;
  top: 0;
  left: 3%;
  width: 25%;
  height: 100vh; 
  overflow-y: auto; 
}

.add-comment-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 15px; 

}

.events-container {
  position: fixed;
  top: 0;
  right: 3%;
  width: 25%;
  height: 100vh; 
  overflow-y: auto; 
} */

</style>
