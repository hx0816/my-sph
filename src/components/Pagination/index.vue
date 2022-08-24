<template>
  <div class="pagination">
    <button :disabled="pageNo===1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-show="startAndEnd.start!==1" @click="$emit('getPageNo',1)">1</button>
    <button v-show='startAndEnd.start>2'>···</button>

    <button v-for="(page,index) in startAndEnd.end" :key='index' v-show="page>=startAndEnd.start" :class="{active:page===pageNo}" @click="$emit('getPageNo',page)">{{page}}</button>
    
    <button v-show='startAndEnd.end<totalPage-1'>···</button>
    <button v-show='startAndEnd.end!==totalPage' @click="$emit('getPageNo',totalPage)">{{totalPage}}</button>
    <button :disabled="pageNo===totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:{
      pageNo:{
        type:Number,
        default:1
      },
      pageSize:{
        type:Number
      },
      total:{
        type:Number
      },
      continues:{
        type:Number,
        default:5
      }
    },
    computed:{
      totalPage(){
        return Math.ceil(this.total/this.pageSize)
      },
      startAndEnd(){
        let start=0,end=0
        let {totalPage,continues,pageNo} = this
        if(continues > totalPage){
          start = 1
          end = totalPage
        }else{
          start = pageNo - parseInt(continues/2)
          end = pageNo + parseInt(continues/2)
          if(start < 1){
            start = 1
            end = continues
          }else if(end  > totalPage){
            end = totalPage
            start = totalPage - continues + 1
          }
        }
        return {
          start,
          end
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    .active{
      background-color: skyblue;
    }
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>