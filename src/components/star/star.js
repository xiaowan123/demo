import starComponent from './star.vue'   //引入组件
const VueStar = {
  install :function (Vue) {
    Vue.component('vue-star',starComponent) //全局组件
  }
}

export default VueStar  //导出