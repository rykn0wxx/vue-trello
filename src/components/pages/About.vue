<template>
  <div class="about page-boards page-boards_section block pb-2 my-0 mx-auto max-w-full">
    <div class="page-boards_header ml-4 pb-1 relative flex layout-row">
      <h3 class="md-title">Boards</h3>
    </div>
    <div class="page-boards_lists flex flex-wrap">
      <div class="page-boards_item cursor-pointer relative">
        <a href="#" class="page-boards_board mr-0 add-padding relative no-underline block rounded text-white">
          <div class="page-boards_detail layout-column layout-align-space-between relative">
            <div class="page-boards_title inline-block overflow-hidden w-full">Welcome</div>
            <div><i class="material-icons">star_border</i></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.page-boards {
  &_item {
    width: 32%;
    padding: 0;
    margin: 0 2% 8px 0;
    margin-right: 2%;
    transform: translate(0);
    box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  }
  &_detail {
    height: 80px;
  }
  &_board {
    background-color: rgb(0, 121, 191);
    word-wrap: break-word;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: .01em;
    // box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  }
}
</style>
