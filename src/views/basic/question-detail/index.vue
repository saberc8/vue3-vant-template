<template>
  <div class="q-detail">
    <van-skeleton title :row="3" :loading="showSkeleton" />
    <div class="card" v-for="(item, index) in questionItems" :key="index">
      <div class="title">{{ index + 1 }} {{ item.type }} - {{ item.title }} </div>
      <div>
        <!-- 认一认 		- 1 -->
        <Type1
          v-if="item.type === 1"
          :item="item"
          :index="index"
          :qid="item.id"
          @callback="handleCallbackType1"
          :historyData="answerData[index].data || {}"
        />
        <!-- 选择题		- 2 -->
        <Type2
          v-if="item.type === 2"
          :item="item"
          :index="index"
          :qid="item.id"
          @callback="handleCallbackType2"
          :historyData="answerData[index].data || {}"
        />
        <!-- 找出错别字	- 3 -->
        <Type3
          v-if="item.type === 3"
          :item="item"
          :index="index"
          :qid="item.id"
          @callback="handleCallbackType3"
          :historyData="answerData[index].data || {}"
        />
        <Type0 v-if="item.type === 0" :item="item" :index="index" :qid="item.id" />
        <!-- 加点字注音	- 4 -->
        <Type4
          v-if="item.type === 4"
          :item="item"
          :index="index"
          :qid="item.id"
          @callback="handleCallbackType4"
          :historyData="answerData[index].data || []"
        />
        <!-- 写一写		- 5 -->
        <!-- 练一练		- 6 -->
        <Type6
          v-if="item.type === 6"
          :item="item"
          :index="index"
          :qid="item.id"
          @callback="handleCallbackType6"
          :historyData="answerData[index].data"
        />
        <Type1 v-if="item.type === 7" :item="item" :index="index" :qid="item.id" />
        <!-- 综合题		- 8 -->
        <Type8 v-if="item.type === 8" :item="item" :index="index" :qid="item.id" />
        <!-- 文本朗读		- 8 -->

        <Type9 v-if="item.type === 9" :item="item" :index="index" :qid="item.id" />
      </div>
    </div>
    <div class="footer">
      <div class="btn1" @click="handleCamera">上传答题卡</div>
      <div class="btn2" @click="handleSubmit">提交试卷</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getQuestionItems, submitQuestion } from '@/api/question'
import Type0 from './components/Type0.vue'
import Type1 from './components/Type1.vue'
import Type2 from './components/Type2.vue'
import Type3 from './components/Type3.vue'
import Type4 from './components/Type4.vue'
import Type5 from './components/Type5.vue'
import Type6 from './components/Type6.vue'
import Type8 from './components/Type8.vue'
import Type9 from './components/Type9.vue'
const mockData = [
  {
    id: '1844973500831371265',
    createBy: 'admin001',
    createTime: '2024-10-12 13:28:55',
    updateBy: 'admin',
    updateTime: '2024-10-15 10:17:24',
    title: '6-1-1:给下面加点的多音字注音',
    content: null,
    score: 0,
    metadata:
      '[\n  {\n    "id": "ZY01",\n    "title": "(1)他一早就露面了，鞋子上还沾着露水。",\n    "type": "selectPoint",\n    "point": "露",\n    "write": true,\n    "leng": 2,\n    "shengmu": "\'b\', \'l\', \'n\', \'-\'",\n    "yunmu": "\'ü\', \'ɑ\', \'ei\'",\n    "score": 5\n  }\n]',
    qid: '1844965451563536386',
    type: 4,
    type_dictText: '加点字注音',
  },
  {
    id: '1844975824211546113',
    createBy: 'admin001',
    createTime: '2024-10-12 13:38:09',
    updateBy: 'admin001',
    updateTime: '2024-10-12 13:38:36',
    title: '6-1-2: 认一认',
    content:
      '[\n    ["澄澈", "滴淌", "泥泞", "渣滓", "涕泣"],\n    ["底蕴", "蔫巴", "蔗糖", "和蔼", "蒲扇"],\n    ["瓜蒂", "招募", "鹿茸", "搭茬", "皂荚"],\n    ["绿茵", "苫布", "苟且", "茁壮", "莽撞"],\n    ["舌苔", "菱形", "著称", "萎靡", "红薯"],\n    ["薪金", "埋葬", "藐小", "艾灸", "山芋"],\n    ["储蓄", "蒸笼", "芜秽", "苇丛", "诸葛亮"],\n    ["惹祸", "营房", "晶莹", "黄莺", "萤火虫"],\n    ["凉亭", "从事", "燕雀", "禽兽", "藻类植物"],\n    ["攀爬", "猫爪", "甘泉", "状况", "糜烂"]\n]',
    score: 10,
    metadata:
      '[\n    {\n        "title": "请完成下列作业:",\n        "type": "label"\n    },\n    {\n        "title": "默认您已经掌握了下面的字词（20个字）：",\n        "type": "subtitle",\n        "value": "池塘、笛、沟、染、解、派、黑、长、灾、青、名、温、积、养、过、军、左右、石"\n    },\n    {\n        "id":"RYR01",\n        "title": "1.除默认已掌握的字以外，点击您最熟悉的 20 个字。",\n        "type": "selectPoint",\n        "write": false,\n        "leng": 20\n    },\n    {\n        "id": "RYR02",\n        "title": " 2.请在答题纸上写出上面词语中5个最难掌握的字。",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 5\n    }\n]',
    qid: '1844965451563536386',
    type: 1,
    type_dictText: '认一认',
  },
  {
    id: '1844976485942693890',
    createBy: 'admin001',
    createTime: '2024-10-12 13:40:47',
    updateBy: 'admin001',
    updateTime: '2024-10-12 14:54:28',
    title: '6-1-3:请在答题纸上写出每组两个字不一样的地方。',
    content: null,
    score: null,
    metadata:
      '[\n    {\n        "id":"BT011",\n        "title": "(1)渠、染",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 1\n    },\n    {\n        "id": "BT012",\n        "title": "(2)沾、沽",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 1\n    },\n    {\n        "id": "BT013",\n        "title": "(3)名、各",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 2\n    },\n    {\n        "id": "BT014",\n        "title": "(4)贤、肾",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 2\n    },\n    {\n        "id": "BT015",\n        "title": "(5)滋、磁",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 2\n    }\n]',
    qid: '1844965451563536386',
    type: 1,
    type_dictText: '认一认',
  },
  {
    id: '1844977425647144962',
    createBy: 'admin001',
    createTime: '2024-10-12 13:44:31',
    updateBy: null,
    updateTime: null,
    title: '6-1-4:点击下面句子中的错别字，并在答题纸上写出正确的字：',
    content: null,
    score: 5,
    metadata:
      '[\n    {\n        "id":"CBZ01",\n        "title": "(1)阅${揽}室里有一批新购的图书",\n        "type": "errorCode",\n        "leng": 1\n    },\n    {\n        "id": "CBZ02",\n        "title": "(2)他们${名}司其职，${青}理池${糖}里的淤泥",\n        "type": "errorCode",\n        "leng": 3\n    }\n]',
    qid: '1844965451563536386',
    type: 3,
    type_dictText: '找出错别字',
  },
  {
    id: '1844978476710367233',
    createBy: 'admin001',
    createTime: '2024-10-12 13:48:42',
    updateBy: null,
    updateTime: null,
    title: '6-3-1:从下列字中选出20个字,在答题纸上进行练习（红色的字是建议练习的字）：',
    content: null,
    score: 20,
    metadata:
      '[\n    {\n        "id": "xyx01",\n        "title": "",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 20\n    }\n]',
    qid: '1844965451563536386',
    type: 5,
    type_dictText: '写一写',
  },
  {
    id: '1844978955519528961',
    createBy: 'admin001',
    createTime: '2024-10-12 13:50:36',
    updateBy: 'admin006',
    updateTime: '2024-10-13 19:55:11',
    title: '6-3-2:练一练',
    content:
      '打字内容:作品 11号。\n打字方式:一边听课文的音频，一边打字。\n时间要求:正式打印作业，要求在 20 分钟以内完成。',
    score: 30,
    metadata:
      '[\n    {\n        "id": "LYL01",\n        "src": "https://demo.ototoro.cn/sample-15s.mp3",\n        "author": "张三",\n        "title": "测试",\n         "answer":"我带着一家大小上山赏花。看看这天气分外晴朗， 赏花的人比山坡上的花还要多。"\n    }\n]',
    qid: '1844965451563536386',
    type: 6,
    type_dictText: '练一练',
  },
  {
    id: '1844979601572368386',
    createBy: 'admin001',
    createTime: '2024-10-12 13:53:10',
    updateBy: 'admin',
    updateTime: '2024-10-15 10:22:00',
    title: '6-5-1:在括号中填写正确的选项(每题 1 分，共 5 分)',
    content: null,
    score: 5,
    metadata:
      '[\n  {\n      "id":"XZT011",\n      "title": "1.刚刚忙完搬家的事，她感到十分疲（）。",\n      "type": "radio",\n       "score": 1,\n      "options": [\n          {\n              "label": "A.倦",\n              "value": "A"\n          },\n          {\n              "label": "B.偶",\n              "value": "B"\n          },\n          {\n              "label": "C.傍",\n              "value": "C"\n          },\n          {\n              "label": "D.侥",\n              "value": "D"\n          }\n      ]\n  },\n  {\n      "id": "XZT012",\n      "title": "2.他决定报名参加热门( )位的招聘。",\n      "type": "radio",\n      "options": [\n          {\n              "label": "A.炭",\n              "value": "A"\n          },\n          {\n              "label": "B.崔",\n              "value": "B"\n          },\n          {\n              "label": "C.崩",\n              "value": "C"\n          },\n          {\n              "label": "D.岗",\n              "value": "D"\n          }\n      ]\n  },\n  {\n      "id": "XZT013",\n      "title": "3.她心情不好，不理( )任何人。",\n      "type": "radio",\n      "options": [\n          {\n              "label": "A.睬",\n              "value": "A"\n          },\n          {\n              "label": "B.昧",\n              "value": "B"\n          },\n          {\n              "label": "C.昵",\n              "value": "C"\n          },\n          {\n              "label": "D.昭",\n              "value": "D"\n          }\n      ]\n  },\n  {\n      "id": "XZT014",\n      "title": "4. 新( )策一发布，大家就热烈地讨论起来。",\n      "type": "radio",\n      "options": [\n          {\n              "label": "A.敞",\n              "value": "A"\n          },\n          {\n              "label": "B.政",\n              "value": "B"\n          },\n          {\n              "label": "C.敦",\n              "value": "C"\n          },\n          {\n              "label": "D.敛",\n              "value": "D"\n          }\n      ]\n  },\n  {\n      "id": "XZT015",\n      "title": "5. 妈妈去超市买了好几( )酸奶。",\n      "type": "radio",\n      "options": [\n          {\n              "label": "A.盗",\n              "value": "A"\n          },\n          {\n              "label": "B.盟",\n              "value": "B"\n          },\n          {\n              "label": "C.盔",\n              "value": "C"\n          },\n          {\n              "label": "D.盒",\n              "value": "D"\n          }\n      ]\n  }\n]',
    qid: '1844965451563536386',
    type: 2,
    type_dictText: '选择题',
  },
  {
    id: '1844981818740183041',
    createBy: 'admin001',
    createTime: '2024-10-12 14:01:58',
    updateBy: 'admin001',
    updateTime: '2024-10-12 15:49:51',
    title: '6-5-2:选出下面读音不同的一对（每题1分，共5分）',
    content: null,
    score: null,
    metadata:
      '[\n  {\n      "id":"XZT01",\n      "title": "第一题",\n      "type": "radio",\n      "options": [\n          {\n              "label": "A.${伺}候-${刺}杀",\n              "value": "A"\n          },\n          {\n              "label": "B.${佃}农-${店}长",\n              "value": "B"\n          },\n          {\n              "label": "C.${伺}候-${刺}杀",\n              "value": "C"\n          },\n          {\n              "label": "D.${伺}候-${刺}杀",\n              "value": "D"\n          }\n      ]\n  },\n  {\n      "id":"XZT02",\n      "title": "第二题",\n      "type": "radio",\n      "options": [\n          {\n              "label": "A.${伺}候-${刺}杀",\n              "value": "A"\n          },\n          {\n              "label": "B.${佃}农-${店}长",\n              "value": "B"\n          },\n          {\n              "label": "C.${伺}候-${刺}杀",\n              "value": "C"\n          },\n          {\n              "label": "D.${伺}候-${刺}杀",\n              "value": "D"\n          }\n      ]\n  },\n{\n      "id":"XZT03",\n      "title": "第三题",\n      "type": "radio",\n      "options": [\n          {\n              "label": "A.${伺}候-${刺}杀",\n              "value": "A"\n          },\n          {\n              "label": "B.${佃}农-${店}长",\n              "value": "B"\n          },\n          {\n              "label": "C.${伺}候-${刺}杀",\n              "value": "C"\n          },\n          {\n              "label": "D.${伺}候-${刺}杀",\n              "value": "D"\n          }\n      ]\n  }\n]',
    qid: '1844965451563536386',
    type: 2,
    type_dictText: '选择题',
  },
  {
    id: '1844983051156721665',
    createBy: 'admin001',
    createTime: '2024-10-12 14:06:52',
    updateBy: 'admin001',
    updateTime: '2024-10-12 15:45:58',
    title: '6-5-3:给下面的多音字注音（每空1分，共4分）',
    content: null,
    score: 4,
    metadata:
      '[\n    {\n        "id":"ZY01",\n        "title": "(1)我要（   ）通过这个考试，这是我对自己的要（   ）求。",\n        "type": "selectPoint",\n        "point": "要",\n        "write": true,\n        "leng": 2\n    },\n    {\n        "id": "ZY02",\n        "title": "(2)每次体检的时候，她才会去量（   ）身高，称重量（   ）。",\n        "type": "selectPoint",\n        "point": "",\n        "write": true,\n        "leng": 2\n    }\n]',
    qid: '1844965451563536386',
    type: 4,
    type_dictText: '加点字注音',
  },
  {
    id: '1844983691983458306',
    createBy: 'admin001',
    createTime: '2024-10-12 14:09:25',
    updateBy: null,
    updateTime: null,
    title: '6-5-4:在答题纸上修改句子中的错别字（每题1分，含书写0.5分，共5分）',
    content: null,
    score: 5,
    metadata:
      '[\n    {\n        "id":"CBZ01",\n        "title": "(1)海${澡}可以制成美味的菜肴。",\n        "type": "errorCode",\n        "leng": 1\n    },\n    {\n        "id": "CBZ02",\n        "title": "(2)一只小鸭子从芦${韦}丛中钻了出来。",\n        "type": "errorCode",\n        "leng": 1\n    }\n]',
    qid: '1844965451563536386',
    type: 3,
    type_dictText: '找出错别字',
  },
  {
    id: '1844984101456580609',
    createBy: 'admin001',
    createTime: '2024-10-12 14:11:03',
    updateBy: null,
    updateTime: null,
    title: '6-5-5:在答题纸上写出含下列偏旁的汉字',
    content: null,
    score: null,
    metadata:
      '[\n    {\n        "id":"PP01",\n        "title": "女",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 5\n    },\n    {\n        "id": "PP02",\n        "title": "子",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 5\n    }\n]',
    qid: '1844965451563536386',
    type: 7,
    type_dictText: '偏旁写汉字',
  },
  {
    id: '1844986716340883458',
    createBy: 'admin001',
    createTime: '2024-10-12 14:21:26',
    updateBy: 'admin',
    updateTime: '2024-10-14 15:46:33',
    title: '6-5-6:找出下列各字笔画有误的地方并在答题纸上修改（每空1分，含书写0.5分，共5分）',
    content: null,
    score: null,
    metadata:
      '[\n    {\n        "id":"CBZ01",\n        "title": "(1)${鄙}",\n        "type": "errorCode1",\n        "leng": 1\n    },\n    {\n        "id":"CBZ01",\n        "title": "(2)${遍}",\n        "type": "errorCode1",\n        "leng": 1\n    }\n]',
    qid: '1844965451563536386',
    type: 3,
    type_dictText: '找出错别字',
  },
  {
    id: '1844988187274907649',
    createBy: 'admin001',
    createTime: '2024-10-12 14:27:17',
    updateBy: 'admin001',
    updateTime: '2024-10-12 15:45:11',
    title: '6-5-7:七、在答题纸上写出含有下列部件的汉字 （每空1分，含书写0.5分，共10分）',
    content: null,
    score: null,
    metadata:
      '[\n    { \n        "id":"PP01",\n        "title": "山",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 5\n    },\n    {\n        "id": "PP02",\n        "title": "王",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 5\n    },\n    { \n        "id":"PP01",\n        "title": "山",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 5\n    },\n    {\n        "id": "PP02",\n        "title": "王",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 5\n    }\n]',
    qid: '1844965451563536386',
    type: 7,
    type_dictText: '偏旁写汉字',
  },
  {
    id: '1844992252004274177',
    createBy: 'admin001',
    createTime: '2024-10-12 14:43:26',
    updateBy: 'admin003',
    updateTime: '2024-10-13 17:10:46',
    title: '6-5-8:综合题（3题，共20分）',
    content:
      '<div class="zh-container">\n<h1 class="zh-title">盘古开天地</h1>\n<p class="zh-p">很久以前，宇宙混饨一片，像个大鸡蛋。一天，有个叫盘古的巨人醒来一看，一片<span class="zh-py">qī</span>黑。他一使劲，翻身坐起来时“大鸡蛋”裂开了一条逢。他摸到一把斧头，用力一pī ，突然“大鸡蛋”碎了。轻而清的东西上升，变成了天；重而浊的东西下降，变成了地。</p>\n<p class="zh-p">盘古像一根住子，撑在天和地之间。当天和地<span class="zh-py">zhōng </span>于成形时，盘古也精疲力<span class="zh-py">jié</span>，累倒了。这时，他的身体发生了巨大的变化。他呼出的气息变成了四季的风和漂动的云；他的四肢和躯干变成了大地的四极和五方的名山；他的汗水变成了滋闰万物的雨露。</p>\n</div>',
    score: 20,
    metadata:
      '[\n    {\n        "id":"ZH01",\n        "title": "1.点击课文中的错别字，并在答题纸上写出正确的汉字",\n        "tip": "(找对 1 个得 1 分，修改正确 1 分，含书写 0.5 分，共 10 分)",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 9\n    },\n    {\n        "id": "ZH02",\n        "title": "2.在答题纸上为课文中的拼音写出正确的汉字",\n        "tip": "(每个 1 分，含书写 0.5 分，共 4 分)",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 4\n    },\n    {\n        "id": "ZH03",\n        "title": "3.点击课文中的多音字，为每个字组两个词，写在答题纸上",\n        "tip": "(每个 1 分，含书写 0.5 分，共 4 分)",\n        "type": "selectPoint",\n        "write": true,\n        "leng": 16,\n        "column": 4\n    }\n]',
    qid: '1844965451563536386',
    type: 8,
    type_dictText: '综合',
  },
  {
    id: '1844993994137800705',
    createBy: 'admin001',
    createTime: '2024-10-12 14:50:21',
    updateBy: 'admin001',
    updateTime: '2024-10-12 15:40:20',
    title: '6-5-9：写作（30分）',
    content:
      '题目:请介绍你喜欢的风景 \n字数:100 字左右。 \n评分要求: \n(1)不能重复以前写过的内容。 \n(2)汉字正确(18 分)。错 1 个，扣 1 分。 (3)书写美观(18 分)。符合“口、目、今、家、心、地、\n我、边、广、也”书写样例要求的字，可得到一个圈。每个圈 1 分。',
    score: null,
    metadata: '',
    qid: '1844965451563536386',
    type: 0,
    type_dictText: 'OCR识别',
  },
]


const route = useRoute()
const id = ref(route.params.id)
const showSkeleton = ref(true)
const questionItems = ref([])
const answerData = ref([])
onMounted(() => {
  getQuestionItems(id.value).then((res) => {
    console.log(res)
    showSkeleton.value = false
    questionItems.value = res.records
    // 初始化answerData
    const res1 = localStorage.getItem('answerData' + id.value)
    if (res1) {
      answerData.value = JSON.parse(res1)
      console.log(answerData.value, '初始化answerData')
    } else {
      questionItems.value.forEach((item) => {
        answerData.value.push({
          qid: item.id,
          data: '',
        })
      })
    }
  })
  // questionItems.value = mockData
  // showSkeleton.value = false
  // const res1 = localStorage.getItem('answerData' + id.value)
  // if (res1) {
  //   answerData.value = JSON.parse(res1)
  //   console.log(answerData.value, '初始化answerData')
  // } else {
  //   questionItems.value.forEach((item) => {
  //     answerData.value.push({
  //       qid: item.id,
  //       data: '',
  //     })
  //   })
  // }
})

const handleCamera = () => {
  console.log('handleCamera')
  // h5拍照或者上传图片
}

const handleSubmit = async () => {
  console.log('handleSubmit')
  // 提交答案
  const data = {
    qid: id.value,
    data: {},
    src: "https://demo.ototoro.cn/sample-15s.png",
  }
  answerData.value.forEach((item) => {
    data.data[item.qid] = JSON.stringify(item.data)
  })
  const res = await submitQuestion(data)
  console.log(res, '提交答案')
}

const handleCallbackType1 = (qid, data) => {
  const index = answerData.value.findIndex((item) => item.qid === qid)
  answerData.value[index].data = data
  console.log(answerData.value)
  localStorage.setItem('answerData' + id.value, JSON.stringify(answerData.value))
}

const handleCallbackType2 = (qid, data) => {
  console.log(qid, data, 'handleCallbackType222222')
  const index = answerData.value.findIndex((item) => item.qid === qid)
  answerData.value[index].data = data
  console.log(answerData.value)
  localStorage.setItem('answerData' + id.value, JSON.stringify(answerData.value))
}

const handleCallbackType3 = (qid, data) => {
  const index = answerData.value.findIndex((item) => item.qid === qid)
  answerData.value[index].data = data
  console.log(answerData.value)
  localStorage.setItem('answerData' + id.value, JSON.stringify(answerData.value))
}

const handleCallbackType4 = (qid, data) => {
  const index = answerData.value.findIndex((item) => item.qid === qid)
  answerData.value[index].data = data
  console.log(answerData.value)
  localStorage.setItem('answerData' + id.value, JSON.stringify(answerData.value))
}

const handleCallbackType6 = (qid, data) => {
  const index = answerData.value.findIndex((item) => item.qid === qid)
  answerData.value[index].data = data
  console.log(answerData.value)
  localStorage.setItem('answerData' + id.value, JSON.stringify(answerData.value))
}
</script>

<style lang="scss" scoped>
.q-detail {
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
  .card {
    margin: 10px 10px 20px 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    .title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
      color: rgb(40, 0, 201);
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px;
    background-color: #fff;
    box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
    align-items: center;
    .btn1 {
      width: 300px;
      height: 50px;
      border-radius: 8px;
      opacity: 1;
      background: #8bd989;
      color: #fff;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn2 {
      width: 300px;
      height: 50px;
      border-radius: 8px;
      opacity: 1;
      background: #4781e2;
      color: #fff;
      display: flex;
      justify-content: center;
      font-size: 20px;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
