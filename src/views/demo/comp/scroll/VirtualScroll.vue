<template>
  <div class="p-4 virtual-scroll-demo">
    <Divider>基础滚动示例</Divider>
    <div class="virtual-scroll-demo-wrap">
      <VScroll :itemHeight="41" :items="data" :height="300" :width="300">
        <template v-slot="{ item }">
          <div class="virtual-scroll-demo__item">{{ item.title }}</div>
        </template>
      </VScroll>
    </div>

    <Divider>即使不可见，也预先加载50条数据，防止空白</Divider>
    <div class="virtual-scroll-demo-wrap">
      <VScroll :itemHeight="41" :items="data" :height="300" :width="300" :bench="50">
        <template v-slot="{ item }">
          <div class="virtual-scroll-demo__item">{{ item.title }}</div>
        </template>
      </VScroll>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { VScroll } from '/@/components/VirtualScroll/index';

  import { Divider } from 'ant-design-vue';
  const data: any[] = (() => {
    const arr: any[] = [];
    for (let index = 1; index < 20000; index++) {
      arr.push({
        title: '列表项' + index,
      });
    }
    return arr;
  })();
  export default defineComponent({
    components: { VScroll: VScroll, Divider },
    setup() {
      return { data: data };
    },
  });
</script>
<style lang="less" scoped>
  .virtual-scroll-demo {
    &-wrap {
      display: flex;
      margin: 0 30%;
      background: #fff;
      justify-content: center;
    }

    &__item {
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
    }
  }
</style>
