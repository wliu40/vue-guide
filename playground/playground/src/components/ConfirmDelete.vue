<template>
    <div>
      <div v-if="showDialog" class="dialog-overlay">
        <div class="dialog-content">
          <slot name="title">
            <h2>Confirm Delete</h2>
          </slot>
          <slot name="body">
            <p>Are you sure you want to delete this item?</p>
          </slot>
          <div class="dialog-actions">
            <button @click="confirm">Confirm</button>
            <button @click="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConfirmDelete',
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        showDialog: this.visible
      };
    },
    watch: {
      visible(newVal) {
        this.showDialog = newVal;
      }
    },
    methods: {
      confirm() {
        this.$emit('confirm');
        this.showDialog = false;
        this.$emit('update:visible', false);
      },
      cancel() {
        this.showDialog = false;
        this.$emit('update:visible', false);
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
  