<template>
  <div class="search">
    <div class="search_wrapper">
      <input 
        v-model="inputText"
        @keyup.enter="search"
        type="text" />
      <button @click="search">검색</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    search () {
      this.changeSearchText(this.inputText)
    },
    ...mapActions(['changeSearchText'])
  }
}
</script>


<style>
  .search {
    text-align: center;
    flex-basis: 100px;
    background: #ff6666;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search_wrapper {
    width: 300px;
  }

  .search_wrapper * {
    margin: 5px;
  }

</style>
