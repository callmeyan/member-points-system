<!-- 会员管理页面 -->
<template>
  <Page title="会员管理">
    <div class="statistics panel d-flex">
      <div class="item">
        <div class="icon">
          <img :src="IconVip" alt="">
        </div>
        <div class="content">
          <div class="title">会员数</div>
          <div class="value">{{formatNumber(1554)}}</div>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img :src="IconVip" alt="">
        </div>
        <div class="content">
          <div class="title">会员数</div>
          <div class="value">{{formatNumber(1554)}}</div>
        </div>
      </div>
    </div>
  </Page>
</template>
<script setup lang="ts">
import {formatNumber} from './../utils/strings'
// 导入外部依赖的组件
import Page from './../layout/Page.vue';
import IconVip from './../assets/image/icon-vip-orange.png'
import IconVipAdd from './../assets/image/icon-vip-add.png'


</script>
<style scoped lang="less">
.panel{
  background-color: #fff;
  border-radius: var(--border-radius);
}
</style>
