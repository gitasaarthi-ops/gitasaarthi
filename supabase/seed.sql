-- ============================================================================
-- GITA COMPANION (గీత సారథి) - SEED DATA DEMONSTRATION
-- Demonstrating 3-Layer Knowledge Architecture + Two Telugu Fields + Explainability
-- ============================================================================

-- 0. MANIFEST & SOURCES
INSERT INTO content_manifest (version, verse_count, languages, checksum, changelog)
VALUES (
    '1.0.0', 
    700, 
    '{"sa", "en", "te"}', 
    'sha256_e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 
    'Initial canonical scripture + modern application layer seed'
) ON CONFLICT (version) DO NOTHING;

INSERT INTO sources (id, name, author, content_type, language, license, commercial_use, attribution_required, notes)
VALUES 
(
    'canonical_sanskrit', 
    'Bhagavad Gita Canonical Recension', 
    'Vyasa / Traditional', 
    'SCRIPTURE', 
    'sa', 
    'Public Domain', 
    TRUE, 
    FALSE, 
    'Ancient Sanskrit canonical text.'
),
(
    'saarthi_english_direct', 
    'Gita Companion Direct English', 
    'Gita Companion Editorial Board', 
    'TRANSLATION', 
    'en', 
    'Proprietary / In-House', 
    TRUE, 
    FALSE, 
    'Clear, modern English focused on psychological clarity.'
),
(
    'saarthi_telugu_canonical', 
    'గీత సారథి తెలుగు అనువాదం', 
    'శ్రీ వ్యాస సంప్రదాయం & గీత సారథి మండలి', 
    'TRANSLATION', 
    'te', 
    'Proprietary / In-House', 
    TRUE, 
    FALSE, 
    'ప్రామాణికమైన, గౌరవప్రదమైన తెలుగు శ్లోక తాత్పర్యం.'
) ON CONFLICT (id) DO NOTHING;

-- 1. CHAPTERS (Chapter 2: Sankhya Yoga)
INSERT INTO chapters (id, chapter_number, name_sanskrit, name_iast, name_english, name_telugu, yoga_name_telugu, verses_count, summary_en, summary_te)
VALUES (
    2, 
    2, 
    'साङ्ख्ययोग', 
    'Sāṅkhya Yoga', 
    'The Yoga of Knowledge & Self-Realization', 
    'సాంఖ్య యోగము', 
    'జ్ఞాన యోగము & కర్మయోగాచరణ', 
    72, 
    'Krishna delivers the core philosophy of immortality of the Self, steadfast intellect (Sthitaprajna), and self-less action without obsession over fruits (Nishkama Karma).', 
    'శ్రీకృష్ణుడు ఆత్మ యొక్క శాశ్వతత్వాన్ని, స్థితప్రజ్ఞుని లక్షణాలను మరియు ఫలితాన్ని ఆశించక కర్తవ్యాన్ని నిర్వహించే నిష్కామ కర్మ సిద్ధాంతాన్ని వివరిస్తాడు.'
) ON CONFLICT (id) DO NOTHING;

-- 2. LAYER 1: VERSES (BG_02_47)
INSERT INTO verses (id, chapter_id, verse_number, sanskrit, iast, meter)
VALUES (
    'BG_02_47', 
    2, 
    47, 
    'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥', 
    'karmaṇy evādhikāras te mā phaleṣu kadācana |
mā karma-phala-hetur bhūr mā te saṅgo ''stv akarmaṇi ||', 
    'Anushtup'
) ON CONFLICT (id) DO NOTHING;

-- 3. LAYER 2: TRANSLATIONS (Two Telugu Fields Demonstrated: Formal Translation + Simple Explanation)
INSERT INTO translations (verse_id, source_id, language, translation, simple_explanation)
VALUES 
(
    'BG_02_47',
    'saarthi_english_direct',
    'en',
    'You have an absolute right to your actions, but never to the fruits of your actions. Let not the fruits of action be your motive, nor let yourself be attached to inaction.',
    'Your power is strictly 100% inside your current effort. The outcome depends on a thousand external variables outside your control. When you obsess over the outcome, you drain the very energy required to do the work right now.'
),
(
    'BG_02_47',
    'saarthi_telugu_canonical',
    'te',
    'కర్మలయందే నీకు అధికారము కలదు, కాని వాటి ఫలితాల యందు ఎన్నడూ లేదు. కర్మఫలమునకు నీవు కారణము కాకూడదు; అలాగని కర్మలను విడిచిపెట్టుట యందును నీకు ఆసక్తి ఉండరాదు.',
    'నీ చేతిలో ఉన్నది నీ సంపూర్ణ ప్రయత్నం మాత్రమే. ఫలితం పూర్తిగా నీ ఒక్కడి నియంత్రణలో ఉండదు. రేపటి రిజల్ట్ గురించి ఆలోచించి భయపడటం ఆపి, ఈ క్షణంలో నీ ముందున్న పనిని మనస్ఫూర్తిగా పూర్తి చేయి.'
) ON CONFLICT (verse_id, source_id, language) DO UPDATE 
SET translation = EXCLUDED.translation, simple_explanation = EXCLUDED.simple_explanation;

-- 4. LAYER 2: WORD-BY-WORD ANVAYA (Sanskrit -> Telugu -> English)
INSERT INTO verse_words (verse_id, word_order, word_sanskrit, word_iast, meaning_en, meaning_te, grammar_role, root)
VALUES 
('BG_02_47', 1, 'कर्मणि', 'karmaṇi', 'in action / prescribed duty', 'చేసే కర్మ యందే', 'locative singular', 'kṛ'),
('BG_02_47', 2, 'एव', 'eva', 'certainly / only', 'మాత్రమే', 'indeclinable particle', NULL),
('BG_02_47', 3, 'अधिकारः', 'adhikāraḥ', 'right / jurisdiction', 'అధికారము / హక్కు', 'nominative singular', 'adhikṛ'),
('BG_02_47', 4, 'ते', 'te', 'your / of you', 'నీకు', 'genitive singular pronoun', NULL),
('BG_02_47', 5, 'मा', 'mā', 'never / not', 'ఎన్నడూ వద్దు', 'negative particle', NULL),
('BG_02_47', 6, 'फलेषु', 'phaleṣu', 'in the fruits / results', 'ఫలితముల యందు', 'locative plural', 'phala'),
('BG_02_47', 7, 'कदाचन', 'kadācana', 'at any time', 'ఎప్పుడూ కూడా', 'indeclinable adverb', NULL),
('BG_02_47', 8, 'मा', 'mā', 'not', 'వద్దు', 'negative particle', NULL),
('BG_02_47', 9, 'कर्म-फल-हेतुः', 'karma-phala-hetuḥ', 'motivated by the fruit of action', 'ఫలితమే లక్ష్యముగా కలవాడవు', 'compound nominative', 'hetu'),
('BG_02_47', 10, 'भूः', 'bhūḥ', 'become / be', 'కావద్దు', 'aorist optative', 'bhū'),
('BG_02_47', 11, 'मा', 'mā', 'nor', 'అలాగని', 'negative particle', NULL),
('BG_02_47', 12, 'ते', 'te', 'your', 'నీకు', 'genitive singular', NULL),
('BG_02_47', 13, 'सङ्गः', 'saṅgaḥ', 'attachment / clinging', 'ఆసక్తి / బంధం', 'nominative singular', 'sañj'),
('BG_02_47', 14, 'अस्तु', 'astu', 'let there be', 'ఉండవలదు', 'imperative verb', 'as'),
('BG_02_47', 15, 'अकर्मणि', 'akarmaṇi', 'in inaction / sitting idle', 'పని మానేయడం యందు', 'locative singular', 'kṛ')
ON CONFLICT (verse_id, word_order) DO NOTHING;

-- 5. LAYER 3: THEMES
INSERT INTO themes (id, name_en, name_te, category, description_en, description_te)
VALUES 
(
    'karma_yoga', 
    'Karma Yoga (Selfless Action)', 
    'కర్మ యోగము', 
    'ACTION', 
    'The science of action executed with complete focus and zero anxiety over personal reward.', 
    'ఫలితాలపై వ్యామోహం లేకుండా కర్తవ్యాన్ని ఈశ్వరార్పణ భావంతో నిర్వహించే శాస్త్రం.'
),
(
    'outcome_detachment', 
    'Detachment from Fruits', 
    'ఫలాసక్తిని వదలడం', 
    'MIND', 
    'Freeing the conscious mind from future projection and result fixation.', 
    'భవిష్యత్తు ఫలితాల భయం నుండి మనస్సును విముక్తం చేసి ప్రస్తుత పనిపై నిలపడం.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verse_themes (verse_id, theme_id, weight)
VALUES 
('BG_02_47', 'karma_yoga', 1.00),
('BG_02_47', 'outcome_detachment', 1.00)
ON CONFLICT (verse_id, theme_id) DO NOTHING;

-- 6. LAYER 3: SITUATIONS & EXPLAINABILITY GRAPH
INSERT INTO situations (id, title_en, title_te, category, symptom_modern_en, symptom_modern_te, krishna_diagnosis_en, krishna_diagnosis_te)
VALUES 
(
    'career_pressure',
    'Career Burnout & Outcome Anxiety',
    'ఉద్యోగ ఒత్తిడి & భవిష్యత్తు ఆందోళన',
    'WORK',
    'You are constantly refreshing your email, worrying about performance reviews, and paralyzed by whether your project will succeed.',
    'ఆఫీస్ ఈమెయిల్స్ పదే పదే చూస్తూ, ప్రమోషన్ లేదా రేటింగ్ ఏమవుతుందోనన్న భయంతో పనిపై ఏకాగ్రత కోల్పోవడం.',
    'Arjuna Syndrome: Projecting fear into future events outside your control drains cognitive stamina from the present duty.',
    'అర్జున విషాదం: మన చేతిలో లేని భవిష్యత్తు ఫలితాల గురించి అతిగా ఊహించుకోవడం వల్ల ప్రస్తుత కర్తవ్యాన్ని సరిగ్గా చేయలేకపోవడం.'
),
(
    'exam_stress',
    'Exam & Competitive Performance Dread',
    'పరీక్షల భయం & ఫలితాల దిగులు',
    'INNER_CONFLICT',
    'You cannot study because thoughts of failing the exam or letting your parents down keep flooding your mind.',
    'పరీక్ష ఫెయిల్ అయితే ఏమవుతుందో, అందరూ ఏమనుకుంటారో అనే భయంతో పుస్తకం ముందు పెట్టుకుని కూడా చదవలేకపోవడం.',
    'The mind is attached to the fruit (the marks/rank) rather than the process (the concept/study hour).',
    'మనస్సు చదువుకునే క్షణం మీద కాకుండా, భవిష్యత్తులో వచ్చే ర్యాంకు లేదా మార్కుల మీద చిక్కుకుపోవడం.'
) ON CONFLICT (id) DO NOTHING;

-- Explicit Explainability Linkage (Why this shloka is recommended)
INSERT INTO verse_situations (verse_id, situation_id, relevance_score, is_primary_anchor, why_this_shloka_en, why_this_shloka_te)
VALUES 
(
    'BG_02_47',
    'career_pressure',
    0.98,
    TRUE,
    'This verse directly addresses the root cause of burnout: separating your labor from psychological attachment to validation, ensuring 100% focused energy on the task.',
    'ఈ శ్లోకం ఉద్యోగ ఒత్తిడి యొక్క అసలు మూలాన్ని పరిష్కరిస్తుంది: మన కర్తవ్యాన్ని, బాహ్య ఫలితాల అంచనాల నుండి వేరు చేసి, పూర్తి శక్తిని ప్రస్తుత పనిపైనే కేంద్రీకరింపజేస్తుంది.'
),
(
    'BG_02_47',
    'exam_stress',
    0.95,
    TRUE,
    'Krishna reminds the student that worry cannot alter the exam result; only dedicated, unhurried study in this singular hour influences the outcome.',
    'శ్రీకృష్ణుడు విద్యార్థికి గుర్తుచేస్తాడు: ఆందోళన ఫలితాన్ని మార్చలేదు; ఈ గంటలో శ్రద్ధగా నేర్చుకునే ఏకాగ్రత మాత్రమే విజయానికి దారితీస్తుంది.'
) ON CONFLICT (verse_id, situation_id) DO UPDATE 
SET why_this_shloka_en = EXCLUDED.why_this_shloka_en, why_this_shloka_te = EXCLUDED.why_this_shloka_te;

-- 7. LAYER 3: PRACTICAL MICRO-PROTOCOLS
INSERT INTO practices (id, title_en, title_te, duration_seconds, category, difficulty, anchor_verse_id, why_recommended_en, why_recommended_te, steps)
VALUES 
(
    'practice_control_the_controllable',
    'Control the Controllable (Nishkama Reset)',
    'నీ చేతిలో ఉన్నది మాత్రమే చెయ్యి (3 నిమిషాల రీసెట్)',
    180,
    'COGNITIVE_REFRAME',
    'BEGINNER',
    'BG_02_47',
    'Immediately releases the neurological fight-or-flight response triggered by obsessing over external events.',
    'మన నియంత్రణలో లేని విషయాల గురించి ఆలోచించి మెదడుకు కలిగే తీవ్రమైన ఆందోళనను తక్షణమే తగ్గించి ప్రశాంతతను ఇస్తుంది.',
    '[
        {
            "step": 1,
            "title_en": "Name the Phantom Fear",
            "title_te": "నీ భయాన్ని స్పష్టంగా గుర్తించు",
            "instruction_en": "Take a deep breath. Write down the 1 future outcome terrifying you right now (e.g. \"Getting a bad review\").",
            "instruction_te": "ఒక్కసారి దీర్ఘంగా శ్వాస తీసుకో. నిన్ను భయపెడుతున్న భవిష్యత్తు ఫలితాన్ని మనసులో అనుకో."
        },
        {
            "step": 2,
            "title_en": "Draw the Kurukshetra Circle",
            "title_te": "పరిధిని గీయి",
            "instruction_en": "Ask: Is that outcome 100% in your hands right now? No. What IS in your hands? (e.g. \"Refining section 2 of this presentation\").",
            "instruction_te": "ప్రశ్నించుకో: ఆ ఫలితం పూర్తిగా నీ చేతుల్లో ఉందా? లేదు. ఈ నిమిషంలో నీ చేతుల్లో ఉన్న పని ఏది?"
        },
        {
            "step": 3,
            "title_en": "Execute 1 Single Action",
            "title_te": "ఒక్క చిన్న అడుగు వేయి",
            "instruction_en": "Set a timer for 10 minutes. Work only on that controllable piece with zero care for the applause or outcome.",
            "instruction_te": "10 నిమిషాల టైమర్ పెట్టుకో. ఫలితం ఎలా ఉంటుందనే ఆలోచన పక్కనపెట్టి, ఆ ఒక్క పనిని శ్రద్ధగా పూర్తి చెయ్యి."
        }
    ]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO situation_practices (situation_id, practice_id, display_order)
VALUES 
('career_pressure', 'practice_control_the_controllable', 1),
('exam_stress', 'practice_control_the_controllable', 1)
ON CONFLICT (situation_id, practice_id) DO NOTHING;
