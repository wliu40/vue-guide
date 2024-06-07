<template>
    <div class="comments-container">
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
import Comment from './Comment.vue';
export default{
    name: 'Comments',
    components: {
        Comment,
    },
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    addComment(newComment) {
      this.comments.unshift(newComment);
    },
    renameComment(index, newComment) {
      this.comments[index] = newComment;
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    },
}
</script>