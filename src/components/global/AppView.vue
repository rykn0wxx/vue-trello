<script>
export default {
  name: "AppView",
  data() {
    return {}
  },
  render (h) {
    return h('main', {
      staticClass: 'appview',
      class: 'layout-column flex'
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped></style>
