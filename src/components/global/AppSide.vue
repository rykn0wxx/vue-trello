<template>
  <div v-show="!isClose" :class="{show: !isClose}" class="appside flex static layout-column b-0 overflow-auto">
    AppSide
  </div>
</template>

<script>
export default {
  name: 'AppSide',
  data () {
    return {
      isClose: false
    }
  }
}
</script>

<style lang="scss" scoped>
.appside {
  z-index: 60;
  width: 320px;
  max-width: 320px;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  transform: translate3d(-100%,0,0);
  &.show {
    transform: translate3d(0,0,0);
    width: 272px;
    min-width: 272px;
    max-width: 272px;
  }
}
</style>
