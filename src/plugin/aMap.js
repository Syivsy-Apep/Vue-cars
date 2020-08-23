import Vue from "vue";

//高德地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  //高德地图key
  key:'4aff62983068016dbcdfa535978cd1ed',
  plugin: ['AMap.Autocomplete','AMap.Scale','AMap.PlaceSearch','AMap.OverView','AMap.ToolBar','AMap.MapType','AMap.PolyEditor','AMap.CircleEditor','AMap.MarkerClusterer'],
   v: '1.4.4',
   uiVersion:'1.0.11'
})