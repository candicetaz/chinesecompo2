export type GrammarItem = {
  word: string;
  english: string;
  formula: string;
  formulaEn: string;
  when: string;
  whenEn: string;
  example: string;
  translation: string;
  priority?: boolean;
};

export type ConnectorGroup = {
  id: string;
  title: string;
  titleEn: string;
  colour: string;
  items: GrammarItem[];
};

export type SentenceLadderStep = {
  label: string;
  labelEn: string;
  addition: string;
  additionEn: string;
  sentence: string;
};

export type SentenceLadderExample = {
  id: string;
  title: string;
  titleEn: string;
  steps: SentenceLadderStep[];
};

export const SENTENCE_LADDERS: SentenceLadderExample[] = [
  {
    id: "ball",
    title: "扔球意外",
    titleEn: "Throwing a ball",
    steps: [
      { label: "基本句", labelEn: "Basic sentence", addition: "主语＋动词＋宾语", additionEn: "Subject + verb + object", sentence: "小明扔球。" },
      { label: "5W+1H", labelEn: "Situation details", addition: "什么时候？下课时", additionEn: "Add when it happened", sentence: "下课时，小明扔球。" },
      { label: "结构词", labelEn: "Structural words", addition: "把、了", additionEn: "Add 把 and 了", sentence: "下课时，小明把球扔了出去。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点；向＋目标", additionEn: "Add place, direction or target", sentence: "下课时，小明在操场上把球扔向志强。" },
      { label: "副词", labelEn: "Adverbs", addition: "怎样＋地＋动词", additionEn: "Add how the action was done", sentence: "下课时，小明在操场上用力地把球扔向志强。" },
      { label: "形容词", labelEn: "Adjectives", addition: "形容词＋的＋名词", additionEn: "Describe a person or thing", sentence: "下课时，顽皮的小明在操场上用力地把球扔向志强。" },
      { label: "结果", labelEn: "Result", addition: "写清楚谁／什么造成什么结果", additionEn: "Name the subject and show the result clearly", sentence: "下课时，顽皮的小明在操场上用力地把球扔向志强。球砸中了志强的头。" },
      { label: "连接", labelEn: "Connect", addition: "不料＋意外结果", additionEn: "Link an unexpected result", sentence: "下课时，顽皮的小明在操场上用力地把球扔向志强。不料，球砸中了志强的头。" },
    ],
  },
  {
    id: "wallet",
    title: "拾金不昧",
    titleEn: "Returning a wallet",
    steps: [
      { label: "基本句", labelEn: "Basic sentence", addition: "主语＋动词＋宾语", additionEn: "Subject + verb + object", sentence: "小丽捡钱包。" },
      { label: "5W+1H", labelEn: "Situation details", addition: "什么时候？放学后", additionEn: "Add when it happened", sentence: "放学后，小丽捡钱包。" },
      { label: "结构词", labelEn: "Structural words", addition: "了、一个", additionEn: "Show a completed action", sentence: "放学后，小丽捡到了一个钱包。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点", additionEn: "Add where it happened", sentence: "放学后，小丽在食堂里捡到了一个钱包。" },
      { label: "副词", labelEn: "Adverbs", addition: "意外地", additionEn: "Add how it happened", sentence: "放学后，小丽在食堂里意外地捡到了一个钱包。" },
      { label: "形容词", labelEn: "Adjectives", addition: "善良的、黑色的", additionEn: "Describe the person and object", sentence: "放学后，善良的小丽在食堂里意外地捡到了一个黑色的钱包。" },
      { label: "结果", labelEn: "Result", addition: "写出新的发现", additionEn: "Show what she discovered", sentence: "放学后，善良的小丽在食堂里意外地捡到了一个黑色的钱包。她发现钱包里有一张学生证。" },
      { label: "连接", labelEn: "Connect", addition: "于是＋下一步行动", additionEn: "Link the situation to her next action", sentence: "放学后，善良的小丽在食堂里意外地捡到了一个黑色的钱包。她发现钱包里有一张学生证，于是立刻把钱包交给了老师。" },
    ],
  },
  {
    id: "bottle",
    title: "打翻水瓶",
    titleEn: "Spilling water",
    steps: [
      { label: "基本句", labelEn: "Basic sentence", addition: "主语＋动词＋宾语", additionEn: "Subject + verb + object", sentence: "志强碰水瓶。" },
      { label: "5W+1H", labelEn: "Situation details", addition: "什么时候？上课时", additionEn: "Add when it happened", sentence: "上课时，志强碰水瓶。" },
      { label: "结构词", labelEn: "Structural words", addition: "把、了", additionEn: "Show what was affected", sentence: "上课时，志强把水瓶碰倒了。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点", additionEn: "Add where it happened", sentence: "上课时，志强在课室里把水瓶碰倒了。" },
      { label: "副词", labelEn: "Adverbs", addition: "不小心地", additionEn: "Add how it happened", sentence: "上课时，志强在课室里不小心地把水瓶碰倒了。" },
      { label: "形容词", labelEn: "Adjectives", addition: "粗心的、装满水的", additionEn: "Describe the person and object", sentence: "上课时，粗心的志强在课室里不小心地把装满水的水瓶碰倒了。" },
      { label: "结果", labelEn: "Result", addition: "写清楚造成的后果", additionEn: "Show the consequence clearly", sentence: "上课时，粗心的志强在课室里不小心地把装满水的水瓶碰倒了。水流满桌面，弄湿了同桌的作业。" },
      { label: "连接", labelEn: "Connect", addition: "结果＋实际后果", additionEn: "Connect the action to its consequence", sentence: "上课时，粗心的志强在课室里不小心地把装满水的水瓶碰倒了。结果，水流满桌面，弄湿了同桌的作业。" },
    ],
  },
  {
    id: "helping",
    title: "帮助老人",
    titleEn: "Helping an elderly person",
    steps: [
      { label: "基本句", labelEn: "Basic sentence", addition: "主语＋动词＋宾语", additionEn: "Subject + verb + object", sentence: "小华扶老奶奶。" },
      { label: "5W+1H", labelEn: "Situation details", addition: "什么时候？放学后", additionEn: "Add when it happened", sentence: "放学后，小华扶老奶奶。" },
      { label: "结构词", labelEn: "Structural words", addition: "把、了", additionEn: "Show the completed action", sentence: "放学后，小华把老奶奶扶了起来。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点", additionEn: "Add where it happened", sentence: "放学后，小华在巴士站把老奶奶扶了起来。" },
      { label: "副词", labelEn: "Adverbs", addition: "小心翼翼地", additionEn: "Add how he helped", sentence: "放学后，小华在巴士站小心翼翼地把老奶奶扶了起来。" },
      { label: "形容词", labelEn: "Adjectives", addition: "热心的", additionEn: "Describe the person", sentence: "放学后，热心的小华在巴士站小心翼翼地把老奶奶扶了起来。" },
      { label: "结果", labelEn: "Result", addition: "写出帮助后的结果", additionEn: "Show what happened after the help", sentence: "放学后，热心的小华在巴士站小心翼翼地把老奶奶扶了起来。老奶奶终于站稳了。" },
      { label: "连接", labelEn: "Connect", addition: "看见……于是……", additionEn: "Connect what he saw to what he did", sentence: "放学后，小华在巴士站看见一位老奶奶跌倒，于是赶紧走上前，小心翼翼地把她扶了起来。老奶奶终于站稳了。" },
    ],
  },
  {
    id: "pencil-case",
    title: "寻找铅笔盒",
    titleEn: "Finding a pencil case",
    steps: [
      { label: "基本句", labelEn: "Basic sentence", addition: "主语＋动词＋宾语", additionEn: "Subject + verb + object", sentence: "小杰翻书包。" },
      { label: "5W+1H", labelEn: "Situation details", addition: "什么时候？早读前", additionEn: "Add when it happened", sentence: "早读前，小杰翻书包。" },
      { label: "结构词", labelEn: "Structural words", addition: "把、了", additionEn: "Show what was affected", sentence: "早读前，小杰把书包翻了一遍。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点", additionEn: "Add where he searched", sentence: "早读前，小杰在课室里把书包翻了一遍。" },
      { label: "副词", labelEn: "Adverbs", addition: "焦急地", additionEn: "Add how he searched", sentence: "早读前，小杰在课室里焦急地把书包翻了一遍。" },
      { label: "形容词", labelEn: "Adjectives", addition: "粗心的、蓝色的", additionEn: "Describe the person and object", sentence: "早读前，粗心的小杰在课室里焦急地把书包翻了一遍，却找不到蓝色的铅笔盒。" },
      { label: "结果", labelEn: "Result", addition: "写出最后发现的情况", additionEn: "Show what he finally discovered", sentence: "早读前，粗心的小杰在课室里焦急地把书包翻了一遍，却找不到蓝色的铅笔盒。他最后在桌子下发现了它。" },
      { label: "连接", labelEn: "Connect", addition: "原来＋真相", additionEn: "Reveal what had happened", sentence: "早读前，粗心的小杰在课室里焦急地四处寻找蓝色的铅笔盒。原来，铅笔盒不知何时掉到了桌子下。" },
    ],
  },
];

export const SENTENCE_LADDER = SENTENCE_LADDERS[0].steps;

export const STRUCTURAL_WORDS: GrammarItem[] = [
  { word: "的", english: "describes a noun / possession", formula: "修饰词＋的＋名词", formulaEn: "Description + 的 + noun", when: "形容人物、地方或东西。", whenEn: "Use before the person, place or thing being described.", example: "顽皮的男孩跑出了教室。", translation: "The mischievous boy ran out of the classroom.", priority: true },
  { word: "地", english: "turns a description into an adverb", formula: "修饰动作的词语＋地＋动词", formulaEn: "Description of manner + 地 + verb", when: "在动作前说明动作是怎样进行的。", whenEn: "Use before a verb to explain how the action was performed.", example: "他飞快地跑回家。", translation: "He ran home quickly.", priority: true },
  { word: "得", english: "describes an action after the verb", formula: "动词＋得＋程度副词＋形容词", formulaEn: "Verb + 得 + degree adverb + adjective", when: "在动作后说明做得怎样。", whenEn: "Use after a verb to describe how well or strongly it was done.", example: "他跑得很快。", translation: "He ran very quickly.", priority: true },
  { word: "得／不", english: "can / cannot achieve a result", formula: "动词＋得／不＋结果", formulaEn: "Verb + 得/不 + result", when: "说明一个动作能不能完成。", whenEn: "Use to show whether an action is possible.", example: "老师说得很清楚，大家都听得懂。", translation: "The teacher spoke clearly, so everyone could understand.", priority: true },
  { word: "了", english: "completed action", formula: "动词＋了＋宾语", formulaEn: "Verb + 了 + object", when: "说明动作已经完成。", whenEn: "Use when an action has been completed.", example: "小明吃了早餐。", translation: "Xiao Ming ate breakfast.", priority: true },
  { word: "了", english: "change of situation", formula: "新情况／变化＋了", formulaEn: "New situation or change + 了", when: "说明情况刚发生变化。", whenEn: "Use when a situation has changed or just started.", example: "天黑了，我们该回家了。", translation: "It became dark, so it was time to go home.", priority: true },
  { word: "着", english: "continuing action or state", formula: "动词＋着", formulaEn: "Verb + 着", when: "说明动作或状态还在继续。", whenEn: "Use when an action or state is continuing.", example: "妹妹拿着雨伞站在门口。", translation: "My sister stood at the door holding an umbrella.", priority: true },
  { word: "过", english: "past experience", formula: "动词＋过＋宾语", formulaEn: "Verb + 过 + object", when: "说明以前曾经有过这个经验。", whenEn: "Use for something experienced before.", example: "我看过这本书。", translation: "I have read this book before.", priority: true },
  { word: "吗", english: "yes–no question", formula: "陈述句＋吗？", formulaEn: "Statement + 吗?", when: "把陈述句变成是非问句。", whenEn: "Use at the end of a yes–no question.", example: "你看见我的钱包吗？", translation: "Did you see my wallet?" },
  { word: "呢", english: "ongoing or follow-up question", formula: "问题＋呢？", formulaEn: "Question + 呢?", when: "询问正在发生的事，或问“你呢”。", whenEn: "Use for an ongoing question or to ask ‘what about…?’", example: "你在找什么呢？", translation: "What are you looking for?" },
  { word: "吧", english: "suggestion / softened instruction", formula: "建议＋吧", formulaEn: "Suggestion + 吧", when: "提出建议或让语气更温和。", whenEn: "Use to make a suggestion or soften an instruction.", example: "我们一起回家吧。", translation: "Let us go home together." },
  { word: "啊／呀", english: "emotion / softened tone", formula: "句子＋啊／呀", formulaEn: "Sentence + 啊/呀", when: "在对话中表达惊讶、提醒或感叹。", whenEn: "Use in dialogue to show surprise, reminder or emotion.", example: "原来是你呀！", translation: "So it was you!" },
  { word: "似的", english: "as if / like", formula: "像＋名词／短语＋似的", formulaEn: "像 + noun or phrase + 似的", when: "用来作比喻。", whenEn: "Use to make a comparison.", example: "雨点像珠子似的落下来。", translation: "The raindrops fell like beads." },
  { word: "所", english: "what / that which", formula: "所＋动词＋的＋名词", formulaEn: "所 + verb + 的 + noun", when: "用于较正式的描述。", whenEn: "Use in more formal descriptions.", example: "我把所看到的事情告诉了老师。", translation: "I told the teacher what I had seen." },
];

export const ADVERBS: GrammarItem[] = [
  { word: "飞快地", english: "quickly", formula: "主语＋飞快地＋动词", formulaEn: "Subject + 飞快地 + verb", when: "说明动作速度很快。", whenEn: "Use when an action is performed very quickly.", example: "小明飞快地跑向校门。", translation: "Xiao Ming ran quickly towards the school gate.", priority: true },
  { word: "小心翼翼地", english: "carefully", formula: "主语＋小心翼翼地＋动词", formulaEn: "Subject + 小心翼翼地 + verb", when: "说明动作谨慎，害怕弄坏或惊动某物。", whenEn: "Use for a careful action that avoids damage or disturbance.", example: "她小心翼翼地捧起受伤的小鸟。", translation: "She carefully lifted the injured bird.", priority: true },
  { word: "兴高采烈地", english: "cheerfully / excitedly", formula: "主语＋兴高采烈地＋动词", formulaEn: "Subject + 兴高采烈地 + verb", when: "人物带着开心、兴奋的心情做事。", whenEn: "Use when someone acts in a cheerful and excited mood.", example: "同学们兴高采烈地走进礼堂。", translation: "The pupils entered the hall cheerfully.", priority: true },
  { word: "怒气冲冲地", english: "angrily", formula: "主语＋怒气冲冲地＋动词", formulaEn: "Subject + 怒气冲冲地 + verb", when: "人物带着强烈的怒气做事。", whenEn: "Use when someone performs an action in great anger.", example: "他怒气冲冲地走出房间。", translation: "He stormed out of the room angrily." },
  { word: "轻轻地", english: "gently / softly", formula: "主语＋轻轻地＋动词", formulaEn: "Subject + 轻轻地 + verb", when: "动作很轻，不想发出太大声音或弄坏东西。", whenEn: "Use for a gentle or quiet action.", example: "妈妈轻轻地关上房门。", translation: "Mother gently closed the bedroom door." },
  { word: "悄悄地", english: "quietly / secretly", formula: "主语＋悄悄地＋动词", formulaEn: "Subject + 悄悄地 + verb", when: "人物不想让别人发现或听见。", whenEn: "Use when someone does not want to be noticed or heard.", example: "弟弟悄悄地走到我的身后。", translation: "My brother quietly walked behind me." },
  { word: "立刻", english: "immediately", formula: "主语＋立刻＋动词", formulaEn: "Subject + 立刻 + verb", when: "动作没有耽搁，马上发生；立刻后面不用“地”。", whenEn: "Use when an action happens without delay; do not add 地 after 立刻.", example: "小明看见老人跌倒，立刻上前帮忙。", translation: "Xiao Ming saw the elderly man fall and immediately went to help.", priority: true },
  { word: "赶紧", english: "hurriedly / quickly", formula: "主语＋赶紧＋动词", formulaEn: "Subject + 赶紧 + verb", when: "情况紧急，需要马上行动；赶紧后面不用“地”。", whenEn: "Use when the situation is urgent; do not add 地 after 赶紧.", example: "天空突然变暗，我们赶紧收好衣服。", translation: "The sky suddenly darkened, so we quickly brought in the clothes." },
  { word: "终于", english: "finally", formula: "主语＋终于＋动词／结果", formulaEn: "Subject + 终于 + verb or result", when: "经过等待、困难或多次尝试后得到结果。", whenEn: "Use when a result comes after waiting, difficulty or repeated effort.", example: "经过多次尝试，他终于成功了。", translation: "After many attempts, he finally succeeded.", priority: true },
  { word: "仍然", english: "still", formula: "主语＋仍然＋动词／形容词", formulaEn: "Subject + 仍然 + verb or adjective", when: "情况没有改变。", whenEn: "Use when a situation remains unchanged.", example: "尽管天气炎热，他仍然坚持练习。", translation: "Although it was hot, he still continued practising." },
  { word: "经常", english: "often", formula: "主语＋经常＋动词", formulaEn: "Subject + 经常 + verb", when: "动作多次发生。", whenEn: "Use for an action that happens often.", example: "他经常利用休息时间阅读。", translation: "He often reads during his breaks." },
  { word: "从来不", english: "never", formula: "主语＋从来不＋动词", formulaEn: "Subject + 从来不 + verb", when: "动作一次也没有发生。", whenEn: "Use when an action never happens.", example: "他从来不随地丢垃圾。", translation: "He never litters." },
  { word: "十分／非常", english: "very / extremely", formula: "主语＋十分／非常＋形容词", formulaEn: "Subject + 十分/非常 + adjective", when: "加强形容词的程度；后面不用“地”。", whenEn: "Use to strengthen an adjective; do not add 地 after it.", example: "发现钱包不见后，他十分焦急。", translation: "He was extremely anxious after discovering that his wallet was missing.", priority: true },
  { word: "越来越", english: "more and more", formula: "主语＋越来越＋形容词", formulaEn: "Subject + 越来越 + adjective", when: "说明程度随着时间不断增加。", whenEn: "Use when a quality increases over time.", example: "雨越下越大，风也越来越强。", translation: "The rain became heavier and the wind grew stronger." },
];

export const ADJECTIVES: GrammarItem[] = [
  { word: "顽皮的", english: "mischievous", formula: "顽皮的＋人物", formulaEn: "顽皮的 + person", when: "形容喜欢恶作剧或不守规矩的人。", whenEn: "Use for a person who plays tricks or behaves naughtily.", example: "顽皮的男孩把球扔向同学。", translation: "The mischievous boy threw the ball towards his classmate.", priority: true },
  { word: "善良的", english: "kind-hearted", formula: "善良的＋人物", formulaEn: "善良的 + person", when: "形容愿意关心和帮助别人的人。", whenEn: "Use for someone who cares about and helps others.", example: "善良的小丽把座位让给老人。", translation: "Kind-hearted Xiao Li gave her seat to the elderly man." },
  { word: "热心的", english: "helpful / enthusiastic", formula: "热心的＋人物", formulaEn: "热心的 + person", when: "形容主动帮助别人或积极参与的人。", whenEn: "Use for someone who readily helps or participates.", example: "热心的邻居主动为我们指路。", translation: "The helpful neighbour offered to show us the way." },
  { word: "粗心的", english: "careless", formula: "粗心的＋人物", formulaEn: "粗心的 + person", when: "形容做事不仔细的人。", whenEn: "Use for someone who does not pay enough attention.", example: "粗心的小明把作业留在家里。", translation: "Careless Xiao Ming left his homework at home.", priority: true },
  { word: "勇敢的", english: "brave", formula: "勇敢的＋人物", formulaEn: "勇敢的 + person", when: "形容面对困难或危险时不退缩的人。", whenEn: "Use for someone who does not back away from difficulty.", example: "勇敢的女孩马上向老师求助。", translation: "The brave girl immediately asked the teacher for help." },
  { word: "焦急的", english: "anxious", formula: "焦急的＋人物／神情", formulaEn: "焦急的 + person or expression", when: "形容非常着急和担心。", whenEn: "Use for someone who is worried and in a hurry.", example: "焦急的母亲四处寻找孩子。", translation: "The anxious mother searched everywhere for her child." },
  { word: "灿烂的", english: "bright / radiant", formula: "灿烂的＋笑容／阳光", formulaEn: "灿烂的 + smile or sunshine", when: "形容笑容或光线明亮美好。", whenEn: "Use for a bright, beautiful smile or light.", example: "她的脸上露出了灿烂的笑容。", translation: "A radiant smile appeared on her face." },
  { word: "沉重的", english: "heavy", formula: "沉重的＋物品／脚步／心情", formulaEn: "沉重的 + object, footsteps or mood", when: "形容重量大，也能形容难过的心情。", whenEn: "Use for physical weight or a sad, heavy mood.", example: "他拖着沉重的脚步走回家。", translation: "He walked home with heavy steps." },
  { word: "拥挤的", english: "crowded", formula: "拥挤的＋地方", formulaEn: "拥挤的 + place", when: "形容一个地方有很多人或东西。", whenEn: "Use for a place filled with many people or things.", example: "他在拥挤的巴士站等候。", translation: "He waited at the crowded bus stop." },
  { word: "湿滑的", english: "wet and slippery", formula: "湿滑的＋地面／道路", formulaEn: "湿滑的 + ground or road", when: "形容地面有水，容易滑倒。", whenEn: "Use for a wet surface on which someone may slip.", example: "他小心地走过湿滑的地面。", translation: "He carefully crossed the wet, slippery ground." },
  { word: "刺耳的", english: "shrill / harsh", formula: "刺耳的＋声音", formulaEn: "刺耳的 + sound", when: "形容令人不舒服的尖锐声音。", whenEn: "Use for a sharp and unpleasant sound.", example: "一阵刺耳的刹车声传来。", translation: "A shrill braking sound rang out." },
  { word: "扑鼻的", english: "fragrant / strong-smelling", formula: "扑鼻的＋香味", formulaEn: "扑鼻的 + fragrance", when: "形容香味迎面而来。", whenEn: "Use when a pleasant smell is immediately noticeable.", example: "厨房里传来扑鼻的香味。", translation: "A delicious fragrance came from the kitchen." },
];

export const PREPOSITIONS: GrammarItem[] = [
  { word: "在", english: "at / in", formula: "主语＋在＋地点＋动作", formulaEn: "Subject + 在 + place + action", when: "说明动作发生在哪里。", whenEn: "Use to show where an action happens.", example: "小明在操场上踢足球。", translation: "Xiao Ming played football on the field.", priority: true },
  { word: "从", english: "from", formula: "主语＋从＋起点＋动作", formulaEn: "Subject + 从 + starting point + action", when: "说明动作从哪里开始。", whenEn: "Use to show where an action begins.", example: "他从书包里拿出课本。", translation: "He took the textbook out of his schoolbag.", priority: true },
  { word: "向", english: "towards / to", formula: "主语＋向＋目标＋动作", formulaEn: "Subject + 向 + target + action", when: "动作朝向某人或某个目标。", whenEn: "Use for an action directed towards a person or target.", example: "他向老师道歉。", translation: "He apologised to the teacher.", priority: true },
  { word: "朝", english: "towards", formula: "主语＋朝＋方向＋动作", formulaEn: "Subject + 朝 + direction + action", when: "强调面对或移动的方向。", whenEn: "Use to emphasise the physical direction of an action.", example: "他朝校门跑去。", translation: "He ran towards the school gate." },
  { word: "往", english: "in the direction of", formula: "主语＋往＋方向＋动作", formulaEn: "Subject + 往 + direction + action", when: "说明移动的方向。", whenEn: "Use to show the direction of movement.", example: "我们往礼堂走去。", translation: "We walked towards the hall." },
  { word: "沿着", english: "along", formula: "主语＋沿着＋路线＋动作", formulaEn: "Subject + 沿着 + route + action", when: "沿着道路、河流或路线移动。", whenEn: "Use when following a road, river or route.", example: "我们沿着小路往前走。", translation: "We walked along the path." },
  { word: "离", english: "away from", formula: "A＋离＋B＋距离", formulaEn: "A + 离 + B + distance", when: "说明两个地方之间的距离。", whenEn: "Use to describe the distance between two places.", example: "学校离我家不远。", translation: "The school is not far from my home." },
  { word: "对", english: "to / towards / regarding", formula: "主语＋对＋人物＋动作／态度", formulaEn: "Subject + 对 + person + action or attitude", when: "动作、感受或态度针对某人。", whenEn: "Use when an action, feeling or attitude is directed at someone.", example: "老师对我们微笑。", translation: "The teacher smiled at us.", priority: true },
  { word: "给", english: "to / for", formula: "主语＋给＋人物＋动作＋宾语", formulaEn: "Subject + 给 + person + action + object", when: "为某人做事或把东西给某人。", whenEn: "Use when doing or giving something to someone.", example: "妈妈给我买了一本书。", translation: "Mother bought a book for me.", priority: true },
  { word: "跟", english: "with", formula: "主语＋跟＋人物＋一起＋动作", formulaEn: "Subject + 跟 + person + 一起 + action", when: "和某人一起做一件事。", whenEn: "Use when doing something with someone.", example: "我跟朋友一起回家。", translation: "I went home with my friend.", priority: true },
  { word: "和", english: "with / and", formula: "主语＋和＋人物＋一起＋动作", formulaEn: "Subject + 和 + person + 一起 + action", when: "连接一起做事的人。", whenEn: "Use to connect people doing something together.", example: "小明和弟弟一起踢足球。", translation: "Xiao Ming played football with his brother." },
  { word: "替", english: "for / on behalf of", formula: "主语＋替＋人物＋动作", formulaEn: "Subject + 替 + person + action", when: "代替别人做一件事。", whenEn: "Use when doing something on another person’s behalf.", example: "我替生病的同学交了功课。", translation: "I handed in the homework for my sick classmate." },
  { word: "为", english: "for", formula: "主语＋为＋人物／事情＋动作", formulaEn: "Subject + 为 + person or cause + action", when: "为某人或某件事采取行动，语气较正式。", whenEn: "Use for an action done for a person or cause; it is more formal.", example: "同学们为慈善活动筹款。", translation: "The pupils raised funds for charity." },
  { word: "把", english: "marks the affected object", formula: "主语＋把＋宾语＋动词＋结果／地点", formulaEn: "Subject + 把 + object + verb + result or place", when: "强调一个东西被移动、改变或处理后的结果。", whenEn: "Use when an object is moved, changed or affected and its result matters.", example: "小明把功课做完了。", translation: "Xiao Ming completed his homework.", priority: true },
  { word: "被", english: "was…by / passive", formula: "承受者＋被＋动作者＋动词＋结果", formulaEn: "Receiver + 被 + doer + verb + result", when: "把承受动作的人或东西放在句首。", whenEn: "Use when focusing on the person or object receiving the action.", example: "杯子被弟弟打破了。", translation: "The cup was broken by my brother.", priority: true },
  { word: "用", english: "with / using", formula: "主语＋用＋工具／方法＋动作", formulaEn: "Subject + 用 + tool or method + action", when: "说明完成动作所使用的工具或方法。", whenEn: "Use to state the tool or method used.", example: "他用抹布把桌子擦干净。", translation: "He cleaned the table with a cloth." },
  { word: "比", english: "than", formula: "A＋比＋B＋形容词", formulaEn: "A + 比 + B + adjective", when: "比较两个人或东西。", whenEn: "Use to compare two people or things.", example: "弟弟比我跑得快。", translation: "My brother runs faster than I do." },
  { word: "关于", english: "about", formula: "关于＋话题＋说明", formulaEn: "关于 + topic + information", when: "介绍接下来要讨论的话题。", whenEn: "Use to introduce the topic being discussed.", example: "关于这件事，我有不同的看法。", translation: "I have a different opinion about this matter." },
  { word: "对于", english: "regarding / as for", formula: "对于＋话题＋主语＋看法", formulaEn: "对于 + topic + subject + comment", when: "针对某个话题发表看法。", whenEn: "Use when giving an opinion about a topic.", example: "对于自己的错误，小明感到十分后悔。", translation: "Xiao Ming deeply regretted his mistake." },
  { word: "按照", english: "according to", formula: "按照＋指示／规则＋动作", formulaEn: "按照 + instructions or rules + action", when: "依照指示、规则或安排做事。", whenEn: "Use when following instructions, rules or an arrangement.", example: "我们按照老师的指示完成任务。", translation: "We completed the task according to the teacher’s instructions." },
  { word: "根据", english: "based on / according to", formula: "根据＋资料／证据＋结论", formulaEn: "根据 + information or evidence + conclusion", when: "根据资料作出判断或结论。", whenEn: "Use when a conclusion is based on information or evidence.", example: "根据天气预报，下午可能会下雨。", translation: "According to the weather forecast, it may rain in the afternoon." },
];

const c = (word: string, english: string, formula: string, formulaEn: string, when: string, whenEn: string, example: string, translation: string, priority = false): GrammarItem => ({ word, english, formula, formulaEn, when, whenEn, example, translation, priority });

export const CONNECTOR_GROUPS: ConnectorGroup[] = [
  { id: "cause", title: "原因与结果", titleEn: "Cause & Result", colour: "blue", items: [
    c("因为……所以……", "because…therefore", "因为＋原因，所以＋结果", "因为 + cause, 所以 + result", "先给原因，再写直接结果。", "Give a reason followed by its direct re…202322 tokens truncated…{
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.3.tgz",
      "integrity": "sha512-dDk0X87T7mI6U3K9VjWtHOXqwAMJBNN2r7bejDsc+j03SEjtD9HrOl8gVFByeM0aJksoUuUVU9TBaZa2rgj0oA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-arm": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.3.tgz",
      "integrity": "sha512-s6nPv2QkSupJwLYyfS+gwdirm0ukyTFNl3KTgZEAiJDd+iHZcbTPPcWCcRYH+WlNbwChgH2QkE9NSlNrMT8Gfw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.3.tgz",
      "integrity": "sha512-sZOuFz/xWnZ4KH3YfFrKCf1WyPZHakVzTiqji3WDc0BCl2kBwiJLCXpzLzUBLgmp4veFZdvN5ChW4Eq/8Fc2Fg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-ia32": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.3.tgz",
      "integrity": "sha512-yGlQYjdxtLdh0a3jHjuwOrxQjOZYD/C9PfdbgJJF3TIZWnm/tMd/RcNiLngiu4iwcBAOezdnSLAwQDPqTmtTYg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-loong64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.3.tgz",
      "integrity": "sha512-WO60Sn8ly3gtzhyjATDgieJNet/KqsDlX5nRC5Y3oTFcS1l0KWba+SEa9Ja1GfDqSF1z6hif/SkpQJbL63cgOA==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.3.tgz",
      "integrity": "sha512-APsymYA6sGcZ4pD6k+UxbDjOFSvPWyZhjaiPyl/f79xKxwTnrn5QUnXR5prvetuaSMsb4jgeHewIDCIWljrSxw==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.3.tgz",
      "integrity": "sha512-eizBnTeBefojtDb9nSh4vvVQ3V9Qf9Df01PfawPcRzJH4gFSgrObw+LveUyDoKU3kxi5+9RJTCWlj4FjYXVPEA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.3.tgz",
      "integrity": "sha512-3Emwh0r5wmfm3ssTWRQSyVhbOHvqegUDRd0WhmXKX2mkHJe1SFCMJhagUleMq+Uci34wLSipf8Lagt4LlpRFWQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-s390x": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.3.tgz",
      "integrity": "sha512-pBHUx9LzXWBc7MFIEEL0yD/ZVtNgLytvx60gES28GcWMqil8ElCYR4kvbV2BDqsHOvVDRrOxGySBM9Fcv744hw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/linux-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.3.tgz",
      "integrity": "sha512-Czi8yzXUWIQYAtL/2y6vogER8pvcsOsk5cpwL4Gk5nJqH5UZiVByIY8Eorm5R13gq+DQKYg0+JyQoytLQas4dA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.3.tgz",
      "integrity": "sha512-sDpk0RgmTCR/5HguIZa9n9u+HVKf40fbEUt+iTzSnCaGvY9kFP0YKBWZtJaraonFnqef5SlJ8/TiPAxzyS+UoA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.3.tgz",
      "integrity": "sha512-P14lFKJl/DdaE00LItAukUdZO5iqNH7+PjoBm+fLQjtxfcfFE20Xf5CrLsmZdq5LFFZzb5JMZ9grUwvtVYzjiA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.3.tgz",
      "integrity": "sha512-AIcMP77AvirGbRl/UZFTq5hjXK+2wC7qFRGoHSDrZ5v5b8DK/GYpXW3CPRL53NkvDqb9D+alBiC/dV0Fb7eJcw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.3.tgz",
      "integrity": "sha512-DnW2sRrBzA+YnE70LKqnM3P+z8vehfJWHXECbwBmH/CU51z6FiqTQTHFenPlHmo3a8UgpLyH3PT+87OViOh1AQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.3.tgz",
      "integrity": "sha512-NinAEgr/etERPTsZJ7aEZQvvg/A6IsZG/LgZy+81wON2huV7SrK3e63dU0XhyZP4RKGyTm7aOgmQk0bGp0fy2g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/sunos-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.3.tgz",
      "integrity": "sha512-PanZ+nEz+eWoBJ8/f8HKxTTD172SKwdXebZ0ndd953gt1HRBbhMsaNqjTyYLGLPdoWHy4zLU7bDVJztF5f3BHA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/win32-arm64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.3.tgz",
      "integrity": "sha512-B2t59lWWYrbRDw/tjiWOuzSsFh1Y/E95ofKz7rIVYSQkUYBjfSgf6oeYPNWHToFRr2zx52JKApIcAS/D5TUBnA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/win32-ia32": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.3.tgz",
      "integrity": "sha512-QLKSFeXNS8+tHW7tZpMtjlNb7HKau0QDpwm49u0vUp9y1WOF+PEzkU84y9GqYaAVW8aH8f3GcBck26jh54cX4Q==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/@esbuild/win32-x64": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.3.tgz",
      "integrity": "sha512-4uJGhsxuptu3OcpVAzli+/gWusVGwZZHTlS63hh++ehExkVT8SgiEf7/uC/PclrPPkLhZqGgCTjd0VWLo6xMqA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrangler/node_modules/esbuild": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.3.tgz",
      "integrity": "sha512-8VwMnyGCONIs6cWue2IdpHxHnAjzxnw2Zr7MkVxB2vjmQ2ivqGFb4LEG3SMnv0Gb2F/G/2yA8zUaiL1gywDCCg==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.3",
        "@esbuild/android-arm": "0.27.3",
        "@esbuild/android-arm64": "0.27.3",
        "@esbuild/android-x64": "0.27.3",
        "@esbuild/darwin-arm64": "0.27.3",
        "@esbuild/darwin-x64": "0.27.3",
        "@esbuild/freebsd-arm64": "0.27.3",
        "@esbuild/freebsd-x64": "0.27.3",
        "@esbuild/linux-arm": "0.27.3",
        "@esbuild/linux-arm64": "0.27.3",
        "@esbuild/linux-ia32": "0.27.3",
        "@esbuild/linux-loong64": "0.27.3",
        "@esbuild/linux-mips64el": "0.27.3",
        "@esbuild/linux-ppc64": "0.27.3",
        "@esbuild/linux-riscv64": "0.27.3",
        "@esbuild/linux-s390x": "0.27.3",
        "@esbuild/linux-x64": "0.27.3",
        "@esbuild/netbsd-arm64": "0.27.3",
        "@esbuild/netbsd-x64": "0.27.3",
        "@esbuild/openbsd-arm64": "0.27.3",
        "@esbuild/openbsd-x64": "0.27.3",
        "@esbuild/openharmony-arm64": "0.27.3",
        "@esbuild/sunos-x64": "0.27.3",
        "@esbuild/win32-arm64": "0.27.3",
        "@esbuild/win32-ia32": "0.27.3",
        "@esbuild/win32-x64": "0.27.3"
      }
    },
    "node_modules/ws": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.0.tgz",
      "integrity": "sha512-8VbfWfHLbbwu3+N6OKsOMpBdT4kXPDDB9cJk2bJ6mh9ucxdlnNvH1e+roYkKmN9Nxw2yjz7VzeO9oOz2zJ04Pw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yoga-layout": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/yoga-layout/-/yoga-layout-3.2.1.tgz",
      "integrity": "sha512-0LPOt3AxKqMdFBZA3HBAt/t/8vIKq7VaQYbuA8WxCgung+p9TVyKRYdpvCb80HcdTN2NkbIKbhNwKUfm3tQywQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/youch": {
      "version": "4.1.0-beta.10",
      "resolved": "https://registry.npmjs.org/youch/-/youch-4.1.0-beta.10.tgz",
      "integrity": "sha512-rLfVLB4FgQneDr0dv1oddCVZmKjcJ6yX6mS4pU82Mq/Dt9a3cLZQ62pDBL4AUO+uVrCvtWz3ZFUL2HFAFJ/BXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@poppinss/colors": "^4.1.5",
        "@poppinss/dumper": "^0.6.4",
        "@speed-highlight/core": "^1.2.7",
        "cookie": "^1.0.2",
        "youch-core": "^0.3.3"
      }
    },
    "node_modules/youch-core": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/youch-core/-/youch-core-0.3.3.tgz",
      "integrity": "sha512-ho7XuGjLaJ2hWHoK8yFnsUGy2Y5uDpqSTq1FkHLK4/oqKtyUU1AFbOOxY4IpC9f0fTLjwYbslUz0Po5BpD1wrA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@poppinss/exception": "^1.2.2",
        "error-stack-parser-es": "^1.0.5"
      }
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}
