<template>
  <div id="app">
    <search></search>
    <div class="chart-container">
      <chart
        name="chart1"
        :time="1"
        :data="searchText"
        @completed="completedOne" />
      <chart
        name="chart2"
        :time="2"
        :data="searchText"
        @completed="completedTwo" />
      <chart
        name="chart3"
        :time="3"
        :data="searchText"
        @completed="completedThree" />
      <chart
        name="chart4"
        :time="4"
        :data="searchText"
        @completed="completedFour" />      
    </div>
    <loading :disabled="isAllLoaded"/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Chart from './components/Chart'
import Loading from './components/Loading'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Search, Chart, Loading
  },
  data () {
    return {
      /**
       * [workaround]
       * 지으니가 쓸 때는 아마 false로 시작해야할거에요.
       * 선호가 데이터 없이 시작한다고 걍 true로 한거에요.
       */
      isChartOneCompleted: true,
      isChartTwoCompleted: true,
      isChartThreeCompleted: true,
      isChartFourCompleted: true,
    }
  },
  computed: {
    isAllLoaded () {
      return this.isChartOneCompleted &&
             this.isChartTwoCompleted &&
             this.isChartThreeCompleted &&
             this.isChartFourCompleted
    },
    ...mapState(['searchText'])
  },
  watch: {
    searchText () {
      this.isChartOneCompleted = false
      this.isChartTwoCompleted = false
      this.isChartThreeCompleted = false
      this.isChartFourCompleted = false  
    }
  },
  methods: {
    completedOne () {
      this.isChartOneCompleted = true
    },
    completedTwo () {
      this.isChartTwoCompleted = true
    },
    completedThree () {
      this.isChartThreeCompleted = true
    },
    completedFour () {
      this.isChartFourCompleted = true
    },
  }
}
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
