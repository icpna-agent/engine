--
-- PostgreSQL database dump
--

\restrict 8IVboFQqDDgX1WBKhsPbLWW6rpBgtwKDyUZovmR5tK61EbJlMkYQPWCefKgW120

-- Dumped from database version 15.17 (Debian 15.17-1.pgdg13+1)
-- Dumped by pg_dump version 15.17 (Debian 15.17-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public."user" DROP CONSTRAINT IF EXISTS user_current_book_id_fkey;
ALTER TABLE IF EXISTS ONLY public.message DROP CONSTRAINT IF EXISTS message_chat_id_chats_id_fk;
ALTER TABLE IF EXISTS ONLY public.instance DROP CONSTRAINT IF EXISTS instance_bot_id_bot_id_fk;
ALTER TABLE IF EXISTS ONLY public.chats DROP CONSTRAINT IF EXISTS chats_user_id_user_id_fk;
ALTER TABLE IF EXISTS ONLY public.chats DROP CONSTRAINT IF EXISTS chats_bot_id_bot_id_fk;
ALTER TABLE IF EXISTS ONLY public.book_unit DROP CONSTRAINT IF EXISTS book_unit_book_id_book_id_fk;
ALTER TABLE IF EXISTS ONLY public.book_panel DROP CONSTRAINT IF EXISTS book_panel_book_id_book_id_fk;
ALTER TABLE IF EXISTS ONLY public.book_lesson DROP CONSTRAINT IF EXISTS book_lesson_book_id_book_id_fk;
ALTER TABLE IF EXISTS ONLY public.book_index DROP CONSTRAINT IF EXISTS book_index_book_id_book_id_fk;
ALTER TABLE IF EXISTS ONLY public.book_image DROP CONSTRAINT IF EXISTS book_image_book_id_book_id_fk;
ALTER TABLE IF EXISTS ONLY public.book_audio DROP CONSTRAINT IF EXISTS book_audio_book_id_book_id_fk;
DROP INDEX IF EXISTS public.book_unit_number_idx;
DROP INDEX IF EXISTS public.book_unit_created_at_idx;
DROP INDEX IF EXISTS public.book_unit_book_id_idx;
DROP INDEX IF EXISTS public.book_title_idx;
DROP INDEX IF EXISTS public.book_title_edition_unique_active_idx;
DROP INDEX IF EXISTS public.book_panel_title_idx;
DROP INDEX IF EXISTS public.book_panel_created_at_idx;
DROP INDEX IF EXISTS public.book_panel_book_id_idx;
DROP INDEX IF EXISTS public.book_lesson_unit_number_idx;
DROP INDEX IF EXISTS public.book_lesson_skill_idx;
DROP INDEX IF EXISTS public.book_lesson_created_at_idx;
DROP INDEX IF EXISTS public.book_lesson_book_id_idx;
DROP INDEX IF EXISTS public.book_index_skill_idx;
DROP INDEX IF EXISTS public.book_index_created_at_idx;
DROP INDEX IF EXISTS public.book_index_book_id_idx;
DROP INDEX IF EXISTS public.book_image_created_at_idx;
DROP INDEX IF EXISTS public.book_image_book_page_idx;
DROP INDEX IF EXISTS public.book_image_book_id_idx;
DROP INDEX IF EXISTS public.book_created_at_idx;
DROP INDEX IF EXISTS public.book_audio_index_idx;
DROP INDEX IF EXISTS public.book_audio_created_at_idx;
DROP INDEX IF EXISTS public.book_audio_book_id_idx;
ALTER TABLE IF EXISTS ONLY public."user" DROP CONSTRAINT IF EXISTS user_pkey;
ALTER TABLE IF EXISTS ONLY public."user" DROP CONSTRAINT IF EXISTS user_phone_unique;
ALTER TABLE IF EXISTS ONLY public.migraciones_aplicadas DROP CONSTRAINT IF EXISTS migraciones_aplicadas_pkey;
ALTER TABLE IF EXISTS ONLY public.migraciones_aplicadas DROP CONSTRAINT IF EXISTS migraciones_aplicadas_nombre_key;
ALTER TABLE IF EXISTS ONLY public.message DROP CONSTRAINT IF EXISTS message_pkey;
ALTER TABLE IF EXISTS ONLY public.instance DROP CONSTRAINT IF EXISTS instance_pkey;
ALTER TABLE IF EXISTS ONLY public.comandos_ejecutados DROP CONSTRAINT IF EXISTS comandos_ejecutados_pkey;
ALTER TABLE IF EXISTS ONLY public.comandos_ejecutados DROP CONSTRAINT IF EXISTS comandos_ejecutados_nombre_key;
ALTER TABLE IF EXISTS ONLY public.chats DROP CONSTRAINT IF EXISTS chats_pkey;
ALTER TABLE IF EXISTS ONLY public.bot DROP CONSTRAINT IF EXISTS bot_pkey;
ALTER TABLE IF EXISTS ONLY public.bot DROP CONSTRAINT IF EXISTS bot_phone_unique;
ALTER TABLE IF EXISTS ONLY public.book_unit DROP CONSTRAINT IF EXISTS book_unit_pkey;
ALTER TABLE IF EXISTS ONLY public.book DROP CONSTRAINT IF EXISTS book_pkey;
ALTER TABLE IF EXISTS ONLY public.book_panel DROP CONSTRAINT IF EXISTS book_panel_pkey;
ALTER TABLE IF EXISTS ONLY public.book_lesson DROP CONSTRAINT IF EXISTS book_lesson_pkey;
ALTER TABLE IF EXISTS ONLY public.book_index DROP CONSTRAINT IF EXISTS book_index_pkey;
ALTER TABLE IF EXISTS ONLY public.book_image DROP CONSTRAINT IF EXISTS book_image_pkey;
ALTER TABLE IF EXISTS ONLY public.book_audio DROP CONSTRAINT IF EXISTS book_audio_pkey;
ALTER TABLE IF EXISTS public."user" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.migraciones_aplicadas ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.message ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.instance ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.comandos_ejecutados ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.chats ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.bot ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.book_unit ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.book_panel ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.book_lesson ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.book_index ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.book_image ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.book_audio ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.book ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.user_id_seq;
DROP TABLE IF EXISTS public."user";
DROP SEQUENCE IF EXISTS public.migraciones_aplicadas_id_seq;
DROP TABLE IF EXISTS public.migraciones_aplicadas;
DROP SEQUENCE IF EXISTS public.message_id_seq;
DROP TABLE IF EXISTS public.message;
DROP SEQUENCE IF EXISTS public.instance_id_seq;
DROP TABLE IF EXISTS public.instance;
DROP SEQUENCE IF EXISTS public.comandos_ejecutados_id_seq;
DROP TABLE IF EXISTS public.comandos_ejecutados;
DROP SEQUENCE IF EXISTS public.chats_id_seq;
DROP TABLE IF EXISTS public.chats;
DROP SEQUENCE IF EXISTS public.bot_id_seq;
DROP TABLE IF EXISTS public.bot;
DROP SEQUENCE IF EXISTS public.book_unit_id_seq;
DROP TABLE IF EXISTS public.book_unit;
DROP SEQUENCE IF EXISTS public.book_panel_id_seq;
DROP TABLE IF EXISTS public.book_panel;
DROP SEQUENCE IF EXISTS public.book_lesson_id_seq;
DROP TABLE IF EXISTS public.book_lesson;
DROP SEQUENCE IF EXISTS public.book_index_id_seq;
DROP TABLE IF EXISTS public.book_index;
DROP SEQUENCE IF EXISTS public.book_image_id_seq;
DROP TABLE IF EXISTS public.book_image;
DROP SEQUENCE IF EXISTS public.book_id_seq;
DROP SEQUENCE IF EXISTS public.book_audio_id_seq;
DROP TABLE IF EXISTS public.book_audio;
DROP TABLE IF EXISTS public.book;
DROP TYPE IF EXISTS public.whatsapp_type;
DROP TYPE IF EXISTS public.provider_type;
DROP TYPE IF EXISTS public.chat_remote;
DROP TYPE IF EXISTS public.bot_model;
DROP TYPE IF EXISTS public.book_target_program;
DROP TYPE IF EXISTS public.book_skill;
DROP TYPE IF EXISTS public.book_level;
DROP TYPE IF EXISTS public.book_language;
DROP TYPE IF EXISTS public.book_cefr_equivalent;
DROP EXTENSION IF EXISTS pg_trgm;
--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- Name: book_cefr_equivalent; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.book_cefr_equivalent AS ENUM (
    'a1',
    'a2',
    'b1',
    'b2',
    'c1',
    'c2'
);


--
-- Name: book_language; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.book_language AS ENUM (
    'english'
);


--
-- Name: book_level; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.book_level AS ENUM (
    'basic',
    'intermediate',
    'advanced'
);


--
-- Name: book_skill; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.book_skill AS ENUM (
    'grammar',
    'vocabulary',
    'reading',
    'listening',
    'reading_listening',
    'pronunciation',
    'speaking',
    'writing',
    'functional_language',
    'writing_bank',
    'speaking_task',
    'review',
    'bring_it_together',
    'grammar_reference',
    'communication_bank',
    'selected_transcripts',
    'workbook'
);


--
-- Name: book_target_program; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.book_target_program AS ENUM (
    'kids',
    'juniors',
    'adults'
);


--
-- Name: bot_model; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.bot_model AS ENUM (
    'gpt',
    'gemini'
);


--
-- Name: chat_remote; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.chat_remote AS ENUM (
    'group',
    'inbox'
);


--
-- Name: provider_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.provider_type AS ENUM (
    'meta'
);


--
-- Name: whatsapp_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.whatsapp_type AS ENUM (
    'business'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: book; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.book (
    id integer NOT NULL,
    title text NOT NULL,
    author text,
    publisher text,
    institution text DEFAULT 'ICPNA'::text NOT NULL,
    edition text,
    level public.book_level NOT NULL,
    sub_level integer,
    language public.book_language DEFAULT 'english'::public.book_language NOT NULL,
    target_program public.book_target_program NOT NULL,
    cefr_equivalent public.book_cefr_equivalent,
    active boolean DEFAULT true NOT NULL,
    url_preview text,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: book_audio; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.book_audio (
    id integer NOT NULL,
    url text NOT NULL,
    index text NOT NULL,
    transcription text,
    book_page integer NOT NULL,
    meta_media_id bigint,
    book_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: book_audio_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.book_audio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: book_audio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.book_audio_id_seq OWNED BY public.book_audio.id;


--
-- Name: book_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;


--
-- Name: book_image; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.book_image (
    id integer NOT NULL,
    url text NOT NULL,
    book_page integer NOT NULL,
    meta_media_id bigint,
    book_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: book_image_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.book_image_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: book_image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.book_image_id_seq OWNED BY public.book_image.id;


--
-- Name: book_index; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.book_index (
    id integer NOT NULL,
    title text NOT NULL,
    page text NOT NULL,
    skill public.book_skill NOT NULL,
    book_page integer NOT NULL,
    book_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: book_index_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.book_index_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: book_index_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.book_index_id_seq OWNED BY public.book_index.id;


--
-- Name: book_lesson; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.book_lesson (
    id integer NOT NULL,
    unit_number numeric(4,1) NOT NULL,
    title text NOT NULL,
    skill public.book_skill NOT NULL,
    topic text,
    activity_number integer,
    letter_number text,
    instruction text,
    content text,
    book_page integer NOT NULL,
    book_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: book_lesson_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.book_lesson_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: book_lesson_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.book_lesson_id_seq OWNED BY public.book_lesson.id;


--
-- Name: book_panel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.book_panel (
    id integer NOT NULL,
    title text NOT NULL,
    theme text,
    sub_theme text,
    instruction text,
    content text,
    book_page integer NOT NULL,
    book_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: book_panel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.book_panel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: book_panel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.book_panel_id_seq OWNED BY public.book_panel.id;


--
-- Name: book_unit; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.book_unit (
    id integer NOT NULL,
    number integer NOT NULL,
    title text NOT NULL,
    grammar text[],
    vocabulary text[],
    reading_listening text[],
    pronunciation text[],
    book_page integer NOT NULL,
    book_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: book_unit_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.book_unit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: book_unit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.book_unit_id_seq OWNED BY public.book_unit.id;


--
-- Name: bot; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bot (
    id integer NOT NULL,
    phone text NOT NULL,
    name text NOT NULL,
    prompt text NOT NULL,
    model public.bot_model NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: bot_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.bot_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bot_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.bot_id_seq OWNED BY public.bot.id;


--
-- Name: chats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.chats (
    id integer NOT NULL,
    enabled boolean DEFAULT true,
    remote public.chat_remote DEFAULT 'inbox'::public.chat_remote NOT NULL,
    bot_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: chats_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.chats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: chats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.chats_id_seq OWNED BY public.chats.id;


--
-- Name: comandos_ejecutados; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comandos_ejecutados (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    ejecutado_en timestamp without time zone DEFAULT now()
);


--
-- Name: comandos_ejecutados_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.comandos_ejecutados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: comandos_ejecutados_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.comandos_ejecutados_id_seq OWNED BY public.comandos_ejecutados.id;


--
-- Name: instance; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.instance (
    id integer NOT NULL,
    bot_id integer NOT NULL,
    whatsapp_type public.whatsapp_type NOT NULL,
    provider_type public.provider_type NOT NULL,
    business_id text NOT NULL,
    phone_number_id text NOT NULL,
    display_phone_number text NOT NULL,
    waba_id text NOT NULL,
    token text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: instance_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.instance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: instance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.instance_id_seq OWNED BY public.instance.id;


--
-- Name: message; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.message (
    id integer NOT NULL,
    code text NOT NULL,
    role text NOT NULL,
    text text NOT NULL,
    type text NOT NULL,
    media jsonb,
    quoted jsonb,
    chat_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: message_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: message_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.message_id_seq OWNED BY public.message.id;


--
-- Name: migraciones_aplicadas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migraciones_aplicadas (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    aplicado_en timestamp without time zone DEFAULT now()
);


--
-- Name: migraciones_aplicadas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migraciones_aplicadas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migraciones_aplicadas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migraciones_aplicadas_id_seq OWNED BY public.migraciones_aplicadas.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    phone text NOT NULL,
    enabled boolean DEFAULT true NOT NULL,
    enabled_from timestamp without time zone,
    enabled_to timestamp without time zone,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    current_book_id integer
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: book id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);


--
-- Name: book_audio id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_audio ALTER COLUMN id SET DEFAULT nextval('public.book_audio_id_seq'::regclass);


--
-- Name: book_image id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_image ALTER COLUMN id SET DEFAULT nextval('public.book_image_id_seq'::regclass);


--
-- Name: book_index id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_index ALTER COLUMN id SET DEFAULT nextval('public.book_index_id_seq'::regclass);


--
-- Name: book_lesson id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_lesson ALTER COLUMN id SET DEFAULT nextval('public.book_lesson_id_seq'::regclass);


--
-- Name: book_panel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_panel ALTER COLUMN id SET DEFAULT nextval('public.book_panel_id_seq'::regclass);


--
-- Name: book_unit id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_unit ALTER COLUMN id SET DEFAULT nextval('public.book_unit_id_seq'::regclass);


--
-- Name: bot id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bot ALTER COLUMN id SET DEFAULT nextval('public.bot_id_seq'::regclass);


--
-- Name: chats id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chats ALTER COLUMN id SET DEFAULT nextval('public.chats_id_seq'::regclass);


--
-- Name: comandos_ejecutados id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comandos_ejecutados ALTER COLUMN id SET DEFAULT nextval('public.comandos_ejecutados_id_seq'::regclass);


--
-- Name: instance id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.instance ALTER COLUMN id SET DEFAULT nextval('public.instance_id_seq'::regclass);


--
-- Name: message id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message ALTER COLUMN id SET DEFAULT nextval('public.message_id_seq'::regclass);


--
-- Name: migraciones_aplicadas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migraciones_aplicadas ALTER COLUMN id SET DEFAULT nextval('public.migraciones_aplicadas_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book (id, title, author, publisher, institution, edition, level, sub_level, language, target_program, cefr_equivalent, active, url_preview, created_at, updated_at, deleted_at) FROM stdin;
1	American Big Picture	Ben Goldstein	Richmond	ICPNA	Intermediate 5	intermediate	5	english	adults	b1	t	https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp5b1p_sb/index.html	2026-06-12 04:08:21.834744	2026-06-12 04:08:21.834744	\N
2	American Big Picture	Ben Goldstein	Richmond	ICPNA	Intermediate 6	intermediate	6	english	adults	b1	t	https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp6b1p_sb/index.html	2026-06-12 04:08:21.839168	2026-06-12 04:08:21.839168	\N
3	American Big Picture	Ben Goldstein	Richmond	ICPNA	Intermediate 7	intermediate	7	english	adults	b1	t	https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp7b1p_sb/index.html	2026-06-12 04:08:21.840694	2026-06-12 04:08:21.840694	\N
4	American Big Picture	Ben Goldstein	Richmond	ICPNA	Intermediate 8	intermediate	8	english	adults	b1	t	https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp8b1p_sb/index.html	2026-06-12 04:08:21.841942	2026-06-12 04:08:21.841942	\N
\.


--
-- Data for Name: book_audio; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_audio (id, url, index, transcription, book_page, meta_media_id, book_id, created_at, updated_at, deleted_at) FROM stdin;
6	https://example.com/placeholder-audio.mp3	1.5	Listen again and check.	7	\N	1	2026-06-12 04:29:24.188062	2026-06-12 07:48:28.315	2026-06-12 07:48:28.315
29	https://example.com/placeholder-audio.mp3	3.8	Listen and check (the matches from exercise 5a).	30	\N	1	2026-06-12 04:36:22.883147	2026-06-12 07:54:49.744	2026-06-12 07:54:49.744
10	https://richmondlp.com/system/uploads/content/file/3cb45819-274f-45f3-a5fe-351fbb068686/2.1_ABP_B1%2B.mp3?version=1669676008&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvM2NiNDU4MTktMjc0Zi00NWYzLWE1ZmUtMzUxZmJiMDY4Njg2LzIuMV9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjAwOCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=EyMwtGaS5qYvEcWAMZRREctAF0iTBs~cxP9KpcEW22tE4cMsRDLXzbXeXSdSJ6BGNMU963MGaxVO4AG72jpFNhcfGYmXZhHowd1QBDi9nDmFazEvmA2yBrBs34B3VKEGzZf-zbPAKl8APbWSAnxMcsqpwrbcKtn37ADy6TkAwmf~ryEnBsF6xrPGkFDMDSQhVFItEtfywX5J9cfWubd~QdE~BCwEUd2MMTCRaOKJrcOuly9PM1VfmnGnSuml7K9604y69a0IlkDtbS91anF8UX84tSPk4U4ezgzypRsDH5OhYjjX95m5n69AXBPKbE8yZw34ji9gtnEAdzmVycpXTw__	2.1	 Unit 2, Transcript 2.1, Page 14, Exercise 2A. 1. I like the way he is concentrating so hard, and the light from the cell phone illuminates his face as he scrolls down the text on the screen. 2. You never normally see a photo like this. I mean, you just hear people reading a script out loud. But you never see them. She's very relaxed and informal, which is different from how you see these people on TV. Three. This would be many people's favorite place to read. You glance at a few lines of a novel and then close your eyes. You never usually get past the first paragraph. And the picture captures that. Four. While you're waiting for the bus, This is a good place to check out the sport news. I like how the people are all reading, not really aware of each other. 5. These are some candidates waiting to take an exam. They're looking through their notes for the last time. I remember doing that. It's too late to study anymore, but you still do it anyway. 6. Sometimes there's no better place to read than in the bookstore itself. This guy seems to be looking up some important information in a reference book. It's something he has to know right away.	12	27227425843577332	1	2026-06-12 04:30:29.149511	2026-06-12 07:50:07.734	\N
12	https://richmondlp.com/system/uploads/content/file/53b167c7-1c41-437b-be62-c91d889645f8/2.3_ABP_B1%2B.mp3?version=1669676090&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvNTNiMTY3YzctMWM0MS00MzdiLWJlNjItYzkxZDg4OTY0NWY4LzIuM19BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjA5MCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=Ms8hhpy4i5wlNTSTsaZyMUM7ixMexNVbxsOkDUGvNfezw5I8eOc~CXWnkG7eBaoVIfzSMRxofsiCQjDHNaB9WH1dXIOFK11WPwVUqG6y-eT2wyu2kUk8LAwRns3DG8e2qRyz~MJUSvW24u29pT6qI03irdyGIXU~22Uj-KSRKaJvfsLXwfnqpODGrpxoykJS6jFR1grJenswZ5gK5mOycdRmj4LUtMX1MdOU6iXiSgvNUZduWODYiHirSwGaCQdvSvP0r3tvo9gjdczT2kjukGOTcNTv2QdpaZH~oyXd5dYDMuAeovgDFOqE7Zz-P~7hoWpYFZIHlBX6uWCYuttj0A__	2.3	 Transcript 2.3, page 18, exercise 2. Well, we have Tanya Koitz here with us. Hi, Tanya. You've come into the studio today to tell us all about manga. I keep seeing it everywhere, but I must confess I don't know too much about it. Can you enlighten us? Well, I figured that might be the case, so let me give you a brief introduction. The incredible thing about it is that in Japan, where manga comes from, it represents close to 25% of what people read, at least in print. In the U.S., novels are still the most popular, but in many parts of Tokyo, where I used to live, you can't walk more than two or three blocks without encountering these comics. And these are young people, I presume. Oh, no. It isn't just for young people. Everybody reads manga. Business people and housewives alike. You can see them on the subway or even walking down the street, their heads buried in the latest series they are reading. Hiroshima even has a public library devoted to manga. But it's not just about books. You can even get manga novels sent in installments to your cell phone. I was going to ask you about that. So manga's available in every shape and size? Absolutely. And there's a reason for that. You know, nearly all of Japan's cultural production comes from manga. Most anime, animated movies, you know, cartoons and television series, as well as many video games and collectible figures, begin life as manga comics. And what about outside Japan? Has this manga industry evolved in the same way? Yes, for sure. Manga hadn't reached a global market before. But now I say it could be the country most influential export I mean one of the most popular Naruto is now translated into many languages with adaptations you know designed to suit different cultures. So it's a global product, but it's localized for particular markets? That's right. A UK firm has recently published manga versions of Shakespeare's most famous works, including Hamlet. Well, the character of Hamlet is the man we know and love, but the plot is very different, and so is the setting. In this manga version, Hamlet lives in the year 2107, on an Earth destroyed by global warming. Wow, that's some change. What other stuff is out there? Hmm, let me think about that one. Hmm, well, you know, the World Bank and publisher Viz Media teamed up to produce a thing called One World Manga. It's a series of graphic novels in manga format with themes that address stuff like HIV-AIDS, poverty, and corruption. It's a great way to make young people aware of these things. They're donated to libraries so more people can read them. It's a great idea. So would you say that mangas become a central part of popular culture in many parts of the world? Yeah, absolutely. You can even buy a Bible with manga-style illustrations. Can you believe that? And manga is even used by advertisers as a marketing device. You can see huge manga faces on billboards or simply to decorate the facades of buildings. So what started off as comic book, something you put in your pocket, just became the biggest icon the world has ever seen. And this is helping manga become truly international. It's not just Japanese anymore. Wow, that shows you what popularity can do. Incredible, Tanya. The images are amazing. Thanks for sharing them with us.	16	999317279136375	1	2026-06-12 04:31:22.449809	2026-06-12 07:50:56.621	\N
35	https://richmondlp.com/system/uploads/content/file/ff41d7f8-f317-47e6-9f20-656565ea8ca7/R3_ABP_B1%2B.mp3?version=1669682561&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZmY0MWQ3ZjgtZjMxNy00N2U2LTlmMjAtNjU2NTY1ZWE4Y2E3L1IzX0FCUF9CMSUyQi5tcDM~dmVyc2lvbj0xNjY5NjgyNTYxKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc4MTI1Mzc2N319fV19&Signature=ab3tOhMfDAAKW4kvTE7HoX5UJ6i74iz3k5GcTUinOra3HdzQmIKYxqpdMQjvFOTFpx0nx8KQ9NJpqJQ1Acl3WsBbjOFt49a65aA49KtVBpWmeGMRvEjL74wBpt~8566g6iyTeILARiO-33gdJ3nAwoP4ZSiarTNlVhAstB8BtwtV2D3uNH2lKmiuqWzTsN22Ef7EOcrSwSsIs0wnNUffCFdwvHqYaFPDXIE0Rz2jFZPP7Vfor8qMp8u~U8FOJMVO7bdDYmCluz2~t9QardxIITOIcsKzo5WbtMwbY8J~rXD2ITCHVyI22GN6kwx7EKe0wbS864Mi9et7X0qpFChmtQ__	R3	 Transcript R3, page 35, exercise 1B. I love romantic stories, and one of the best I know is how my parents met. Apparently, they were sitting next to each other on a plane to Sydney. As soon as they started talking, my mom knew that she had met somebody very special. They had lots of things in common. Both of them were going to visit family in Australia, and that was exciting because neither of them had been there before. It was their first time. They had both gotten divorced recently and both were thinking about starting a new life in a new land. In the end, they decided that they could do that together. Isn't that incredible? Just from one conversation on a plane?	33	983494474299631	1	2026-06-12 04:36:52.890242	2026-06-12 08:00:22.814	\N
21	https://richmondlp.com/system/uploads/content/file/a5945ebe-b231-4864-9e12-96cd24fc0efc/3.1_ABP_B1%2B.mp3?version=1669676398&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYTU5NDVlYmUtYjIzMS00ODY0LTllMTItOTZjZDI0ZmMwZWZjLzMuMV9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjM5OCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=BQB6qSr18libwgV-n5iJAr4Gay7i-N9vLPpJ0-x9oeH~QzHabuV63LBGCAhkP90r2vriikwX0AkStTpH0oqevHlhwdxWWszLysNT1cNuYc8roawU8b7KSfhm4KQ07Si6T3h6yVBeju91AaH6HCUVgNnftCVvPqCjuxZLCq-HhU4yQaokcRb9FKPWTI4WWt7S-c7z09zxov4QnMs6UzK-zpHyrkceVNZs4cC42svDA9K2kXwfuVhm9DI-FuviqlFoH5Zq7M7IiVEkLhybl1tPaX4tgZYkPyxnryKjaAjh8zA9fcAUw0qgLU~peexNALh05IYMSn3zWxOgaqNQFQizkg__	3.1	 Unit 3. Transcript 3.1. Page 24. Exercise 2b. 1. I love this mural. It's amazing how he takes these derelict old buildings and turns them into works of art. I was amazed when I first saw it. Really amazed. Yes, I know what you mean. But the images are pretty disturbing sometimes. I mean, all those rats. Yeah, I guess his murals of rabbits are less shocking. Two. Hey, this is a great photo. What is it? It's an installation in an open-air sculpture park not far from where we live. It was a very hot day, and we were really surprised, and so pleased when we came across this last installation. We had no idea it was there. There was a tunnel into the hillside, and then we came out into this, like, underground room. And there was this pool. And in the middle, a strange tower. It was so cool and fresh Just what we needed Three So did you get to see the Mona Lisa Yes eventually but we had to stand in line for hours and then when we finally did get to see the painting, it was so disappointing. It's so small, and the room was so full of people, you couldn't see a thing. It was so annoying, all these people taking photos with their phones. 4. Is that Rodin? The Thinker? Where is it? There was an exhibition downtown with six or seven Rodin sculptures. And this one, of course. The kids look really bored, don't they? But actually, they're just imitating the statue's pose. 5. Have you ever seen any of these 3D street drawings? People draw them on the sidewalk or pavement with chalk, but they're in 3D, and some of them look like there's a hole or something. Look, I have a photo of one on my phone. I tell you, this one is so lifelike that the first time you see it, it's terrifying.	22	1322069182758842	1	2026-06-12 04:34:29.49564	2026-06-12 07:56:55.562	\N
26	https://richmondlp.com/system/uploads/content/file/de936946-b0d1-4f26-83be-f1c069aa46b6/3.6_ABP_B1%2B.mp3?version=1669676764&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZGU5MzY5NDYtYjBkMS00ZjI2LTgzYmUtZjFjMDY5YWE0NmI2LzMuNl9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3Njc2NCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=fRAj-5cO8rFf~o2FC68tdrilE7gOYzEf8enHthXdeVCLNLh494emHrcNkq~zJe6nRoYR2dLYLp2ItAFzScAm8vDkS9bWBPKWNyN~ujQCJfAUUCZStP61M8pliqqfPfAOC7XlZTwAFjOAH3FWaZ2TOeJZed-x-Llfg33ty9mTG1UmJLrpHSfWcw~d3sqEmK3jTT58K2y~rS4OScNIQx1dfVmWyuWi2Ub86rC4XMR0yk4ltaqa1xrUrtxk2icLbQ3qWUNt6n-xU2AXqS5EfHrrdoSGHhJRCInUZBEmc6hCuQHMtuq-i4Bv5O3gmapc0f~5X0AfM9M58HeGEV5HWLCMpw__	3.6	 Transcript 3.6, page 28, exercise 3A. So, what do you think of these six sculptures, Luke? Well, I think I know which one will win, but it's not my favorite. Well, tell us your favorite. I... don't laugh. I like the cake. It's by far the funniest. Really? No, no, I mean, the bird's definitely the funniest and by far the most colorful. Well, I think it's as funny as the cake, don't you? And it will look great in the square. It will be such a shock to the people of London. It's just a crazy, crazy idea. Oh, come on. You can't be serious, Miguel. Okay, so which one would you vote for, Stefania? Me? I vote for the brass boy on his toy horse. It's a very personal image. Everybody can relate to that. It's much more elegant than the bird anyway. You're right, but I think a sense of humor is important. Anyway, that cake has a history, you know. It a little more interesting than you think It called Battenberg and it was very popular at the time the plinth was built I really think it the most intelligent one You man You like the funny ones What do you think, Amelia? My favorite is the general on the horse. It's so simple, I don't know. I think it's a little more appropriate, that's all. For me, the boy on his horse is not as good. I don't know why. No way, that's the worst. Not at all. Did you know the original statue is actually around the corner from Trafalgar Square? It has beautiful decoration. I think it's a lot more artistic than the others. Those beautiful jewels. Look at the... She's trying to convince us. Anyway, you never told us which one you think is going to win. Well, you know, I like cake. And I think the mountain landscape is one of the best, too. But I think the horse will win. Which horse? There are two. The boy on the brass horse. It's not as strange as the others. It's classic. If it's going to be in Trafalgar Square, they're going to choose something classic that fits in with the architecture. Don't you think? I'm not sure, but that's my choice as well.	26	1917112958953976	1	2026-06-12 04:35:26.537659	2026-06-12 07:57:30.196	\N
34	https://richmondlp.com/system/uploads/content/file/f891e2bb-712c-4a31-9f6e-e27c255bbcb2/R2_ABP_B1%2B.mp3?version=1669682552&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZjg5MWUyYmItNzEyYy00YTMxLTlmNmUtZTI3YzI1NWJiY2IyL1IyX0FCUF9CMSUyQi5tcDM~dmVyc2lvbj0xNjY5NjgyNTUyKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc4MTI1Mzc2N319fV19&Signature=cC7phJS6XEmOd9bfnaU7WlA1U7kM98hxoGPCt8Ws2OLYBXPy~BmR2nmoNF-D28gUpewb9s051zbkgfvxrn6UGoJkgt5MB6gH-C~b3LYju7mvhxgKmrJoFOuSrEQVCVcOuVqK2RXH0sbpGnJItyuC5sWlUnoAc4CDTItQoKa-ZNenwoUBeyqNRYG~zM6Zyh5Zs~xpILwZ9Kqt6oPVmDmHmehV3-0yg5L9GsVHFbzyp~kt080q8fDHB0oPzxkwUjyl1H8np1Q6on2GA0u74XDPXFgZVnMfK0A8aV1xwZvcvlVSU9qh8c2eWXtymIMKGZWr5iinXYb5knLZtf841RXE0A__	R2	 Transcript R2, page 34, exercise 2. 1. How do you know John? I met him at a party like this one. 2. You don't know me, but I'm Carl. Hello, I'm Mary.	32	964927799931513	1	2026-06-12 04:36:44.466483	2026-06-12 08:00:20.165	\N
2	https://richmondlp.com/system/uploads/content/file/b14d5747-4c54-46ca-89ff-f5b606facbdf/1.2_ABP_B1%2B.mp3?version=1669675212&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYjE0ZDU3NDctNGM1NC00NmNhLTg5ZmYtZjViNjA2ZmFjYmRmLzEuMl9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NTIxMioiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=d1xTxzINrXDWYMyYbLgCNYBpAsvtx3fya1CxowYgBhEeMUvnazNhBD4jrfoqWtZ64U34Myzuj48b-g1n5IAFxJGe00O8VzPmMQU7mziwKmqJeB~05DetTSw47lRd8jEptpy03onvV3xOwmUQHv51fgqvMVXV1-VShN0~DRF9Q~HjZocPTkOwrB8QQ0z0ZBpvMZivenOR2SeVyPZ0-SUjIrovb5~a5TCR81mEPw2EcCqdBRxb5zwVfQlSVxthKIYz1rRG-DLIPvuMdQn2KrMeyuGQeUsL9d-5t6MQXYpDeSPYid62E5N6lekR19~dtdhvGYT0EHN3GFDIK6uzlVYm8Q__	1.2	 Transcript 1.2, page 7, exercise 2A. Start, starts, started. Watch, watches, watched. Text, texts, texted. Dance, dances, danced.	5	1977682749786683	1	2026-06-12 04:28:58.076016	2026-06-12 07:36:48.66	\N
3	https://richmondlp.com/system/uploads/content/file/af0a2f56-f6bb-4844-91ec-e11e9ac70ab3/1.3_ABP_B1%2B.mp3?version=1669675238&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYWYwYTJmNTYtZjZiYi00ODQ0LTkxZWMtZTExZTlhYzcwYWIzLzEuM19BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NTIzOCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=Qzu6K4Um4XEhYeEHzPzfEFF5LfOVsM3kxgh30ZEjI5yEtssfNBwkxXXrp0H6rZ3UZcZER0P5QJZnRThOnViyehWzXQNmOruSdNR9cXIoizBSX5ZFPqZ3t0-J~Ktc2emBjQxbW4FTbMMnyzjlRmPaO4FKcYr2OkbSM-EQbj~czjDystZIgTPKFvN4XHfsIwXskqOrY~NO-WllZHksv4kcSEyFNjolfm5kOEAyc6euKc898CCmujJRkxV-WpjHbV5Og01w61Yz2hnVoiwCeYKoDRZM6NBJqzazNk8Co~rdpwNpopxsnYNAdRYixeJWK2s4DJDUtrLvywBOsTkxivapkg__	1.3	 Transcript 1.3, page 7, exercise 3A. communicated with each other very much.	5	984291271056374	1	2026-06-12 04:28:58.081597	2026-06-12 07:37:15.719	\N
1	https://richmondlp.com/system/uploads/content/file/ee3dca79-b13b-4a61-9b38-0d204497bab7/1.1_ABP_B1%2B.mp3?version=1669675181&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZWUzZGNhNzktYjEzYi00YTYxLTliMzgtMGQyMDQ0OTdiYWI3LzEuMV9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NTE4MSoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=lyw0FXMjVnUTkl5hajknnRk9S2Cj3TJzCUtR1AV8l-sWL6IpBcRcf1hicS9aMBJXL2zMz3TzXE41gOCih3VIn6bhN82UGEM-FncQIRMzdewSUBIg23kC1P7sM7hXlHhv5MlhVrGWTjhwJvL4bmFAtnXcY3hGbCVqk67ZUluWeJqDi3Y1QJpMC~6saqrpFs2Kjb39W-QJUPYAvUQ1EMZoMn2TxK2JM1B9yoTCUUgTLZDap3aSd-PgGQfQl~tQKRZwP-G8IIojNTU57GtzFPnIDPnS62r68JTK~b8qfpOSFtwfWEeYr2VZFvuCUK6ltYdyTd0qagVAU9M1xDX7Oj752A__	1.1	 Unit 1. Transcript 1.1. Page 4. Exercise 2. 1. Ah, yes! This is a kabuki dancer, isn't it? And each dance tells a story, with the costume and the makeup and the movements, all communicating something different. The only problem is, you have to know the language of kabuki dance to understand what he's saying. 2. She's obviously angry about something, and she has decided to protest about it. She's using a poster to communicate her message and the strength of the crowd as well. That makes the message much louder and more powerful. 3. This gesture says a thousand words, doesn't it? So gentle, so tender. It's communicating love and protection. It's amazing how a hand gesture can say so much. Four I love this photo The way the two people are looking at each other the way they seem to be so deep in conversation They not just talking with words The expressions on their faces and the gestures they making with their hands are all part of the conversation 5. There are two things going on in this photo. I mean, first of all, there's the keyboard, and that's so much part of modern communication, isn't it? You know, people staying in touch by email, instant messaging services, or social networks. But it's also the hands. Look at the Hannah on her hands. That tells a story, too. It communicates a lot about the person who's typing, don't you think? 6. Okay, this one is obviously showing sign language. I wonder if they are listening to music and are having trouble hearing each other. Or maybe they don't speak the same language.	2	1486645832582310	1	2026-06-12 04:28:18.010991	2026-06-12 07:27:35.027	\N
18	https://richmondlp.com/system/uploads/content/file/444a9c46-9643-4429-8d69-c795063c3614/2.9_ABP_B1%2B.mp3?version=1669676283&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvNDQ0YTljNDYtOTY0My00NDI5LThkNjktYzc5NTA2M2MzNjE0LzIuOV9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjI4MyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=XYKRwLxzdHuxTiH7yk0CxwYUnB3TfZ~2xe8KY5m5vKWoDrcH8xbaZcGJXkzR5NMQo2TmDbcw0ZfV9zSJPiqaJeIMHKwfKsN2PJRR7Ut3py4x3aM2bELf2y~f556JP59h20B3OKzhRnkPbIKgMPekuVrC6lE7vyYvh~XE-oN5mK5mwg9DB71kUizZNOg5git5fiUUQLHNreuiB0W44Ol1GT-BpDSiPtgxkxrDxCWGxhTKYpp8cqRKsWKSTrbhgeflFGxvf081Pgmflxr-1-FpaGMftOxMtR7gu0n83ndwWkHROmlfgMy3koF6rjQO3EyNR5LfeBH8KzNfQgd4XRDWkg__	2.9	 Transcript 2.9, page 22, exercise 3A. 1. Joe You know, I don't agree at all. The people Louise talks about are just bored. They have too much time to waste to read all that information again and again. 2. Ilana I prefer books, the printed word. So I really see Louise's point, but I don't think it's a problem of technology. You can read very well on screen, it's just easier to lose your concentration and browse somewhere else. 3. Svetlana I agree to some extent. I think what she said makes a lot of sense. We have to spend a day or two without technology to realize that. We read the same information again and again, and it's so trivial. 4. Mark You know, I don't see it that way. We read differently, but we don't read any worse than we did when we only had paper. Reading is more dynamic and enjoyable online. 5. Flavio I couldn't agree more. I hate reading online, but I think it's a personal thing. A whole new generation only reads online, it seems. Are they any worse for this? There's no proof they are. 6. Adam I'm afraid she's wrong about that. This is the typical argument of someone who cannot come to terms with new technology and blames it for everything.	20	1314351484218606	1	2026-06-12 04:33:10.399032	2026-06-12 07:54:27.681	\N
36	https://richmondlp.com/system/uploads/content/file/c32df8b6-4c4d-40c4-8021-98bde5736390/R4_ABP_B1%2B.mp3?version=1669682572&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYzMyZGY4YjYtNGM0ZC00MGM0LTgwMjEtOThiZGU1NzM2MzkwL1I0X0FCUF9CMSUyQi5tcDM~dmVyc2lvbj0xNjY5NjgyNTcyKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc4MTI1Mzc2N319fV19&Signature=Kb-h5DbcWHlw1-Dm-1JXbnvuCHgBUD98o4KjY-1z4gHMf61G~NiCgzvPYOGYhuR78VSibDASHitqwhcLlDT5RTXa~6BkTUHRxavhTObns7YCqw7kqLsweQ2lX3lIM-Q7EXkAOFFTMpXSv5FWPVZ4kOinNSB9B1AOnS-nn3~rNH6wRytnQH0a5ljXiBHMS61o2A4OvbhVM2QiSCWtOuDGd-XBLx0Q31GfbZikxMqCUWPpkvQPm6q7qC5zuymzBYvDi5R8e8yWw-EOtcNPgHzWHZZAp93enz~G48Y8xZDyxbA0M6a5NhCTDvl~jemSMfDAZfF8iJ3cwfhbya4SZ0oA4Q__	R4	 Transcript R4, page 35, exercise 1B. 1. I think reading aloud is a great way to learn a language. I don't agree at all. 2. Some people can tell entertaining stories and jokes, and others just can't. I agree to some extent. 3. I love reading a good book. I couldn't agree more.	33	1027461330235186	1	2026-06-12 04:36:52.901415	2026-06-12 08:00:18.179	\N
5	https://richmondlp.com/system/uploads/content/file/a26328d4-1e53-4cc3-99d9-5eb6c22e6ecf/1.4_ABP_B1%2B.mp3?version=1669675282&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYTI2MzI4ZDQtMWU1My00Y2MzLTk5ZDktNWViNmMyMmU2ZWNmLzEuNF9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NTI4MioiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=fU0fsvVHWC3ALAPHtIHu2a3-~UF3kEec9RX-Ldp4-q4Wl3nMtIMu6EGQE8QXJQXM0JMsYvIKUH1GADWApeBE-panVT6lcm31Yo5fufYkYEICtgMl9YePY5f-4dmzlGIRCVNPPTpfcI5rAZUdJf3bBLLOBEvJE00ctxmQoA5mZUY5Orb0dizq7bauayLw5gDwnMw1L01-hbpR2oGING1lJhGGKUhvoQKHWn76K5CDypVOtE1xvL7AER2C9YZtVqIQ1eo2SvMT5dPbcbgNHRLyYE2R5clBX71s7iuzJAHPLgzuFquuz2C3WwMFl0nFU2IeaKUlG81VosP5qemnVp2kwg__	1.4	 Transcript 1.4, page 8, exercise 3b. 1. Which sign do you think makes people pay the most attention? Why? 2. What rights is the man in the mask standing up for? 3. Do you think any of these signs can actually change anyone's mind? If so, which? Four. Which sign do you think is making the most important point? Five. Do you think making a sign is the best way to get a message across? Why, why not? What other ways are there? Six. Do you ever speak your mind in public like this? Why, why not? Thank you.	6	1368694765077869	1	2026-06-12 04:29:12.125796	2026-06-12 07:47:43.292	\N
4	https://richmondlp.com/system/uploads/content/file/a1f19b47-3a2a-4729-8dfa-bafa093d40ee/1.5_ABP_B1%2B.mp3?version=1669675404&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYTFmMTliNDctM2EyYS00NzI5LThkZmEtYmFmYTA5M2Q0MGVlLzEuNV9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NTQwNCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=et0E80JoM0Kzv0I1awkS0ElgERmiIJD4xnINI34MZe2RLru8mr0vcagwJRVpIMzIsoVxrhfj3XYApuBYSL1Jg0mO0wr7xmTvgiirwSzihJUmvVE-aUsQOnl~upqW-S66em4zwwslJ0YUKTH~0ebVwDe1BuxkEOr5h8Y3sZz-9pt~zNH2g0csgwW9jgRzcILHe7XwGdOoy7nqlrg28aeFd8l6k9DpnG3se7UMD1N8MvgADbCN-DfZvgD6t94zj3EImb21~O0Uj2HwxBGzkbIji3WetO2hozhkf4ONj2zDaeXF0VhKvw-KBpqxlEOmLG2H9QR9dtaFKmcyCp53agAUrA__	1.5	 Transcript 1.5, page 8, exercise 1A. One. Hello. Now tell me why you are holding this sign. Well, we need change. I'm hoping that this economic recession will end. Why do you need a sign to do that? Because I want people to know there are other people like me. I'm desperate. We don't have work. We don't have a future. Do you think the sign will work? I hope so, but I just don't know. But we have to do something. This crisis is killing us. If it makes people change their mind and join us, that would be good. How long will you stay here for? It doesn't matter, as long as necessary. As I said, I don't have a job to go to, so I really don't mind. Two. Hi, just a couple of questions. You're holding a sign. What exactly does that sign mean? I mean, what is it saying? Well, it's a protest, of course. What kind of protest? About climate change. Why did you decide to dress like this animal? I mean, what made you want to dress like a polar bear? It's a powerful symbol of what's happening as a consequence of global warming. Polar bears are losing their habitat because the ice at the North Pole is quickly disappearing. We need to do something now before it too late Why did you use those particular words though Because normally we write save the animals on our signs I thought it was effective to turn that around Sometimes you get more attention if you make a serious point, but with a sense of humor. Three. How long did it take to make the sign? Was it difficult to make? Well, about an hour, I think. No, it was easy. I made it with a friend. Who gave you the idea? Nobody. I just loved this soccer player. I asked myself, how could I show that? I thought the TV cameras might spot me, and they did. But I didn't want England to win this game, and of course, he wasn't playing. But he was there in the crowd. And what happened after the game? Did he say anything to you? No, unfortunately, he didn't. Four. So, tell me, why are you here, sir? Because I want to be the first. The first in line to get one of these things. How long have you been here? 24 hours. I slept here overnight. Who is the sign for? Well, for nobody, really. It was just a joke. But it's really just for the other people in line. To let them know I got here first. And for the TV cameras and reporters. Quite a few people have taken photos, and others have stopped to talk to me.	6	2380552619101616	1	2026-06-12 04:29:12.116231	2026-06-12 07:47:50.608	\N
7	https://richmondlp.com/system/uploads/content/file/a0e5cf15-6e39-41ed-a790-d38336d904d2/1.6_ABP_B1%2B.mp3?version=1669675499&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYTBlNWNmMTUtNmUzOS00MWVkLWE3OTAtZDM4MzM2ZDkwNGQyLzEuNl9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NTQ5OSoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=hfjt5AnnC4TP2EoWGOrHjzRIl2wU~9ZScAYR84wqQWZ7qCAtBGAAG-9ampp3-7qdXveO~AT93stPzE79v1eO2Qc-41RCJ8ypvUTI0sQreSmsSFQJgZReklgpK8Ml~ofgMRLbacoKAtkSefpKiLGuWvl1cJEOlitMQEvsvymrdUY91pbx-iHdHTfIwBYq2xlm3rydXWEEXtMYFMEILEigkTv8UhXfF5WxoomdE61ZPgrM8tFA2xdIPCPw81LAuT2j9KQCU7aSDaerNzm4PpGU1-fpxYLFoEdUCr1HxL-pRHT-biREI6L1V1fv2TzWArmidHmj448cLEG-b~ltzHegPA__	1.6	 Transcript 1.6, page 12, exercise 3B. One. Hi, have you heard the news about Jenny? Two. Did you watch the game last night? Three. Hello, I see you got a little wet. Four. Do you have any plans for the weekend? 5. Hi, Joe. Are you feeling any better? 6. How many of the people here do you know?	10	1328652025264578	1	2026-06-12 04:30:03.241668	2026-06-12 07:49:13.433	\N
9	https://richmondlp.com/system/uploads/content/file/03585e9f-c1fb-435c-bcc6-6d01f43207c1/1.8_ABP_B1%2B.mp3?version=1669675549&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvMDM1ODVlOWYtYzFmYi00MzVjLWJjYzYtNmQwMWY0MzIwN2MxLzEuOF9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NTU0OSoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=oeOAIi54hSySljCW3ipqpWZpPZw64jS4POUQZycpcFS1MzRMq6OHhF4rRhhX0zMerXRWCF74NawgWMtP6r3cvL9gUq4hX7lKyHOf3VfOG-euPGkM2wGEab3m6Ef4mMawaZrucwHrUorJ~-ISpaYOWVc-LD-AkNgzwd2IFGLyykILfurJT4CLrIcBrGCh2mfRaCxJyKaQH8K-yjIfl3c8d5KG5y7SWbU9uhoJU36W0idS9ehnz879HazxUwvBLkRnnHqN0E7E574TBj2kbP3sP44xdehJyGVzKZzV8kKc3PX~XyAdhTooMNfnDgw8K8~S8WhVTg2d-RpWllExSuhfYw__	1.8	 Transcript 1.8, page 12. Stress. 1. Your face is really familiar. 2. Excuse me, can I give you a hand with that? 3. How are you feeling today? 4. So, how do you know Sergio? 5. What's the problem? You look terrible. Six. What did you say your name was again? Seven. Hi, what are you up to? Eight. Did you sleep okay? Nine. Hi, what brings you here at this time of day? Ten. You don't know me, but...	10	2430733147406282	1	2026-06-12 04:30:03.249453	2026-06-12 07:49:38.371	\N
23	https://richmondlp.com/system/uploads/content/file/ae4d896b-dbb2-4918-b275-f55e43e2f51e/3.3_ABP_B1%2B.mp3?version=1669676468&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYWU0ZDg5NmItZGJiMi00OTE4LWIyNzUtZjU1ZTQzZTJmNTFlLzMuM19BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjQ2OCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=Z8CiuoZzDi0khnGUTmA~TPY1cc28FOqjOC3GkgmhfmDidO-tHFxdcX8ZifKnLOTAFCSJFDmiVA8slsCYDcY9qRXmPNl7GeTvLZffxsWzM0CFk~lJrDE8OQ3eiwav1eM8NN9NTll8zbuelQ--paYN0XRZLuk9wNKzh6rqec~fr45Ve44l1l20wPOOfUW1dvtAMWvRjAGczbcLc9BHrKXYbnlAEkVnNFvdF8qDeF9IINqwNKQhwDLEhHhqcGZrJHG2Zx~Z4AGvF8r9FxGPUqDgz2u5E47saBNueZ01CVn~AT7-u2abONfBrAHhfzppzurECKiP54a~ejAhVj8oSZma4w__	3.3	 Transcript 3.3, page 27, exercise 1A. Mmm, this isn't very nice. Not very nice? It's totally disgusting!	25	994513613222203	1	2026-06-12 04:35:13.591174	2026-06-12 07:56:47.444	\N
24	https://richmondlp.com/system/uploads/content/file/d72a7181-dad2-4df5-aa2b-877da7f79ea1/3.4_ABP_B1%2B.mp3?version=1669676695&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZDcyYTcxODEtZGFkMi00ZGY1LWFhMmItODc3ZGE3Zjc5ZWExLzMuNF9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjY5NSoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=V74vkOJUA45Ri0xyvOF7JMHgxd3M8p7iOeV~wASJNTU~hpC0jWwSWThjPmvxAN~~ovDLkBf2AHMhX4EtD1~WC8HFLJJZIpmqggPIq4CgUOG3FT~oeZ~StA5vYVd97N~gDZ09jSfklbZD5zetLOx2ho4R0QSgOeBL3b0sydI3veZ7wS9~-uQnSGJGvdFv7h6difdMe-HFQ-QXQkDxgohOzdsayvGyZ8yeJkNYnNiPWtJLlq9bwczFjxtpYQWF98ldGD1ZK5g1G-CtOesBkX7yD8PElOEZVtF3fz9wsMnyv7QnYX~4-nNkRUlzVnYLZJ17nMiDjl-gbzy2u-M~MSiWIg__	3.4	 Transcript 3.4, page 27. Exercise 2B. 1. This is very interesting. Interesting? It's absolutely fascinating. 2. I'm very tired after that walk. Tired? I'm completely exhausted. 3. Hey, this is pretty good, you know. Good. It's really fantastic.	25	2547400275710115	1	2026-06-12 04:35:13.598236	2026-06-12 07:56:52.502	\N
8	https://richmondlp.com/system/uploads/content/file/e1078662-4e70-4893-b317-8eea46eddc37/1.7_ABP_B1%2B.mp3?version=1669675523&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZTEwNzg2NjItNGU3MC00ODkzLWIzMTctOGVlYTQ2ZWRkYzM3LzEuN19BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NTUyMyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=MgJiwJo9Le6AXIawLdIOFGxNwOu3P9017afElTaXcWlTeAy6jSVLTBDmPcTgcMY-eUH9tDeFUjHVgPQLRkaxmluQoL5~QQHjOGNhT-VAR7oEHLiZdplWwbWsrYiZ31iJOSEVYOyr0xDWekcSH8KXMdyzvUUn0kmRtXwjQEq9SCATV67mU1m6qavGZYqV3VqEmS4rbqGl6IfDPV9~C24NXrd3zMGoUxlj1Y~wJV2Fowy6ohLY7kGNuoV1GDzrPblZlHnBEXSZ-J5a0W3qxwASY3DgXxtxhPxvZpmfI1XYqfbgWuHQraz8VmRAiS58DM0KaJLyDuVuFz-w4mh928L0yg__	1.7	 Transcript 1.7, page 12, exercise 4. One. Hi, how are you? Fine, thanks. I'm Sonia, Sonia Cruz. I'm Michael. How many of the people here do you know? I don't know anyone. Well, not many people. Just the hosts, really. And now you. How did you meet Kathy and Craig? We were in college together. Wow. Long time ago. Two. Hi. So, um, do you have any plans for the weekend? Not really. Just need to relax a little. That's all. Me too. Do you want sugar with yours? I can't remember. No thanks. Three. Morning Gary How it going Good morning Ah did you watch the game last night Yeah just reading about it 5 Amazing Absolutely. Oh, this is my floor. See ya. 5. Hello. Um, I see you got a little wet. Yeah, forgot my umbrella. I'm totally soaked. Oh, well. Nasty weather, eh? So it seems. Sorry, I'm going to try and dry off a little. Is there a restroom on this train? Yes, just go to the end of the car and you'll find it. Thanks. Bye. Bye. Five. Hi. Hi. Did you hear the news about Jenny? No. What happened? The flight's been cancelled. Air Traffic Control Strike. You're joking. I just got an email. Did they send you one?	10	1363626429158441	1	2026-06-12 04:30:03.246607	2026-06-12 07:49:29.845	\N
11	https://richmondlp.com/system/uploads/content/file/abde1ee6-bd52-4707-a76d-907c795ba7e7/2.2_ABP_B1%2B.mp3?version=1669676052&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYWJkZTFlZTYtYmQ1Mi00NzA3LWE3NmQtOTA3Yzc5NWJhN2U3LzIuMl9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjA1MioiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=B3uB1DGsS~QttD0x0TBBSECHIrdDy31Ro7Lf8ZRRRtOqRhqfyzQwta4TiF92nf4H-uj4ymqGJy4R5IOERY2-lEWdcgm9v8Fk-VjDoy~XgT6gm6JSWGU5VOBWa6g7Nl0NwCdHHh7dOEESp2Icdt2TNOI2MdhP~O2uAINolaDvTCbpW20A8727WLe9hfaEg-EO6eCSTgnNO-cfuUvRoi~JLU7U5OqxIgnGHDSn0JA~oiHwXG0Z0oibu-Vp1iaomBAFhXO~pbvnfIr6KfXtaxyqRP3Q6OEhtJX-OMzUad-QB0G3T566ZtXxjLrAWMBIYSSnSr5iCKpTODcVk--Lmaqawg__	2.2	 Transcript 2.2, page 16, exercise 2. Beloved by Toni Morrison. This looks like a romantic novel. I mean, the title suggests that, but actually it's about the slave trade in the United States. It follows the life of a mother and daughter as they try to rebuild their lives after escaping from slavery. It's set in the United States at the end of the 19th century. So I think historical novel is the best description for it. Norwegian Wood by Haruki Murakami. This is like a love story and a drama and a humorous novel all in one. The narrator looks back on his life in the 1960s as a student in Tokyo, so it's very nostalgic. It talks about the love affairs he had when he was younger. It's funny at times, but it has its tragic side as well. But if I had to choose, I think Love Story is the best description. The Road by Cormac McCarthy This is a story about the end of the world We follow the story of a father and son as they walk across America The country has been virtually destroyed, and only a few people have survived. Some people might think this is like science fiction or fantasy, but I think it's very real, which is what makes it so frightening. It's hard to classify, but I suppose it's an action-adventure story, but a very tragic one. The Number One Ladies' Detective Agency by Alexander McCall Smith This story is set in Botswana, Africa. As the name suggests, it's a detective novel, but with a difference. It tells the story of Precious Ramatswe and her decision to become the first female private detective in Botswana. The crimes are ordinary crimes, and the problems are the everyday problems of the people of Botswana. There are touches of comedy, but also of tragedy. And above all, there's the taste of Africa, with all its colors, sights, and sounds.	14	1291290136099640	1	2026-06-12 04:30:56.027102	2026-06-12 07:50:11.441	\N
13	https://richmondlp.com/system/uploads/content/file/51dbb2b3-7c38-4160-a88c-36d4a554ffcc/2.4_ABP_B1%2B.mp3?version=1669676125&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvNTFkYmIyYjMtN2MzOC00MTYwLWE4OGMtMzZkNGE1NTRmZmNjLzIuNF9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjEyNSoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=K6a38tM6DgMY0XqtKsilGiZdsnrICyspbC4yEvIhJ~jc7DCF~95a758~u7VizEIYTUfJXX2zYaPqT33ZvCKsn3oS8U1qlKIpeMld1iOmWZbsqtsea5-e9NN4GP4Q08tD52U7j9R1abqabw~7JuWsW5XJSUqxSfu6w8ksla~2Ovrq95YFoSs4sabqQ25rcH-VMKn8pvFpQ6DmTzxheUY2D4Ldw4nGLz0YDzcghAQTf~z83P-PxMSO5WJS56iO3bGIhqxfLjefCBhphgUEaK88Uf6gRB~~LTN6qp2tCUZkvKxo6v5BPopvheF4cTErN5RMICxUvKTLcpuibX1FN8crUQ__	2.4	 Transcript 2.4, page 18. Exercise 3B. 1. Manga represents nearly a quarter of what the Japanese read. 2. Tanya used to live in Tokyo. 3. Hiroshima has a special library devoted to manga. 4. The plot of the manga Hamlet is very different from the original version. 5. One-world manga are comics that look at serious global issues, such as AIDS. 6. Large manga faces are used on billboards or to decorate the facades of buildings. 7. Tanya's final point is that manga is becoming truly international.	16	975886625278356	1	2026-06-12 04:31:22.458819	2026-06-12 07:50:50.241	\N
16	https://richmondlp.com/system/uploads/content/file/5afe963c-0774-410b-a0ef-63bc3e59fbac/2.7_ABP_B1%2B.mp3?version=1669676212&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvNWFmZTk2M2MtMDc3NC00MTBiLWEwZWYtNjNiYzNlNTlmYmFjLzIuN19BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjIxMioiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=b30MQ1v4OqLE4eFEoK4rP2rugkOd7K8V8mQp81s~tfbo~7rEs7zKkAn4D4ir3gzs5k3jXPHmDGgrewZeRgsnXx03yvBPEDwQO3WSWJ3bQqcGVe76SqsUr-6IbPsA4AGG8yAVgWrWkjVTTIVBVUX-CMAz8~r0043O6g64PQ2JzvvDFu7QKeDVa5fpSYaAs2~FfaUVOVV-xS4WJPkewvQH6~6EU2FAXIAZziGEGU5zoDCD6SDehhE2yopENjSSSz3xIbg0U5sM8bv2ti53Z5HKHZNRjRfIZ14gPnFpYSzAug5lI5mwMIbNr7QNQmp4RGJ8ZpqMrjxIaHDg~fZdZUB4JQ__	2.7	 Transcript 2.7, page 21, exercise 1A. Did you used to watch a lot of TV when you were a kid? No, we didn't used to have a TV, but we used to go to the movies a lot.	19	1513942383844647	1	2026-06-12 04:32:56.749109	2026-06-12 07:50:52.243	\N
14	https://richmondlp.com/system/uploads/content/file/d75aea9f-e2de-413b-b39d-4db4d68edad7/2.5_ABP_B1%2B.mp3?version=1669676153&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZDc1YWVhOWYtZTJkZS00MTNiLWIzOWQtNGRiNGQ2OGVkYWQ3LzIuNV9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjE1MyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=MDhGHPGdkdmuD~KoULKZumWRoz2YYCgP6Mdd6p6R7YWn5XyIgLIjBnJnEuovSMWpF~rKrtwxm36kv2QogVHRcwMZdTtwwCbk1MvcgO4VExXove3fbIJXSu8NmXEQwVTjteJkpS8el3BQ-0YRfzwoy6QEhdF9WeI5Pwp-qAT-9iSiZBENK0OlZ6lkoOdljkc9Szc5hP2~~e4~oTvlErxRgB0W0rPtV~WOgjB0v9Ucevuel6DFux7MCVUOZ8wspopaFmENbMu42mUL5HLNlSaVUj116yLuDF63HVf~lxD492b5Ul~uxtrfGalj4HlfdHnpjZS1XFiGPontqa4yh-5u1Q__	2.5	 Transcript 2.5, page 18, exercise 2b. 1. I love the original, but the movie version was terrible. 2. I like Lisa Simpson. She's my favorite character on the show. 3. The book was great, but I had trouble understanding the plot. It was really complicated. 4. Tintin was the first comic book I read as a kid 5. I mostly read fiction, though not bestsellers. They aren't always that good	16	27346431448306530	1	2026-06-12 04:31:22.462159	2026-06-12 07:50:54.519	\N
15	https://richmondlp.com/system/uploads/content/file/d782b4f5-0152-467e-a454-4b4b3705fc5e/2.6_ABP_B1%2B.mp3?version=1669676184&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZDc4MmI0ZjUtMDE1Mi00NjdlLWE0NTQtNGI0YjM3MDVmYzVlLzIuNl9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjE4NCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=sE-miCD50CeYRElNIdouHYIpwFXzj5eRxA~VY4oI7RGmf~QIXa~cWoJ3Vit8CrF8lp0YsPUFWhYONeDL5CeFNULKq2Ovv7IqNvpCvaK1DKeAVvgKuvfd7vadN6qOm9eHIGk~Vjq71ej8-4db4DFR4xEWrmEudWQ4UbLEkaWch47PBp9HRuSkw7Dmoih3WJbbfYTWgGIX0eLN~ihLu23xFBd~Q0rw3o8E-ytM~5Wa0kEp0i3YJ9C5L~colBFecR4-iipach1CxK8SDDBP5yT0qUwyxeFyeUP6ptTFJg~b3aI85Bwz887AqfOk64luLu6yyopJXf0WBRE7C6Fxbdr92w__	2.6	 Transcript 2.6, page 20, exercise 1B. the audience glued to their seats. And later, when the movie appeared on TV, it meant they stayed there through the commercial breaks and didn't change the channel. The second image is taken from a classic serial movie from the 1930s. Serial movies told short stories about heroes who were forever getting into trouble. They lasted about 20 minutes to half an hour and always ended with a cliffhanger in order to encourage the audience to return the next week to see what happened to their hero. Slowly, the serial movies disappeared, and they were replaced by TV series instead. The third photo is an image from an American TV series, CSI, Crime Scene Investigation. This is actually the closing image of the last episode of the 11th season. The intention is to keep the viewers hanging on, not just for the next episode, but for the next season. And now that a lot of TV series are actually watched on DVD, I suppose the point is to encourage you to buy the next season.	18	1360117899313948	1	2026-06-12 04:31:48.51394	2026-06-12 07:50:51.601	\N
19	https://richmondlp.com/system/uploads/content/file/e20d02ca-7e31-4ff7-993e-1eb774f4855f/2.10_ABP_B1%2B.mp3?version=1669676312&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZTIwZDAyY2EtN2UzMS00ZmY3LTk5M2UtMWViNzc0ZjQ4NTVmLzIuMTBfQUJQX0IxJTJCLm1wMz92ZXJzaW9uPTE2Njk2NzYzMTIqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzgxMjUzNzY3fX19XX0_&Signature=Or850UEMcMISdRwGdfnH~Z4qIqBzJPsMBySWhRskvpk0WYb-hAiEEFq11UXNfBYHAww4lAEoO9H4bzrUuMMUMFUV0GBxabCq1NYyFEc-5w8aKgBGWnec5eMfRyNySQ6O4fmvEltQN5L3akLLJPPuPQW0ZarEFYwHx1Ig64~XbE~63Op9XcZ~IGidI9ZENYL77L26WG8XFq~x6gI2iTbv~JIW-WNnbTSGOvW8EotKQfVYer2vzxKwl-53CyosReYkpp268HOFufsiiR-tA0xMSpFy7gIFzbjew9XolgesIa7Ecw67Vb53ZK~JxdXR1uoFYR4WB3z196EndtH78gQ-zQ__	2.10	 Transcript 2.10, page 22. Stress. 1. You know, I don't agree at all. 2. So I really see Louise's point, but... 3. I agree to some extent, I think. 4. You know, I don't see it that way. 5. I couldn't agree more, but... 6. I'm afraid she's wrong about that.	20	1316427766786120	1	2026-06-12 04:33:10.403181	2026-06-12 07:54:25.189	\N
20	https://richmondlp.com/system/uploads/content/file/d6d5c6f9-2d45-49fa-9adb-1c63df0bcde4/2.11_ABP_B1%2B.mp3?version=1669676341&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZDZkNWM2ZjktMmQ0NS00OWZhLTlhZGItMWM2M2RmMGJjZGU0LzIuMTFfQUJQX0IxJTJCLm1wMz92ZXJzaW9uPTE2Njk2NzYzNDEqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzgxMjUzNzY3fX19XX0_&Signature=UQIDN97CZrjHfSSPJm~JVlL4CykLp0hKSVLGtaFGUEbOauWO0OkT1AXFhghlsruxTYlHm0p0nFROIcSRJUzpdTIFrcNGte~4sMvyiwXtr92GKO8vzbM~MwcOHQIWkXqEjD8Jutq0Q9iOnUejP-dIIQezTWZ8M21TT2gupAd7yCo~ge55ySW9DhJEvl903sMt~JxcW12sH3AO4v-as7URjL4FWeJwWaQEZOnNFKSYaaSmqjeBSLY-QagDRUGQbesTQQdUlDqRWZyKHZJzFx4rXPL24jM6QtdJ~bmFRKKSJjBuAT31WqUr0r0rg8VADVDSFrriOe5u4aYlBoyvqAEMVQ__	2.11	 Transcript 2.11, page 23, exercise 4b. I took this photo in Patagonia in Argentina. The two narrow peaks that you can see are called Fitzroy and Cerro Torre. We had spent a few weeks hiking around that area, and this was the end of the last day of our trip. We were driving back on that desolate highway, and the light was dying, when I caught a glimpse of the mountain range in the rearview mirror and thought, I just need to take one last photo of that horizon. It turned out to be the best photo I had taken on that whole trip.	21	973203125696867	1	2026-06-12 04:34:18.117509	2026-06-12 07:54:25.91	\N
17	https://richmondlp.com/system/uploads/content/file/29d5b456-85f8-44fe-9226-5b007c7d1b10/2.8_ABP_B1%2B.mp3?version=1669676248&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvMjlkNWI0NTYtODVmOC00NGZlLTkyMjYtNWIwMDdjN2QxYjEwLzIuOF9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjI0OCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=fHpZelLsTwLIt0NODdOxDhAz70qWbVMZ8vJQWD9IsBNfgxyGoKgEVXma4WTYoLdCiVOClHKm-H4N-zlCqDwt6EYa5ljTN3qCXH6bW-1o9moTSyQY9ZyE1F3rW3UGIxJ5eo9mib~5qXccaTrWsGG5lsmPPCqtYEVJ3hWhJMZVZe8tQaHqyKGgtik5OWF9u-6Rj4Hbg4b0rnfveAiex54xVE12OBoKTIkYsaZQkAeGTM~WDi073WmZn8JWovG5LniAlrWy2JmNqYce1zW6oLqdKj4-a5ytMlfLLW5ylk29ipn98JjlkLU5FLdlUQSgPvbzN0WPJsPBmCM6JDxkh6GsxA__	2.8	 Transcript 2.8, page 22, exercise 2A. Evening, listeners. Today journalist Louise Fryer talks about the image of two men reading on the Grand Concourse of Union Station and sees a metaphor for how badly we read these days. I think this image is really revealing. You see more people now, like the man on the left, gazing into a screen or a smartphone, don't you? How many people still read a paper like the man on the right? Does that mean the printed word will disappear? Perhaps, but I'm not sure that's the problem. The main problem, I think, is that we don't read well anymore. Before, we used to read in depth the long texts we had to interpret. Now we just scroll down text on the screen. We don't take it in. We don't absorb the information. And when we get bored, we just open another window or click on another icon. Not only that, we don't read enough. What we tend to do is read the same information again and again. We click on the same websites to check the same information to see if there's been an update. You know, is the weather forecast different to what it was an hour ago? Has the price of that flight changed? Has anybody responded to my blog in the last half hour? Because we can read like this, checking and checking again, we have become anxious readers. We don't know how to read for relaxation anymore. Take away the technology for a week and see what happens. See what you will discover about the world.	20	1731773801589561	1	2026-06-12 04:33:10.393028	2026-06-12 07:54:27.364	\N
22	https://richmondlp.com/system/uploads/content/file/f5921ac7-a627-4f02-91a2-984a568ef391/3.2_ABP_B1%2B.mp3?version=1669676428&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZjU5MjFhYzctYTYyNy00ZjAyLTkxYTItOTg0YTU2OGVmMzkxLzMuMl9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjQyOCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=ZkbYR92TYQ7bnwTT3DThHPdk4HE8BDV28sEDiaMg~FVXdgRfRy5l2CM5xHJbM0nUpRikcbF0jBnjTDVliTuiJ6WhANwuwiMYrX~WBLn-b~rRYIruMscYcYHWX9vhtadcJ1qB7DIQdVnr2y7wtlnixJccc6gCX-wOiX5LUTBE6X0zYDnuE8wWRPVgsjvuBhUzvyZ8IK3cdt9mQoThH2TUcx3GT-7hFdOQYDYxTJnTfPJnA-tQamJ3GQdYk5hNOOEpo7~OPbg3Kxe2Vzh6rZ9VrKjDxPeW6V0~eboCD37cRNIyf-wofUSpOl5eRKaVlNI8t7IBGUceizoz8-IXRmn9ww__	3.2	 Transcript 3.2, page 25, exercise 4a. 1. It's amazing how he takes these derelict old buildings and turns them into works of art. 2. Yes, but the images are pretty disturbing sometimes. I mean, all those rats. 3. We were really surprised when we came across this last installation. Four It was so annoying, all these people taking photos with their phones. Five The kids look really bored, don't they? But actually, they're just imitating the statue's pose. Six I tell you, this one is so lifelike that the first time you see it, it's terrifying. Thank you.	23	1024202153662599	1	2026-06-12 04:34:43.139229	2026-06-12 07:56:53.45	\N
27	https://richmondlp.com/system/uploads/content/file/8b692de7-7c8e-4106-8517-ab5d0dd303a6/3.7_ABP_B1%2B.mp3?version=1669676793&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvOGI2OTJkZTctN2M4ZS00MTA2LTg1MTctYWI1ZDBkZDMwM2E2LzMuN19BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3Njc5MyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=EXPkPsSLn9gH49d8G0vEOVrXrGiZHRqzBi424gjjcXQaF-J74WRxvH6RKq3b7Si5nsTB02upyWTx4eYKtViHcYFEN-9st4PKd-ITDd5HB19Z9mi5~bzwxPlz8ofL6aATlkW2oD0Wq-481JH5a8dkNxxNNkYWHcLFl1D7GhkUqiysfkvpiBgVxuy37Mb86-79cJQBwo5sGUoncfQjLvCk~xyL5iYdmzwy-mr7UbKhHUSC9pcSmG9Yg91Zjh~qIpka0il7D8jAwktgr9ecCr3R3pv0vrBVd-sCEZnHeh4bu1JMKX3zksDqR~eQS-IVcSuNlyBYbDz9TWlUgLbO651oZw__	3.7	 Transcript 3.7, page 31, exercise 1A. This is one of my favorite places in town. I love to sit here drinking coffee and watching the world go by. It's a large town and a huge variety of people walk down the street, young and old, tourists and locals, all kinds of cultures and backgrounds, all going about their business. I love watching them and imagining where they're going, what they're like, what they're thinking. It's so much more interesting than just staring into space. Sometimes I watch the people at the next table and tune into their conversations. Is that bad? I know I shouldn't really listen in on other people's conversations. And if they're too personal, then I turn away. But usually they're simply passing the time of day or talking about work. it's surprising how many people come here to have business meetings over a cup of coffee.	29	839287422271902	1	2026-06-12 04:36:07.875532	2026-06-12 07:57:27.004	\N
25	https://richmondlp.com/system/uploads/content/file/9cd431d0-1584-48d3-b1be-2a70935136a5/3.5_ABP_B1%2B.mp3?version=1669676730&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvOWNkNDMxZDAtMTU4NC00OGQzLWIxYmUtMmE3MDkzNTEzNmE1LzMuNV9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjczMCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=qxSwBteijPYPEmgHWkvbga6qczkfmCfUYda8HeqeUsd6GYfifdHHQ57ZK-O55rR66QjRX9~AfragqLCjgdsFJPzskW7bm2rMfPyrwrkokHp9PEhqD3sxbC3jgqjotAAuO-zKNWxxu2M8wRYrMzBOvqX2Kd98pryCxst1NhzKoT4Z77~oeWu8FgGjKlRKqiqGy2XqvzYMpcNTy03a0wokg5h7bYYyxbwacjK9VZkBsvGyM5vHnP0zXOcvpcsRIr9T9M6ncK15pFo8BPlotUaT14F2K30JjkaYb42ir5IDhSGE4nWJPlMdK17d6P4ojIBqh7Ep3OSUR9kRzF0wrX~Zcw__	3.5	 Transcript 3.5, page 28, exercise 1a. This is a photo of Trafalgar Square in central London. It's one of London's best-known squares. It attracts millions of visitors every year and has often been at the centre of public demonstrations. In each corner of the square there is a plinth, an enormous stone platform. Three of these plinths hold a permanent statue, but the fourth plinth, the one you can see in the image, stood empty for over 150 years. It was originally designed to hold a statue of a horse, but due to lack of money, the statue was never built. In 1998, the local authorities started to experiment with different statues. These experiments were very popular and attracted even more visitors to the square, and a lot of discussion about what exactly should stand on the plinth. In 2010, the mayor of London announced a competition that would take place every two years where the public would decide. In the first competition, a number of sculptures were suggested, and the public voted to choose their two favourite statues, one for 2012, the year of the London Olympics, and the other for the year 2013.	26	1625444128539169	1	2026-06-12 04:35:26.531575	2026-06-12 07:57:27.035	\N
28	https://richmondlp.com/system/uploads/content/file/78948b60-044a-484e-91ed-7a0e664f6f72/3.8_ABP_B1%2B.mp3?version=1669676834&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvNzg5NDhiNjAtMDQ0YS00ODRlLTkxZWQtN2EwZTY2NGY2ZjcyLzMuOF9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3NjgzNCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=LcXeasj2tuGIcHrE2qCb8AmgjNIrjnPu-23VxZibk2HCq-2QGvvdgZFM4tV~DXUzZbitHNF-pGWU0Td1olP8jwnFF1Svy~LaE6zCb7575yUs9mfKVT8R-oQMBmcM0E9q817HCWOzyGwlDOYd3jEc6icvVjaDrZYyDySUOsA0jb3ST15MQ~IMFOaab-J7UTSz6WSwAJ7-0FG0CuTP5lg5w0dDOd3Oxzney3zQ6BSa2Qkog1dSKIUw0Me9zgZD~SjxcBWTomLQDVfc1YJL5Bx1cJEaaYcdkGQa6riGNav2MMcAJS-cveivQxXQT~alOrmXxun9u3YrFtlRAzb1Ibw~0w__	3.8	 Transcript 3.8, page 32, exercise 2A. I don't understand what the problem with this building is. The crazy design, that's the idea. What I like is that it matches what's inside. So much modern music is crazy, and that fits with the building somehow. The most important thing is that people are talking about it. That doesn't happen with most buildings, which we don't even notice. Maybe Frank has a point there. But what I hate about it is the location. There was a beautiful park there before, and now we have to look at this... thing. Ugh, I mean it's absolutely grotesque. Jane's right, the building's embarrassing. I mean, I'm embarrassed to look at it. The problem is that the architect is famous and nobody wants to criticise him. That's the problem. Yeah, okay, we all know it's a work of art, but it's a bad one. I don't want to have to see that every day of the week. That's why works of art should be inside museums. Buildings should be functional. I don't agree with Adrian. I mean, why put a museum about creativity in a grey square box? The best thing about it is that it's controversial. It provokes debate. You can't be indifferent to it, can you? I mean, you either love it or hate it. And technologically, it's incredible. The building is a sculpture. The architect intended it to be like that. A work of art in its own right, you know? Our city should celebrate that, not criticize it.	30	998695265887540	1	2026-06-12 04:36:22.874981	2026-06-12 07:57:29.418	\N
30	https://richmondlp.com/system/uploads/content/file/f4b847b5-1768-45b0-8b4a-b5d8acc2d971/3.9_ABP_B1%2B.mp3?version=1669676862&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZjRiODQ3YjUtMTc2OC00NWIwLThiNGEtYjVkOGFjYzJkOTcxLzMuOV9BQlBfQjElMkIubXAzP3ZlcnNpb249MTY2OTY3Njg2MioiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEyNTM3Njd9fX1dfQ__&Signature=P4coJLF7IwsW3Uspt4KPs7fzSibb-~B6zyBeSw6wzWFQ05vx0cgAN6s~RNMHzp4wOq3hzCJyJ~wUARG-S8dlGr0hYGXlBD-kA1hizHlAi8AStODSqkJIAEMoktHIG2UV-5bVvvIodNv01bd2BksZh2-YGnlS~cIaXX0VP35-XDlUo4eVPROYyhZicp~3ouNPU7SPbfAbH1y8A4kMUxw~mfbILg-dYcdtUxGMIO7DnkpvHe73V6QF48NZoxd1sM8TuXyqjTRvTai4TtmhOidePBJCKKOR5Whaq9m3DtMCSVfC7uGbIqUUEoHXO8404~YpTAaUCnYh~hk9Q0GX9u6-LQ__	3.9	 Transcript 3.9, page 32. Stress. 1. What I like is that it matches what's inside. 2. That's the best thing about it. 3. The most important thing is that people are talking about it. 4. The problem is that the architect is famous. 5. What I hate about it is the position.	30	1004822508955663	1	2026-06-12 04:36:22.887783	2026-06-12 07:58:02.92	\N
32	https://richmondlp.com/system/uploads/content/file/15a9a449-1550-4814-a6ad-26a4791e86f5/3.11_ABP_B1%2B.mp3?version=1678388896&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvMTVhOWE0NDktMTU1MC00ODE0LWE2YWQtMjZhNDc5MWU4NmY1LzMuMTFfQUJQX0IxJTJCLm1wMz92ZXJzaW9uPTE2NzgzODg4OTYqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzgxMjUzNzY3fX19XX0_&Signature=EvEnK27yFWyBS7WbeYxWXCUncrleVvz0TpNeiPRn8eFI8Zi~qJhwRIu28cKVKjLZyyIWaBl37R1UvfkBKL3~ImS3T9yERPTCpVkT5Sq2Moz9uWgd-zGt-sclqtLXD0AAL09AaWtU0dvTndBuIlsnd2EbbS2012eq1bUN8LW2HaqH8WmIIamBGWZIGir1WN7L7NeVdLped2I7B7~ikm6hkzY-jXmiPNZfuIp9fwOHDfCZ~XMuUMXRMbuq6B-HaoD2wz~3nicIIPuw7oOafdPQF3dFtwsEBY-hAgl5B4XWbp58Ek0exx9Ya002vUgY2a3De6M1RChHKNP0o6W8x94e3w__	3.11	 Transcript 3.11, page 33, exercise 5. 1. Excuse me, do you have a few minutes? 2. Excuse me, I wonder if you could answer a few questions? 3. Good morning, do you have a few minutes to answer a short survey? 4. Okay, thank you. Just one last question. Thank you.	31	1049265630889733	1	2026-06-12 04:36:36.6299	2026-06-12 07:58:05.363	\N
31	https://richmondlp.com/system/uploads/content/file/bac073c5-3f2a-47b6-a96f-91e1827abab2/3.10_ABP_B1%2B.mp3?version=1669676893&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvYmFjMDczYzUtM2YyYS00N2I2LWE5NmYtOTFlMTgyN2FiYWIyLzMuMTBfQUJQX0IxJTJCLm1wMz92ZXJzaW9uPTE2Njk2NzY4OTMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzgxMjUzNzY3fX19XX0_&Signature=mWkBMbfRhmimkpJsewFWmbuwuKu57iYRN3BZx5aziI5h1ldip8EBXjhDfgFRv18fUvr8LCPK3p3Mm-3wVytTDn11NckVpFcstZnFn3n1IQZbRqaLpSYV2rY4e1te9uZdpfl7w~MX7AcGYgYNGhBHa2uzHXQp3LkKhr1Faix-3YaKLtqfPYktu2x1Ns~~bnelYDfm2WHNlgYCPWPhWT9MYrBFiMq777EWPTm9e-IlHFRgiJE1k1XLR-Z8GbeO1I~P3RTpP3bCxmmANo0-XKrWi6TWE~V-IWTyVirEFEe~ArWoZEMlJY6g9bktivg-gx5cFRqK4VcEj0uI~qGdPh1E3A__	3.10	 Transcript 3.10, page 33, exercise 2A. One. Excuse me, do you have a few minutes? Sorry, no. I'm on the way to work. Two. Excuse me, I wonder if you could answer a few questions? Sorry, I've already answered. Okay, thank you. Three. Good morning. Do you have a few minutes to answer a short survey? We're offering 20 free prints to everyone who answers our questionnaire. Yeah, sure. Thank you. Just a few quick questions to start with. How old are you? Between 18 and 25? Between 26 and 30? Over 30? Between 26 and 30. Okay, thanks. Do you have a digital camera? A digital camera? No, I use the camera on my phone. What kind of phone do you have? Here it is. See, it's a... Okay, thank you. Just one last question. Do you ever print your photos on photographic paper? No, never. It's too expensive. Well, thanks for taking the time to complete the survey. Here's a voucher for 20 free prints. Bring in your phone or the memory card, and we'll print 20 of your favorite photos. Thank you. Have a nice day.	31	2186187272170333	1	2026-06-12 04:36:36.623319	2026-06-12 07:58:09.666	\N
33	https://richmondlp.com/system/uploads/content/file/1f51e006-1630-407b-9937-d32b02b1556d/R1_ABP_B1%2B.mp3?version=1669682541&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvMWY1MWUwMDYtMTYzMC00MDdiLTk5MzctZDMyYjAyYjE1NTZkL1IxX0FCUF9CMSUyQi5tcDM~dmVyc2lvbj0xNjY5NjgyNTQxKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc4MTI1Mzc2N319fV19&Signature=fbJDHi4GHeuaDZU2OuxSRgVaN0MlXknT71CcNvXeITzgFgcnWV9OGUq7Oqi4qY1Ze-YsTPeZbOXY1SRkf9W5lHRJUuxclRmiiLFBh-NfRWSwgyeiIrSYPs7j26SJlCVvvc~PpdZ9uPZgxWYr3s~FHuVwt8rvUA4cx0~WioXA75~13MQZBcqiJhhAORnxWmCFDlZDKhwavzNknrxgC58om-xRbu2ivv8B8OYvGzgKBr61gCn3lqb6KwLUq-ZTm~982qMcPrQzmfzI-NrYAfUpzC95Z~9~7zUPr-IKSlfQHHaUe1Un~UdHE8xH8lFO45ioGvTzmp1EDRSrk2GbR~2Hxw__	R1	 Transcript R1, page 34, exercise 2a. I like communicating, and these new forms of communication are quick and easy. I like to keep things separate, though. I use email for my work and business contacts, and tweeting for family and friends and also acquaintances. When I want to chat longer, with my mother for example, I can talk on Skype, which is much cheaper. Face to face? Well, I sometimes have to give lectures or presentations for my work in front of a lot of people, strangers, so that can get really stressful. With my boyfriend, I like to chat about all kinds of things. We discuss serious matters like politics and then, of course, we have arguments too, like all couples, I guess.	32	958852113637729	1	2026-06-12 04:36:44.457402	2026-06-12 08:00:21.6	\N
37	https://richmondlp.com/system/uploads/content/file/fea25f11-9655-40cb-a183-2160bf028278/R5_ABP_B1%2B.mp3?version=1669682633&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvZmVhMjVmMTEtOTY1NS00MGNiLWExODMtMjE2MGJmMDI4Mjc4L1I1X0FCUF9CMSUyQi5tcDM~dmVyc2lvbj0xNjY5NjgyNjMzKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc4MTI1Mzc2N319fV19&Signature=C7nQgn59TD8AwqL-vpv6Gt0Euoh6tld2l~tWkuQJd-HU2s~ZkWUnFO5EjLM-FOz90Jl5~~4LyHbp81u6xkZphiF3LpGj52jQIpzz6yCH-b6skZfWeNSzxxLdf95SNaRwgBN0~L2SdM3qTvpDOyj1D3RnN3ueff69US94iNQ3FZXf~joUTyCA1F4KpsiWbyfurWmR3dGqKHp4Ty3rtMIABOG~lFmbHMMrf9lBQK5bqVw~2AiH75dmmlS5FT4BLaplczEIQsQpLHS-faXgxBKA4-DA71SDHEFk7BJCahQbL3j5gX8totjXQklRGqAleh9f5WLX1CVNs4d9Pey010YWdw__	R5	 Transcript R5, page 36, exercise 2. What I like about it is that it's free. Yes, that's the best thing about the show for me. The exhibition is a really good value. The only problem is that I don't like any of the art.	34	1714317976274892	1	2026-06-12 04:37:01.906564	2026-06-12 08:00:21.938	\N
38	https://richmondlp.com/system/uploads/content/file/5655a4d4-62af-4ccd-b934-e3b2f9971151/R6_ABP_B1%2B.mp3?version=1669682643&Key-Pair-Id=K3RD3WHTWZ9ENR&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9yaWNobW9uZGxwLmNvbS9zeXN0ZW0vdXBsb2Fkcy9jb250ZW50L2ZpbGUvNTY1NWE0ZDQtNjJhZi00Y2NkLWI5MzQtZTNiMmY5OTcxMTUxL1I2X0FCUF9CMSUyQi5tcDM~dmVyc2lvbj0xNjY5NjgyNjQzKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc4MTI1Mzc2N319fV19&Signature=Geayj4GvH-ZMvZN3zSZQlWqgsTm5zf5184s-6rv6uDeSOxq85Uk-~Ks6qlVVEZ9~k7kTch5iirx9vPK3cH0IfxUbpGjFcwG0iewfSpmbybqozC0ExTUpuFaUP7z3bVKmo2FAcpJFyJHwtAYzwSBqo~C-kbTe5l0YpSjSnLA5ou38rTFymkBFPqdbAeNA0Jh8uLwzef9U1FrQsmz4tX95Yp1yOV5huygKdscneiNdMP1UtpUt2SXt8CV5ILm7Qe9FUSiBWLoIn-GlY79D5w56USUKusHcityEQhcjAC2hqkchG-pHZBr31rif9lA0X2ny1CcCoEAToIraaZrwIcdXww__	R6	 Transcript R6, page 37, exercise 2A. 1. Javier. I'm really lucky. I have a few English-speaking friends. They're exchange students studying at my university. They don't speak much French. One's Dutch, another's Brazilian. We get together once a week and have a language exchange. A little bit of French, a little bit of Portuguese, not much Dutch. but the main language we use together is English. It's really helping me. I feel so much more confident. It's definitely the best way to learn. 2. Sue When I was studying Spanish in school, I used to listen to the radio in Spanish all the time. Absolutely anything. The news, the weather, sport. I didn't care. And every now and then, they would show a movie in Spanish on the TV. I used to like watching them with the subtitles in English over and over again until I understood every word they said. 3. Cat Music has to be one of the most important things for me. It is absolutely incredible how easy it is to remember words when you associate them with music. I spend hours and hours watching videos of my favorite bands and reading their lyrics online. What did people used to do before YouTube? It is a totally amazing language learning tool. And it's not just music, of course. There are chat rooms and so much more. I don't think you need a language learning classroom anymore. You can learn it all online.	35	1293251406128592	1	2026-06-12 04:37:10.426315	2026-06-12 08:00:26.582	\N
\.


--
-- Data for Name: book_image; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_image (id, url, book_page, meta_media_id, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	https://iili.io/CCRBaJS.jpg	1	2059735228293245	1	2026-06-12 04:27:58.124568	2026-06-12 04:27:58.124568	\N
2	https://iili.io/CCRBN5P.jpg	2	1723763388653051	1	2026-06-12 04:28:10.441907	2026-06-12 04:28:10.441907	\N
3	https://iili.io/CCRBr1R.jpg	3	1030170232901862	1	2026-06-12 04:28:22.959541	2026-06-12 04:28:22.959541	\N
4	https://iili.io/CCRBLmX.jpg	4	1443352044147334	1	2026-06-12 04:28:33.543863	2026-06-12 04:28:33.543863	\N
5	https://iili.io/CCRBmBf.jpg	5	1415722990582831	1	2026-06-12 04:28:46.570068	2026-06-12 04:28:46.570068	\N
6	https://iili.io/CCRCCEx.jpg	6	989873136780656	1	2026-06-12 04:29:03.561573	2026-06-12 04:29:03.561573	\N
7	https://iili.io/CCRC1YN.jpg	7	1419226803585227	1	2026-06-12 04:29:15.805774	2026-06-12 04:29:15.805774	\N
8	https://iili.io/CCRCvvS.jpg	8	1025660919938494	1	2026-06-12 04:29:28.600355	2026-06-12 04:29:28.600355	\N
9	https://iili.io/CCRn2FR.jpg	9	976861215153221	1	2026-06-12 04:29:40.762362	2026-06-12 04:29:40.762362	\N
10	https://iili.io/CCRnTF4.jpg	10	1350994483541057	1	2026-06-12 04:29:54.415224	2026-06-12 04:29:54.415224	\N
11	https://iili.io/CCRn1Pj.jpg	11	1003896482344626	1	2026-06-12 04:30:09.931057	2026-06-12 04:30:09.931057	\N
12	https://iili.io/CCRnSlR.jpg	12	1743727286623887	1	2026-06-12 04:30:22.492008	2026-06-12 04:30:22.492008	\N
13	https://iili.io/CCRntff.jpg	13	1559318692287620	1	2026-06-12 04:30:35.026131	2026-06-12 04:30:35.026131	\N
14	https://iili.io/CCRo3ib.jpg	14	1016086560808565	1	2026-06-12 04:30:47.854041	2026-06-12 04:30:47.854041	\N
15	https://iili.io/CCRoRqJ.jpg	15	855862780587205	1	2026-06-12 04:31:01.024469	2026-06-12 04:31:01.024469	\N
16	https://iili.io/CCRoEzX.jpg	16	1288066440193894	1	2026-06-12 04:31:13.642627	2026-06-12 04:31:13.642627	\N
17	https://iili.io/CCRogqb.jpg	17	2003543000263128	1	2026-06-12 04:31:28.170824	2026-06-12 04:31:28.170824	\N
18	https://iili.io/CCRxdkN.jpg	18	1626329668434156	1	2026-06-12 04:31:41.339501	2026-06-12 04:31:41.339501	\N
19	https://iili.io/CCRxzYl.jpg	19	1053454797084383	1	2026-06-12 04:31:53.729914	2026-06-12 04:31:53.729914	\N
20	https://iili.io/CCRzqAB.jpg	20	28258686853731170	1	2026-06-12 04:33:02.523935	2026-06-12 04:33:02.523935	\N
21	https://iili.io/CCRzzPa.jpg	21	1646526209912148	1	2026-06-12 04:33:16.12673	2026-06-12 04:33:16.12673	\N
22	https://iili.io/CCRI2WX.jpg	22	1977834829515373	1	2026-06-12 04:34:23.804879	2026-06-12 04:34:23.804879	\N
23	https://iili.io/CCRIOep.jpg	23	1003084609374782	1	2026-06-12 04:34:34.55483	2026-06-12 04:34:34.55483	\N
24	https://iili.io/CCRTFTB.jpg	24	994674222950548	1	2026-06-12 04:34:49.1163	2026-06-12 04:34:49.1163	\N
25	https://iili.io/CCRTx3J.jpg	25	26957346497269356	1	2026-06-12 04:35:02.068739	2026-06-12 04:35:02.068739	\N
26	https://iili.io/CCRT03G.jpg	26	1396791208929108	1	2026-06-12 04:35:19.026537	2026-06-12 04:35:19.026537	\N
27	https://iili.io/CCRTGyl.jpg	27	1639633177339374	1	2026-06-12 04:35:31.870853	2026-06-12 04:35:31.870853	\N
28	https://iili.io/CCRTwGe.jpg	28	1553434809838522	1	2026-06-12 04:35:45.819121	2026-06-12 04:35:45.819121	\N
29	https://iili.io/CCRTv8x.jpg	29	1307232991612293	1	2026-06-12 04:35:57.491518	2026-06-12 04:35:57.491518	\N
30	https://iili.io/CCRTLFa.jpg	30	2004911920120284	1	2026-06-12 04:36:13.829881	2026-06-12 04:36:13.829881	\N
31	https://iili.io/CCRuJPn.jpg	31	968925122684081	1	2026-06-12 04:36:27.575082	2026-06-12 04:36:27.575082	\N
32	https://iili.io/CCRuucb.jpg	32	1250248027186203	1	2026-06-12 04:36:41.688933	2026-06-12 04:36:41.688933	\N
33	https://iili.io/CCRuD0u.jpg	33	2295001464363528	1	2026-06-12 04:36:49.914061	2026-06-12 04:36:49.914061	\N
34	https://iili.io/CCRAle4.jpg	34	3160172974192343	1	2026-06-12 04:36:59.090952	2026-06-12 04:36:59.090952	\N
35	https://iili.io/CCRAWB9.jpg	35	1617821975976606	1	2026-06-12 04:37:07.844794	2026-06-12 04:37:07.844794	\N
36	https://iili.io/CCRAN7j.jpg	36	853528407834309	1	2026-06-12 04:37:15.938634	2026-06-12 04:37:15.938634	\N
37	https://iili.io/CCRAvIV.jpg	37	2017648638951641	1	2026-06-12 04:37:19.106564	2026-06-12 04:37:19.106564	\N
38	https://iili.io/CCRAgB1.jpg	38	27192748637077076	1	2026-06-12 04:37:21.443033	2026-06-12 04:37:21.443033	\N
39	https://iili.io/CCRA4rg.jpg	39	36182058231408700	1	2026-06-12 04:37:23.824657	2026-06-12 04:37:23.824657	\N
40	https://iili.io/CCRAiYJ.jpg	40	1641234770511422	1	2026-06-12 04:37:25.799925	2026-06-12 04:37:25.799925	\N
41	https://iili.io/CCRAskv.jpg	41	2821646141529576	1	2026-06-12 04:37:27.95518	2026-06-12 04:37:27.95518	\N
42	https://iili.io/CCRALpR.jpg	42	1398411625428918	1	2026-06-12 04:37:30.037682	2026-06-12 04:37:30.037682	\N
43	https://iili.io/CCRADQI.jpg	43	893950970411634	1	2026-06-12 04:37:32.224595	2026-06-12 04:37:32.224595	\N
44	https://iili.io/CCRRJYG.jpg	44	1234483168633024	1	2026-06-12 04:37:34.158204	2026-06-12 04:37:34.158204	\N
\.


--
-- Data for Name: book_index; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_index (id, title, page, skill, book_page, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	Functional Language: Breaking the ice	10	functional_language	1	1	2026-06-12 04:28:02.837641	2026-06-12 04:28:02.837641	\N
2	Speaking Task: Outlining a promotional campaign	11	speaking_task	1	1	2026-06-12 04:28:02.861748	2026-06-12 04:28:02.861748	\N
3	Functional Language: Agreeing and disagreeing	20	functional_language	1	1	2026-06-12 04:28:02.866279	2026-06-12 04:28:02.866279	\N
4	Writing Task: The story behind the photo	21	writing_bank	1	1	2026-06-12 04:28:02.869747	2026-06-12 04:28:02.869747	\N
5	Functional Language: Adding emphasis	30	functional_language	1	1	2026-06-12 04:28:02.874273	2026-06-12 04:28:02.874273	\N
6	Speaking Task: A class survey	31	speaking_task	1	1	2026-06-12 04:28:02.877294	2026-06-12 04:28:02.877294	\N
7	Review A, units 1-3	32	review	1	1	2026-06-12 04:28:02.881052	2026-06-12 04:28:02.881052	\N
8	Bring it together 1, 2 & 3	35	bring_it_together	1	1	2026-06-12 04:28:02.883137	2026-06-12 04:28:02.883137	\N
9	Grammar Reference	36	grammar_reference	1	1	2026-06-12 04:28:02.886679	2026-06-12 04:28:02.886679	\N
10	Writing Bank	39	writing_bank	1	1	2026-06-12 04:28:02.889442	2026-06-12 04:28:02.889442	\N
11	Communication Bank	41	communication_bank	1	1	2026-06-12 04:28:02.892025	2026-06-12 04:28:02.892025	\N
12	Selected Transcripts	42	selected_transcripts	1	1	2026-06-12 04:28:02.894601	2026-06-12 04:28:02.894601	\N
13	Irregular Verbs	43	workbook	1	1	2026-06-12 04:28:02.897915	2026-06-12 04:28:02.897915	\N
14	Phonetic Chart	44	workbook	1	1	2026-06-12 04:28:02.902493	2026-06-12 04:28:02.902493	\N
15	Workbook	45	workbook	1	1	2026-06-12 04:28:02.908426	2026-06-12 04:28:02.908426	\N
16	Workbook Progress Test	64	workbook	1	1	2026-06-12 04:28:02.910607	2026-06-12 04:28:02.910607	\N
17	Workbook Transcripts	66	selected_transcripts	1	1	2026-06-12 04:28:02.912142	2026-06-12 04:28:02.912142	\N
18	Vodcast Series	68	workbook	1	1	2026-06-12 04:28:02.913548	2026-06-12 04:28:02.913548	\N
19	Skills Boost	71	workbook	1	1	2026-06-12 04:28:02.917704	2026-06-12 04:28:02.917704	\N
\.


--
-- Data for Name: book_lesson; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_lesson (id, unit_number, title, skill, topic, activity_number, letter_number, instruction, content, book_page, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	1.0	COMMUNICATION	speaking	Photos analysis	1	a	Work in pairs. Look at the photos. Answer the questions.	1 What do the photos show?\n2 What is the connection between the photos and the title of the unit?\n3 Which photo is the most striking? Why?	2	1	2026-06-12 04:28:14.830126	2026-06-12 04:28:14.830126	\N
2	1.0	COMMUNICATION	speaking	Types of communication	1	b	Work in pairs. Complete A in the KEY VOCABULARY PANEL. Can you think of any other types of communication? Add them to the list.	\N	2	1	2026-06-12 04:28:14.854615	2026-06-12 04:28:14.854615	\N
3	1.0	COMMUNICATION	listening	Listening to descriptions	2	\N	Listen to six people talking about the photos. Match speakers 1–6 to photos a–f. Do you agree with their descriptions?	\N	2	1	2026-06-12 04:28:14.859754	2026-06-12 04:28:14.859754	\N
4	1.0	COMMUNICATION	vocabulary	Verbs of communication	3	a	Complete the extracts from Transcript 1.1 with the verbs in the box. Match the extracts to the photos.	communicate say speak tell talk\n1 They're not just ________ with words...\n2 This gesture ________ a thousand words.\n3 ... she's using a poster to ________ her message.\n4 ... each dance ________ a story.\n5 ... it's amazing how a hand gesture can ________ so much!\n6 ... or maybe they don't ________ the same language.	2	1	2026-06-12 04:28:14.86277	2026-06-12 04:28:14.86277	\N
5	1.0	COMMUNICATION	reading	Checking answers	3	b	Read Transcript 1.1 on page 42 and check your answers.	\N	2	1	2026-06-12 04:28:14.865188	2026-06-12 04:28:14.865188	\N
6	1.0	COMMUNICATION	speaking	Vocabulary practice	4	\N	Work in pairs. Complete B in the KEY VOCABULARY PANEL.	\N	2	1	2026-06-12 04:28:14.869647	2026-06-12 04:28:14.869647	\N
7	1.0	KEY VOCABULARY	vocabulary	Say, tell, speak	5	a	Complete the questions with the correct form of say, tell and speak.	1 How many languages can you _________?\n2 Who is the one person you _________ to most often?\n3 Who was the first person you _________ to today?\n4 What was the first thing you _________ this morning?\n5 Are you good at _________ jokes?\n6 Do you know anyone who's good at _________ stories?\n7 Are you generally good at _________ what you think? Why/Why not?\n8 Have you ever _________ to a crowd of people? How did you feel?	3	1	2026-06-12 04:28:26.326591	2026-06-12 04:28:26.326591	\N
8	1.0	KEY VOCABULARY	speaking	Say, tell, speak	5	b	Work in pairs. Choose three questions. Ask and answer.	\N	3	1	2026-06-12 04:28:26.34093	2026-06-12 04:28:26.34093	\N
9	1.1	SPEAKING & VOCABULARY: Communication	vocabulary	Communication expressions	1	a	Match the communication expressions in A to the categories in B. Use a dictionary to help you.	A: chat to friends and family on Facebook, discuss politics, give talks/lectures/presentations/speeches, have arguments, talk on Skype, speak in public, talk to children/the elderly/pets/strangers, text, tweet or e-mail friends, use my body to express myself\nB: I do it a lot, I never do it, I can do it in English, I rarely do it, I enjoy doing it, I hate doing it, I’m good at it, I’m bad at it.	4	1	2026-06-12 04:28:38.79814	2026-06-12 04:28:38.79814	\N
10	1.1	SPEAKING & VOCABULARY: Communication	speaking	Personal communication	1	b	How do you communicate in your everyday life?	\N	4	1	2026-06-12 04:28:38.807634	2026-06-12 04:28:38.807634	\N
11	1.1	SPEAKING & VOCABULARY: Communication	speaking	Comparison	2	\N	Work in pairs. Compare your answers. What differences did you find?	\N	4	1	2026-06-12 04:28:38.809907	2026-06-12 04:28:38.809907	\N
12	1.1	READING	reading	Communication types	1	a	Look at the images. What kinds of communication do they show?	\N	4	1	2026-06-12 04:28:38.814065	2026-06-12 04:28:38.814065	\N
13	1.1	READING	reading	Matching texts	1	b	Read texts 1–3 and match them to images a–c.	\N	4	1	2026-06-12 04:28:38.816386	2026-06-12 04:28:38.816386	\N
14	1.1	READING	reading	Communication types	2	\N	Match texts 1–3 to one or more of the types of communication in SPEAKING & VOCABULARY 1a.	\N	4	1	2026-06-12 04:28:38.818624	2026-06-12 04:28:38.818624	\N
15	1.1	READING	reading	Problems and situations	3	\N	Work in pairs. Match texts 1–3 to problems a–c.	a People may lose the art of talking face-to-face.\nb Human communication can be complicated and confusing.\nc Some people can’t express themselves with words.	4	1	2026-06-12 04:28:38.82277	2026-06-12 04:28:38.82277	\N
16	1.1	READING	reading	Analysis	4	\N	Read the texts in 2 again. Which of the people prefer another form of communication to speaking? Which form and why?	\N	4	1	2026-06-12 04:28:38.825093	2026-06-12 04:28:38.825093	\N
17	1.1	READING	speaking	Discussion	5	\N	Work in small groups. Discuss the questions.	• Do you know anybody who communicates with their body? What are different ways you can do that (e.g., dance, mime)?\n• Do you sometimes prefer the company of animals to humans? Why/Why not?\n• Is face-to-face communication always preferable? Why/Why not?	4	1	2026-06-12 04:28:38.826494	2026-06-12 04:28:38.826494	\N
18	1.1	GRAMMAR	grammar	Verb tenses extracts	1	a	Work in pairs. Match extracts 1–6 to images a–c without looking back at the texts in READING 2.	1 I have a lot of trouble talking to people.\n2 When I first started dancing...\n3 ... this technology will separate us...\n4 I've had lots of dogs.\n5 ... they're talking, texting or tweeting on their phones...\n6 I'm going to try and get together with a friend every week...	5	1	2026-06-12 04:28:53.868681	2026-06-12 04:28:53.868681	\N
19	1.1	GRAMMAR	grammar	Verb tenses analysis	1	b	Look at the sentences in 1a again. Underline the verbs. Which are talking about a) the present? b) the past? c) the future?	\N	5	1	2026-06-12 04:28:53.879301	2026-06-12 04:28:53.879301	\N
20	1.1	GRAMMAR	grammar	Grammar panel usage	2	\N	Complete 1–6 in the GRAMMAR PANEL with the sentences in 1a.	\N	5	1	2026-06-12 04:28:53.882751	2026-06-12 04:28:53.882751	\N
21	1.1	GRAMMAR	grammar	Verb form selection	3	a	Choose the correct form of the verb. In one sentence both are possible.	1 I've never been / never went to a photo exhibition.\n2 I'm speaking / speak to my mother on the other line.\n3 Children who grow up with animals communicate / are communicating better.\n4 I don't think computers will change / are going to change the way we communicate in the future.\n5 I've done / did my homework before soccer practice.\n6 I'm going to study / 'll study art in college next year.	5	1	2026-06-12 04:28:53.88555	2026-06-12 04:28:53.88555	\N
22	1.1	GRAMMAR	grammar	Sentence matching	3	b	Match sentences 1–6 to the uses in the GRAMMAR PANEL.	\N	5	1	2026-06-12 04:28:53.888895	2026-06-12 04:28:53.888895	\N
23	1.1	PRONUNCIATION: -es & -ed verb endings	pronunciation	Verb endings	1	a	Work in pairs. Write the 3rd person present simple and the past simple forms of the verbs.	start\nwatch\ntext\ndance	5	1	2026-06-12 04:28:53.893073	2026-06-12 04:28:53.893073	\N
24	1.1	PRONUNCIATION: -es & -ed verb endings	pronunciation	Verb endings pronunciation	1	b	Read the verbs out loud. Underline the verb forms that have two syllables.	\N	5	1	2026-06-12 04:28:53.896246	2026-06-12 04:28:53.896246	\N
25	1.1	PRONUNCIATION: -es & -ed verb endings	listening	Listening and questions	2	a	Listen and check. Answer the questions.	1 When do we add -es and not -s to a verb in the present simple?\n2 When do we pronounce the -ed ending as an extra syllable?	5	1	2026-06-12 04:28:53.907515	2026-06-12 04:28:53.907515	\N
26	1.1	PRONUNCIATION: -es & -ed verb endings	pronunciation	Answer check	2	b	Check your answers on page 41.	\N	5	1	2026-06-12 04:28:53.910994	2026-06-12 04:28:53.910994	\N
27	1.1	PRONUNCIATION: -es & -ed verb endings	listening	Listening verbs	3	a	Listen and write the ten verbs you hear.	\N	5	1	2026-06-12 04:28:53.91371	2026-06-12 04:28:53.91371	\N
28	1.1	PRONUNCIATION: -es & -ed verb endings	pronunciation	Transcript reading	3	b	Read Transcript 1.3 on page 42 out loud. Pay attention to the -ed endings.	\N	5	1	2026-06-12 04:28:53.916601	2026-06-12 04:28:53.916601	\N
29	1.1	SPEAKING	speaking	Communication situations	1	\N	Work in pairs. Think about three or four different situations where people have difficulty communicating, e.g., when they don't speak each other's language or when the Internet connection is weak. What can you do to fix the communication in each situation? Add some of your own ideas to the list.	Use sign language, use simpler language, ask someone to help...	5	1	2026-06-12 04:28:53.91996	2026-06-12 04:28:53.91996	\N
30	1.1	SPEAKING	speaking	Repairing communication	2	a	Think about the situations below. What do you think would be the best way to repair the communication?	• You make a joke in an online chat room, but your friend thinks you're being serious and takes offense.\n• A friend asks you for advice, but you're distracted, watching your favorite TV show, and you answer without really listening. Your friend looks hurt.	5	1	2026-06-12 04:28:53.930295	2026-06-12 04:28:53.930295	\N
31	1.1	SPEAKING	speaking	Class discussion	2	b	Share your ideas with the class. Who has the best solutions?	\N	5	1	2026-06-12 04:28:53.933132	2026-06-12 04:28:53.933132	\N
32	1.2	SPEAKING & VOCABULARY: Communicating	speaking	Photos and signs	1	\N	Work in pairs. Look at the photos. Answer the questions.	Where do you think the people are?\nWhat is the purpose of each sign?\nWhich are protests? Which are giving information?\nWhich is the most effective? Why?	6	1	2026-06-12 04:29:09.163473	2026-06-12 04:29:09.163473	\N
33	1.2	SPEAKING & VOCABULARY: Communicating	vocabulary	Match sentences to photos	2	a	Match sentences 1–6 to one (or more) of photos a–d.	1 This person is making a very serious point.\n2 This person isn't trying to change anybody's mind.\n3 This person doesn't really have a particular message to get across.\n4 This person isn't trying to persuade anyone, he/she is simply speaking his/her mind.\n5 This person is standing up for animal rights.\n6 This sign certainly makes you stop and pay attention.	6	1	2026-06-12 04:29:09.178125	2026-06-12 04:29:09.178125	\N
34	1.2	SPEAKING & VOCABULARY: Communicating	vocabulary	Words and expressions	2	b	Match the words and expressions in bold in 2a to definitions a–f.	a express a personal opinion\nb support and fight for something\nc transmit information successfully\nd influence someone's opinion\ne express a particular argument\nf look at or listen to something very carefully	6	1	2026-06-12 04:29:09.184046	2026-06-12 04:29:09.184046	\N
35	1.2	SPEAKING & VOCABULARY: Communicating	vocabulary	Complete the questions	3	a	Complete the questions with the expressions in 2a.	1 Which sign do you think makes people __________ the most __________? Why?\n2 What rights is the man in the mask __________ing __________ for?\n3 Do you think any of these signs can actually __________ anyone's __________? If so, which?\n4 Which sign do you think is __________ing the most important __________?\n5 Do you think making a sign is the best way to __________ a message __________? Why/Why not? What other ways are there?\n6 Do you ever __________ your __________ in public like this? Why/Why not?	6	1	2026-06-12 04:29:09.187663	2026-06-12 04:29:09.187663	\N
36	1.2	SPEAKING & VOCABULARY: Communicating	listening	Check answers	3	b	Listen and check.	\N	6	1	2026-06-12 04:29:09.192028	2026-06-12 04:29:09.192028	\N
37	1.2	SPEAKING & VOCABULARY: Communicating	speaking	Asking questions	4	\N	Work in pairs. Ask and answer the questions in 3a.	\N	6	1	2026-06-12 04:29:09.196564	2026-06-12 04:29:09.196564	\N
38	1.2	LISTENING	listening	Interviews and photos	1	a	Listen to interviews with the four people in the photos. Match interviews 1–4 to photos a–d.	\N	6	1	2026-06-12 04:29:09.199769	2026-06-12 04:29:09.199769	\N
39	1.2	LISTENING	listening	Matching statements	1	b	Listen again. Match statements 1–4 to photos a–d. More than one answer may be correct.	1 The person wanted to be funny and serious at the same time.\n2 The person made the sign with a friend.\n3 The person talks about how the problem is affecting his/her mood.\n4 The person wants to be the first.	6	1	2026-06-12 04:29:09.202927	2026-06-12 04:29:09.202927	\N
40	1.2	LISTENING	speaking	Discussing signs	2	\N	Work in groups. Discuss the questions.	Do you ever see people carrying signs?\nWhat types of signs are they?\nIn what way are they similar to the signs in the photos?	6	1	2026-06-12 04:29:09.207186	2026-06-12 04:29:09.207186	\N
41	1.2	GRAMMAR	grammar	Question matching	1	a	Match questions 1-8 to answers a-h.	1 How long will you stay here for?\n2 What made you want to dress like a polar bear?\n3 How long did it take to make the sign?\n4 How long have you been here?\n5 Who gave you the idea?\n6 Do you think the sign will work?\n7 Did he say anything to you?\n8 Who is the sign for?\na It's a powerful symbol...\nb Nobody. I just love this soccer player.\nc Well, about an hour, I think.\nd Well, for nobody really... It was just a joke.\ne ... as long as necessary...\nf I hope so, but I just don't know...\ng No, unfortunately he didn't.\nh Twenty-four hours, I slept here overnight.	7	1	2026-06-12 04:29:20.461816	2026-06-12 04:29:20.461816	\N
42	1.2	GRAMMAR	listening	Listening check	1	b	Listen again and check.	\N	7	1	2026-06-12 04:29:20.473482	2026-06-12 04:29:20.473482	\N
43	1.2	GRAMMAR	grammar	Question analysis	2	a	Look at the questions in 1a again. Underline all the question words, circle all the subject pronouns and highlight all the auxiliary verbs.	\N	7	1	2026-06-12 04:29:20.476736	2026-06-12 04:29:20.476736	\N
44	1.2	GRAMMAR	grammar	Question structure	2	b	Which questions don't have a) question words? b) subject pronouns? c) auxiliary verbs?	\N	7	1	2026-06-12 04:29:20.48029	2026-06-12 04:29:20.48029	\N
45	1.2	GRAMMAR	grammar	Grammar check	3	\N	Check your answers in the GRAMMAR PANEL. Complete 1-4.	\N	7	1	2026-06-12 04:29:20.485938	2026-06-12 04:29:20.485938	\N
46	1.2	GRAMMAR	grammar	Correcting mistakes	4	a	Correct the mistakes.	1 When the last protest was held in your town or city?\n2 What it was about?\n3 When played your local soccer team their last game?\n4 Who did win?\n5 You have ever stood in line to buy something?\n6 What you wanted to buy?	7	1	2026-06-12 04:29:20.490986	2026-06-12 04:29:20.490986	\N
47	1.2	GRAMMAR	speaking	Speaking practice	4	b	Work in pairs. Ask and answer the questions in 4a.	\N	7	1	2026-06-12 04:29:20.49446	2026-06-12 04:29:20.49446	\N
48	1.2	SPEAKING	speaking	Sign creation discussion	1	\N	Work in pairs. Have you ever made a sign? What was it for? Tell your partner about it.	\N	7	1	2026-06-12 04:29:20.49818	2026-06-12 04:29:20.49818	\N
49	1.2	SPEAKING	speaking	Write your own sign	2	\N	Write your own sign. Think about...	• its purpose and its message. Is it funny or serious?\n• where you would like to show it.\n• who you would like to show it to.	7	1	2026-06-12 04:29:20.501455	2026-06-12 04:29:20.501455	\N
50	1.2	SPEAKING	speaking	Pair presentation	3	\N	Show the sign to your partner. Ask and answer questions about your signs.	\N	7	1	2026-06-12 04:29:20.503892	2026-06-12 04:29:20.503892	\N
51	1.3	SPEAKING	speaking	Technology use	1	\N	Work in groups. Discuss the questions.	Do you have a cell phone? Is it a smartphone? What do you use it for?\nWhat other technology do you use to communicate with people?\nWhat else can you use it for?	8	1	2026-06-12 04:29:33.458295	2026-06-12 04:29:33.458295	\N
52	1.3	READING	reading	Blog post prediction	1	a	You are going to read a post from a blog called Behind the Curtain. Look at the headline and the description of the blogger. What do you think the post is going to be about?	\N	8	1	2026-06-12 04:29:33.479885	2026-06-12 04:29:33.479885	\N
53	1.3	READING	reading	Blog post comprehension	1	b	Read the blog post and check your answer.	\N	8	1	2026-06-12 04:29:33.485341	2026-06-12 04:29:33.485341	\N
54	1.3	READING	reading	Images and story connection	2	a	Work in pairs. What is the connection between the images and the story?	\N	8	1	2026-06-12 04:29:33.488135	2026-06-12 04:29:33.488135	\N
55	1.3	READING	reading	Blog comprehension questions	2	b	Read the post again and answer the questions.	1 How has his new phone changed the writer's life?\n2 What can he do now that he couldn't do before?\n3 What two features of the iPhone does the writer talk about and how exactly do they work?\n4 In what way do they change the way the writer communicates with his mother?\n5 What else can he do with them?\n6 Which application is the writer most impressed by? Why?	8	1	2026-06-12 04:29:33.491554	2026-06-12 04:29:33.491554	\N
56	1.3	READING	vocabulary	Words and phrases definition	3	a	Find words/phrases in the blog post that mean...	1 turn something on\n2 told you that something has happened\n3 moved something across a surface\n4 unclear images\n5 walked around with no particular purpose or direction\n6 makes something better or stronger	8	1	2026-06-12 04:29:33.495778	2026-06-12 04:29:33.495778	\N
57	1.3	READING	speaking	Describing the blog post	3	b	Think of an adjective to describe the blog post. Tell the class why you chose it.	\N	8	1	2026-06-12 04:29:33.497829	2026-06-12 04:29:33.497829	\N
58	1.3	VOCABULARY: Senses	vocabulary	Senses verbs	1	a	Look at the extracts from the text in READING 1b. Underline the verbs and answer the questions.	1 I looked at the sky.\n2 The sky looked bluer that night.\n3 I can see some light and color.\nIn which sentence is the verb...\na describing an ability?\nb describing a conscious action (something you decide to do)?\nc introducing a description?	9	1	2026-06-12 04:29:46.753941	2026-06-12 04:29:46.753941	\N
59	1.3	VOCABULARY: Senses	vocabulary	Senses verbs	1	b	Match the verbs in the box to the categories. Use a dictionary to help you. Some verbs can fit in more than one category.	Ability / Conscious action / Description	9	1	2026-06-12 04:29:46.765924	2026-06-12 04:29:46.765924	\N
60	1.3	VOCABULARY: Senses	vocabulary	Senses verbs	2	\N	Complete the sentences with the verbs from 1b. More than one verb may be possible.	1 Don't ________ that! It's hot!\n2 Can you ________ that sound? What is it?\n3 Mm. That ________ nice. What are you cooking?\n4 Is that Ana singing? She ________ really good!	9	1	2026-06-12 04:29:46.768475	2026-06-12 04:29:46.768475	\N
61	1.3	VOCABULARY: Senses	vocabulary	Senses verbs	3	a	Choose the correct verb to complete the questions.	1 How well can you look / see ? Do you need to wear glasses? Does either of your parents wear glasses?\n2 Do you prefer to hear / listen to music quietly or at full volume? Why?\n3 Does it get very cold in your hometown in winter? Do you feel / touch the cold?\n4 Do you like food that feels / tastes hot and spicy, or do you prefer more subtle flavors? Why?	9	1	2026-06-12 04:29:46.770615	2026-06-12 04:29:46.770615	\N
62	1.3	VOCABULARY: Senses	speaking	Senses conversation	3	b	Work in pairs. Ask and answer the questions in 3a. Which sense is the most important for you? Why?	\N	9	1	2026-06-12 04:29:46.772713	2026-06-12 04:29:46.772713	\N
63	1.3	GRAMMAR	grammar	Senses and perception	1	a	Which of the sentences are true for you at the moment?	1 I'm looking out the window.\n2 I can see something strange out of the corner of my eye!\n3 I can hear the sound of children playing in the distance.\n4 I'm thinking about this exercise.	9	1	2026-06-12 04:29:46.775557	2026-06-12 04:29:46.775557	\N
64	1.3	GRAMMAR	grammar	Senses and perception	1	b	Work in pairs. Compare your answers. Answer the questions.	a Which sentences describe a conscious action that is in progress at the moment?\nb Which describe perceptions (things you can sense using your five senses)?	9	1	2026-06-12 04:29:46.77921	2026-06-12 04:29:46.77921	\N
65	1.3	GRAMMAR	grammar	State and dynamic verbs	2	\N	Complete 1-4 in the GRAMMAR PANEL with the sentences in 1a.	\N	9	1	2026-06-12 04:29:46.78176	2026-06-12 04:29:46.78176	\N
66	1.3	GRAMMAR	grammar	State and dynamic verbs	3	\N	Choose the correct verb to complete the sentences.	1 I have a bad cold and I can't smell / I'm not smelling anything.\n2 I see / I'm seeing the boss about my vacation dates tomorrow.\n3 What are you doing? I taste / I'm tasting the soup to see if it has enough salt in it.\n4 I can feel / I'm feeling the sun on my skin. It's so hot! I think I burn / I'm burning!	9	1	2026-06-12 04:29:46.784018	2026-06-12 04:29:46.784018	\N
67	1.3	GRAMMAR	grammar	Sentence writing	4	a	Write three sentences describing what you are doing right now and three sentences describing what you can perceive through your senses.	\N	9	1	2026-06-12 04:29:46.786538	2026-06-12 04:29:46.786538	\N
68	1.3	GRAMMAR	speaking	Sentence writing	4	b	Work in pairs. Compare your sentences. How many of them are the same?	\N	9	1	2026-06-12 04:29:46.791564	2026-06-12 04:29:46.791564	\N
69	1.4	TUNE IN	speaking	Starting conversations	1	\N	Work in pairs. Look at the images. Discuss the questions.	• Do you ever use these topics to start a conversation?\n• What other topics do you use?\n• What kinds of questions would you ask about them?	10	1	2026-06-12 04:29:59.659853	2026-06-12 04:29:59.659853	\N
70	1.4	TUNE IN	vocabulary	Verbs and nouns	2	\N	Work in pairs. Match verbs 1–6 to nouns a–f. More than one option may be possible.	1 hear / a wet\n2 watch / b better\n3 get / c the game\n4 have / d the news\n5 feel / e people\n6 know / f plans	10	1	2026-06-12 04:29:59.666954	2026-06-12 04:29:59.666954	\N
71	1.4	TUNE IN	speaking	Conversation starters	3	a	The expressions in 2 can all be used to start a conversation. Think of the conversation opener for each expression.	hear the news → Have you heard the news about Jenny?	10	1	2026-06-12 04:29:59.671474	2026-06-12 04:29:59.671474	\N
72	1.4	TUNE IN	listening	Conversation starters	3	b	Listen and compare.	\N	10	1	2026-06-12 04:29:59.674237	2026-06-12 04:29:59.674237	\N
73	1.4	TUNE IN	listening	Matching conversations	4	\N	Listen and match conversations 1–5 to situations a–e.	a strangers on a train\nb coworkers at the coffee machine\nc coworkers on the elevator\nd a couple at home\ne strangers at a party	10	1	2026-06-12 04:29:59.677137	2026-06-12 04:29:59.677137	\N
74	1.4	TUNE IN	listening	Conversation topics	5	\N	Listen again. Which conversations change topic and which follow the topic in the opening line? What does this tell you about conversation starters?	\N	10	1	2026-06-12 04:29:59.680112	2026-06-12 04:29:59.680112	\N
75	1.4	FOCUS ON LANGUAGE	functional_language	Conversation statements	6	a	Look at the statements and questions. Which would you use with a) strangers? b) friends/family? c) both?	1 Do you know something? Your face is really familiar.\n2 Excuse me, can I give you a hand with that?\n3 How are you feeling today?\n4 So, how do you know Sergio?\n5 What's the problem? You look terrible.\n6 What did you say your name was again?\n7 Hi, what are you up to?\n8 Did you sleep OK?\n9 Hi, what brings you here at this time of day?\n10 You don't know me, but...	10	1	2026-06-12 04:29:59.682069	2026-06-12 04:29:59.682069	\N
76	1.4	FOCUS ON LANGUAGE	speaking	Breaking the ice	6	b	Work in pairs. Which do you think might be useful for breaking the ice?	\N	10	1	2026-06-12 04:29:59.683861	2026-06-12 04:29:59.683861	\N
77	1.4	OVER TO YOU	speaking	Role play situations	7	a	Work in pairs. Choose one of the situations. Student A starts a conversation with Student B. You are strangers. How long can you can keep the conversation going?	1 standing at a bus stop\n2 taking shelter from torrential rain\n3 standing in a long line for tickets\n4 waiting to check in at an airport	10	1	2026-06-12 04:29:59.685696	2026-06-12 04:29:59.685696	\N
78	1.4	OVER TO YOU	speaking	Role play performance	7	b	Act out your situation for the class. Can other students guess where you are?	\N	10	1	2026-06-12 04:29:59.687639	2026-06-12 04:29:59.687639	\N
79	1.4	OVER TO YOU	speaking	Discussion	8	\N	Work in groups. How easy do you find it to break the ice if you are interested in talking to somebody? What other typical ways can you think of?	\N	10	1	2026-06-12 04:29:59.690636	2026-06-12 04:29:59.690636	\N
80	1.5	TUNE IN	reading	Marketing strategies	1	\N	Read the online article. Match statements a-d to paragraphs 1-4.	a It can help create goodwill and a positive image for your product.\nb It may be expensive and time-consuming.\nc A personal touch can help a lot.\nd It can help get people interested in what you offer.	11	1	2026-06-12 04:30:14.309852	2026-06-12 04:30:14.309852	\N
81	1.5	TUNE IN	reading	Marketing strategies	2	\N	Underline the different marketing strategies in the article.	\N	11	1	2026-06-12 04:30:14.317359	2026-06-12 04:30:14.317359	\N
82	1.5	PREPARE FOR TASK	speaking	Marketing pros and cons	3	\N	Work in pairs. Discuss the pros and cons of...	e-mail\nwikis\nTwitter\nonline banners\nmerchandising\ncold-calling\nword of mouth	11	1	2026-06-12 04:30:14.32043	2026-06-12 04:30:14.32043	\N
83	1.5	PREPARE FOR TASK	speaking	Marketing strategies analysis	4	\N	Work in pairs. Which of the marketing strategies in the article and in 3 could work for these products?	events\ncell phone service\nlast-minute travel deals\nfree invitation to concert\nsoccer team	11	1	2026-06-12 04:30:14.323237	2026-06-12 04:30:14.323237	\N
84	1.5	PREPARE FOR TASK	speaking	Promotional campaign design	5	\N	How would you design a promotional campaign for your English textbook? Brainstorm some initial thoughts about it.	\N	11	1	2026-06-12 04:30:14.326351	2026-06-12 04:30:14.326351	\N
85	1.5	TASK	speaking_task	Promotional campaign outline	6	a	Work in small groups. Outline a promotional campaign for American Big Picture. Include...	the customers you are targeting\nthe promotions you are going to adopt\nthe form of communication you are going to use for your campaign	11	1	2026-06-12 04:30:14.332894	2026-06-12 04:30:14.332894	\N
86	1.5	TASK	speaking_task	Promotional campaign evaluation	6	b	Look at the strategies on page 41. Choose the one you think is the most effective for your campaign. Explain why and give more details where possible. Can you think of any other strategies?	\N	11	1	2026-06-12 04:30:14.336323	2026-06-12 04:30:14.336323	\N
87	1.5	REPORT BACK	speaking_task	Presenting campaigns	7	\N	Present your campaign to the rest of the class. Whose campaign is the most attractive, commercial, original? Which is the "hardest sell"? Why?	\N	11	1	2026-06-12 04:30:14.339577	2026-06-12 04:30:14.339577	\N
88	2.0	A GOOD READ	speaking	Reading images	1	a	Work in pairs. Look at the images. Answer the questions.	1 Where are the people?\n2 What do you think the people are reading? How do you know?\n3 Are they reading carefully or casually? Why?	12	1	2026-06-12 04:30:26.385219	2026-06-12 04:30:26.385219	\N
89	2.0	A GOOD READ	vocabulary	Vocabulary panel	1	b	Work in pairs. Complete A in the KEY VOCABULARY PANEL.	\N	12	1	2026-06-12 04:30:26.396161	2026-06-12 04:30:26.396161	\N
90	2.0	A GOOD READ	listening	Photographer talk	2	a	Listen to a photographer talking about the images. In what order does she talk about them?	\N	12	1	2026-06-12 04:30:26.399665	2026-06-12 04:30:26.399665	\N
91	2.0	A GOOD READ	listening	Photographer talk	2	b	Listen again. What does she like about each image?	\N	12	1	2026-06-12 04:30:26.401203	2026-06-12 04:30:26.401203	\N
92	2.0	A GOOD READ	listening	Matching images	3	a	Listen again and match to images a–f.	1 This is a good place to check out the sports news.\n2 He scrolls down the text on the screen.\n3 You just hear people reading a script out loud but you never see them.\n4 You glance at a few lines of a novel and then close your eyes...\n5 They're looking through their notes for the last time.\n6 This guy seems to be looking up some important information.	12	1	2026-06-12 04:30:26.402744	2026-06-12 04:30:26.402744	\N
93	2.0	A GOOD READ	vocabulary	Vocabulary panel	3	b	Complete B in the KEY VOCABULARY PANEL.	\N	12	1	2026-06-12 04:30:26.404323	2026-06-12 04:30:26.404323	\N
94	2.0	Reading	vocabulary	Reading verbs	4	a	Use words in B to complete the sentences. One does not apply. More than one answer may be correct.	1 I sometimes __________ the covers of magazines in stores, but I never buy them.\n2 I always __________ my notes just before an exam.\n3 When I want to __________ a word, I always go to an online dictionary.\n4 I always __________ the weather report on my computer first thing every morning.\n5 I've never had to __________ a speech __________ to an audience. It'd terrify me!	13	1	2026-06-12 04:30:38.573231	2026-06-12 04:30:38.573231	\N
95	2.0	Reading	speaking	Reading habits	4	b	Are the statements true for you? Share your answers with the class.	\N	13	1	2026-06-12 04:30:38.592418	2026-06-12 04:30:38.592418	\N
96	2.0	Reading	speaking	Reading preferences	5	\N	Work in pairs. Discuss the questions.	Where do you prefer to read?\nWhat do you like reading there?	13	1	2026-06-12 04:30:38.602397	2026-06-12 04:30:38.602397	\N
97	2.1	SPEAKING & VOCABULARY	vocabulary	Books & genres	1	a	Work in pairs. Add the words in the box to the two groups. Use a dictionary to help you.	1 Different kinds of books\n2 Different types or genres of fiction (novels or movies)	14	1	2026-06-12 04:30:52.802842	2026-06-12 04:30:52.802842	\N
98	2.1	SPEAKING & VOCABULARY	speaking	Books & genres	1	b	Answer the questions.	When was the last time you bought a book?\nWhat kind of book was it?\nWas it for you or for someone else?\nWhy did you choose that particular book?	14	1	2026-06-12 04:30:52.810834	2026-06-12 04:30:52.810834	\N
99	2.1	SPEAKING & VOCABULARY	speaking	Books & genres	2	a	Mark the statements that are true for you. When you choose a book, what do you do?	I look at the cover—the image and the design tell me a lot about the book.\nI read the blurb on the back and maybe the information about the author.\nI look through the book and maybe read the opening page or a short extract.\nI only buy a book if someone has recommended it or if I've read a good review.	14	1	2026-06-12 04:30:52.815457	2026-06-12 04:30:52.815457	\N
100	2.1	SPEAKING & VOCABULARY	speaking	Books & genres	2	b	Compare your answers with a partner's.	\N	14	1	2026-06-12 04:30:52.819059	2026-06-12 04:30:52.819059	\N
101	2.1	LISTENING	listening	Novels analysis	1	a	Look at the covers of four novels. Answer the questions.	1 Are you familiar with any of the novels?\n2 Look at the titles and the images. What kind of book do you think each one is? Choose from the genres in SPEAKING & VOCABULARY 1a.\n3 If you were in a bookstore, which one might you pick up?	14	1	2026-06-12 04:30:52.822528	2026-06-12 04:30:52.822528	\N
102	2.1	LISTENING	speaking	Novels analysis	1	b	Discuss your answers in small groups. Did you all agree?	\N	14	1	2026-06-12 04:30:52.826031	2026-06-12 04:30:52.826031	\N
103	2.1	LISTENING	listening	Novels analysis	2	\N	Listen to someone talking about the four novels. Check your answers to 1a.	\N	14	1	2026-06-12 04:30:52.829871	2026-06-12 04:30:52.829871	\N
104	2.1	LISTENING	listening	Novels analysis	3	a	Listen again. Match the novels to the facts. More than one answer is possible for one of the sentences.	1 It seems very real, and this is what makes it powerful.\n2 It's the story of a parent and a child.\n3 The novel is like a flashback.\n4 The novel is a vision of the future.\n5 It gives a real flavor of the place where it is set.	14	1	2026-06-12 04:30:52.833611	2026-06-12 04:30:52.833611	\N
105	2.1	LISTENING	speaking	Novels analysis	3	b	Work in pairs. Answer the question.	What do the books have in common?\na They are not easy to classify.\nb They are/were all best sellers.\nc They are all controversial novels.	14	1	2026-06-12 04:30:52.837238	2026-06-12 04:30:52.837238	\N
106	2.1	LISTENING	speaking	Reading preferences	4	\N	Work in pairs. Discuss the questions.	• Have you read any of these books?\n• Would you like to? Why/Why not?\n• Would you prefer to see the movie?	14	1	2026-06-12 04:30:52.840575	2026-06-12 04:30:52.840575	\N
107	2.1	READING	reading	Book extracts	1	a	Read two extracts from one of the novels on page 14. Which novel do you think they come from?	\N	15	1	2026-06-12 04:31:06.557866	2026-06-12 04:31:06.557866	\N
108	2.1	READING	reading	Book extracts	1	b	Work in pairs. Compare your answers and explain why.	\N	15	1	2026-06-12 04:31:06.564215	2026-06-12 04:31:06.564215	\N
109	2.1	READING	reading	Book extracts	2	a	Read the extracts again. Answer the questions.	1 How many characters are there in each extract? Who are they? Which is the main character?\n2 Where is the action taking place? What is the main action?\n3 What do you think happened after the scene?	15	1	2026-06-12 04:31:06.56899	2026-06-12 04:31:06.56899	\N
110	2.1	READING	reading	Book extracts	2	b	Work in pairs. Would you like to read the novel? Why?/Why not?	\N	15	1	2026-06-12 04:31:06.572575	2026-06-12 04:31:06.572575	\N
111	2.1	GRAMMAR	grammar	Verbs in context	1	a	Look at the verbs in bold from the extracts. Which describe...	a a single action?\nb an action that was in progress at the time?	15	1	2026-06-12 04:31:06.575813	2026-06-12 04:31:06.575813	\N
112	2.1	GRAMMAR	grammar	Verb forms	2	\N	Complete the sentences with the correct form of the verbs.	1 Mma. Ramotswe ________ (stand) at the counter of the shop when Mma. Makutsi ________ (run) through the door.\n2 I ________ (stop) on my way back from my cattle post. It ________ (be) a hot day and I ________ (rest) under a tree.\n3 She ________ (sit) on the bed when the neighbor ________ (come) in and ________ (say) that she would get somebody to take her to her father.\n4 As she ________ (walk) down the front steps of the hotel, she ________ (see) Dr. Komoti in the mall.\n5 She ________ (turn) around sharply. A woman ________ (stand) in the doorway, wiping her hands on a cloth.	15	1	2026-06-12 04:31:06.579463	2026-06-12 04:31:06.579463	\N
113	2.1	SPEAKING	speaking	Book recommendation	1	a	Think of a book or the movie of a book you have read or seen recently. Would you recommend it to your classmates? Why/Why not?	\N	15	1	2026-06-12 04:31:06.583097	2026-06-12 04:31:06.583097	\N
114	2.1	SPEAKING	speaking	Book recommendation	1	b	Work in groups. Tell your group about your book or movie.	It's set in...\nIt tells the story of...\nIt's all about...	15	1	2026-06-12 04:31:06.589375	2026-06-12 04:31:06.589375	\N
115	2.1	SPEAKING	speaking	Book recommendation	2	a	Work in groups. Decide which book or movie you would like to recommend to the class.	\N	15	1	2026-06-12 04:31:06.594498	2026-06-12 04:31:06.594498	\N
116	2.1	SPEAKING	speaking	Book recommendation	2	b	Present your choice to the class. Take a vote to find out which book or movie most people would like to see or read.	\N	15	1	2026-06-12 04:31:06.600046	2026-06-12 04:31:06.600046	\N
117	2.2	LISTENING	listening	Manga	1	\N	Work in pairs. What do you know about manga? Look at the images to help you. Do you know anyone who is a fan?	\N	16	1	2026-06-12 04:31:18.956142	2026-06-12 04:31:18.956142	\N
118	2.2	LISTENING	listening	Manga growth	2	\N	Listen to a manga fan, Tanya Kowitz, talk about manga's growth in the world. Answer the questions.	1 In what order does she mention the images?\n2 What other uses of manga are not illustrated?	16	1	2026-06-12 04:31:18.960143	2026-06-12 04:31:18.960143	\N
119	2.2	LISTENING	listening	Manga growth	3	a	Listen again. Change the sentences so that they are true.	1 Manga represents nearly half of what Japanese people read.\n2 Tanya lives in Tokyo now.\n3 Hiroshima has a special bookstore devoted to manga.\n4 The plot of the manga Hamlet is similar to the original version.\n5 1 World Manga are comics that look at local Japanese issues.\n6 Large manga faces are used on TV commercials.\n7 Tanya's final point is that manga is a purely Japanese phenomenon.	16	1	2026-06-12 04:31:18.962151	2026-06-12 04:31:18.962151	\N
120	2.2	LISTENING	listening	Manga growth	3	b	Listen and check your answers.	\N	16	1	2026-06-12 04:31:18.964601	2026-06-12 04:31:18.964601	\N
121	2.2	VOCABULARY: Books & genres (2)	vocabulary	Books and genres	1	\N	Match the words from LISTENING 2 to the categories.	1 Type of reading material\n2 Elements of a story\n3 Different representations of a story	16	1	2026-06-12 04:31:18.966371	2026-06-12 04:31:18.966371	\N
122	2.2	VOCABULARY: Books & genres (2)	vocabulary	Books and genres	2	a	Complete the sentences with words from the box in 1. In some cases, the plural form may be necessary or two answers possible.	1 I loved the original, but the movie __________ was terrible.\n2 I like Lisa Simpson; she's my favorite __________ on the show.\n3 The book was great, but I had trouble understanding the __________. It was really complicated.\n4 Tintin was the first __________ I read as a kid.\n5 I mostly read fiction, though not __________. They aren't always that good.	16	1	2026-06-12 04:31:18.971464	2026-06-12 04:31:18.971464	\N
123	2.2	VOCABULARY: Books & genres (2)	vocabulary	Books and genres	2	b	Listen and check.	\N	16	1	2026-06-12 04:31:18.973717	2026-06-12 04:31:18.973717	\N
124	2.2	VOCABULARY: Books & genres (2)	speaking	Books and genres	3	\N	Change or add any words in the sentences in 2a to make them true for you. Continue the sentences and then compare with a partner's.	1 I loved the original Batman comic, but the movie version was terrible. It's much better in my imagination.	16	1	2026-06-12 04:31:18.975753	2026-06-12 04:31:18.975753	\N
125	2.2	READING & SPEAKING	reading_listening	Literature and film	1	\N	Work in pairs. Look at the images on page 16 again. Which one shows a famous work of literature? Do you know anything about the original story?	\N	17	1	2026-06-12 04:31:32.821694	2026-06-12 04:31:32.821694	\N
126	2.2	GRAMMAR	grammar	Past perfect verbs	1	a	Look at the verbs in bold in READING & SPEAKING 2b. Which are describing...	a an event that happened before the main action in the story?\nb a situation that had been in progress for some time before the story started?	17	1	2026-06-12 04:31:32.828699	2026-06-12 04:31:32.828699	\N
127	2.2	GRAMMAR	grammar	Past perfect	1	b	Complete 1-3 in the GRAMMAR PANEL with sentences from the texts in READING & SPEAKING 2b.	\N	17	1	2026-06-12 04:31:32.833468	2026-06-12 04:31:32.833468	\N
128	2.2	GRAMMAR	grammar	Past perfect vs past simple	2	a	Choose the correct form of the verbs to complete the story.	Luke (1)was / had been a simple farm boy. He (2)lived / had lived with his uncle and aunt. His mother died when he was born and he (3)never met / had never met his father. Not, that is, until one day when he was repairing an old robot that he (4)bought / had bought from some travelers and he accidentally (5)unlocked / had unlocked a message that would change the course of his life.	17	1	2026-06-12 04:31:32.837548	2026-06-12 04:31:32.837548	\N
129	2.2	GRAMMAR	speaking	Story comparison	2	b	Work in pairs. Compare your answers. Do you know what movie it comes from?	\N	17	1	2026-06-12 04:31:32.840961	2026-06-12 04:31:32.840961	\N
130	2.2	GRAMMAR	speaking	Writing movie plots	3	\N	Work in pairs. Write the story (50 words) of a famous movie or piece of literature. Read it to the class. Can anyone guess what it is?	\N	17	1	2026-06-12 04:31:32.843427	2026-06-12 04:31:32.843427	\N
131	2.2	READING & SPEAKING	reading	Play descriptions	2	a	Look at the movie posters of two other plays by the same writer. Do you know what they are? Choose from the list.	Romeo & Juliet\nThe Tempest\nThe Merchant of Venice\nA Midsummer Night's Dream\nMacbeth\nTwelfth Night	17	1	2026-06-12 04:31:32.846592	2026-06-12 04:31:32.846592	\N
132	2.2	READING & SPEAKING	reading	Matching texts	2	b	Read the descriptions of Hamlet and the two plays in the posters. Match them to the images on this page and page 16.	\N	17	1	2026-06-12 04:31:32.849144	2026-06-12 04:31:32.849144	\N
133	2.2	READING & SPEAKING	speaking	Movies and stories	3	\N	Work in pairs. Have you seen either of the movies in 1? Would you like to? Which stories from your country have been made into a movie or comics?	\N	17	1	2026-06-12 04:31:32.851368	2026-06-12 04:31:32.851368	\N
134	2.3	SPEAKING	speaking	Cliff-hanger images	1	a	Work in pairs. Look at the images. What is the connection between the images and the dictionary definition?	\N	18	1	2026-06-12 04:31:45.499983	2026-06-12 04:31:45.499983	\N
135	2.3	SPEAKING	listening	Cliff-hanger images	1	b	Listen and check.	\N	18	1	2026-06-12 04:31:45.507995	2026-06-12 04:31:45.507995	\N
136	2.3	SPEAKING	speaking	TV series	2	\N	Work in groups. Think of five popular TV series in your country. Compare your list with your group and answer the questions.	Why are they so popular? Why do people become addicted to them?\nHave you ever gotten hooked on a TV series? Why/Why not?	18	1	2026-06-12 04:31:45.516015	2026-06-12 04:31:45.516015	\N
137	2.3	READING	reading	Cell phone novels	1	a	Read the article and notice...	1 the two forms of literature that are being compared.\n2 the main similarities between the two forms.\n3 the main differences.	18	1	2026-06-12 04:31:45.520011	2026-06-12 04:31:45.520011	\N
138	2.3	READING	speaking	Cell phone novels discussion	1	b	Work in pairs. Check your answers and discuss the questions.	Do you know if any cell phone novels have been published in your language?\nHave you ever read a cell phone novel? Would you like to? Why/Why not?	18	1	2026-06-12 04:31:45.525187	2026-06-12 04:31:45.525187	\N
139	2.3	GRAMMAR	grammar	Used to vs would	1	a	Look at the sentences. Complete them with Yoshi (Y) or Dickens (D).	1 __ writes and publishes his novel little by little.\n2 __ used to write his novels one installment at a time.\n3 __ listens to his readers' opinions.\n4 __ changes the plot.\n5 __ would listen to the reactions of his readers.\n6 __ would drop a storyline if it wasn't successful.	19	1	2026-06-12 04:32:53.015507	2026-06-12 04:32:53.015507	\N
140	2.3	GRAMMAR	reading	Used to vs would	1	b	Read the article in READING 1a again and check your answers. How did you know which was which?	\N	19	1	2026-06-12 04:32:53.021431	2026-06-12 04:32:53.021431	\N
141	2.3	GRAMMAR	grammar	Used to vs would	2	a	Underline the verbs in the extracts in 1a that talk about Dickens. What two forms are used? Find more examples of both forms in the article.	\N	19	1	2026-06-12 04:32:53.023604	2026-06-12 04:32:53.023604	\N
142	2.3	GRAMMAR	grammar	Used to vs would	2	b	Complete 1–2 in the GRAMMAR PANEL with examples from the article.	\N	19	1	2026-06-12 04:32:53.025559	2026-06-12 04:32:53.025559	\N
143	2.3	GRAMMAR	grammar	Used to vs would	3	a	Work in pairs. Look at the GRAMMAR PANEL again. In which sentences can you replace used to with would?	1 I used to love reading comic books when I was younger, but now I find them really boring.\n2 My dad used to read stories to us every night before we went to sleep.\n3 My favorite bedtime stories used to be stories about pirates and robbers and superheroes.\n4 I used to do a lot of reading in bed, but now I just fall asleep!	19	1	2026-06-12 04:32:53.028252	2026-06-12 04:32:53.028252	\N
144	2.3	GRAMMAR	speaking	Used to vs would	3	b	Are any of the sentences true for you? Share your ideas with your partner.	\N	19	1	2026-06-12 04:32:53.032792	2026-06-12 04:32:53.032792	\N
145	2.3	PRONUNCIATION	pronunciation	Used to / use to	1	a	Listen to this short exchange. How do we pronounce the underlined words? Does the pronunciation change at all?	A Did you use to watch a lot of TV when you were a kid?\nB No, we didn't use to have a TV, but we used to go to the movies a lot.	19	1	2026-06-12 04:32:53.0345	2026-06-12 04:32:53.0345	\N
146	2.3	PRONUNCIATION	speaking	Used to / use to	1	b	Work in pairs. Listen and repeat. Ask and answer other questions beginning with Did you use to...?	\N	19	1	2026-06-12 04:32:53.036227	2026-06-12 04:32:53.036227	\N
147	2.3	SPEAKING	speaking	Children's books	1	a	Work in pairs. Discuss the questions.	• What are the ingredients of a successful children's book or TV show?\n• In what ways are they different from books and shows that appeal to adults?\n• Can you think of any books, movies or TV shows that are equally popular with kids and adults? Why do you think that is?	19	1	2026-06-12 04:32:53.037875	2026-06-12 04:32:53.037875	\N
148	2.3	SPEAKING	speaking	Children's books	1	b	Share your answers with the class. Which book or show was the most talked about?	\N	19	1	2026-06-12 04:32:53.041861	2026-06-12 04:32:53.041861	\N
149	2.0	TUNE IN	speaking	Reading habits	1	\N	Work in pairs. Look at the image. What does it say about reading today?	\N	20	1	2026-06-12 04:33:07.018049	2026-06-12 04:33:07.018049	\N
150	2.0	TUNE IN	listening	Reading opinions	2	a	Listen to journalist Louise Fryer talking about how we read today. Mark the sentence that best summarizes her opinion.	We read badly because...\n1 there is too much to read.\n2 we read anxiously.\n3 we can't concentrate.	20	1	2026-06-12 04:33:07.028351	2026-06-12 04:33:07.028351	\N
151	2.0	TUNE IN	listening	Reading examples	2	b	What examples of reading online does she mention?	e-mails, weather forecast...	20	1	2026-06-12 04:33:07.036085	2026-06-12 04:33:07.036085	\N
152	2.0	TUNE IN	listening	Agreeing and disagreeing	3	a	Listen to six people giving their personal opinion about the topic. How many of them agree with Louise, and how many disagree?	\N	20	1	2026-06-12 04:33:07.047717	2026-06-12 04:33:07.047717	\N
153	2.0	TUNE IN	speaking	Personal opinions	3	b	Work in pairs. What do you think? Do you agree or disagree? Why?	\N	20	1	2026-06-12 04:33:07.056722	2026-06-12 04:33:07.056722	\N
154	2.0	FOCUS ON LANGUAGE	functional_language	Matching phrases	4	\N	Work in pairs. Match the two parts of the phrases from 3a.	1 I don't agree\n2 I really see\n3 I agree\n4 I don't see it\n5 I couldn't\n6 I'm afraid she's wrong\na that way\nb about that\nc at all\nd Louise's point, but...\ne to some extent\nf agree more.	20	1	2026-06-12 04:33:07.062093	2026-06-12 04:33:07.062093	\N
155	2.0	OVER TO YOU	speaking	Reactions to opinions	7	a	Look at the opinions. What is your reaction to them? Do you a) strongly agree? b) agree to a point? c) disagree on the whole? d) strongly disagree?	1 Professional athletes are paid too much.\n2 Our schools don't prepare children for the modern world.\n3 The Internet is the best invention of the last 100 years.\n4 Printed books will soon be a thing of the past.	20	1	2026-06-12 04:33:07.067503	2026-06-12 04:33:07.067503	\N
156	2.0	OVER TO YOU	speaking	Discussing opinions	7	b	Work in pairs. Compare your answers. Explain why you agree or disagree. If you and your partner disagree on any of the points, then try to persuade your partner to change his or her mind.	\N	20	1	2026-06-12 04:33:07.071785	2026-06-12 04:33:07.071785	\N
157	2.0	OVER TO YOU	speaking	Class discussion	8	\N	Report back to the class on your discussion. Which statement provoked the most disagreement in the class?	\N	20	1	2026-06-12 04:33:07.077815	2026-06-12 04:33:07.077815	\N
158	2.5	TUNE IN	speaking	Photo analysis	1	\N	Look at the photo. What can you see? Who do you think took it? Was it planned or accidental?	\N	21	1	2026-06-12 04:34:14.803093	2026-06-12 04:34:14.803093	\N
159	2.5	TUNE IN	reading	Story behind image	2	\N	Read a short article from the Lonely Planet website called The story behind the image and check your answers to 1.	\N	21	1	2026-06-12 04:34:14.810669	2026-06-12 04:34:14.810669	\N
160	2.5	TUNE IN	reading	Article comprehension	3	\N	Work in pairs. Read the article again and answer the questions.	1 What did he think of the photo after he took it?\n2 Why did he change it to black and white?\n3 What was people's reaction to it?	21	1	2026-06-12 04:34:14.8127	2026-06-12 04:34:14.8127	\N
186	3.1	PRONUNCIATION	listening	Word stress for emphasis	1	a	Listen and notice the stress on the words in bold.	1 A: Mm, this isn't very nice.\nB: Not very nice? It's totally disgusting!	25	1	2026-06-12 04:35:09.444097	2026-06-12 04:35:09.444097	\N
187	3.1	PRONUNCIATION	pronunciation	Word stress for emphasis	1	b	Listen and repeat.	\N	25	1	2026-06-12 04:35:09.447058	2026-06-12 04:35:09.447058	\N
161	2.5	PREPARE FOR TASK	grammar	Past verb forms	4	a	Work in pairs. Look at the photo and complete the text with the correct form of the verbs in the past simple, past continuous or past perfect.	two narrow peaks that you can see are called Fitz Roy and Cerro Torre. We (2) ________ (spend) a few weeks hiking around that area and this (3) ________ (be) the end of the last day of our trip. We (4) ________ (drive) back on that desolate highway, and the light (5) ________ (die) when I (6) ________ (catch) a glimpse of the mountain range in the rearview mirror and (7) ________ (think), "I just need to take one last photo of that horizon." It (8) ________ (turn) out to be the best photo I (9) ________ (take) on that whole trip.	21	1	2026-06-12 04:34:14.81947	2026-06-12 04:34:14.81947	\N
162	2.5	PREPARE FOR TASK	listening	Verb forms check	4	b	Listen and check.	\N	21	1	2026-06-12 04:34:14.823952	2026-06-12 04:34:14.823952	\N
163	2.5	PREPARE FOR TASK	speaking	Comparison	5	\N	What similarities can you find between the two descriptions?	\N	21	1	2026-06-12 04:34:14.826179	2026-06-12 04:34:14.826179	\N
164	2.5	TASK	writing	Writing notes	6	\N	Think of a photo you have taken while on vacation that has a good story behind it. Write notes about...	1 the main actions/events in the story.\n2 the background events/actions.\n3 the events that took place at a previous time.\n4 what happened after you took the photo.	21	1	2026-06-12 04:34:14.830761	2026-06-12 04:34:14.830761	\N
165	2.5	TASK	writing	Writing story	7	\N	Write your own story behind the image. Use your notes from 6.	\N	21	1	2026-06-12 04:34:14.833006	2026-06-12 04:34:14.833006	\N
166	2.5	REPORT BACK	speaking	Presenting stories	8	a	Read your story out loud to the class.	\N	21	1	2026-06-12 04:34:14.83465	2026-06-12 04:34:14.83465	\N
167	2.5	REPORT BACK	listening	Evaluating stories	8	b	Listen to the stories and decide...	a if there are any similarities between the photos and/or the stories that students chose.\nb the most interesting story behind the photo.	21	1	2026-06-12 04:34:14.835901	2026-06-12 04:34:14.835901	\N
168	3.0	ART EVERYWHERE	speaking	Art analysis	1	\N	Work in small groups. Look at the images. What do they show? What do they have in common? What is the link with the title of the unit?	\N	22	1	2026-06-12 04:34:26.661763	2026-06-12 04:34:26.661763	\N
169	3.0	ART EVERYWHERE	speaking	Art discussion	2	a	Complete A in the KEY VOCABULARY PANEL. Discuss the questions.	Are there any sculptures or other works of art on display in the open air in your area? Where are they?\nAre they permanent fixtures or part of a temporary exhibition?\nAre there any art galleries or museums in your town? What kind of art is on display there?\nDo you often visit art galleries and museums? Why/Why not?	22	1	2026-06-12 04:34:26.669082	2026-06-12 04:34:26.669082	\N
170	3.0	ART EVERYWHERE	listening	Listening practice	2	b	Listen to five conversations. Answer the questions.	1 Which image of art are they discussing in each conversation?\n2 Which image don't they discuss?\n3 Do they like them? Why/Why not?	22	1	2026-06-12 04:34:26.673911	2026-06-12 04:34:26.673911	\N
171	3.0	ART	vocabulary	-ed and -ing adjectives	3	a	Complete B in the KEY VOCABULARY PANEL.	\N	23	1	2026-06-12 04:34:38.361076	2026-06-12 04:34:38.361076	\N
172	3.0	ART	vocabulary	-ed and -ing adjectives	3	b	Complete the extracts with adjectives from B.	1 It's __________ how he takes these derelict old buildings and turns them into a work of art.\n2 Yes, but the images are pretty __________ sometimes. I mean, all those rats!\n3 We were really __________ when we came across this last exhibit.\n4 It was so __________—all these people taking photos with their phones!\n5 The kids look really __________, don't they? But actually they're just imitating the statue's pose.\n6 I tell you, this one was so lifelike that the first time you see it, it's __________.	23	1	2026-06-12 04:34:38.37841	2026-06-12 04:34:38.37841	\N
173	3.0	ART	listening	Adjectives	4	a	Listen and check. Which other adjectives could you add to the sentences in 3b?	\N	23	1	2026-06-12 04:34:38.380216	2026-06-12 04:34:38.380216	\N
174	3.0	ART	speaking	Opinions	4	b	Do you agree with the speakers’ opinions? Why/Why not?	\N	23	1	2026-06-12 04:34:38.383052	2026-06-12 04:34:38.383052	\N
175	3.1	SPEAKING & READING	speaking	Portraits and street art	1	\N	Work in pairs. Look at images a and b and the dictionary definition. Discuss the questions.	Is there anywhere in your town where people draw or paint on the street? What kind of things do they usually paint or draw?\nHave you ever had a portrait taken or made of you? If so, what kind of portrait was it? Did you like it? Do you still have a copy?	24	1	2026-06-12 04:34:54.169393	2026-06-12 04:34:54.169393	\N
176	3.1	SPEAKING & READING	reading	Portrait analysis	2	a	Look at paragraph 1 of the article and the two portraits c and d and answer the questions.	1 What two things do the portraits have in common?\n2 What do you think the rest of the article is about?	24	1	2026-06-12 04:34:54.178292	2026-06-12 04:34:54.178292	\N
177	3.1	SPEAKING & READING	reading	Portrait artists	2	b	Read the rest of the article. Match the artists to their portraits. What messages are the two artists trying to express?	\N	24	1	2026-06-12 04:34:54.182685	2026-06-12 04:34:54.182685	\N
178	3.1	SPEAKING & READING	reading	Liu and Zhang facts	3	a	Read the article again and match the facts to Liu (L), Zhang (Z) or both (B).	1 He doesn't live in the country of his birth.\n2 The title of his work is easy to understand.\n3 His work is connected with how he sees himself.\n4 His art is a performance that the public can watch.\n5 His work has a very personal significance.\n6 His body becomes part of the artwork.	24	1	2026-06-12 04:34:54.186683	2026-06-12 04:34:54.186683	\N
179	3.1	SPEAKING & READING	speaking	Personal preferences in art	3	b	In what ways are the two artists similar? In what ways are they different? Which portrait do you prefer (if any)? Why?	\N	24	1	2026-06-12 04:34:54.190041	2026-06-12 04:34:54.190041	\N
180	3.1	GRAMMAR & VOCABULARY	vocabulary	Gradable & absolute adjectives	1	a	Work in pairs. Look at the pairs of adjectives and answer the questions.	1 Find the adjectives in bold in the article. What is each adjective describing?\n2 Which adjective is stronger in each pair?\n3 What word comes directly before each adjective?	25	1	2026-06-12 04:35:09.411144	2026-06-12 04:35:09.411144	\N
181	3.1	GRAMMAR & VOCABULARY	grammar	Gradable & absolute adjectives	1	b	Complete 1-8 in the GRAMMAR PANEL with words from 1a. Are these rules similar in your language?	\N	25	1	2026-06-12 04:35:09.418373	2026-06-12 04:35:09.418373	\N
182	3.1	GRAMMAR & VOCABULARY	vocabulary	Gradable & absolute adjectives	2	a	Look at the adjectives in the box. Make seven more word pairs with similar meanings. Use a dictionary to help you. Which adjectives would you not normally use to describe a work of art?	bad\nbeautiful\nbig\ndelicious\ndifficult\nexhausted\nhuge\nimpossible\nsmall\nstunning\ntasty\nterrible\ntiny\ntired	25	1	2026-06-12 04:35:09.421254	2026-06-12 04:35:09.421254	\N
183	3.1	GRAMMAR & VOCABULARY	vocabulary	Gradable & absolute adjectives	2	b	Decide which adjectives you can use with...	a very beautiful, ________, ________, ________, ________\nb absolutely stunning, ________, ________, ________, ________	25	1	2026-06-12 04:35:09.425643	2026-06-12 04:35:09.425643	\N
184	3.1	GRAMMAR & VOCABULARY	speaking	Gradable & absolute adjectives	3	a	Work in pairs. Look at pages 22 and 23. Write a sentence about three of the pieces of art you can see, with the adjectives and modifiers in 1 and 2.	\N	25	1	2026-06-12 04:35:09.428901	2026-06-12 04:35:09.428901	\N
185	3.1	GRAMMAR & VOCABULARY	speaking	Gradable & absolute adjectives	3	b	Work with another pair. Read your sentences out loud. Can your partners guess which piece of art you're describing?	\N	25	1	2026-06-12 04:35:09.440206	2026-06-12 04:35:09.440206	\N
188	3.1	PRONUNCIATION	grammar	Absolute adjectives	2	a	Complete the sentences using absolute adjectives.	1 A: This is very interesting.\nB: Interesting? It's absolutely ________!\n2 A: I'm very tired after that walk.\nB: Tired? I'm completely ________!\n3 A: Hey, this is pretty good, you know.\nB: Good? It's really ________!	25	1	2026-06-12 04:35:09.450129	2026-06-12 04:35:09.450129	\N
189	3.1	PRONUNCIATION	listening	Absolute adjectives	2	b	Listen and compare your answers. Were they the same?	\N	25	1	2026-06-12 04:35:09.454167	2026-06-12 04:35:09.454167	\N
190	3.1	PRONUNCIATION	pronunciation	Word stress	3	a	Listen again and mark the stress. Practice reading the exchanges in 2a in pairs.	\N	25	1	2026-06-12 04:35:09.45682	2026-06-12 04:35:09.45682	\N
191	3.1	PRONUNCIATION	writing	Word stress	3	b	Write two similar exchanges. Read them in pairs.	\N	25	1	2026-06-12 04:35:09.459563	2026-06-12 04:35:09.459563	\N
192	3.1	SPEAKING	speaking	Graffiti	1	a	Work in pairs. Look at the different examples of graffiti on page 41 and discuss the questions.	• Who do you think painted them?\n• Why do you think they painted them?\n• Which do you think has a personal meaning? Which has a political message? Why?\n• Which could be viewed as art and which as an act of vandalism? Why?	25	1	2026-06-12 04:35:09.462945	2026-06-12 04:35:09.462945	\N
193	3.1	SPEAKING	speaking	Graffiti	1	b	Tell another pair about one of the pieces of graffiti. Can they guess which one it is?	I think this was probably drawn by a very angry person.	25	1	2026-06-12 04:35:09.467555	2026-06-12 04:35:09.467555	\N
194	3.1	SPEAKING	speaking	Graffiti	2	\N	Work in pairs and discuss the questions.	• Is there a lot of graffiti in your neighborhood? If so, where is it? What kind of graffiti is it?\n• Do you think graffiti should be legal or illegal in your country?	25	1	2026-06-12 04:35:09.471843	2026-06-12 04:35:09.471843	\N
195	3.2	LISTENING	listening	Monuments and plinths	1	a	Look at the image. What can you see? Where do you think it is? Listen and find out.	\N	26	1	2026-06-12 04:35:23.675706	2026-06-12 04:35:23.675706	\N
196	3.2	LISTENING	listening	Monuments and plinths	1	b	Listen again and answer the questions.	1 What is a plinth?\n2 Why is this plinth empty?\n3 What competition was established in 2010?\n4 Who decides the winner?\n5 How long will the first two statues stand on the plinth?	26	1	2026-06-12 04:35:23.680818	2026-06-12 04:35:23.680818	\N
197	3.2	LISTENING	listening	Art entries	2	a	Look at the six short-listed entries a–f and match them to the descriptions.	1 A colorful statue of aristocrat and businessman, Sir George White.\n2 A giant bright blue rooster.\n3 A huge slice of Battenberg cake (a popular cake in the UK, possibly named after a German prince who married into the Royal family) made of bricks.\n4 A mountain landscape in the shape of Britain.\n5 A brass statue of a boy on a rocking horse.\n6 An enormous organ that can be connected to an ATM.	26	1	2026-06-12 04:35:23.68439	2026-06-12 04:35:23.68439	\N
198	3.2	LISTENING	listening	Art entries	2	b	What exactly do you think they represent?	\N	26	1	2026-06-12 04:35:23.688159	2026-06-12 04:35:23.688159	\N
199	3.2	LISTENING	listening	Listening to opinions	3	a	Listen to Estefanía, Luke, Camelia and Miguel talking about the short-listed entries and answer the questions.	1 Which is each person's favorite?\n2 Which of the six works don't they talk about?\n3 Which one do they think will win?	26	1	2026-06-12 04:35:23.692236	2026-06-12 04:35:23.692236	\N
200	3.2	LISTENING	listening	Listening to opinions	3	b	Listen again. According to the speakers, which entry...	1 is easy to relate to?\n2 is just a crazy idea?\n3 has a historical significance?\n4 is similar to another statue nearby?	26	1	2026-06-12 04:35:23.696099	2026-06-12 04:35:23.696099	\N
201	3.2	LISTENING	listening	Matching phrases	4	a	Listen a third time and match the phrases to the four works of art they talk about.	1 "It's definitely the funniest and by far the most colorful."\n2 "It's much more elegant than the bird anyway!"\n3 "I really think it's the most intelligent one."\n4 "I think it's a little more appropriate, that's all."\n5 "I think it's as funny as the cake."\n6 "It's not as strange as the others."	26	1	2026-06-12 04:35:23.699235	2026-06-12 04:35:23.699235	\N
202	3.2	LISTENING	speaking	Discussion	4	b	Work in small groups. Discuss the questions.	• Do you agree with the speakers? Why/Why not?\n• Which piece of art do you think would look best on the plinth? Why?	26	1	2026-06-12 04:35:23.70324	2026-06-12 04:35:23.70324	\N
203	3.2	GRAMMAR	grammar	Descriptions and comparisons	1	\N	Look at the descriptions in LISTENING 4a. Which...	1 describe a difference?\n2 describe a similarity?\n3 say that one thing is better than all the others?	27	1	2026-06-12 04:35:38.419193	2026-06-12 04:35:38.419193	\N
204	3.2	GRAMMAR	grammar	Adjectives	2	a	Look at the descriptions again. Underline the adjectives. Which are...	a comparatives (used with more or -ed)?\nb superlatives (used with most or -est)?\nc used with as ... as?	27	1	2026-06-12 04:35:38.426196	2026-06-12 04:35:38.426196	\N
205	3.2	GRAMMAR	grammar	Comparatives and superlatives	2	b	Fill in blanks 1-2 in A in the GRAMMAR PANEL with sentences from LISTENING 4a.	\N	27	1	2026-06-12 04:35:38.429237	2026-06-12 04:35:38.429237	\N
206	3.2	GRAMMAR	grammar	Comparative and superlative modifiers	3	a	Look at the sentences in LISTENING 4a again. Which of the words in the box are used with...	a a comparative?\nb superlative?\nc as ... as?	27	1	2026-06-12 04:35:38.432611	2026-06-12 04:35:38.432611	\N
207	3.2	GRAMMAR	grammar	Comparatives and superlatives	3	b	Complete 3–5 in B in the GRAMMAR PANEL.	\N	27	1	2026-06-12 04:35:38.435912	2026-06-12 04:35:38.435912	\N
208	3.2	GRAMMAR	grammar	Mona Lisa versions	4	\N	Look at the three versions of the Mona Lisa and complete the sentences with the correct form of the words in parentheses.	1 I really like the third one—the Banksy. It's __________ in my opinion. (by far/good).\n2 Really? No, I prefer the cartoon. I think it's __________ than the Banksy. (much/original).\n3 I find it really difficult to choose between them. I think the Banksy is __________ the cartoon. (as ... as/original).\n4 I agree, they’re both great, but I still prefer the Kucherenko. It's more colorful, I don't know, and just __________ the other two, I suppose. (a little/fun).	27	1	2026-06-12 04:35:38.438401	2026-06-12 04:35:38.438401	\N
209	3.2	GRAMMAR	grammar	Mona Lisa versions	5	a	Look at the three versions of the Mona Lisa again. Which do you prefer? Write three sentences using the structures in the GRAMMAR PANEL to explain your answer.	\N	27	1	2026-06-12 04:35:38.441203	2026-06-12 04:35:38.441203	\N
210	3.2	GRAMMAR	speaking	Comparison discussion	5	b	Compare your answers with a partner's. Do you agree?	\N	27	1	2026-06-12 04:35:38.443589	2026-06-12 04:35:38.443589	\N
211	3.2	SPEAKING	speaking	Monuments and sculptures	1	\N	Work in small groups. Think of a sculpture, a fountain or a monument in your town or city, and answer the questions.	• Where is it?\n• What does it look like? Do you like it? Why/Why not?	27	1	2026-06-12 04:35:38.445716	2026-06-12 04:35:38.445716	\N
212	3.2	SPEAKING	speaking_task	New sculpture proposal	2	a	Work in groups. Your local city council wants to place a new sculpture in one of the main squares in your town. Your group is going to put forward a proposal. Think about the questions.	• Where do you think it should be?\n• What should the sculpture represent?\n• What kind of sculpture do you think would look best?	27	1	2026-06-12 04:35:38.456929	2026-06-12 04:35:38.456929	\N
213	3.2	SPEAKING	speaking_task	Presenting sculpture proposal	2	b	Present your ideas to the class. Vote on the most original idea and the most traditional idea.	\N	27	1	2026-06-12 04:35:38.461252	2026-06-12 04:35:38.461252	\N
214	3.3	READING	reading	Sketches and people	1	\N	Work in pairs. Look at the sketches and answer the questions.	Where do you think the people are?\nWhat are they doing and thinking?\nIn what way are these sketches different from photos? Do they give us more or less information about the people?	28	1	2026-06-12 04:35:50.878351	2026-06-12 04:35:50.878351	\N
215	3.3	READING	reading	Newspaper article	2	a	Read the newspaper article about the sketches and answer the questions.	1 Who drew them?\n2 Where were they drawn?\n3 What's unusual about them?	28	1	2026-06-12 04:35:50.885835	2026-06-12 04:35:50.885835	\N
216	3.3	READING	reading	Article matching	2	b	Read the article again and match a-f to blanks 1-6 in the article.	a What do you look for in a face?\nb What does technology add to your work?\nc What are the problems of working on the subway?\nd What do you do with the sketches afterward?\ne What's the best part of your work?\nf Why don't you warn people that you are going to draw them?	28	1	2026-06-12 04:35:50.888499	2026-06-12 04:35:50.888499	\N
217	3.3	READING	reading	Interview summary	3	a	Complete the summary of the interview.	Eric Molinsky loves sketching (1) ________ who are traveling on the (2) ________. He uses his (3) ________ so that no one will notice what he's doing because he doesn't want people to (4) ________ and look unnatural. He uploads the sketches to his (5) ________. He has more than (6) ________ faces on his site. These faces represent for him the many faces of (7) ________.	28	1	2026-06-12 04:35:50.890704	2026-06-12 04:35:50.890704	\N
218	3.3	READING	speaking	Hobby discussion	3	b	Work in pairs. Discuss the questions.	What do you think of Eric Molinsky's hobby?\nWould you be happy for him to sketch you on the subway? Why/Why not?	28	1	2026-06-12 04:35:50.893162	2026-06-12 04:35:50.893162	\N
219	3.3	GRAMMAR	grammar	Bold words reference	1	a	Work in pairs. Look at the extracts from the interview. What do the words in bold refer to?	1 ... it feels right for my work.\n2 ... they come out really well.\n3 It works beautifully.\n4 But most people are friendly or they don't notice.\n5 People are coming in and out, and it can get crowded.\n6 I have to draw them really fast.\n7 It's not easy, every day it's like a hunt—a hunt for a great-looking face.\n8 ... people can easily go and check if they're there!	28	1	2026-06-12 04:35:50.89655	2026-06-12 04:35:50.89655	\N
220	3.3	GRAMMAR	grammar	Adjectives and adverbs	1	b	Read A in the GRAMMAR PANEL. Look at the sentences in 1a again and find all the examples of a) adjectives and b) adverbs of manner.	\N	28	1	2026-06-12 04:35:50.899212	2026-06-12 04:35:50.899212	\N
221	3.3	ADJECTIVES & ADVERBS	grammar	Adverbs of manner	2	a	Look at your answers to 1b and answer the questions.	1 Which two adverbs can also be used as adjectives?\n2 Which adjective can also be used as an adverb?\n3 Which word ending in -ly is not an adverb?\n4 What is the adverb form of good?	29	1	2026-06-12 04:36:03.866872	2026-06-12 04:36:03.866872	\N
222	3.3	ADJECTIVES & ADVERBS	grammar	Adverbs of manner	2	b	Complete 1-5 in B in the GRAMMAR PANEL.	\N	29	1	2026-06-12 04:36:03.878778	2026-06-12 04:36:03.878778	\N
223	3.3	ADJECTIVES & ADVERBS	grammar	Sketchbook app	3	\N	Choose the correct option to complete this short description of the Sketchbook app.	I've just downloaded Sketchbook onto my iPad. It's (1) great / greatly! It downloaded so (2) quick / quickly and it's so (3) easy / easily to use. To start with, I drew very (4) careful / carefully. It was the first time I'd drawn with my fingers. But then I started to feel more (5) confident / confidently, and I found that I could draw really (6) good / well and really (7) fast / fastly. Much better than I had ever done with a pencil or brush before. There's an (8) enormous / enormously range of colors and effects to choose from. And the final results look really (9) professional / professionally. Try it out for yourself! I'm sure you'll be (10) impressed / impressedly.	29	1	2026-06-12 04:36:03.882076	2026-06-12 04:36:03.882076	\N
224	3.3	ADJECTIVES & ADVERBS	writing	Favorite app	4	a	Do you have an interesting app on your phone or computer? Write three or four sentences explaining the app. Use as many adjectives and adverbs as you can.	\N	29	1	2026-06-12 04:36:03.885254	2026-06-12 04:36:03.885254	\N
225	3.3	ADJECTIVES & ADVERBS	speaking	Favorite app	4	b	Compare your answers with a partner. Have you ever tried your partner's app?	\N	29	1	2026-06-12 04:36:03.888523	2026-06-12 04:36:03.888523	\N
226	3.3	SPEAKING & VOCABULARY: People watching	listening	People watching	1	a	Listen to Toni talking about the café in the photo. What does she like about it? What does she like doing there?	\N	29	1	2026-06-12 04:36:03.891518	2026-06-12 04:36:03.891518	\N
227	3.3	SPEAKING & VOCABULARY: People watching	listening	People watching	1	b	Listen again and match the two parts of the sentences.	1 I love to sit here drinking coffee and watching\n2 ... a huge variety of people walk down this street, all going\n3 It's so much more interesting than just staring\n4 Sometimes I watch the people at the next table and tune in\n5 I know I shouldn't really listen in\n6 ... but usually they're simply passing\n\na ... about their business.\nb ... on other people's conversations...\nc ... to their conversations.\nd ... the time of day...\ne ... the world go by.\nf ... into space.	29	1	2026-06-12 04:36:03.894312	2026-06-12 04:36:03.894312	\N
228	3.3	SPEAKING & VOCABULARY: People watching	vocabulary	Phrases in context	2	a	Work in pairs. Look at the phrases in bold in 1b. Can you guess what they mean?	\N	29	1	2026-06-12 04:36:03.896673	2026-06-12 04:36:03.896673	\N
229	3.3	SPEAKING & VOCABULARY: People watching	speaking	Phrases in context	2	b	Check your answers on page 41. Do you have any similar phrases in your language?	\N	29	1	2026-06-12 04:36:03.899334	2026-06-12 04:36:03.899334	\N
230	3.3	SPEAKING & VOCABULARY: People watching	speaking	Discussion	3	\N	Work in small groups. Discuss the questions.	• Do you enjoy people watching? Why/Why not?\n• Where are the best places to watch the world go by in your town?\n• Think of the last time you were in one of those places. Who else was there? What were they doing? Did you see anyone particularly interesting?	29	1	2026-06-12 04:36:03.904479	2026-06-12 04:36:03.904479	\N
231	3.4	TUNE IN	speaking	Building design	1	a	Work in pairs. Look at the building in the photo. Do you like the design? Why/Why not?	\N	30	1	2026-06-12 04:36:19.402568	2026-06-12 04:36:19.402568	\N
232	3.4	TUNE IN	reading	Building design	1	b	Read a short text on page 41 and find out more about the building	\N	30	1	2026-06-12 04:36:19.408351	2026-06-12 04:36:19.408351	\N
233	3.4	TUNE IN	listening	Building opinions	2	a	Listen to Frank, Jane, Adrian and Sally talking about the building. How many people are in favor of the project, and how many are against the project?	\N	30	1	2026-06-12 04:36:19.412714	2026-06-12 04:36:19.412714	\N
234	3.4	TUNE IN	listening	Building opinions	2	b	Listen again. Who says the following? Complete the chart.	1 is embarrassing.\n2 ruined a beautiful place.\n3 is modern like its contents.\n4 is a work of art in itself.\n5 is a topic of conversation.\n6 is a technological wonder.\n7 is not functional.	30	1	2026-06-12 04:36:19.414937	2026-06-12 04:36:19.414937	\N
235	3.4	TUNE IN	speaking	Building opinions	3	\N	Work in pairs. Compare your answers and answer the questions.	• What do you think about the building?\n• Do you know of any other controversial modern public buildings? Do you like or dislike them?	30	1	2026-06-12 04:36:19.416926	2026-06-12 04:36:19.416926	\N
236	3.4	FUNCTIONAL LANGUAGE	grammar	Adding emphasis	5	a	Work in pairs. Match 1–5 to a–e to make phrases.	1 What I like is that it\n2 The best thing about it\n3 The most important thing\n4 The problem is that\n5 What I hate about it\na about it is that\nb is that people are talking\nc is the location\nd matches what’s inside\ne the architect is famous	30	1	2026-06-12 04:36:19.418683	2026-06-12 04:36:19.418683	\N
237	3.4	FUNCTIONAL LANGUAGE	listening	Adding emphasis	5	b	Listen and check.	\N	30	1	2026-06-12 04:36:19.420642	2026-06-12 04:36:19.420642	\N
238	3.4	FUNCTIONAL LANGUAGE	grammar	Adding emphasis	6	a	Make the sentences more emphatic. Begin with the word in parentheses.	1 I don’t like pop music much. All the tracks sound the same. (What I don’t like about pop music is...)\n2 I love traveling by plane, but I hate the jet lag. (The only problem with traveling...)\n3 It’s a good idea to go shopping with somebody else so you get a second opinion. (The best thing about going shopping...)	30	1	2026-06-12 04:36:19.422727	2026-06-12 04:36:19.422727	\N
239	3.4	FUNCTIONAL LANGUAGE	grammar	Adding emphasis	6	b	Change the sentences so that they are true for you.	\N	30	1	2026-06-12 04:36:19.424575	2026-06-12 04:36:19.424575	\N
240	3.4	OVER TO YOU	speaking	Giving opinions	7	\N	Work in pairs. Look at the list. Write a sentence giving your opinion on five of the topics.	Sundays\nthe English language\nart galleries\nsummer vacations\npoliticians\ncell phones\nfast food\nprofessional athletes\npets\nbeaches	30	1	2026-06-12 04:36:19.426366	2026-06-12 04:36:19.426366	\N
241	3.4	OVER TO YOU	speaking	Giving opinions	8	a	Show your sentences to another pair. Find the topics where there was most disagreement.	\N	30	1	2026-06-12 04:36:19.427467	2026-06-12 04:36:19.427467	\N
242	3.4	OVER TO YOU	speaking	Giving opinions	8	b	Try to convince the others to change their mind. Be emphatic! Report back to the class.	\N	30	1	2026-06-12 04:36:19.428521	2026-06-12 04:36:19.428521	\N
243	3.5	TUNE IN	speaking	Class survey photos	1	\N	Work in pairs. Look at the photo. Discuss the questions.	Where are the people? What do you think they’re talking about?\nWhen was the last time you were asked to answer a survey? What was it about?\nDid you stop and answer the questions or did you walk on by? Why?	31	1	2026-06-12 04:36:33.407357	2026-06-12 04:36:33.407357	\N
244	3.5	TUNE IN	listening	Street survey listening	2	a	Listen to the woman talking to a few people on the street and answer the questions.	1 How many people does the woman approach?\n2 How many of them agree to complete the survey?\n3 What do they get if they complete the survey?	31	1	2026-06-12 04:36:33.415618	2026-06-12 04:36:33.415618	\N
245	3.5	TUNE IN	listening	Street survey listening	2	b	Listen again and write in the answers that you hear.	\N	31	1	2026-06-12 04:36:33.419454	2026-06-12 04:36:33.419454	\N
246	3.5	PREPARE FOR TASK	speaking	Survey questions	3	a	Work in pairs. Write the other questions in the survey using the prompts.	\N	31	1	2026-06-12 04:36:33.423003	2026-06-12 04:36:33.423003	\N
247	3.5	PREPARE FOR TASK	speaking	Survey options	3	b	Which question in 3a do options a-d relate to?	a photos of my friends and family\nb landscapes\nc vacation snapshots\nd action photos, sporting events, etc.	31	1	2026-06-12 04:36:33.425587	2026-06-12 04:36:33.425587	\N
248	3.5	PREPARE FOR TASK	writing	Survey options	4	\N	Write four options for each of the other questions in 3a.	\N	31	1	2026-06-12 04:36:33.428187	2026-06-12 04:36:33.428187	\N
249	3.5	PREPARE FOR TASK	listening	Survey questions	5	\N	Listen again to the woman asking people if they would be happy to complete her survey. Complete her questions.	1 Excuse me, do __________________________________________?\n2 Excuse me, I wonder ______________________________________?\n3 Good morning, do _________________________________________?\n4 OK, thank you. Just _______________________________________.	31	1	2026-06-12 04:36:33.430445	2026-06-12 04:36:33.430445	\N
250	3.5	TASK	speaking	Class survey interview	6	\N	Work in pairs. Interview three or four different classmates using the survey questions and options you have practiced.	\N	31	1	2026-06-12 04:36:33.433329	2026-06-12 04:36:33.433329	\N
251	3.5	TASK	speaking	Survey results comparison	7	a	Read the short report from the survey in 2a. Are the results similar to the results in your surveys?	\N	31	1	2026-06-12 04:36:33.435545	2026-06-12 04:36:33.435545	\N
252	3.5	TASK	speaking	Report preparation	7	b	Compare your results and prepare to present them to the class. Use the phrases in bold to help you prepare your report.	\N	31	1	2026-06-12 04:36:33.437531	2026-06-12 04:36:33.437531	\N
253	3.5	REPORT BACK	speaking	Results presentation	8	\N	Present your results to the class.	\N	31	1	2026-06-12 04:36:33.439517	2026-06-12 04:36:33.439517	\N
254	3.5	REPORT BACK	writing	Survey summary report	9	\N	Compare the results from all the pairs and write a short paragraph about the information you have gathered. Use the text in 7a to help you.	\N	31	1	2026-06-12 04:36:33.443172	2026-06-12 04:36:33.443172	\N
\.


--
-- Data for Name: book_panel; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_panel (id, title, theme, sub_theme, instruction, content, book_page, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	KEY VOCABULARY	Communication	A Types of communication	Match the expressions in the box to the photos. You can match more than one expression to each photo.	body language\nfacial expressions\nhand gestures\ninstant messaging\nposters & signs\nsign language\nsocial networks\nthe written word	3	1	2026-06-12 04:28:28.54577	2026-06-12 04:28:28.54577	\N
2	KEY VOCABULARY	Communication	B Say, tell, speak	Complete the word maps with say, tell or speak.	1. your mind, two languages, for yourself, English very well, very quietly, loudly, fast, in public, a room full of people, TO, my friend, my mother on the phone\n2. hello, something interesting/important, good-bye, TO ME, yes, no, a lot about something, what you think, how you feel\n3. the truth, ME, what you want, a lie, HIM, what to do, a story, THEM, what you're thinking, a joke, SOMEBODY, yourself, ABOUT, your vacation, your family	3	1	2026-06-12 04:28:28.602101	2026-06-12 04:28:28.602101	\N
3	NOTICE	SAY & TELL	\N	\N	We use say + to + personal pronoun, e.g.,\nWhat did he say to you?\nWe use tell + personal pronoun, e.g.,\nTell me what the problem is.	3	1	2026-06-12 04:28:28.606237	2026-06-12 04:28:28.606237	\N
4	TENSE REVIEW	Grammar	Present simple or present continuous	\N	a We use the present simple to refer to habits and routines.\nb We use the present simple to refer to repeated actions or situations. I go to dance class every day.\nc We use the present simple to describe things that are generally true. Human communication is too complex.\nd We use the present continuous to talk about things that are currently happening.	5	1	2026-06-12 04:28:56.441241	2026-06-12 04:28:56.441241	\N
5	TENSE REVIEW	Grammar	Past simple or present perfect	\N	e We use the past simple to talk about completed actions in the past.\nf We use the past simple to talk about habitual actions in the past. I went to dance class every day.\ng We use the present perfect to talk about experiences we have had in our life up to the present. We do not necessarily say when they happened.	5	1	2026-06-12 04:28:56.448891	2026-06-12 04:28:56.448891	\N
6	TENSE REVIEW	Grammar	Future: will or going to	\N	h We use both will and going to to make predictions. make us more introverted.\ni We use going to to talk about intentions and plans.	5	1	2026-06-12 04:28:56.452168	2026-06-12 04:28:56.452168	\N
7	QUESTION FORMS	Grammar	\N	\N	Yes/no questions do not need a question word. The auxiliary verb always comes (1)before / after the subject except with questions with the verb to be.\nDid you make the sign?\nWh- questions begin with a question word such as how, which, what, who, why, where and when. Some wh- question words can also combine with other words.\nAdd more examples.\nHow much/many/old/(2) ________ ...?\nWhat sort/kind/type...?\nIn object questions the question word is the object of the verb.\nWhat did you make? We made a sign.\nThe auxiliary always comes (3)before / after the subject. We use do and did to form questions in the present and past simple.\nSubject questions start with who, what, which or how much/many. The question word is the subject of the verb.\nWho made the sign? We made the sign.\nThere is no subject pronoun and we (4)need / don't need to use do/did in the present and past simple.\nWho made the sign? NOT Who they did make the sign?\nSee page 36 for grammar reference and more practice.	7	1	2026-06-12 04:29:22.754047	2026-06-12 04:29:22.754047	\N
8	NOTICE	Questions ending with prepositions	\N	\N	We often put prepositions at the end of a question.\nWhat is he talking about? Who do you live with?	7	1	2026-06-12 04:29:22.76064	2026-06-12 04:29:22.76064	\N
9	STATE & DYNAMIC VERBS	State verbs	A	\N	State verbs describe an emotion, a thought or a sense. They are not usually used in a continuous form.\nI don't see very well without glasses NOT I'm not seeing very well without glasses.\nWe often use the verbs of the senses (see, hear, smell, taste, feel) with can or could.\nI can see some light and color.\n(1)\n(2)	9	1	2026-06-12 04:29:48.775933	2026-06-12 04:29:48.775933	\N
10	STATE & DYNAMIC VERBS	Dynamic verbs	B	\N	Dynamic (or action) verbs describe actions we decide to perform. We use dynamic verbs with continuous verb forms to talk about an action that is in progress.\nI'm listening to a really interesting podcast.\n(3)\n(4)\nSome verbs can be both state verbs and dynamic verbs, e.g., see.\nI can't see without glasses. (see = sense)\nI'm seeing Jane on Friday. (see = meet)\nSee page 36 for grammar reference and more practice.	9	1	2026-06-12 04:29:48.782713	2026-06-12 04:29:48.782713	\N
11	NOTICE	HOW'S EVERYTHING? / HOW'S IT GOING?	\N	\N	These are common conversation starters. They are more informal than How are you?	10	1	2026-06-12 04:30:01.358338	2026-06-12 04:30:01.358338	\N
12	STRESS	Pronunciation	\N	Listen to the statements and questions in 6a. Underline the main stress. Do you know something? Listen again and repeat with the correct stress.	1.8 Listen to the statements and questions in 6a.\nUnderline the main stress.\nDo you know something?\nListen again and repeat with the correct stress.	10	1	2026-06-12 04:30:01.366079	2026-06-12 04:30:01.366079	\N
13	KEY VOCABULARY	Reading	A Types of reading material	Match at least one word or phrase to images a–f.	blog dictionary e-mail encyclopedia instruction manual letter magazine newspaper notes novel reference book script (for movie or play) short story travel guide text message	13	1	2026-06-12 04:30:41.063205	2026-06-12 04:30:41.063205	\N
14	KEY VOCABULARY	Reading	A Types of reading material	Put the words from the box in the correct category.	Reading for pleasure\nLooking for information\nReading as part of your job or studies	13	1	2026-06-12 04:30:41.066966	2026-06-12 04:30:41.066966	\N
15	KEY VOCABULARY	Reading	A Types of reading material	Answer the questions.	1 What kind of reading do you do most?\n2 What do you think is the most relaxing: reading a book, listening to music or watching a video or TV show? Why?	13	1	2026-06-12 04:30:41.071064	2026-06-12 04:30:41.071064	\N
16	KEY VOCABULARY	Reading	B Reading verbs	Complete the definitions using the verbs in 3a.	leaf/_______ through a newspaper, notes, a novel: to look at something quickly and superficially, sometimes just turning the pages\n_______ at pages/the lines of a book: to look at something for a very short time\n_______ out loud a speech, a statement: to speak the words aloud as you read\n_______ out a piece of news, a news story, a text message: to look at something to see what information it can give you\n_______ up information, a word in a dictionary to use a reference book or website to find specific information\n_______ down a screen, a text message: to use a cursor, your finger or mouse to move the text down on a screen	13	1	2026-06-12 04:30:41.073003	2026-06-12 04:30:41.073003	\N
17	SPEAKING & VOCABULARY	Books & genres	1a	Work in pairs. Add the words in the box to the two groups. Use a dictionary to help you.	1 Different kinds of books\n2 Different types or genres of fiction (novels or movies)\n\nWords:\naction/adventure, anthology, autobiography, biography, comedy, crime/detective fiction, historical, horror, humorous, love story, manual, nonfiction, novel, picture book, cookbook, romantic, science fiction, storybook, textbook, war	14	1	2026-06-12 04:30:54.562677	2026-06-12 04:30:54.562677	\N
18	PAST SIMPLE & PAST CONTINUOUS	Past Simple & Past Continuous	\N	\N	We often use the (1)__________ to talk about single events, especially when we are telling a story.\nShe paid her bill and left.\nWe often use the (2)__________ to explain the background to the story and describe a situation or action that was in progress at the time.\nShe was waiting under a tree.\nSee page 37 for grammar reference and more practice.	15	1	2026-06-12 04:31:08.13831	2026-06-12 04:31:08.13831	\N
19	PAST PERFECT & PAST SIMPLE	Past perfect	A	\N	We use the past perfect to\n• talk about an event that happened before a point in time in the past\n(1) ____________\n• describe a situation that was in progress up to a point in time in the past\n(2) ____________\nWe form the past perfect with had + past participle.	17	1	2026-06-12 04:31:36.037292	2026-06-12 04:31:36.037292	\N
20	PAST PERFECT & PAST SIMPLE	Past perfect & past simple	B	\N	We use the past simple to describe the main events in the story. We use the past perfect to explain that one event happened before another.\n(3) ____________\nSee page 37 for grammar reference and more practice.	17	1	2026-06-12 04:31:36.041851	2026-06-12 04:31:36.041851	\N
21	CLIFF-HANGER	Vocabulary	\N	\N	1 a melodramatic TV series in which each episode ends in suspense\n2 a situation full of suspense at the end of a chapter in a book, a scene in a movie or an episode in a radio or TV series\n3 a dramatic situation where the outcome is uncertain up to the very end	18	1	2026-06-12 04:31:47.03967	2026-06-12 04:31:47.03967	\N
22	USED TO & WOULD	Grammar	Past habits and states	\N	We can use both used to and would to talk about things that happened regularly in the past or past habits.\nExamples:\n(1) __________________________________\n(2) __________________________________\nWe can use used to to talk about feelings, states and actions.\nThey used to read them over and over. (action)\nPeople used to be anxious to read the next installment. (feeling)\nWe can only use would with actions, not with feelings.\nFeelings: They used to love the stories. NOT They would love the stories.\nActions: They would wait anxiously for the next installment. They used to wait anxiously for the next installment.\nNOTE: In questions and negative forms there's no d at the end of use.\nDid you use to read a lot as a child?\nNo, I didn't use to like reading very much.\nSee page 37 for grammar reference and more practice.	19	1	2026-06-12 04:32:55.028495	2026-06-12 04:32:55.028495	\N
23	STRESS	Agreeing and disagreeing	Pronunciation	Listen to the phrases in 4. Underline the main stress. I don't agree at all. Listen again and repeat with the correct stress.	I don't agree at all.	20	1	2026-06-12 04:33:08.619667	2026-06-12 04:33:08.619667	\N
24	KEY VOCABULARY	Art	A Works of art	Match the words in the box to images a-f. There is one extra term.	drawing exhibition graffiti installation\nmural painting photo sculpture\nstreet art statue work of art	23	1	2026-06-12 04:34:41.041917	2026-06-12 04:34:41.041917	\N
25	KEY VOCABULARY	Art	B -ed and -ing adjectives	\N	-ed and -ing adjectives are formed from verbs that describe emotional reactions.\ninterest interested interesting\nAdjectives that end in -ed describe emotional reactions and responses. They usually follow a linking verb such as be, seem, look.\nI was interested in the photos.\nAdjectives that end in -ing describe the thing, place or person that provokes the emotion.\nThe photos were interesting.	23	1	2026-06-12 04:34:41.070148	2026-06-12 04:34:41.070148	\N
26	KEY VOCABULARY	Art	B -ed and -ing adjectives	Match the pairs of adjectives 1-8 to the emotions a-h they are associated with. The first has been done for you.	Adjectives | Emotions\n1 annoyed/annoying | a sympathy or empathy\n2 disturbed/disturbing | b anger\n3 bored/boring | c extreme fear\n4 surprised/surprising | d impatience or lack of interest\n5 amazed/amazing | e reaction to something unusual\n6 shocked/shocking | f surprise (something bad)\n7 moved/moving | g surprise (something good)\n8 terrified/terrifying | h unhappiness and worry\nCan you think of any more adjectives that have both an -ed and an -ing ending?	23	1	2026-06-12 04:34:41.072126	2026-06-12 04:34:41.072126	\N
27	NOTICE	ADJECTIVES	\N	\N	We can combine a noun and an -ing verb to create adjectives.\nthought-provoking\nbreathtaking\nmind-blowing\nUse each adjective to describe one of the works of art.	23	1	2026-06-12 04:34:41.073695	2026-06-12 04:34:41.073695	\N
28	portrait	Vocabulary	\N	\N	noun [countable] a painting, drawing or photograph of a person, especially their face. Portraits can take many forms, e.g., a painting, a photo or a caricature.	24	1	2026-06-12 04:34:55.911619	2026-06-12 04:34:55.911619	\N
29	GRADABLE & ABSOLUTE ADJECTIVES	Gradable & absolute adjectives	A Gradable & absolute adjectives	\N	Some adjectives are gradable—we can make them stronger or weaker: it's fairly nice (weak), it's very nice (strong).\nExamples: good, (1) ________ (2) ________\nOther adjectives are absolute—the quality either exists or it doesn't. They cannot be made stronger or weaker.\nExamples: fascinating, (3) ________ and (4) ________.	25	1	2026-06-12 04:35:11.696696	2026-06-12 04:35:11.696696	\N
30	GRADABLE & ABSOLUTE ADJECTIVES	Gradable & absolute adjectives	B Modifying gradable & absolute adjectives	\N	To make gradable adjectives stronger use very or (5) ________: very small Chinese characters\nTo make gradable adjectives weaker use pretty or fairly: It's fairly difficult.\nTo emphasize absolute adjectives use (6) ________, absolutely or completely: I find this work absolutely fascinating.\nWe cannot use absolutely, completely and (7) ________ with gradable adjectives. We cannot use (8) ________, very and fairly with absolute adjectives.\nWe can use really to add information about both gradable and absolute adjectives.\nIt's really nice. It's really stunning.\nSee page 38 for grammar reference and more practice.	25	1	2026-06-12 04:35:11.700851	2026-06-12 04:35:11.700851	\N
31	AS ... AS, COMPARATIVES & SUPERLATIVES	As ... as	A	\N	We use as + adjective + as to show the similarity between two things.\n(1)\nWe use not as + adjective + as to show the difference.\n(2)	27	1	2026-06-12 04:35:40.550147	2026-06-12 04:35:40.550147	\N
32	AS ... AS, COMPARATIVES & SUPERLATIVES	Modifying comparatives & superlatives	B	\N	• Comparative adjectives\nWe use a lot, much, far to show a big difference.\n(3)\nWe use a little, a little bit, slightly to show a small difference.\n(4)\n• Superlative adjectives\nWe use by far to emphasize a superlative adjective.\n(5)\nSee page 38 for grammar reference and more practice.	27	1	2026-06-12 04:35:40.561129	2026-06-12 04:35:40.561129	\N
33	NOTICE	FUN	\N	\N	We can use fun as both a noun and an adjective.\nThis is great fun. (noun)\nIt was a fun day out. (adjective)\nWe say more fun/most fun.\nPlaying tennis is much more fun than watching it!	27	1	2026-06-12 04:35:40.565209	2026-06-12 04:35:40.565209	\N
34	ADJECTIVES & ADVERBS	Adjectives & adverbs of manner	\N	\N	Adjectives add information about people, things or places. They can come...\n• before a noun: He has a great beard.\n• after a linking verb (be, get, look, feel):\nIt sounds strange, but it's true.\nAdverbs of manner add information about how we do something. They usually come after the verb they are describing. It works beautifully.\nNOTE: We do not use adverbs after linking verbs: It sounds beautiful. NOT It sounds beautifully.	29	1	2026-06-12 04:36:06.24074	2026-06-12 04:36:06.24074	\N
35	ADJECTIVES & ADVERBS	-ly adverbs	\N	Complete the chart with the words or phrases	Many adverbs of manner are formed by adding -ly to an adjective:\nbeautiful -> (1) __________, easy -> easily, gentle -> gently\nNOTE: Not all words that end in -ly are adverbs. Some are adjectives: (2) __________, lovely, etc.\nSome adjectives and adverbs are the same.\n(3) __________, (4) __________, late, early.\nI had a late night. (adjective) I worked late that night. (adverb)\nNOTE: The adverb form of good is (5) __________.	29	1	2026-06-12 04:36:06.24579	2026-06-12 04:36:06.24579	\N
36	STRESS	Functional Language: Adding Emphasis	\N	Listen again to the statements in 5a. Underline the main stress. What I like is that it matches what's inside. Listen again and repeat with the correct stress.	3.9 Listen again to the statements in 5a.\nUnderline the main stress.\nWhat I like is that it matches what's inside.\nListen again and repeat with the correct stress.	30	1	2026-06-12 04:36:21.045983	2026-06-12 04:36:21.045983	\N
\.


--
-- Data for Name: book_unit; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_unit (id, number, title, grammar, vocabulary, reading_listening, pronunciation, book_page, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	1	COMMUNICATION	{"Tense review","Question forms","State & dynamic verbs"}	{Communication,Senses}	{"Describing photographs","Behind the Curtain","Four interviews"}	{"-es & -ed verb endings","Intonation: Stress"}	2	1	2026-06-12 04:28:05.145252	2026-06-12 04:28:05.145252	\N
2	2	A GOOD READ	{"Past simple & past continuous","Past perfect & past simple","Used to & would"}	{Reading,"Books & genres"}	{"Two extracts from a novel","Descriptions of three plays","Cell Phone Novels","Discussing four novels","Talking about manga"}	{"Used to/use to","Intonation: Stress"}	12	1	2026-06-12 04:28:05.156403	2026-06-12 04:28:05.156403	\N
3	3	ART EVERYWHERE	{"Gradable & absolute adjectives","As ... as, comparatives & superlatives","Adjectives & adverbs"}	{Art,"Gradable & absolute adjectives","People watching"}	{"A Portrait Is Worth a Thousand Words","A newspaper article","Describing artwork"}	{"Word stress for emphasis","Intonation: Stress"}	22	1	2026-06-12 04:28:05.157801	2026-06-12 04:28:05.157801	\N
\.


--
-- Data for Name: bot; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.bot (id, phone, name, prompt, model, created_at, updated_at, deleted_at) FROM stdin;
1	51936081148	ICPNA STUDIO	Eres "ICPNA STUDIO", un asistente virtual educativo y avanzado, exclusivo para WhatsApp, diseñado para estudiantes del Instituto Cultural Peruano Norteamericano (ICPNA). Tu misión es facilitar el estudio desde dispositivos móviles, entregando el contenido del libro virtual (audios, transcripciones, traducciones y respuestas) directamente en el chat, de forma rápida, cómoda e interactiva.\n\n### 1. ROL Y PERSONALIDAD\n- Eres un compañero de estudio inteligente, paciente y motivador.\n- Entiendes perfectamente el contexto académico del ICPNA (preparación para el ALP, Student Book, Workbook, grammar, vocabulary, etc.).\n- Tu tono es amigable y cercano, pero directo al grano. Los usuarios de móvil quieren respuestas rápidas, no saludos largos.\n- Te comunicas en un español claro, pero utilizas términos en inglés con naturalidad según el contexto de la clase.\n\n### 2. CAPACIDADES MULTIMODALES Y FLUJO\nEstás conectado a un sistema que te permite procesar y enviar Texto, Audio e Imágenes.\n- **Audios del Libro:** El usuario te pedirá audios por su numeración (ej. "1.7" o "5.3"). Confirmarás la solicitud y utilizarás tus herramientas para enviar el archivo de audio correspondiente.\n- **Transcripciones y Traducciones:** Cuando el usuario lo solicite, enviarás el texto exacto del audio en inglés. Si pide ayuda extra, enviarás la traducción al español.\n- **Respuestas de Ejercicios:** El usuario usará coordenadas: Página + Sección + Letra/Número (ej. "Página 17, sección 1, pregunta A"). Buscarás en tu base de conocimiento y proporcionarás la respuesta exacta o la explicación de la gramática.\n- **Análisis de Imágenes:** Si el usuario te envía la foto de su libro físico, analizarás la imagen, identificarás de qué página y ejercicio se trata, y le preguntarás qué recurso necesita (el audio de esa página, revisar sus respuestas, etc.).\n- **Notas de Voz (Audio In):** Si el usuario te envía un audio hablando, lo procesarás a través de tu sistema de transcripción y responderás a su petición como si la hubiera escrito.\n\n### 3. REGLAS ESTRICTAS DE FORMATO (EXCLUSIVO WHATSAPP)\nOperas EXCLUSIVAMENTE en WhatsApp. El formato Markdown tradicional ESTÁ ESTRICTAMENTE PROHIBIDO porque rompe la interfaz gráfica de la aplicación. Debes seguir estas reglas de formato al pie de la letra:\n- Negritas: usa un solo asterisco. Ejemplo: *texto* (PROHIBIDO usar doble asterisco).\n- Cursivas: usa guion bajo. Ejemplo: _texto_.\n- Tachado: usa virgulilla. Ejemplo: ~texto~.\n- Código/Monoespaciado: usa tres acentos graves. Ejemplo: ```texto```.\n- Enlaces y Links: PROHIBIDO usar hipervínculos estilo [texto](url). Debes enviar la URL directa, cruda y limpia para que WhatsApp genere la vista previa. Ejemplo: https://myenglishlab.com\n- Listas: Usa guiones simples (-) o números (1., 2.). No uses viñetas raras.\n- Estructura Visual: Mantén párrafos muy cortos (máximo 3-4 líneas). Intercala emojis 🎧📖✍️ para darle dinamismo, pero sin saturar.\n\nIMPORTANTE: Usa SIEMPRE las herramientas disponibles (tools) para 'enviar' mensajes (texto, audio, o imagen) al usuario de vuelta. NO respondas solo con texto plano generado por el modelo; debes mandar el texto a través de la herramienta de texto respectiva.	gemini	2026-06-12 04:08:21.824142	2026-06-12 04:08:21.824142	\N
\.


--
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.chats (id, enabled, remote, bot_id, user_id, created_at, updated_at, deleted_at) FROM stdin;
1	t	inbox	1	1	2026-06-12 08:03:11.190262	2026-06-12 08:03:11.190262	\N
\.


--
-- Data for Name: comandos_ejecutados; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.comandos_ejecutados (id, nombre, ejecutado_en) FROM stdin;
1	v002_001_set_users.sql	2026-06-12 05:41:57.695818
\.


--
-- Data for Name: instance; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.instance (id, bot_id, whatsapp_type, provider_type, business_id, phone_number_id, display_phone_number, waba_id, token, created_at, updated_at, deleted_at) FROM stdin;
1	1	business	meta	1793146138173503	909519762251702	+51987654321	1221915833237632	EAAPOLblYhZBsBPUJsLDcSaDtQd8wlW2ZCVOBpiHgXc2EGtKJKm1tiXoNQ7nA7v1bcrwzmOs305kHD3JCUm8av8Qg27hSEw2Ao9Nte7ZA38AXYRdjZB1RzGmd9NE0IwtCp0I8nNdAiMTAnie6FVth3GJ40xj9QV5Nk5FUb6qtK1h8uMr2fX4FqHAT9DPI0wZDZD	2026-06-12 04:08:21.843182	2026-06-12 04:08:21.843182	\N
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.message (id, code, role, text, type, media, quoted, chat_id, created_at, updated_at, deleted_at) FROM stdin;
1	wamid.HBgLNTE5MjkwNzM4MjAVAgASGBYzRUIwQUNGNjZBNzI4NzhGODMxMDRFAA==	user	hola, me pasas el audio 3.1 pls	text	\N	\N	1	2026-06-12 08:03:11.22221	2026-06-12 08:03:11.22221	\N
2	wamid.HBgLNTE5MjkwNzM4MjAVAgASGBYzRUIwQUNGNjZBNzI4NzhGODMxMDRFAA==	assistant		audio	{"id": "1322069182758842", "url": "", "mimeType": "audio/mpeg"}	\N	1	2026-06-12 08:03:15.797879	2026-06-12 08:03:15.797879	\N
3	wamid.HBgLNTE5MjkwNzM4MjAVAgASGBYzRUIwQUNGNjZBNzI4NzhGODMxMDRFAA==	assistant	¡Claro que sí! Aquí tienes el audio 3.1. 🎧 ¡Espero que te sirva mucho para tu estudio hoy! 🚀📖	text	\N	\N	1	2026-06-12 08:03:15.819066	2026-06-12 08:03:15.819066	\N
4	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQ0ExMkUyMTNFNTUzOTRDM0YxNDU0RTM4OEI2N0YxRAA=	user	Podrías mandarme una captura de la pág 20 pls	text	\N	\N	1	2026-06-12 08:04:30.260943	2026-06-12 08:04:30.260943	\N
5	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQ0ExMkUyMTNFNTUzOTRDM0YxNDU0RTM4OEI2N0YxRAA=	assistant		image	{"id": "28258686853731170", "url": "", "mimeType": "image/jpeg"}	\N	1	2026-06-12 08:04:33.934087	2026-06-12 08:04:33.934087	\N
6	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQ0ExMkUyMTNFNTUzOTRDM0YxNDU0RTM4OEI2N0YxRAA=	assistant	Lo siento, tuve un problema técnico al intentar recuperar la imagen de la página 20. 😕 ¿Podrías intentar pedirla nuevamente en un momento o decirme qué ejercicio específico necesitas ver? ¡Estoy aquí para ayudarte! 📖✍️	text	\N	\N	1	2026-06-12 08:04:33.944313	2026-06-12 08:04:33.944313	\N
7	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQ0Q2QTExQTA5ODA4NkFDRjMxRjlFNDUxMkEyNThCOAA=	user	Intenta nuevamente pls	text	\N	\N	1	2026-06-12 08:09:01.069061	2026-06-12 08:09:01.069061	\N
8	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQ0Q2QTExQTA5ODA4NkFDRjMxRjlFNDUxMkEyNThCOAA=	assistant		image	{"id": "28258686853731170", "url": "", "mimeType": "image/jpeg"}	\N	1	2026-06-12 08:09:04.117243	2026-06-12 08:09:04.117243	\N
9	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQ0Q2QTExQTA5ODA4NkFDRjMxRjlFNDUxMkEyNThCOAA=	assistant		image	{"id": "", "url": "https://iili.io/CCRzqAB.jpg", "mimeType": "image/jpeg"}	\N	1	2026-06-12 08:09:04.125011	2026-06-12 08:09:04.125011	\N
10	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQ0UxMTgyRjk5M0E3OEQ5MTRFMDI3MUFERTI4NTZCNQA=	user	Wow, podrías mandarme cada uno de esos audios porfas	text	\N	\N	1	2026-06-12 08:09:36.082891	2026-06-12 08:09:36.082891	\N
11	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQ0UxMTgyRjk5M0E3OEQ5MTRFMDI3MUFERTI4NTZCNQA=	assistant		audio	{"id": "1322069182758842", "url": "", "mimeType": "audio/mpeg"}	\N	1	2026-06-12 08:09:38.986142	2026-06-12 08:09:38.986142	\N
12	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzc5MjUzMzNENjUyRUIyOTU5QjZCNDA0NTc0MTVCRgA=	user	No osea los 3 audios de la imagen	text	\N	\N	1	2026-06-12 08:10:33.253614	2026-06-12 08:10:33.253614	\N
13	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzc5MjUzMzNENjUyRUIyOTU5QjZCNDA0NTc0MTVCRgA=	assistant		audio	{"id": "1322069182758842", "url": "", "mimeType": "audio/mpeg"}	\N	1	2026-06-12 08:10:38.065716	2026-06-12 08:10:38.065716	\N
14	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzc5MjUzMzNENjUyRUIyOTU5QjZCNDA0NTc0MTVCRgA=	assistant		audio	{"id": "1024202153662599", "url": "", "mimeType": "audio/mpeg"}	\N	1	2026-06-12 08:10:38.085671	2026-06-12 08:10:38.085671	\N
15	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzc5MjUzMzNENjUyRUIyOTU5QjZCNDA0NTc0MTVCRgA=	assistant		audio	{"id": "994513613222203", "url": "", "mimeType": "audio/mpeg"}	\N	1	2026-06-12 08:10:38.087528	2026-06-12 08:10:38.087528	\N
16	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzc5MjUzMzNENjUyRUIyOTU5QjZCNDA0NTc0MTVCRgA=	assistant	Aquí tienes los 3 audios correspondientes a los ejercicios de la página 20 que me solicitaste: 3.1, 3.2 y 3.3. 🎧📖\n\n¡Espero que te sean de mucha ayuda para completar tus actividades! Si necesitas alguna transcripción o más apoyo con los ejercicios, avísame. _Keep up the good work!_ 🚀✍️	text	\N	\N	1	2026-06-12 08:10:38.088977	2026-06-12 08:10:38.088977	\N
17	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzlBOUE3RUVERTU1OThDOTBGMUEzRUZGOTczMzAyRgA=	user	En la pág 20 hay estos 3 audios	image	{"id": "1691334261899706", "url": "https://lookaside.fbsbx.com/whatsapp_business/attachments/?mid=1691334261899706&source=webhook&ext=1781252177&hash=ARkZVEgT440CrSQONeDwiwtzN81ms80IjdVjNGQF7jgglw", "caption": "En la pág 20 hay estos 3 audios", "mimeType": "image/jpeg"}	\N	1	2026-06-12 08:11:19.221576	2026-06-12 08:11:19.221576	\N
18	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzlBOUE3RUVERTU1OThDOTBGMUEzRUZGOTczMzAyRgA=	assistant		audio	{"id": "1731773801589561", "url": "", "mimeType": "audio/mpeg"}	\N	1	2026-06-12 08:11:26.619643	2026-06-12 08:11:26.619643	\N
19	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzlBOUE3RUVERTU1OThDOTBGMUEzRUZGOTczMzAyRgA=	assistant		audio	{"id": "1316427766786120", "url": "", "mimeType": "audio/mpeg"}	\N	1	2026-06-12 08:11:26.647385	2026-06-12 08:11:26.647385	\N
20	wamid.HBgLNTE5MjkwNzM4MjAVAgASGCBBQzlBOUE3RUVERTU1OThDOTBGMUEzRUZGOTczMzAyRgA=	assistant		audio	{"id": "1314351484218606", "url": "", "mimeType": "audio/mpeg"}	\N	1	2026-06-12 08:11:26.650092	2026-06-12 08:11:26.650092	\N
\.


--
-- Data for Name: migraciones_aplicadas; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.migraciones_aplicadas (id, nombre, aplicado_en) FROM stdin;
1	v002_001_update_users.sql	2026-06-12 05:33:23.103719
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."user" (id, phone, enabled, enabled_from, enabled_to, created_at, updated_at, deleted_at, current_book_id) FROM stdin;
1	51929073820	t	\N	\N	2026-06-12 04:08:21.818051	2026-06-12 04:08:21.818051	\N	1
2	51912345678	t	\N	\N	2026-06-12 04:08:21.818051	2026-06-12 04:08:21.818051	\N	1
3	51923456789	t	\N	\N	2026-06-12 04:08:21.818051	2026-06-12 04:08:21.818051	\N	1
\.


--
-- Name: book_audio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_audio_id_seq', 38, true);


--
-- Name: book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_id_seq', 4, true);


--
-- Name: book_image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_image_id_seq', 44, true);


--
-- Name: book_index_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_index_id_seq', 19, true);


--
-- Name: book_lesson_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_lesson_id_seq', 254, true);


--
-- Name: book_panel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_panel_id_seq', 36, true);


--
-- Name: book_unit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_unit_id_seq', 3, true);


--
-- Name: bot_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.bot_id_seq', 1, true);


--
-- Name: chats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.chats_id_seq', 1, true);


--
-- Name: comandos_ejecutados_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.comandos_ejecutados_id_seq', 1, true);


--
-- Name: instance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.instance_id_seq', 1, true);


--
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.message_id_seq', 20, true);


--
-- Name: migraciones_aplicadas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migraciones_aplicadas_id_seq', 1, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- Name: book_audio book_audio_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_audio
    ADD CONSTRAINT book_audio_pkey PRIMARY KEY (id);


--
-- Name: book_image book_image_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_image
    ADD CONSTRAINT book_image_pkey PRIMARY KEY (id);


--
-- Name: book_index book_index_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_index
    ADD CONSTRAINT book_index_pkey PRIMARY KEY (id);


--
-- Name: book_lesson book_lesson_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_lesson
    ADD CONSTRAINT book_lesson_pkey PRIMARY KEY (id);


--
-- Name: book_panel book_panel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_panel
    ADD CONSTRAINT book_panel_pkey PRIMARY KEY (id);


--
-- Name: book book_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (id);


--
-- Name: book_unit book_unit_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_unit
    ADD CONSTRAINT book_unit_pkey PRIMARY KEY (id);


--
-- Name: bot bot_phone_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bot
    ADD CONSTRAINT bot_phone_unique UNIQUE (phone);


--
-- Name: bot bot_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bot
    ADD CONSTRAINT bot_pkey PRIMARY KEY (id);


--
-- Name: chats chats_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (id);


--
-- Name: comandos_ejecutados comandos_ejecutados_nombre_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comandos_ejecutados
    ADD CONSTRAINT comandos_ejecutados_nombre_key UNIQUE (nombre);


--
-- Name: comandos_ejecutados comandos_ejecutados_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comandos_ejecutados
    ADD CONSTRAINT comandos_ejecutados_pkey PRIMARY KEY (id);


--
-- Name: instance instance_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.instance
    ADD CONSTRAINT instance_pkey PRIMARY KEY (id);


--
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- Name: migraciones_aplicadas migraciones_aplicadas_nombre_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migraciones_aplicadas
    ADD CONSTRAINT migraciones_aplicadas_nombre_key UNIQUE (nombre);


--
-- Name: migraciones_aplicadas migraciones_aplicadas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migraciones_aplicadas
    ADD CONSTRAINT migraciones_aplicadas_pkey PRIMARY KEY (id);


--
-- Name: user user_phone_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_phone_unique UNIQUE (phone);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: book_audio_book_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_audio_book_id_idx ON public.book_audio USING btree (book_id);


--
-- Name: book_audio_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_audio_created_at_idx ON public.book_audio USING btree (created_at);


--
-- Name: book_audio_index_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_audio_index_idx ON public.book_audio USING btree (index);


--
-- Name: book_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_created_at_idx ON public.book USING btree (created_at);


--
-- Name: book_image_book_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_image_book_id_idx ON public.book_image USING btree (book_id);


--
-- Name: book_image_book_page_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_image_book_page_idx ON public.book_image USING btree (book_page);


--
-- Name: book_image_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_image_created_at_idx ON public.book_image USING btree (created_at);


--
-- Name: book_index_book_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_index_book_id_idx ON public.book_index USING btree (book_id);


--
-- Name: book_index_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_index_created_at_idx ON public.book_index USING btree (created_at);


--
-- Name: book_index_skill_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_index_skill_idx ON public.book_index USING btree (skill);


--
-- Name: book_lesson_book_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_lesson_book_id_idx ON public.book_lesson USING btree (book_id);


--
-- Name: book_lesson_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_lesson_created_at_idx ON public.book_lesson USING btree (created_at);


--
-- Name: book_lesson_skill_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_lesson_skill_idx ON public.book_lesson USING btree (skill);


--
-- Name: book_lesson_unit_number_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_lesson_unit_number_idx ON public.book_lesson USING btree (unit_number);


--
-- Name: book_panel_book_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_panel_book_id_idx ON public.book_panel USING btree (book_id);


--
-- Name: book_panel_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_panel_created_at_idx ON public.book_panel USING btree (created_at);


--
-- Name: book_panel_title_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_panel_title_idx ON public.book_panel USING gin (title public.gin_trgm_ops);


--
-- Name: book_title_edition_unique_active_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX book_title_edition_unique_active_idx ON public.book USING btree (title, edition) WHERE (deleted_at IS NULL);


--
-- Name: book_title_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_title_idx ON public.book USING gin (title public.gin_trgm_ops);


--
-- Name: book_unit_book_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_unit_book_id_idx ON public.book_unit USING btree (book_id);


--
-- Name: book_unit_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_unit_created_at_idx ON public.book_unit USING btree (created_at);


--
-- Name: book_unit_number_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX book_unit_number_idx ON public.book_unit USING btree (number);


--
-- Name: book_audio book_audio_book_id_book_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_audio
    ADD CONSTRAINT book_audio_book_id_book_id_fk FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- Name: book_image book_image_book_id_book_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_image
    ADD CONSTRAINT book_image_book_id_book_id_fk FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- Name: book_index book_index_book_id_book_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_index
    ADD CONSTRAINT book_index_book_id_book_id_fk FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- Name: book_lesson book_lesson_book_id_book_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_lesson
    ADD CONSTRAINT book_lesson_book_id_book_id_fk FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- Name: book_panel book_panel_book_id_book_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_panel
    ADD CONSTRAINT book_panel_book_id_book_id_fk FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- Name: book_unit book_unit_book_id_book_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book_unit
    ADD CONSTRAINT book_unit_book_id_book_id_fk FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- Name: chats chats_bot_id_bot_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_bot_id_bot_id_fk FOREIGN KEY (bot_id) REFERENCES public.bot(id);


--
-- Name: chats chats_user_id_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_user_id_user_id_fk FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: instance instance_bot_id_bot_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.instance
    ADD CONSTRAINT instance_bot_id_bot_id_fk FOREIGN KEY (bot_id) REFERENCES public.bot(id);


--
-- Name: message message_chat_id_chats_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_chat_id_chats_id_fk FOREIGN KEY (chat_id) REFERENCES public.chats(id);


--
-- Name: user user_current_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_current_book_id_fkey FOREIGN KEY (current_book_id) REFERENCES public.book(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict 8IVboFQqDDgX1WBKhsPbLWW6rpBgtwKDyUZovmR5tK61EbJlMkYQPWCefKgW120

