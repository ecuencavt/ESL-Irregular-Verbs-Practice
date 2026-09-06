# ESL Irregular Verbs Memory Game - SIMPLIFIED SPECIFICATION
## For 4th ESO Students - Pure Form Matching with Flexible Answer Types

A comprehensive, randomized verb matching game where students see the BASE FORM and must find ALL related forms through different answer methods: text input + multiple choice combinations.

---

## 🎮 SIMPLIFIED GAME CONCEPT

### Core Mechanic:
1. **You're given the BASE FORM** of an irregular verb
   - Example: `go`

2. **You must provide 3 answers** (in any order, not necessarily together):
   - **Past Simple**: Type it yourself → `went`
   - **Past Participle**: Type it yourself → `gone`
   - **Catalan Translation**: Type it yourself → `anar`

3. **OR you can get hints** by switching to multiple choice for any form

4. **The game randomly decides** for each attempt whether you'll:
   - Type all three answers
   - Type two answers, multiple choice for one
   - Type one answer, multiple choice for two
   - Multiple choice for all three

5. **Every verb appears multiple times** with different answer type combinations

---

## 📊 VERB DATABASE (50 Essential Verbs for 4th ESO)

```
1. be → was/were | been | ser/estar
2. have → had | had | tenir
3. do → did | done | fer
4. go → went | gone | anar
5. get → got | got | obtenir
6. make → made | made | fer/fabricar
7. say → said | said | dir
8. see → saw | seen | veure
9. think → thought | thought | pensar
10. come → came | come | venir
11. eat → ate | eaten | menjar
12. drink → drank | drunk | beure
13. give → gave | given | donar
14. know → knew | known | saber
15. take → took | taken | agafar
16. buy → bought | bought | comprar
17. bring → brought | brought | portar
18. find → found | found | trobar
19. feel → felt | felt | sentir
20. leave → left | left | sortir/deixar
21. let → let | let | deixar
22. lose → lost | lost | perdre
23. meet → met | met | conèixer/trobar-se
24. pay → paid | paid | pagar
25. read → read | read | llegir
26. run → ran | run | córrer
27. sell → sold | sold | vendre
28. send → sent | sent | enviar
29. shut → shut | shut | tancar
30. sing → sang | sung | cantar
31. sit → sat | sat | seure
32. speak → spoke | spoken | parlar
33. spend → spent | spent | gastar
34. stand → stood | stood | estar dret
35. swim → swam | swum | nedar
36. teach → taught | taught | ensenyar
37. tell → told | told | dir/contar
38. understand → understood | understood | entendre
39. wear → wore | worn | portar (ropa)
40. win → won | won | guanyar
41. write → wrote | written | escriure
42. begin → began | begun | començar
43. break → broke | broken | trencar
44. build → built | built | construir
45. catch → caught | caught | atrapar
46. choose → chose → chosen | triar
47. cut → cut | cut | tallar
48. draw → drew | drawn | dibuixar
49. drive → drove | driven | conduir
50. fly → flew | flown | volar
```

---

## 🎯 ANSWER TYPE COMBINATIONS

The game randomly assigns one of 8 possible combinations for each attempt:

### **Pattern 1: All Text Input (YOU TYPE ALL 3)**
```
BASE FORM SHOWN: go

┌─────────────────────────────────────────┐
│ Complete the verb conjugation           │
├─────────────────────────────────────────┤
│                                         │
│ Base: go                                │
│ Past Simple: [went___________________]  │
│ Past Participle: [gone_________________]│
│ Catalan: [anar____________________]     │
│                                         │
│         [CHECK ANSWERS]                 │
└─────────────────────────────────────────┘

FEEDBACK:
✓ All correct! +3 points
  Verb: go → went → gone (anar)
  
OR

✗ 2/3 correct
  Past Simple: went ✓
  Past Participle: gone ✓
  Catalan: "ir" ✗ Should be: anar
  Try again!
```

### **Pattern 2: All Multiple Choice (SELECT ALL 3)**
```
BASE FORM SHOWN: drink

┌─────────────────────────────────────────┐
│ Select the correct forms                │
├─────────────────────────────────────────┤
│                                         │
│ Base: drink                             │
│                                         │
│ Past Simple:                            │
│ ⚪ drank  ⚪ drunk  ⚪ drinked  ⚪ drinc │
│                                         │
│ Past Participle:                        │
│ ⚪ drunk  ⚪ drank  ⚪ drinking ⚪ drinked│
│                                         │
│ Catalan:                                │
│ ⚪ beber  ⚪ beure  ⚪ bevere  ⚪ beura │
│                                         │
│         [CHECK ANSWERS]                 │
└─────────────────────────────────────────┘

FEEDBACK:
✓ All correct! +3 points
  You selected: drank, drunk, beure ✓
```

### **Pattern 3: Text Input (2) + Multiple Choice (1)**
```
BASE FORM SHOWN: make

┌─────────────────────────────────────────┐
│ Mixed input and selection               │
├─────────────────────────────────────────┤
│                                         │
│ Base: make                              │
│ Past Simple: [made__________________]   │
│ Past Participle: [made________________] │
│                                         │
│ Catalan (select):                       │
│ ⚪ hacer  ⚪ fer  ⚪ fer/fabricar  ⚪ fur │
│                                         │
│         [CHECK ANSWERS]                 │
└─────────────────────────────────────────┘
```

### **Pattern 4: Text Input (2) + Multiple Choice (1) - Different order**
```
BASE FORM SHOWN: sing

┌─────────────────────────────────────────┐
│ Mixed input and selection               │
├─────────────────────────────────────────┤
│                                         │
│ Base: sing                              │
│                                         │
│ Past Simple (select):                   │
│ ⚪ song  ⚪ sang  ⚪ sung  ⚪ singe     │
│                                         │
│ Past Participle: [sung_________________]│
│ Catalan: [cantar_________________]      │
│                                         │
│         [CHECK ANSWERS]                 │
└─────────────────────────────────────────┘
```

### **Pattern 5: Text Input (1) + Multiple Choice (2)**
```
BASE FORM SHOWN: write

┌─────────────────────────────────────────┐
│ Mixed input and selection               │
├─────────────────────────────────────────┤
│                                         │
│ Base: write                             │
│ Past Simple: [wrote_________________]   │
│                                         │
│ Past Participle (select):               │
│ ⚪ wrote  ⚪ written  ⚪ writing  ⚪ writed│
│                                         │
│ Catalan (select):                       │
│ ⚪ escribir  ⚪ escriure  ⚪ eskriura   │
│                                         │
│         [CHECK ANSWERS]                 │
└─────────────────────────────────────────┘
```

### **Pattern 6: Text Input (1) + Multiple Choice (2) - Different order**
```
BASE FORM SHOWN: teach

┌─────────────────────────────────────────┐
│ Mixed input and selection               │
├─────────────────────────────────────────┤
│                                         │
│ Base: teach                             │
│                                         │
│ Past Simple (select):                   │
│ ⚪ teach  ⚪ teached  ⚪ taught  ⚪ taugth│
│                                         │
│ Past Participle (select):               │
│ ⚪ taught  ⚪ teached  ⚪ teaching      │
│                                         │
│ Catalan: [ensenyar_________________]    │
│                                         │
│         [CHECK ANSWERS]                 │
└─────────────────────────────────────────┘
```

### **Pattern 7: Mostly Text, Tiny Help**
```
BASE FORM SHOWN: know

┌─────────────────────────────────────────┐
│ Mostly typing practice                  │
├─────────────────────────────────────────┤
│                                         │
│ Base: know                              │
│ Past Simple: [knew__________________]   │
│ Past Participle: [known________________]│
│                                         │
│ Catalan (select - HINT):                │
│ ⚪ saber  ⚪ entendre  ⚪ creure  ⚪ dir │
│                                         │
│         [CHECK ANSWERS]                 │
└─────────────────────────────────────────┘
```

### **Pattern 8: Mostly Multiple Choice, Tiny Typing**
```
BASE FORM SHOWN: come

┌─────────────────────────────────────────┐
│ Mostly selection practice               │
├─────────────────────────────────────────┤
│                                         │
│ Base: come                              │
│                                         │
│ Past Simple (select):                   │
│ ⚪ come  ⚪ came  ⚪ coming  ⚪ comed    │
│                                         │
│ Past Participle (select):               │
│ ⚪ come  ⚪ came  ⚪ comeing  ⚪ coming  │
│                                         │
│ Catalan: [venir_________________]       │
│                                         │
│         [CHECK ANSWERS]                 │
└─────────────────────────────────────────┘
```

---

## 📊 PATTERN DISTRIBUTION

Each level distributes these patterns evenly:

### **LEVEL 1 (10 verbs = 10 questions):**
```
Pattern 1 (All Text):        2 questions
Pattern 2 (All Multiple):    2 questions
Pattern 3 (2 Text + 1 MC):   2 questions
Pattern 4 (2 Text + 1 MC):   1 question
Pattern 5 (1 Text + 2 MC):   1 question
Pattern 6 (1 Text + 2 MC):   1 question
Pattern 7 (Mostly Text):     1 question
Pattern 8 (Mostly MC):       1 question

TOTAL: 10 complete verb sets = 30 total form answers
TIME: 10-15 minutes
```

### **LEVEL 2 (20 verbs = 20 questions):**
```
Each pattern used 2.5 times (rounded)
TOTAL: 20 complete verb sets = 60 total form answers
TIME: 25-35 minutes
```

### **LEVEL 3 (20 verbs = 20 questions):**
```
Each pattern used 2.5 times (rounded)
TOTAL: 20 complete verb sets = 60 total form answers
TIME: 25-35 minutes
```

### **LEVEL 4 - MASTER (50 verbs = 50 questions):**
```
Each pattern used 6.25 times (rounded evenly)
TOTAL: 50 complete verb sets = 150 total form answers
TIME: 60-80 minutes
THE ULTIMATE MASTERY TEST!
```

---

## 🎲 RANDOMIZATION FEATURES

### Random Elements:
1. **Verb order** - Questions appear in random sequence
2. **Answer pattern** - Each verb gets random pattern (1-8)
3. **Multiple choice distractors** - Wrong answers change each time
4. **Form position** - Past/Participle/Catalan may appear in different order

### Example - Verb "go" appears 4 times:

| Appearance | Pattern | Your Challenge | Answer Format |
|-----------|---------|-----------------|----------------|
| 1st | All Text Input | Type went, gone, anar | 3 text boxes |
| 2nd | All Multiple Choice | Select all three forms | 3 selections |
| 3rd | 2 Text + 1 MC | Type past forms, select Catalan | Mixed |
| 4th | 1 Text + 2 MC | Type Catalan, select past forms | Mixed |

**Result:** You practice "go" in 4 different ways!

---

## ✅ ANSWER VALIDATION SYSTEM

### Text Input Validation Rules:

```
VERB: go
USER TYPES: "went"

✓ ACCEPT:
  - went, Went, WENT (case-insensitive)
  - went, went (trimmed spaces)
  - wеnt (even with accidental Unicode)

✗ REJECT:
  - wen (typo)
  - wnet (typo)
  - went it (extra words)
  - go (wrong form - this is base form)

FEEDBACK ON ERROR:
❌ "Not quite correct."
   Correct answer: went
   Tip: This is the past simple form
        Show: go → went → gone
```

### Catalan Validation:

```
VERB: go (Catalan)
USER TYPES: "anar"

✓ ACCEPT:
  - anar, Anar, ANAR
  - anar, anar (with/without accent issues)

SPECIAL: Accept spelling variations:
  - For "correr" (run): accept "correr" OR "córrer"
  - For "estar dret" (stand): accept partial matches

✗ REJECT:
  - ir (too short/different word)
  - andar (Spanish, not Catalan)
  - went (English form, not Catalan)
```

### Multiple Choice Always Simple:
```
Just click the correct option
If wrong, shows why:
✗ "sang" is correct for PAST SIMPLE, not PAST PARTICIPLE
   Correct: sung
```

---

## 🎮 COMPLETE GAME FLOW EXAMPLE

```
═══════════════════════════════════════════════════════════
LEVEL 1: ESSENTIAL VERBS - Question 1 of 10
═══════════════════════════════════════════════════════════

BASE FORM: GO

[PATTERN 1: ALL TEXT INPUT]

Past Simple: [went_____________________]
Past Participle: [gone_________________]
Catalan: [anar_____________________]

           [CHECK ANSWERS]

User enters: went, gone, anar

✓ PERFECT! +3 POINTS

Complete form: 
go (base) → went (past) → gone (participle) | anar (Catalan)

[NEXT VERB →]

═══════════════════════════════════════════════════════════
LEVEL 1: ESSENTIAL VERBS - Question 2 of 10
═══════════════════════════════════════════════════════════

BASE FORM: HAVE

[PATTERN 2: ALL MULTIPLE CHOICE]

Past Simple:
⚪ have   ⚪ had    ⚪ having  ⚪ haved

Past Participle:
⚪ have   ⚪ had    ⚪ having  ⚪ haved

Catalan:
⚪ haber  ⚪ tenir  ⚪ haver   ⚪ havé

           [CHECK ANSWERS]

User selects: had, had, tenir

✓ PERFECT! +3 POINTS

Complete form:
have (base) → had (past) → had (participle) | tenir (Catalan)

[NEXT VERB →]

═══════════════════════════════════════════════════════════
LEVEL 1: ESSENTIAL VERBS - Question 3 of 10
═══════════════════════════════════════════════════════════

BASE FORM: DO

[PATTERN 3: 2 TEXT INPUT + 1 MULTIPLE CHOICE]

Past Simple: [did____________________]
Past Participle: [done_________________]

Catalan (select):
⚪ hacer  ⚪ fer    ⚪ fazer   ⚪ fazer

           [CHECK ANSWERS]

User enters: did, done, selects "fer"

✓ PERFECT! +3 POINTS

Complete form:
do (base) → did (past) → done (participle) | fer (Catalan)

[NEXT VERB →]

═══════════════════════════════════════════════════════════
LEVEL 1: ESSENTIAL VERBS - Question 4 of 10
═══════════════════════════════════════════════════════════

BASE FORM: EAT

[PATTERN 5: 1 TEXT INPUT + 2 MULTIPLE CHOICE]

Past Simple (select):
⚪ eat    ⚪ eated  ⚪ ate    ⚪ eaten

Past Participle (select):
⚪ eat    ⚪ ate    ⚪ eaten  ⚪ eater

Catalan: [menjar________________]

           [CHECK ANSWERS]

User selects: ate, eaten, types: menjar

✓ PERFECT! +3 POINTS

Complete form:
eat (base) → ate (past) → eaten (participle) | menjar (Catalan)

═══════════════════════════════════════════════════════════
[Continuing with questions 5-10...]
═══════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════
LEVEL 1 COMPLETE - RESULTS
═══════════════════════════════════════════════════════════

Score: 30/30 (100%)
Rating: 🥇 PERFECT MASTERY!

Breakdown:
✓ Text Inputs: 12/12 correct
✓ Multiple Choices: 18/18 correct

You successfully practiced:
- be, have, do, go, get, make, say, see, think, come

Next: Level 2 (20 Common Verbs)
      Level 3 (20 Extended Verbs)
      Level 4 MASTER (50 Verbs Challenge)

[CONTINUE] [TAKE BREAK] [END SESSION]
```

---

## 📊 GAME LEVELS

### **LEVEL 1: ESSENTIAL VERBS (10 verbs)**
**Verbs:** be, have, do, go, get, make, say, see, think, come
- 10 complete verb sets
- 30 total form answers
- Time: **10-15 minutes**
- Difficulty: ⭐ EASY
- **Perfect for: Beginners, warm-up**

### **LEVEL 2: COMMON VERBS (20 verbs)**
**Verbs:** eat, drink, give, know, take, buy, bring, find, feel, leave, let, lose, meet, pay, read, run, sell, send, shut, sing
- 20 complete verb sets
- 60 total form answers
- Time: **25-35 minutes**
- Difficulty: ⭐⭐ MEDIUM
- **Perfect for: Consolidating knowledge**

### **LEVEL 3: EXTENDED VERBS (20 verbs)**
**Verbs:** sit, speak, spend, stand, swim, teach, tell, understand, wear, win, write, begin, break, build, catch, choose, cut, draw, drive, fly
- 20 complete verb sets
- 60 total form answers
- Time: **25-35 minutes**
- Difficulty: ⭐⭐⭐ HARD
- **Perfect for: Advanced students**

### **LEVEL 4: MASTER CHALLENGE (All 50 verbs)**
**All 50 irregular verbs combined**
- 50 complete verb sets
- 150 total form answers
- Time: **60-80 minutes**
- Difficulty: ⭐⭐⭐⭐⭐ EXTREME
- **Perfect for: THE ULTIMATE TEST - Complete mastery**

### **BONUS: Custom Mode**
- Choose specific verbs
- Create mini-challenges
- Combine any verbs you want
- Perfect for exam prep

---

## 💾 SCORING SYSTEM

### Points:
- ✓ 1 Complete Verb Set (3 correct forms) = **3 points**
- ✗ Partial Credit:
  - 2 out of 3 correct = **2 points**
  - 1 out of 3 correct = **1 point**
  - 0 out of 3 correct = **0 points**

### Score Ranges:

| Score | Rating | Status |
|-------|--------|--------|
| 95-100% | 🥇 MASTER | Exceptional! Complete mastery! |
| 85-94% | 🥈 EXCELLENT | Outstanding work! Nearly perfect! |
| 75-84% | 🥉 VERY GOOD | Great job! Strong understanding! |
| 65-74% | ✅ GOOD | Good effort! Keep practicing! |
| 50-64% | ⚠️ NEEDS WORK | You're improving! More practice needed! |
| <50% | ❌ TRY AGAIN | Review the list and try again! |

### Progress Tracking:

```
YOUR PROGRESS:
═══════════════════════════════════════════════════════════

LEVEL 1: ████████░░ 89% (Best: 96%)
         Completed: 8 times | Average: 84%
         Weak areas: be/been/was

LEVEL 2: ███████░░░ 78% (Best: 91%)
         Completed: 5 times | Average: 76%
         Weak areas: teach/taught, sell/sold

LEVEL 3: ████░░░░░░ 45% (Best: 67%)
         Completed: 2 times | Average: 41%
         Weak areas: Most verbs - keep practicing!

LEVEL 4: ░░░░░░░░░░ 0% (Best: 0%)
         Not completed yet
         Ready when you are!

═══════════════════════════════════════════════════════════
```

---

## 🎯 WHY THIS DESIGN IS PERFECT

### ✅ **Simple Base Concept**
- Always see the base form
- Always provide 3 answers: past, participle, Catalan
- Clear, focused task

### ✅ **Flexible Answer Methods**
- Some questions: pure typing (active recall)
- Some questions: pure selection (recognition)
- Some questions: mix (scaffolded help)
- Never the same every time

### ✅ **Complete Learning Coverage**
- Each verb's 3 related forms together (strong memory association)
- Repeated encounters with different input methods
- 4 different input patterns per verb across game progression

### ✅ **Memory Optimization**
- Seeing base form = consistent retrieval practice
- Typing: strongest recall (deepest processing)
- Multiple choice: helpful when stuck (scaffolding)
- Mixed: maintains challenge while providing support

### ✅ **No Sentence Complexity**
- Pure form matching
- No grammar context needed
- Direct memorization
- Perfect for irregular verb tables

### ✅ **Highly Replayable**
- 8 different input patterns
- Random question order
- Random distractors
- 200+ unique game sequences possible

### ✅ **Progressive Mastery**
- Start with 10 essential verbs
- Build to 50 verb mastery
- Each level builds confidence
- Level 4 = true expertise

### ✅ **Teacher-Friendly**
- Track which students know which verbs
- Identify class weak points
- See improvement over time
- Supports exam prep

### ✅ **Student-Friendly**
- Intuitive interface
- Immediate feedback
- Achievable goals
- Rewarding progression

### ✅ **Exam-Ready**
- Covers all essential irregular verbs for 4th ESO
- Mixed question types like real exams
- Builds automatic recall
- Increases speed and accuracy

---

## 🚀 IMPLEMENTATION ROADMAP

### Phase 1: MVP (Core Game)
- [x] Verb database (50 verbs with 4 forms each)
- [x] Question generator (8 pattern types)
- [x] Text input with validation
- [x] Multiple choice with random distractors
- [x] Basic scoring
- [ ] Level 1 only to start

### Phase 2: Expansion
- [ ] Levels 2, 3, 4
- [ ] Progress tracking (localStorage)
- [ ] Score history
- [ ] Weak verb identification

### Phase 3: Enhancement
- [ ] Mobile responsive design
- [ ] Timer option
- [ ] Sound effects (optional)
- [ ] Achievements/Badges

### Phase 4: Advanced (Optional)
- [ ] User accounts
- [ ] Class-wide leaderboards
- [ ] Teacher dashboard
- [ ] Export scores
- [ ] Analytics

---

**This is the DEFINITIVE irregular verbs app for pure memory practice. Simple, effective, and highly engaging! 🚀**
