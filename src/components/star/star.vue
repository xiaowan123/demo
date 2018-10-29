<template>
  <div class="star">
    <h3 @click="isClick">请点击</h3>
    <div class="popupBox" v-show="isShow">
        <div class="popup">
            <span>我是小弹窗^_^</span>
            <span @click="isClose">关闭</span>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'star',
  data () {
    return {
      isShow:false,
    }
  },
  methods: {
      isClick(){
          this.isShow = true
      },
      isClose(){
          this.isShow = false
      },
  }
}
</script>
<style>
.popupBox{
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
.popupBox .popup{
    background: #fff;
    width: 200px;
    height: 150px;
    margin: 70% auto;
    border-radius: 10px;
}
.popupBox span{
    display: block;
    padding-top: 40px
    }

</style>
