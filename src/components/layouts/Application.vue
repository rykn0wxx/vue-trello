<template>
  <div
    class="layouts-application layout-row overflow-hidden max-h-full max-w-full h-full relavative"
  >
    <AppSide v-if="withSide"/>
    <app-view>
      <div class="apptoolbar">
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <app-content>
        <router-view class="approuterview block" />
      </app-content>
    </app-view>
  </div>
</template>

<script>
export default {
  name: 'Application',
  data () {
    return {
      withSide: false
    }
  }
}
</script>

<style lang="scss" scoped>
.apptoolbar {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  font-size: 20px;
  min-height: 64px;
  width: 100%;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.14), 0 0 2px 2px rgba(0, 0, 0, 0.098),
    0 0 5px 1px rgba(0, 0, 0, 0.084);
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
  transition-property: background-color, fill, color;
}
.approuterview {
  margin: 8px;
  box-sizing: border-box;
}
</style>
