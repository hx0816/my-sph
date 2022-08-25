<template>
  <div class="spec-preview" v-if="imgList.length">
    <img :src="imgList[showIndex].imgUrl" />
    <div class="event" @mousemove="handler" ref="event"></div>
    <div class="big">
      <img :src="imgList[showIndex].imgUrl" ref='big'>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      showIndex: 0
    };
  },
  props: {
    imgList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handler(e) {
      let mask = this.$refs.mask;
      let event = this.$refs.event
      let big = this.$refs.big
      let maxW = event.offsetWidth - mask.offsetWidth
      let maxH = event.offsetHeight - mask.offsetHeight
      let left = e.offsetX - mask.offsetWidth / 2;
      let top = e.offsetY - mask.offsetHeight / 2;
      //边界处理
      left = left < 0 ? 0 : (left > maxW ? maxW : left)
      top = top < 0 ? 0 : (top > maxH ? maxH : top)
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      big.style.left = -2 * left +'px'
      big.style.top = -2 * top +'px'
    }
  },
  mounted() {
    this.$bus.$on("changeImg", index => {
      this.showIndex = index
    });
  }
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>