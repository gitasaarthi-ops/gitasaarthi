# Gita Saarthi (గీత సారథి) • Bhagavad Gita Modern Life OS

> **"Your guide for life's Kurukshetra. When life feels overwhelming, know what to do next."**
> A daily life companion and decision engine powered by the timeless psychological intelligence of the Bhagavad Gita.

---

## 🌟 Key Features

1. **3 Daily Moments Loop**:
   - 🌅 **Morning Direction**: 60-second intention setting before entering the day's Kurukshetra.
   - ⚡ **Daytime Crisis Antidote (Solve)**: Instant situation diagnosis ➔ Anchor Shloka ➔ 3-Step Micro-Protocol.
   - 🌙 **Evening Release**: Emotional check-in & surrender into silence (Gita 2.70).
2. **Deterministic Gita Situation Graph**:
   - Maps 20+ canonical modern struggles (burnout, anger, impostor syndrome, grief, social comparison) to exact Gita principles.
   - **Explainability First**: Every single recommendation explains *why* this verse solves this specific friction.
3. **Dual-Telugu & Multi-lingual Wisdom**:
   - Classical Sanskrit with IAST transliteration.
   - **సులభమైన అర్థం**: Modern conversational Telugu explanation for youth.
   - **ప్రామాణిక తాత్పర్యం**: Formal classical Telugu translation.
   - Modern English cognitive translation.
   - Word-by-word Anvaya with grammatical roots.
4. **60-Second Mind Reset (Gita 6.26)**:
   - Interactive concentric breathing pacer with 4s inhale / 4s hold / 4s exhale rhythm.
5. **Private & Non-Medical Compliance**:
   - Zero guilt metrics (milestone consciousness returns instead of broken streak shaming).
   - 100% on-device local storage for reflections.
   - Compliant with Google Play health policies (wellness framing with integrated Tele-MANAS crisis support).

---

## 🏗️ Architecture & Tech Stack

```
GITA KNOWLEDGE SYSTEM
├── Layer 1: Canonical Scripture (Immutable Sanskrit & IAST, 700 Verses)
├── Layer 2: Meaning & Anvaya (Dual Telugu Fields, English, Word-by-Word Roots)
└── Layer 3: Application Engine (Life Situations, Explainability Rationale, 3-Min Protocols)
```

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide Icons.
- **Backend / Database**: PostgreSQL / Supabase schema (`supabase/schema.sql`) with `pgvector` HNSW index for semantic RAG.
- **Offline Strategy**: Pre-packaged SQLite / Android Room compatible.

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev -p 3001

# Production build
pnpm run build
```

Open [http://localhost:3001/app](http://localhost:3001/app) to experience the mobile companion.
