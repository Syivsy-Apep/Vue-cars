<template>
  <div class="index-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="@/assets/cars.jpg" alt="">
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="cars-attr">
          <span class="attr">新能源汽车 5座</span>
        </p>
      </header>
      <div class="cars-content"></div>
      <footer></footer>
    </section>
      <span @click="user">汽车列表</span>
  </div>
</template>

<script>
export default {
  name: "Cars",
  data() {
    return {}
  },
  methods:{
      user(){
          this.$router.push({name:'User'})
      }
  }
};
</script>

<style lang="scss">
@import './index.scss'
</style>