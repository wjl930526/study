<template>
  <div class="login-form">
      <div class="g-form">
          <div class="g-form-line">
              <span class="g-form-label">用户名:</span>
              <div class="g-form-input">
                  <input type="text" v-model="usernameModel" placeholder="请输入用户名">
              </div>
              <span class="g-form-error">{{userErrors.errorText}}</span>
          </div>
          <div class="g-form-line">
              <span class="g-form-label">密码:</span>
              <div class="g-form-input">
                  <input type="password" v-model="passwordModel" placeholder="请输入密码">
              </div>
              <span class="g-form-error">{{passwordErrors.errorText}}</span>
          </div>
          <div class="g-form-line">
              <div class="g-form-btn">
                  <a class="button" @click="onLogin">登录</a>
              </div>
          </div>
          <P class="g-form-error">{{errorText}}</P>
      </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
          usernameModel:'',
          passwordModel:'',
          errorText:''
      }
  },
  methods: {
      onLogin(){
          if(this.userErrors.status && this.passwordErrors.status){
            console.log(this.usernameModel+'----'+this.passwordModel)
            this.errorText=''
          }else{
            this.errorText='部分验证未通过'
          }
      }
  },
  computed: {
      userErrors(){
          let errorText,status
          if(!/@/g.test(this.usernameModel)){
              status=false
              errorText='请输入包含@的'
          }else{
              status=true
              errorText=''
          }
          if(!this.userFlag){
              this.userFlag=true
              status=true
              errorText=''
          }
          return {
              status,
              errorText
          }
      },
      passwordErrors(){
          let errorText,status
          if(!/^\w{1,6}$/g.test(this.passwordModel)){
              status=false
              errorText='请输入1-6位的密码'
          }else{
              status=true
              errorText=''
          }
          if(!this.passwordFlag){
              this.passwordFlag=true
              status=true
              errorText=''
          }
          return {
              errorText,
              status
          }
      }
  }
}
</script>
