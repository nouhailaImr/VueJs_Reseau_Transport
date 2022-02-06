<template>
  <div id = "home">
    <SideBanner  class="cell cell-banner" msg="Welcome to Your Vue.js App"/>
    <Map class="cell cell-map"/>
    <IndDistance class="cell cell-map"/>
    <IndGlobal class="cell cell-map"/>
    <IndPosition class="cell cell-map"/>

    
  </div>
</template>

<script>
// @ is an alias to /src
import SideBanner from '@/components/SideBanner.vue'
import Map from '@/components/Map.vue'
import IndDistance from '@/components/IndDistance.vue'
import IndGlobal from '@/components/IndGlobal.vue'
import IndPosition from '@/components/IndPosition.vue'


export default {
  name: 'Home',
  components: {
    SideBanner,
    Map,
    IndDistance,
    IndGlobal,
    IndPosition,
   }
}
</script>

<style scoped>
#home {
    font-family: Helvetica, Arial, sans-serif;
    height: 100vh;
    display: grid;
    grid-template-columns: 20% auto auto auto;
    box-sizing: border-box;
  }

.cell {
    border-radius: 4px;
    
  }

  .cell-banner{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .cell-map {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }
</style>
