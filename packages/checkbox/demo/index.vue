<template>
  <div class="demo-checkbox">

    <div class="checkbox-demo-01">
      <div class="ymu-doc-block__hd">基础用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-checkbox label="深圳" v-model="checkboxGroupValue1"/>
      </div>
    </div>

    <div class="checkbox-demo-02">
      <div class="ymu-doc-block__hd">文字在左边</div>
      <div class="ymu-doc-block__bd">
        <ymu-checkbox label="深圳" :label-left="true" v-model="checkboxGroupValue1"/>
      </div>
    </div>

    <div class="checkbox-demo-03">
      <div class="ymu-doc-block__hd">禁用状态</div>
      <div class="ymu-doc-block__bd">
        <ymu-checkbox label="深圳" :disabled="true" v-model="checkboxGroupValue4"/>
        <ymu-checkbox label="深圳" :disabled="true" v-model="checkboxGroupValue5"/>
      </div>
    </div>

    <div class="checkbox-demo-04">
      <div class="ymu-doc-block__hd">复选框组(最多选2个，最少选1个)</div>
      <div class="ymu-doc-block__bd">
        <ymu-checkbox-group v-model="groupValue1" :min="1" :max="2">
          <ymu-checkbox label="深圳"/>
          <ymu-checkbox label="珠海"/>
        </ymu-checkbox-group>
        <p>{{ groupValue1 }}</p>
      </div>
    </div>

    <div class="checkbox-demo-05">
      <div class="ymu-doc-block__hd">使用useCell</div>
      <div class="ymu-doc-block__bd">
        <ymu-checkbox-group v-model="groupValue5">
          <ymu-checkbox :use-cell="true" :label-left="true" label="香蕉" clickable/>
          <ymu-checkbox :use-cell="true" :label-left="true" label="苹果" clickable/>
        </ymu-checkbox-group>
      </div>
    </div>

    <div class="checkbox-demo-06" style="margin-bottom: 10px">
      <div class="ymu-doc-block__hd">更改Icon</div>
      <div class="ymu-doc-block__bd">
        <ymu-checkbox-group v-model="groupValue5">
          <ymu-checkbox :use-cell="true" :label-left="true" label="香蕉" clickable>
            <template slot="icon" slot-scope="{checked}">
              <i class="ymuicon ios-checkmark" v-if="checked" style="font-size: 32px"></i>
            </template>
          </ymu-checkbox>
          <ymu-checkbox :use-cell="true" :label-left="true" label="苹果" clickable>
            <template slot="icon" slot-scope="{checked}">
              <i class="ymuicon ios-checkmark" v-if="checked" style="font-size: 32px"></i>
            </template>
          </ymu-checkbox>
        </ymu-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkboxGroupValue1: true,
      checkboxGroupValue2: false,
      checkboxGroupValue3: true,
      checkboxGroupValue4: false,
      checkboxGroupValue5: true,
      groupValue1: ['深圳'],
      groupValue2: ['香蕉'],
      groupValue5: ['香蕉']
    }
  }
}
</script>


<style lang="scss" scoped>

.demo-checkbox {
  /deep/ .ymu-checkbox {
    display: flex;
    margin-bottom: 10px;
  }
  /deep/ .ymu-cell-group__bd {
    .ymu-checkbox {
      display: flex;
      flex: 1;
      margin-bottom: 0;
      justify-content: space-between;
    }
  }
  /deep/ .ymu-checkbox--cell {
    margin-bottom: 0;
  }
  .checkbox-demo-02 /deep/ .ymu-checkbox {
    display: inline-flex;
    margin-bottom: 0;
  }
}
</style>
