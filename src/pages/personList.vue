<template>
  <div class="hello">
    <table>
        <thead>
            <th>序号</th>
            <th>姓名</th>
            <th>电话</th>
            <th v-if="routeParams.type == '1' || !isQuery">隔离地省</th>
            <th v-if="routeParams.type == '1' || !isQuery">隔离地市</th>
            <th v-if="routeParams.type == '1' || !isQuery">隔离地详细地址</th>
            <th v-if="routeParams.type == '2' || !isQuery">假期地省</th>
            <th v-if="routeParams.type == '2' || !isQuery">假期地市</th>
            <th v-if="routeParams.type == '2' || !isQuery">假期地详细地址</th>
            <th v-if="routeParams.type == '0' || !isQuery">工作地省</th>
            <th v-if="routeParams.type == '0' || !isQuery">工作地市</th>
            <th v-if="routeParams.type == '0' || !isQuery">工作地详细地址</th>
            <th>已返回工作地</th>
        </thead>
        <tr v-for="(item,index) in dataList" :class="{stripe: index%2 == 1}">
            <td>{{index}}</td>
            <td>{{item.name}}</td>
            <td>{{item.phoneNum}}</td>
            <td v-if="routeParams.type == '1' || !isQuery">{{item.isolationProvince}}</td>
            <td v-if="routeParams.type == '1' || !isQuery">{{item.isolationCity}}</td>
            <td v-if="routeParams.type == '1' || !isQuery">{{item.isolationAddress}}</td>
            <td v-if="routeParams.type == '2' || !isQuery">{{item.holidayProvince}}</td>
            <td v-if="routeParams.type == '2' || !isQuery">{{item.holidayCity}}</td>
            <td v-if="routeParams.type == '2' || !isQuery">{{item.holidayAddress}}</td>
            <td v-if="routeParams.type == '0' || !isQuery">{{item.workProvice}}</td>
            <td v-if="routeParams.type == '0' || !isQuery">{{item.workCity}}</td>
            <td v-if="routeParams.type == '0' || !isQuery">{{item.workAddress}}</td>
            <td>{{item.personStatus? '是':'否'}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PersonList',
  data () {
    return {
      dataList: [],
      routeParams: {},
      isQuery: false
    }
  },
  created: function(){
    this.routeParams = this.$route.params;
    if(this.routeParams.type){
      this.isQuery = true;
    }

      this.$api.get('/ncp/personList').then(res => {
          if(res.data && res.data.length > 0){
            if(!this.routeParams.type){
              this.dataList = res.data;
            }else {
              this.dataList = res.data.filter(item => {
                switch(Number(this.routeParams.type)){
                  case 0:
                    if(item.workCity.search(this.routeParams.city) != -1){
                      return true;
                    }
                    break;
                  case 1:
                    if(item.isolationCity.search(this.routeParams.city) != -1){
                      return true;
                    }
                    break;
                  case 2:
                    if(item.holidayCity.search(this.routeParams.city) != -1){
                      return true;
                    }
                    break;
                  default: break;
                }
                return false;
              });
            }
          }
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
thead {
    color: #909399;
    font-weight: 500;
}
th,td {
  border-bottom: 1px solid #ebeef5;
}
th {
  height: 38px;
}
td {
  height: 32px;
  font-size: 14px;
  color: #606266;
}
tr.stripe td,tr:hover td{
  background: #fafafa;
}
</style>
