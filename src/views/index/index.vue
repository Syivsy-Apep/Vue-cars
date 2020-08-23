<template>
  <div>
    <!-- Cars data渲染 -->
    <Cars />
    <!-- 地图 -->
    <!-- 导航 -->
    <Nvabar />
    <Map />
    <!-- 会员-->
    <div id="children-view" :class="{open:showUser}">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "@/views/amap/index";
import Cars from "@/views/cars/index";
import Nvabar from '@/components/navbar/index'
export default {
  name: "Index",
  components: {
    Map,
    Cars,
    Nvabar
  },
  data() {
    return {
    //   showUser: false
    };
  },
  computed:{
      showUser(){
          const router = this.$route;
          return router.name === "Index" ? false : true;
      }
  },
  watch: {}
};
</script>

<style lang="scss">
#children-view {
  position: fixed;
  top: 0;
  right: -600px;
  height: 100vh;
  width: 410px;
  z-index: 101;
  background-color: #34393f;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &.open {
    right: 0;
  }
}
</style>