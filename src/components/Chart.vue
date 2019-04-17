<template>
  <div 
    :class="{isLoading: isLoading}"
    class="chart">
    <p v-if="isLoading">{{ data }} loading</p>
    <p v-else>{{ data }} load completed</p>
  </div>
</template>

<script>
import Loading from './Loading'
import { setTimeout } from 'timers';

export default {
  components: { Loading },
  props: {
    data: { type: String, default: ''},
    name: { type: String, default: 'name' },
    time: { type: Number, default: 0 },
  },
  data () {
    return {
      isLoading: false
    }
  },
  watch: {
    data () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$emit('completed', this.name)
      }, this.time * 1000)
    }
  }
}
</script>


<style>
  .chart {
    width:50%;
    height: calc(50vh - 50px);
    float: left;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .isLoading {
    background: black;
    color: white;
  }
</style>
