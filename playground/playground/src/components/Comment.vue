<template>

    <li class="comment-container">
      <div v-if="isEditing">
          <input
          v-model="editableComment"
          @keyup.enter="saveComment"
          @blur="saveComment"
          class="comment-input"
          ref="input"
          />
      </div>
      <p v-else class="comment-text">{{ truncatedComment }}</p>
      <div class="menu-container">
          <span class="three-dots" @click="toggleMenu">...</span>
          <div class="dropdown-menu" v-if="showMenu">
          <button class="menu-option" @click="editComment">Rename</button>
          <button class="menu-option" @click="deleteComment">Delete</button>
          </div>
      </div>
    </li>

</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: String,
      required: true
    }
  },
  
  data() {
    return {
      showMenu: false,
      isEditing: false,
      editableComment: this.comment
    };
  },
  computed: {
      truncatedComment() {
        return this.comment.length > 20
          ? this.comment.slice(0, 20) + '...'
          : this.comment;
      }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showMenu = false;
      }
    },
    editComment() {
      this.isEditing = true;
      this.showMenu = false;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    saveComment() {
      this.isEditing = false;
      this.$emit('rename', this.editableComment);
    },
    deleteComment() {
      // if (confirm("Are you sure you want to delete this comment?")) {
      //   this.showMenu = false;
      //   this.$emit('delete');
      // }
      this.showMenu = false;
      this.$emit('delete', this.comment.id);
    }
  },
  watch: {
    comment(newVal) {
      this.editableComment = newVal;
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
.comment-container {
  position: relative;
  border: 0px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 220px;
  margin-top: 5px;
  margin-left: 30px;
  
}

.comment-text {
  margin: 0;
  width: 220px;
  padding: 5px;
}

.comment-input {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

.menu-container {
  position: relative;
}

.three-dots {
  cursor: pointer;
  padding: 5px;
}

.dropdown-menu {
  display: block;
  position: absolute;
  right: 0;
  top: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1000;
}

.menu-option {
  padding: 10px;
  width: 100px;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
}

.menu-option:hover {
  background-color: #f0f0f0;
}
.comment-container:hover {
  background-color: #f0f0f0;
  border-radius: 5px;
  
}
</style>
