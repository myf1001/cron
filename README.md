readme.md


#views为修改后的cron组件

#utils里为cron需要引用的语言包

#cron的使用如下：

<template>
<div class="infoLabel">
  <label class="configTit  requiredInfo" ref="labelcron">cron表达式</label>
  <el-popover v-model="cronPopover">
    <cron @change="onChangeCron" @close="cronPopover = false"  :formData="formData"></cron>
    <el-input slot="reference" @click="cronPopover = true" v-model="cron" placeholder="请输入定时策略" class="inputWidth"></el-input>
  </el-popover>
</div>
</template>
<script>
import cron from '../../views/cron
  
</script>
export default {
    components:{cron},
    data(){
        return{
          cronPopover:false,
          formData:{cron:''}
      }    
    },
    methods:{
      onChangeCron(v) {
              this.formData.cron = v;
          },
     }
}

#如有需要可获取代码进行修改
