// topics.js
// Drop this file next to grammar.html. It provides: window.TOPICS = [ ... ].

window.TOPICS = [
  // --------------------------
  // A1 / A2 — FOUNDATION
  // --------------------------
  {
    id: "v2-main",
    level: "A1",
    tags: ["Word order","Basics"],
    title: "Verb-Second (V2) in Main Clauses",
    summary: "In a German main clause, the conjugated verb is in position 2. Position 1 can be any element (time/place/object) for emphasis.",
    deep: `
      <div class="box">
        <p><strong>Rule:</strong> In main clauses, the <strong>finite verb</strong> (conjugated verb) is always in position 2.</p>
        <ol>
          <li>Choose what you want to emphasize → put it in position 1.</li>
          <li>Put the conjugated verb in position 2.</li>
          <li>Everything else follows.</li>
        </ol>
        <p><strong>Why it matters:</strong> German can move elements around; cases + verb position keep meaning clear.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>gehe</strong> heute ins Kino.</p>
        <p>Heute <strong>gehe</strong> ich ins Kino.</p>
        <p>Ins Kino <strong>gehe</strong> ich heute.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> Heute ich gehe ins Kino.</p>
        <p><strong>Right:</strong> Heute <strong>gehe</strong> ich ins Kino.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Reorder into correct German (keep meaning):</p>
        <ul>
          <li>Tomorrow / I / go / to the doctor.</li>
          <li>In the evening / we / watch / a film.</li>
        </ul>
      </div>
    `
  },

  {
    id: "questions-negation",
    level: "A1",
    tags: ["Word order","Basics"],
    title: "Questions + Negation (nicht vs kein)",
    summary: "Yes/no questions: verb first. W-questions: question word first, verb second. Negation: nicht for verbs/phrases; kein for 'no' + noun.",
    deep: `
      <div class="box">
        <p><strong>Questions:</strong></p>
        <ul>
          <li><strong>Yes/No:</strong> verb in position 1.</li>
          <li><strong>W-question:</strong> W-word in position 1 → verb position 2.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Negation:</strong></p>
        <ul>
          <li><strong>kein</strong> negates a noun (≈ “not a/any”): Ich habe <strong>kein</strong> Auto.</li>
          <li><strong>nicht</strong> negates the verb or a phrase: Ich komme <strong>nicht</strong>. / Ich gehe <strong>nicht</strong> ins Kino.</li>
        </ul>
        <p><strong>Meaning nuance:</strong> “Ich habe kein Geld.” (I have no money.) vs “Ich habe das Geld nicht.” (I don’t have <em>that</em> money.)</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Gehst</strong> du heute ins Kino?</p>
        <p><strong>Wann</strong> gehst du ins Kino?</p>
        <p>Ich habe <strong>kein</strong> Geld.</p>
        <p>Ich bin <strong>nicht</strong> müde.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> Ich habe nicht Auto.</p>
        <p><strong>Right:</strong> Ich habe <strong>kein</strong> Auto.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose <strong>nicht</strong> or <strong>kein</strong>:</p>
        <ul>
          <li>Ich habe ____ Zeit.</li>
          <li>Das ist ____ gut.</li>
          <li>Wir gehen heute ____ schwimmen.</li>
        </ul>
      </div>
    `
  },

  {
    id: "articles-cases-overview",
    level: "A1",
    tags: ["Cases","Articles"],
    title: "Articles Across Cases (der/die/das → den/dem/des)",
    summary: "Articles show a noun’s grammatical role. Learn the definite articles across all cases early — they unlock reading comprehension.",
    deep: `
      <div class="box">
        <p><strong>Core idea:</strong> German uses case marking on articles to show function (subject, object, etc.).</p>
        <p>Even when word order changes, the articles keep roles clear.</p>
        <table class="grammar-table">
          <tr><th>Case</th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr>
          <tr><td>Nominative</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>Accusative</td><td><strong>den</strong></td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>Dative</td><td>dem</td><td>der</td><td>dem</td><td>den (+n)</td></tr>
          <tr><td>Genitive</td><td>des (+s/es)</td><td>der</td><td>des (+s/es)</td><td>der</td></tr>
        </table>
        <p class="muted"><strong>High payoff:</strong> memorize “der → den → dem → des”.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Der</strong> Mann (Nom)</p>
        <p>Ich sehe <strong>den</strong> Mann. (Akk)</p>
        <p>Ich helfe <strong>dem</strong> Mann. (Dat)</p>
        <p>Das Auto <strong>des</strong> Mannes. (Gen)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> relying on English word order.</p>
        <p><strong>Fix:</strong> identify roles by article/case, not by position.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose the correct definite article form (der/den/dem/des):</p>
        <ul>
          <li>Ich sehe ___ Hund. (Akk)</li>
          <li>Ich helfe ___ Hund. (Dat)</li>
          <li>Das Spiel ___ Hundes ist lustig. (Gen)</li>
        </ul>
      </div>
    `
  },

  {
    id: "cases-nom-akk",
    level: "A1",
    tags: ["Cases","Articles"],
    title: "Cases: Nominative & Accusative (der → den)",
    summary: "Nominative is usually the subject. Accusative is the direct object. Masculine articles change in accusative: der → den.",
    deep: `
      <div class="box">
        <p><strong>How to decide the case:</strong></p>
        <ul>
          <li><strong>Who does the action?</strong> → nominative.</li>
          <li><strong>Who/what is directly affected?</strong> → accusative.</li>
        </ul>
        <p><strong>Key change:</strong> masculine accusative: <strong>der → den</strong>.</p>
        <table class="grammar-table">
          <tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>plural</th></tr>
          <tr><td>Nominative</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>Accusative</td><td><strong>den</strong></td><td>die</td><td>das</td><td>die</td></tr>
        </table>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Der</strong> Mann sieht <strong>den</strong> Hund.</p>
        <p><strong>Den</strong> Hund sieht <strong>der</strong> Mann. (same meaning)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> “der” everywhere.</p>
        <p><strong>Fix:</strong> drill: der (Nom) → den (Akk) → dem (Dat) → des (Gen).</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Mark subject (NOM) and object (AKK):</p>
        <ul>
          <li>Den Film sieht die Frau.</li>
          <li>Der Junge besucht den Lehrer.</li>
        </ul>
      </div>
    `
  },

  {
    id: "dative",
    level: "A2",
    tags: ["Cases","Verbs"],
    title: "Dative (Wem?) + Dative Verbs + Plural -n",
    summary: "Dative marks the indirect object and is required by many verbs and prepositions. Plural dative often adds -n.",
    deep: `
      <div class="box">
        <p><strong>Two major uses:</strong></p>
        <ul>
          <li><strong>Recipient/beneficiary:</strong> Ich gebe <em>dem Mann</em> das Buch.</li>
          <li><strong>Dative verbs:</strong> the verb demands dative (helfen, danken, gefallen, gehören…).</li>
        </ul>
        <table class="grammar-table">
          <tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>plural</th></tr>
          <tr><td>Dative</td><td>dem</td><td>der</td><td>dem</td><td>den (+n)</td></tr>
        </table>
        <p><strong>Plural -n rule:</strong> Add -n in dative plural unless plural already ends in -n/-s.</p>
        <p class="muted">mit den Kind<strong>ern</strong>, in den Wohnung<strong>en</strong>, bei den Freund<strong>en</strong>, aber: mit den Auto<strong>s</strong>.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich gebe <strong>dem</strong> Mann <strong>das</strong> Buch.</p>
        <p>Ich helfe <strong>der</strong> Frau.</p>
        <p>Das Hemd <strong>gefällt</strong> mir.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> Ich helfe den Mann.</p>
        <p><strong>Right:</strong> Ich helfe <strong>dem</strong> Mann.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Fill in the correct article (DAT):</p>
        <ul>
          <li>Ich danke ____ Lehrer.</li>
          <li>Wir helfen ____ Kindern.</li>
        </ul>
      </div>
    `
  },

  {
    id: "prepositions-cases",
    level: "A2",
    tags: ["Prepositions","Cases"],
    title: "Prepositions + Case (Akk / Dat / Two-way)",
    summary: "Many prepositions require a fixed case. Two-way prepositions use dative for location and accusative for direction.",
    deep: `
      <div class="box">
        <p><strong>Accusative:</strong> für, ohne, durch, gegen, um</p>
        <p><strong>Dative:</strong> mit, nach, bei, seit, von, zu</p>
        <div class="divider"></div>
        <p><strong>Two-way:</strong> in, an, auf, unter, über, vor, hinter, neben, zwischen</p>
        <ul>
          <li><strong>Dative</strong> = location (Wo?)</li>
          <li><strong>Accusative</strong> = direction (Wohin?)</li>
        </ul>
        <p><strong>Contractions:</strong> in dem → <strong>im</strong>, zu dem → <strong>zum</strong>, zu der → <strong>zur</strong>, an dem → <strong>am</strong></p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich gehe <strong>in den</strong> Park. (direction → AKK)</p>
        <p>Ich bin <strong>im</strong> Park. (location → DAT)</p>
        <p>Ich fahre <strong>mit dem</strong> Bus. (DAT)</p>
        <p>Das ist <strong>für den</strong> Lehrer. (AKK)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> mixing Wo/Wohin.</p>
        <p><strong>Fix:</strong> always ask the question: “Wo?” (DAT) vs “Wohin?” (AKK).</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose DAT or AKK:</p>
        <ul>
          <li>Ich stelle die Tasche ____ Tisch. (Wohin?)</li>
          <li>Die Tasche liegt ____ Tisch. (Wo?)</li>
        </ul>
      </div>
    `
  },

  {
    id: "separable-inseparable",
    level: "A2",
    tags: ["Verbs","Word order"],
    title: "Separable vs Inseparable Prefix Verbs (and participles)",
    summary: "Separable prefixes split in main clauses; inseparable prefixes never split and usually avoid 'ge-' in participles.",
    deep: `
      <div class="box">
        <p><strong>Separable:</strong> prefix goes to the end in main clauses.</p>
        <p><strong>Inseparable:</strong> prefix stays attached (be-, ver-, er-, ent-, zer-, miss-, ge-).</p>
        <div class="divider"></div>
        <p><strong>Participles:</strong></p>
        <ul>
          <li>Separable: prefix + ge + stem → <em>aufgemacht</em>, <em>eingekauft</em></li>
          <li>Inseparable: no ge- → <em>besucht</em>, <em>verstanden</em></li>
        </ul>
        <p class="muted"><strong>Tip:</strong> often separable prefixes are stressed (AUSgehen), inseparable are not (beSUchen) — not perfect but helpful.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>. → Ich bin um 7 Uhr <strong>aufgestanden</strong>.</p>
        <p>Ich <strong>besuche</strong> meine Oma. → Ich habe meine Oma <strong>besucht</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong participle:</strong> *gebesucht</p>
        <p><strong>Right:</strong> besucht (inseparable prefix → no ge-)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Convert to Perfekt:</p>
        <ul>
          <li>Ich stehe früh auf. → …</li>
          <li>Ich besuche meine Tante. → …</li>
          <li>Ich mache die Tür auf. → …</li>
        </ul>
      </div>
    `
  },

  {
    id: "reflexive-akk-dat",
    level: "B1",
    tags: ["Verbs","Cases"],
    title: "Reflexive Verbs: Accusative vs Dative Reflexive (mich vs mir)",
    summary: "Some reflexive verbs are always accusative; others become dative when another accusative object is present (mir die Hände waschen).",
    deep: `
      <div class="box">
        <p><strong>Accusative reflexive:</strong> subject acts on itself as direct object.</p>
        <p class="muted">Ich wasche <strong>mich</strong>. (me = direct object)</p>
        <div class="divider"></div>
        <p><strong>Dative reflexive:</strong> often when there is another accusative object (body parts, things).</p>
        <p class="muted">Ich wasche <strong>mir</strong> die Hände. (Hände = accusative object)</p>
        <div class="divider"></div>
        <p><strong>Common dative reflexive pattern:</strong> <em>sich (Dat) + body part (Akk)</em></p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich ziehe <strong>mich</strong> an. (akk reflexive)</p>
        <p>Ich ziehe <strong>mir</strong> eine Jacke an. (dat reflexive + akk object)</p>
        <p>Er putzt <strong>sich</strong> die Zähne. (dat reflexive + teeth as akk)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> *Ich wasche mich die Hände.</p>
        <p><strong>Right:</strong> Ich wasche <strong>mir</strong> die Hände.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose <strong>mich</strong> or <strong>mir</strong>:</p>
        <ul>
          <li>Ich wasche ____ .</li>
          <li>Ich wasche ____ das Gesicht.</li>
          <li>Ich putze ____ die Zähne.</li>
        </ul>
      </div>
    `
  },

  {
    id: "perfekt",
    level: "A2",
    tags: ["Tenses","Verbs"],
    title: "Perfekt: haben/sein + Partizip II (spoken past)",
    summary: "Most common past tense in speech. Auxiliary in position 2; participle at the end.",
    deep: `
      <div class="box">
        <p><strong>Form:</strong> subject + haben/sein + … + Partizip II</p>
        <p><strong>Choosing auxiliaries:</strong></p>
        <ul>
          <li><strong>sein</strong> with movement/change of state: gehen, kommen, fahren, aufstehen, einschlafen, sterben, werden…</li>
          <li><strong>haben</strong> with most other verbs.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Partizip II building:</strong></p>
        <ul>
          <li>regular: ge + stem + t → gemacht</li>
          <li>irregular: often ge + stem + en → gegangen</li>
          <li>inseparable prefixes: no ge- → besucht, verstanden</li>
          <li>separable prefixes: prefix + ge- → aufgemacht</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>habe</strong> Deutsch <strong>gelernt</strong>.</p>
        <p>Ich <strong>bin</strong> nach Hause <strong>gegangen</strong>.</p>
        <p>Wir <strong>haben</strong> ihn <strong>besucht</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> Ich bin das Buch gelesen.</p>
        <p><strong>Right:</strong> Ich <strong>habe</strong> das Buch <strong>gelesen</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Build Perfekt sentences:</p>
        <ul>
          <li>gestern / wir / (gehen) / ins Museum</li>
          <li>ich / (kaufen) / ein neues Handy</li>
          <li>sie / (besuchen) / ihre Freundin</li>
        </ul>
      </div>
    `
  },

  {
    id: "praeteritum-vs-perfekt",
    level: "B1",
    tags: ["Tenses","Style","Verbs"],
    title: "Präteritum vs Perfekt (usage, register, storytelling)",
    summary: "Perfekt dominates spoken German; Präteritum is common in writing and with a few frequent verbs in speech (war/hatte/wurde…).",
    deep: `
      <div class="box">
        <p><strong>Typical usage:</strong></p>
        <ul>
          <li><strong>Perfekt</strong>: everyday conversation, spoken narratives.</li>
          <li><strong>Präteritum</strong>: written stories, reports; also common in speech for: <em>sein, haben, werden</em> (and sometimes more).</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Why Germans do this:</strong> Präteritum feels “narrative/written”; Perfekt feels “spoken/experienced”.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Gestern <strong>war</strong> ich müde. (Präteritum in speech)</p>
        <p>Ich <strong>habe</strong> gestern viel <strong>gearbeitet</strong>. (Perfekt)</p>
        <p>Dann <strong>ging</strong> er nach Hause und <strong>sah</strong> einen Hund. (narrative Präteritum)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common learner issue:</strong> forcing one tense everywhere.</p>
        <p><strong>Better:</strong> use Perfekt for speaking; learn the common Präteritum forms (war, hatte, wurde) for natural speech.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite into natural spoken German:</p>
        <ul>
          <li>Gestern ging ich nach Hause und aß Pizza.</li>
        </ul>
      </div>
    `
  },

  {
    id: "plusquamperfekt",
    level: "B2",
    tags: ["Tenses","Verbs"],
    title: "Plusquamperfekt (past of the past)",
    summary: "Used to show an event happened before another past event. Form: hatten/waren + Partizip II.",
    deep: `
      <div class="box">
        <p><strong>Use:</strong> When you tell a past story and need to step back to an earlier past moment.</p>
        <p><strong>Form:</strong> ich <strong>hatte</strong> gemacht / ich <strong>war</strong> gegangen</p>
        <div class="divider"></div>
        <p><strong>Timeline:</strong></p>
        <ul>
          <li>Earlier past: Plusquamperfekt</li>
          <li>Later past: Perfekt/Präteritum</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Als ich ankam, <strong>hatte</strong> der Film schon <strong>begonnen</strong>.</p>
        <p>Ich <strong>war</strong> schon <strong>eingeschlafen</strong>, bevor du angerufen hast.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> using it when no “past-before-past” relation exists.</p>
        <p><strong>Check:</strong> Can you say “already” / “before that” logically? If yes, Plusquamperfekt likely fits.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Combine into one story sentence:</p>
        <ul>
          <li>Ich kam nach Hause. Ich aß schon. → …</li>
          <li>Der Zug fuhr ab. Ich kaufte das Ticket nicht. → …</li>
        </ul>
      </div>
    `
  },

  {
    id: "future-present-futur1",
    level: "A2",
    tags: ["Tenses","Verbs"],
    title: "Future: Present vs Futur I (werden + infinitive)",
    summary: "German often uses the present tense for future with time words. Futur I is used for emphasis, promises, or assumptions.",
    deep: `
      <div class="box">
        <p><strong>Most common:</strong> Present + time expression.</p>
        <p><strong>Futur I:</strong> <em>werden</em> + infinitive can sound more formal or emphatic.</p>
        <div class="divider"></div>
        <p><strong>Also used for assumptions:</strong> “Er wird schon zu Hause sein.” ≈ “He’s probably at home.”</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>gehe</strong> morgen zum Arzt. (very common)</p>
        <p>Ich <strong>werde</strong> morgen zum Arzt <strong>gehen</strong>. (more emphatic)</p>
        <p>Er <strong>wird</strong> jetzt im Büro <strong>sein</strong>. (assumption)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> overusing Futur I because English does.</p>
        <p><strong>Better:</strong> default to present for future; use Futur I when you want that extra tone.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite as natural German future (use present + time word):</p>
        <ul>
          <li>I will meet you tomorrow.</li>
          <li>We will travel next week.</li>
        </ul>
      </div>
    `
  },

  {
    id: "futur2",
    level: "C1",
    tags: ["Tenses","Verbs","Style"],
    title: "Futur II (will have done / assumption about the past)",
    summary: "Futur II expresses completion before a future point or assumptions about the past: werden + Partizip II + haben/sein.",
    deep: `
      <div class="box">
        <p><strong>Two main uses:</strong></p>
        <ul>
          <li><strong>Completion in the future:</strong> Bis morgen <em>werde</em> ich das <em>geschafft haben</em>.</li>
          <li><strong>Assumption about the past:</strong> Er <em>wird</em> das <em>vergessen haben</em>. (He probably forgot.)</li>
        </ul>
        <p class="muted"><strong>Form:</strong> werden + Partizip II + haben/sein</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Bis 18 Uhr <strong>werde</strong> ich alles <strong>erledigt haben</strong>.</p>
        <p>Sie <strong>wird</strong> den Zug <strong>verpasst haben</strong>. (assumption)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> using it when simple future is enough.</p>
        <p><strong>Check:</strong> Is there “by then / already” or “probably”? If not, Futur II may be overkill.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Make Futur II sentences:</p>
        <ul>
          <li>by tomorrow / I / finish / the report</li>
          <li>he / probably / forget / it</li>
        </ul>
      </div>
    `
  },

  {
    id: "modals",
    level: "A2",
    tags: ["Word order","Verbs"],
    title: "Modal Verbs: word order + meaning differences",
    summary: "Modal in position 2, main verb at the end in infinitive. Nuance: müssen vs sollen; dürfen vs können.",
    deep: `
      <div class="box">
        <p><strong>Structure:</strong> conjugated modal (pos. 2) + … + infinitive at the end.</p>
        <p><strong>Meaning nuance:</strong></p>
        <ul>
          <li><strong>müssen</strong> = obligation</li>
          <li><strong>sollen</strong> = external expectation / recommendation</li>
          <li><strong>dürfen</strong> = permission</li>
          <li><strong>können</strong> = ability / possibility</li>
          <li><strong>wollen</strong> = intention</li>
          <li><strong>möchten</strong> = polite desire</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>muss</strong> heute <strong>arbeiten</strong>.</p>
        <p>Ich <strong>soll</strong> mehr Wasser <strong>trinken</strong>.</p>
        <p><strong>Darf</strong> ich hier <strong>sitzen</strong>?</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> forgetting infinitive at the end.</p>
        <p><strong>Fix:</strong> always “close the sentence” with the main infinitive.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose the best modal:</p>
        <ul>
          <li>Doctor’s advice: Du ____ mehr schlafen. (sollen)</li>
          <li>Permission: ____ ich hier sitzen? (dürfen)</li>
          <li>Ability: Ich ____ gut schwimmen. (können)</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // A2 / B1 — CLAUSES + ORDER
  // --------------------------
  {
    id: "subordinate",
    level: "A2",
    tags: ["Clauses","Word order","Punctuation"],
    title: "Subordinate Clauses: weil / dass / wenn (verb-final)",
    summary: "Subordinating conjunction sends the conjugated verb to the end of its clause. A comma is usually required.",
    deep: `
      <div class="box">
        <p><strong>Rule:</strong> In subordinate clauses, the conjugated verb goes to the end.</p>
        <p><strong>Common conjunctions:</strong> weil, dass, wenn, obwohl, während, bevor, nachdem, falls</p>
        <div class="divider"></div>
        <p><strong>Two patterns:</strong></p>
        <ul>
          <li>Main clause + comma + subordinate clause</li>
          <li>Subordinate clause + comma + main clause (then main clause is still V2)</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich bleibe zu Hause, <strong>weil</strong> ich krank <strong>bin</strong>.</p>
        <p><strong>Wenn</strong> es regnet, <strong>bleibe</strong> ich zu Hause.</p>
        <p>Ich denke, <strong>dass</strong> er heute <strong>kommt</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> …weil ich <em>bin</em> krank.</p>
        <p><strong>Right:</strong> …weil ich krank <strong>bin</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Combine with <strong>weil</strong>:</p>
        <ul>
          <li>Ich komme nicht. Ich bin müde.</li>
          <li>Wir bleiben hier. Es ist zu spät.</li>
        </ul>
      </div>
    `
  },

  {
    id: "commas-rules",
    level: "B2",
    tags: ["Punctuation","Clauses","Writing"],
    title: "Comma Rules (high-impact for clarity)",
    summary: "Commas are required with subordinate clauses and relative clauses, optional/structured with infinitive clauses, and rule-based in lists.",
    deep: `
      <div class="box">
        <p><strong>Commas are required:</strong></p>
        <ul>
          <li>Subordinate clauses: Ich bleibe, weil ich krank bin.</li>
          <li>Relative clauses: Das ist der Mann, den ich kenne.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Infinitive clauses:</strong> commas often used when:</p>
        <ul>
          <li>introduced by <strong>um / ohne / statt</strong>: Ich komme, um zu helfen.</li>
          <li>they are long or have their own objects: Er versprach, mir sofort zu antworten.</li>
          <li>they depend on a noun/adjective: Es ist eine gute Idee, früher zu gehen.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Lists:</strong> comma between items; no comma before “und/oder” in simple lists.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich glaube, <strong>dass</strong> er heute kommt.</p>
        <p>Das ist die Frau, <strong>die</strong> hier wohnt.</p>
        <p>Ich gehe einkaufen, <strong>um</strong> Essen zu kaufen.</p>
        <p>Ich kaufe Brot, Käse und Obst.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> forgetting comma before subordinate/relative clauses.</p>
        <p><strong>Fix:</strong> if there’s a verb-final clause with a conjunction/relative pronoun, add the comma.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add commas where necessary:</p>
        <ul>
          <li>Ich bleibe zu Hause weil ich krank bin.</li>
          <li>Das ist ein Buch das ich gern lese.</li>
          <li>Er hat versprochen mir zu helfen.</li>
        </ul>
      </div>
    `
  },

  {
    id: "relative-clauses",
    level: "B1",
    tags: ["Clauses","Cases","Punctuation"],
    title: "Relative Clauses: case depends on function inside clause",
    summary: "Gender/number comes from the noun; case comes from the pronoun’s role in the relative clause.",
    deep: `
      <div class="box">
        <p><strong>Two-step method:</strong></p>
        <ol>
          <li>Noun → gives gender/number.</li>
          <li>Role inside relative clause → gives case (Nom/Akk/Dat/Gen).</li>
        </ol>
        <p><strong>Remember:</strong> relative clauses always take commas.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Das ist der Mann, <strong>der</strong> hier wohnt. (subject → Nom)</p>
        <p>Das ist der Mann, <strong>den</strong> ich kenne. (object → Akk)</p>
        <p>Das ist der Mann, <strong>dem</strong> ich helfe. (Dat)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> choosing case from the main clause.</p>
        <p><strong>Fix:</strong> decide case only by the relative clause’s internal role.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Fill the relative pronoun:</p>
        <ul>
          <li>Das ist die Frau, ____ ich gestern gesehen habe.</li>
          <li>Das ist der Mann, ____ ich vertraue. (vertrauen = dative)</li>
        </ul>
      </div>
    `
  },

  {
    id: "zu-infinitive",
    level: "B1",
    tags: ["Clauses","Verbs","Punctuation"],
    title: "Infinitive Clauses with zu (um…zu / ohne…zu / statt…zu)",
    summary: "Use zu-infinitives when the subject is the same or implied. Use 'damit' when subjects differ.",
    deep: `
      <div class="box">
        <p><strong>Main idea:</strong> a compact alternative to full subordinate clauses.</p>
        <p><strong>Core forms:</strong></p>
        <ul>
          <li><strong>zu</strong> + infinitive: Ich versuche, früher <strong>zu schlafen</strong>.</li>
          <li><strong>um … zu</strong> (purpose): Ich lerne, <strong>um</strong> die Prüfung <strong>zu bestehen</strong>.</li>
          <li><strong>ohne … zu</strong>: Er ging, <strong>ohne</strong> etwas <strong>zu sagen</strong>.</li>
          <li><strong>statt … zu</strong>: Sie schaut Serien, <strong>statt</strong> zu lernen.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Subject test:</strong></p>
        <ul>
          <li>Same subject → um…zu works.</li>
          <li>Different subject → use <strong>damit</strong>: Ich lerne, <strong>damit</strong> meine Eltern stolz sind.</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich rufe an, <strong>um</strong> einen Termin <strong>zu machen</strong>.</p>
        <p>Er ging, <strong>ohne</strong> sich <strong>zu verabschieden</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> wrong subject with um…zu.</p>
        <p><strong>Better:</strong> Ich lerne, <strong>damit</strong> meine Eltern stolz <strong>sind</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose <strong>um…zu</strong> or <strong>damit</strong>:</p>
        <ul>
          <li>Ich spare Geld, ____ ich ein Auto kaufen kann.</li>
          <li>Ich spare Geld, ____ ein Auto zu kaufen.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B1 / B2 — GENITIVE
  // --------------------------
  {
    id: "genitive",
    level: "B1",
    tags: ["Cases","Prepositions","Writing"],
    title: "Genitive (Wessen?) + genitive prepositions (wegen, trotz, während …)",
    summary: "Genitive marks possession/association and is important in formal German. Many prepositions require genitive (especially in writing).",
    deep: `
      <div class="box">
        <p><strong>Genitive meaning:</strong> “of / 's”.</p>
        <p><strong>Forms (definite articles):</strong> des (masc/neut), der (fem/pl).</p>
        <p class="muted">Often masc/neut nouns add -s/-es: des Mann<strong>es</strong>, des Kind<strong>es</strong>.</p>
        <div class="divider"></div>
        <p><strong>Genitive prepositions (common):</strong> wegen, trotz, während, statt/anstatt, (außerhalb/innerhalb)</p>
        <p><strong>Everyday alternative:</strong> “von + dative” often replaces genitive in speech.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Das ist das Auto <strong>des</strong> Mann<strong>es</strong>.</p>
        <p>Die Tasche <strong>der</strong> Frau.</p>
        <p><strong>Wegen</strong> des Wetters bleiben wir zu Hause.</p>
        <p>Das Auto <strong>von dem</strong> Mann. (more spoken)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> mixing dative with genitive prepositions in formal writing.</p>
        <p><strong>Better:</strong> In writing, prefer: wegen <strong>des</strong> / trotz <strong>der</strong> …</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Fill in genitive:</p>
        <ul>
          <li>Wegen ____ (der Lärm) konnte ich nicht schlafen.</li>
          <li>Trotz ____ (das Problem) haben wir gewonnen.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B1 / B2 — PASSIVE
  // --------------------------
  {
    id: "passive-action-state",
    level: "B2",
    tags: ["Voice","Verbs"],
    title: "Passive: Action (werden) vs State (sein)",
    summary: "werden + Partizip II = action/process; sein + Partizip II = resulting state/condition.",
    deep: `
      <div class="box">
        <p><strong>Action passive (Vorgangspassiv):</strong> focuses on what is happening (process).</p>
        <p><strong>State passive (Zustandspassiv):</strong> describes the result/state.</p>
        <div class="divider"></div>
        <p><strong>Agent:</strong> use <em>von</em> for people/agents and <em>durch</em> for means/cause.</p>
        <p class="muted">Das Haus wird <strong>von</strong> einer Firma renoviert. / Der Fehler wird <strong>durch</strong> Stress verursacht.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Die Tür <strong>wird</strong> (gerade) <strong>geöffnet</strong>. (process)</p>
        <p>Die Tür <strong>ist</strong> <strong>geöffnet</strong>. (state)</p>
        <p>Der Text <strong>wird</strong> korrigiert. → Der Text <strong>ist</strong> korrigiert.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> translating “is opened” as “ist geöffnet” when you mean “is being opened”.</p>
        <p><strong>Fix:</strong> “is being opened” → <strong>wird geöffnet</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose werden or sein:</p>
        <ul>
          <li>Das Essen ____ gekocht. (state)</li>
          <li>Das Essen ____ gerade gekocht. (process)</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B1 / B2 — KONJUNKTIV I/II
  // --------------------------
  {
    id: "konjunktiv2",
    level: "B1",
    tags: ["Mood","Politeness","Tenses"],
    title: "Konjunktiv II: politeness, wishes, unreal conditions (present & past)",
    summary: "Use for polite requests, hypotheticals, and unreal present/past. Often: würde + infinitive; common forms: wäre/hätte/könnte/müsste.",
    deep: `
      <div class="box">
        <p><strong>Politeness:</strong> Könnten Sie…? Würden Sie…?</p>
        <p><strong>Unreal present:</strong> Wenn ich Zeit <strong>hätte</strong>, <strong>würde</strong> ich…</p>
        <p><strong>Unreal past:</strong> Wenn ich Zeit <strong>gehabt hätte</strong>, <strong>wäre</strong> ich gekommen.</p>
        <div class="divider"></div>
        <p><strong>Why not only “würde”:</strong> Using real K II forms (wäre/hätte/könnte/müsste) sounds more natural.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Könnten</strong> Sie mir helfen?</p>
        <p>Wenn ich Geld <strong>hätte</strong>, <strong>würde</strong> ich reisen.</p>
        <p>Wenn ich früher aufgestanden <strong>wäre</strong>, <strong>hätte</strong> ich den Zug bekommen.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> *Wenn ich Geld hätte, ich würde reisen.</p>
        <p><strong>Right:</strong> Wenn ich Geld hätte, <strong>würde</strong> ich reisen. (verb second in main clause)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Finish the sentence:</p>
        <ul>
          <li>Wenn ich mehr Zeit ____, ____ ich jeden Tag Deutsch.</li>
          <li>____ Sie bitte das Fenster schließen?</li>
        </ul>
      </div>
    `
  },

  {
    id: "konjunktiv1",
    level: "B2",
    tags: ["Mood","Style","Writing"],
    title: "Konjunktiv I: reported speech (journalistic distance)",
    summary: "Used to report statements neutrally (news/reporting). Especially common with sein/haben/werden; if ambiguous, German often uses Konjunktiv II.",
    deep: `
      <div class="box">
        <p><strong>Function:</strong> distance the narrator from the claim: “this is reported, not confirmed by me.”</p>
        <p><strong>Common forms:</strong> er <strong>sei</strong>, er <strong>habe</strong>, er <strong>werde</strong></p>
        <div class="divider"></div>
        <p><strong>Fallback options:</strong></p>
        <ul>
          <li>Konjunktiv II distancing: er <em>wäre</em>, er <em>hätte</em>…</li>
          <li>Reporting verb + dass: Er sagte, dass… (less journalistic)</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Er sagt, er <strong>sei</strong> krank.</p>
        <p>Sie behauptet, sie <strong>habe</strong> nichts gesehen.</p>
        <p>Der Sprecher erklärte, die Lage <strong>werde</strong> sich verbessern.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> overusing Konjunktiv I in casual speaking (sounds too formal).</p>
        <p><strong>Tip:</strong> treat it as a “news/reporting” tool.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite into reported speech (Konj. I):</p>
        <ul>
          <li>Er: „Ich bin müde.“</li>
          <li>Sie: „Ich habe keine Zeit.“</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2 — ADJECTIVE ENDINGS (FULL)
  // --------------------------
  {
    id: "adjective-endings",
    level: "B2",
    tags: ["Adjectives","Cases","Articles"],
    title: "Adjective Endings: strong / weak / mixed (complete system)",
    summary: "Adjective endings encode case+gender+number. Pattern depends on article type: der-words (weak), ein-words (mixed), no article (strong).",
    deep: `
      <div class="box">
        <p><strong>Big picture:</strong> the adjective ending carries grammatical information when the article doesn’t show enough.</p>
        <ul>
          <li><strong>Weak</strong> (der-words): article shows case → adjective mostly -e/-en.</li>
          <li><strong>Mixed</strong> (ein-words): adjective supplies missing signals (esp. Nom masc/neut, Akk neut).</li>
          <li><strong>Strong</strong> (no article): adjective carries full case signal.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Mixed (ein-words) table (high frequency):</strong></p>
        <table class="grammar-table">
          <tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>plural</th></tr>
          <tr><td>Nom</td><td>ein gut<strong>er</strong></td><td>eine gut<strong>e</strong></td><td>ein gut<strong>es</strong></td><td>keine gut<strong>en</strong></td></tr>
          <tr><td>Akk</td><td>einen gut<strong>en</strong></td><td>eine gut<strong>e</strong></td><td>ein gut<strong>es</strong></td><td>keine gut<strong>en</strong></td></tr>
          <tr><td>Dat</td><td>einem gut<strong>en</strong></td><td>einer gut<strong>en</strong></td><td>einem gut<strong>en</strong></td><td>keinen gut<strong>en</strong></td></tr>
        </table>
        <p class="muted"><strong>Shortcut:</strong> dative is “-en heavy” (often -en everywhere).</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich kaufe <strong>einen frischen</strong> Apfel. (Akk masc)</p>
        <p>Wir helfen <strong>einer netten</strong> Frau. (Dat fem)</p>
        <p>Das sind <strong>keine guten</strong> Ideen. (Nom plural)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> memorizing all tables at once.</p>
        <p><strong>Better:</strong> master mixed + dative first, then weak, then strong.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add correct endings:</p>
        <ul>
          <li>Ich habe ein neu__ Auto.</li>
          <li>Wir sprechen mit einem freundlich__ Mann.</li>
          <li>Das sind die interessant__ Bücher.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2/C1 — DA-/WO- COMPOUNDS
  // --------------------------
  {
    id: "da-wo-compounds",
    level: "B2",
    tags: ["Pronouns","Prepositions","Clauses"],
    title: "Da- / Wo- Compounds (daran, worauf, wovon…)",
    summary: "When a preposition refers to a thing/idea (not a person), German often uses da- compounds (daran, damit, darauf). Questions use wo- (woran?).",
    deep: `
      <div class="box">
        <p><strong>Use da- compounds:</strong> for “about it / to it / with it” when “it” is not a person.</p>
        <p class="muted">Ich denke <strong>daran</strong>. / Ich freue mich <strong>darauf</strong>.</p>
        <div class="divider"></div>
        <p><strong>Questions use wo-:</strong></p>
        <p class="muted">Woran denkst du? Worauf freust du dich?</p>
        <div class="divider"></div>
        <p><strong>People:</strong> typically use preposition + pronoun:</p>
        <p class="muted">Ich denke <strong>an ihn</strong>. / Ich spreche <strong>mit ihr</strong>.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich freue mich <strong>darauf</strong>, dich zu sehen.</p>
        <p>Woran denkst du?</p>
        <p>Ich spreche <strong>mit ihm</strong>. (person)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> *Ich denke an es.</p>
        <p><strong>Better:</strong> Ich denke <strong>daran</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite using da-/wo-:</p>
        <ul>
          <li>Ich warte auf es. → …</li>
          <li>An was denkst du? → …</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C1 — VERB CLUSTERS + DOUBLE INFINITIVE
  // --------------------------
  {
    id: "verb-clusters",
    level: "C1",
    tags: ["Word order","Verbs","Clauses"],
    title: "Verb clusters & double infinitive (Ersatzinfinitiv)",
    summary: "At C1, multiple verbs stack at clause end. With modals in Perfekt, German often uses a double infinitive (sagen können).",
    deep: `
      <div class="box">
        <p><strong>Verb clusters:</strong> several verbs appear at the end (especially in subordinate clauses).</p>
        <p><strong>Ersatzinfinitiv:</strong> with modals, the modal remains infinitive in Perfekt:</p>
        <ul>
          <li>Ich habe es nicht <strong>sagen können</strong>. (NOT: gesagt gekonnt)</li>
          <li>Er hat kommen <strong>müssen</strong>.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Reading strategy:</strong> in long sentences, scan from the end to decode tense/mood/voice.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Er sagt, dass das Problem schnell <strong>gelöst werden muss</strong>.</p>
        <p>Sie meint, dass er das nicht <strong>gesehen haben kann</strong>.</p>
        <p>Ich habe früher gehen <strong>müssen</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> forcing “one verb at a time” English logic.</p>
        <p><strong>Fix:</strong> treat the verb cluster as one “ending package”.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Identify the meaning by reading from the end:</p>
        <ul>
          <li>…, dass er das Problem nicht hätte lösen können.</li>
          <li>…, weil die Daten ausgewertet worden sein sollen.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C1 — NOMINALIZATION
  // --------------------------
  {
    id: "c1-style-nominalization",
    level: "C1",
    tags: ["Style","Writing"],
    title: "Nominalization (Nominalstil) and academic phrasing",
    summary: "Formal German often turns verbs into nouns (Analyse der Entwicklung), increasing density and abstraction. Great for reports; easy to overdo.",
    deep: `
      <div class="box">
        <p><strong>When it helps:</strong> academic writing, reports, official communication.</p>
        <p><strong>When it hurts:</strong> too many nouns make text heavy and harder to read.</p>
        <div class="divider"></div>
        <p><strong>Common patterns:</strong></p>
        <ul>
          <li>-ung: entwickeln → Entwicklung</li>
          <li>-keit/-heit: möglich → Möglichkeit</li>
          <li>-tion: informieren → Information</li>
          <li>support verb phrases: eine Entscheidung treffen, eine Untersuchung durchführen</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Verb style:</strong> Wir analysieren, wie sich der Markt entwickelt.</p>
        <p><strong>Nominal style:</strong> Wir führen eine Analyse der Marktentwicklung durch.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> nominalizing everything (stiff, hard to read).</p>
        <p><strong>Better:</strong> nominalize key concepts; keep supporting sentences verbal.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Make these more formal:</p>
        <ul>
          <li>Wir untersuchen, wie sich das Klima verändert.</li>
          <li>Wir entscheiden, ob das Projekt weiterläuft.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C1/C2 — MODAL PARTICLES
  // --------------------------
  {
    id: "modal-particles",
    level: "C1",
    tags: ["Style","Spoken German"],
    title: "Modal Particles (doch, ja, mal, denn, halt, eben, wohl…)",
    summary: "Modal particles add tone and attitude (often untranslatable). They are key for natural spoken German and pragmatic nuance.",
    deep: `
      <div class="box">
        <p><strong>What they do:</strong> soften requests, express surprise, signal shared knowledge, add persuasion or resignation.</p>
        <div class="divider"></div>
        <p><strong>High-frequency meanings (rough):</strong></p>
        <ul>
          <li><strong>doch</strong>: “come on / after all” (encouragement or contradiction)</li>
          <li><strong>ja</strong>: “as you know / indeed” (shared knowledge or surprise)</li>
          <li><strong>mal</strong>: softens (try it / just)</li>
          <li><strong>denn</strong> (in questions): friendly curiosity (“so…?”)</li>
          <li><strong>halt/eben</strong>: resignation (“that’s just how it is”)</li>
          <li><strong>wohl</strong>: probability (“probably”)</li>
        </ul>
        <p class="muted"><strong>Note:</strong> the same particle can change meaning based on intonation and context.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Komm <strong>doch</strong> rein!</p>
        <p>Das ist <strong>ja</strong> interessant! (surprise)</p>
        <p>Warte <strong>mal</strong> kurz.</p>
        <p>Wie heißt du <strong>denn</strong>?</p>
        <p>Er kommt <strong>wohl</strong> später.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> using particles in formal writing.</p>
        <p><strong>Tip:</strong> particles are mainly spoken/informal; use them to sound natural in dialogue.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add a particle to match the intention:</p>
        <ul>
          <li>Encouragement: Komm ____ mit!</li>
          <li>Soft request: Hör ____ zu.</li>
          <li>Probability: Er hat es ____ vergessen.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C2 — IDIOMATIC LOGIC
  // --------------------------
  {
    id: "c2-idiomatic-logic",
    level: "C2",
    tags: ["Patterns","Style","Writing"],
    title: "C2 Logic Templates (je…desto, es sei denn, geschweige denn, nicht nur…sondern auch)",
    summary: "Near-native fluency uses fixed templates that package logic and argument structure elegantly.",
    deep: `
      <div class="box">
        <p><strong>Why it matters:</strong> these templates replace simple connector chains with native-like structure.</p>
        <ul>
          <li><strong>je … desto</strong> = correlation</li>
          <li><strong>es sei denn</strong> = exception</li>
          <li><strong>geschweige denn</strong> = “let alone” (stronger second point)</li>
          <li><strong>nicht nur … sondern auch</strong> = additive emphasis</li>
        </ul>
        <p class="muted"><strong>Tip:</strong> learn them as complete units (including commas).</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Je</strong> mehr ich lerne, <strong>desto</strong> besser werde ich.</p>
        <p>Ich komme, <strong>es sei denn</strong>, ich bin krank.</p>
        <p>Er hat es nicht erklärt, <strong>geschweige denn</strong> bewiesen.</p>
        <p><strong>Nicht nur</strong> ist er pünktlich, <strong>sondern</strong> auch zuverlässig.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> missing comma or wrong structure.</p>
        <p><strong>Fix:</strong> memorize the “frame”: Je X, desto Y.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Complete the template:</p>
        <ul>
          <li>Je ___ du übst, desto ___ wirst du.</li>
          <li>Ich gehe mit, es sei denn, ___.</li>
        </ul>
      </div>
    `
  }
    // --------------------------
  // B1/B2 — NOUNS: PLURALS + N-DECLENSION
  // --------------------------
  {
    id: "plural-patterns",
    level: "B1",
    tags: ["Nouns","Plurals","Vocabulary"],
    title: "Plural Patterns (how German plurals actually work)",
    summary: "German plurals aren’t one-rule-fits-all. Learn common patterns + signals (umlaut, -e/-er/-n/-s) and store plurals with nouns.",
    deep: `
      <div class="box">
        <p><strong>Reality check:</strong> plurals must often be learned per noun, but patterns help you guess correctly.</p>
        <p><strong>High-frequency patterns:</strong></p>
        <ul>
          <li><strong>-e</strong> (often masc/neut): der Tag → die Tag<strong>e</strong></li>
          <li><strong>-e + umlaut</strong> (often): der Stuhl → die St<strong>ü</strong>hl<strong>e</strong></li>
          <li><strong>-er (+ umlaut)</strong> (often neut): das Kind → die Kind<strong>er</strong>, das Buch → die B<strong>ü</strong>ch<strong>er</strong></li>
          <li><strong>-n / -en</strong> (very common; many feminine): die Zeitung → die Zeitung<strong>en</strong></li>
          <li><strong>-s</strong> (loanwords/abbreviations): das Auto → die Auto<strong>s</strong>, das Handy → die Handy<strong>s</strong></li>
          <li><strong>no ending</strong> (some; often with umlaut): der Lehrer → die Lehrer</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Study tactic:</strong> learn nouns as a “bundle”: <em>der Tisch, -e</em> / <em>die Frau, -en</em> / <em>das Buch, ü-er</em>.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>die Frau → die Frau<strong>en</strong></p>
        <p>das Buch → die B<strong>ü</strong>ch<strong>er</strong></p>
        <p>der Student → die Student<strong>en</strong></p>
        <p>das Auto → die Auto<strong>s</strong></p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> assuming “-s like English”.</p>
        <p><strong>Fix:</strong> reserve -s mainly for loanwords; otherwise expect -e/-en/-er/umlaut patterns.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add the plural:</p>
        <ul>
          <li>das Kind → die ____</li>
          <li>die Stadt → die ____</li>
          <li>der Stuhl → die ____</li>
          <li>das Hotel → die ____</li>
        </ul>
      </div>
    `
  },

  {
    id: "n-declension",
    level: "B2",
    tags: ["Nouns","Cases","Writing"],
    title: "N-Declension (weak masculine nouns)",
    summary: "Some masculine nouns take -(e)n in all cases except nominative singular (der Student → des Studenten, dem Studenten, den Studenten).",
    deep: `
      <div class="box">
        <p><strong>Core rule:</strong> Weak masculine nouns add <strong>-(e)n</strong> in Akk/Dat/Gen singular (and usually in plural too).</p>
        <p><strong>Typical groups:</strong></p>
        <ul>
          <li>People/roles: der Student, der Kollege, der Junge, der Kunde, der Mensch</li>
          <li>Animals: der Hase, der Löwe</li>
          <li>Some -e nouns: der Name (special), der Gedanke (often)</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Special:</strong> der Name → des Namens / dem Namen / den Namen (Gen has -ns).</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>NOM: der Student</p>
        <p>AKK: Ich sehe den Student<strong>en</strong>.</p>
        <p>DAT: Ich helfe dem Student<strong>en</strong>.</p>
        <p>GEN: Das ist das Buch des Student<strong>en</strong>.</p>
        <p>Special: der Name → der Name / den Namen / dem Namen / des Namens</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> *Ich sehe den Student.</p>
        <p><strong>Right:</strong> Ich sehe den Student<strong>en</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add the correct form:</p>
        <ul>
          <li>Ich kenne den ____ (Kollege).</li>
          <li>Das ist der Hund des ____ (Junge).</li>
          <li>Ich helfe dem ____ (Student).</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B1/B2 — VERB + PREPOSITION (FIXED COMBINATIONS)
  // --------------------------
  {
    id: "verb-prep-combos",
    level: "B1",
    tags: ["Prepositions","Verbs","Cases"],
    title: "Verb + Preposition (fixed combinations you must learn)",
    summary: "Many verbs require a specific preposition + case (warten auf + Akk, teilnehmen an + Dat). Treat them as one vocabulary unit.",
    deep: `
      <div class="box">
        <p><strong>Rule:</strong> The preposition is part of the verb’s “frame.” Don’t translate word-by-word.</p>
        <p><strong>High-frequency sets:</strong></p>
        <ul>
          <li><strong>warten auf</strong> (+ Akk)</li>
          <li><strong>sich freuen auf</strong> (+ Akk) vs <strong>sich freuen über</strong> (+ Akk)</li>
          <li><strong>teilnehmen an</strong> (+ Dat)</li>
          <li><strong>sprechen mit</strong> (+ Dat) / <strong>sprechen über</strong> (+ Akk)</li>
          <li><strong>denken an</strong> (+ Akk)</li>
          <li><strong>sich interessieren für</strong> (+ Akk)</li>
          <li><strong>abhängen von</strong> (+ Dat)</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Clause objects:</strong> use da-/wo- compounds:</p>
        <p class="muted">Ich freue mich <strong>darauf</strong>, dass… / Woran denkst du?</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich warte <strong>auf den</strong> Bus.</p>
        <p>Wir nehmen <strong>an der</strong> Sitzung teil.</p>
        <p>Ich freue mich <strong>auf den</strong> Urlaub. (looking forward)</p>
        <p>Ich freue mich <strong>über das</strong> Geschenk. (happy about)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> wrong case after the preposition.</p>
        <p><strong>Fix:</strong> learn it as “warten auf + Akk”, not just “warten auf”.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose the correct preposition + case:</p>
        <ul>
          <li>Ich interessiere mich ____ Kunst. (für + Akk)</li>
          <li>Wir nehmen ____ Kurs teil. (an + Dat)</li>
          <li>Das hängt ____ Wetter ab. (von + Dat)</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2/C1 — MITTELFELD ORDER + TEKAMOLO + PRONOUNS
  // --------------------------
  {
    id: "mittelfeld-tekamolo",
    level: "B2",
    tags: ["Word order","Style","Clauses"],
    title: "Mittelfeld Word Order: TEKAMOLO + pronoun ordering",
    summary: "In the “middle field” (between finite verb and verb ending), German prefers a default order: Time–Cause–Manner–Place (TEKAMOLO) and pronouns early.",
    deep: `
      <div class="box">
        <p><strong>Sentence zones (simplified):</strong></p>
        <ul>
          <li><strong>Left bracket:</strong> finite verb (V2)</li>
          <li><strong>Mittelfeld:</strong> subjects/objects/adverbs</li>
          <li><strong>Right bracket:</strong> infinitives/participles/separable prefix</li>
        </ul>
        <div class="divider"></div>
        <p><strong>TEKAMOLO (common default):</strong> <strong>Te</strong>mporal → <strong>Ka</strong>usal → <strong>Mo</strong>dal (manner) → <strong>Lo</strong>kal</p>
        <p class="muted">Ich arbeite <strong>heute</strong> <strong>wegen der Prüfung</strong> <strong>konzentriert</strong> <strong>zu Hause</strong>.</p>
        <div class="divider"></div>
        <p><strong>Pronoun tendency:</strong> pronouns usually come before full noun objects.</p>
        <p class="muted">Ich gebe <strong>es</strong> dem Mann. / Ich gebe dem Mann <strong>das Buch</strong>.</p>
        <p><strong>When you break it:</strong> emphasis/focus, contrast, rhythm. (Advanced writing uses this deliberately.)</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich habe <strong>heute</strong> <strong>mit großer Freude</strong> <strong>in Berlin</strong> gearbeitet.</p>
        <p>Ich gebe <strong>ihm</strong> das Buch. (pronoun first)</p>
        <p>Ich gebe <strong>es</strong> dem Lehrer. (Akk pronoun before Dat noun)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> random adverb order.</p>
        <p><strong>Fix:</strong> default to TEKAMOLO, then deviate only for emphasis.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Put in natural order (TEKAMOLO):</p>
        <ul>
          <li>Ich lerne (in der Bibliothek) (heute) (konzentriert).</li>
          <li>Wir treffen uns (wegen des Projekts) (morgen) (im Büro).</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2/C1 — PASSIVE PERFECT/PLUPERFECT + ALTERNATIVES
  // --------------------------
  {
    id: "passive-perfect-forms",
    level: "C1",
    tags: ["Voice","Tenses","Writing"],
    title: "Passive in Perfekt/Plusquamperfekt + alternatives (man / sich lassen)",
    summary: "Advanced passive forms appear often in reports. Also learn alternatives: man-constructions and 'sich lassen + Infinitiv'.",
    deep: `
      <div class="box">
        <p><strong>Action passive (werden) recap:</strong> wird gemacht.</p>
        <p><strong>Perfekt passive:</strong> ist gemacht <strong>worden</strong> (NOT: ist gemacht).</p>
        <p><strong>Plusquamperfekt passive:</strong> war gemacht <strong>worden</strong>.</p>
        <div class="divider"></div>
        <p><strong>Alternatives (often better style):</strong></p>
        <ul>
          <li><strong>man</strong>: Man hat die Daten ausgewertet. (clear, active-ish)</li>
          <li><strong>sich lassen</strong>: Das lässt sich leicht erklären. (can be explained)</li>
          <li><strong>sein + adjective</strong>: Die Tür ist offen. (state)</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Der Vertrag <strong>ist</strong> gestern unterschrieben <strong>worden</strong>.</p>
        <p>Der Vertrag <strong>war</strong> bereits unterschrieben <strong>worden</strong>, als wir ankamen.</p>
        <p><strong>Man</strong> hat die Daten ausgewertet.</p>
        <p>Das <strong>lässt sich</strong> leicht erklären.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> confusing state passive with Perfekt passive.</p>
        <p><strong>State:</strong> Die Tür ist geöffnet. (open)</p>
        <p><strong>Perfekt action passive:</strong> Die Tür ist geöffnet <strong>worden</strong>. (was opened)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite using a passive alternative:</p>
        <ul>
          <li>Die Firma repariert das Gerät. → (man / sich lassen / passive)</li>
          <li>Jemand kann das Problem leicht lösen. → (sich lassen)</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2/C1 — PARTICIPLES + REDUCED RELATIVE CLAUSES
  // --------------------------
  {
    id: "participle-adjectives",
    level: "B2",
    tags: ["Participles","Adjectives","Writing"],
    title: "Participles as Adjectives (Partizip I vs II)",
    summary: "Partizip I describes an active ongoing quality (lachend), Partizip II a completed/passive/resulting quality (geschlossen).",
    deep: `
      <div class="box">
        <p><strong>Partizip I</strong> (present participle): verb + -d → <em>lachend, schlafend, wartend</em></p>
        <p class="muted">Usually means “doing X” / ongoing: ein <strong>lachendes</strong> Kind (a child that is laughing).</p>
        <div class="divider"></div>
        <p><strong>Partizip II</strong> (past participle): often means result/passive: eine <strong>geschlossene</strong> Tür (a closed door).</p>
        <p><strong>They behave like adjectives:</strong> adjective endings apply.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>ein <strong>wartender</strong> Kunde (waiting customer)</p>
        <p>die <strong>geschriebene</strong> E-Mail (written email)</p>
        <p>ein <strong>interessierendes</strong> Thema (interesting topic)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> mixing meaning.</p>
        <p><strong>Hint:</strong> Partizip I ≈ active/ongoing; Partizip II ≈ result/passive.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose Partizip I or II:</p>
        <ul>
          <li>eine (öffnende/geöffnete) Tür (the door is being opened vs is open/was opened)</li>
          <li>ein (lächelnder/gelächelter) Mann (only Partizip I makes sense here)</li>
        </ul>
      </div>
    `
  },

  {
    id: "reduced-relative-clauses",
    level: "C1",
    tags: ["Participles","Clauses","Writing"],
    title: "Reduced Relative Clauses (participial constructions)",
    summary: "German often shortens relative clauses into participle phrases in writing: 'die in Berlin lebenden Menschen' instead of 'die Menschen, die in Berlin leben'.",
    deep: `
      <div class="box">
        <p><strong>Why it appears:</strong> academic/journalistic style prefers compact information packaging.</p>
        <p><strong>Two common patterns:</strong></p>
        <ul>
          <li><strong>Partizip I</strong> for ongoing/action: die <strong>in Berlin lebenden</strong> Menschen</li>
          <li><strong>Partizip II</strong> for completed/passive: die <strong>von Experten geprüften</strong> Daten</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Important:</strong> participle phrases still need adjective endings and can get long — use carefully for readability.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Die Menschen, die in Berlin leben → die <strong>in Berlin lebenden</strong> Menschen</p>
        <p>Die Daten, die von Experten geprüft wurden → die <strong>von Experten geprüften</strong> Daten</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> creating huge noun stacks.</p>
        <p><strong>Fix:</strong> if the phrase becomes hard to parse, switch back to a normal relative clause.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite shorter (participial):</p>
        <ul>
          <li>Die Studenten, die auf die Prüfung warten, …</li>
          <li>Die Ergebnisse, die gestern veröffentlicht wurden, …</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C1 — ADVANCED CONNECTORS
  // --------------------------
  {
    id: "advanced-connectors",
    level: "C1",
    tags: ["Clauses","Style","Writing"],
    title: "Advanced Connectors (wenngleich, alldieweil, insofern, zumal, sofern …)",
    summary: "C1/C2 texts use connectors that express precise logic (concession, limitation, justification). Learn meaning + clause type (subordinate vs adverbial).",
    deep: `
      <div class="box">
        <p><strong>Key idea:</strong> many advanced connectors introduce subordinate clauses → verb-final + comma.</p>
        <p><strong>High-value connectors:</strong></p>
        <ul>
          <li><strong>wenngleich</strong> = although (formal concession)</li>
          <li><strong>zumal</strong> = especially since (adds strong reason)</li>
          <li><strong>sofern</strong> = provided that (condition)</li>
          <li><strong>insofern (als …)</strong> = insofar as (scope/limitation)</li>
          <li><strong>alldieweil</strong> = because/while (very formal/rare; recognize in reading)</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Register tip:</strong> Some are mostly written. Use them in writing after you can use the simpler ones correctly.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Wenngleich</strong> die Daten begrenzt <strong>sind</strong>, lassen sich Trends erkennen.</p>
        <p>Wir sollten gehen, <strong>zumal</strong> es schon spät <strong>ist</strong>.</p>
        <p><strong>Sofern</strong> du Zeit <strong>hast</strong>, können wir uns treffen.</p>
        <p>Das ist richtig, <strong>insofern als</strong> die Annahmen plausibel <strong>sind</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> forgetting verb-final in subordinate clauses.</p>
        <p><strong>Fix:</strong> treat them like weil/dass: comma + verb at end.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Complete with a connector (choose one): wenngleich / sofern / zumal</p>
        <ul>
          <li>____ du morgen Zeit hast, können wir telefonieren.</li>
          <li>Wir bleiben zu Hause, ____ es stark regnet.</li>
          <li>____ er wenig Erfahrung hat, hat er gute Ideen.</li>
        </ul>
      </div>
    `
  },

];
