<template>
  <div class="type-nav">
    <div class="container">
      <div>
        <div @mouseleave="leaveIndex(),categoryHidden()" @mouseenter="categoryShow">
          <h2 class="all">全部商品分类</h2>
          <transition>
            <div class="sort" v-show="show">
              <div class="all-sort-list2">
                <!-- 三级联动 -->
                <div
                  class="item"
                  v-for="(c1,index) in categoryList"
                  :key="c1.categoryId"
                  @click="goSearch"
                >
                  <h3 @mouseenter="changeIndex(index)" :class="{show:index===showIndex}">
                    <a
                      :data-categoryName="c1.categoryName"
                      :data-category1id="c1.categoryId"
                    >{{c1.categoryName}}</a>
                  </h3>
                  <!-- 二级、三级分类 -->
                  <div class="item-list" v-show="index===showIndex">
                    <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                      <dl class="fore">
                        <dt>
                          <a
                            :data-categoryName="c2.categoryName"
                            :data-category2id="c2.categoryId"
                          >{{c2.categoryName}}</a>
                        </dt>
                        <dd>
                          <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                            <a
                              :data-categoryName="c3.categoryName"
                              :data-category3id="c3.categoryId"
                            >{{c3.categoryName}}</a>
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { throttle } from "lodash";

export default {
  name: "TypeNav",
  data() {
    return {
      showIndex: -1
    };
  },
  props: {
    show: {//控制分类显示隐藏
      type: Boolean,
      default: true
    }
  },
  methods: {
    //   三级联动节流
    changeIndex: throttle(function(index) {
      this.showIndex = index;
    }, 50),
    leaveIndex() {
      this.showIndex = -1;
    },
    // 跳转搜索页
    goSearch(e) {
      const {
        categoryname,
        category1id,
        category2id,
        category3id
      } = e.target.dataset;
      if (categoryname) {
        const query = { categoryName: categoryname };
        // 不同级别分类传递不同参数
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        console.log(this.$route.params)
        this.$router.push({
          name: "search",
          query,
          params:this.$route.params
        });
      }
    },
    // 移入显示分类
    categoryShow() {
      this.$emit("categoryShow", true);
    },
    // 移出隐藏分类
    categoryHidden() {
      this.$emit("categoryShow", false);
    }
  },
  computed: {
    ...mapState("home", ["categoryList"])
  }
};
</script>

<style scoped lang='less'>
@keyframes move{
    0%{
        height: 0;
    }
    100%{
        height: 461px;
    }
}
.v-enter-active{
    animation: move 0.5s;
}
.v-leave-active{
    animation:move 0.5s reverse;
}
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .show {
            background-color: pink;
          }

          .item-list {
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>