<template>
  <div style="display: flex;justify-content: space-between;">
    <!-- <vue-json-pretty :data="showData" :showLine="false" :showIcon="true" style="flex-grow: 1;"/> -->
    <div id="chart" style="height: 500px;flex-grow: 1;"></div>
  </div>
  <Modal v-model="modal" draggable sticky scrollable :mask="false" title="控制器">
    <div style="display: flex;justify-content: space-around;">
      <div style="flex-grow: 1;">
        <div>维度：</div>
        <div>
          <Select @on-select="changeSelected" v-model="dSelected" style="width:200px">
            <Option v-for="item in dSelection" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div style="flex-grow: 1;">
        <div>指标：</div>
        <div>
          <Select @on-select="changeSelected" v-model="qSelected" multiple style="width:200px">
            <Option v-for="item in qSelection" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
    </div>
    <template #footer>
      <div>emm</div>
    </template>
  </Modal>
</template>

<script>
import { renderChart } from '@/utils/cmpuEcharts'


import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import * as echarts from 'echarts'
export default{
  components: {
    VueJsonPretty,
  },
  data(){
    return{
      rawData:{
  "data": [
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201401",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "14351.7",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "31780.0",
      "C_565f1c38a5c69c681a19297cac1fffe4": "5503.38",
      "C_7436f942d5ea836cb84f1bb2527d8286": "1",
      "C_447d30927af0c270a15f149d67f259a0": "180TO3",
      "C_9ed083b1436e5f40ef984b28255eef18": "19558.7",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "25895.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2014-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.49",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "29203.8",
      "C_c1007e8ab1238e90f79100fbfff39635": "鸿睿思博信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202203",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "13569.3",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "22464.8",
      "C_565f1c38a5c69c681a19297cac1fffe4": "23931.4",
      "C_7436f942d5ea836cb84f1bb2527d8286": "3",
      "C_447d30927af0c270a15f149d67f259a0": "1RR6XS",
      "C_9ed083b1436e5f40ef984b28255eef18": "44550.9",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "9543.59",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2022-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.62",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "10260.3",
      "C_c1007e8ab1238e90f79100fbfff39635": "新格林耐特网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201910",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "32372.0",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "32881.7",
      "C_565f1c38a5c69c681a19297cac1fffe4": "23689.0",
      "C_7436f942d5ea836cb84f1bb2527d8286": "10",
      "C_447d30927af0c270a15f149d67f259a0": "5ECO4Z",
      "C_9ed083b1436e5f40ef984b28255eef18": "37555.0",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "41690.2",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2019-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.14",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "44306.6",
      "C_c1007e8ab1238e90f79100fbfff39635": "明腾信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202111",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "39777.9",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "18285.4",
      "C_565f1c38a5c69c681a19297cac1fffe4": "25150.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "11",
      "C_447d30927af0c270a15f149d67f259a0": "6QI65A",
      "C_9ed083b1436e5f40ef984b28255eef18": "8820.03",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "25196.9",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2021-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.8",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "45163.2",
      "C_c1007e8ab1238e90f79100fbfff39635": "立信电子信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202201",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "24530.9",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "7796.67",
      "C_565f1c38a5c69c681a19297cac1fffe4": "1031.14",
      "C_7436f942d5ea836cb84f1bb2527d8286": "1",
      "C_447d30927af0c270a15f149d67f259a0": "72MS4G",
      "C_9ed083b1436e5f40ef984b28255eef18": "5995.21",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "8618.1",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2022-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.62",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "16533.2",
      "C_c1007e8ab1238e90f79100fbfff39635": "昊嘉科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201205",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "14182.1",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "41379.4",
      "C_565f1c38a5c69c681a19297cac1fffe4": "26470.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "5",
      "C_447d30927af0c270a15f149d67f259a0": "97GN64",
      "C_9ed083b1436e5f40ef984b28255eef18": "31973.5",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "48025.9",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2012-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.37",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "47650.1",
      "C_c1007e8ab1238e90f79100fbfff39635": "易动力科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201404",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "3000.73",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "29235.7",
      "C_565f1c38a5c69c681a19297cac1fffe4": "5129.09",
      "C_7436f942d5ea836cb84f1bb2527d8286": "4",
      "C_447d30927af0c270a15f149d67f259a0": "9VI88A",
      "C_9ed083b1436e5f40ef984b28255eef18": "17994.4",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "18832.2",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2014-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.61",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "21013.0",
      "C_c1007e8ab1238e90f79100fbfff39635": "黄石金承科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202409",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "4762.84",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "25577.2",
      "C_565f1c38a5c69c681a19297cac1fffe4": "26063.9",
      "C_7436f942d5ea836cb84f1bb2527d8286": "9",
      "C_447d30927af0c270a15f149d67f259a0": "9W7CVA",
      "C_9ed083b1436e5f40ef984b28255eef18": "4612.79",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "30991.8",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2024-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.64",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "8013.74",
      "C_c1007e8ab1238e90f79100fbfff39635": "网新恒天网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201408",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "47357.6",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "12599.2",
      "C_565f1c38a5c69c681a19297cac1fffe4": "46422.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "8",
      "C_447d30927af0c270a15f149d67f259a0": "AE9DQ3",
      "C_9ed083b1436e5f40ef984b28255eef18": "16560.7",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "30441.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2014-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.16",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "36271.7",
      "C_c1007e8ab1238e90f79100fbfff39635": "海创传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201206",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "6670.35",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "18109.9",
      "C_565f1c38a5c69c681a19297cac1fffe4": "20712.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "6",
      "C_447d30927af0c270a15f149d67f259a0": "AVKK06",
      "C_9ed083b1436e5f40ef984b28255eef18": "27191.3",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "29169.1",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2012-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.69",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "29327.4",
      "C_c1007e8ab1238e90f79100fbfff39635": "维旺明科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201012",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "33363.9",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "8512.43",
      "C_565f1c38a5c69c681a19297cac1fffe4": "14978.8",
      "C_7436f942d5ea836cb84f1bb2527d8286": "12",
      "C_447d30927af0c270a15f149d67f259a0": "BO1IZI",
      "C_9ed083b1436e5f40ef984b28255eef18": "1380.54",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "46556.6",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2010-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.38",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "33957.9",
      "C_c1007e8ab1238e90f79100fbfff39635": "创联世纪网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201707",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "44264.2",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "37563.2",
      "C_565f1c38a5c69c681a19297cac1fffe4": "26607.9",
      "C_7436f942d5ea836cb84f1bb2527d8286": "7",
      "C_447d30927af0c270a15f149d67f259a0": "C4SQCA",
      "C_9ed083b1436e5f40ef984b28255eef18": "12012.7",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "22648.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2017-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.7",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "36462.4",
      "C_c1007e8ab1238e90f79100fbfff39635": "浦华众城网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202403",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "12956.1",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "44485.2",
      "C_565f1c38a5c69c681a19297cac1fffe4": "27090.9",
      "C_7436f942d5ea836cb84f1bb2527d8286": "3",
      "C_447d30927af0c270a15f149d67f259a0": "CFMVZM",
      "C_9ed083b1436e5f40ef984b28255eef18": "6896.6",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "41851.5",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2024-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.7",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "49391.3",
      "C_c1007e8ab1238e90f79100fbfff39635": "精芯科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201404",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "3439.49",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "25394.5",
      "C_565f1c38a5c69c681a19297cac1fffe4": "42571.5",
      "C_7436f942d5ea836cb84f1bb2527d8286": "4",
      "C_447d30927af0c270a15f149d67f259a0": "D0WSZF",
      "C_9ed083b1436e5f40ef984b28255eef18": "19889.7",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "12084.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2014-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.49",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "20848.2",
      "C_c1007e8ab1238e90f79100fbfff39635": "创亿信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202306",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "14898.6",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "25183.3",
      "C_565f1c38a5c69c681a19297cac1fffe4": "11571.8",
      "C_7436f942d5ea836cb84f1bb2527d8286": "6",
      "C_447d30927af0c270a15f149d67f259a0": "D2NQEF",
      "C_9ed083b1436e5f40ef984b28255eef18": "45864.1",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "40971.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2023-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.84",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "46066.9",
      "C_c1007e8ab1238e90f79100fbfff39635": "联通时科科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201705",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "43300.3",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "5988.13",
      "C_565f1c38a5c69c681a19297cac1fffe4": "28995.3",
      "C_7436f942d5ea836cb84f1bb2527d8286": "5",
      "C_447d30927af0c270a15f149d67f259a0": "DE85QZ",
      "C_9ed083b1436e5f40ef984b28255eef18": "36849.2",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "10633.0",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2017-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.55",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "4127.19",
      "C_c1007e8ab1238e90f79100fbfff39635": "戴硕电子传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202207",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "19363.6",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "25771.8",
      "C_565f1c38a5c69c681a19297cac1fffe4": "40768.2",
      "C_7436f942d5ea836cb84f1bb2527d8286": "7",
      "C_447d30927af0c270a15f149d67f259a0": "FADWYI",
      "C_9ed083b1436e5f40ef984b28255eef18": "4840.32",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "44140.6",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2022-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.56",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "17850.3",
      "C_c1007e8ab1238e90f79100fbfff39635": "创联世纪传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201405",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "28727.8",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "2775.1",
      "C_565f1c38a5c69c681a19297cac1fffe4": "29977.4",
      "C_7436f942d5ea836cb84f1bb2527d8286": "5",
      "C_447d30927af0c270a15f149d67f259a0": "FYXDVS",
      "C_9ed083b1436e5f40ef984b28255eef18": "32125.5",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "9496.46",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2014-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.15",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "20227.7",
      "C_c1007e8ab1238e90f79100fbfff39635": "华成育卓传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201208",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "7764.39",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "30169.7",
      "C_565f1c38a5c69c681a19297cac1fffe4": "37338.8",
      "C_7436f942d5ea836cb84f1bb2527d8286": "8",
      "C_447d30927af0c270a15f149d67f259a0": "KL1M61",
      "C_9ed083b1436e5f40ef984b28255eef18": "15908.9",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "43313.2",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2012-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.53",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "30886.8",
      "C_c1007e8ab1238e90f79100fbfff39635": "凌颖信息科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201608",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "35225.0",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "16981.9",
      "C_565f1c38a5c69c681a19297cac1fffe4": "30730.4",
      "C_7436f942d5ea836cb84f1bb2527d8286": "8",
      "C_447d30927af0c270a15f149d67f259a0": "KV2HKI",
      "C_9ed083b1436e5f40ef984b28255eef18": "30490.9",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "49529.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2016-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.4",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "43958.6",
      "C_c1007e8ab1238e90f79100fbfff39635": "新宇龙信息科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201204",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "45967.0",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "40167.8",
      "C_565f1c38a5c69c681a19297cac1fffe4": "22835.9",
      "C_7436f942d5ea836cb84f1bb2527d8286": "4",
      "C_447d30927af0c270a15f149d67f259a0": "L0XXK0",
      "C_9ed083b1436e5f40ef984b28255eef18": "18013.9",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "5527.23",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2012-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.83",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "41970.7",
      "C_c1007e8ab1238e90f79100fbfff39635": "创联世纪信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202011",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "18911.0",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "30850.4",
      "C_565f1c38a5c69c681a19297cac1fffe4": "10224.0",
      "C_7436f942d5ea836cb84f1bb2527d8286": "11",
      "C_447d30927af0c270a15f149d67f259a0": "L4RAAA",
      "C_9ed083b1436e5f40ef984b28255eef18": "14850.0",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "15474.9",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2020-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.63",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "9925.37",
      "C_c1007e8ab1238e90f79100fbfff39635": "浦华众城网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202208",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "42707.8",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "28415.4",
      "C_565f1c38a5c69c681a19297cac1fffe4": "34644.9",
      "C_7436f942d5ea836cb84f1bb2527d8286": "8",
      "C_447d30927af0c270a15f149d67f259a0": "LX3OS0",
      "C_9ed083b1436e5f40ef984b28255eef18": "39610.5",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "9769.46",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2022-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.83",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "20661.0",
      "C_c1007e8ab1238e90f79100fbfff39635": "数字100信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202305",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "17495.4",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "37498.4",
      "C_565f1c38a5c69c681a19297cac1fffe4": "32068.3",
      "C_7436f942d5ea836cb84f1bb2527d8286": "5",
      "C_447d30927af0c270a15f149d67f259a0": "N7LBX9",
      "C_9ed083b1436e5f40ef984b28255eef18": "37865.9",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "32858.9",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2023-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.37",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "42828.6",
      "C_c1007e8ab1238e90f79100fbfff39635": "快讯网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202306",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "18238.4",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "33690.5",
      "C_565f1c38a5c69c681a19297cac1fffe4": "10200.8",
      "C_7436f942d5ea836cb84f1bb2527d8286": "6",
      "C_447d30927af0c270a15f149d67f259a0": "NIMJRM",
      "C_9ed083b1436e5f40ef984b28255eef18": "25026.9",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "9080.68",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2023-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.26",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "39004.8",
      "C_c1007e8ab1238e90f79100fbfff39635": "数字100传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201308",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "19644.0",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "30727.7",
      "C_565f1c38a5c69c681a19297cac1fffe4": "11870.4",
      "C_7436f942d5ea836cb84f1bb2527d8286": "8",
      "C_447d30927af0c270a15f149d67f259a0": "O2AT8P",
      "C_9ed083b1436e5f40ef984b28255eef18": "12623.3",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "42632.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2013-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.1",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "42490.2",
      "C_c1007e8ab1238e90f79100fbfff39635": "明腾科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201301",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "9733.38",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "17617.8",
      "C_565f1c38a5c69c681a19297cac1fffe4": "2657.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "1",
      "C_447d30927af0c270a15f149d67f259a0": "OS24YY",
      "C_9ed083b1436e5f40ef984b28255eef18": "23901.4",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "41602.3",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2013-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.81",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "14562.6",
      "C_c1007e8ab1238e90f79100fbfff39635": "维旺明传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202011",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "12573.0",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "40656.5",
      "C_565f1c38a5c69c681a19297cac1fffe4": "7677.27",
      "C_7436f942d5ea836cb84f1bb2527d8286": "11",
      "C_447d30927af0c270a15f149d67f259a0": "PRS41A",
      "C_9ed083b1436e5f40ef984b28255eef18": "23296.2",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "34040.3",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2020-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.73",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "43535.8",
      "C_c1007e8ab1238e90f79100fbfff39635": "联软信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202403",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "26995.5",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "44242.5",
      "C_565f1c38a5c69c681a19297cac1fffe4": "4243.91",
      "C_7436f942d5ea836cb84f1bb2527d8286": "3",
      "C_447d30927af0c270a15f149d67f259a0": "R2LNO0",
      "C_9ed083b1436e5f40ef984b28255eef18": "32966.1",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "48512.7",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2024-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.31",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "16848.4",
      "C_c1007e8ab1238e90f79100fbfff39635": "银嘉信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202410",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "32791.6",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "3516.16",
      "C_565f1c38a5c69c681a19297cac1fffe4": "32018.5",
      "C_7436f942d5ea836cb84f1bb2527d8286": "10",
      "C_447d30927af0c270a15f149d67f259a0": "S08SX8",
      "C_9ed083b1436e5f40ef984b28255eef18": "13003.8",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "28727.9",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2024-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.27",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "29125.4",
      "C_c1007e8ab1238e90f79100fbfff39635": "合联电子传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202010",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "43935.1",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "21747.4",
      "C_565f1c38a5c69c681a19297cac1fffe4": "3757.43",
      "C_7436f942d5ea836cb84f1bb2527d8286": "10",
      "C_447d30927af0c270a15f149d67f259a0": "SWF3WT",
      "C_9ed083b1436e5f40ef984b28255eef18": "48187.3",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "4928.06",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2020-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.38",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "40168.1",
      "C_c1007e8ab1238e90f79100fbfff39635": "佳禾传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202206",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "42327.0",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "13461.3",
      "C_565f1c38a5c69c681a19297cac1fffe4": "35701.8",
      "C_7436f942d5ea836cb84f1bb2527d8286": "6",
      "C_447d30927af0c270a15f149d67f259a0": "TEUFGA",
      "C_9ed083b1436e5f40ef984b28255eef18": "17370.6",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "35866.7",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2022-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.62",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "13440.2",
      "C_c1007e8ab1238e90f79100fbfff39635": "数字100信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201005",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "4327.4",
      "C_695732499468748126df851ad6a68968": "传媒有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "42394.9",
      "C_565f1c38a5c69c681a19297cac1fffe4": "33807.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "5",
      "C_447d30927af0c270a15f149d67f259a0": "TPNWJC",
      "C_9ed083b1436e5f40ef984b28255eef18": "46770.4",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "11544.8",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2010-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.63",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "47527.3",
      "C_c1007e8ab1238e90f79100fbfff39635": "鸿睿思博信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201204",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "3740.56",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "16137.9",
      "C_565f1c38a5c69c681a19297cac1fffe4": "32547.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "4",
      "C_447d30927af0c270a15f149d67f259a0": "U9WMHH",
      "C_9ed083b1436e5f40ef984b28255eef18": "18177.4",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "20695.9",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2012-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.52",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "42793.9",
      "C_c1007e8ab1238e90f79100fbfff39635": "浦华众城信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202311",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "31341.0",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "20391.9",
      "C_565f1c38a5c69c681a19297cac1fffe4": "18817.2",
      "C_7436f942d5ea836cb84f1bb2527d8286": "11",
      "C_447d30927af0c270a15f149d67f259a0": "UT4SFJ",
      "C_9ed083b1436e5f40ef984b28255eef18": "10347.6",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "12526.9",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2023-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.44",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "34332.5",
      "C_c1007e8ab1238e90f79100fbfff39635": "图龙信息传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201702",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "15293.4",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "19387.1",
      "C_565f1c38a5c69c681a19297cac1fffe4": "13959.4",
      "C_7436f942d5ea836cb84f1bb2527d8286": "2",
      "C_447d30927af0c270a15f149d67f259a0": "UT6CDG",
      "C_9ed083b1436e5f40ef984b28255eef18": "16831.1",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "48120.1",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2017-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.29",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "14357.4",
      "C_c1007e8ab1238e90f79100fbfff39635": "天开科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202108",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "5230.97",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "23663.8",
      "C_565f1c38a5c69c681a19297cac1fffe4": "16014.0",
      "C_7436f942d5ea836cb84f1bb2527d8286": "8",
      "C_447d30927af0c270a15f149d67f259a0": "VDULOS",
      "C_9ed083b1436e5f40ef984b28255eef18": "15386.5",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "42823.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2021-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.12",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "4836.19",
      "C_c1007e8ab1238e90f79100fbfff39635": "诺依曼软件网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201406",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "37966.8",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "34527.3",
      "C_565f1c38a5c69c681a19297cac1fffe4": "3263.75",
      "C_7436f942d5ea836cb84f1bb2527d8286": "6",
      "C_447d30927af0c270a15f149d67f259a0": "VFAJCS",
      "C_9ed083b1436e5f40ef984b28255eef18": "22476.6",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "13612.1",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2014-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.27",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "30078.4",
      "C_c1007e8ab1238e90f79100fbfff39635": "华远软件传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201402",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "7377.64",
      "C_695732499468748126df851ad6a68968": "传媒有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "23824.4",
      "C_565f1c38a5c69c681a19297cac1fffe4": "45481.2",
      "C_7436f942d5ea836cb84f1bb2527d8286": "2",
      "C_447d30927af0c270a15f149d67f259a0": "VSJB18",
      "C_9ed083b1436e5f40ef984b28255eef18": "18220.0",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "4137.13",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2014-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.63",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "47352.1",
      "C_c1007e8ab1238e90f79100fbfff39635": "浦华众城网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202305",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "26766.2",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "49970.7",
      "C_565f1c38a5c69c681a19297cac1fffe4": "2448.41",
      "C_7436f942d5ea836cb84f1bb2527d8286": "5",
      "C_447d30927af0c270a15f149d67f259a0": "W1UWO5",
      "C_9ed083b1436e5f40ef984b28255eef18": "30816.1",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "36693.0",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2023-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.4",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "40003.0",
      "C_c1007e8ab1238e90f79100fbfff39635": "东方峻景传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201202",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "49382.2",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "26841.8",
      "C_565f1c38a5c69c681a19297cac1fffe4": "32724.0",
      "C_7436f942d5ea836cb84f1bb2527d8286": "2",
      "C_447d30927af0c270a15f149d67f259a0": "WBIOF0",
      "C_9ed083b1436e5f40ef984b28255eef18": "38968.3",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "33881.0",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2012-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.63",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "28679.3",
      "C_c1007e8ab1238e90f79100fbfff39635": "恩悌科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202203",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "3539.29",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "40741.2",
      "C_565f1c38a5c69c681a19297cac1fffe4": "17994.8",
      "C_7436f942d5ea836cb84f1bb2527d8286": "3",
      "C_447d30927af0c270a15f149d67f259a0": "WOIV8P",
      "C_9ed083b1436e5f40ef984b28255eef18": "16134.2",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "33424.5",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2022-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.8",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "16023.4",
      "C_c1007e8ab1238e90f79100fbfff39635": "时空盒数字传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201903",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "1573.43",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "19207.3",
      "C_565f1c38a5c69c681a19297cac1fffe4": "7272.95",
      "C_7436f942d5ea836cb84f1bb2527d8286": "3",
      "C_447d30927af0c270a15f149d67f259a0": "WSM0RU",
      "C_9ed083b1436e5f40ef984b28255eef18": "14403.7",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "48586.8",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2019-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.49",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "4079.23",
      "C_c1007e8ab1238e90f79100fbfff39635": "易动力科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202103",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "20431.8",
      "C_695732499468748126df851ad6a68968": "科技有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "37823.6",
      "C_565f1c38a5c69c681a19297cac1fffe4": "25871.7",
      "C_7436f942d5ea836cb84f1bb2527d8286": "3",
      "C_447d30927af0c270a15f149d67f259a0": "WX5X7B",
      "C_9ed083b1436e5f40ef984b28255eef18": "21454.6",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "23446.8",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2021-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.49",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "42226.0",
      "C_c1007e8ab1238e90f79100fbfff39635": "银嘉科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201008",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "18749.7",
      "C_695732499468748126df851ad6a68968": "网络有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "45201.1",
      "C_565f1c38a5c69c681a19297cac1fffe4": "10897.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "8",
      "C_447d30927af0c270a15f149d67f259a0": "XDHG9I",
      "C_9ed083b1436e5f40ef984b28255eef18": "8726.68",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "31592.5",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2010-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.58",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "24643.5",
      "C_c1007e8ab1238e90f79100fbfff39635": "MBP软件传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202104",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "30538.1",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "22539.6",
      "C_565f1c38a5c69c681a19297cac1fffe4": "36049.2",
      "C_7436f942d5ea836cb84f1bb2527d8286": "4",
      "C_447d30927af0c270a15f149d67f259a0": "YCKOJ4",
      "C_9ed083b1436e5f40ef984b28255eef18": "40677.4",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "14523.4",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2021-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.23",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "6692.92",
      "C_c1007e8ab1238e90f79100fbfff39635": "立信电子科技有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201304",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "45134.4",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "22835.9",
      "C_565f1c38a5c69c681a19297cac1fffe4": "43595.7",
      "C_7436f942d5ea836cb84f1bb2527d8286": "4",
      "C_447d30927af0c270a15f149d67f259a0": "YQY44D",
      "C_9ed083b1436e5f40ef984b28255eef18": "22044.5",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "26777.9",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2013-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.18",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "28492.5",
      "C_c1007e8ab1238e90f79100fbfff39635": "恒聪百汇网络有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "202407",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "46096.1",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "31213.0",
      "C_565f1c38a5c69c681a19297cac1fffe4": "38518.4",
      "C_7436f942d5ea836cb84f1bb2527d8286": "7",
      "C_447d30927af0c270a15f149d67f259a0": "Z32PKE",
      "C_9ed083b1436e5f40ef984b28255eef18": "39566.3",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "11247.1",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2024-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.29",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "24722.1",
      "C_c1007e8ab1238e90f79100fbfff39635": "维旺明信息有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201302",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "2617.75",
      "C_695732499468748126df851ad6a68968": "信息有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "17872.8",
      "C_565f1c38a5c69c681a19297cac1fffe4": "43755.6",
      "C_7436f942d5ea836cb84f1bb2527d8286": "2",
      "C_447d30927af0c270a15f149d67f259a0": "ZY765V",
      "C_9ed083b1436e5f40ef984b28255eef18": "29644.8",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "41916.8",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2013-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.52",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "16751.5",
      "C_c1007e8ab1238e90f79100fbfff39635": "诺依曼软件传媒有限公司"
    },
    {
      "C_bee135be0dce0284ca735cfbe09aeaff": "201004",
      "C_2ca799d109a4b2fb3237d6e41133b2ad": "25270.1",
      "C_695732499468748126df851ad6a68968": "传媒有限公司",
      "C_9ee16a4949dd661d005c6908e6617456": "20871.2",
      "C_565f1c38a5c69c681a19297cac1fffe4": "4169.1",
      "C_7436f942d5ea836cb84f1bb2527d8286": "4",
      "C_447d30927af0c270a15f149d67f259a0": "ZYA9AZ",
      "C_9ed083b1436e5f40ef984b28255eef18": "44041.2",
      "C_ea0b9e70f72ea69b99c37c47e5a67cea": "12957.5",
      "C_84cdc76cabf41bd7c961f6ab12f117d8": "2010-01-01 00:00:00",
      "C_44045d666ae9accac5ca782745578ffd": "0.59",
      "C_795f3202b17cb6bc3d4b771d8c6c9eaf": "36472.6",
      "C_c1007e8ab1238e90f79100fbfff39635": "艾提科信传媒有限公司"
    }
  ],
  "sycnStatus": "",
  "page": {
    "total": 50,
    "show": 1000,
    "page": 1,
    "pageSize": 1000
  },
  "fields": [
    {
      "id": "ff4fc0b1-e449-4eb7-8f1d-2e1616f10997",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "company_id",
      "name": "公司ID",
      "dataeaseName": "C_447d30927af0c270a15f149d67f259a0",
      "groupType": "d",
      "type": "VARCHAR",
      "size": 255,
      "deType": 0,
      "deTypeFormat": null,
      "deExtractType": 0,
      "extField": 0,
      "checked": true,
      "columnIndex": 0,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "11ffddfb-ad4a-4318-9bb4-093e1c7dbf51",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "company_name",
      "name": "公司名称",
      "dataeaseName": "C_c1007e8ab1238e90f79100fbfff39635",
      "groupType": "d",
      "type": "VARCHAR",
      "size": 255,
      "deType": 0,
      "deTypeFormat": null,
      "deExtractType": 0,
      "extField": 0,
      "checked": true,
      "columnIndex": 1,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "3f97cc02-e5a5-4fc3-a901-1e09c3474a10",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "company_type",
      "name": "公司类型",
      "dataeaseName": "C_695732499468748126df851ad6a68968",
      "groupType": "d",
      "type": "VARCHAR",
      "size": 255,
      "deType": 0,
      "deTypeFormat": null,
      "deExtractType": 0,
      "extField": 0,
      "checked": true,
      "columnIndex": 2,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "c1a60dbe-1835-4892-bce0-e60f45780f2d",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "year",
      "name": "投资年份",
      "dataeaseName": "C_84cdc76cabf41bd7c961f6ab12f117d8",
      "groupType": "d",
      "type": "YEAR",
      "size": 4,
      "deType": 1,
      "deTypeFormat": null,
      "deExtractType": 1,
      "extField": 0,
      "checked": true,
      "columnIndex": 3,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "398f8cc0-11dd-4675-bb27-798a26277ca5",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "month",
      "name": "投资月份",
      "dataeaseName": "C_7436f942d5ea836cb84f1bb2527d8286",
      "groupType": "q",
      "type": "INT",
      "size": 10,
      "deType": 2,
      "deTypeFormat": null,
      "deExtractType": 2,
      "extField": 0,
      "checked": true,
      "columnIndex": 4,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "a81732fb-1f2d-4774-95a7-d5deae2bfd7d",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "monthly_period",
      "name": "投资年月",
      "dataeaseName": "C_bee135be0dce0284ca735cfbe09aeaff",
      "groupType": "d",
      "type": "VARCHAR",
      "size": 255,
      "deType": 0,
      "deTypeFormat": null,
      "deExtractType": 0,
      "extField": 0,
      "checked": true,
      "columnIndex": 5,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "11ce2d13-8526-4405-8caf-0227cb467c0a",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "other",
      "name": "其他投入资金",
      "dataeaseName": "C_795f3202b17cb6bc3d4b771d8c6c9eaf",
      "groupType": "q",
      "type": "FLOAT",
      "size": 12,
      "deType": 3,
      "deTypeFormat": null,
      "deExtractType": 3,
      "extField": 0,
      "checked": true,
      "columnIndex": 6,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "e509a4ec-1abf-454b-8c98-eb72f100862b",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "sales",
      "name": "销售量",
      "dataeaseName": "C_9ed083b1436e5f40ef984b28255eef18",
      "groupType": "q",
      "type": "FLOAT",
      "size": 12,
      "deType": 3,
      "deTypeFormat": null,
      "deExtractType": 3,
      "extField": 0,
      "checked": true,
      "columnIndex": 7,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "37990b06-d201-4316-94bd-29bd2fb9f903",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "other_last_year",
      "name": "其他上年同期",
      "dataeaseName": "C_9ee16a4949dd661d005c6908e6617456",
      "groupType": "q",
      "type": "FLOAT",
      "size": 12,
      "deType": 3,
      "deTypeFormat": null,
      "deExtractType": 3,
      "extField": 0,
      "checked": true,
      "columnIndex": 8,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "6f8088d9-2dcd-42e9-9750-e032da763bd2",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "sales_last_year",
      "name": "销售上年同期",
      "dataeaseName": "C_565f1c38a5c69c681a19297cac1fffe4",
      "groupType": "q",
      "type": "FLOAT",
      "size": 12,
      "deType": 3,
      "deTypeFormat": null,
      "deExtractType": 3,
      "extField": 0,
      "checked": true,
      "columnIndex": 9,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "ccd5535f-a8b1-4811-988e-3b95708ab592",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "leasing_last_year",
      "name": "租赁上年同期",
      "dataeaseName": "C_ea0b9e70f72ea69b99c37c47e5a67cea",
      "groupType": "q",
      "type": "FLOAT",
      "size": 12,
      "deType": 3,
      "deTypeFormat": null,
      "deExtractType": 3,
      "extField": 0,
      "checked": true,
      "columnIndex": 10,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "699667e1-3b1e-4839-a94e-79de7c3d7469",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "operational_cash_outflow",
      "name": "经营性现金流出",
      "dataeaseName": "C_2ca799d109a4b2fb3237d6e41133b2ad",
      "groupType": "q",
      "type": "FLOAT",
      "size": 12,
      "deType": 3,
      "deTypeFormat": null,
      "deExtractType": 3,
      "extField": 0,
      "checked": true,
      "columnIndex": 11,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    },
    {
      "id": "014b578e-b359-4699-8416-e4b6e510297b",
      "tableId": "f2f6fbb8-5374-4296-85b0-3fea49024f23",
      "originName": "debt_to_asset_ratio",
      "name": "资产负债率",
      "dataeaseName": "C_44045d666ae9accac5ca782745578ffd",
      "groupType": "q",
      "type": "FLOAT",
      "size": 12,
      "deType": 3,
      "deTypeFormat": null,
      "deExtractType": 3,
      "extField": 0,
      "checked": true,
      "columnIndex": 12,
      "lastSyncTime": 1723457351932,
      "accuracy": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldDescribe": null,
      "desensitizationId": null
    }
  ],
  "sql": "SELECT\n    t_a_0.`company_id` AS f_ax_0,\n    t_a_0.`company_name` AS f_ax_1,\n    t_a_0.`company_type` AS f_ax_2,\n    DATE_FORMAT(CONCAT(t_a_0.`year`,'-01-01'),'%Y-%m-%d %H:%i:%S') AS f_ax_3,\n    CAST(t_a_0.`month` AS DECIMAL(20,0)) AS f_ax_4,\n    t_a_0.`monthly_period` AS f_ax_5,\n    t_a_0.`other` AS f_ax_6,\n    t_a_0.`sales` AS f_ax_7,\n    t_a_0.`other_last_year` AS f_ax_8,\n    t_a_0.`sales_last_year` AS f_ax_9,\n    t_a_0.`leasing_last_year` AS f_ax_10,\n    t_a_0.`operational_cash_outflow` AS f_ax_11,\n    t_a_0.`debt_to_asset_ratio` AS f_ax_12\nFROM\n    `company`   t_a_0\n LIMIT 0,1000",
  "status": "success"
},
      returnData:{},
      showData:null,
      modal:true,
      dSelected:'',
      qSelected:[],
      dSelection:[],
      qSelection:[],
      myChart:null
    }
  },
  onBeforeMount(){
    
  },
  mounted(){
    this.returnData=renderChart(this.rawData)
    console.log(this.returnData)
    this.dSelection=this.returnData.fields.nameFields
    this.qSelection=this.returnData.fields.valueFields
    this.dSelected=this.returnData.fieldNames.nameFieldNames[0]
    this.qSelected=this.returnData.fieldNames.valueFieldNames
    this.myChart = echarts.init(document.getElementById('chart'))
    this.drawChart()
  },
  methods:{
    drawChart(){
      let chartsDatas = this.rawData.data.map(item => ({
        name: item[this.dSelected],
        value: this.qSelected.map(field => parseFloat(item[field]))
      }))
      console.log(this.qSelected,this.qSelection)
      let qFildNames = this.qSelected.map(selectedValue => {
        let item = this.qSelection.find(item => item.value === selectedValue)
        return item ? item.label : null
      }).filter(label => label !== null)
      let series = []
      console.log(chartsDatas,this.qSelected,qFildNames)
      qFildNames.forEach((item, index) => {
        series.push({
          name: item,
          type: 'bar',
          emphasis: {
              focus: 'series'
          },
          data: chartsDatas.map(item=>item.value[index])
        })
      })

      this.showData=series
      let option = {
        tooltip: {
          show:true,
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        xAxis: {
            type: 'category',
            data: chartsDatas.map(item=>item.name),
            axisLine: {
                lineStyle: {
                    color: '#d3d3d3'
                }
            },
            axisLabel: {
                color: '#d3d3d3'
            }
        },
        yAxis: {
            type: 'value',
            nameGap: 30,
            axisLine: {
                lineStyle: { color: '#d3d3d3' }
            },
            axisLabel: {
                color: '#d3d3d3',
                rotate: -45,
            },
            axisTick: {
                lineStyle: { color: '#d3d3d3' }
            }
        },
        series: series,
        grid: {
            top: '21%',
            bottom: '10%',
            right: '5%',
            left: '10%'
        }
      }

      this.myChart.setOption(option,true)
    },
    changeSelected(){
      this.$nextTick(()=>{
        console.log(this.dSelected,this.qSelected)
        this.drawChart()
      })
    }
  }
}
</script>

<style scoped>

</style>
