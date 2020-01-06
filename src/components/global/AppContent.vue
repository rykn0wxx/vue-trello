<script>
export default {
  name: 'AppContent',
  data () {
    return {}
  },
  render (h) {
    return h('div', {
      ref: 'appContent',
      staticClass: 'appcontent',
      class: ' layout-column flex overflow-y-auto overflow-x-hidden relative'
    }, [
      h('div', {
        staticClass: 'view',
        class: ' layout-padding flex-noshrink block'
      }, this.$slots.default)
    ])
  }
}
</script>

<style lang="scss" scoped></style>
