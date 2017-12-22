<template>
  <div class="me_container">
    <div class="me_form_box">
      <el-form :model="me_data" :rules="me_rule" status-icon ref="me_Form" label-width="80px" class="me_Form">
        <el-form-item label="姓名" prop="name">
          <el-input
            type="text"
            v-model="me_data.name"
            auto-complete="off"
            clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="me_data.pass"
          auto-complete="off"
          clearable></el-input>
      </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="handle1" v-loading.fullscreen.lock="fullscreenLoading">提交</el-button>
      </el-form-item>
      </el-form>
    </div>
    <!--<div>-->
      <!--&lt;!&ndash;<div @click="handle1">点击获取token</div>&ndash;&gt;-->
      <!--<div @click="handle2">计算属性+</div>-->
      <!--<div @click="handle3">计算属性-</div>-->
      <!--<div @click="handle4">计算属性+10</div>-->
      <!--<router-link to="/main">如果有token正常跳转，没有跳转道/Login</router-link>-->
      <!--<div>显示token:{{token}}</div>-->
      <!--<div>显示count:{{count}}</div>-->
    <!--</div>-->
  </div>
</template>
<script>



  import { getLogin } from '../api/api'
  import {mapGetters} from 'vuex'
  export default {
    methods:{
      handle1(){
        this.$refs.me_Form.validate(res=>{
          if(res){
            this.fullscreenLoading = true;
            var param={"username":this.me_data.name,"password":this.me_data.pass};
            getLogin(param).then(
              data=>{
                console.log(data.data);
                this.$store.dispatch('set_Token',data.data.token);
//                sessionStorage.setItem('leftBar',data.data.token);
                this.$router.push('./main');
                this.fullscreenLoading = false;
              })
          }
            return
        })

      },
      handle2(){
        this.$store.dispatch('increase')
      },
      handle3(){
        this.$store.dispatch('decrease')
      },
      handle4(){
        this.$store.dispatch('add_count',10)
      },
    },
    computed:mapGetters({
     count:"get_count",
      token:"get_token"
    }),
    data() {
      return {
        me_data: {
         name: '',
          pass: ''
        },
        me_rule: {
         name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
          ]
        },
        fullscreenLoading: false
      };
    },
  }
</script>


<style scoped>
  .me_container{
    width: 100%;
    height:100%;
    position: relative;
    background: #f3f3f3;
  }
  .me_form_box{
    width: 500px;
    background-color: #fff;
    position: absolute;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #666;
    transition: all 1s;
    top: 50%;
    left:50%;
    margin-left: -250px;
    margin-top: -250px;
    box-sizing: border-box;
    padding: 50px 50px 0 20px;
  }
  .me_form_box:hover{
    box-shadow: 0px 0px 50px #666;
  }
</style>
