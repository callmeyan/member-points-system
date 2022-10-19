<template>
  <!-- 引用管理员页面 -->
  <Member />
</template>
<script setup lang="ts">
import Member from "./pages/member.vue";
</script>
<style>
*{
  margin: 0;padding: 0;
}
#app {
  font-size: 14px;
  min-height: 100vh;
  background-color: #f00;
}
img{
  max-width: 100%;
  max-height: 100%;
}
</style>
