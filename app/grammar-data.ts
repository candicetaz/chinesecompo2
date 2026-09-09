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
      { label: "结构词", labelEn: "Structural words", addition: "把、了", additionEn: "Add 把 and 了", sentence: "小明把球扔了出去。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点；向＋目标", additionEn: "Add place, direction or target", sentence: "小明在操场上把球扔向志强。" },
      { label: "副词", labelEn: "Adverbs", addition: "怎样＋地＋动词", additionEn: "Add how the action was done", sentence: "小明在操场上用力地把球扔向志强。" },
      { label: "形容词", labelEn: "Adjectives", addition: "形容词＋的＋名词", additionEn: "Describe a person or thing", sentence: "顽皮的小明在操场上用力地把球扔向志强。" },
      { label: "结果", labelEn: "Result", addition: "写清楚谁／什么造成什么结果", additionEn: "Name the subject and show the result clearly", sentence: "顽皮的小明在操场上用力地把球扔向志强。球砸中了志强的头。" },
      { label: "连接", labelEn: "Connect", addition: "不料＋意外结果", additionEn: "Link an unexpected result", sentence: "下课时，顽皮的小明在操场上用力地把球扔向志强。不料，球砸中了志强的头。" },
    ],
  },
  {
    id: "wallet",
    title: "拾金不昧",
    titleEn: "Returning a wallet",
    steps: [
      { label: "基本句", labelEn: "Basic sentence", addition: "主语＋动词＋宾语", additionEn: "Subject + verb + object", sentence: "小丽捡钱包。" },
      { label: "结构词", labelEn: "Structural words", addition: "了、一个", additionEn: "Show a completed action", sentence: "小丽捡到了一个钱包。" },
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
      { label: "结构词", labelEn: "Structural words", addition: "把、了", additionEn: "Show what was affected", sentence: "志强把水瓶碰倒了。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点", additionEn: "Add where it happened", sentence: "志强在课室里把水瓶碰倒了。" },
      { label: "副词", labelEn: "Adverbs", addition: "不小心地", additionEn: "Add how it happened", sentence: "志强在课室里不小心地把水瓶碰倒了。" },
      { label: "形容词", labelEn: "Adjectives", addition: "粗心的、装满水的", additionEn: "Describe the person and object", sentence: "粗心的志强在课室里不小心地把装满水的水瓶碰倒了。" },
      { label: "结果", labelEn: "Result", addition: "写清楚造成的后果", additionEn: "Show the consequence clearly", sentence: "粗心的志强在课室里不小心地把装满水的水瓶碰倒了。水流满桌面，弄湿了同桌的作业。" },
      { label: "连接", labelEn: "Connect", addition: "结果＋实际后果", additionEn: "Connect the action to its consequence", sentence: "粗心的志强在课室里不小心地把装满水的水瓶碰倒了。结果，水流满桌面，弄湿了同桌的作业。" },
    ],
  },
  {
    id: "helping",
    title: "帮助老人",
    titleEn: "Helping an elderly person",
    steps: [
      { label: "基本句", labelEn: "Basic sentence", addition: "主语＋动词＋宾语", additionEn: "Subject + verb + object", sentence: "小华扶老奶奶。" },
      { label: "结构词", labelEn: "Structural words", addition: "把、了", additionEn: "Show the completed action", sentence: "小华把老奶奶扶了起来。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点", additionEn: "Add where it happened", sentence: "小华在巴士站把老奶奶扶了起来。" },
      { label: "副词", labelEn: "Adverbs", addition: "小心翼翼地", additionEn: "Add how he helped", sentence: "小华在巴士站小心翼翼地把老奶奶扶了起来。" },
      { label: "形容词", labelEn: "Adjectives", addition: "热心的", additionEn: "Describe the person", sentence: "热心的小华在巴士站小心翼翼地把老奶奶扶了起来。" },
      { label: "结果", labelEn: "Result", addition: "写出帮助后的结果", additionEn: "Show what happened after the help", sentence: "热心的小华在巴士站小心翼翼地把老奶奶扶了起来。老奶奶终于站稳了。" },
      { label: "连接", labelEn: "Connect", addition: "看见……于是……", additionEn: "Connect what he saw to what he did", sentence: "小华看见一位老奶奶跌倒在巴士站旁，于是赶紧走上前，小心翼翼地把她扶了起来。老奶奶终于站稳了。" },
    ],
  },
  {
    id: "pencil-case",
    title: "寻找铅笔盒",
    titleEn: "Finding a pencil case",
    steps: [
      { label: "基本句", labelEn: "Basic sentence", addition: "主语＋动词＋宾语", additionEn: "Subject + verb + object", sentence: "小杰翻书包。" },
      { label: "结构词", labelEn: "Structural words", addition: "把、了", additionEn: "Show what was affected", sentence: "小杰把书包翻了一遍。" },
      { label: "介词", labelEn: "Prepositions", addition: "在＋地点", additionEn: "Add where he searched", sentence: "小杰在课室里把书包翻了一遍。" },
      { label: "副词", labelEn: "Adverbs", addition: "焦急地", additionEn: "Add how he searched", sentence: "小杰在课室里焦急地把书包翻了一遍。" },
      { label: "形容词", labelEn: "Adjectives", addition: "粗心的、蓝色的", additionEn: "Describe the person and object", sentence: "粗心的小杰在课室里焦急地把书包翻了一遍，却找不到蓝色的铅笔盒。" },
      { label: "结果", labelEn: "Result", addition: "写出最后发现的情况", additionEn: "Show what he finally discovered", sentence: "粗心的小杰在课室里焦急地把书包翻了一遍，却找不到蓝色的铅笔盒。他最后在桌子下发现了它。" },
      { label: "连接", labelEn: "Connect", addition: "原来＋真相", additionEn: "Reveal what had happened", sentence: "粗心的小杰在课室里焦急地四处寻找蓝色的铅笔盒。原来，铅笔盒不知何时掉到了桌子下。" },
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
    c("因为……所以……", "because…therefore", "因为＋原因，所以＋结果", "因为 + cause, 所以 + result", "先给原因，再写直接结果。", "Give a reason followed by its direct result.", "因为下着大雨，所以比赛被取消了。", "Because it was raining heavily, the match was cancelled.", true),
    c("由于……因此……", "due to…therefore", "由于＋原因，因此＋结果", "由于 + cause, 因此 + result", "用于较正式的原因和结果。", "Use for a more formal cause-and-effect relationship.", "由于雨势越来越大，因此比赛被迫暂停。", "Due to the worsening rain, the match was suspended."),
    c("既然……就……", "since…then", "既然＋已知事实，就＋决定", "既然 + known fact, 就 + decision", "事实已经知道，再说明应该怎样做。", "Use when a fact is known and you state what should happen next.", "既然你知道错了，就应该道歉。", "Since you know you were wrong, you should apologise.", true),
    c("所以", "so / therefore", "原因，所以＋结果", "Cause, 所以 + result", "说明一个原因带来的直接结果。", "Use for the direct result of a reason.", "天色已晚，所以我们决定回家。", "It was getting late, so we decided to go home.", true),
    c("于是", "so / thereupon", "情况，于是＋下一步行动", "Situation, 于是 + next action", "某种情况使人物采取下一步行动。", "Use when a situation causes someone to take the next action.", "小明看见老人需要帮助，于是立刻走上前。", "Xiao Ming saw that the elderly man needed help, so he stepped forward.", true),
    c("因此", "therefore", "原因，因此＋结论", "Cause, 因此 + conclusion", "用于较正式、合乎逻辑的结论。", "Use for a formal or logical conclusion.", "塑料难以分解，因此我们应该减少使用。", "Plastic is difficult to break down; therefore, we should reduce its use."),
    c("结果", "as a result", "行动，结果＋后果", "Action, 结果 + consequence", "说明行动最后造成的结果，常用于不好的后果。", "Use for the actual outcome, often an unfortunate one.", "他没有留意脚下，结果滑倒了。", "He did not watch his step. As a result, he slipped.", true),
  ]},
  { id: "unexpected", title: "意外与发现", titleEn: "Unexpected Events & Discovery", colour: "coral", items: [
    c("不料", "unexpectedly", "原本情况，不料＋意外事件", "Expected situation, 不料 + unexpected event", "结果与原先的预料相反。", "Use when the next event is contrary to what was expected.", "他以为足球会停下来，不料足球滚上了马路。", "He thought the ball would stop. Unexpectedly, it rolled onto the road.", true),
    c("没想到", "to one’s surprise", "情况，没想到＋意外结果", "Situation, 没想到 + surprise", "人物没有预料到接下来发生的事。", "Use when a person did not expect what happened next.", "他打开书包，没想到功课竟然不见了。", "He opened his schoolbag. To his surprise, his homework was missing.", true),
    c("谁知", "who would have known", "原本情况，谁知＋意外事件", "Expected situation, 谁知 + unexpected event", "用于较有戏剧性的意外转折。", "Use for a more dramatic unexpected turn.", "他刚走出家门，谁知又下起雨来。", "He had just left home when it started raining again."),
    c("竟然", "unexpectedly / actually", "主语＋竟然＋意外行动", "Subject + 竟然 + surprising action", "强调事情令人惊讶。", "Use to emphasise that an event is surprising.", "平时胆小的他竟然主动上前帮忙。", "Surprisingly, he stepped forward to help."),
    c("原来", "it turned out that", "观察，原来＋真相", "Observation, 原来 + truth", "终于发现事情的真相或原因。", "Use when the truth or explanation is finally discovered.", "我打开门一看，原来是弟弟回来了。", "I opened the door and discovered that my brother had returned."),
  ]},
  { id: "condition", title: "条件", titleEn: "Conditions", colour: "green", items: [
    c("如果……就……", "if…then", "如果＋条件，就＋结果", "如果 + condition, 就 + result", "提出一个可能的条件和它的结果。", "Use for a possible condition and its result.", "如果你认真检查，就能发现错误。", "If you check carefully, you will find the mistake.", true),
    c("假如……就……", "supposing…then", "假如＋假设，就＋结果", "假如 + imagined condition, 就 + result", "提出想象或假设的情况。", "Use for an imagined or hypothetical situation.", "假如明天下雨，我们就留在家里。", "If it rains tomorrow, we will stay at home."),
    c("要是……就……", "if…then", "要是＋条件，就＋结果", "要是 + condition, 就 + result", "如果的口语形式，适合人物对话。", "A conversational form of 如果, useful in dialogue.", "要是你需要帮助，就告诉我。", "If you need help, tell me."),
    c("只要……就……", "as long as…", "只要＋足够条件，就＋结果", "只要 + sufficient condition, 就 + result", "这个条件一满足，结果便可能发生。", "Use when one condition is enough to produce the result.", "只要认真练习，就能取得进步。", "As long as you practise seriously, you can improve.", true),
    c("只有……才……", "only if…", "只有＋必要条件，才＋结果", "只有 + necessary condition, 才 + result", "必须满足这个条件，结果才会发生。", "Use when the condition is necessary for the result.", "只有认真检查，才能减少错误。", "Only by checking carefully can you reduce mistakes.", true),
    c("除非……否则……", "unless…otherwise", "除非＋例外，否则＋结果", "除非 + exception, 否则 + result", "说明唯一的例外和不这样做的后果。", "Use for the only exception and what happens without it.", "除非雨停了，否则比赛无法继续。", "Unless the rain stops, the match cannot continue."),
    c("即使……也……", "even if…still", "即使＋困难，也＋不变结果", "即使 + difficulty, 也 + unchanged result", "即使出现困难，结果或决定也不改变。", "Use when a result remains unchanged despite difficulty.", "即使遇到困难，他也不会放弃。", "Even if he faces difficulties, he will not give up.", true),
    c("无论……都……", "no matter…", "无论＋任何情况，都＋结果", "无论 + any situation, 都 + result", "结果适用于所有情况。", "Use when the result applies to every situation.", "无论遇到什么问题，我们都应该保持冷静。", "No matter what problem we face, we should remain calm."),
    c("不管……都……", "no matter…", "不管＋任何情况，都＋结果", "不管 + any situation, 都 + result", "与无论相近，语气较口语化。", "Similar to 无论 but more conversational.", "不管天气多热，他都坚持练习。", "No matter how hot it was, he continued practising."),
  ]},
  { id: "contrast", title: "转折与对比", titleEn: "Contrast", colour: "purple", items: [
    c("虽然……但是……", "although…however", "虽然＋情况，但是＋相反情况", "虽然 + situation, 但是 + contrast", "两个意思互相对比。", "Use when two ideas contrast with each other.", "虽然他很害怕，但是他还是上前帮忙。", "Although he was frightened, he still stepped forward to help.", true),
    c("尽管……可是……", "although…nevertheless", "尽管＋情况，可是＋相反情况", "尽管 + situation, 可是 + contrast", "与虽然……但是相近，语气较正式。", "Similar to 虽然…但是, but slightly more formal.", "尽管天气炎热，可是同学们仍然认真练习。", "Although it was hot, the pupils continued practising."),
    c("但是", "but / however", "想法一，但是＋相反想法", "First idea, 但是 + contrast", "连接两个相反或不同的意思。", "Use to introduce a contrasting idea.", "我想帮助他，但是不知道该怎么做。", "I wanted to help him, but I did not know what to do.", true),
    c("可是", "but", "想法一，可是＋相反想法", "First idea, 可是 + contrast", "与但是相近，较适合对话。", "Similar to 但是 and slightly more conversational.", "我已经尽力了，可是还是没有成功。", "I tried my best, but I still did not succeed."),
    c("然而", "however", "想法一，然而＋相反想法", "First idea, 然而 + contrast", "用于较正式的书面转折。", "Use for a formal contrast in writing.", "大家以为他会放弃，然而他坚持到了最后。", "Everyone thought he would give up. However, he persevered."),
    c("不过", "however / but", "想法一，不过＋补充限制", "First idea, 不过 + qualification", "加入较小或较温和的转折。", "Use for a smaller or gentler contrast.", "这个办法很好，不过需要大家合作。", "This is a good method, but it requires cooperation."),
    c("反而", "instead / on the contrary", "原先预料，反而＋相反结果", "Expected idea, 反而 + opposite result", "实际结果与预料完全相反。", "Use when the actual result is opposite to what was expected.", "他不但没有生气，反而安慰了我。", "Instead of becoming angry, he comforted me."),
  ]},
  { id: "addition", title: "递进与补充", titleEn: "Addition & Progression", colour: "yellow", items: [
    c("不但……而且……", "not only…but also", "不但＋第一点，而且＋更进一步", "不但 + first point, 而且 + stronger point", "第二个内容比第一个更进一步。", "Use when the second point adds stronger information.", "他不但承认了错误，而且主动道歉。", "He not only admitted his mistake but also apologised.", true),
    c("不仅……还……", "not only…but also", "不仅＋第一点，还＋补充内容", "不仅 + first point, 还 + additional point", "补充另一个相关的优点或影响。", "Use to add another related point.", "阅读不仅能增加知识，还能提高写作能力。", "Reading not only increases knowledge but also improves writing."),
    c("既……又……", "both…and", "既＋特点一，又＋特点二", "既 + first quality, 又 + second quality", "同一个人或东西有两个特点。", "Use when one person or thing has two qualities.", "她既善良又有耐心。", "She is both kind and patient.", true),
    c("又……又……", "both…and", "又＋特点一，又＋特点二", "又 + first quality, 又 + second quality", "连接两个简单的特点或动作。", "Use to connect two simple qualities or actions.", "这个书包又大又重。", "This schoolbag is both large and heavy."),
    c("除了……还……", "besides…also", "除了＋第一项，还＋补充项", "除了 + first item, 还 + additional item", "在已有内容之外再补充。", "Use to add something beyond what was already mentioned.", "除了小明，其他同学也来帮忙。", "Besides Xiao Ming, the other pupils also helped."),
    c("而且", "moreover", "内容一，而且＋内容二", "First point, 而且 + additional point", "补充另一个相关内容。", "Use to add another related point.", "他做事认真，而且乐于助人。", "He works seriously and is also helpful."),
    c("甚至", "even", "内容，甚至＋更强内容", "Point, 甚至 + more extreme point", "加入更令人意外或程度更高的内容。", "Use to add a more surprising or extreme point.", "他忙得忘了吃午餐，甚至错过了休息时间。", "He was so busy that he forgot lunch and even missed his break."),
  ]},
  { id: "sequence", title: "顺序与时间", titleEn: "Sequence & Time", colour: "teal", items: [
    c("首先", "firstly", "首先＋第一点", "首先 + first point", "开始列出步骤或观点。", "Use to introduce the first step or point.", "首先，我们必须了解事情的经过。", "First, we must understand what happened.", true),
    c("先", "first", "先＋第一个动作", "先 + first action", "说明最先进行的动作。", "Use for the first action in a sequence.", "小明先把老人扶起来。", "Xiao Ming first helped the elderly man up.", true),
    c("接着", "next", "接着＋下一个动作", "接着 + next action", "紧接着第一件事发生。", "Use for the action immediately following the first.", "接着，他帮老人捡起物品。", "Next, he picked up the man’s belongings.", true),
    c("然后", "then", "然后＋接下来的动作", "然后 + following action", "一般地说明接下来发生什么。", "Use for the following action.", "然后，他陪老人到一旁休息。", "Then, he accompanied the man to rest.", true),
    c("随后", "afterwards", "随后＋较后的动作", "随后 + later action", "与然后相近，语气较正式。", "Similar to 然后 but slightly more formal.", "随后，工作人员赶到了现场。", "Afterwards, the staff arrived."),
    c("最后", "finally", "最后＋最终动作／结果", "最后 + final action or result", "说明事情的最后一步或结局。", "Use for the final action or outcome.", "最后，老人向小明道谢。", "Finally, the elderly man thanked Xiao Ming.", true),
    c("起初", "at first", "起初＋原本情况", "起初 + original situation", "介绍事情开始时的情况。", "Use to describe the original situation.", "起初，小明不愿意承认错误。", "At first, Xiao Ming refused to admit his mistake."),
    c("后来", "later", "后来＋之后的变化", "后来 + later change", "一段时间后发生新的情况。", "Use for something that happened after some time.", "后来，他终于明白了事情的严重性。", "Later, he understood the seriousness of the matter."),
    c("终于", "finally / eventually", "经过等待／努力，终于＋结果", "After waiting or effort, 终于 + result", "经过时间或努力后得到结果。", "Use when a result happens after waiting or effort.", "经过多次尝试，他终于成功了。", "After many attempts, he finally succeeded."),
    c("当……时", "when", "当＋事情＋时，主要事情", "当 + event + 时, main event", "一个动作在另一个事件发生时出现。", "Use when one event happens during another.", "当我准备离开时，突然听见一声巨响。", "When I was preparing to leave, I heard a loud noise.", true),
    c("一……就……", "as soon as", "一＋动作一，就＋动作二", "一 + first action, 就 + immediate action", "第二个动作紧接着第一个动作发生。", "Use when the second action follows immediately.", "他一听见铃声，就冲出了教室。", "As soon as he heard the bell, he rushed out.", true),
    c("先……再……", "first…then", "先＋动作一，再＋动作二", "先 + first action, 再 + second action", "两个有计划的动作依次发生。", "Use for two planned actions in order.", "我们先完成作业，再出去玩。", "We will finish our homework first and then go out."),
    c("直到……才……", "not until…then", "直到＋较晚时间，才＋结果", "直到 + later point, 才 + result", "结果到了较晚的时候才发生。", "Use when a result happens only at a later point.", "直到老师解释后，他才明白自己的错误。", "He did not understand his mistake until the teacher explained it."),
    c("自从……以后……", "ever since", "自从＋过去事件＋以后，持续变化", "自从 + past event + 以后, continuing change", "过去一件事开始后，情况一直持续。", "Use for a continuing change beginning from a past event.", "自从那件事以后，他再也不粗心了。", "Ever since that incident, he has not been careless again."),
  ]},
  { id: "choice", title: "选择与并列", titleEn: "Choice & Parallel Actions", colour: "pink", items: [
    c("或者", "or", "选择一＋或者＋选择二", "Choice A + 或者 + choice B", "在陈述句中列出选择。", "Use for alternatives in a statement.", "我们可以乘巴士或者步行回家。", "We can take the bus or walk home."),
    c("还是", "or", "选择一＋还是＋选择二？", "Choice A + 还是 + choice B?", "在问句中请别人选择。", "Use for alternatives in a question.", "你想喝水还是果汁？", "Would you like water or juice?"),
    c("不是……就是……", "either…or", "不是＋可能一，就是＋可能二", "不是 + possibility A, 就是 + possibility B", "说明只有两个可能。", "Use when there are two likely possibilities.", "他不是在看书，就是在做功课。", "He is either reading or doing his homework.", true),
    c("要么……要么……", "either…or", "要么＋选择一，要么＋选择二", "要么 + choice A, 要么 + choice B", "必须在两个行动中选择一个。", "Use when choosing between two actions.", "我们要么现在出发，要么取消计划。", "We must either leave now or cancel the plan."),
    c("与其……不如……", "rather than…better to", "与其＋较差选择，不如＋较好选择", "与其 + weaker choice, 不如 + better choice", "比较两个做法，并推荐较好的一个。", "Use to compare choices and recommend the better one.", "与其在这里抱怨，不如想办法解决问题。", "Rather than complain, it is better to find a solution."),
    c("一边……一边……", "while…at the same time", "一边＋动作一，一边＋动作二", "一边 + action A, 一边 + action B", "两个动作同时进行。", "Use when two actions happen at the same time.", "他一边走路，一边和朋友谈话。", "He talked to his friend while walking.", true),
    c("有的……有的……", "some…others…", "有的＋人物／动作，有的＋人物／动作", "有的 + some, 有的 + others", "不同的人进行不同的动作。", "Use when different people perform different actions.", "有的同学打扫课室，有的同学排列桌椅。", "Some pupils cleaned while others arranged the desks."),
    c("一会儿……一会儿……", "one moment…another…", "一会儿＋情况一，一会儿＋情况二", "一会儿 + state A, 一会儿 + state B", "情况不断交替变化。", "Use when something changes repeatedly.", "天气一会儿晴，一会儿下雨。", "One moment it was sunny; the next, it was raining."),
    c("越……越……", "the more…the more", "越＋变化一，越＋变化二", "越 + change A, 越 + change B", "两个变化一起增加。", "Use when one change increases together with another.", "雨越下越大。", "The rain became heavier and heavier."),
  ]},
  { id: "purpose", title: "目的与总结", titleEn: "Purpose & Conclusion", colour: "navy", items: [
    c("为了", "in order to", "为了＋目的，采取行动", "为了 + purpose, action taken", "解释人物为什么采取某个行动。", "Use to explain the purpose of an action.", "为了按时完成任务，我们决定分工合作。", "To complete the task on time, we divided the work.", true),
    c("以便", "so that", "行动，以便＋预期结果", "Action, 以便 + intended result", "说明行动希望达到的结果。", "Use for the intended result of an action.", "我把重点记录下来，以便日后复习。", "I recorded the key points so that I could revise later."),
    c("免得", "so as to avoid", "行动，免得＋不想要的结果", "Action, 免得 + unwanted result", "说明想避免发生什么。", "Use for an unwanted result someone wants to prevent.", "你应该带上雨伞，免得被雨淋湿。", "Bring an umbrella to avoid getting wet."),
    c("例如", "for example", "观点，例如＋例子", "Point, 例如 + example", "正式地举出例子。", "Use to give a formal example.", "我们应该减少使用一次性用品，例如塑料吸管。", "We should reduce disposable items, such as plastic straws."),
    c("比如", "for example", "观点，比如＋例子", "Point, 比如 + example", "与例如相近，语气较口语化。", "Similar to 例如 but more conversational.", "我喜欢户外活动，比如游泳和骑脚踏车。", "I enjoy outdoor activities such as swimming and cycling."),
    c("也就是说", "in other words", "内容，也就是说＋重新解释", "Idea, 也就是说 + restatement", "用另一种方法解释前面的意思。", "Use to explain an idea in another way.", "他没有完成任务，也就是说，我们必须重新安排工作。", "He did not finish the task. In other words, we must rearrange the work."),
    c("总之", "in conclusion / in short", "总之＋总结", "总之 + summary", "在结尾概括主要信息。", "Use to summarise the main message.", "总之，保护环境是每个人的责任。", "In conclusion, protecting the environment is everyone’s responsibility.", true),
    c("由此可见", "from this, we can see that", "由此可见＋结论", "由此可见 + conclusion", "根据事情或证据得出结论。", "Use to draw a conclusion from an event or evidence.", "由此可见，一个小小的善举也能帮助别人。", "From this, we can see that even a small kind act can help others."),
  ]},
];

export const CONNECTOR_CHOOSER = [
  ["Give a reason and result", "因为……所以……"], ["Give a condition", "如果……就……"],
  ["One condition is enough", "只要……就……"], ["One condition is necessary", "只有……才……"],
  ["Show a contrast", "虽然……但是……"], ["Add a stronger point", "不但……而且……"],
  ["Show an immediate action", "一……就……"], ["Show what someone did next", "于是"],
  ["Show the actual consequence", "结果"], ["Show an unexpected event", "不料／没想到"],
  ["Reveal the truth", "原来"], ["Arrange events", "首先、接着、然后、最后"],
  ["Explain a purpose", "为了"], ["Summarise the lesson", "总之／由此可见"],
] as const;

export const PRACTICE_QUESTIONS = [
  { sentence: "他跑___很快。", options: ["的", "地", "得"], answer: "得", explanation: "跑是动词；在动词后说明跑得怎样，要用“得”。" },
  { sentence: "她小心翼翼___拿起花瓶。", options: ["的", "地", "得"], answer: "地", explanation: "小心翼翼说明怎样拿，放在动词前要用“地”。" },
  { sentence: "我看见一个穿着校服___男孩。", options: ["的", "地", "得"], answer: "的", explanation: "“穿着校服的”在形容名词“男孩”，要用“的”。" },
  { sentence: "___你认真检查，___能发现错误。", options: ["虽然／但是", "如果／就", "因为／所以"], answer: "如果／就", explanation: "这里是假设一个条件和可能发生的结果。" },
  { sentence: "他以为球会停下，___球却滚上了马路。", options: ["于是", "不料", "因此"], answer: "不料", explanation: "结果与原先预料相反，所以用“不料”。" },
  { sentence: "小明看见老人跌倒，___立刻上前帮忙。", options: ["于是", "结果", "不过"], answer: "于是", explanation: "前面的情况使人物采取下一步行动，所以用“于是”。" },
  { sentence: "弟弟___杯子打破了。", options: ["从", "把", "向"], answer: "把", explanation: "杯子受到动作影响并出现“打破”的结果，所以用“把”。" },
  { sentence: "杯子___弟弟打破了。", options: ["给", "被", "对"], answer: "被", explanation: "句子把承受动作的“杯子”放在前面，所以用“被”。" },
  { sentence: "小明___老师道歉。", options: ["向", "从", "被"], answer: "向", explanation: "道歉的对象是老师，所以用“向”表示动作的目标。" },
  { sentence: "她___抹布把桌子擦干净。", options: ["离", "用", "对"], answer: "用", explanation: "抹布是完成动作的工具，所以用“用”。" },
  { sentence: "___男孩主动拾起地上的钱包。", options: ["热心的", "热心地", "热心得"], answer: "热心的", explanation: "“热心”在形容名词“男孩”，所以用“的”。" },
  { sentence: "听见铃声后，小明___跑向课室。", options: ["飞快的", "飞快地", "飞快得"], answer: "飞快地", explanation: "“飞快”说明怎样跑，放在动词前要用“地”。" },
];
