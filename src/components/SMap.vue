<template>
  <div id="map"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'

export default {
  name: 'SMap',
  props:{
    list: {
        required: true
    }
  },
  data () {
    return {
        myChart: null
    }
  },
  mounted(){
      // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.getElementById('map'));

        // 指定图表的配置项和数据
        var option = {
            backgroundColor: 'transparent',
            title: {
                text: '人员分布情况',
                left: 'center',
                top:'15',
                textStyle: {
                    color: '#B81820',
                    fontSize:22
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: function(params){
                    return params.name + '<br />' + params.marker + '人数：' + params.value[2] + 
                    '<button class="more" id="specialLook" type="button" οnclick="console.log(\''+ params.name +'\')">查 看</button>'
                },
                enterable: true,
                alwaysShowContent:true,
                position:function(point){ return [point[0]+5,point[1]+5];}
            },
            bmap: {
                center: [108.114129, 34.550339],
                zoom: 5,
                roam: true,
                mapStyle: {
                    styleJson: [{
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
        "color": "#fffff9ff"
    }
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": {
        "color": "#69b0acff"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#b5caa0ff"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#94ad79ff"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#b5caa0ff"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d4e2c6ff"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d4e2c6ff"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d4e2c6ff"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#b5caa0ff"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#b5caa0ff"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#b5caa0ff"
    }
}, {
    "featureType": "subway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#94ad79ff"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#b5caa0ff"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#b5caa0ff"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "8,9",
        "level": "8"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "8,9",
        "level": "9"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "8,9",
        "level": "8"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "8,9",
        "level": "9"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "8,9",
        "level": "8"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "8,9",
        "level": "9"
    }
}, {
    "featureType": "cityhighway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "cityhighway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "cityhighway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "cityhighway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "6"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "7"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "8"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "6,9",
        "level": "9"
    }
}, {
    "featureType": "entertainment",
    "elementType": "geometry",
    "stylers": {
        "color": "#e4f0d7ff"
    }
}, {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
        "color": "#effcf0ff"
    }
}, {
    "featureType": "education",
    "elementType": "geometry",
    "stylers": {
        "color": "#e3f7e4ff"
    }
}, {
    "featureType": "building",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#a1cfa4ff"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "education",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#7a7a7aff"
    }
}, {
    "featureType": "education",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "education",
    "elementType": "labels.text",
    "stylers": {
        "fontsize": 26
    }
}, {
    "featureType": "manmade",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#afafafff"
    }
}, {
    "featureType": "manmade",
    "elementType": "labels.text",
    "stylers": {
        "fontsize": 26
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#376b6dff"
    }
}, {
    "featureType": "scenicspots",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff",
        "weight": 4
    }
}, {
    "featureType": "country",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#376b6dff"
    }
}, {
    "featureType": "country",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff",
        "weight": 3
    }
}, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": {
        "fontsize": 24
    }
}, {
    "featureType": "city",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "city",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}]
                }
            }
        };

        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option);
        this.myChart.on('click','tooltip', function(){
            alert('a');
        });

        // function show(city){
        //     debugger;
        //     this.showDetail(city);
        // }
  },
  methods:{
      renderMap(){
        this.myChart.setOption({
            series : [
                {
                    name: '人员',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: this.list,
                    symbolSize: function (val) {
                        if(val[2] > 10){
                            return val[2] / 2;
                        }
                        return 8;
                    },
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    itemStyle: {
                        color: '#B81820'
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                // {
                //     name: 'Top 5',
                //     type: 'effectScatter',
                //     coordinateSystem: 'bmap',
                //     data: convertData(data.sort(function (a, b) {
                //         return b.value - a.value;
                //     }).slice(0, 6)),
                //     symbolSize: function (val) {
                //         return val[2] / 10;
                //     },
                //     showEffectOn: 'emphasis',
                //     rippleEffect: {
                //         brushType: 'stroke'
                //     },
                //     hoverAnimation: true,
                //     label: {
                //         formatter: '{b}',
                //         position: 'right',
                //         show: true
                //     },
                //     itemStyle: {
                //         color: '#f4e925',
                //         shadowBlur: 10,
                //         shadowColor: '#333'
                //     },
                //     zlevel: 1
                // },
                // {
                //     type: 'custom',
                //     coordinateSystem: 'bmap',
                //     renderItem: renderItem,
                //     itemStyle: {
                //         opacity: 0.5
                //     },
                //     animation: false,
                //     silent: true,
                //     data: [0],
                //     z: -10
                // }
            ]
        });
      }
  },
  watch:{
      list(val){
          if(val){
              this.renderMap();
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.more {
    pointer-events: all;
}
</style>
