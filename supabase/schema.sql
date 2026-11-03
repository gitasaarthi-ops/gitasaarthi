-- ============================================================================
-- GITA COMPANION (గీత సారథి) - MASTER DATABASE SCHEMA
-- PostgreSQL / Supabase Schema for 700 Shlokas + 3-Layer Knowledge Architecture
-- ============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "vector"; -- For pgvector semantic search (Tier 3)

-- ----------------------------------------------------------------------------
-- 0. SYSTEM MANIFEST & PROVENANCE
-- ----------------------------------------------------------------------------

-- Versioning for offline-first sync (Android Room <-> Supabase)
CREATE TABLE IF NOT EXISTS content_manifest (
    version VARCHAR(32) PRIMARY KEY, -- e.g. "1.0.0"
    released_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    verse_count INT NOT NULL DEFAULT 700,
    languages TEXT[] NOT NULL DEFAULT '{"sa", "en", "te"}',
    checksum VARCHAR(64) NOT NULL,
    changelog TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Content provenance & intellectual property tracking
CREATE TABLE IF NOT EXISTS sources (
    id VARCHAR(64) PRIMARY KEY, -- e.g. "public_domain_canonical", "purohit_swami_1935"
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    content_type VARCHAR(64) NOT NULL, -- "SCRIPTURE", "TRANSLATION", "COMMENTARY", "PRACTICE"
    language VARCHAR(16) NOT NULL, -- "sa", "en", "te", "hi"
    license VARCHAR(64) NOT NULL, -- "Public Domain", "CC-BY-SA", "Proprietary / In-House"
    source_url TEXT,
    commercial_use BOOLEAN NOT NULL DEFAULT TRUE,
    attribution_required BOOLEAN NOT NULL DEFAULT FALSE,
    notes TEXT
);

-- ----------------------------------------------------------------------------
-- LAYER 1: CANONICAL SCRIPTURE (Immutable Divine Text)
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS chapters (
    id INT PRIMARY KEY, -- 1 to 18
    chapter_number INT NOT NULL UNIQUE CHECK (chapter_number BETWEEN 1 AND 18),
    name_sanskrit TEXT NOT NULL,
    name_iast VARCHAR(255) NOT NULL,
    name_english VARCHAR(255) NOT NULL,
    name_telugu VARCHAR(255) NOT NULL,
    yoga_name_telugu VARCHAR(255) NOT NULL, -- e.g. "సాంఖ్య యోగము"
    verses_count INT NOT NULL CHECK (verses_count > 0),
    summary_en TEXT NOT NULL,
    summary_te TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS verses (
    id VARCHAR(16) PRIMARY KEY, -- Standardized ID: "BG_02_47"
    chapter_id INT NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    verse_number INT NOT NULL CHECK (verse_number > 0),
    sanskrit TEXT NOT NULL, -- Devanagari script
    iast TEXT NOT NULL, -- International Alphabet of Sanskrit Transliteration
    meter VARCHAR(64) DEFAULT 'Anushtup',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_chapter_verse UNIQUE (chapter_id, verse_number)
);

CREATE INDEX idx_verses_chapter_num ON verses(chapter_id, verse_number);

-- ----------------------------------------------------------------------------
-- LAYER 2: MEANING, WORD-BY-WORD ANVAYA & EXPLANATIONS
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS translations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    verse_id VARCHAR(16) NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    source_id VARCHAR(64) NOT NULL REFERENCES sources(id) ON DELETE RESTRICT,
    language VARCHAR(16) NOT NULL, -- "en", "te", "hi"
    translation TEXT NOT NULL, -- Faithful classical translation
    simple_explanation TEXT, -- Accessible modern explanation (e.g. for youth)
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_verse_source_lang UNIQUE (verse_id, source_id, language)
);

CREATE INDEX idx_translations_verse_lang ON translations(verse_id, language);

-- Word-by-Word Sanskrit Anvaya breakdown
CREATE TABLE IF NOT EXISTS verse_words (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    verse_id VARCHAR(16) NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    word_order INT NOT NULL CHECK (word_order > 0),
    word_sanskrit TEXT NOT NULL,
    word_iast VARCHAR(255) NOT NULL,
    meaning_en VARCHAR(255) NOT NULL,
    meaning_te VARCHAR(255) NOT NULL,
    grammar_role VARCHAR(128), -- e.g. "locative singular", "imperative verb"
    root VARCHAR(128), -- Dhatu root e.g. "kṛ"
    CONSTRAINT uq_verse_word_order UNIQUE (verse_id, word_order)
);

CREATE INDEX idx_verse_words_verse ON verse_words(verse_id, word_order);

-- ----------------------------------------------------------------------------
-- LAYER 3: PROPRIETARY APPLICATION & GITA SITUATION GRAPH
-- (What makes Gita Companion irreplaceable and non-replicable)
-- ----------------------------------------------------------------------------

-- Core Philosophical Themes
CREATE TABLE IF NOT EXISTS themes (
    id VARCHAR(64) PRIMARY KEY, -- e.g. "karma_yoga", "detachment", "sthitaprajna"
    name_en VARCHAR(255) NOT NULL,
    name_te VARCHAR(255) NOT NULL,
    category VARCHAR(64) NOT NULL, -- "ACTION", "MIND", "DEVOTION", "KNOWLEDGE"
    description_en TEXT NOT NULL,
    description_te TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS verse_themes (
    verse_id VARCHAR(16) NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    theme_id VARCHAR(64) NOT NULL REFERENCES themes(id) ON DELETE CASCADE,
    weight NUMERIC(3,2) NOT NULL DEFAULT 1.00 CHECK (weight BETWEEN 0.0 AND 1.0),
    PRIMARY KEY (verse_id, theme_id)
);

-- Modern Life Situations / Battlefield Moments
CREATE TABLE IF NOT EXISTS situations (
    id VARCHAR(64) PRIMARY KEY, -- e.g. "career_pressure", "rage_arguments", "fear_of_failure"
    title_en VARCHAR(255) NOT NULL,
    title_te VARCHAR(255) NOT NULL,
    category VARCHAR(64) NOT NULL, -- "WORK", "RELATIONSHIPS", "INNER_CONFLICT", "CRISIS"
    symptom_modern_en TEXT NOT NULL,
    symptom_modern_te TEXT NOT NULL,
    krishna_diagnosis_en TEXT NOT NULL,
    krishna_diagnosis_te TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- The Gita Situation Graph Edge: Connects modern dilemma to anchor shloka WITH EXPLAINABILITY
CREATE TABLE IF NOT EXISTS verse_situations (
    verse_id VARCHAR(16) NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    situation_id VARCHAR(64) NOT NULL REFERENCES situations(id) ON DELETE CASCADE,
    relevance_score NUMERIC(3,2) NOT NULL DEFAULT 0.90 CHECK (relevance_score BETWEEN 0.0 AND 1.0),
    -- Explainability Rule: Every recommendation must explain why
    why_this_shloka_en TEXT NOT NULL,
    why_this_shloka_te TEXT NOT NULL,
    is_primary_anchor BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (verse_id, situation_id)
);

CREATE INDEX idx_verse_situations_lookup ON verse_situations(situation_id, relevance_score DESC);

-- Practical Micro-Protocols (Grounded 1-3 minute exercises)
CREATE TABLE IF NOT EXISTS practices (
    id VARCHAR(64) PRIMARY KEY, -- e.g. "practice_control_the_controllable"
    title_en VARCHAR(255) NOT NULL,
    title_te VARCHAR(255) NOT NULL,
    duration_seconds INT NOT NULL DEFAULT 180,
    category VARCHAR(64) NOT NULL, -- "BREATH", "COGNITIVE_REFRAME", "MICRO_JOURNAL", "SURRENDER"
    difficulty VARCHAR(32) NOT NULL DEFAULT 'BEGINNER', -- "BEGINNER", "INTERMEDIATE"
    anchor_verse_id VARCHAR(16) REFERENCES verses(id) ON DELETE SET NULL,
    why_recommended_en TEXT NOT NULL,
    why_recommended_te TEXT NOT NULL,
    steps JSONB NOT NULL, -- Array of strings/objects: [{"step": 1, "action": "..."}, ...]
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Link situations to practices
CREATE TABLE IF NOT EXISTS situation_practices (
    situation_id VARCHAR(64) NOT NULL REFERENCES situations(id) ON DELETE CASCADE,
    practice_id VARCHAR(64) NOT NULL REFERENCES practices(id) ON DELETE CASCADE,
    display_order INT NOT NULL DEFAULT 1,
    PRIMARY KEY (situation_id, practice_id)
);

-- ----------------------------------------------------------------------------
-- TIER 3: AI & VECTOR RAG LAYER (Safety-Gated Semantic Search)
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS verse_embeddings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    verse_id VARCHAR(16) NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    content_type VARCHAR(64) NOT NULL, -- "SCRIPTURE_TRANSLATION", "MODERN_APPLICATION", "PSYCHOLOGICAL_LENS"
    text_chunk TEXT NOT NULL,
    embedding vector(1536) NOT NULL, -- OpenAI / text-embedding-3-small or Gemini text-embedding-004
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- HNSW Vector index for sub-10ms semantic retrieval
CREATE INDEX IF NOT EXISTS idx_verse_embeddings_hnsw 
ON verse_embeddings 
USING hnsw (embedding vector_cosine_ops);

-- ----------------------------------------------------------------------------
-- DETERMINISTIC "SOLVE" RETRIEVAL FUNCTION (Stored Procedure)
-- Returns complete Gita graph packet: Situation + Diagnosis + Verses + Explanations + Practice
-- ----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION get_solution_for_situation(p_situation_id VARCHAR)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    v_result JSONB;
BEGIN
    SELECT jsonb_build_object(
        'situation', (
            SELECT jsonb_build_object(
                'id', s.id,
                'title_en', s.title_en,
                'title_te', s.title_te,
                'category', s.category,
                'symptom_en', s.symptom_modern_en,
                'symptom_te', s.symptom_modern_te,
                'diagnosis_en', s.krishna_diagnosis_en,
                'diagnosis_te', s.krishna_diagnosis_te
            )
            FROM situations s
            WHERE s.id = p_situation_id
        ),
        'anchor_verses', (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'verse_id', v.id,
                    'chapter', v.chapter_id,
                    'verse_number', v.verse_number,
                    'sanskrit', v.sanskrit,
                    'iast', v.iast,
                    'relevance_score', vs.relevance_score,
                    'is_primary', vs.is_primary_anchor,
                    'why_recommended_en', vs.why_this_shloka_en,
                    'why_recommended_te', vs.why_this_shloka_te,
                    'translations', (
                        SELECT jsonb_object_agg(
                            t.language,
                            jsonb_build_object(
                                'translation', t.translation,
                                'simple_explanation', t.simple_explanation
                            )
                        )
                        FROM translations t
                        WHERE t.verse_id = v.id
                    ),
                    'words', (
                        SELECT jsonb_agg(
                            jsonb_build_object(
                                'order', w.word_order,
                                'sanskrit', w.word_sanskrit,
                                'iast', w.word_iast,
                                'meaning_en', w.meaning_en,
                                'meaning_te', w.meaning_te
                            )
                            ORDER BY w.word_order
                        )
                        FROM verse_words w
                        WHERE w.verse_id = v.id
                    )
                )
            )
            FROM verse_situations vs
            JOIN verses v ON v.id = vs.verse_id
            WHERE vs.situation_id = p_situation_id
        ),
        'practices', (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'id', p.id,
                    'title_en', p.title_en,
                    'title_te', p.title_te,
                    'duration_seconds', p.duration_seconds,
                    'category', p.category,
                    'why_recommended_en', p.why_recommended_en,
                    'why_recommended_te', p.why_recommended_te,
                    'steps', p.steps
                )
                ORDER BY sp.display_order
            )
            FROM situation_practices sp
            JOIN practices p ON p.id = sp.practice_id
            WHERE sp.situation_id = p_situation_id
        )
    ) INTO v_result;

    RETURN v_result;
END;
$$;

-- ----------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) & PUBLIC READ ACCESS POLICIES
-- Pre-enabling RLS prevents Supabase dashboard warnings and ensures secure read access.
-- ----------------------------------------------------------------------------

ALTER TABLE content_manifest ENABLE ROW LEVEL SECURITY;
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE verses ENABLE ROW LEVEL SECURITY;
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE verse_words ENABLE ROW LEVEL SECURITY;
ALTER TABLE themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE verse_themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE situations ENABLE ROW LEVEL SECURITY;
ALTER TABLE verse_situations ENABLE ROW LEVEL SECURITY;
ALTER TABLE practices ENABLE ROW LEVEL SECURITY;
ALTER TABLE situation_practices ENABLE ROW LEVEL SECURITY;
ALTER TABLE verse_embeddings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Manifest" ON content_manifest;
CREATE POLICY "Public Read Manifest" ON content_manifest FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Sources" ON sources;
CREATE POLICY "Public Read Sources" ON sources FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Chapters" ON chapters;
CREATE POLICY "Public Read Chapters" ON chapters FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Verses" ON verses;
CREATE POLICY "Public Read Verses" ON verses FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Translations" ON translations;
CREATE POLICY "Public Read Translations" ON translations FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Verse Words" ON verse_words;
CREATE POLICY "Public Read Verse Words" ON verse_words FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Themes" ON themes;
CREATE POLICY "Public Read Themes" ON themes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Verse Themes" ON verse_themes;
CREATE POLICY "Public Read Verse Themes" ON verse_themes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Situations" ON situations;
CREATE POLICY "Public Read Situations" ON situations FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Verse Situations" ON verse_situations;
CREATE POLICY "Public Read Verse Situations" ON verse_situations FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Practices" ON practices;
CREATE POLICY "Public Read Practices" ON practices FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Situation Practices" ON situation_practices;
CREATE POLICY "Public Read Situation Practices" ON situation_practices FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Verse Embeddings" ON verse_embeddings;
CREATE POLICY "Public Read Verse Embeddings" ON verse_embeddings FOR SELECT USING (true);

