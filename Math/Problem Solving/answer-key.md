<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Answer Key — Math Module 1 Starter</title>
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
  table.key{border-collapse:collapse;width:100%;font-size:0.86rem;margin:1.1rem 0}
  table.key th,table.key td{border:1px solid var(--rule);padding:0.4rem 0.65rem;text-align:left}
  table.key th{background:var(--sunk);font-family:var(--f-mono);font-size:0.66rem;text-transform:uppercase;letter-spacing:0.03em}
  table.key td.k{font-family:var(--f-mono);font-weight:700;color:var(--keep);text-align:center}
  .count{background:var(--accent-soft);border-radius:5px;padding:0.85rem 1.05rem;font-family:var(--f-mono);font-size:0.8rem;line-height:1.6;margin:1.2rem 0}
  .rat{border-top:1px solid var(--rule);padding:1.3rem 0}
  .rat h3{font-family:var(--f-mono);font-size:0.92rem;color:var(--accent);margin-bottom:0.45rem}
  .rat h3 .tag{color:var(--ink-faint);font-weight:400;text-transform:uppercase;letter-spacing:0.05em;font-size:0.66rem}
  .rat p{margin:0.5rem 0}
  .rat ol{margin:0.4rem 0;padding-left:1.3rem}
  .rat ol li{margin:0.25rem 0}
  .math{font-family:var(--f-mono);font-size:0.95rem;background:var(--sunk);padding:0.05rem 0.32rem;border-radius:2px}
  .rat ul{margin:0.5rem 0;padding-left:1.2rem;color:var(--ink-soft);font-size:0.95rem}
  .rat ul b{color:var(--ink)}
  .strat{background:var(--sunk);border-left:3px solid var(--keep);padding:0.6rem 0.9rem;border-radius:0 3px 3px 0;font-size:0.92rem;margin-top:0.6rem}
  footer{font-family:var(--f-mono);font-size:0.72rem;color:var(--ink-faint);text-align:center;padding:2.5rem 1rem 3rem;border-top:1px solid var(--rule);margin-top:2.5rem}
  @media print{body{background:#fff;color:#000;font-size:10pt}.hero{padding:0.5rem 0 1rem}.rat{break-inside:avoid}.count,.strat,.math{background:none}}
</style>
</head>
<body>

<div class="hero">
  <div class="wrap">
    <span class="eyebrow">Answer Key · Teacher copy</span>
    <h1>Math Module 1 Starter</h1>
    <p class="lede">Keys, domain and difficulty tags, worked solutions, and the trap each wrong option is built around.</p>
    <table class="meta">
      <tr><td>Worksheet</td><td><code>2026-08-28_math-module1_practice_550-650.html</code> (same folder)</td></tr>
      <tr><td>Target level</td><td>550–650 section score</td></tr>
      <tr><td>Question count</td><td>14 (12 multiple choice, 2 grid-in)</td></tr>
      <tr><td>Timing</td><td>22 minutes</td></tr>
      <tr><td>Created</td><td>2026-08-28</td></tr>
    </table>
  </div>
</div>

<main class="wrap">

  <h2>At a glance</h2>
  <div class="data-wrap">
    <table class="key">
      <thead><tr><th>Q</th><th>Answer</th><th>Domain</th><th>Difficulty</th></tr></thead>
      <tbody>
        <tr><td>1</td><td class="k">A</td><td>Algebra</td><td>Easy</td></tr>
        <tr><td>2</td><td class="k">D</td><td>Algebra</td><td>Easy</td></tr>
        <tr><td>3</td><td class="k">B</td><td>Algebra</td><td>Medium</td></tr>
        <tr><td>4</td><td class="k">A</td><td>Algebra</td><td>Medium</td></tr>
        <tr><td>5</td><td class="k">&minus;1</td><td>Algebra</td><td>Medium</td></tr>
        <tr><td>6</td><td class="k">A</td><td>Advanced Math</td><td>Easy</td></tr>
        <tr><td>7</td><td class="k">B</td><td>Advanced Math</td><td>Medium</td></tr>
        <tr><td>8</td><td class="k">C</td><td>Advanced Math</td><td>Medium</td></tr>
        <tr><td>9</td><td class="k">&minus;8</td><td>Advanced Math</td><td>Hard</td></tr>
        <tr><td>10</td><td class="k">B</td><td>Problem-Solving and Data Analysis</td><td>Easy</td></tr>
        <tr><td>11</td><td class="k">D</td><td>Problem-Solving and Data Analysis</td><td>Medium</td></tr>
        <tr><td>12</td><td class="k">C</td><td>Problem-Solving and Data Analysis</td><td>Medium</td></tr>
        <tr><td>13</td><td class="k">C</td><td>Geometry and Trigonometry</td><td>Medium</td></tr>
        <tr><td>14</td><td class="k">D</td><td>Geometry and Trigonometry</td><td>Medium</td></tr>
      </tbody>
    </table>
  </div>

  <div class="count">
    Multiple-choice answer distribution (12 items) — A: 3 (Q1, 4, 6) · B: 3 (Q3, 7, 10) · C: 3 (Q8, 12, 13) · D: 3 (Q2, 11, 14)<br>
    Exactly balanced, 3 per letter. Grid-ins (Q5, Q9) have no letter. No rebalancing needed.
  </div>

  <h2>Worked solutions</h2>

  <div class="rat">
    <h3>1. A) 6 <span class="tag">— Algebra · Easy</span></h3>
    <p><span class="math">3x + 7 = 25</span> &rarr; <span class="math">3x = 18</span> &rarr; <span class="math">x = 6</span>.</p>
    <ul>
      <li><b>B) 9</b> — divides 27 by 3, forgetting to subtract 7 first.</li>
      <li><b>C) 32/3</b> — adds 7 instead of subtracting: <span class="math">32 / 3</span>.</li>
      <li><b>D) 4</b> — subtracts 7 twice, or slips to <span class="math">12 / 3</span>.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>2. D) c = 40 + 0.15m <span class="tag">— Algebra · Easy</span></h3>
    <p>The $40 is fixed (a constant); the $0.15 is charged per mile, so it multiplies <span class="math">m</span>.</p>
    <ul>
      <li><b>A)</b> — subtracts the fixed fee instead of adding it.</li>
      <li><b>B)</b> — swaps which number is the rate and which is the flat fee.</li>
      <li><b>C)</b> — treats $40 + $0.15 as a single per-mile rate of $55.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>3. B) 4 <span class="tag">— Algebra · Medium</span></h3>
    <p>Add the equations: <span class="math">(2x + y) + (x &minus; y) = 11 + 1</span> &rarr; <span class="math">3x = 12</span> &rarr; <span class="math">x = 4</span> (and <span class="math">y = 3</span>).</p>
    <ul>
      <li><b>A) 3</b> — the value of <span class="math">y</span>, not <span class="math">x</span>.</li>
      <li><b>C) 7</b> — the value of <span class="math">x + y</span>.</li>
      <li><b>D) 10</b> — subtracts the equations instead of adding, then mis-solves.</li>
    </ul>
    <p class="strat">When one variable has opposite signs in the two equations, add them — the variable cancels immediately.</p>
  </div>

  <div class="rat">
    <h3>4. A) &minus;4 <span class="tag">— Algebra · Medium</span></h3>
    <p><span class="math">5 &minus; 2x &le; 11</span> &rarr; <span class="math">&minus;2x &le; 6</span> &rarr; <span class="math">x &ge; &minus;3</span> (divide by &minus;2, flip the sign). So any <span class="math">x &lt; &minus;3</span> is <em>not</em> a solution. Only <span class="math">&minus;4</span> qualifies.</p>
    <ul>
      <li><b>B) &minus;3</b> — the boundary itself: <span class="math">5 &minus; 2(&minus;3) = 11 &le; 11</span> is true, so it <em>is</em> a solution.</li>
      <li><b>C) 0, D) 5</b> — both give a left side well below 11; both are solutions.</li>
    </ul>
    <p class="strat">Dividing or multiplying an inequality by a negative number flips the direction. This is the single most common inequality error.</p>
  </div>

  <div class="rat">
    <h3>5. &minus;1 <span class="tag">— Algebra · Medium (grid-in)</span></h3>
    <p>Slope <span class="math">= (11 &minus; 3) / (6 &minus; 2) = 8 / 4 = 2</span>. Using <span class="math">y = 2x + b</span> with <span class="math">(2, 3)</span>: <span class="math">3 = 4 + b</span> &rarr; <span class="math">b = &minus;1</span>. The <span class="math">y</span>-intercept is <span class="math">&minus;1</span>.</p>
    <p><b>Common wrong entries:</b> <span class="math">7</span> (found the slope's effect but used the wrong point), <span class="math">2</span> (gave the slope instead of the intercept).</p>
  </div>

  <div class="rat">
    <h3>6. A) &minus;2 <span class="tag">— Advanced Math · Easy</span></h3>
    <p><span class="math">f(3) = 3<sup>2</sup> &minus; 4(3) + 1 = 9 &minus; 12 + 1 = &minus;2</span>.</p>
    <ul>
      <li><b>B) 2</b> — drops the negative sign on the final total.</li>
      <li><b>C) &minus;20</b> — computes <span class="math">(3 &minus; 4)(3) + 1</span> or otherwise mis-orders operations.</li>
      <li><b>D) 22</b> — reads <span class="math">x<sup>2</sup></span> as <span class="math">x &middot; 2</span> and drops signs.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>7. B) 1.5 <span class="tag">— Advanced Math · Medium</span></h3>
    <p>The zeros of <span class="math">g</span> are <span class="math">x = 5</span> and <span class="math">x = &minus;2</span>. A parabola's vertex sits halfway between its zeros: <span class="math">(5 + (&minus;2)) / 2 = 1.5</span>. Since the leading coefficient is positive, the vertex is the minimum.</p>
    <ul>
      <li><b>A) &minus;2, D) 5</b> — the zeros themselves, where <span class="math">g = 0</span>, not where <span class="math">g</span> is least.</li>
      <li><b>C) 3</b> — averages 5 and 2 (ignoring the sign on the second zero).</li>
    </ul>
    <p class="strat">Axis of symmetry = average of the roots. Faster than expanding and using <span class="math">&minus;b / 2a</span>.</p>
  </div>

  <div class="rat">
    <h3>8. C) 500 &middot; 2<sup>t/3</sup> <span class="tag">— Advanced Math · Medium</span></h3>
    <p>Growth factor is 2 (doubling). The exponent is (elapsed time) &divide; (time per doubling) <span class="math">= t / 3</span>. Check: at <span class="math">t = 3</span>, <span class="math">500 &middot; 2<sup>1</sup> = 1000</span>. Correct.</p>
    <ul>
      <li><b>A)</b> — <span class="math">2<sup>3t</sup></span> doubles every 20 minutes, far too fast.</li>
      <li><b>B)</b> — uses base 3; the population triples, which it does not.</li>
      <li><b>D)</b> — linear growth; doubling is exponential.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>9. &minus;8 <span class="tag">— Advanced Math · Hard (grid-in)</span></h3>
    <p>If <span class="math">x = 2</span> is a solution, substitute: <span class="math">2<sup>2</sup> + b(2) + 12 = 0</span> &rarr; <span class="math">4 + 2b + 12 = 0</span> &rarr; <span class="math">2b = &minus;16</span> &rarr; <span class="math">b = &minus;8</span>.</p>
    <p>Check with the other root: product of roots <span class="math">= 12</span>, so the second root is <span class="math">6</span>; sum of roots <span class="math">= 8 = &minus;b</span>. Consistent.</p>
    <p><b>Common wrong entries:</b> <span class="math">8</span> (forgot the sum of roots equals <span class="math">&minus;b</span>, not <span class="math">b</span>), <span class="math">6</span> (found the other root instead of <span class="math">b</span>).</p>
  </div>

  <div class="rat">
    <h3>10. B) $60 <span class="tag">— Problem-Solving and Data Analysis · Easy</span></h3>
    <p>A 25% markdown leaves 75%: <span class="math">0.75 &times; 80 = 60</span>.</p>
    <ul>
      <li><b>A) $55</b> — subtracts $25 (a flat amount, not a percentage).</li>
      <li><b>C) $65</b> — subtracts a $15 "quarter of 60" using the wrong base.</li>
      <li><b>D) $20</b> — gives the discount amount (<span class="math">0.25 &times; 80</span>), not the sale price.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>11. D) 8 <span class="tag">— Problem-Solving and Data Analysis · Medium</span></h3>
    <p>Flour : sugar <span class="math">= 3 : 2</span>. Flour is scaled by <span class="math">12 / 3 = 4</span>, so sugar <span class="math">= 2 &times; 4 = 8</span>.</p>
    <ul>
      <li><b>A) 6</b> — keeps flour's number, halves it.</li>
      <li><b>B) 10</b> — adds the difference (<span class="math">12 &minus; 2</span>) instead of scaling.</li>
      <li><b>C) 18</b> — inverts the ratio (<span class="math">12 &times; 3 / 2</span>).</li>
    </ul>
  </div>

  <div class="rat">
    <h3>12. C) 15 <span class="tag">— Problem-Solving and Data Analysis · Medium</span></h3>
    <p>Five numbers averaging 14 have a total of <span class="math">5 &times; 14 = 70</span>. The four known numbers sum to <span class="math">10 + 12 + 15 + 18 = 55</span>. The fifth is <span class="math">70 &minus; 55 = 15</span>.</p>
    <ul>
      <li><b>A) 13</b> — averages the four known numbers instead of using the total.</li>
      <li><b>B) 14</b> — assumes the missing value equals the mean.</li>
      <li><b>D) 16</b> — arithmetic slip in the sum of the four.</li>
    </ul>
    <p class="strat">Mean problems are almost always "recover the total first."</p>
  </div>

  <div class="rat">
    <h3>13. C) 115&deg; <span class="tag">— Geometry and Trigonometry · Medium</span></h3>
    <p>An exterior angle equals the sum of the two remote interior angles: <span class="math">40&deg; + 75&deg; = 115&deg;</span>. (Check: interior angle <span class="math">C = 180 &minus; 115 = 65&deg;</span>, and <span class="math">65 + 115 = 180</span>.)</p>
    <ul>
      <li><b>A) 65&deg;</b> — the <em>interior</em> angle at <span class="math">C</span>.</li>
      <li><b>B) 105&deg;</b> — <span class="math">180 &minus; 75</span>, using only one angle.</li>
      <li><b>D) 140&deg;</b> — doubles 70, or adds 65 + 75.</li>
    </ul>
  </div>

  <div class="rat">
    <h3>14. D) 24 <span class="tag">— Geometry and Trigonometry · Medium</span></h3>
    <p>Hypotenuse <span class="math">= &radic;(6<sup>2</sup> + 8<sup>2</sup>) = &radic;100 = 10</span> (a 6-8-10 triangle). Perimeter <span class="math">= 6 + 8 + 10 = 24</span>.</p>
    <ul>
      <li><b>A) 14</b> — adds only the two legs.</li>
      <li><b>B) 20</b> — uses a hypotenuse of 6 (mis-recalled 3-4-5 scaling).</li>
      <li><b>C) 28</b> — uses a hypotenuse of 14 (added the legs for the hypotenuse).</li>
    </ul>
  </div>

  <h2>Scoring and next steps</h2>
  <div class="data-wrap">
    <table class="key">
      <thead><tr><th>Raw score</th><th>Reading</th></tr></thead>
      <tbody>
        <tr><td>12–14</td><td>Module-1 fluency is there. Move to timed Module-2 (harder) sets and to grid-in speed.</td></tr>
        <tr><td>8–11</td><td>Content is mostly solid; the losses are usually sign errors and rushed setup. Slow the first 20 seconds of each question.</td></tr>
        <tr><td>0–7</td><td>Reteach the domain(s) missed before more mixed practice. Start with Algebra — it is the largest share of the section.</td></tr>
      </tbody>
    </table>
  </div>
  <p><strong>Say every session:</strong> there is no wrong-answer penalty and a calculator is always available. Every blank should at least have a Desmos-checked guess.</p>

</main>

<footer>LBEnglishCo · Digital SAT · Math · Answer key · 2026-08-28</footer>

</body>
</html>
