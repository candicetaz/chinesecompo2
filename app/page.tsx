"use client";

import { useMemo, useState } from "react";
import { BookOpen, Check, Layers3, RotateCcw, Search, Sparkles, Waypoints } from "lucide-react";
import { ADJECTIVES, ADVERBS, CONNECTOR_CHOOSER, CONNECTOR_GROUPS, PRACTICE_QUESTIONS, PREPOSITIONS, SENTENCE_LADDERS, STRUCTURAL_WORDS, type GrammarItem } from "./grammar-data";

type View = "builder" | "structure" | "adverbs" | "adjectives" | "prepositions" | "connectors" | "practice";

const VIEWS: { id: View; label: string; labelEn: string }[] = [
  { id: "builder", label: "扩句阶梯", labelEn: "Sentence Builder" },
  { id: "structure", label: "结构词", labelEn: "Structural Words" },
  { id: "adverbs", label: "副词", labelEn: "Adverbs" },
  { id: "adjectives", label: "形容词", labelEn: "Adjectives" },
  { id: "prepositions", label: "介词", labelEn: "Prepositions" },
  { id: "connectors", label: "关联词", labelEn: "Connectors" },
  { id: "practice", label: "小测验", labelEn: "Practice" },
];

export default function GrammarToolkit() {
  const [view, setView] = useState<View>("builder");
  const [query, setQuery] = useState("");
  const [ladderExample, setLadderExample] = useState(0);
  const [ladderStep, setLadderStep] = useState(0);
  const [connectorGroup, setConnectorGroup] = useState("all");
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const filter = (items: GrammarItem[]) => {
    const term = query.trim().toLowerCase();
    if (!term) return items;
    return items.filter((item) => [item.word, item.english, item.formula, item.formulaEn, item.when, item.whenEn, item.example, item.translation].some((value) => value.toLowerCase().includes(term)));
  };

  const visibleConnectors = useMemo(() => CONNECTOR_GROUPS
    .filter((group) => connectorGroup === "all" || group.id === connectorGroup)
    .map((group) => ({ ...group, items: filter(group.items) }))
    .filter((group) => group.items.length > 0), [connectorGroup, query]);

  const score = PRACTICE_QUESTIONS.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
  const switchView = (next: View) => { setView(next); setQuery(""); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const currentLadder = SENTENCE_LADDERS[ladderExample];
  const resetLadder = () => setLadderStep(0);
  const chooseLadder = (index: number) => { setLadderExample(index); setLadderStep(0); };

  return (
    <main className="grammar-app min-h-screen pb-20">
      <header className="grammar-header">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div className="grammar-brand"><span className="grammar-brand-tile">句</span><div><strong>中文句子工具箱</strong><span>Chinese Sentence Toolkit · Primary 5</span></div></div>
          <div className="grammar-purpose">写完整 · 写通顺</div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pt-5 sm:px-6 sm:pt-8">
        <section className="grammar-intro">
          <div><span className="grammar-badge">P5</span><h1>把简单句一步一步写完整</h1><p>Build a clear Chinese sentence one layer at a time.</p></div>
          <div className="grammar-master-formula"><span>记住顺序 · Remember</span><strong>基本句 → 5W+1H → 结构词 → 介词 → 副词 → 形容词 → 结果 → 连接</strong></div>
        </section>

        <nav className="grammar-tabs" aria-label="语法工具">
          {VIEWS.map((item) => <button key={item.id} type="button" onClick={() => switchView(item.id)} className={view === item.id ? "active" : ""}><strong>{item.label}</strong><span>{item.labelEn}</span></button>)}
        </nav>

        {view !== "builder" && view !== "practice" && (
          <label className="grammar-search"><Search className="h-5 w-5" /><span className="sr-only">Search grammar rules</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索中文、English、规则或例句…" /><kbd>{query ? `${query.length}` : "⌕"}</kbd></label>
        )}

        {view === "builder" && (
          <section className="grammar-section builder-section">
            <div className="grammar-section-title"><span><Layers3 className="h-5 w-5" /></span><div><h2>扩句阶梯</h2><p>Start simple. Add only one useful layer each time.</p></div></div>
            <div className="ladder-example-panel">
              <div className="ladder-example-heading"><div><strong>选择例子</strong><span>Choose an example</span></div><button type="button" onClick={resetLadder}><RotateCcw className="h-4 w-4" />重新开始 · Reset</button></div>
              <div className="ladder-example-list">
                {SENTENCE_LADDERS.map((example, index) => <button key={example.id} type="button" aria-pressed={ladderExample === index} className={ladderExample === index ? "active" : ""} onClick={() => chooseLadder(index)}><strong>{example.title}</strong><span>{example.titleEn}</span></button>)}
              </div>
            </div>
            <div className="ladder-layout">
              <div className="ladder-steps">
                {currentLadder.steps.map((step, index) => (
                  <button key={step.label} type="button" className={index === ladderStep ? "active" : index < ladderStep ? "done" : ""} onClick={() => setLadderStep(index)}>
                    <span>{index < ladderStep ? <Check className="h-4 w-4" /> : index + 1}</span>
                    <div><strong>{step.label}</strong><small>{step.labelEn}</small></div>
                  </button>
                ))}
              </div>
              <article className="ladder-card">
                <div className="ladder-card-top"><span>第 {ladderStep + 1} 层 · Layer {ladderStep + 1}</span><b>{currentLadder.steps[ladderStep].label} · {currentLadder.steps[ladderStep].labelEn}</b></div>
                <div className="ladder-formula"><small>加入什么 · What to add</small><strong>{currentLadder.steps[ladderStep].addition}</strong><span>{currentLadder.steps[ladderStep].additionEn}</span></div>
                <p className="ladder-sentence">{currentLadder.steps[ladderStep].sentence}</p>
                <div className="ladder-actions">
                  <button type="button" disabled={ladderStep === 0} onClick={() => setLadderStep((step) => Math.max(0, step - 1))}>上一层</button>
                  <button type="button" disabled={ladderStep === currentLadder.steps.length - 1} onClick={() => setLadderStep((step) => Math.min(currentLadder.steps.length - 1, step + 1))}>加下一层 →</button>
                </div>
              </article>
            </div>
            <div className="builder-reminder"><Sparkles className="h-5 w-5" /><p><strong>目标不是写最长的句子。</strong><span>The goal is a complete and natural sentence. When the doer changes, name the new subject or begin a new sentence.</span></p></div>
          </section>
        )}

        {view === "structure" && <RuleBank title="结构词" titleEn="Structural Words" description="这些小词没有具体物品的意思，却决定句子是否完整、自然。" descriptionEn="These small grammar words make a sentence complete and natural." items={filter(STRUCTURAL_WORDS)} />}
        {view === "adverbs" && <RuleBank title="副词" titleEn="Adverbs" description="副词说明动作怎样、何时或多常发生。有些副词要加“地”，有些不用。" descriptionEn="Adverbs explain how, when or how often an action happens. Some take 地; others do not." items={filter(ADVERBS)} />}
        {view === "adjectives" && <RuleBank title="形容词" titleEn="Adjectives" description="形容词描写人物、物品、地方或感受；修饰名词时通常用“的”。" descriptionEn="Adjectives describe people, objects, places or feelings. They usually take 的 before a noun." items={filter(ADJECTIVES)} />}
        {view === "prepositions" && <RuleBank title="介词" titleEn="Prepositions" description="介词说明地点、方向、对象、工具或事物之间的关系，通常放在主要动作前。" descriptionEn="Prepositions show place, direction, target, method or relationships and usually come before the main action." items={filter(PREPOSITIONS)} />}

        {view === "connectors" && (
          <section className="grammar-section">
            <div className="grammar-section-title"><span><Waypoints className="h-5 w-5" /></span><div><h2>关联词</h2><p>Choose by meaning—not because the connector sounds impressive.</p></div></div>
            <div className="connector-chooser"><h3>我想表达…… <span>I want to…</span></h3><div>{CONNECTOR_CHOOSER.map(([need, answer]) => <div key={need}><span>{need}</span><strong>{answer}</strong></div>)}</div></div>
            <div className="connector-filters" aria-label="Filter connector groups">
              <button type="button" className={connectorGroup === "all" ? "active" : ""} onClick={() => setConnectorGroup("all")}>全部 All</button>
              {CONNECTOR_GROUPS.map((group) => <button key={group.id} type="button" className={connectorGroup === group.id ? "active" : ""} onClick={() => setConnectorGroup(group.id)}>{group.title}</button>)}
            </div>
            {visibleConnectors.map((group) => <div className={`connector-group connector-${group.colour}`} key={group.id}><div className="connector-group-heading"><h3>{group.title}</h3><span>{group.titleEn}</span><b>{group.items.length}</b></div><RuleTable items={group.items} /></div>)}
            {visibleConnectors.length === 0 && <EmptyResult />}
          </section>
        )}

        {view === "practice" && (
          <section className="grammar-section">
            <div className="grammar-section-title"><span><BookOpen className="h-5 w-5" /></span><div><h2>结构词与关联词小测验</h2><p>Choose the missing word, then read why it works.</p></div></div>
            <div className="grammar-quiz-score"><span>目前得分 · Score</span><strong>{score} / {PRACTICE_QUESTIONS.length}</strong></div>
            <div className="grammar-quiz-list">
              {PRACTICE_QUESTIONS.map((question, index) => {
                const selected = answers[index];
                return <article key={question.sentence} className="grammar-quiz-card"><span>题目 {index + 1}</span><h3>{question.sentence}</h3><div>{question.options.map((option) => <button key={option} type="button" disabled={selected !== undefined} className={selected === option ? (option === question.answer ? "correct" : "wrong") : selected && option === question.answer ? "correct" : ""} onClick={() => setAnswers((current) => ({ ...current, [index]: option }))}>{option}</button>)}</div>{selected && <p className={selected === question.answer ? "correct" : "wrong"}>{selected === question.answer ? "答对了！" : `正确答案：${question.answer}`}<small>{question.explanation}</small></p>}</article>;
              })}
            </div>
            {Object.keys(answers).length > 0 && <button className="quiz-reset" type="button" onClick={() => setAnswers({})}>重新作答 · Try again</button>}
          </section>
        )}
      </div>
    </main>
  );
}

function RuleBank({ title, titleEn, description, descriptionEn, items }: { title: string; titleEn: string; description: string; descriptionEn: string; items: GrammarItem[] }) {
  return <section className="grammar-section"><div className="grammar-section-title"><span><BookOpen className="h-5 w-5" /></span><div><h2>{title}</h2><p>{titleEn}</p></div></div><div className="bank-intro"><p>{description}</p><span>{descriptionEn}</span><b>{items.length} 项</b></div>{items.length ? <RuleTable items={items} /> : <EmptyResult />}</section>;
}

function RuleTable({ items }: { items: GrammarItem[] }) {
  return <div className="rule-table-wrap"><table className="rule-table"><thead><tr><th>词语<br /><span>Word</span></th><th>意思<br /><span>Meaning</span></th><th>中文规则 + English rule</th><th>什么时候用？<br /><span>When to use</span></th><th>例句<br /><span>Example</span></th></tr></thead><tbody>{items.map((item, index) => <tr key={`${item.word}-${index}`}><td data-label="词语 Word"><b className={item.priority ? "core" : "useful"}>{item.priority ? "重点" : "参考"}</b><strong>{item.word}</strong></td><td data-label="意思 Meaning"><p>{item.english}</p></td><td data-label="规则 Rule"><strong>{item.formula}</strong><small>{item.formulaEn}</small></td><td data-label="用法 Use"><p>{item.when}</p><small>{item.whenEn}</small></td><td data-label="例句 Example"><strong>{item.example}</strong><small>{item.translation}</small></td></tr>)}</tbody></table></div>;
}

function EmptyResult() {
  return <div className="grammar-empty"><Search className="h-6 w-6" /><strong>找不到符合的规则</strong><span>Try another Chinese or English search word.</span></div>;
}
