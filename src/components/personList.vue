<template>
  <div class="hello">
    <table>
        <thead>
            <th  v-for="item in tableHead">{{item}}</th>
        </thead>
        <tr v-for="(item,index) in dataList">
            <td v-for="value in item">{{value}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PersonList',
  data () {
    return {
      tableHead:["id","name","phoneNum","isolationProvince","isolationCity","isolationAddress","holidayProvince","holidayCity","holidayAddress","workProvice","workCity","workAddress","personStatus"],
      dataList: []
    }
  },
  created: function(){
      this.$api.get('/ncp/personList').then(res => {
          if(res.data && res.data.length > 0){
              this.dataList = res.data;
          }
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
