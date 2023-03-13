<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getOneCountryInfo } from "@/apis/country";
import { conutryInfoType } from "@/apis/interface/resultType";
const route = useRoute();
const countryId = Number(route.params.countryId);
// alert(countryId);
let describeWords = ref("");
let countryName = ref("");
let flagImage = ref("");
const getTheCountryInfo = () => {
  getOneCountryInfo(countryId)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        describeWords.value = res.data.remark;
        countryName.value = res.data.countryNameCn;
        flagImage.value = res.data.nationalFlag;
      }
    })
    .catch((error) => {
      //@ts-ignore
      ElMessage({
        type: "error",
        message: error.message,
      });
    });
};
getTheCountryInfo();
// if (countryId === 1) {
//   flagImage.value = "./images/flag/xibanya.png";
//   countryName.value = "西班牙王国";
//   describeWords.value = `（西班牙语：Reino de España；英语：The Kingdom of Spain），简称西班牙 <br/>位于欧洲西南部的伊比利亚半岛，地处欧洲与非洲的交界处，西邻葡萄牙，北濒比斯开湾，东北部与法国及安道尔接壤，南隔直布罗陀海峡与非洲的摩洛哥相望。领土还包括地中海中的巴利阿里群岛，大西洋的加那利群岛及非洲的休达和梅利利亚。该国是一个多山国家，国土面积50.6万平方公里，其海岸线长约7800公里。以西班牙语作为官方语言的国家数量世界第二，仅次于英语。西班牙全国划分为17个自治区、50个省、8100多个市镇，在摩洛哥境内另有休达和梅利利亚两块飞地，首都为马德里。截至2021年1月，西班牙人口4739.8万人。 [1]
// 中世纪时，境内有多个国家并立，1492年西班牙光复运动胜利后，建立统一的西班牙王国。16世纪起 [1]  ，成为大航海时代中重要的海上强国，在欧洲、美洲、亚洲和非洲建立起大量殖民地。 [1]  1494年和葡萄牙共同签署了《托尔德西里亚斯条约》，意图将世界瓜分为二。在文艺复兴时期，西班牙帝国成为当时欧洲最强大的国家和影响全球的日不落帝国。三十年战争后开始衰落。在经历两个共和国和一个君主国后，于1978年宣布实行君主立宪制。 [1]
// 西班牙是一个发达的资本主义国家，也是欧盟和北约成员国。截至2020年10月，经济总量居欧盟第四位、世界第十四位 [2]  。2021年主要经济数字如下：国内生产总值（GDP）：1.2万亿欧元。国内生产总值增长率：5.1％。人均国内生产总值：2.54万欧元。 [1]`;
// } else if (countryId === 2) {
//   flagImage.value = "./images/flag/putaoya.png";
//   countryName.value = "葡萄牙共和国";
//   describeWords.value = `（葡萄牙语：República Portuguesa；英语：The Portuguese Republic），简称葡萄牙，首都里斯本 <br/>位于欧洲伊比利亚半岛的西南部。东、北连接西班牙，西、南濒临大西洋。总面积92226平方千米，海岸线长832千米。地形北高南低，多为山地和丘陵。北部属海洋性温带阔叶林气候，南部属亚热带地中海式气候。全国设有18个大区，另有2个自治区。截至2021年12月，葡萄牙总人口为1034.5万人，主要为葡萄牙人，官方语言为葡萄牙语。约81%的居民为天主教徒。 [1]
// 葡萄牙是欧洲古国之一。1143年，葡萄牙成为独立王国。15、16世纪，在非、亚、美洲建立大量殖民地，成为海上强国。1580年，葡萄牙被西班牙吞并，1640年，摆脱西班牙统治。十八世纪末，法国拿破仑军队入侵葡萄牙，1811年，葡萄牙在英国帮助下赶走法国军队。1820至1910年，实行君主立宪制。1910年10月，葡萄牙成立共和国。1926年5月，建立军人政府，开始“新政”。1932年，萨拉查就任总理，实行法西斯独裁统治。1974年4月25日，一批中下级军官组成的“武装部队运动”推翻极右政权，开始民主化进程，同时放弃在非洲的葡属殖民地，葡正式成为西方民主制度国家。 [1]
// 葡萄牙是欧盟中等发达国家，工业基础较薄弱。纺织、制鞋、酿酒、旅游等是国民经济的支柱产业。 [1]  葡萄牙政局稳定，社会治安良好，基础设施完备，司法体系健全，市场化程度高。 [6]  2021年，葡萄牙国内生产总值为2144.71亿欧元。 [1]`;
// } else if (countryId === 3) {
//   flagImage.value = "./images/flag/faguo.png";
//   countryName.value = "南法";
//   describeWords.value = `法国南部的简称，一般指代普罗旺斯、阿尔卑斯、蔚蓝海岸这三个主要地区 <br/>位于地中海附近，与摩洛哥相距不远，是非常受欢迎的旅游目的地。法国南部的乡村景色和特色保存得特别好，在乡野间散布着大大小小的老房子，许多酒店都有百年以上的历史，室内装修不乏从前的风格，非常具有当地特色。`;
// } else if (countryId === 4) {
//   flagImage.value = "./images/flag/andaoer.png";
//   countryName.value = "安道尔公国";
//   describeWords.value = `（加泰罗尼亚语：Principat d'Andorra，英语：Principality of Andorra），简称“安道尔” <br/>位于西南欧，地处西班牙和法国之间，比利牛斯山脉中部，为内陆国。北部与法国接壤57公里，南部与西班牙接壤64公里，国土面积468平方公里。全部为山地，平均高度1996米。属山地气候，年平均气温9.9℃。安道尔全国划为7个行政区，首都为安道尔城。截至2022年，安道尔人口79877人。其中安道尔人占48.7％，属加泰罗尼亚族。外国移民中西班牙人占24.6％，其次为葡萄牙人（11.6％）和法国人（4.4％）。 [1]
// 有关安道尔的记录始于公元839年的《乌赫尔大教堂落成纪要》，该《纪要》称安道尔为乌赫尔伯爵的领地。从11世纪起，乌赫尔主教的权力逐步延伸至整个安道尔，1133年安道尔成为其教区。13世纪，法国弗阿伯爵与乌赫尔主教争夺安道尔主权，双方为此进行了多次战争，最后于1278年和1288年达成两项协议，决定共管安道尔，并对各自在经济、法律、军事等方面的权限进行分工，安道尔由此成为公国，一直延续到1993年。期间，1793年法国因爆发大革命而暂时失去对安道尔的统治权，1806年拿破仑一世收回这一权力。法国实行共和制后，这一权力归总统所有。1982年1月4日安实行体制改革，行政权从议会改由政府行使。1993年3月14日，安道尔全民公决，通过了有史以来第一部《宪法》。安成为一个独立的主权国家，但继续沿用两大公政治体制。 [1]
// 2021年安实际国内生产总值（Real　GDP）25.88亿欧元，同比增长8.9％。 [1]`;
// }
console.log(route.params.countryId);
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="text-block">
        <p class="text-muted font-weight-light">
          <img :src="flagImage" alt="" class="flagImage" />
          <span class="countryName">{{ countryName }}</span
          ><span v-html="describeWords"> </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-block {
  padding-bottom: 60px;
}
.flagImage {
  display: inline-block;
  width: 40px;
  height: 30px;
  margin-right: 10px;
}
.countryName {
  font-weight: 1000;
  font-size: 20px;
  margin-right: 10px;
}
</style>
