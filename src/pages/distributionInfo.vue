<template>
  <div class="distributionInfo">
    <div class="tab">
        <button type="button" @click="mapType='workCity'" :class="{active: mapType === 'workCity'}">工作地</button>
        <button type="button" @click="mapType='isolationCity'" :class="{active: mapType === 'isolationCity'}">隔离地</button>
        <button type="button" @click="mapType='holidayCity'" :class="{active: mapType === 'holidayCity'}">假期地</button>
    </div>
    <s-map :list="formatData" class="map"></s-map>
  </div>
</template>

<script>
import SMap from '@/components/SMap'

export default {
  name: 'DistributionInfo',
  components: {
      SMap
  },
  data () {
    return {
        distributionInfo: [],
        cityList: [],
        formatData:[],
        alia: 'hello',
        mapType:'workCity'
    }
  },
  created(){
      this.getCityList();
  },
  methods:{
      formatDataFunc(){
          let disInfo = {};
          for(let i = 0, len = this.distributionInfo.length; i < len; i++){
              if(!disInfo[this.distributionInfo[i][this.mapType]]){
                  disInfo[this.distributionInfo[i][this.mapType]] = [this.distributionInfo[i]];
              }else {
                  disInfo[this.distributionInfo[i][this.mapType]] = disInfo[this.distributionInfo[i][this.mapType]].concat([this.distributionInfo[i]]);
              }
          }
          console.log(disInfo);

          this.formatData = [];
          for(let prop in disInfo){
              let tmp = this.cityList[prop] || this.cityList[prop + '市'];
              if(!tmp){
                  continue;
              }
              this.formatData.push({
                  name: prop,
                  value: tmp.concat(disInfo[prop].length)
              });
          }
          console.log(this.formatData);
      },
      getDistributionInfo(){
        this.$api.get('/ncp/personList').then(res => {
            this.distributionInfo = [];
            if(res.data && res.data.length > 0){
              this.distributionInfo = res.data;
            //   for(let i = 0, len = res.data.length; i < len; i++){
            //       if(!this.distributionInfo[res.data[i].isolationCity]){
            //           this.distributionInfo[res.data[i].isolationCity] = [res.data[i]];
            //       }else {
            //           this.distributionInfo[res.data[i].isolationCity] = this.distributionInfo[res.data[i].isolationCity].concat([res.data[i]]);
            //       }
            //   }
              this.formatDataFunc();
              console.log(this.distributionInfo);
            }
        });
      },
      getCityList(){
        this.$api.get('/ncp/cityList').then(res => {
            if(res.data && res.data.length > 0){
                this.cityList = {};
                res.data.map(item => {
                    this.cityList[item.city] = [].concat([item.lat,item.lng]);
                });
            }
            console.log(this.cityList);
            this.getDistributionInfo();
        });
      }
  },
  watch:{
      mapType(val){
          this.formatDataFunc();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.distributionInfo {
    width: 100%;
    height:100%;
    background-color: rgb(227, 230, 229);
}
.tab {
    padding-top:30px;
}
.tab button {
    width: 120px;
    height: 48px;
    border-radius: 8px;
    border: 3px solid rgb(64,48,32);
    background-color: rgb(222,240,235);
    color: #B81820;
    font-weight: bold;
    font-size: 20px;
    outline:none;
}
.tab button:hover {
    background-color: rgb(200,232,248);
}
.tab button.active {
    background-color: rgb(248,232,8);
}
.map {
    width: 80%;
    height:75%;
    margin: 40px auto;
}
.map .ec-extension-bmap {
    border-radius: 20px;
}
</style>
