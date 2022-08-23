<template>
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="floor in floorList" :key="floor.id" :list="floor"></floor>
    <brand></brand>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

export default {
    name:'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted(){
      this.$store.dispatch('home/floorList')
    },
    computed:{
      ...mapState('home',['floorList'])
    }
}
</script>

<style>

</style>