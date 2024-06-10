<template>
    <ul>
      <li>
        <font-awesome-icon icon="pen" style="color: #A9A9A9;" /> Rename
      </li>
      <li>
        <font-awesome-icon icon="trash" style="color: #D3D3D3;" /> Delete
      </li>
      <li>
        <font-awesome-icon icon="upload" style="color: #2196F3;" /> Export
      </li>
      <li>
        <font-awesome-icon icon="check" style="color: #8BC34A;" /> Submit
      </li>
      <li>
        <font-awesome-icon icon="cogs" style="color: #FF9800;" /> Advanced Setting
      </li>
      <li>
        <font-awesome-icon icon="home" style="color: #673AB7;" /> Home
      </li>
      <li>
        <font-awesome-icon icon="envelope" style="color: #3F51B5;" /> Email
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'twitter']" style="color: #1DA1F2;" /> Twitter
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'MyIcon',
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  
  font-awesome-icon {
    margin-right: 8px;
  }
  </style>
  