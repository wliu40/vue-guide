<template>
    <ul>
      <li>
        <font-awesome-icon icon="pen" /> Rename
      </li>
      <li>
        <font-awesome-icon icon="trash" /> Delete
      </li>
      <li>
        <font-awesome-icon icon="upload" /> Export
      </li>
      <li>
        <font-awesome-icon icon="check" /> Submit
      </li>
      <li>
        <font-awesome-icon icon="cogs" /> Advanced Setting
      </li>
      <li>
        <font-awesome-icon icon="home" /> Home
      </li>
      <li>
        <font-awesome-icon icon="envelope" /> Email
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
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
  