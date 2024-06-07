<template>
    <div class="card">
      <div class="card-icon">
        <slot name="icon"></slot>
      </div>
      <div class="card-content">
        <div class="card-timestamp">
          <slot name="timestamp"></slot>
        </div>
        <div class="card-category">
          <slot name="category"></slot>
        </div>
        <div class="card-detail">
          <slot name="detail"></slot>
        </div>
        <div class="card-link">
          <slot name="link"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 16px;
    margin: 16px 0;
    display: flex;
    align-items: center;
  }
  
  .card-icon {
    margin-right: 16px;
  }
  
  .card-content {
    flex: 1;
  }
  
  .card-timestamp,
  .card-category,
  .card-detail,
  .card-link {
    margin: 4px 0;
  }
  </style>
  