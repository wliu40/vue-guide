<template>
    <div v-if="visible" class="dialog-overlay">
      <div class="dialog-content">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this comment?</p>
        <div class="dialog-actions">
          <button @click="confirm">Confirm</button>
          <button @click="cancel">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      confirm() {
        this.$emit('confirm');
      },
      cancel() {
        this.$emit('cancel');
      }
    }
  };
  </script>
  
  <style scoped>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  .dialog-actions {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  
  .dialog-actions button {
    margin-left: 10px;
  }
  </style>
  