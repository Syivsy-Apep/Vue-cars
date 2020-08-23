<template>
  <div class="nav-bar">
    <ul>
      <li>
        <i class="icon iconfont iconwenhao2"></i>
      </li>
      <li>
        <i class="icon iconfont iconsousuo"></i>
      </li>
      <li>
        <a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
      </li>
      <li>
        <i class="icon iconfont icondingwei"></i>
      </li>
      <li>
        <i class="icon iconfont iconren"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;
  li {
    display: inline-block;
    i {
      color: white;
    }
  }
  .icon {
    margin: 0 17px;
    cursor: pointer;
    vertical-align: middle;
  }
}
.select-car-btn {
  margin: 0 17px;
  width: 180px;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  border-radius: 100px;
  text-align: center;
  color: white;
  font-size: 17px;
  background-color: $color-main;
}
</style>