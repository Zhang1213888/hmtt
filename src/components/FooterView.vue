<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item to="/ ">
        <template #icon>
          <span class="toutiao toutiao-shouye"></span>
          <span>首页</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/videoview">
        <template #icon>
          <span class="toutiao toutiao-shipin"></span>
          <span>视频</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/qaview">
        <template #icon>
          <span class="toutiao toutiao-wenda"></span>
          <span>问答</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/myview">
        <template #icon>
          <span class="toutiao toutiao-wode"></span>
          <span>我的</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
:deep(.van-badge__wrapper) {
  position: relative;
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  font-size: 30px;
  .toutiao {
    font-size: 40px;
  }
}
</style>
