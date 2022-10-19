<!-- 会员管理页面 -->
<template>
  <Page title="会员管理">
    <Statistics :items="statisticsItems" />
    <div class="panel">
      <div class="table-panel">
        <div class="search-form">
          <input type="date" class="pro-input" placeholder="开始时间">
          <span>-</span>
          <input type="date" class="pro-input" placeholder="开始时间">
          <input style="margin-left: 20px;" type="text" class="pro-input" placeholder="请输入手机号/用户ID/关键字">
        </div>
        <div class="data-table">
          <table class="pro-table">
            <thead>
              <tr>
                <td>序号</td>
                <td>用户ID</td>
                <td>手机号</td>
                <td>注册时间</td>
                <td>积分数</td>
                <td>消费数</td>
                <td>操作</td>
              </tr>
            </thead>
            <tr v-for="(n,i) in dataList" :key="i">
              <td>{{i + 1}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <a>积分明细</a>
                |
                <a>禁用</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </Page>
</template>
<script setup lang="ts">
import { formatNumber } from './../utils/strings'
// 导入外部依赖的组件
import Page from './../layout/Page.vue';
import Statistics from './../components/Statistics.vue'
import IconVip from './../assets/image/icon-vip-orange.png'
import IconVipAdd from './../assets/image/icon-vip-add.png'


const statisticsItems = [
  { icon: IconVip, title: '会员数', value: formatNumber(1554) },
  { icon: IconVipAdd, title: '本周新增会员', value: formatNumber(154) },
]
const dataList = Array(10).fill(0);
</script>
<style scoped lang="less">
.panel {
  background-color: #fff;
  border-radius: var(--border-radius);

  +.panel {
    margin-top: 20px;
  }
}
</style>
