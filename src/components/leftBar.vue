<template>
    <div>
      <el-menu class="el-menu-vertical-demo"
               :collapse="Collapse"
               unique-opened
               @open="handleOpen"
               @close="handleClose">
        <div @click="toggle" class="toggle">{{Collapse?zhanKai:zhedie}}</div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>

      </el-menu>
    </div>
</template>
<script>
  import { mapGetters, mapActions} from 'vuex'

export default {
    name:'leftBae',
  data() {
    return {
      zhanKai:"展开",
      zhedie:"折叠"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    ...mapActions({toggle:"toggle_collapse"}),
//    toggle(){
//      this.$store.dispatch('toggle_collapse')
//  },

    },

  computed:{
    ...mapGetters({
        Collapse:'get_collapse'
      }),
    //计算属性
//    collapse:this.$store.getters.get_collapse 和上面的等价
    }

}

</script>


<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;

  }
  .el-menu-vertical-demo{
    transition: all 1s;
  }
  .toggle{
     height: 30px;
    width:100%;
    cursor: pointer;
    border: 1px solid #dddddd;
    text-align: center;
    line-height: 30px;
    transition: all 1s;
  }
</style>
