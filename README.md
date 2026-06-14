# LiftLearn

LiftLearn is an AI-powered learning, opportunity, and community-building MVP.

## Features in this starter app

- Dashboard with progress metrics
- AI Tutor chat page
- Learning paths page
- Opportunity hub page
- Community projects page
- OpenAI-powered tutor API route with demo fallback
- Tailwind CSS UI
- Supabase-ready environment variables

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open `http://localhost:3000`.

## Enable the AI tutor

Add this to `.env.local`:

```bash
OPENAI_API_KEY=your_openai_api_key
```

Restart the dev server.

## Suggested next build steps

1. Add Supabase Auth for sign up and login.
2. Replace mock data in `lib/data.ts` with database records.
3. Add user onboarding and personalized learning plans.
4. Store tutor conversations in a `tutor_messages` table.
5. Add real opportunity scraping/import workflows.
6. Add admin dashboard for creating lessons and opportunities.

## Database schema draft

```sql
create table profiles (
  id uuid primary key,
  full_name text,
  preferred_language text default 'English',
  country text,
  learning_goal text,
  created_at timestamptz default now()
);

create table learning_paths (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text,
  difficulty text,
  created_at timestamptz default now()
);

create table lessons (
  id uuid primary key default gen_random_uuid(),
  path_id uuid references learning_paths(id) on delete cascade,
  title text not null,
  content text,
  order_number int,
  estimated_minutes int
);

create table user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  lesson_id uuid references lessons(id) on delete cascade,
  completed boolean default false,
  score int,
  completed_at timestamptz
);

create table tutor_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  role text check (role in ('user', 'assistant')),
  message text not null,
  created_at timestamptz default now()
);

create table opportunities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text,
  description text,
  country text,
  link text,
  deadline date,
  created_at timestamptz default now()
);

create table community_projects (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid references profiles(id) on delete cascade,
  title text not null,
  problem text,
  proposed_solution text,
  location text,
  status text default 'planning',
  created_at timestamptz default now()
);
```
