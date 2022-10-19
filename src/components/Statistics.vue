<template>
    <div class="statistics panel d-flex">
        <div class="item" v-for="(it,i) in items" :key="i">
            <div class="icon">
                <img :src="it.icon" alt="">
            </div>
            <div class="content">
                <div class="title">{{it.title}}</div>
                <div class="value">{{it.value}}</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
type ItemType = {
    /**
     * 图标
     */
    icon: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 值
     */
    value: any
}
interface Props {
    /**
     * 数据项数组
     */
    items: ItemType[]
}
defineProps<Props>()
</script>
<style>

</style>