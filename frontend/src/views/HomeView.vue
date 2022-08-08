<template> 
  
  <!-- <AddWord /> -->
  <div class="driver"></div>
  <div class="vocabulary">
    <ul  v-for='item in list'>
      <li><Words :item='item'/></li>
    </ul>
  </div>

</template>


<script >
  import Menu from '@/components/menu.component.vue'
  import AddWord from '@/components/addWord.component.vue'
  import Words from '@/components/words.component.vue'

  export default{
    data(){
      return{
        list: [
          {content: 'hello', trans: 'xin chào', star: true},
          {content: 'computer', trans: 'máy tính', star: true},
          {content: 'pan', trans: 'quạt máy', star: true},
          {content: 'love', trans: 'yêu', star: true},
          {content: "'it's up to you", trans: 'tùy bạn', star: true},

          {content: 'computer', trans: 'máy tính', star: true},
          {content: 'computer', trans: 'máy tính', star: true},
          {content: 'computer', trans: 'máy tính', star: true},
        ],
      }
    },
    components:{
      Menu,
      AddWord,
      Words,
    }
  }
</script>

<style type="text/css" scoped>
  .menu{
    z-index: 1000;
  }
  
  .vocabulary{
    z-index: 50;
  }
  ul{
    margin: 2px;
    padding: 2px 0px;
  }
</style>