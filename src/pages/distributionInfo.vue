<template>
	<div class="distributionInfo">
		<div class="tab">
			<button
				type="button"
				@click="mapType = 'workCity'"
				:class="{ active: mapType === 'workCity' }"
			>
				工作地
			</button>
			<button
				type="button"
				@click="mapType = 'isolationCity'"
				:class="{ active: mapType === 'isolationCity' }"
			>
				隔离地
			</button>
			<button
				type="button"
				@click="mapType = 'holidayCity'"
				:class="{ active: mapType === 'holidayCity' }"
			>
				假期地
			</button>
		</div>
		<s-map :list="formatData" :mapType="listType" class="map"></s-map>
	</div>
</template>

<script>
import SMap from '@/components/SMap';

export default {
	name: 'DistributionInfo',
	components: {
		SMap
	},
	data() {
		return {
			distributionInfo: [],
			cityList: [],
			formatData: [],
			alia: 'hello',
			mapType: 'workCity'
		};
	},
	computed: {
		listType() {
			let tmp = 0;
			switch (this.mapType) {
				case 'workCity':
					tmp = 0;
					break;
				case 'isolationCity':
					tmp = 1;
					break;
				case 'holidayCity':
					tmp = 2;
					break;
				default:
					tmp = 0;
			}
			return tmp;
		}
	},
	created() {
		this.getCityList();
	},
	methods: {
		formatDataFunc() {
			let disInfo = {};
			this.distributionInfo.map(item => {
				if (!disInfo[item[this.mapType]]) {
					disInfo[item[this.mapType]] = [item];
				} else {
					disInfo[item[this.mapType]] = disInfo[item[this.mapType]].concat(item);
				}
			});

			this.formatData = [];
			for (let prop in disInfo) {
				let tmp = this.cityList[prop] || this.cityList[prop + '市'];
				if (!tmp) {
					continue;
				}
				this.formatData.push({
					name: prop,
					value: tmp.concat(disInfo[prop].length)
				});
			}
		},
		getDistributionInfo() {
			this.$api.get('/ncp/personList').then(res => {
				this.distributionInfo = [];
				if (res.data && res.data.length > 0) {
					this.distributionInfo = res.data;
					this.formatDataFunc();
					console.log(this.distributionInfo);
				}
			});
		},
		getCityList() {
			this.$api.get('/ncp/cityList').then(res => {
				if (res.data && res.data.length > 0) {
					this.cityList = {};
					res.data.map(item => {
						this.cityList[item.city] = [].concat([item.lat, item.lng]);
					});
				}
				console.log(this.cityList);
				this.getDistributionInfo();
			});
		}
	},
	watch: {
		mapType(val) {
			this.formatDataFunc();
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.distributionInfo {
	width: 100%;
	height: 100%;
	background-color: rgb(227, 230, 229);
}
.tab {
	padding-top: 30px;
}
.tab button {
	width: 120px;
	height: 48px;
	border-radius: 8px;
	border: 3px solid rgb(64, 48, 32);
	background-color: rgb(222, 240, 235);
	color: #b81820;
	font-weight: bold;
	font-size: 20px;
	outline: none;
}
.tab button:hover {
	background-color: rgb(200, 232, 248);
}
.tab button.active {
	background-color: rgb(248, 232, 8);
}
.map {
	width: 80%;
	height: 75%;
	margin: 40px auto;
}
.map .ec-extension-bmap {
	border-radius: 20px;
}
</style>
