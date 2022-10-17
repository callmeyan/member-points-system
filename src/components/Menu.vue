<template>
  <div class="menu">
    <ul>
      <li
        v-for="(m, index) in menus"
        :class="{ active: index == activeMenu }"
        :key="index"
        @click="activeMenu = index"
      >
        <span class="prefix">
          <em v-if="m.isSvg" v-html="m.icon"></em>
          <template v-else><img v-if="m.icon" :src="m.icon" alt="" /></template>
        </span>
        <span class="content">{{ m.title }}</span>
        <span class="right-extra"></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

// 定义属性
defineProps({
  menus: Array,
});
const activeMenu = ref(0);
</script>

<style scoped>
.menu {
  --icon-size: 20px;
  text-align: left;
}
.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li {
  padding: 3px 15px;
  color: var(--primary-color);
  cursor: pointer;
}
.menu li.active {
  background-color: var(--primary-color);
  color: #000;
}
.menu img,
.menu .prefix /deep/ svg {
  width: var(--icon-size);
  height: var(--icon-size);
  display: inline-block;
}
.prefix {
  vertical-align: middle;
  margin-right: 10px;
}
</style>