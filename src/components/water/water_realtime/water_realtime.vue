<template>
  <el-main class="elmain">
    <el-container>
      <el-aside style="width: 250px">
        <el-tree :data="data" :render-content="renderContent" @node-click="nodeClick"
                 @node-expand="handleNodeClick"
                 @node-collapse="closeCollapse">
        </el-tree>
      </el-aside>
    </el-container>

  </el-main>
</template>

<script>
  let id = 1000;
  export default {
    name: "water_realtime",
    data () {
      const data = [{
        id: 1,
        label: '一级 1',
        icon1:'iconfont icon-fangzi1',
        leaf:false,
        children: [{
          id: 4,
          label: '二级 1-1',
          icon1:'iconfont icon-fangzi1',
          leaf:false,
          children: [{
            id: 9,
            label: '三级 1-1-1',
            icon2:'iconfont icon-fangzi',
            leaf:true,
          }, {
            id: 10,
            label: '三级 1-1-2',
            icon2:'el-icon-house',
            leaf:true,
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        leaf:false,
        icon1:'iconfont icon-fangzi1',
        children: [{
          id: 5,
          label: '二级 2-1',
          leaf:true,
        }, {
          id: 6,
          label: '二级 2-2',
          leaf:true,
        }]
      }, {
        id: 3,
        label: '一级 3',
        icon1:'iconfont icon-fangzi1',
        icon2:'iconfont icon-fangzi',
        leaf:false,
        children: [{
          id: 7,
          label: '二级 3-1',
          leaf:true,
        }, {
          id: 8,
          label: '二级 3-2',
          leaf:true,
        }]
      }];
      return {

        data: JSON.parse(JSON.stringify(data))
      }
    },
    methods :{
      nodeClick:function(data,event){
        console.log(data,'data1111');
        console.log(event,'event2222');
        this.$set(event,'expanded',false);

      },
      closeCollapse:function(data){
        this.$set(data,'icon1','iconfont icon-fangzi1');
      },
      handleNodeClick:function (data,event) {
        console.log(event,'event1111');
        this.$set(data,'icon1','iconfont icon-fangzi');

      },
      /*自定义节点图标*/
      renderContent:function (h, { node, data, store }) {
        console.log(h,'h');
        console.log(node,'node');
        console.log(data,'data');
        console.log(store,'store');
        if (!node.isLeaf) {
          return(
            <span class="custom-tree-node" >
            <span style="font-size:16px"><i class={data.icon1} style="color: green;font-size:20px"></i>{node.label}</span>
          </span>
        )
        }else {
          return(
            <span class="custom-tree-node" >
            <span style="font-size:16px"><i class={data.icon2} style="color: green;font-size:20px"></i>{node.label}</span>
          </span>
        )
        }


      }
    }
  }
</script>

<style scoped>
  .elmain {
    background: white;
    margin: -5px -13px 0 0;
  }

  .el-icon-caret-right{
    color: green;
  }

</style>
