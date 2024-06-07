<template>
    <div class="container">
        <div class="timeline">    
            <div class="timeline-container">
                <div class="timeline-icon">
                    <slot name="icon"></slot>
                </div>                
                <div class="timeline-body">
                    <h4 class="timeline-title"><span class="badge">
                   
                        <slot name="timestamp"></slot>                        
                        <slot name="category"></slot> 
   

                    </span></h4>
                  
                        <slot name='detail'></slot>
                    <slot class="timeline-subtitle" name='link'></slot>
                

            
                </div>
            </div>
        </div>
    </div>
</template>

  <script>
  export default {
    name: 'Card2',
  };
  </script>
  
<style scoped>

.timeline {
  position: relative;
  padding-left: 4rem;
  margin: 0 0 0 30px;
  color: white;
}
.timeline:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #ffffff;
}
.timeline .timeline-container {
  position: relative;
  margin-bottom: 2.5rem;
}
.timeline .timeline-container .timeline-icon {
  position: absolute;
  left: -88px;
  top: 4px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 2rem;
  background: #4f537b;
}
.timeline .timeline-container .timeline-icon i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.timeline .timeline-container .timeline-icon img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.timeline .timeline-container .timeline-body {
  background: #d3d1d1;
  border-radius: 3px;
  padding: 20px 20px 15px;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);
}
.timeline .timeline-container .timeline-body:before {
  content: "";
  background: inherit;
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  left: -10px;
  transform: rotate(45deg);
  border-radius: 0 0 0 2px;
}
.timeline .timeline-container .timeline-body .timeline-title {
  margin-bottom: 1.4rem;
}
.timeline .timeline-container .timeline-body .timeline-title .badge {
  background: #4f537b;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}
.timeline .timeline-container .timeline-body .timeline-subtitle {
  font-weight: 300;
  font-style: italic;
  opacity: 0.4;
  margin-top: 16px;
  font-size: 11px;
}

</style>
  