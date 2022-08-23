<template>
  <div>
    <type-nav :show="show" @categoryShow="categoryShow"></type-nav>
  </div>
</template>

<script>
export default {
    name:'Search',
    data(){
      return {
        show:false //控制三级联动显示隐藏
      }
    },
    methods:{
      categoryShow(bool){
        this.show = bool
      }
    }
}
</script>

<style>

</style>