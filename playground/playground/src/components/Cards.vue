<template>
    <div class="cards">
      <Card v-for="(event, index) in events" :key="index">
        <template v-slot:icon>
          <img :src="event.icon" alt="icon" class="event-icon">
        </template>
            
        <template v-slot:timestamp>
          {{ event.timestamp }}
        </template>
        <template v-slot:category>
          {{ event.category }}
        </template>

        <template v-slot:detail>
          {{ event.detail }}
        </template>
        <template v-slot:link>
          <a :href="event.link">{{ event.link }}</a>
        </template>
      </Card>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue';
//   import Card2 from './Card2.vue';
  
  export default {
    name: 'Cards',
    components: {
      Card,
    //   Card2,
    },
    props: {
      events: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .cards {
    display: flex;
    flex-direction: column;
  }

  .event-icon {
    width: 40px;
    height: 40px;
  }
  </style>
  