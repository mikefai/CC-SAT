<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Answer Key — Half-Length Modular Mock</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Literata:opsz,wght@7..72,400;7..72,600&display=swap">
<style>
  :root{
    --ground:#F4F5F8; --surface:#FFFFFF; --sunk:#E9ECF2;
    --ink:#16202E; --ink-soft:#5C6A7D; --ink-faint:#8E99A8;
    --accent:#33456B; --accent-soft:#E2E7F1;
    --keep:#3B7A57; --kill:#B0413E;
    --rule:#D8DDE6;
    --f-display:"Instrument Serif",Georgia,serif;
    --f-body:"Literata",Georgia,"Times New Roman",serif;
    --f-mono:"JetBrains Mono",ui-monospace,Consolas,monospace;
  }
  @media (prefers-color-scheme:dark){
    :root:not([data-theme="light"]){
      --ground:#14181F; --surface:#1C222C; --sunk:#242C38;
      --ink:#E6EAF0; --ink-soft:#9AA6B6; --ink-faint:#6B7788;
      --accent:#8FA6D4; --accent-soft:#232D42;
      --keep:#7FC49C; --kill:#E08A85;
      --rule:#2C3542;
    }
  }
  :root[data-theme="dark"]{
    --ground:#14181F; --surface:#1C222C; --sunk:#242C38;
    --ink:#E6EAF0; --ink-soft:#9AA6B6; --ink-faint:#6B7788;
    --accent:#8FA6D4; --accent-soft:#232D42;
    --keep:#7FC49C; --kill:#E08A85;
    --rule:#2C3542;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--ground);color:var(--ink);font-family:var(--f-body);font-size:1.02rem;line-height:1.7;-webkit-font-smoothing:antialiased}
  .wrap{max-width:820px;margin:0 auto;padding:0 clamp(1rem,5vw,2rem)}
  h1,h2,h3{margin:0;line-height:1.15;text-wrap:balance}
  h1{font-family:var(--f-display);font-size:clamp(2.2rem,6vw,3.2rem);font-weight:400;letter-spacing:-0.01em}
  h2{font-family:var(--f-display);font-size:clamp(1.5rem,4vw,2rem);font-weight:400;margin-top:2.6rem}
  .eyebrow{font-family:var(--f-mono);font-size:0.7rem;font-weight:500;letter-spacing:0.16em;text-transform:uppercase;color:var(--accent)}
  .hero{padding:clamp(2.2rem,7vw,3.6rem) 0 clamp(1.2rem,4vw,1.8rem);border-bottom:1px solid var(--rule)}
  .hero .lede{font-size:1.05rem;color:var(--ink-soft);max-width:60ch;margin-top:0.9rem}
  table.meta{border-collapse:collapse;margin:1.5rem 0 0;font-size:0.9rem;width:100%}
  table.meta td{border:1px solid var(--rule);padding:0.45rem 0.7rem;vertical-align:top}
  table.meta td:first-child{font-family:var(--f-mono);font-size:0.68rem;text-transform:uppercase;letter-spacing:0.04em;color:var(--ink-soft);white-space:nowrap;width:1%;background:var(--sunk)}
  table.meta code{font-family:var(--f-mono);font-size:0.82rem}
  .data-wrap{overflow-x:auto}
  table.key{border-collapse:collapse;width:100%;font-size:0.85rem;margin:1.1rem 0}
  table.key th,table.key td{border:1px solid var(--rule);padding:0.4rem 0.6rem;text-align:left}
  table.key th{background:var(--sunk);font-family:var(--f-mono);font-size:0.65rem;text-transform:uppercase;letter-spacing:0.03em}
  table.key td.k{font-family:var(--f-mono);font-weight:700;color:var(--keep);text-align:center}
  .count{background:var(--accent-soft);border-radius:5px;padding:0.85rem 1.05rem;font-family:var(--f-mono);font-size:0.79rem;line-height:1.6;margin:1.2rem 0}
  .rat{border-top:1px solid var(--rule);padding:1.2rem 0}
  .rat h3{font-family:var(--f-mono);font-size:0.9rem;color:var(--accent);margin-bottom:0.4rem}
  .rat h3 .tag{color:var(--ink-faint);font-weight:400;text-transform:uppercase;letter-spacing:0.05em;font-size:0.64rem}
  .rat p{margin:0.45rem 0}
  .math{font-family:var(--f-mono);font-size:0.94rem;background:var(--sunk);padding:0.04rem 0.3rem;border-radius:2px}
  .rat ul{margin:0.45rem 0;padding-left:1.2rem;color:var(--ink-soft);font-size:0.93rem}
  .rat ul b{color:var(--ink)}
  .strat{background:var(--sunk);border-left:3px solid var(--keep);padding:0.55rem 0.85rem;border-radius:0 3px 3px 0;font-size:0.9rem;margin-top:0.55rem}
  footer{font-family:var(--f-mono);font-size:0.72rem;color:var(--ink-faint);text-align:center;padding:2.5rem 1rem 3rem;border-top:1px solid var(--rule);margin-top:2.5rem}
  @media print{body{background:#fff;color:#000;font-size:10pt}.hero{padding:0.5rem 0 1rem}.rat{break-inside:avoid}.count,.strat,.math{background:none}}
</style>
</head>
<body>

<div class="hero">
  <div class="wrap">
    <span class="eyebrow">Answer Key · Teacher copy</span>
    <h1>Half-Length Modular Mock</h1>
    <p class="lede">Keys for both modules, domain and difficulty tags, worked reasoning, and a raw-score band table with the limits of a half-length estimate spelled out.</p>
    <table class="meta">
      <tr><td>Worksheet</td><td><code>2026-08-28_modular-mock_practice_550-650.html</code> (same folder)</td></tr>
      <tr><td>Coverage</td><td>Reading and Writing Module 1 (shortened) · Math Module 1 (shortened)</td></tr>
      <tr><td>Target level</td><td>550–650 per section</td></tr>
      <tr><td>Question count</td><td>24 (12 + 12)</td></tr>
      <tr><td>Created</td><td>2026-08-28</td></tr>
    </table>
  </div>
</div>

<main class="wrap">

  <h2>At a glance</h2>
  <div class="data-wrap">
    <table class="key">
      <thead><tr><th>Q</th><th>Key</th><th>Domain / Skill</th><th>Diff.</th><th>Q</th><th>Key</th><th>Domain / Skill</th><th>Diff.</th></tr></thead>
      <tbody>
        <tr><td>R1</td><td class="k">A</td><td>Craft — Words in Context</td><td>E</td><td>M1</td><td class="k">A</td><td>Algebra — interpreting linear models</td><td>E</td></tr>
        <tr><td>R2</td><td class="k">B</td><td>Craft — Text Structure and Purpose</td><td>M</td><td>M2</td><td class="k">C</td><td>Algebra — linear equations</td><td>M</td></tr>
        <tr><td>R3</td><td class="k">C</td><td>Craft — Cross-Text Connections</td><td>H</td><td>M3</td><td class="k">B</td><td>Algebra — linear equations</td><td>M</td></tr>
        <tr><td>R4</td><td class="k">D</td><td>Info and Ideas — Central Ideas</td><td>E</td><td>M4</td><td class="k">D</td><td>Algebra — linear models</td><td>M</td></tr>
        <tr><td>R5</td><td class="k">A</td><td>Info and Ideas — Command of Evidence</td><td>M</td><td>M5</td><td class="k">6</td><td>Algebra — linear equations (grid-in)</td><td>E</td></tr>
        <tr><td>R6</td><td class="k">B</td><td>Info and Ideas — Inferences</td><td>M</td><td>M6</td><td class="k">A</td><td>Advanced Math — polynomial products</td><td>E</td></tr>
        <tr><td>R7</td><td class="k">C</td><td>Conventions — Boundaries</td><td>M</td><td>M7</td><td class="k">C</td><td>Advanced Math — quadratic zeros</td><td>M</td></tr>
        <tr><td>R8</td><td class="k">D</td><td>Conventions — Form, Structure, Sense</td><td>M</td><td>M8</td><td class="k">B</td><td>Advanced Math — algebraic identities</td><td>H</td></tr>
        <tr><td>R9</td><td class="k">A</td><td>Expression — Transitions</td><td>M</td><td>M9</td><td class="k">240</td><td>PSDA — rates (grid-in)</td><td>M</td></tr>
        <tr><td>R10</td><td class="k">B</td><td>Expression — Rhetorical Synthesis</td><td>H</td><td>M10</td><td class="k">A</td><td>PSDA — percentages</td><td>E</td></tr>
        <tr><td>R11</td><td class="k">C</td><td>Craft — Words in Context</td><td>M</td><td>M11</td><td class="k">C</td><td>Geometry — parallel lines and angles</td><td>M</td></tr>
        <tr><td>R12</td><td class="k">D</td><td>Craft — Text Structure and Purpose</td><td>H</td><td>M12</td><td class="k">D</td><td>Geometry — circles</td><td>M</td></tr>
      </tbody>
    </table>
  </div>

  <div class="count">
    Reading and Writing distribution (12 items) — A: 3 (R1, R5, R9) · B: 3 (R2, R6, R10) · C: 3 (R3, R7, R11) · D: 3 (R4, R8, R12). Exactly balanced.<br><br>
    Math multiple-choice distribution (10 items) — A: 3 (M1, M6, M10) · B: 2 (M3, M8) · C: 3 (M2, M7, M11) · D: 2 (M4, M12). Grid-ins M5 and M9 have no letter. Spread 3/2/3/2 — balanced, no rebalancing needed.
  </div>

  <h2>Section 1 — Reading and Writing</h2>

  <div class="rat">
    <h3>R1. A) vague <span class="tag">— Words in Context · Easy</span></h3>
    <p>"Named no competitor and made no measurable claim" defines the blank: nothing specific. <b>B) aggressive</b> and <b>C) detailed</b> are opposites; <b>D) deceptive</b> requires a false claim, but no claim was made.</p>
  </div>

  <div class="rat">
    <h3>R2. B) It sets up a behavior that seems not to make sense, then explained <span class="tag">— Text Structure and Purpose · Medium</span></h3>
    <p>"Owners bought them anyway" is a mini-paradox (why buy a bad clock?). The last sentence resolves it (status, not timekeeping).</p>
    <ul>
      <li><b>A)</b> — the text accepts that early watches kept poor time.</li>
      <li><b>C)</b> — no statistics appear.</li>
      <li><b>D)</b> — it is the second of three sentences, not a conclusion.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>R3. C) It supports Pak's emphasis on the press while specifying its role as acceleration <span class="tag">— Cross-Text Connections · Hard</span></h3>
    <p>Rivera says the ideas were old but "what differed after 1450 … was … the speed." He keeps the press central; he refines <em>how</em> it mattered.</p>
    <ul>
      <li><b>A)</b> — he does not deny printing's effect; he explains it.</li>
      <li><b>B)</b> — he does not simply restate Pak; he adds a distinction (ideas vs. speed).</li>
      <li><b>D)</b> — the opposite of his point; speed is exactly what printing changed.</li>
    </ul>
    <p class="strat">"Supports but qualifies" is one of the four standard cross-text relationships. Look for an option that keeps the first author's thesis and narrows it.</p>
  </div>

  <div class="rat">
    <h3>R4. D) The otter's effect is far larger than its numbers suggest <span class="tag">— Central Ideas and Details · Easy</span></h3>
    <p>The passage builds to the definition of a keystone species: small presence, outsized effect. <b>A)</b>, <b>B)</b>, and <b>C)</b> each seize on one detail and miss the through-line.</p>
  </div>

  <div class="rat">
    <h3>R5. A) Her recitals introduced now-standard works for thirty years after she stopped composing <span class="tag">— Command of Evidence · Medium</span></h3>
    <p>The claim has two parts — <em>after</em> she stopped composing, and <em>shaping programming</em>. Only A covers both (thirty years later; repertoire that "then entered the standard repertoire").</p>
    <ul>
      <li><b>B)</b> — fixes the date she stopped, nothing about influence.</li>
      <li><b>C)</b> — about her husband.</li>
      <li><b>D)</b> — praises her playing, not her effect on what Europe programmed.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>R6. B) distinguish one kind of sound from another <span class="tag">— Inferences · Medium</span></h3>
    <p>The plants reacted to chewing sounds but not to wind or silence. Reacting differently to different sounds is discrimination among sounds.</p>
    <ul>
      <li><b>A)</b>, <b>D)</b> — the study shows a chemical response only; no movement, no signaling to animals.</li>
      <li><b>C)</b> — sunlight is never mentioned.</li>
    </ul>
    <p class="strat">An inference question wants the smallest claim the evidence forces — not the most impressive one.</p>
  </div>

  <div class="rat">
    <h3>R7. C) year; as a result, <span class="tag">— Boundaries · Medium</span></h3>
    <p>Two independent clauses ("temperatures fell…" / "1816 became known…"). A semicolon joins them; "as a result," is a transitional phrase that then takes its own comma.</p>
    <ul>
      <li><b>A) year,</b> — comma splice.</li>
      <li><b>B) year</b> — fused sentence.</li>
      <li><b>D) year, as a result,</b> — still a comma splice; a transitional phrase does not license joining two independent clauses with a comma.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>R8. D) shows <span class="tag">— Form, Structure, and Sense · Medium</span></h3>
    <p>With "neither … nor," the verb agrees with the <em>nearer</em> subject — here "the finished mural," which is singular. So "shows."</p>
    <ul>
      <li><b>A) show</b>, <b>B) are showing</b>, <b>C) have shown</b> — all plural, agreeing with "sketches" instead of the nearer noun.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>R9. A) For that reason, <span class="tag">— Transitions · Medium</span></h3>
    <p>Cables rated for 50 years are over 80 years old, so corrosion is expected. The relationship is cause &rarr; unsurprising effect.</p>
    <ul>
      <li><b>B) Nevertheless</b>, <b>C) In contrast</b> — both signal a reversal; there is none.</li>
      <li><b>D) For example</b> — the second sentence is a consequence, not an instance.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>R10. B) The whole sea is diminished, but a 2005 dam restored the north and fishing resumed <span class="tag">— Rhetorical Synthesis · Hard</span></h3>
    <p>"Qualified success" needs both the setback and the partial recovery. Only B has "Though … remains drastically diminished" plus the dam and the returned fishing.</p>
    <ul>
      <li><b>A)</b>, <b>D)</b> — only the disaster; no success.</li>
      <li><b>C)</b> — only the cause of the decline.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>R11. C) somber <span class="tag">— Words in Context · Medium</span></h3>
    <p>"Startled by how often the memoir made them laugh" — the expectation the humor violates is a grave, serious book.</p>
    <ul>
      <li><b>A) lengthy</b>, <b>D) firsthand</b> — neither is contradicted by humor.</li>
      <li><b>B) conventional</b> — closer, but "made them laugh" points specifically at tone, and "somber" is the precise opposite of funny.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>R12. D) To move attention from a familiar fact to a less obvious, more interesting one <span class="tag">— Text Structure and Purpose · Hard</span></h3>
    <p>The passage sets aside the "no two alike" cliché ("unremarkable") to spend most of its length on the surprising within-flake symmetry.</p>
    <ul>
      <li><b>A)</b> — that is the fact it dismisses in one sentence.</li>
      <li><b>B)</b> — a supporting detail, not the purpose.</li>
      <li><b>C)</b> — the text never says the saying is false; it says it is unremarkable.</li>
    </ul>
  </div>

  <h2>Section 2 — Math</h2>

  <div class="rat">
    <h3>M1. A) the cost for each additional hour <span class="tag">— Algebra · Easy</span></h3>
    <p>In <span class="math">C(t) = 25 + 8t</span>, 8 is the coefficient of <span class="math">t</span> (the rate); 25 is the fixed cost. <b>B)</b> describes 25. <b>D)</b> would be <span class="math">25 + 8 = 33</span>.</p>
  </div>

  <div class="rat">
    <h3>M2. C) 11 <span class="tag">— Algebra · Medium</span></h3>
    <p><span class="math">4x &minus; 12 = 2x + 10</span> &rarr; <span class="math">2x = 22</span> &rarr; <span class="math">x = 11</span>.</p>
    <ul>
      <li><b>A) 1</b> — sign slip moving terms across.</li>
      <li><b>B) 5.5</b> — solves <span class="math">2x = 11</span>, forgetting to combine the constants.</li>
      <li><b>D) 22</b> — stops at <span class="math">2x = 22</span>.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>M3. B) 5 <span class="tag">— Algebra · Medium</span></h3>
    <p>Substitute <span class="math">(3, 19)</span>: <span class="math">19 = 3m + 4</span> &rarr; <span class="math">3m = 15</span> &rarr; <span class="math">m = 5</span>.</p>
    <ul>
      <li><b>A) 3</b> — uses the <span class="math">x</span>-value as the slope.</li>
      <li><b>C) 15</b> — stops at <span class="math">3m = 15</span>.</li>
      <li><b>D) 23/3</b> — adds 4 instead of subtracting.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>M4. D) $7 <span class="tag">— Algebra · Medium</span></h3>
    <p>Cost per GB is the slope: <span class="math">(66 &minus; 45) / (5 &minus; 2) = 21 / 3 = 7</span>. (The monthly fee works out to $31.)</p>
    <ul>
      <li><b>A) $3</b> — the change in GB, not the rate.</li>
      <li><b>B) $9</b> — divides 45 by 5, ignoring the fixed fee.</li>
      <li><b>C) $21</b> — the change in cost, not divided by the change in GB.</li>
    </ul>
    <p class="strat">"Per unit" almost always means slope: (change in output) &divide; (change in input).</p>
  </div>

  <div class="rat">
    <h3>M5. 6 <span class="tag">— Algebra · Easy (grid-in)</span></h3>
    <p><span class="math">3(7) &minus; y = 15</span> &rarr; <span class="math">21 &minus; y = 15</span> &rarr; <span class="math">y = 6</span>. Common wrong entry: <span class="math">&minus;6</span> (sign error isolating <span class="math">y</span>).</p>
  </div>

  <div class="rat">
    <h3>M6. A) x&sup2; &minus; 2x &minus; 15 <span class="tag">— Advanced Math · Easy</span></h3>
    <p><span class="math">(x + 3)(x &minus; 5) = x&sup2; &minus; 5x + 3x &minus; 15 = x&sup2; &minus; 2x &minus; 15</span>.</p>
    <ul>
      <li><b>B)</b> — sign error on the middle term (<span class="math">+2x</span>).</li>
      <li><b>C)</b> — forgets the middle term entirely.</li>
      <li><b>D)</b> — adds <span class="math">5x + 3x</span> instead of combining <span class="math">&minus;5x + 3x</span>.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>M7. C) x = 1 and x = 7 <span class="tag">— Advanced Math · Medium</span></h3>
    <p>Set <span class="math">h(x) = 0</span>: <span class="math">(x &minus; 4)&sup2; = 9</span> &rarr; <span class="math">x &minus; 4 = &plusmn;3</span> &rarr; <span class="math">x = 7</span> or <span class="math">x = 1</span>.</p>
    <ul>
      <li><b>A)</b> — reads off the vertex <span class="math">(4, &minus;9)</span> as if those were intercepts.</li>
      <li><b>B)</b> — takes <span class="math">x &minus; 4 = &plusmn;3</span> but subtracts in the wrong direction.</li>
      <li><b>D)</b> — solves <span class="math">x&sup2; = 9</span>, ignoring the shift.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>M8. B) 49 <span class="tag">— Advanced Math · Hard</span></h3>
    <p><span class="math">(x + y)&sup2; = x&sup2; + 2xy + y&sup2; = (x&sup2; + y&sup2;) + 2xy = 29 + 2(10) = 49</span>. No need to find <span class="math">x</span> and <span class="math">y</span> separately.</p>
    <ul>
      <li><b>A) 39</b> — adds <span class="math">xy</span> once instead of <span class="math">2xy</span>.</li>
      <li><b>C) 9</b> — computes <span class="math">(x &minus; y)&sup2; = 29 &minus; 20</span>.</li>
      <li><b>D) 29</b> — forgets the <span class="math">2xy</span> term.</li>
    </ul>
    <p class="strat">When you see <span class="math">x&sup2; + y&sup2;</span> and <span class="math">xy</span> together, the question almost always wants <span class="math">(x &plusmn; y)&sup2;</span>. Don't solve the system.</p>
  </div>

  <div class="rat">
    <h3>M9. 240 <span class="tag">— PSDA · Medium (grid-in)</span></h3>
    <p>Speed <span class="math">= 150 / 2.5 = 60</span> mph. In 4 hours: <span class="math">60 &times; 4 = 240</span> miles. Common wrong entry: <span class="math">375</span> (scales 150 by 2.5 instead of dividing).</p>
  </div>

  <div class="rat">
    <h3>M10. A) 60% <span class="tag">— PSDA · Easy</span></h3>
    <p><span class="math">18 / 30 = 0.6 = 60%</span>.</p>
    <ul>
      <li><b>B) 40%</b> — the percent who do <em>not</em> play.</li>
      <li><b>C) 55%</b> — rough guess.</li>
      <li><b>D) 18%</b> — reports the count as a percent.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>M11. C) 62&deg; <span class="tag">— Geometry · Medium</span></h3>
    <p>Same-side interior angles (co-interior) on a transversal cutting parallel lines are supplementary: <span class="math">180&deg; &minus; 118&deg; = 62&deg;</span>.</p>
    <ul>
      <li><b>A) 118&deg;</b> — that would be the <em>alternate</em> or corresponding angle, not the same-side one.</li>
      <li><b>B) 32&deg;</b> — treats the angles as complementary.</li>
      <li><b>D) 72&deg;</b> — arithmetic slip (<span class="math">180 &minus; 108</span>).</li>
    </ul>
  </div>

  <div class="rat">
    <h3>M12. D) 36&pi; <span class="tag">— Geometry · Medium</span></h3>
    <p><span class="math">2&pi;r = 12&pi;</span> &rarr; <span class="math">r = 6</span>. Area <span class="math">= &pi;r&sup2; = 36&pi;</span>.</p>
    <ul>
      <li><b>A) 12&pi;</b> — repeats the circumference.</li>
      <li><b>B) 6&pi;</b> — gives the radius times <span class="math">&pi;</span>.</li>
      <li><b>C) 144&pi;</b> — squares the diameter (12) instead of the radius.</li>
    </ul>
  </div>

  <h2>Scoring this mock</h2>
  <p>Because this is a half-length, non-adaptive test, treat the bands below as a rough position check, not a predicted SAT score. A real score also depends on the adaptive Module 2, which this mock does not include.</p>
  <div class="data-wrap">
    <table class="key">
      <thead><tr><th>Section raw (out of 12)</th><th>Rough position</th></tr></thead>
      <tbody>
        <tr><td>11–12</td><td>Comfortably above the 550–650 target for this module. Move to full-length, timed practice with a Module 2.</td></tr>
        <tr><td>8–10</td><td>On target. The gap to the next band is usually pacing and the two hardest question types, not content.</td></tr>
        <tr><td>5–7</td><td>Below target. Use the domain tags above to pick one weak area and drill it before the next mock.</td></tr>
        <tr><td>0–4</td><td>Content gap. Return to the section starter sets and their keys before attempting another timed test.</td></tr>
      </tbody>
    </table>
  </div>
  <p><strong>Debrief every mock the same way:</strong> for each miss, label it <em>content</em> (didn't know it), <em>process</em> (knew it, worked it wrong), or <em>time</em> (ran out / rushed). The mix tells you what to practice next far better than the raw score does.</p>

</main>

<footer>LBEnglishCo · Digital SAT · Modular practice test · Answer key · 2026-08-28</footer>

</body>
</html>
