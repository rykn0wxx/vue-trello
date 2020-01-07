<template>
  <div
    class="about page-boards page-boards_section block pb-2 my-0 mx-auto max-w-full"
  >
    <div class="page-boards_header ml-4 pb-1 relative flex layout-row">
      <h3 class="md-title">Boards</h3>
    </div>
    <div class="page-boards_lists flex flex-wrap">
      <div class="page-boards_item cursor-pointer relative">
        <a
          href="#"
          class="page-boards_board mr-0 add-padding relative no-underline block rounded text-white bg-cover"
        >
          <span class="page-board_tile absolute inset-0 rounded block"></span>
          <div
            class="page-board_detail layout-column layout-align-space-between relative"
          >
            <div
              class="page-board_title inline-block overflow-hidden w-full font-bold"
            >
              Welcome
            </div>
            <div
              class="page-board_sub flex items-baseline justify-end overflow-hidden"
            >
              <svg
                class="page-board_star block inset-0 left-auto text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                />
              </svg>
            </div>
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
  &_header {
    .md-title {
      font-weight: 700;
    }
  }
  &_item {
    width: 23.5%;
    padding: 0;
    margin: 0 2% 8px 0;
    margin-right: 2%;
    transform: translate(0);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12);
  }
  &_board {
    background-color: rgb(0, 121, 191);
    word-wrap: break-word;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    background-position: 50%;
    line-height: 20px;
    // box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  }
}
.page-board {
  &_detail {
    height: 80px;
  }
  &_tile {
    background-color: rgba(0, 0, 0, 0.15);
    transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &_title {
    flex: 0 0 auto;
    font-size: 16px;
    letter-spacing: 0.02em;
    max-height: 40px;
    word-wrap: break-word;
  }
  &_sub {
    flex: 0 0 auto;
  }
  &_star {
    line-height: 24px;
    height: 24px;
    width: 0;
    opacity: 0;
    transition-duration: 0.15s;
    transition-property: color, background, opacity, transform, width, margin;
    transform: translateZ(0);
  }
}
.page-boards_board {
  &:hover {
    .page-board {
      &_tile {
        background-color: rgba(0, 0, 0, 0.25);
      }
      &_star {
        margin-right: 6px;
        width: 24px;
        opacity: 1;
      }
    }
  }
}
</style>
