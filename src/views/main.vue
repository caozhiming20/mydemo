<template>
  <el-container>
  <el-header class="me_header">Header</el-header>
  <el-container class="me_main_container">
    <el-aside :style="isCollapse?collapse:noCollapse">
      <leftBar></leftBar>
    </el-aside>
    <el-container>
      <el-main>
        main
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>
<script>
  import leftBar from '../components/leftBar.vue'
  import { mapGetters, mapActions} from 'vuex'
export default {
  data(){
    return{
      noCollapse:{
        width:"200px",
      },
      collapse:{
        width:"65px",
      },
    }
  },
  components: { leftBar },
  computed:{
    ...mapGetters({isCollapse:"get_collapse"})
  }
}

</script>


<style>
  .el-container{
    width:100%;
    height:100%;
    position: relative;
  }
  .me_header{
    width:100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    position: absolute;
    top:0;
    left:0;
    border: 1px solid #dddddd;
  }
  .me_main_container{
    padding-top:60px;
  }
  .el-aside{
    overflow-y: auto;
    overflow-x:hidden;
    border: 1px solid #dddddd;
    transition: all 1s ;
  }
  .el-main{
    overflow: auto;
    border: 1px solid #dddddd;
  }


</style>
