--
-- PostgreSQL database dump
--

\restrict se8yMSvrpflEE50A2nRLQtTUhjcp4rkWp5i0v8Sh7zBZMVHjpnOjXahLWXNuALu

-- Dumped from database version 17.9 (Debian 17.9-1.pgdg13+1)
-- Dumped by pg_dump version 17.9 (Debian 17.9-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

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
-- *not* dropping schema, since initdb creates it
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS '';


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
    current_book_id integer,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
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
1	American Big Picture	Ben Goldstein	Richmond	ICPNA	Intermediate 5	intermediate	5	english	adults	b1	t	https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp5b1p_sb/index.html	2026-07-10 18:53:48.71684	2026-07-10 18:53:48.71684	\N
2	American Big Picture	Ben Goldstein	Richmond	ICPNA	Intermediate 6	intermediate	6	english	adults	b1	t	https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp6b1p_sb/index.html	2026-07-10 18:53:48.719844	2026-07-10 18:53:48.719844	\N
3	American Big Picture	Ben Goldstein	Richmond	ICPNA	Intermediate 7	intermediate	7	english	adults	b1	t	https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp7b1p_sb/index.html	2026-07-10 18:53:48.721707	2026-07-10 18:53:48.721707	\N
4	American Big Picture	Ben Goldstein	Richmond	ICPNA	Intermediate 8	intermediate	8	english	adults	b1	t	https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp8b1p_sb/index.html	2026-07-10 18:53:48.723665	2026-07-10 18:53:48.723665	\N
\.


--
-- Data for Name: book_audio; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_audio (id, url, index, transcription, book_page, meta_media_id, book_id, created_at, updated_at, deleted_at) FROM stdin;
14	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.6_ABP_B1_1783710847523.mp3	2.6	 Transcript 2.6, page 20, exercise 1B. the audience glued to their seats. And later, when the movie appeared on TV, it meant they stayed there through the commercial breaks and didn't change the channel. The second image is taken from a classic serial movie from the 1930s. Serial movies told short stories about heroes who were forever getting into trouble. They lasted about 20 minutes to half an hour and always ended with a cliffhanger in order to encourage the audience to return the next week to see what happened to their hero. Slowly, the serial movies disappeared, and they were replaced by TV series instead. The third photo is an image from an American TV series, CSI, Crime Scene Investigation. This is actually the closing image of the last episode of the 11th season. The intention is to keep the viewers hanging on, not just for the next episode, but for the next season. And now that a lot of TV series are actually watched on DVD, I suppose the point is to encourage you to buy the next season.	18	\N	1	2026-07-10 19:00:23.749948	2026-07-10 19:14:12.159	\N
6	https://icpnastorage.blob.core.windows.net/storage/book-audios/1.6_ABP_B1_1783710697314.mp3	1.6	 Transcript 1.6, page 12, exercise 3B. One. Hi, have you heard the news about Jenny? Two. Did you watch the game last night? Three. Hello, I see you got a little wet. Four. Do you have any plans for the weekend? 5. Hi, Joe. Are you feeling any better? 6. How many of the people here do you know?	10	\N	1	2026-07-10 18:59:17.543783	2026-07-10 19:11:50.173	\N
13	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.5_ABP_B1_1783710846500.mp3	2.5	 Transcript 2.5, page 18, exercise 2b. 1. I love the original, but the movie version was terrible. 2. I like Lisa Simpson. She's my favorite character on the show. 3. The book was great, but I had trouble understanding the plot. It was really complicated. 4. Tintin was the first comic book I read as a kid 5. I mostly read fiction, though not bestsellers. They aren't always that good	16	\N	1	2026-07-10 19:00:06.473445	2026-07-10 19:14:11.164	\N
25	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.6_ABP_B1_1783711028594.mp3	3.6	 Transcript 3.6, page 28, exercise 3A. So, what do you think of these six sculptures, Luke? Well, I think I know which one will win, but it's not my favorite. Well, tell us your favorite. I... don't laugh. I like the cake. It's by far the funniest. Really? No, no, I mean, the bird's definitely the funniest and by far the most colorful. Well, I think it's as funny as the cake, don't you? And it will look great in the square. It will be such a shock to the people of London. It's just a crazy, crazy idea. Oh, come on. You can't be serious, Miguel. Okay, so which one would you vote for, Stefania? Me? I vote for the brass boy on his toy horse. It's a very personal image. Everybody can relate to that. It's much more elegant than the bird anyway. You're right, but I think a sense of humor is important. Anyway, that cake has a history, you know. It a little more interesting than you think It called Battenberg and it was very popular at the time the plinth was built I really think it the most intelligent one You man You like the funny ones What do you think, Amelia? My favorite is the general on the horse. It's so simple, I don't know. I think it's a little more appropriate, that's all. For me, the boy on his horse is not as good. I don't know why. No way, that's the worst. Not at all. Did you know the original statue is actually around the corner from Trafalgar Square? It has beautiful decoration. I think it's a lot more artistic than the others. Those beautiful jewels. Look at the... She's trying to convince us. Anyway, you never told us which one you think is going to win. Well, you know, I like cake. And I think the mountain landscape is one of the best, too. But I think the horse will win. Which horse? There are two. The boy on the brass horse. It's not as strange as the others. It's classic. If it's going to be in Trafalgar Square, they're going to choose something classic that fits in with the architecture. Don't you think? I'm not sure, but that's my choice as well.	26	\N	1	2026-07-10 19:01:35.945451	2026-07-10 19:17:14.694	\N
22	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.3_ABP_B1_1783710971864.mp3	3.3	 Transcript 3.3, page 27, exercise 1A. Mmm, this isn't very nice. Not very nice? It's totally disgusting!	25	\N	1	2026-07-10 19:01:26.697274	2026-07-10 19:16:14.55	\N
30	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.11_ABP_B1_1783711055513.mp3	3.11	 Transcript 3.11, page 33, exercise 5. 1. Excuse me, do you have a few minutes? 2. Excuse me, I wonder if you could answer a few questions? 3. Good morning, do you have a few minutes to answer a short survey? 4. Okay, thank you. Just one last question. Thank you.	31	\N	1	2026-07-10 19:02:20.73477	2026-07-10 19:17:38.84	\N
26	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.7_ABP_B1_1783711028701.mp3	3.7	 Transcript 3.7, page 31, exercise 1A. This is one of my favorite places in town. I love to sit here drinking coffee and watching the world go by. It's a large town and a huge variety of people walk down the street, young and old, tourists and locals, all kinds of cultures and backgrounds, all going about their business. I love watching them and imagining where they're going, what they're like, what they're thinking. It's so much more interesting than just staring into space. Sometimes I watch the people at the next table and tune into their conversations. Is that bad? I know I shouldn't really listen in on other people's conversations. And if they're too personal, then I turn away. But usually they're simply passing the time of day or talking about work. it's surprising how many people come here to have business meetings over a cup of coffee.	29	\N	1	2026-07-10 19:02:01.222794	2026-07-10 19:17:13.804	\N
31	https://icpnastorage.blob.core.windows.net/storage/book-audios/R1_ABP_B1_1783711114068.mp3	R1	 Transcript R1, page 34, exercise 2a. I like communicating, and these new forms of communication are quick and easy. I like to keep things separate, though. I use email for my work and business contacts, and tweeting for family and friends and also acquaintances. When I want to chat longer, with my mother for example, I can talk on Skype, which is much cheaper. Face to face? Well, I sometimes have to give lectures or presentations for my work in front of a lot of people, strangers, so that can get really stressful. With my boyfriend, I like to chat about all kinds of things. We discuss serious matters like politics and then, of course, we have arguments too, like all couples, I guess.	32	\N	1	2026-07-10 19:02:23.707082	2026-07-10 19:18:39.778	\N
1	https://icpnastorage.blob.core.windows.net/storage/book-audios/1.1_ABP_B1_1783710366153.mp3	1.1	 Unit 1. Transcript 1.1. Page 4. Exercise 2. 1. Ah, yes! This is a kabuki dancer, isn't it? And each dance tells a story, with the costume and the makeup and the movements, all communicating something different. The only problem is, you have to know the language of kabuki dance to understand what he's saying. 2. She's obviously angry about something, and she has decided to protest about it. She's using a poster to communicate her message and the strength of the crowd as well. That makes the message much louder and more powerful. 3. This gesture says a thousand words, doesn't it? So gentle, so tender. It's communicating love and protection. It's amazing how a hand gesture can say so much. Four I love this photo The way the two people are looking at each other the way they seem to be so deep in conversation They not just talking with words The expressions on their faces and the gestures they making with their hands are all part of the conversation 5. There are two things going on in this photo. I mean, first of all, there's the keyboard, and that's so much part of modern communication, isn't it? You know, people staying in touch by email, instant messaging services, or social networks. But it's also the hands. Look at the Hannah on her hands. That tells a story, too. It communicates a lot about the person who's typing, don't you think? 6. Okay, this one is obviously showing sign language. I wonder if they are listening to music and are having trouble hearing each other. Or maybe they don't speak the same language.	2	\N	1	2026-07-10 18:58:07.34181	2026-07-10 19:06:38.113	\N
3	https://icpnastorage.blob.core.windows.net/storage/book-audios/1.3_ABP_B1_1783710644779.mp3	1.3	 Transcript 1.3, page 7, exercise 3A. communicated with each other very much.	5	\N	1	2026-07-10 18:58:32.456392	2026-07-10 19:10:55.659	\N
2	https://icpnastorage.blob.core.windows.net/storage/book-audios/1.2_ABP_B1_1783710645707.mp3	1.2	 Transcript 1.2, page 7, exercise 2A. Start, starts, started. Watch, watches, watched. Text, texts, texted. Dance, dances, danced.	5	\N	1	2026-07-10 18:58:32.448447	2026-07-10 19:10:56.678	\N
5	https://icpnastorage.blob.core.windows.net/storage/book-audios/1.4_ABP_B1_1783710650458.mp3	1.4	 Transcript 1.4, page 8, exercise 3b. 1. Which sign do you think makes people pay the most attention? Why? 2. What rights is the man in the mask standing up for? 3. Do you think any of these signs can actually change anyone's mind? If so, which? Four. Which sign do you think is making the most important point? Five. Do you think making a sign is the best way to get a message across? Why, why not? What other ways are there? Six. Do you ever speak your mind in public like this? Why, why not? Thank you.	6	\N	1	2026-07-10 18:58:41.931048	2026-07-10 19:11:01.922	\N
35	https://icpnastorage.blob.core.windows.net/storage/book-audios/R5_ABP_B1_1783711115798.mp3	R5	 Transcript R5, page 36, exercise 2. What I like about it is that it's free. Yes, that's the best thing about the show for me. The exhibition is a really good value. The only problem is that I don't like any of the art.	34	\N	1	2026-07-10 19:02:28.535728	2026-07-10 19:18:40.328	\N
36	https://icpnastorage.blob.core.windows.net/storage/book-audios/R6_ABP_B1_1783711116675.mp3	R6	 Transcript R6, page 37, exercise 2A. 1. Javier. I'm really lucky. I have a few English-speaking friends. They're exchange students studying at my university. They don't speak much French. One's Dutch, another's Brazilian. We get together once a week and have a language exchange. A little bit of French, a little bit of Portuguese, not much Dutch. but the main language we use together is English. It's really helping me. I feel so much more confident. It's definitely the best way to learn. 2. Sue When I was studying Spanish in school, I used to listen to the radio in Spanish all the time. Absolutely anything. The news, the weather, sport. I didn't care. And every now and then, they would show a movie in Spanish on the TV. I used to like watching them with the subtitles in English over and over again until I understood every word they said. 3. Cat Music has to be one of the most important things for me. It is absolutely incredible how easy it is to remember words when you associate them with music. I spend hours and hours watching videos of my favorite bands and reading their lyrics online. What did people used to do before YouTube? It is a totally amazing language learning tool. And it's not just music, of course. There are chat rooms and so much more. I don't think you need a language learning classroom anymore. You can learn it all online.	35	\N	1	2026-07-10 19:02:31.644121	2026-07-10 19:18:50.65	\N
4	https://icpnastorage.blob.core.windows.net/storage/book-audios/1.5_ABP_B1_1783710651911.mp3	1.5	 Transcript 1.5, page 8, exercise 1A. One. Hello. Now tell me why you are holding this sign. Well, we need change. I'm hoping that this economic recession will end. Why do you need a sign to do that? Because I want people to know there are other people like me. I'm desperate. We don't have work. We don't have a future. Do you think the sign will work? I hope so, but I just don't know. But we have to do something. This crisis is killing us. If it makes people change their mind and join us, that would be good. How long will you stay here for? It doesn't matter, as long as necessary. As I said, I don't have a job to go to, so I really don't mind. Two. Hi, just a couple of questions. You're holding a sign. What exactly does that sign mean? I mean, what is it saying? Well, it's a protest, of course. What kind of protest? About climate change. Why did you decide to dress like this animal? I mean, what made you want to dress like a polar bear? It's a powerful symbol of what's happening as a consequence of global warming. Polar bears are losing their habitat because the ice at the North Pole is quickly disappearing. We need to do something now before it too late Why did you use those particular words though Because normally we write save the animals on our signs I thought it was effective to turn that around Sometimes you get more attention if you make a serious point, but with a sense of humor. Three. How long did it take to make the sign? Was it difficult to make? Well, about an hour, I think. No, it was easy. I made it with a friend. Who gave you the idea? Nobody. I just loved this soccer player. I asked myself, how could I show that? I thought the TV cameras might spot me, and they did. But I didn't want England to win this game, and of course, he wasn't playing. But he was there in the crowd. And what happened after the game? Did he say anything to you? No, unfortunately, he didn't. Four. So, tell me, why are you here, sir? Because I want to be the first. The first in line to get one of these things. How long have you been here? 24 hours. I slept here overnight. Who is the sign for? Well, for nobody, really. It was just a joke. But it's really just for the other people in line. To let them know I got here first. And for the TV cameras and reporters. Quite a few people have taken photos, and others have stopped to talk to me.	6	\N	1	2026-07-10 18:58:41.927568	2026-07-10 19:11:23.472	\N
8	https://icpnastorage.blob.core.windows.net/storage/book-audios/1.8_ABP_B1_1783710699382.mp3	1.8	 Transcript 1.8, page 12. Stress. 1. Your face is really familiar. 2. Excuse me, can I give you a hand with that? 3. How are you feeling today? 4. So, how do you know Sergio? 5. What's the problem? You look terrible. Six. What did you say your name was again? Seven. Hi, what are you up to? Eight. Did you sleep okay? Nine. Hi, what brings you here at this time of day? Ten. You don't know me, but...	10	\N	1	2026-07-10 18:59:17.549536	2026-07-10 19:11:54.077	\N
7	https://icpnastorage.blob.core.windows.net/storage/book-audios/1.7_ABP_B1_1783710698825.mp3	1.7	 Transcript 1.7, page 12, exercise 4. One. Hi, how are you? Fine, thanks. I'm Sonia, Sonia Cruz. I'm Michael. How many of the people here do you know? I don't know anyone. Well, not many people. Just the hosts, really. And now you. How did you meet Kathy and Craig? We were in college together. Wow. Long time ago. Two. Hi. So, um, do you have any plans for the weekend? Not really. Just need to relax a little. That's all. Me too. Do you want sugar with yours? I can't remember. No thanks. Three. Morning Gary How it going Good morning Ah did you watch the game last night Yeah just reading about it 5 Amazing Absolutely. Oh, this is my floor. See ya. 5. Hello. Um, I see you got a little wet. Yeah, forgot my umbrella. I'm totally soaked. Oh, well. Nasty weather, eh? So it seems. Sorry, I'm going to try and dry off a little. Is there a restroom on this train? Yes, just go to the end of the car and you'll find it. Thanks. Bye. Bye. Five. Hi. Hi. Did you hear the news about Jenny? No. What happened? The flight's been cancelled. Air Traffic Control Strike. You're joking. I just got an email. Did they send you one?	10	\N	1	2026-07-10 18:59:17.546881	2026-07-10 19:12:01.025	\N
12	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.4_ABP_B1_1783710772243.mp3	2.4	 Transcript 2.4, page 18. Exercise 3B. 1. Manga represents nearly a quarter of what the Japanese read. 2. Tanya used to live in Tokyo. 3. Hiroshima has a special library devoted to manga. 4. The plot of the manga Hamlet is very different from the original version. 5. One-world manga are comics that look at serious global issues, such as AIDS. 6. Large manga faces are used on billboards or to decorate the facades of buildings. 7. Tanya's final point is that manga is becoming truly international.	16	\N	1	2026-07-10 19:00:06.470202	2026-07-10 19:12:56.704	\N
9	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.1_ABP_B1_1783710772256.mp3	2.1	 Unit 2, Transcript 2.1, Page 14, Exercise 2A. 1. I like the way he is concentrating so hard, and the light from the cell phone illuminates his face as he scrolls down the text on the screen. 2. You never normally see a photo like this. I mean, you just hear people reading a script out loud. But you never see them. She's very relaxed and informal, which is different from how you see these people on TV. Three. This would be many people's favorite place to read. You glance at a few lines of a novel and then close your eyes. You never usually get past the first paragraph. And the picture captures that. Four. While you're waiting for the bus, This is a good place to check out the sport news. I like how the people are all reading, not really aware of each other. 5. These are some candidates waiting to take an exam. They're looking through their notes for the last time. I remember doing that. It's too late to study anymore, but you still do it anyway. 6. Sometimes there's no better place to read than in the bookstore itself. This guy seems to be looking up some important information in a reference book. It's something he has to know right away.	12	\N	1	2026-07-10 18:59:31.975123	2026-07-10 19:13:00.671	\N
11	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.3_ABP_B1_1783710772547.mp3	2.3	 Transcript 2.3, page 18, exercise 2. Well, we have Tanya Koitz here with us. Hi, Tanya. You've come into the studio today to tell us all about manga. I keep seeing it everywhere, but I must confess I don't know too much about it. Can you enlighten us? Well, I figured that might be the case, so let me give you a brief introduction. The incredible thing about it is that in Japan, where manga comes from, it represents close to 25% of what people read, at least in print. In the U.S., novels are still the most popular, but in many parts of Tokyo, where I used to live, you can't walk more than two or three blocks without encountering these comics. And these are young people, I presume. Oh, no. It isn't just for young people. Everybody reads manga. Business people and housewives alike. You can see them on the subway or even walking down the street, their heads buried in the latest series they are reading. Hiroshima even has a public library devoted to manga. But it's not just about books. You can even get manga novels sent in installments to your cell phone. I was going to ask you about that. So manga's available in every shape and size? Absolutely. And there's a reason for that. You know, nearly all of Japan's cultural production comes from manga. Most anime, animated movies, you know, cartoons and television series, as well as many video games and collectible figures, begin life as manga comics. And what about outside Japan? Has this manga industry evolved in the same way? Yes, for sure. Manga hadn't reached a global market before. But now I say it could be the country most influential export I mean one of the most popular Naruto is now translated into many languages with adaptations you know designed to suit different cultures. So it's a global product, but it's localized for particular markets? That's right. A UK firm has recently published manga versions of Shakespeare's most famous works, including Hamlet. Well, the character of Hamlet is the man we know and love, but the plot is very different, and so is the setting. In this manga version, Hamlet lives in the year 2107, on an Earth destroyed by global warming. Wow, that's some change. What other stuff is out there? Hmm, let me think about that one. Hmm, well, you know, the World Bank and publisher Viz Media teamed up to produce a thing called One World Manga. It's a series of graphic novels in manga format with themes that address stuff like HIV-AIDS, poverty, and corruption. It's a great way to make young people aware of these things. They're donated to libraries so more people can read them. It's a great idea. So would you say that mangas become a central part of popular culture in many parts of the world? Yeah, absolutely. You can even buy a Bible with manga-style illustrations. Can you believe that? And manga is even used by advertisers as a marketing device. You can see huge manga faces on billboards or simply to decorate the facades of buildings. So what started off as comic book, something you put in your pocket, just became the biggest icon the world has ever seen. And this is helping manga become truly international. It's not just Japanese anymore. Wow, that shows you what popularity can do. Incredible, Tanya. The images are amazing. Thanks for sharing them with us.	16	\N	1	2026-07-10 19:00:06.466757	2026-07-10 19:13:13.742	\N
10	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.2_ABP_B1_1783710771031.mp3	2.2	 Transcript 2.2, page 16, exercise 2. Beloved by Toni Morrison. This looks like a romantic novel. I mean, the title suggests that, but actually it's about the slave trade in the United States. It follows the life of a mother and daughter as they try to rebuild their lives after escaping from slavery. It's set in the United States at the end of the 19th century. So I think historical novel is the best description for it. Norwegian Wood by Haruki Murakami. This is like a love story and a drama and a humorous novel all in one. The narrator looks back on his life in the 1960s as a student in Tokyo, so it's very nostalgic. It talks about the love affairs he had when he was younger. It's funny at times, but it has its tragic side as well. But if I had to choose, I think Love Story is the best description. The Road by Cormac McCarthy This is a story about the end of the world We follow the story of a father and son as they walk across America The country has been virtually destroyed, and only a few people have survived. Some people might think this is like science fiction or fantasy, but I think it's very real, which is what makes it so frightening. It's hard to classify, but I suppose it's an action-adventure story, but a very tragic one. The Number One Ladies' Detective Agency by Alexander McCall Smith This story is set in Botswana, Africa. As the name suggests, it's a detective novel, but with a difference. It tells the story of Precious Ramatswe and her decision to become the first female private detective in Botswana. The crimes are ordinary crimes, and the problems are the everyday problems of the people of Botswana. There are touches of comedy, but also of tragedy. And above all, there's the taste of Africa, with all its colors, sights, and sounds.	14	\N	1	2026-07-10 18:59:48.514796	2026-07-10 19:13:11.104	\N
15	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.7_ABP_B1_1783710847504.mp3	2.7	 Transcript 2.7, page 21, exercise 1A. Did you used to watch a lot of TV when you were a kid? No, we didn't used to have a TV, but we used to go to the movies a lot.	19	\N	1	2026-07-10 19:00:34.027185	2026-07-10 19:14:10.444	\N
16	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.8_ABP_B1_1783710849130.mp3	2.8	 Transcript 2.8, page 22, exercise 2A. Evening, listeners. Today journalist Louise Fryer talks about the image of two men reading on the Grand Concourse of Union Station and sees a metaphor for how badly we read these days. I think this image is really revealing. You see more people now, like the man on the left, gazing into a screen or a smartphone, don't you? How many people still read a paper like the man on the right? Does that mean the printed word will disappear? Perhaps, but I'm not sure that's the problem. The main problem, I think, is that we don't read well anymore. Before, we used to read in depth the long texts we had to interpret. Now we just scroll down text on the screen. We don't take it in. We don't absorb the information. And when we get bored, we just open another window or click on another icon. Not only that, we don't read enough. What we tend to do is read the same information again and again. We click on the same websites to check the same information to see if there's been an update. You know, is the weather forecast different to what it was an hour ago? Has the price of that flight changed? Has anybody responded to my blog in the last half hour? Because we can read like this, checking and checking again, we have become anxious readers. We don't know how to read for relaxation anymore. Take away the technology for a week and see what happens. See what you will discover about the world.	20	\N	1	2026-07-10 19:00:43.48553	2026-07-10 19:14:14.317	\N
18	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.10_ABP_B1_1783710904676.mp3	2.10	 Transcript 2.10, page 22. Stress. 1. You know, I don't agree at all. 2. So I really see Louise's point, but... 3. I agree to some extent, I think. 4. You know, I don't see it that way. 5. I couldn't agree more, but... 6. I'm afraid she's wrong about that.	20	\N	1	2026-07-10 19:00:43.49302	2026-07-10 19:15:09.151	\N
19	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.11_ABP_B1_1783710905054.mp3	2.11	 Transcript 2.11, page 23, exercise 4b. I took this photo in Patagonia in Argentina. The two narrow peaks that you can see are called Fitzroy and Cerro Torre. We had spent a few weeks hiking around that area, and this was the end of the last day of our trip. We were driving back on that desolate highway, and the light was dying, when I caught a glimpse of the mountain range in the rearview mirror and thought, I just need to take one last photo of that horizon. It turned out to be the best photo I had taken on that whole trip.	21	\N	1	2026-07-10 19:00:52.757875	2026-07-10 19:15:09.548	\N
17	https://icpnastorage.blob.core.windows.net/storage/book-audios/2.9_ABP_B1_1783710904348.mp3	2.9	 Transcript 2.9, page 22, exercise 3A. 1. Joe You know, I don't agree at all. The people Louise talks about are just bored. They have too much time to waste to read all that information again and again. 2. Ilana I prefer books, the printed word. So I really see Louise's point, but I don't think it's a problem of technology. You can read very well on screen, it's just easier to lose your concentration and browse somewhere else. 3. Svetlana I agree to some extent. I think what she said makes a lot of sense. We have to spend a day or two without technology to realize that. We read the same information again and again, and it's so trivial. 4. Mark You know, I don't see it that way. We read differently, but we don't read any worse than we did when we only had paper. Reading is more dynamic and enjoyable online. 5. Flavio I couldn't agree more. I hate reading online, but I think it's a personal thing. A whole new generation only reads online, it seems. Are they any worse for this? There's no proof they are. 6. Adam I'm afraid she's wrong about that. This is the typical argument of someone who cannot come to terms with new technology and blames it for everything.	20	\N	1	2026-07-10 19:00:43.48953	2026-07-10 19:15:21.122	\N
21	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.2_ABP_B1_1783710971973.mp3	3.2	 Transcript 3.2, page 25, exercise 4a. 1. It's amazing how he takes these derelict old buildings and turns them into works of art. 2. Yes, but the images are pretty disturbing sometimes. I mean, all those rats. 3. We were really surprised when we came across this last installation. Four It was so annoying, all these people taking photos with their phones. Five The kids look really bored, don't they? But actually, they're just imitating the statue's pose. Six I tell you, this one is so lifelike that the first time you see it, it's terrifying. Thank you.	23	\N	1	2026-07-10 19:01:07.879	2026-07-10 19:16:15.91	\N
23	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.4_ABP_B1_1783710973008.mp3	3.4	 Transcript 3.4, page 27. Exercise 2B. 1. This is very interesting. Interesting? It's absolutely fascinating. 2. I'm very tired after that walk. Tired? I'm completely exhausted. 3. Hey, this is pretty good, you know. Good. It's really fantastic.	25	\N	1	2026-07-10 19:01:26.705845	2026-07-10 19:16:16.344	\N
24	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.5_ABP_B1_1783710973678.mp3	3.5	 Transcript 3.5, page 28, exercise 1a. This is a photo of Trafalgar Square in central London. It's one of London's best-known squares. It attracts millions of visitors every year and has often been at the centre of public demonstrations. In each corner of the square there is a plinth, an enormous stone platform. Three of these plinths hold a permanent statue, but the fourth plinth, the one you can see in the image, stood empty for over 150 years. It was originally designed to hold a statue of a horse, but due to lack of money, the statue was never built. In 1998, the local authorities started to experiment with different statues. These experiments were very popular and attracted even more visitors to the square, and a lot of discussion about what exactly should stand on the plinth. In 2010, the mayor of London announced a competition that would take place every two years where the public would decide. In the first competition, a number of sculptures were suggested, and the public voted to choose their two favourite statues, one for 2012, the year of the London Olympics, and the other for the year 2013.	26	\N	1	2026-07-10 19:01:35.942224	2026-07-10 19:16:17.152	\N
20	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.1_ABP_B1_1783710971478.mp3	3.1	 Unit 3. Transcript 3.1. Page 24. Exercise 2b. 1. I love this mural. It's amazing how he takes these derelict old buildings and turns them into works of art. I was amazed when I first saw it. Really amazed. Yes, I know what you mean. But the images are pretty disturbing sometimes. I mean, all those rats. Yeah, I guess his murals of rabbits are less shocking. Two. Hey, this is a great photo. What is it? It's an installation in an open-air sculpture park not far from where we live. It was a very hot day, and we were really surprised, and so pleased when we came across this last installation. We had no idea it was there. There was a tunnel into the hillside, and then we came out into this, like, underground room. And there was this pool. And in the middle, a strange tower. It was so cool and fresh Just what we needed Three So did you get to see the Mona Lisa Yes eventually but we had to stand in line for hours and then when we finally did get to see the painting, it was so disappointing. It's so small, and the room was so full of people, you couldn't see a thing. It was so annoying, all these people taking photos with their phones. 4. Is that Rodin? The Thinker? Where is it? There was an exhibition downtown with six or seven Rodin sculptures. And this one, of course. The kids look really bored, don't they? But actually, they're just imitating the statue's pose. 5. Have you ever seen any of these 3D street drawings? People draw them on the sidewalk or pavement with chalk, but they're in 3D, and some of them look like there's a hole or something. Look, I have a photo of one on my phone. I tell you, this one is so lifelike that the first time you see it, it's terrifying.	22	\N	1	2026-07-10 19:00:59.580126	2026-07-10 19:16:18.845	\N
27	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.8_ABP_B1_1783711030012.mp3	3.8	 Transcript 3.8, page 32, exercise 2A. I don't understand what the problem with this building is. The crazy design, that's the idea. What I like is that it matches what's inside. So much modern music is crazy, and that fits with the building somehow. The most important thing is that people are talking about it. That doesn't happen with most buildings, which we don't even notice. Maybe Frank has a point there. But what I hate about it is the location. There was a beautiful park there before, and now we have to look at this... thing. Ugh, I mean it's absolutely grotesque. Jane's right, the building's embarrassing. I mean, I'm embarrassed to look at it. The problem is that the architect is famous and nobody wants to criticise him. That's the problem. Yeah, okay, we all know it's a work of art, but it's a bad one. I don't want to have to see that every day of the week. That's why works of art should be inside museums. Buildings should be functional. I don't agree with Adrian. I mean, why put a museum about creativity in a grey square box? The best thing about it is that it's controversial. It provokes debate. You can't be indifferent to it, can you? I mean, you either love it or hate it. And technologically, it's incredible. The building is a sculpture. The architect intended it to be like that. A work of art in its own right, you know? Our city should celebrate that, not criticize it.	30	\N	1	2026-07-10 19:02:11.502237	2026-07-10 19:17:14.395	\N
28	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.9_ABP_B1_1783711029554.mp3	3.9	 Transcript 3.9, page 32. Stress. 1. What I like is that it matches what's inside. 2. That's the best thing about it. 3. The most important thing is that people are talking about it. 4. The problem is that the architect is famous. 5. What I hate about it is the position.	30	\N	1	2026-07-10 19:02:11.514816	2026-07-10 19:17:14.606	\N
29	https://icpnastorage.blob.core.windows.net/storage/book-audios/3.10_ABP_B1_1783711031235.mp3	3.10	 Transcript 3.10, page 33, exercise 2A. One. Excuse me, do you have a few minutes? Sorry, no. I'm on the way to work. Two. Excuse me, I wonder if you could answer a few questions? Sorry, I've already answered. Okay, thank you. Three. Good morning. Do you have a few minutes to answer a short survey? We're offering 20 free prints to everyone who answers our questionnaire. Yeah, sure. Thank you. Just a few quick questions to start with. How old are you? Between 18 and 25? Between 26 and 30? Over 30? Between 26 and 30. Okay, thanks. Do you have a digital camera? A digital camera? No, I use the camera on my phone. What kind of phone do you have? Here it is. See, it's a... Okay, thank you. Just one last question. Do you ever print your photos on photographic paper? No, never. It's too expensive. Well, thanks for taking the time to complete the survey. Here's a voucher for 20 free prints. Bring in your phone or the memory card, and we'll print 20 of your favorite photos. Thank you. Have a nice day.	31	\N	1	2026-07-10 19:02:20.727239	2026-07-10 19:17:20.729	\N
33	https://icpnastorage.blob.core.windows.net/storage/book-audios/R2_ABP_B1_1783711115903.mp3	R3	 Transcript R2, page 34, exercise 2. 1. How do you know John? I met him at a party like this one. 2. You don't know me, but I'm Carl. Hello, I'm Mary.	33	\N	1	2026-07-10 19:02:26.001799	2026-07-10 19:18:39.084	\N
34	https://icpnastorage.blob.core.windows.net/storage/book-audios/R4_ABP_B1_1783711115355.mp3	R4	 Transcript R4, page 35, exercise 1B. 1. I think reading aloud is a great way to learn a language. I don't agree at all. 2. Some people can tell entertaining stories and jokes, and others just can't. I agree to some extent. 3. I love reading a good book. I couldn't agree more.	33	\N	1	2026-07-10 19:02:26.007266	2026-07-10 19:18:39.876	\N
32	https://icpnastorage.blob.core.windows.net/storage/book-audios/R2_ABP_B1_1783711114517.mp3	R2	 Transcript R2, page 34, exercise 2. 1. How do you know John? I met him at a party like this one. 2. You don't know me, but I'm Carl. Hello, I'm Mary.	32	\N	1	2026-07-10 19:02:23.71029	2026-07-10 19:18:40.847	\N
\.


--
-- Data for Name: book_image; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_image (id, url, book_page, meta_media_id, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	https://icpnastorage.blob.core.windows.net/storage/book-images/page_1_1783709868904.jpg	1	\N	1	2026-07-10 18:57:50.761753	2026-07-10 18:57:50.761753	\N
2	https://icpnastorage.blob.core.windows.net/storage/book-images/page_2_1783709879017.jpg	2	\N	1	2026-07-10 18:57:59.804777	2026-07-10 18:57:59.804777	\N
3	https://icpnastorage.blob.core.windows.net/storage/book-images/page_3_1783709887368.jpg	3	\N	1	2026-07-10 18:58:07.861215	2026-07-10 18:58:07.861215	\N
4	https://icpnastorage.blob.core.windows.net/storage/book-images/page_4_1783709893577.jpg	4	\N	1	2026-07-10 18:58:14.056935	2026-07-10 18:58:14.056935	\N
5	https://icpnastorage.blob.core.windows.net/storage/book-images/page_5_1783709900343.jpg	5	\N	1	2026-07-10 18:58:20.839615	2026-07-10 18:58:20.839615	\N
6	https://icpnastorage.blob.core.windows.net/storage/book-images/page_6_1783709912497.jpg	6	\N	1	2026-07-10 18:58:33.005148	2026-07-10 18:58:33.005148	\N
7	https://icpnastorage.blob.core.windows.net/storage/book-images/page_7_1783709921956.jpg	7	\N	1	2026-07-10 18:58:42.494448	2026-07-10 18:58:42.494448	\N
8	https://icpnastorage.blob.core.windows.net/storage/book-images/page_8_1783709931938.jpg	8	\N	1	2026-07-10 18:58:52.444845	2026-07-10 18:58:52.444845	\N
9	https://icpnastorage.blob.core.windows.net/storage/book-images/page_9_1783709938158.jpg	9	\N	1	2026-07-10 18:58:58.641604	2026-07-10 18:58:58.641604	\N
10	https://icpnastorage.blob.core.windows.net/storage/book-images/page_10_1783709946649.jpg	10	\N	1	2026-07-10 18:59:07.144092	2026-07-10 18:59:07.144092	\N
11	https://icpnastorage.blob.core.windows.net/storage/book-images/page_11_1783709957580.jpg	11	\N	1	2026-07-10 18:59:18.063907	2026-07-10 18:59:18.063907	\N
12	https://icpnastorage.blob.core.windows.net/storage/book-images/page_12_1783709963988.jpg	12	\N	1	2026-07-10 18:59:24.484636	2026-07-10 18:59:24.484636	\N
13	https://icpnastorage.blob.core.windows.net/storage/book-images/page_13_1783709972029.jpg	13	\N	1	2026-07-10 18:59:32.538625	2026-07-10 18:59:32.538625	\N
14	https://icpnastorage.blob.core.windows.net/storage/book-images/page_14_1783709978228.jpg	14	\N	1	2026-07-10 18:59:38.714566	2026-07-10 18:59:38.714566	\N
15	https://icpnastorage.blob.core.windows.net/storage/book-images/page_15_1783709988539.jpg	15	\N	1	2026-07-10 18:59:49.065607	2026-07-10 18:59:49.065607	\N
16	https://icpnastorage.blob.core.windows.net/storage/book-images/page_16_1783709996645.jpg	16	\N	1	2026-07-10 18:59:57.18308	2026-07-10 18:59:57.18308	\N
17	https://icpnastorage.blob.core.windows.net/storage/book-images/page_17_1783710006508.jpg	17	\N	1	2026-07-10 19:00:07.031813	2026-07-10 19:00:07.031813	\N
18	https://icpnastorage.blob.core.windows.net/storage/book-images/page_18_1783710015292.jpg	18	\N	1	2026-07-10 19:00:15.783226	2026-07-10 19:00:15.783226	\N
19	https://icpnastorage.blob.core.windows.net/storage/book-images/page_19_1783710023802.jpg	19	\N	1	2026-07-10 19:00:24.320977	2026-07-10 19:00:24.320977	\N
20	https://icpnastorage.blob.core.windows.net/storage/book-images/page_20_1783710034078.jpg	20	\N	1	2026-07-10 19:00:34.585028	2026-07-10 19:00:34.585028	\N
21	https://icpnastorage.blob.core.windows.net/storage/book-images/page_21_1783710043524.jpg	21	\N	1	2026-07-10 19:00:44.035587	2026-07-10 19:00:44.035587	\N
22	https://icpnastorage.blob.core.windows.net/storage/book-images/page_22_1783710052796.jpg	22	\N	1	2026-07-10 19:00:53.292807	2026-07-10 19:00:53.292807	\N
23	https://icpnastorage.blob.core.windows.net/storage/book-images/page_23_1783710059620.jpg	23	\N	1	2026-07-10 19:01:00.100193	2026-07-10 19:01:00.100193	\N
24	https://icpnastorage.blob.core.windows.net/storage/book-images/page_24_1783710067917.jpg	24	\N	1	2026-07-10 19:01:08.439471	2026-07-10 19:01:08.439471	\N
25	https://icpnastorage.blob.core.windows.net/storage/book-images/page_25_1783710074615.jpg	25	\N	1	2026-07-10 19:01:15.132126	2026-07-10 19:01:15.132126	\N
26	https://icpnastorage.blob.core.windows.net/storage/book-images/page_26_1783710086727.jpg	26	\N	1	2026-07-10 19:01:27.205341	2026-07-10 19:01:27.205341	\N
27	https://icpnastorage.blob.core.windows.net/storage/book-images/page_27_1783710095984.jpg	27	\N	1	2026-07-10 19:01:36.493947	2026-07-10 19:01:36.493947	\N
28	https://icpnastorage.blob.core.windows.net/storage/book-images/page_28_1783710104284.jpg	28	\N	1	2026-07-10 19:01:44.769331	2026-07-10 19:01:44.769331	\N
29	https://icpnastorage.blob.core.windows.net/storage/book-images/page_29_1783710110908.jpg	29	\N	1	2026-07-10 19:01:51.394005	2026-07-10 19:01:51.394005	\N
30	https://icpnastorage.blob.core.windows.net/storage/book-images/page_30_1783710121255.jpg	30	\N	1	2026-07-10 19:02:01.799166	2026-07-10 19:02:01.799166	\N
31	https://icpnastorage.blob.core.windows.net/storage/book-images/page_31_1783710131554.jpg	31	\N	1	2026-07-10 19:02:12.029996	2026-07-10 19:02:12.029996	\N
32	https://icpnastorage.blob.core.windows.net/storage/book-images/page_32_1783710140759.jpg	32	\N	1	2026-07-10 19:02:21.264129	2026-07-10 19:02:21.264129	\N
33	https://icpnastorage.blob.core.windows.net/storage/book-images/page_33_1783710143734.jpg	33	\N	1	2026-07-10 19:02:24.213299	2026-07-10 19:02:24.213299	\N
34	https://icpnastorage.blob.core.windows.net/storage/book-images/page_34_1783710146029.jpg	34	\N	1	2026-07-10 19:02:26.530997	2026-07-10 19:02:26.530997	\N
35	https://icpnastorage.blob.core.windows.net/storage/book-images/page_35_1783710148568.jpg	35	\N	1	2026-07-10 19:02:29.060765	2026-07-10 19:02:29.060765	\N
36	https://icpnastorage.blob.core.windows.net/storage/book-images/page_36_1783710151673.jpg	36	\N	1	2026-07-10 19:02:32.173293	2026-07-10 19:02:32.173293	\N
37	https://icpnastorage.blob.core.windows.net/storage/book-images/page_37_1783710152193.jpg	37	\N	1	2026-07-10 19:02:32.686352	2026-07-10 19:02:32.686352	\N
38	https://icpnastorage.blob.core.windows.net/storage/book-images/page_38_1783710152707.jpg	38	\N	1	2026-07-10 19:02:33.226191	2026-07-10 19:02:33.226191	\N
39	https://icpnastorage.blob.core.windows.net/storage/book-images/page_39_1783710153284.jpg	39	\N	1	2026-07-10 19:02:33.765845	2026-07-10 19:02:33.765845	\N
40	https://icpnastorage.blob.core.windows.net/storage/book-images/page_40_1783710153787.jpg	40	\N	1	2026-07-10 19:02:34.303109	2026-07-10 19:02:34.303109	\N
41	https://icpnastorage.blob.core.windows.net/storage/book-images/page_41_1783710154334.jpg	41	\N	1	2026-07-10 19:02:34.81827	2026-07-10 19:02:34.81827	\N
42	https://icpnastorage.blob.core.windows.net/storage/book-images/page_42_1783710154841.jpg	42	\N	1	2026-07-10 19:02:35.336615	2026-07-10 19:02:35.336615	\N
43	https://icpnastorage.blob.core.windows.net/storage/book-images/page_43_1783710155374.jpg	43	\N	1	2026-07-10 19:02:35.866951	2026-07-10 19:02:35.866951	\N
44	https://icpnastorage.blob.core.windows.net/storage/book-images/page_44_1783710155888.jpg	44	\N	1	2026-07-10 19:02:36.389285	2026-07-10 19:02:36.389285	\N
\.


--
-- Data for Name: book_index; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_index (id, title, page, skill, book_page, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	Functional Language: Breaking the ice	10	functional_language	1	1	2026-07-10 18:57:56.404568	2026-07-10 18:57:56.404568	\N
2	Speaking Task: Outlining a promotional campaign	11	speaking_task	1	1	2026-07-10 18:57:56.41102	2026-07-10 18:57:56.41102	\N
3	Functional Language: Agreeing and disagreeing	20	functional_language	1	1	2026-07-10 18:57:56.415046	2026-07-10 18:57:56.415046	\N
4	Writing Task: The story behind the photo	21	writing_bank	1	1	2026-07-10 18:57:56.418806	2026-07-10 18:57:56.418806	\N
5	Functional Language: Adding emphasis	30	functional_language	1	1	2026-07-10 18:57:56.422461	2026-07-10 18:57:56.422461	\N
6	Speaking Task: A class survey	31	speaking_task	1	1	2026-07-10 18:57:56.426215	2026-07-10 18:57:56.426215	\N
7	Review A, units 1-3	32	review	1	1	2026-07-10 18:57:56.429587	2026-07-10 18:57:56.429587	\N
8	Bring it Together 1, 2 & 3	35	bring_it_together	1	1	2026-07-10 18:57:56.433733	2026-07-10 18:57:56.433733	\N
9	Grammar Reference	36	grammar_reference	1	1	2026-07-10 18:57:56.437311	2026-07-10 18:57:56.437311	\N
10	Writing Bank	39	writing_bank	1	1	2026-07-10 18:57:56.440736	2026-07-10 18:57:56.440736	\N
11	Writing Bank: A promotional poster	39	writing_bank	1	1	2026-07-10 18:57:56.445642	2026-07-10 18:57:56.445642	\N
12	Writing Bank: Summarizing the findings of a survey	40	writing_bank	1	1	2026-07-10 18:57:56.449247	2026-07-10 18:57:56.449247	\N
13	Communication Bank	41	communication_bank	1	1	2026-07-10 18:57:56.453015	2026-07-10 18:57:56.453015	\N
14	Selected Transcripts	42	selected_transcripts	1	1	2026-07-10 18:57:56.45625	2026-07-10 18:57:56.45625	\N
15	Irregular Verbs	43	workbook	1	1	2026-07-10 18:57:56.45968	2026-07-10 18:57:56.45968	\N
16	Phonetic Chart	44	workbook	1	1	2026-07-10 18:57:56.463686	2026-07-10 18:57:56.463686	\N
17	Workbook	45	workbook	1	1	2026-07-10 18:57:56.466691	2026-07-10 18:57:56.466691	\N
18	Workbook Progress Test	64	workbook	1	1	2026-07-10 18:57:56.4691	2026-07-10 18:57:56.4691	\N
19	Workbook Transcripts	66	selected_transcripts	1	1	2026-07-10 18:57:56.470983	2026-07-10 18:57:56.470983	\N
20	Vodcast Series	68	workbook	1	1	2026-07-10 18:57:56.473029	2026-07-10 18:57:56.473029	\N
21	Skills Boost	71	workbook	1	1	2026-07-10 18:57:56.474998	2026-07-10 18:57:56.474998	\N
\.


--
-- Data for Name: book_lesson; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_lesson (id, unit_number, title, skill, topic, activity_number, letter_number, instruction, content, book_page, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	1.0	COMMUNICATION	speaking	Photos analysis	1	a	Work in pairs. Look at the photos. Answer the questions.	1 What do the photos show?\n2 What is the connection between the photos and the title of the unit?\n3 Which photo is the most striking? Why?	2	1	2026-07-10 18:58:03.601572	2026-07-10 18:58:03.601572	\N
2	1.0	COMMUNICATION	speaking	Types of communication	1	b	Work in pairs. Complete A in the KEY VOCABULARY PANEL. Can you think of any other types of communication? Add them to the list.	\N	2	1	2026-07-10 18:58:03.615403	2026-07-10 18:58:03.615403	\N
3	1.0	COMMUNICATION	listening	Listening to descriptions	2	\N	Listen to six people talking about the photos. Match speakers 1–6 to photos a–f. Do you agree with their descriptions?	\N	2	1	2026-07-10 18:58:03.622981	2026-07-10 18:58:03.622981	\N
4	1.0	COMMUNICATION	vocabulary	Verbs of communication	3	a	Complete the extracts from Transcript 1.1 with the verbs in the box. Match the extracts to the photos.	1 They're not just ________ with words...\n2 This gesture ________ a thousand words.\n3 ... she's using a poster to ________ her message.\n4 ... each dance ________ a story.\n5 ... it's amazing how a hand gesture can ________ so much!\n6 ... or maybe they don't ________ the same language.	2	1	2026-07-10 18:58:03.629864	2026-07-10 18:58:03.629864	\N
5	1.0	COMMUNICATION	reading	Check answers	3	b	Read Transcript 1.1 on page 42 and check your answers.	\N	2	1	2026-07-10 18:58:03.635977	2026-07-10 18:58:03.635977	\N
6	1.0	COMMUNICATION	speaking	Vocabulary practice	4	\N	Work in pairs. Complete B in the KEY VOCABULARY PANEL.	\N	2	1	2026-07-10 18:58:03.642608	2026-07-10 18:58:03.642608	\N
7	1.0	COMMUNICATION	grammar	say, tell, speak	5	a	Complete the questions with the correct form of say, tell and speak.	1 How many languages can you ________?\n2 Who is the one person you ________ to most often?\n3 Who was the first person you ________ to today?\n4 What was the first thing you ________ this morning?\n5 Are you good at ________ jokes?\n6 Do you know anyone who's good at ________ stories?\n7 Are you generally good at ________ what you think? Why/Why not?\n8 Have you ever ________ to a crowd of people? How did you feel?	3	1	2026-07-10 18:58:10.519247	2026-07-10 18:58:10.519247	\N
8	1.0	COMMUNICATION	speaking	say, tell, speak	5	b	Work in pairs. Choose three questions. Ask and answer.	\N	3	1	2026-07-10 18:58:10.525269	2026-07-10 18:58:10.525269	\N
9	1.1	SPEAKING & VOCABULARY: Communication	vocabulary	Communication expressions	1	a	Match the communication expressions in A to the categories in B. Use a dictionary to help you.	A: chat to friends and family on Facebook, discuss politics, give talks/lectures/presentations/speeches, have arguments, talk on Skype, speak in public, talk to children/the elderly/pets/strangers, text, tweet or e-mail friends, use my body to express myself\nB: I do it a lot, I never do it, I can do it in English, I rarely do it, I enjoy doing it, I hate doing it, I'm good at it, I'm bad at it.	4	1	2026-07-10 18:58:18.622898	2026-07-10 18:58:18.622898	\N
10	1.1	SPEAKING & VOCABULARY: Communication	speaking	Everyday communication	1	b	How do you communicate in your everyday life?	\N	4	1	2026-07-10 18:58:18.635472	2026-07-10 18:58:18.635472	\N
11	1.1	SPEAKING & VOCABULARY: Communication	speaking	Compare answers	2	\N	Work in pairs. Compare your answers. What differences did you find?	\N	4	1	2026-07-10 18:58:18.643142	2026-07-10 18:58:18.643142	\N
12	1.1	READING	reading	Communication types	1	a	Look at the images. What kinds of communication do they show?	\N	4	1	2026-07-10 18:58:18.651928	2026-07-10 18:58:18.651928	\N
13	1.1	READING	reading	Match texts and images	1	b	Read texts 1–3 and match them to images a–c.	\N	4	1	2026-07-10 18:58:18.660051	2026-07-10 18:58:18.660051	\N
14	1.1	READING	reading	Types of communication	2	\N	Match texts 1–3 to one or more of the types of communication in SPEAKING & VOCABULARY 1a.	\N	4	1	2026-07-10 18:58:18.667	2026-07-10 18:58:18.667	\N
15	1.1	READING	reading	Match texts to problems	3	\N	Work in pairs. Match texts 1–3 to problems a–c.	a People may lose the art of talking face-to-face.\nb Human communication can be complicated and confusing.\nc Some people can't express themselves with words.	4	1	2026-07-10 18:58:18.674423	2026-07-10 18:58:18.674423	\N
16	1.1	READING	reading	Text analysis	4	\N	Read the texts in 2 again. Which of the people prefer another form of communication to speaking? Which form and why?	\N	4	1	2026-07-10 18:58:18.68471	2026-07-10 18:58:18.68471	\N
17	1.1	READING	speaking	Discussion questions	5	\N	Work in small groups. Discuss the questions.	• Do you know anybody who communicates with their body? What are different ways you can do that (e.g., dance, mime)?\n• Do you sometimes prefer the company of animals to humans? Why/Why not?\n• Is face-to-face communication always preferable? Why/Why not?	4	1	2026-07-10 18:58:18.692566	2026-07-10 18:58:18.692566	\N
18	1.1	GRAMMAR	grammar	Sentence extraction	1	a	Work in pairs. Match extracts 1–6 to images a–c without looking back at the texts in READING 2.	1 I have a lot of trouble talking to people.\n2 When I first started dancing...\n3 ... this technology will separate us...\n4 I've had lots of dogs.\n5 ... they're talking, texting or tweeting on their phones...\n6 I'm going to try and get together with a friend every week...	5	1	2026-07-10 18:58:27.775387	2026-07-10 18:58:27.775387	\N
19	1.1	GRAMMAR	grammar	Verb tenses	1	b	Look at the sentences in 1a again. Underline the verbs. Which are talking about a) the present? b) the past? c) the future?	\N	5	1	2026-07-10 18:58:27.783385	2026-07-10 18:58:27.783385	\N
20	1.1	GRAMMAR	grammar	Grammar panel	2	\N	Complete 1–6 in the GRAMMAR PANEL with the sentences in 1a.	\N	5	1	2026-07-10 18:58:27.788036	2026-07-10 18:58:27.788036	\N
21	1.1	GRAMMAR	grammar	Verb forms	3	a	Choose the correct form of the verb. In one sentence both are possible.	1 I've never been / never went to a photo exhibition.\n2 I'm speaking / speak to my mother on the other line.\n3 Children who grow up with animals communicate / are communicating better.\n4 I don't think computers will change / are going to change the way we communicate in the future.\n5 I've done / did my homework before soccer practice.\n6 I'm going to study / 'll study art in college next year.	5	1	2026-07-10 18:58:27.791938	2026-07-10 18:58:27.791938	\N
22	1.1	GRAMMAR	grammar	Match sentences	3	b	Match sentences 1–6 to the uses in the GRAMMAR PANEL.	\N	5	1	2026-07-10 18:58:27.800423	2026-07-10 18:58:27.800423	\N
23	1.1	PRONUNCIATION: -es & -ed verb endings	pronunciation	Verb endings	1	a	Work in pairs. Write the 3rd person present simple and the past simple forms of the verbs.	start\nwatch\ntext\ndance	5	1	2026-07-10 18:58:27.809669	2026-07-10 18:58:27.809669	\N
24	1.1	PRONUNCIATION: -es & -ed verb endings	pronunciation	Reading aloud	1	b	Read the verbs out loud. Underline the verb forms that have two syllables.	\N	5	1	2026-07-10 18:58:27.811803	2026-07-10 18:58:27.811803	\N
25	1.1	PRONUNCIATION: -es & -ed verb endings	listening	Listen and check	2	a	Listen and check. Answer the questions.	1 When do we add -es and not -s to a verb in the present simple?\n2 When do we pronounce the -ed ending as an extra syllable?	5	1	2026-07-10 18:58:27.813315	2026-07-10 18:58:27.813315	\N
26	1.1	PRONUNCIATION: -es & -ed verb endings	listening	Check answers	2	b	Check your answers on page 41.	\N	5	1	2026-07-10 18:58:27.814678	2026-07-10 18:58:27.814678	\N
27	1.1	PRONUNCIATION: -es & -ed verb endings	listening	Listen and write	3	a	Listen and write the ten verbs you hear.	\N	5	1	2026-07-10 18:58:27.81603	2026-07-10 18:58:27.81603	\N
28	1.1	PRONUNCIATION: -es & -ed verb endings	pronunciation	Read transcript	3	b	Read Transcript 1.3 on page 42 out loud. Pay attention to the -ed endings.	\N	5	1	2026-07-10 18:58:27.817366	2026-07-10 18:58:27.817366	\N
29	1.1	SPEAKING	speaking	Communication problems	1	\N	Work in pairs. Think about three or four different situations where people have difficulty communicating, e.g., when they don't speak each other's language or when the Internet connection is weak. What can you do to fix the communication in each situation? Add some of your own ideas to the list. Use sign language, use simpler language, ask someone to help...	\N	5	1	2026-07-10 18:58:27.818704	2026-07-10 18:58:27.818704	\N
30	1.1	SPEAKING	speaking	Repairing communication	2	a	Think about the situations below. What do you think would be the best way to repair the communication?	• You make a joke in an online chat room, but your friend thinks you're being serious and takes offense.\n• A friend asks you for advice, but you're distracted, watching your favorite TV show, and you answer without really listening. Your friend looks hurt.	5	1	2026-07-10 18:58:27.82022	2026-07-10 18:58:27.82022	\N
31	1.1	SPEAKING	speaking	Class discussion	2	b	Share your ideas with the class. Who has the best solutions?	\N	5	1	2026-07-10 18:58:27.821614	2026-07-10 18:58:27.821614	\N
32	1.2	SPEAKING & VOCABULARY: Communicating	speaking	Photos and signs	1	\N	Work in pairs. Look at the photos. Answer the questions.	Where do you think the people are?\nWhat is the purpose of each sign?\nWhich are protests? Which are giving information?\nWhich is the most effective? Why?	6	1	2026-07-10 18:58:38.274572	2026-07-10 18:58:38.274572	\N
33	1.2	SPEAKING & VOCABULARY: Communicating	vocabulary	Matching sentences	2	a	Match sentences 1-6 to one (or more) of photos a-d.	1 This person is making a very serious point.\n2 This person isn't trying to change anybody's mind.\n3 This person doesn't really have a particular message to get across.\n4 This person isn't trying to persuade anyone, he/she is simply speaking his/her mind.\n5 This person is standing up for animal rights.\n6 This sign certainly makes you stop and pay attention.	6	1	2026-07-10 18:58:38.279434	2026-07-10 18:58:38.279434	\N
34	1.2	SPEAKING & VOCABULARY: Communicating	vocabulary	Definitions	2	b	Match the words and expressions in bold in 2a to definitions a-f.	a express a personal opinion\nb support and fight for something\nc transmit information successfully\nd influence someone's opinion\ne express a particular argument\nf look at or listen to something very carefully	6	1	2026-07-10 18:58:38.28313	2026-07-10 18:58:38.28313	\N
35	1.2	SPEAKING & VOCABULARY: Communicating	vocabulary	Completing questions	3	a	Complete the questions with the expressions in 2a.	1 Which sign do you think makes people __________ the most __________? Why?\n2 What rights is the man in the mask __________ing __________ for?\n3 Do you think any of these signs can actually __________ anyone's __________? If so, which?\n4 Which sign do you think is __________ing the most important __________?\n5 Do you think making a sign is the best way to __________ a message __________? Why/Why not? What other ways are there?\n6 Do you ever __________ your __________ in public like this? Why/Why not?	6	1	2026-07-10 18:58:38.286474	2026-07-10 18:58:38.286474	\N
36	1.2	SPEAKING & VOCABULARY: Communicating	listening	Listen and check	3	b	Listen and check.	\N	6	1	2026-07-10 18:58:38.289917	2026-07-10 18:58:38.289917	\N
37	1.2	SPEAKING & VOCABULARY: Communicating	speaking	Ask and answer	4	\N	Work in pairs. Ask and answer the questions in 3a.	\N	6	1	2026-07-10 18:58:38.292955	2026-07-10 18:58:38.292955	\N
38	1.2	LISTENING	listening	Interviews	1	a	Listen to interviews with the four people in the photos. Match interviews 1-4 to photos a-d.	\N	6	1	2026-07-10 18:58:38.295644	2026-07-10 18:58:38.295644	\N
39	1.2	LISTENING	listening	Match statements	1	b	Listen again. Match statements 1-4 to photos a-d. More than one answer may be correct.	1 The person wanted to be funny and serious at the same time.\n2 The person made the sign with a friend.\n3 The person talks about how the problem is affecting his/her mood.\n4 The person wants to be the first.	6	1	2026-07-10 18:58:38.299	2026-07-10 18:58:38.299	\N
40	1.2	LISTENING	speaking	Discussion	2	\N	Work in groups. Discuss the questions.	Do you ever see people carrying signs?\nWhat types of signs are they?\nIn what way are they similar to the signs in the photos?	6	1	2026-07-10 18:58:38.301963	2026-07-10 18:58:38.301963	\N
41	1.2	GRAMMAR	grammar	Questions matching	1	a	Match questions 1–8 to answers a–h.	1 How long will you stay here for?\n2 What made you want to dress like a polar bear?\n3 How long did it take to make the sign?\n4 How long have you been here?\n5 Who gave you the idea?\n6 Do you think the sign will work?\n7 Did he say anything to you?\n8 Who is the sign for?\n\na It's a powerful symbol...\nb Nobody. I just love this soccer player.\nc Well, about an hour, I think.\nd Well, for nobody really... It was just a joke.\ne ... as long as necessary...\nf I hope so, but I just don't know...\ng No, unfortunately he didn't.\nh Twenty-four hours, I slept here overnight.	7	1	2026-07-10 18:58:47.618078	2026-07-10 18:58:47.618078	\N
42	1.2	GRAMMAR	listening	Listening check	1	b	Listen again and check.	\N	7	1	2026-07-10 18:58:47.628934	2026-07-10 18:58:47.628934	\N
43	1.2	GRAMMAR	grammar	Question analysis	2	a	Look at the questions in 1a again. Underline all the question words, circle all the subject pronouns and highlight all the auxiliary verbs.	\N	7	1	2026-07-10 18:58:47.635729	2026-07-10 18:58:47.635729	\N
44	1.2	GRAMMAR	grammar	Question analysis	2	b	Which questions don't have a) question words? b) subject pronouns? c) auxiliary verbs?	\N	7	1	2026-07-10 18:58:47.641822	2026-07-10 18:58:47.641822	\N
45	1.2	GRAMMAR	grammar	Grammar check	3	\N	Check your answers in the GRAMMAR PANEL. Complete 1–4.	\N	7	1	2026-07-10 18:58:47.648103	2026-07-10 18:58:47.648103	\N
46	1.2	GRAMMAR	grammar	Correcting mistakes	4	a	Correct the mistakes.	1 When the last protest was held in your town or city?\n2 What it was about?\n3 When played your local soccer team their last game?\n4 Who did win?\n5 You have ever stood in line to buy something?\n6 What you wanted to buy?	7	1	2026-07-10 18:58:47.654166	2026-07-10 18:58:47.654166	\N
47	1.2	GRAMMAR	speaking	Speaking practice	4	b	Work in pairs. Ask and answer the questions in 4a.	\N	7	1	2026-07-10 18:58:47.660533	2026-07-10 18:58:47.660533	\N
48	1.2	SPEAKING	speaking	Discussion	1	\N	Work in pairs. Have you ever made a sign? What was it for? Tell your partner about it.	\N	7	1	2026-07-10 18:58:47.667919	2026-07-10 18:58:47.667919	\N
49	1.2	SPEAKING	speaking	Creative task	2	\N	Write your own sign. Think about...	• its purpose and its message. Is it funny or serious?\n• where you would like to show it.\n• who you would like to show it to.	7	1	2026-07-10 18:58:47.674959	2026-07-10 18:58:47.674959	\N
50	1.2	SPEAKING	speaking	Interaction	3	\N	Show the sign to your partner. Ask and answer questions about your signs.	\N	7	1	2026-07-10 18:58:47.681928	2026-07-10 18:58:47.681928	\N
51	1.3	SPEAKING	speaking	Technology use	1	\N	Work in groups. Discuss the questions.	Do you have a cell phone? Is it a smartphone? What do you use it for?\nWhat other technology do you use to communicate with people?\nWhat else can you use it for?	8	1	2026-07-10 18:58:56.6761	2026-07-10 18:58:56.6761	\N
52	1.3	READING	reading	Blog post prediction	1	a	You are going to read a post from a blog called Behind the Curtain. Look at the headline and the description of the blogger. What do you think the post is going to be about?	\N	8	1	2026-07-10 18:58:56.68466	2026-07-10 18:58:56.68466	\N
53	1.3	READING	reading	Blog post comprehension	1	b	Read the blog post and check your answer.	\N	8	1	2026-07-10 18:58:56.691733	2026-07-10 18:58:56.691733	\N
54	1.3	READING	reading	Images and story	2	a	Work in pairs. What is the connection between the images and the story?	\N	8	1	2026-07-10 18:58:56.698456	2026-07-10 18:58:56.698456	\N
55	1.3	READING	reading	Post comprehension	2	b	Read the post again and answer the questions.	1 How has his new phone changed the writer's life?\n2 What can he do now that he couldn't do before?\n3 What two features of the iPhone does the writer talk about and how exactly do they work?\n4 In what way do they change the way the writer communicates with his mother?\n5 What else can he do with them?\n6 Which application is the writer most impressed by? Why?	8	1	2026-07-10 18:58:56.705229	2026-07-10 18:58:56.705229	\N
56	1.3	READING	vocabulary	Word meanings	3	a	Find words/phrases in the blog post that mean...	1 turn something on\n2 told you that something has happened\n3 moved something across a surface\n4 unclear images\n5 walked around with no particular purpose or direction\n6 makes something better or stronger	8	1	2026-07-10 18:58:56.728773	2026-07-10 18:58:56.728773	\N
57	1.3	READING	speaking	Adjective description	3	b	Think of an adjective to describe the blog post. Tell the class why you chose it.	\N	8	1	2026-07-10 18:58:56.735278	2026-07-10 18:58:56.735278	\N
58	1.3	VOCABULARY: Senses	vocabulary	Senses verbs	1	a	Look at the extracts from the text in READING 1b. Underline the verbs and answer the questions.	1 I looked at the sky.\n2 The sky looked bluer that night.\n3 I can see some light and color.\nIn which sentence is the verb...\na describing an ability?\nb describing a conscious action (something you decide to do)?\nc introducing a description?	9	1	2026-07-10 18:59:04.284896	2026-07-10 18:59:04.284896	\N
59	1.3	VOCABULARY: Senses	vocabulary	Senses verbs	1	b	Match the verbs in the box to the categories. Use a dictionary to help you. Some verbs can fit in more than one category.	feel, hear, listen, look, see, smell, sound, taste, touch, watch	9	1	2026-07-10 18:59:04.287902	2026-07-10 18:59:04.287902	\N
60	1.3	VOCABULARY: Senses	vocabulary	Senses verbs	2	\N	Complete the sentences with the verbs from 1b. More than one verb may be possible.	1 Don't __________ that! It's hot!\n2 Can you __________ that sound? What is it?\n3 Mm. That __________ nice. What are you cooking?\n4 Is that Ana singing? She __________ really good!	9	1	2026-07-10 18:59:04.29077	2026-07-10 18:59:04.29077	\N
61	1.3	VOCABULARY: Senses	vocabulary	Senses verbs	3	a	Choose the correct verb to complete the questions.	1 How well can you look / see? Do you need to wear glasses? Does either of your parents wear glasses?\n2 Do you prefer to hear / listen to music quietly or at full volume? Why?\n3 Does it get very cold in your hometown in winter? Do you feel / touch the cold?\n4 Do you like food that feels / tastes hot and spicy, or do you prefer more subtle flavors? Why?	9	1	2026-07-10 18:59:04.293532	2026-07-10 18:59:04.293532	\N
62	1.3	VOCABULARY: Senses	speaking	Senses discussion	3	b	Work in pairs. Ask and answer the questions in 3a. Which sense is the most important for you? Why?	\N	9	1	2026-07-10 18:59:04.296202	2026-07-10 18:59:04.296202	\N
63	1.3	GRAMMAR	grammar	Sentences check	1	a	Which of the sentences are true for you at the moment?	1 I'm looking out the window.\n2 I can see something strange out of the corner of my eye!\n3 I can hear the sound of children playing in the distance.\n4 I'm thinking about this exercise.	9	1	2026-07-10 18:59:04.298733	2026-07-10 18:59:04.298733	\N
64	1.3	GRAMMAR	grammar	Sentences analysis	1	b	Work in pairs. Compare your answers. Answer the questions.	a Which sentences describe a conscious action that is in progress at the moment?\nb Which describe perceptions (things you can sense using your five senses)?	9	1	2026-07-10 18:59:04.302619	2026-07-10 18:59:04.302619	\N
65	1.3	GRAMMAR	grammar	Grammar practice	2	\N	Complete 1-4 in the GRAMMAR PANEL with the sentences in 1a.	\N	9	1	2026-07-10 18:59:04.305512	2026-07-10 18:59:04.305512	\N
66	1.3	GRAMMAR	grammar	State vs dynamic verbs	3	\N	Choose the correct verb to complete the sentences.	1 I have a bad cold and I can't smell / I'm not smelling anything.\n2 I see / I'm seeing the boss about my vacation dates tomorrow.\n3 What are you doing? I taste / I'm tasting the soup to see if it has enough salt in it.\n4 I can feel / I'm feeling the sun on my skin. It's so hot! I think I burn / I'm burning!	9	1	2026-07-10 18:59:04.309144	2026-07-10 18:59:04.309144	\N
67	1.3	GRAMMAR	writing	Writing sentences	4	a	Write three sentences describing what you are doing right now and three sentences describing what you can perceive through your senses.	\N	9	1	2026-07-10 18:59:04.316317	2026-07-10 18:59:04.316317	\N
68	1.3	GRAMMAR	speaking	Speaking practice	4	b	Work in pairs. Compare your sentences. How many of them are the same?	\N	9	1	2026-07-10 18:59:04.319354	2026-07-10 18:59:04.319354	\N
69	1.4	TUNE IN	speaking	Conversation starters	1	\N	Work in pairs. Look at the images. Discuss the questions.	• Do you ever use these topics to start a conversation?\n• What other topics do you use?\n• What kinds of questions would you ask about them?	10	1	2026-07-10 18:59:13.098006	2026-07-10 18:59:13.098006	\N
70	1.4	TUNE IN	vocabulary	Conversation verbs and nouns	2	\N	Work in pairs. Match verbs 1–6 to nouns a–f. More than one option may be possible.	1 hear / a wet\n2 watch / b better\n3 get / c the game\n4 have / d the news\n5 feel / e people\n6 know / f plans	10	1	2026-07-10 18:59:13.115712	2026-07-10 18:59:13.115712	\N
71	1.4	TUNE IN	speaking	Conversation openers	3	a	The expressions in 2 can all be used to start a conversation. Think of the conversation opener for each expression.	hear the news → Have you heard the news about Jenny?	10	1	2026-07-10 18:59:13.121278	2026-07-10 18:59:13.121278	\N
72	1.4	TUNE IN	listening	Comparing openers	3	b	Listen and compare.	\N	10	1	2026-07-10 18:59:13.12622	2026-07-10 18:59:13.12622	\N
73	1.4	TUNE IN	listening	Matching conversations	4	\N	Listen and match conversations 1–5 to situations a–e.	a strangers on a train\nb coworkers at the coffee machine\nc coworkers on the elevator\nd a couple at home\ne strangers at a party	10	1	2026-07-10 18:59:13.130424	2026-07-10 18:59:13.130424	\N
74	1.4	TUNE IN	listening	Topic changes	5	\N	Listen again. Which conversations change topic and which follow the topic in the opening line? What does this tell you about conversation starters?	\N	10	1	2026-07-10 18:59:13.135643	2026-07-10 18:59:13.135643	\N
75	1.4	FOCUS ON LANGUAGE	functional_language	Conversation statements	6	a	Look at the statements and questions. Which would you use with a) strangers? b) friends/family? c) both?	1 Do you know something? Your face is really familiar.\n2 Excuse me, can I give you a hand with that?\n3 How are you feeling today?\n4 So, how do you know Sergio?\n5 What’s the problem? You look terrible.\n6 What did you say your name was again?\n7 Hi, what are you up to?\n8 Did you sleep OK?\n9 Hi, what brings you here at this time of day?\n10 You don’t know me, but...	10	1	2026-07-10 18:59:13.139914	2026-07-10 18:59:13.139914	\N
76	1.4	FOCUS ON LANGUAGE	speaking	Breaking the ice	6	b	Work in pairs. Which do you think might be useful for breaking the ice?	\N	10	1	2026-07-10 18:59:13.146039	2026-07-10 18:59:13.146039	\N
77	1.4	OVER TO YOU	speaking	Conversation practice	7	a	Work in pairs. Choose one of the situations. Student A starts a conversation with Student B. You are strangers. How long can you can keep the conversation going?	1 standing at a bus stop\n2 taking shelter from torrential rain\n3 standing in a long line for tickets\n4 waiting to check in at an airport	10	1	2026-07-10 18:59:13.152896	2026-07-10 18:59:13.152896	\N
78	1.4	OVER TO YOU	speaking	Role play	7	b	Act out your situation for the class. Can other students guess where you are?	\N	10	1	2026-07-10 18:59:13.156551	2026-07-10 18:59:13.156551	\N
79	1.4	OVER TO YOU	speaking	Group discussion	8	\N	Work in groups. How easy do you find it to break the ice if you are interested in talking to somebody? What other typical ways can you think of?	\N	10	1	2026-07-10 18:59:13.160635	2026-07-10 18:59:13.160635	\N
80	1.5	TUNE IN	reading	Marketing strategies	1	\N	Read the online article. Match statements a–d to paragraphs 1–4.	a It can help create goodwill and a positive image for your product.\nb It may be expensive and time-consuming.\nc A personal touch can help a lot.\nd It can help get people interested in what you offer.	11	1	2026-07-10 18:59:22.278985	2026-07-10 18:59:22.278985	\N
81	1.5	TUNE IN	reading	Marketing strategies	2	\N	Underline the different marketing strategies in the article.	\N	11	1	2026-07-10 18:59:22.286699	2026-07-10 18:59:22.286699	\N
82	1.5	PREPARE FOR TASK	speaking	Marketing pros and cons	3	\N	Work in pairs. Discuss the pros and cons of...	e-mail\nwikis\nTwitter\nonline banners\nmerchandising\ncold-calling\nword of mouth	11	1	2026-07-10 18:59:22.291508	2026-07-10 18:59:22.291508	\N
83	1.5	PREPARE FOR TASK	speaking	Marketing strategies application	4	\N	Work in pairs. Which of the marketing strategies in the article and in 3 could work for these products?	events\ncell phone service\nlast-minute travel deals\nfree invitation to concert\nsoccer team	11	1	2026-07-10 18:59:22.297663	2026-07-10 18:59:22.297663	\N
84	1.5	PREPARE FOR TASK	speaking	Promotional campaign design	5	\N	How would you design a promotional campaign for your English textbook? Brainstorm some initial thoughts about it.	\N	11	1	2026-07-10 18:59:22.30193	2026-07-10 18:59:22.30193	\N
85	1.5	TASK	speaking_task	Outline promotional campaign	6	a	Work in small groups. Outline a promotional campaign for American Big Picture. Include...	the customers you are targeting\nthe promotions you are going to adopt\nthe form of communication you are going to use for your campaign	11	1	2026-07-10 18:59:22.307857	2026-07-10 18:59:22.307857	\N
86	1.5	TASK	speaking_task	Campaign strategy evaluation	6	b	Look at the strategies on page 41. Choose the one you think is the most effective for your campaign. Explain why and give more details where possible. Can you think of any other strategies?	\N	11	1	2026-07-10 18:59:22.311908	2026-07-10 18:59:22.311908	\N
87	1.5	REPORT BACK	speaking	Presenting campaigns	7	\N	Present your campaign to the rest of the class. Whose campaign is the most attractive, commercial, original? Which is the "hardest sell"? Why?	\N	11	1	2026-07-10 18:59:22.316419	2026-07-10 18:59:22.316419	\N
88	2.0	A GOOD READ	speaking	Reading images	1	a	Work in pairs. Look at the images. Answer the questions.	1 Where are the people?\n2 What do you think the people are reading? How do you know?\n3 Are they reading carefully or casually? Why?	12	1	2026-07-10 18:59:28.419676	2026-07-10 18:59:28.419676	\N
89	2.0	A GOOD READ	vocabulary	Key vocabulary	1	b	Work in pairs. Complete A in the KEY VOCABULARY PANEL.	\N	12	1	2026-07-10 18:59:28.423163	2026-07-10 18:59:28.423163	\N
90	2.0	A GOOD READ	listening	Photographer interview	2	a	Listen to a photographer talking about the images. In what order does she talk about them?	\N	12	1	2026-07-10 18:59:28.426715	2026-07-10 18:59:28.426715	\N
91	2.0	A GOOD READ	listening	Photographer interview	2	b	Listen again. What does she like about each image?	\N	12	1	2026-07-10 18:59:28.429679	2026-07-10 18:59:28.429679	\N
92	2.0	A GOOD READ	listening	Matching images	3	a	Listen again and match to images a–f.	1 This is a good place to check out the sports news.\n2 He scrolls down the text on the screen.\n3 You just hear people reading a script out loud but you never see them.\n4 You glance at a few lines of a novel and then close your eyes...\n5 They're looking through their notes for the last time.\n6 This guy seems to be looking up some important information.	12	1	2026-07-10 18:59:28.453716	2026-07-10 18:59:28.453716	\N
93	2.0	A GOOD READ	vocabulary	Key vocabulary	3	b	Complete B in the KEY VOCABULARY PANEL.	\N	12	1	2026-07-10 18:59:28.468685	2026-07-10 18:59:28.468685	\N
94	2.0	Reading	vocabulary	Reading verbs	4	a	Use words in B to complete the sentences. One does not apply. More than one answer may be correct.	1 I sometimes __________ the covers of magazines in stores, but I never buy them.\n2 I always __________ my notes just before an exam.\n3 When I want to __________ a word, I always go to an online dictionary.\n4 I always __________ the weather report on my computer first thing every morning.\n5 I've never had to __________ a speech __________ to an audience. It'd terrify me!	13	1	2026-07-10 18:59:35.314721	2026-07-10 18:59:35.314721	\N
95	2.0	Reading	speaking	Personal reading habits	4	b	Are the statements true for you? Share your answers with the class.	\N	13	1	2026-07-10 18:59:35.32609	2026-07-10 18:59:35.32609	\N
96	2.0	Reading	speaking	Reading preferences	5	\N	Work in pairs. Discuss the questions.	• Where do you prefer to read?\n• What do you like reading there?	13	1	2026-07-10 18:59:35.335215	2026-07-10 18:59:35.335215	\N
97	2.1	SPEAKING & VOCABULARY	vocabulary	Books & genres	1	a	Work in pairs. Add the words in the box to the two groups. Use a dictionary to help you.	1 Different kinds of books\n2 Different types or genres of fiction (novels or movies)	14	1	2026-07-10 18:59:44.118941	2026-07-10 18:59:44.118941	\N
98	2.1	SPEAKING & VOCABULARY	speaking	Books & genres	1	b	Answer the questions.	When was the last time you bought a book?\nWhat kind of book was it?\nWas it for you or for someone else?\nWhy did you choose that particular book?	14	1	2026-07-10 18:59:44.127403	2026-07-10 18:59:44.127403	\N
99	2.1	SPEAKING & VOCABULARY	speaking	Choosing a book	2	a	Mark the statements that are true for you. When you choose a book, what do you do?	I look at the cover—the image and the design tell me a lot about the book.\nI read the blurb on the back and maybe the information about the author.\nI look through the book and maybe read the opening page or a short extract.\nI only buy a book if someone has recommended it or if I’ve read a good review.	14	1	2026-07-10 18:59:44.134393	2026-07-10 18:59:44.134393	\N
100	2.1	SPEAKING & VOCABULARY	speaking	Choosing a book	2	b	Compare your answers with a partner's.	\N	14	1	2026-07-10 18:59:44.143909	2026-07-10 18:59:44.143909	\N
101	2.1	LISTENING	listening	Novel covers	1	a	Look at the covers of four novels. Answer the questions.	1 Are you familiar with any of the novels?\n2 Look at the titles and the images. What kind of book do you think each one is? Choose from the genres in SPEAKING & VOCABULARY 1a.\n3 If you were in a bookstore, which one might you pick up?	14	1	2026-07-10 18:59:44.151585	2026-07-10 18:59:44.151585	\N
102	2.1	LISTENING	listening	Novel covers	1	b	Discuss your answers in small groups. Did you all agree?	\N	14	1	2026-07-10 18:59:44.15733	2026-07-10 18:59:44.15733	\N
103	2.1	LISTENING	listening	Talking about novels	2	\N	Listen to someone talking about the four novels. Check your answers to 1a.	\N	14	1	2026-07-10 18:59:44.163538	2026-07-10 18:59:44.163538	\N
104	2.1	LISTENING	listening	Novel facts	3	a	Listen again. Match the novels to the facts. More than one answer is possible for one of the sentences.	1 It seems very real, and this is what makes it powerful.\n2 It's the story of a parent and a child.\n3 The novel is like a flashback.\n4 The novel is a vision of the future.\n5 It gives a real flavor of the place where it is set.	14	1	2026-07-10 18:59:44.169739	2026-07-10 18:59:44.169739	\N
105	2.1	LISTENING	speaking	Novel facts	3	b	Work in pairs. Answer the question. What do the books have in common?	a They are not easy to classify.\nb They are/were all best sellers.\nc They are all controversial novels.	14	1	2026-07-10 18:59:44.176726	2026-07-10 18:59:44.176726	\N
106	2.1	LISTENING	speaking	Reading habits	4	\N	Work in pairs. Discuss the questions.	• Have you read any of these books?\n• Would you like to? Why/Why not?\n• Would you prefer to see the movie?	14	1	2026-07-10 18:59:44.183656	2026-07-10 18:59:44.183656	\N
107	2.1	READING	reading	Book extracts	1	a	Read two extracts from one of the novels on page 14. Which novel do you think they come from?	\N	15	1	2026-07-10 18:59:54.662327	2026-07-10 18:59:54.662327	\N
108	2.1	READING	reading	Book extracts	1	b	Work in pairs. Compare your answers and explain why.	\N	15	1	2026-07-10 18:59:54.666116	2026-07-10 18:59:54.666116	\N
109	2.1	READING	reading	Book extracts	2	a	Read the extracts again. Answer the questions.	1 How many characters are there in each extract? Who are they? Which is the main character?\n2 Where is the action taking place? What is the main action?\n3 What do you think happened after the scene?	15	1	2026-07-10 18:59:54.66964	2026-07-10 18:59:54.66964	\N
110	2.1	READING	reading	Book extracts	2	b	Work in pairs. Would you like to read the novel? Why?/Why not?	\N	15	1	2026-07-10 18:59:54.671732	2026-07-10 18:59:54.671732	\N
111	2.1	GRAMMAR	grammar	Verbs in bold	1	a	Look at the verbs in bold from the extracts. Which describe...	a a single action?\nb an action that was in progress at the time?	15	1	2026-07-10 18:59:54.673785	2026-07-10 18:59:54.673785	\N
112	2.1	GRAMMAR	grammar	Verb forms	2	\N	Complete the sentences with the correct form of the verbs.	1 Mma. Ramotswe ________ (stand) at the counter of the shop when Mma. Makutsi ________ (run) through the door.\n2 I ________ (stop) on my way back from my cattle post. It ________ (be) a hot day and I ________ (rest) under a tree.\n3 She ________ (sit) on the bed when the neighbor ________ (come) in and ________ (say) that she would get somebody to take her to her father.\n4 As she ________ (walk) down the front steps of the hotel, she ________ (see) Dr. Komoti in the mall.\n5 She ________ (turn) around sharply. A woman ________ (stand) in the doorway, wiping her hands on a cloth.	15	1	2026-07-10 18:59:54.675665	2026-07-10 18:59:54.675665	\N
113	2.1	SPEAKING	speaking	Book or movie recommendations	1	a	Think of a book or the movie of a book you have read or seen recently. Would you recommend it to your classmates? Why/Why not?	\N	15	1	2026-07-10 18:59:54.677707	2026-07-10 18:59:54.677707	\N
114	2.1	SPEAKING	speaking	Book or movie recommendations	1	b	Work in groups. Tell your group about your book or movie.	It's set in...\nIt tells the story of...\nIt's all about...	15	1	2026-07-10 18:59:54.679741	2026-07-10 18:59:54.679741	\N
115	2.1	SPEAKING	speaking	Book or movie recommendations	2	a	Work in groups. Decide which book or movie you would like to recommend to the class.	\N	15	1	2026-07-10 18:59:54.681728	2026-07-10 18:59:54.681728	\N
116	2.1	SPEAKING	speaking	Book or movie recommendations	2	b	Present your choice to the class. Take a vote to find out which book or movie most people would like to see or read.	\N	15	1	2026-07-10 18:59:54.68378	2026-07-10 18:59:54.68378	\N
117	2.2	LISTENING	listening	Manga knowledge	1	\N	Work in pairs. What do you know about manga? Look at the images to help you. Do you know anyone who is a fan?	\N	16	1	2026-07-10 19:00:02.392078	2026-07-10 19:00:02.392078	\N
118	2.2	LISTENING	listening	Manga growth	2	\N	Listen to a manga fan, Tanya Kowitz, talk about manga's growth in the world. Answer the questions.	1 In what order does she mention the images?\n2 What other uses of manga are not illustrated?	16	1	2026-07-10 19:00:02.413904	2026-07-10 19:00:02.413904	\N
119	2.2	LISTENING	listening	True sentences	3	a	Listen again. Change the sentences so that they are true.	1 Manga represents nearly half of what Japanese people read.\n2 Tanya lives in Tokyo now.\n3 Hiroshima has a special bookstore devoted to manga.\n4 The plot of the manga Hamlet is similar to the original version.\n5 1 World Manga are comics that look at local Japanese issues.\n6 Large manga faces are used on TV commercials.\n7 Tanya's final point is that manga is a purely Japanese phenomenon.	16	1	2026-07-10 19:00:02.417379	2026-07-10 19:00:02.417379	\N
120	2.2	LISTENING	listening	Check answers	3	b	Listen and check your answers.	\N	16	1	2026-07-10 19:00:02.420492	2026-07-10 19:00:02.420492	\N
121	2.2	VOCABULARY: Books & genres (2)	vocabulary	Books & genres	1	\N	Match the words from LISTENING 2 to the categories.	1 Type of reading material\n2 Elements of a story\n3 Different representations of a story	16	1	2026-07-10 19:00:02.423531	2026-07-10 19:00:02.423531	\N
122	2.2	VOCABULARY: Books & genres (2)	vocabulary	Vocabulary in context	2	a	Complete the sentences with words from the box in 1. In some cases, the plural form may be necessary or two answers possible.	1 I loved the original, but the movie ________ was terrible.\n2 I like Lisa Simpson; she's my favorite ________ on the show.\n3 The book was great, but I had trouble understanding the ________. It was really complicated.\n4 Tintin was the first ________ I read as a kid.\n5 I mostly read fiction, though not ________. They aren't always that good.	16	1	2026-07-10 19:00:02.427326	2026-07-10 19:00:02.427326	\N
123	2.2	VOCABULARY: Books & genres (2)	vocabulary	Check answers	2	b	Listen and check.	\N	16	1	2026-07-10 19:00:02.431072	2026-07-10 19:00:02.431072	\N
124	2.2	VOCABULARY: Books & genres (2)	speaking	Personalized sentences	3	\N	Change or add any words in the sentences in 2a to make them true for you. Continue the sentences and then compare with a partner's.	1 I loved the original Batman comic, but the movie version was terrible. It's much better in my imagination.	16	1	2026-07-10 19:00:02.4351	2026-07-10 19:00:02.4351	\N
125	2.2	READING & SPEAKING	reading_listening	Literature and film	1	\N	Work in pairs. Look at the images on page 16 again. Which one shows a famous work of literature? Do you know anything about the original story?	\N	17	1	2026-07-10 19:00:12.664082	2026-07-10 19:00:12.664082	\N
126	2.2	GRAMMAR	grammar	Past perfect verbs	1	a	Look at the verbs in bold in READING & SPEAKING 2b. Which are describing...	a an event that happened before the main action in the story?\nb a situation that had been in progress for some time before the story started?	17	1	2026-07-10 19:00:12.674248	2026-07-10 19:00:12.674248	\N
127	2.2	GRAMMAR	grammar	Past perfect sentences	1	b	Complete 1-3 in the GRAMMAR PANEL with sentences from the texts in READING & SPEAKING 2b.	\N	17	1	2026-07-10 19:00:12.682755	2026-07-10 19:00:12.682755	\N
128	2.2	GRAMMAR	grammar	Past perfect vs simple	2	a	Choose the correct form of the verbs to complete the story.	Luke (1)was / had been a simple farm boy. He (2)lived / had lived with his uncle and aunt. His mother died when he was born and he (3)never met / had never met his father. Not, that is, until one day when he was repairing an old robot that he (4)bought / had bought from some travelers and he accidentally (5)unlocked / had unlocked a message that would change the course of his life.	17	1	2026-07-10 19:00:12.691671	2026-07-10 19:00:12.691671	\N
129	2.2	GRAMMAR	speaking	Movie identification	2	b	Work in pairs. Compare your answers. Do you know what movie it comes from?	\N	17	1	2026-07-10 19:00:12.69729	2026-07-10 19:00:12.69729	\N
130	2.2	READING & SPEAKING	speaking	Play titles	2	a	Look at the movie posters of two other plays by the same writer. Do you know what they are? Choose from the list.	Romeo & Juliet\nThe Tempest\nThe Merchant of Venice\nA Midsummer Night's Dream\nMacbeth\nTwelfth Night	17	1	2026-07-10 19:00:12.702888	2026-07-10 19:00:12.702888	\N
131	2.2	READING & SPEAKING	reading	Matching plays	2	b	Read the descriptions of Hamlet and the two plays in the posters. Match them to the images on this page and page 16.	1 Two young people met and fell in love. But their two families had been at war for years, so they had to keep their love a secret. When the boy discovered that he had killed his lover's cousin in a fight, the two lovers planned their escape.\n2 A rich businessman borrowed some money from a moneylender. The businessman had promised to give the moneylender a pound of his flesh if he couldn't repay the money. He had thought it was a joke, but the moneylender was deadly serious.\n3 His father had only been dead for a few weeks when the prince met his ghost. He listened, amazed, as his father's ghost told him what had happened and who had killed him. The prince had no other choice. He had to seek revenge for his father's death.	17	1	2026-07-10 19:00:12.709153	2026-07-10 19:00:12.709153	\N
132	2.2	GRAMMAR	speaking	Movie discussion	3	\N	Work in pairs. Write the story (50 words) of a famous movie or piece of literature. Read it to the class. Can anyone guess what it is?	\N	17	1	2026-07-10 19:00:12.71526	2026-07-10 19:00:12.71526	\N
133	2.2	READING & SPEAKING	speaking	Movies and stories	3	\N	Work in pairs. Have you seen either of the movies in 1? Would you like to? Which stories from your country have been made into a movie or comics?	\N	17	1	2026-07-10 19:00:12.722301	2026-07-10 19:00:12.722301	\N
134	2.3	SPEAKING	speaking	Cliff-hanger images	1	a	Work in pairs. Look at the images. What is the connection between the images and the dictionary definition?	\N	18	1	2026-07-10 19:00:19.782367	2026-07-10 19:00:19.782367	\N
135	2.3	SPEAKING	listening	Cliff-hanger images	1	b	Listen and check.	\N	18	1	2026-07-10 19:00:19.790208	2026-07-10 19:00:19.790208	\N
136	2.3	SPEAKING	speaking	TV series	2	\N	Work in groups. Think of five popular TV series in your country. Compare your list with your group and answer the questions.	Why are they so popular? Why do people become addicted to them?\nHave you ever gotten hooked on a TV series? Why/Why not?	18	1	2026-07-10 19:00:19.796986	2026-07-10 19:00:19.796986	\N
137	2.3	READING	reading	Cell phone novels	1	a	Read the article and notice...	1 the two forms of literature that are being compared.\n2 the main similarities between the two forms.\n3 the main differences.	18	1	2026-07-10 19:00:19.804027	2026-07-10 19:00:19.804027	\N
138	2.3	READING	speaking	Cell phone novels	1	b	Work in pairs. Check your answers and discuss the questions.	Do you know if any cell phone novels have been published in your language?\nHave you ever read a cell phone novel? Would you like to? Why/Why not?	18	1	2026-07-10 19:00:19.813446	2026-07-10 19:00:19.813446	\N
139	2.3	GRAMMAR	grammar	Used to & would	1	a	Look at the sentences. Complete them with Yoshi (Y) or Dickens (D).	1 __ writes and publishes his novel little by little.\n2 __ used to write his novels one installment at a time.\n3 __ listens to his readers' opinions.\n4 __ changes the plot.\n5 __ would listen to the reactions of his readers.\n6 __ would drop a storyline if it wasn't successful.	19	1	2026-07-10 19:00:30.044472	2026-07-10 19:00:30.044472	\N
140	2.3	GRAMMAR	grammar	Used to & would	1	b	Read the article in READING 1a again and check your answers. How did you know which was which?	\N	19	1	2026-07-10 19:00:30.047298	2026-07-10 19:00:30.047298	\N
141	2.3	GRAMMAR	grammar	Used to & would	2	a	Underline the verbs in the extracts in 1a that talk about Dickens. What two forms are used? Find more examples of both forms in the article.	\N	19	1	2026-07-10 19:00:30.049435	2026-07-10 19:00:30.049435	\N
142	2.3	GRAMMAR	grammar	Used to & would	2	b	Complete 1-2 in the GRAMMAR PANEL with examples from the article.	\N	19	1	2026-07-10 19:00:30.050999	2026-07-10 19:00:30.050999	\N
143	2.3	GRAMMAR	grammar	Used to & would	3	a	Work in pairs. Look at the GRAMMAR PANEL again. In which sentences can you replace used to with would?	1 I used to love reading comic books when I was younger, but now I find them really boring.\n2 My dad used to read stories to us every night before we went to sleep.\n3 My favorite bedtime stories used to be stories about pirates and robbers and superheroes.\n4 I used to do a lot of reading in bed, but now I just fall asleep!	19	1	2026-07-10 19:00:30.052488	2026-07-10 19:00:30.052488	\N
144	2.3	GRAMMAR	grammar	Used to & would	3	b	Are any of the sentences true for you? Share your ideas with your partner.	\N	19	1	2026-07-10 19:00:30.054001	2026-07-10 19:00:30.054001	\N
145	2.3	PRONUNCIATION: Used to / use to	pronunciation	Used to vs use to	1	a	Listen to this short exchange. How do we pronounce the underlined words? Does the pronunciation change at all?	A Did you use to watch a lot of TV when you were a kid?\nB No, I didn't use to have a TV, but we used to go to the movies a lot.	19	1	2026-07-10 19:00:30.05594	2026-07-10 19:00:30.05594	\N
146	2.3	PRONUNCIATION: Used to / use to	pronunciation	Used to vs use to	1	b	Work in pairs. Listen and repeat. Ask and answer other questions beginning with Did you use to...?	\N	19	1	2026-07-10 19:00:30.058739	2026-07-10 19:00:30.058739	\N
147	2.3	SPEAKING	speaking	Children's books discussion	1	a	Work in pairs. Discuss the questions.	• What are the ingredients of a successful children’s book or TV show?\n• In what ways are they different from books and shows that appeal to adults?\n• Can you think of any books, movies or TV shows that are equally popular with kids and adults? Why do you think that is?	19	1	2026-07-10 19:00:30.069581	2026-07-10 19:00:30.069581	\N
148	2.3	SPEAKING	speaking	Children's books discussion	1	b	Share your answers with the class. Which book or show was the most talked about?	\N	19	1	2026-07-10 19:00:30.072219	2026-07-10 19:00:30.072219	\N
149	2.0	TUNE IN	speaking	Reading habits	1	\N	Work in pairs. Look at the image. What does it say about reading today?	\N	20	1	2026-07-10 19:00:39.284651	2026-07-10 19:00:39.284651	\N
150	2.0	TUNE IN	listening	Reading habits	2	a	Listen to journalist Louise Fryer talking about how we read today. Mark the sentence that best summarizes her opinion.	We read badly because...\n1 there is too much to read.\n2 we read anxiously.\n3 we can't concentrate.	20	1	2026-07-10 19:00:39.294555	2026-07-10 19:00:39.294555	\N
151	2.0	TUNE IN	listening	Reading habits	2	b	What examples of reading online does she mention?	e-mails, weather forecast...	20	1	2026-07-10 19:00:39.30241	2026-07-10 19:00:39.30241	\N
152	2.0	TUNE IN	listening	Personal opinion	3	a	Listen to six people giving their personal opinion about the topic. How many of them agree with Louise, and how many disagree?	\N	20	1	2026-07-10 19:00:39.311579	2026-07-10 19:00:39.311579	\N
153	2.0	TUNE IN	speaking	Personal opinion	3	b	Work in pairs. What do you think? Do you agree or disagree? Why?	\N	20	1	2026-07-10 19:00:39.322002	2026-07-10 19:00:39.322002	\N
154	2.0	FOCUS ON LANGUAGE	functional_language	Agreeing and disagreeing	4	\N	Work in pairs. Match the two parts of the phrases from 3a.	1 I don't agree a that way,\n2 I really see b about that.\n3 I agree c at all.\n4 I don't see it d Louise's point, but...\n5 I couldn't e to some extent,\n6 I'm afraid she's wrong f agree more.	20	1	2026-07-10 19:00:39.339668	2026-07-10 19:00:39.339668	\N
155	2.0	OVER TO YOU	speaking	Expressing reactions	7	a	Look at the opinions. What is your reaction to them? Do you a) strongly agree? b) agree to a point? c) disagree on the whole? d) strongly disagree?	1 Professional athletes are paid too much.\n2 Our schools don't prepare children for the modern world.\n3 The Internet is the best invention of the last 100 years.\n4 Printed books will soon be a thing of the past.	20	1	2026-07-10 19:00:39.350184	2026-07-10 19:00:39.350184	\N
156	2.0	OVER TO YOU	speaking	Comparison and discussion	7	b	Work in pairs. Compare your answers. Explain why you agree or disagree. If you and your partner disagree on any of the points, then try to persuade your partner to change his or her mind.	\N	20	1	2026-07-10 19:00:39.358866	2026-07-10 19:00:39.358866	\N
157	2.0	OVER TO YOU	speaking	Class report	8	\N	Report back to the class on your discussion. Which statement provoked the most disagreement in the class?	\N	20	1	2026-07-10 19:00:39.366632	2026-07-10 19:00:39.366632	\N
158	2.5	TUNE IN	speaking	Photo analysis	1	\N	Look at the photo. What can you see? Who do you think took it? Was it planned or accidental?	\N	21	1	2026-07-10 19:00:49.224519	2026-07-10 19:00:49.224519	\N
159	2.5	TUNE IN	reading	Article check	2	\N	Read a short article from the Lonely Planet website called The story behind the image and check your answers to 1.	\N	21	1	2026-07-10 19:00:49.238369	2026-07-10 19:00:49.238369	\N
160	2.5	TUNE IN	reading	Article comprehension	3	\N	Work in pairs. Read the article again and answer the questions.	1 What did he think of the photo after he took it?\n2 Why did he change it to black and white?\n3 What was people's reaction to it?	21	1	2026-07-10 19:00:49.245191	2026-07-10 19:00:49.245191	\N
161	2.5	PREPARE FOR TASK	grammar	Past verb forms	4	a	Work in pairs. Look at the photo and complete the text with the correct form of the verbs in the past simple, past continuous or past perfect.	two narrow peaks that you can see are called Fitz Roy and Cerro Torre. We (2) ________ (spend) a few weeks hiking around that area and this (3) ________ (be) the end of the last day of our trip. We (4) ________ (drive) back on that desolate highway, and the light (5) ________ (die) when I (6) ________ (catch) a glimpse of the mountain range in the rearview mirror and (7) ________ (think), “I just need to take one last photo of that horizon.” It (8) ________ (turn) out to be the best photo I (9) ________ (take) on that whole trip.	21	1	2026-07-10 19:00:49.249794	2026-07-10 19:00:49.249794	\N
162	2.5	PREPARE FOR TASK	listening	Listening check	4	b	Listen and check.	\N	21	1	2026-07-10 19:00:49.269336	2026-07-10 19:00:49.269336	\N
163	2.5	PREPARE FOR TASK	speaking	Comparing descriptions	5	\N	What similarities can you find between the two descriptions?	\N	21	1	2026-07-10 19:00:49.276055	2026-07-10 19:00:49.276055	\N
164	2.5	TASK	writing	Writing a story	6	\N	Think of a photo you have taken while on vacation that has a good story behind it. Write notes about...	1 the main actions/events in the story.\n2 the background events/actions.\n3 the events that took place at a previous time.\n4 what happened after you took the photo.	21	1	2026-07-10 19:00:49.281205	2026-07-10 19:00:49.281205	\N
165	2.5	TASK	writing	Writing a story	7	\N	Write your own story behind the image. Use your notes from 6.	\N	21	1	2026-07-10 19:00:49.28506	2026-07-10 19:00:49.28506	\N
166	2.5	REPORT BACK	speaking	Sharing stories	8	a	Read your story out loud to the class.	\N	21	1	2026-07-10 19:00:49.288965	2026-07-10 19:00:49.288965	\N
167	2.5	REPORT BACK	listening	Deciding on stories	8	b	Listen to the stories and decide...	a if there are any similarities between the photos and/or the stories that students chose.\nb the most interesting story behind the photo.	21	1	2026-07-10 19:00:49.292228	2026-07-10 19:00:49.292228	\N
168	3.0	ART EVERYWHERE	speaking	Art analysis	1	\N	Work in small groups. Look at the images. What do they show? What do they have in common? What is the link with the title of the unit?	\N	22	1	2026-07-10 19:00:56.303902	2026-07-10 19:00:56.303902	\N
169	3.0	ART EVERYWHERE	speaking	Art galleries and museums	2	a	Complete A in the KEY VOCABULARY PANEL. Discuss the questions.	Are there any sculptures or other works of art on display in the open air in your area? Where are they?\nAre they permanent fixtures or part of a temporary exhibition?\nAre there any art galleries or museums in your town? What kind of art is on display there?\nDo you often visit art galleries and museums? Why/Why not?	22	1	2026-07-10 19:00:56.308258	2026-07-10 19:00:56.308258	\N
170	3.0	ART EVERYWHERE	listening	Art conversations	2	b	Listen to five conversations. Answer the questions.	1 Which image of art are they discussing in each conversation?\n2 Which image don't they discuss?\n3 Do they like them? Why/Why not?	22	1	2026-07-10 19:00:56.312015	2026-07-10 19:00:56.312015	\N
171	3.0	ART	vocabulary	-ed and -ing adjectives	3	a	Complete B in the KEY VOCABULARY PANEL.	\N	23	1	2026-07-10 19:01:03.279094	2026-07-10 19:01:03.279094	\N
172	3.0	ART	vocabulary	-ed and -ing adjectives	3	b	Complete the extracts with adjectives from B.	1 It's ________ how he takes these derelict old buildings and turns them into a work of art.\n2 Yes, but the images are pretty ________ sometimes. I mean, all those rats!\n3 We were really ________ when we came across this last exhibit.\n4 It was so ________-all these people taking photos with their phones!\n5 The kids look really ________, don't they? But actually they're just imitating the statue's pose.\n6 I tell you, this one was so lifelike that the first time you see it, it's ________.	23	1	2026-07-10 19:01:03.310998	2026-07-10 19:01:03.310998	\N
173	3.0	ART	listening	Adjectives	4	a	Listen and check. Which other adjectives could you add to the sentences in 3b?	\N	23	1	2026-07-10 19:01:03.319433	2026-07-10 19:01:03.319433	\N
174	3.0	ART	speaking	Opinions	4	b	Do you agree with the speakers' opinions? Why/Why not?	\N	23	1	2026-07-10 19:01:03.329013	2026-07-10 19:01:03.329013	\N
175	3.1	SPEAKING & READING	speaking	Portrait discussion	1	\N	Work in pairs. Look at images a and b and the dictionary definition. Discuss the questions.	Is there anywhere in your town where people draw or paint on the street? What kind of things do they usually paint or draw?\nHave you ever had a portrait taken or made of you? If so, what kind of portrait was it? Did you like it? Do you still have a copy?	24	1	2026-07-10 19:01:12.575196	2026-07-10 19:01:12.575196	\N
176	3.1	SPEAKING & READING	reading	Portraits analysis	2	a	Look at paragraph 1 of the article and the two portraits c and d and answer the questions.	1 What two things do the portraits have in common?\n2 What do you think the rest of the article is about?	24	1	2026-07-10 19:01:12.58469	2026-07-10 19:01:12.58469	\N
177	3.1	SPEAKING & READING	reading	Portraits artists	2	b	Read the rest of the article. Match the artists to their portraits. What messages are the two artists trying to express?	\N	24	1	2026-07-10 19:01:12.59136	2026-07-10 19:01:12.59136	\N
178	3.1	SPEAKING & READING	reading	Liu and Zhang facts	3	a	Read the article again and match the facts to Liu (L), Zhang (Z) or both (B).	1 He doesn't live in the country of his birth.\n2 The title of his work is easy to understand.\n3 His work is connected with how he sees himself.\n4 His art is a performance that the public can watch.\n5 His work has a very personal significance.\n6 His body becomes part of the artwork.	24	1	2026-07-10 19:01:12.597623	2026-07-10 19:01:12.597623	\N
179	3.1	SPEAKING & READING	speaking	Personal opinion portraits	3	b	In what ways are the two artists similar? In what ways are they different? Which portrait do you prefer (if any)? Why?	\N	24	1	2026-07-10 19:01:12.603964	2026-07-10 19:01:12.603964	\N
180	3.1	GRAMMAR & VOCABULARY	vocabulary	Gradable & absolute adjectives	1	a	Work in pairs. Look at the pairs of adjectives and answer the questions.	interesting/fascinating  good/fantastic  special/unique\n1 Find the adjectives in bold in the article. What is each adjective describing?\n2 Which adjective is stronger in each pair?\n3 What word comes directly before each adjective?	25	1	2026-07-10 19:01:22.281639	2026-07-10 19:01:22.281639	\N
181	3.1	GRAMMAR & VOCABULARY	grammar	Gradable & absolute adjectives	1	b	Complete 1-8 in the GRAMMAR PANEL with words from 1a. Are these rules similar in your language?	\N	25	1	2026-07-10 19:01:22.28675	2026-07-10 19:01:22.28675	\N
182	3.1	GRAMMAR & VOCABULARY	vocabulary	Gradable & absolute adjectives	2	a	Look at the adjectives in the box. Make seven more word pairs with similar meanings. Use a dictionary to help you. Which adjectives would you not normally use to describe a work of art?	bad  beautiful  big  delicious  difficult  exhausted  huge  impossible  small  stunning  tasty  terrible  tiny  tired	25	1	2026-07-10 19:01:22.291812	2026-07-10 19:01:22.291812	\N
183	3.1	GRAMMAR & VOCABULARY	vocabulary	Gradable & absolute adjectives	2	b	Decide which adjectives you can use with...	a very beautiful, ________, ________, ________, ________\nb absolutely stunning, ________, ________, ________, ________	25	1	2026-07-10 19:01:22.295643	2026-07-10 19:01:22.295643	\N
184	3.1	GRAMMAR & VOCABULARY	speaking	Art descriptions	3	a	Work in pairs. Look at pages 22 and 23. Write a sentence about three of the pieces of art you can see, with the adjectives and modifiers in 1 and 2.	\N	25	1	2026-07-10 19:01:22.299738	2026-07-10 19:01:22.299738	\N
185	3.1	GRAMMAR & VOCABULARY	speaking	Art descriptions	3	b	Work with another pair. Read your sentences out loud. Can your partners guess which piece of art you're describing?	\N	25	1	2026-07-10 19:01:22.303301	2026-07-10 19:01:22.303301	\N
186	3.1	PRONUNCIATION	pronunciation	Word stress for emphasis	1	a	Listen and notice the stress on the words in bold.	1 A: Mm, this isn't very nice.\nB: Not very nice? It's totally disgusting!	25	1	2026-07-10 19:01:22.307055	2026-07-10 19:01:22.307055	\N
187	3.1	PRONUNCIATION	pronunciation	Word stress for emphasis	1	b	Listen and repeat.	\N	25	1	2026-07-10 19:01:22.310799	2026-07-10 19:01:22.310799	\N
188	3.1	PRONUNCIATION	grammar	Absolute adjectives	2	a	Complete the sentences using absolute adjectives.	1 A: This is very interesting.\nB: Interesting? It's absolutely ________!\n2 A: I'm very tired after that walk.\nB: Tired? I'm completely ________!\n3 A: Hey, this is pretty good, you know.\nB: Good? It's really ________!	25	1	2026-07-10 19:01:22.314656	2026-07-10 19:01:22.314656	\N
189	3.1	PRONUNCIATION	listening	Absolute adjectives	2	b	Listen and compare your answers. Were they the same?	\N	25	1	2026-07-10 19:01:22.31807	2026-07-10 19:01:22.31807	\N
190	3.1	PRONUNCIATION	pronunciation	Word stress	3	a	Listen again and mark the stress. Practice reading the exchanges in 2a in pairs.	\N	25	1	2026-07-10 19:01:22.321656	2026-07-10 19:01:22.321656	\N
191	3.1	PRONUNCIATION	pronunciation	Word stress	3	b	Write two similar exchanges. Read them in pairs.	\N	25	1	2026-07-10 19:01:22.32512	2026-07-10 19:01:22.32512	\N
192	3.1	SPEAKING	speaking	Graffiti discussion	1	a	Work in pairs. Look at the different examples of graffiti on page 41 and discuss the questions.	• Who do you think painted them?\n• Why do you think they painted them?\n• Which do you think has a personal meaning? Which has a political message? Why?\n• Which could be viewed as art and which as an act of vandalism? Why?	25	1	2026-07-10 19:01:22.328732	2026-07-10 19:01:22.328732	\N
193	3.1	SPEAKING	speaking	Graffiti discussion	1	b	Tell another pair about one of the pieces of graffiti. Can they guess which one it is?	I think this was probably drawn by a very angry person.	25	1	2026-07-10 19:01:22.332348	2026-07-10 19:01:22.332348	\N
194	3.1	SPEAKING	speaking	Graffiti discussion	2	\N	Work in pairs and discuss the questions.	• Is there a lot of graffiti in your neighborhood? If so, where is it? What kind of graffiti is it?\n• Do you think graffiti should be legal or illegal in your country?	25	1	2026-07-10 19:01:22.336397	2026-07-10 19:01:22.336397	\N
195	3.2	LISTENING	listening	Monuments and statues	1	a	Look at the image. What can you see? Where do you think it is? Listen and find out.	\N	26	1	2026-07-10 19:01:32.148957	2026-07-10 19:01:32.148957	\N
196	3.2	LISTENING	listening	Monuments and statues	1	b	Listen again and answer the questions.	1 What is a plinth?\n2 Why is this plinth empty?\n3 What competition was established in 2010?\n4 Who decides the winner?\n5 How long will the first two statues stand on the plinth?	26	1	2026-07-10 19:01:32.152417	2026-07-10 19:01:32.152417	\N
197	3.2	LISTENING	listening	Short-listed entries	2	a	Look at the six short-listed entries a–f and match them to the descriptions.	1 A colorful statue of aristocrat and businessman, Sir George White.\n2 A giant bright blue rooster.\n3 A huge slice of Battenberg cake (a popular cake in the UK, possibly named after a German prince who married into the Royal family) made of bricks.\n4 A mountain landscape in the shape of Britain.\n5 A brass statue of a boy on a rocking horse.\n6 An enormous organ that can be connected to an ATM.	26	1	2026-07-10 19:01:32.155803	2026-07-10 19:01:32.155803	\N
198	3.2	LISTENING	listening	Short-listed entries	2	b	What exactly do you think they represent?	\N	26	1	2026-07-10 19:01:32.158503	2026-07-10 19:01:32.158503	\N
199	3.2	LISTENING	listening	Short-listed entries discussion	3	a	Listen to Estefanía, Luke, Camelia and Miguel talking about the short-listed entries and answer the questions.	1 Which is each person's favorite?\n2 Which of the six works don't they talk about?\n3 Which one do they think will win?	26	1	2026-07-10 19:01:32.16127	2026-07-10 19:01:32.16127	\N
200	3.2	LISTENING	listening	Short-listed entries discussion	3	b	Listen again. According to the speakers, which entry...	1 is easy to relate to?\n2 is just a crazy idea?\n3 has a historical significance?\n4 is similar to another statue nearby?	26	1	2026-07-10 19:01:32.164509	2026-07-10 19:01:32.164509	\N
201	3.2	LISTENING	listening	Phrases about art	4	a	Listen a third time and match the phrases to the four works of art they talk about.	1 “It’s definitely the funniest and by far the most colorful.”\n2 “It’s much more elegant than the bird anyway!”\n3 “I really think it’s the most intelligent one.”\n4 “I think it’s a little more appropriate, that’s all.”\n5 “I think it’s as funny as the cake.”\n6 “It’s not as strange as the others.”	26	1	2026-07-10 19:01:32.168747	2026-07-10 19:01:32.168747	\N
202	3.2	LISTENING	speaking	Opinion discussion	4	b	Work in small groups. Discuss the questions.	• Do you agree with the speakers? Why/Why not?\n• Which piece of art do you think would look best on the plinth? Why?	26	1	2026-07-10 19:01:32.17149	2026-07-10 19:01:32.17149	\N
203	3.2	GRAMMAR	grammar	Descriptions and comparisons	1	\N	Look at the descriptions in LISTENING 4a. Which...	1 describe a difference?\n2 describe a similarity?\n3 say that one thing is better than all the others?	27	1	2026-07-10 19:01:41.843832	2026-07-10 19:01:41.843832	\N
204	3.2	GRAMMAR	grammar	Adjectives and comparatives	2	a	Look at the descriptions again. Underline the adjectives. Which are...	a comparatives (used with more or -ed)?\nb superlatives (used with most or -est)?\nc used with as ... as?	27	1	2026-07-10 19:01:41.850734	2026-07-10 19:01:41.850734	\N
205	3.2	GRAMMAR	grammar	Comparatives	2	b	Fill in blanks 1–2 in A in the GRAMMAR PANEL with sentences from LISTENING 4a.	\N	27	1	2026-07-10 19:01:41.855654	2026-07-10 19:01:41.855654	\N
206	3.2	GRAMMAR	grammar	Comparatives and superlatives	3	a	Look at the sentences in LISTENING 4a again. Which of the words in the box are used with...	a a comparative?\nb superlative?\nc as ... as?	27	1	2026-07-10 19:01:41.861777	2026-07-10 19:01:41.861777	\N
207	3.2	GRAMMAR	grammar	Comparatives and superlatives	3	b	Complete 3–5 in B in the GRAMMAR PANEL.	\N	27	1	2026-07-10 19:01:41.865964	2026-07-10 19:01:41.865964	\N
208	3.2	GRAMMAR	grammar	Mona Lisa versions	4	\N	Look at the three versions of the Mona Lisa and complete the sentences with the correct form of the words in parentheses.	1 I really like the third one—the Banksy. It's ________ in my opinion. (by far/good).\n2 Really? No, I prefer the cartoon. I think it's ________ than the Banksy. (much/original).\n3 I find it really difficult to choose between them. I think the Banksy is ________ the cartoon. (as ... as/original).\n4 I agree, they're both great, but I still prefer the Kucherenko. It's more colorful, I don't know, and just ________ the other two, I suppose. (a little/fun).	27	1	2026-07-10 19:01:41.869377	2026-07-10 19:01:41.869377	\N
209	3.2	GRAMMAR	grammar	Mona Lisa versions	5	a	Look at the three versions of the Mona Lisa again. Which do you prefer? Write three sentences using the structures in the GRAMMAR PANEL to explain your answer.	\N	27	1	2026-07-10 19:01:41.873077	2026-07-10 19:01:41.873077	\N
210	3.2	GRAMMAR	grammar	Mona Lisa versions	5	b	Compare your answers with a partner’s. Do you agree?	\N	27	1	2026-07-10 19:01:41.881557	2026-07-10 19:01:41.881557	\N
211	3.2	SPEAKING	speaking	Sculpture analysis	1	\N	Work in small groups. Think of a sculpture, a fountain or a monument in your town or city, and answer the questions.	• Where is it?\n• What does it look like? Do you like it? Why/Why not?	27	1	2026-07-10 19:01:41.886057	2026-07-10 19:01:41.886057	\N
212	3.2	SPEAKING	speaking	Sculpture proposal	2	a	Work in groups. Your local city council wants to place a new sculpture in one of the main squares in your town. Your group is going to put forward a proposal. Think about the questions.	• Where do you think it should be?\n• What should the sculpture represent?\n• What kind of sculpture you think would look best?	27	1	2026-07-10 19:01:41.889537	2026-07-10 19:01:41.889537	\N
213	3.2	SPEAKING	speaking	Sculpture proposal	2	b	Present your ideas to the class. Vote on the most original idea and the most traditional idea.	\N	27	1	2026-07-10 19:01:41.893675	2026-07-10 19:01:41.893675	\N
214	3.3	READING	reading	Sketches and subway	1	\N	Work in pairs. Look at the sketches and answer the questions.	• Where do you think the people are?\n• What are they doing and thinking?\n• In what way are these sketches different from photos? Do they give us more or less information about the people?	28	1	2026-07-10 19:01:49.346973	2026-07-10 19:01:49.346973	\N
215	3.3	READING	reading	Newspaper article	2	a	Read the newspaper article about the sketches and answer the questions.	1 Who drew them?\n2 Where were they drawn?\n3 What's unusual about them?	28	1	2026-07-10 19:01:49.349783	2026-07-10 19:01:49.349783	\N
216	3.3	READING	reading	Newspaper article	2	b	Read the article again and match a-f to blanks 1-6 in the article.	a What do you look for in a face?\nb What does technology add to your work?\nc What are the problems of working on the subway?\nd What do you do with the sketches afterward?\ne What's the best part of your work?\nf Why don't you warn people that you are going to draw them?	28	1	2026-07-10 19:01:49.352112	2026-07-10 19:01:49.352112	\N
217	3.3	READING	reading	Interview summary	3	a	Complete the summary of the interview.	Eric Molinsky loves sketching (1) _________ who are traveling on the (2) _________. He uses his (3) _________ so that no one will notice what he's doing because he doesn't want people to (4) _________ and look unnatural. He uploads the sketches to his (5) _________. He has more than (6) _________ faces on his site. These faces represent for him the many faces of (7) _________.	28	1	2026-07-10 19:01:49.355151	2026-07-10 19:01:49.355151	\N
218	3.3	READING	speaking	Discussion	3	b	Work in pairs. Discuss the questions.	• What do you think of Eric Molinsky's hobby?\n• Would you be happy for him to sketch you on the subway? Why/Why not?	28	1	2026-07-10 19:01:49.357874	2026-07-10 19:01:49.357874	\N
219	3.3	GRAMMAR	grammar	Adjectives and adverbs	1	a	Work in pairs. Look at the extracts from the interview. What do the words in bold refer to?	1 ... it feels right for my work.\n2 ... they come out really well.\n3 It works beautifully.\n4 But most people are friendly or they don't notice.\n5 People are coming in and out, and it can get crowded.\n6 I have to draw them really fast.\n7 It's not easy, every day it's like a hunt—a hunt for a great-looking face.\n8 ... people can easily go and check if they're there!	28	1	2026-07-10 19:01:49.360141	2026-07-10 19:01:49.360141	\N
220	3.3	GRAMMAR	grammar	Adjectives and adverbs	1	b	Read A in the GRAMMAR PANEL. Look at the sentences in 1a again and find all the examples of a) adjectives and b) adverbs of manner.	\N	28	1	2026-07-10 19:01:49.362587	2026-07-10 19:01:49.362587	\N
221	3.3	ADJECTIVES & ADVERBS	grammar	Adverbs of manner	2	a	Look at your answers to 1b and answer the questions.	1 Which two adverbs can also be used as adjectives?\n2 Which adjective can also be used as an adverb?\n3 Which word ending in -ly is not an adverb?\n4 What is the adverb form of good?	29	1	2026-07-10 19:01:57.11055	2026-07-10 19:01:57.11055	\N
222	3.3	ADJECTIVES & ADVERBS	grammar	Adverbs of manner	2	b	Complete 1-5 in B in the GRAMMAR PANEL.	\N	29	1	2026-07-10 19:01:57.118492	2026-07-10 19:01:57.118492	\N
223	3.3	ADJECTIVES & ADVERBS	grammar	Sketchbook app	3	\N	Choose the correct option to complete this short description of the Sketchbook app.	(1) great / greatly!\n(2) quick / quickly\n(3) easy / easily\n(4) careful / carefully\n(5) confident / confidently\n(6) good / well\n(7) fast / fastly\n(8) enormous / enormously\n(9) professional / professionally\n(10) impressed / impressedly	29	1	2026-07-10 19:01:57.127176	2026-07-10 19:01:57.127176	\N
224	3.3	ADJECTIVES & ADVERBS	writing	Interesting apps	4	a	Do you have an interesting app on your phone or computer? Write three or four sentences explaining the app. Use as many adjectives and adverbs as you can.	\N	29	1	2026-07-10 19:01:57.13831	2026-07-10 19:01:57.13831	\N
225	3.3	ADJECTIVES & ADVERBS	speaking	Comparing apps	4	b	Compare your answers with a partner. Have you ever tried your partner's app?	\N	29	1	2026-07-10 19:01:57.152464	2026-07-10 19:01:57.152464	\N
226	3.3	SPEAKING & VOCABULARY	listening	People watching	1	a	Listen to Toni talking about the café in the photo. What does she like about it? What does she like doing there?	\N	29	1	2026-07-10 19:01:57.158721	2026-07-10 19:01:57.158721	\N
227	3.3	SPEAKING & VOCABULARY	vocabulary	Sentence matching	1	b	Listen again and match the two parts of the sentences.	1 I love to sit here drinking coffee and watching\n2 ... a huge variety of people walk down this street, all going\n3 It's so much more interesting than just staring\n4 Sometimes I watch the people at the next table and tune in\n5 I know I shouldn't really listen in\n6 ... but usually they're simply passing\n\na ... about their business.\nb ... on other people's conversations...\nc ... to their conversations.\nd ... the time of day...\ne ... the world go by.\nf ... into space.	29	1	2026-07-10 19:01:57.161144	2026-07-10 19:01:57.161144	\N
228	3.3	SPEAKING & VOCABULARY	vocabulary	Phrases in context	2	a	Work in pairs. Look at the phrases in bold in 1b. Can you guess what they mean?	\N	29	1	2026-07-10 19:01:57.162836	2026-07-10 19:01:57.162836	\N
229	3.3	SPEAKING & VOCABULARY	vocabulary	Check meaning	2	b	Check your answers on page 41. Do you have any similar phrases in your language?	\N	29	1	2026-07-10 19:01:57.164598	2026-07-10 19:01:57.164598	\N
230	3.3	SPEAKING & VOCABULARY	speaking	People watching discussion	3	\N	Work in small groups. Discuss the questions.	• Do you enjoy people watching? Why/Why not?\n• Where are the best places to watch the world go by in your town?\n• Think of the last time you were in one of those places. Who else was there? What were they doing? Did you see anyone particularly interesting?	29	1	2026-07-10 19:01:57.166222	2026-07-10 19:01:57.166222	\N
231	3.0	TUNE IN	speaking	Building design	1	a	Work in pairs. Look at the building in the photo. Do you like the design? Why/Why not?	\N	30	1	2026-07-10 19:02:07.505531	2026-07-10 19:02:07.505531	\N
232	3.0	TUNE IN	reading	Building design	1	b	Read a short text on page 41 and find out more about the building	\N	30	1	2026-07-10 19:02:07.515843	2026-07-10 19:02:07.515843	\N
233	3.0	TUNE IN	listening	Building project opinions	2	a	Listen to Frank, Jane, Adrian and Sally talking about the building. How many people are in favor of the project, and how many are against the project?	\N	30	1	2026-07-10 19:02:07.527182	2026-07-10 19:02:07.527182	\N
234	3.0	TUNE IN	listening	Building project opinions	2	b	Listen again. Who says the following? Complete the chart.	1 is embarrassing.\n2 ruined a beautiful place.\n3 is modern like its contents.\n4 is a work of art in itself.\n5 is a topic of conversation.\n6 is a technological wonder.\n7 is not functional.	30	1	2026-07-10 19:02:07.534325	2026-07-10 19:02:07.534325	\N
235	3.0	TUNE IN	speaking	Building design	3	\N	Work in pairs. Compare your answers and answer the questions.	• What do you think about the building?\n• Do you know of any other controversial modern public buildings? Do you like or dislike them?	30	1	2026-07-10 19:02:07.543736	2026-07-10 19:02:07.543736	\N
236	3.0	FUNCTIONAL LANGUAGE: ADDING EMPHASIS	grammar	Adding emphasis	5	a	Work in pairs. Match 1–5 to a–e to make phrases.	1 What I like is that it\n2 The best thing about it\n3 The most important thing\n4 The problem is that\n5 What I hate about it\n\na about it is that\nb is that people are talking\nc is the location\nd matches what's inside\ne the architect is famous	30	1	2026-07-10 19:02:07.553821	2026-07-10 19:02:07.553821	\N
237	3.0	FUNCTIONAL LANGUAGE: ADDING EMPHASIS	listening	Adding emphasis	5	b	Listen and check.	\N	30	1	2026-07-10 19:02:07.558926	2026-07-10 19:02:07.558926	\N
238	3.0	FUNCTIONAL LANGUAGE: ADDING EMPHASIS	grammar	Adding emphasis	6	a	Make the sentences more emphatic. Begin with the word in parentheses.	1 I don't like pop music much. All the tracks sound the same. (What I don't like about pop music is...)\n2 I love traveling by plane, but I hate the jet lag. (The only problem with traveling...)\n3 It's a good idea to go shopping with somebody else so you get a second opinion. (The best thing about going shopping...)	30	1	2026-07-10 19:02:07.563539	2026-07-10 19:02:07.563539	\N
239	3.0	FUNCTIONAL LANGUAGE: ADDING EMPHASIS	grammar	Adding emphasis	6	b	Change the sentences so that they are true for you.	\N	30	1	2026-07-10 19:02:07.567783	2026-07-10 19:02:07.567783	\N
240	3.0	OVER TO YOU	speaking	Expressing opinions	7	\N	Work in pairs. Look at the list. Write a sentence giving your opinion on five of the topics.	• Sundays\n• the English language\n• art galleries\n• summer vacations\n• politicians\n• cell phones\n• fast food\n• professional athletes\n• pets\n• beaches	30	1	2026-07-10 19:02:07.572455	2026-07-10 19:02:07.572455	\N
241	3.0	OVER TO YOU	speaking	Expressing opinions	8	a	Show your sentences to another pair. Find the topics where there was most disagreement.	\N	30	1	2026-07-10 19:02:07.577386	2026-07-10 19:02:07.577386	\N
242	3.0	OVER TO YOU	speaking	Expressing opinions	8	b	Try to convince the others to change their mind. Be emphatic! Report back to the class.	\N	30	1	2026-07-10 19:02:07.58162	2026-07-10 19:02:07.58162	\N
243	3.5	TUNE IN	speaking	Class survey photos	1	\N	Work in pairs. Look at the photo. Discuss the questions.	Where are the people? What do you think they’re talking about?\nWhen was the last time you were asked to answer a survey? What was it about?\nDid you stop and answer the questions or did you walk on by? Why?	31	1	2026-07-10 19:02:17.457556	2026-07-10 19:02:17.457556	\N
244	3.5	TUNE IN	listening	Survey conversation	2	a	Listen to the woman talking to a few people on the street and answer the questions.	1 How many people does the woman approach?\n2 How many of them agree to complete the survey?\n3 How do they get if they complete the survey?	31	1	2026-07-10 19:02:17.466988	2026-07-10 19:02:17.466988	\N
245	3.5	TUNE IN	listening	Survey conversation	2	b	Listen again and write in the answers that you hear.	\N	31	1	2026-07-10 19:02:17.474864	2026-07-10 19:02:17.474864	\N
246	3.5	PREPARE FOR TASK	speaking	Writing survey questions	3	a	Work in pairs. Write the other questions in the survey using the prompts.	\N	31	1	2026-07-10 19:02:17.482749	2026-07-10 19:02:17.482749	\N
247	3.5	PREPARE FOR TASK	speaking	Writing survey questions	3	b	Which question in 3a do options a-d relate to?	a photos of my friends and family\nb landscapes\nc vacation snapshots\nd action photos, sporting events, etc.	31	1	2026-07-10 19:02:17.490582	2026-07-10 19:02:17.490582	\N
248	3.5	PREPARE FOR TASK	speaking	Survey options	4	\N	Write four options for each of the other questions in 3a.	\N	31	1	2026-07-10 19:02:17.498245	2026-07-10 19:02:17.498245	\N
249	3.5	PREPARE FOR TASK	listening	Complete survey questions	5	\N	Listen again to the woman asking people if they would be happy to complete her survey. Complete her questions.	1 Excuse me, do __________________________________________?\n2 Excuse me, I wonder ______________________________________?\n3 Good morning, do ________________________________________?\n4 OK, thank you. Just _______________________________________	31	1	2026-07-10 19:02:17.50574	2026-07-10 19:02:17.50574	\N
250	3.5	TASK	speaking	Interviewing classmates	6	\N	Work in pairs. Interview three or four different classmates using the survey questions and options you have practiced.	\N	31	1	2026-07-10 19:02:17.514551	2026-07-10 19:02:17.514551	\N
251	3.5	TASK	reading	Survey results report	7	a	Read the short report from the survey in 2a. Are the results similar to the results in your surveys?	\N	31	1	2026-07-10 19:02:17.522231	2026-07-10 19:02:17.522231	\N
252	3.5	TASK	speaking	Presenting results	7	b	Compare your results and prepare to present them to the class. Use the phrases in bold to help you prepare your report.	\N	31	1	2026-07-10 19:02:17.529008	2026-07-10 19:02:17.529008	\N
253	3.5	REPORT BACK	speaking	Presenting results	8	\N	Present your results to the class.	\N	31	1	2026-07-10 19:02:17.53523	2026-07-10 19:02:17.53523	\N
254	3.5	REPORT BACK	writing	Summarizing results	9	\N	Compare the results from all the pairs and write a short paragraph about the information you have gathered. Use the text in 7a to help you.	\N	31	1	2026-07-10 19:02:17.54127	2026-07-10 19:02:17.54127	\N
\.


--
-- Data for Name: book_panel; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_panel (id, title, theme, sub_theme, instruction, content, book_page, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	KEY VOCABULARY	Communication	A Types of communication	Match the expressions in the box to the photos. You can match more than one expression to each photo.	body language\nfacial expressions\nhand gestures\ninstant messaging\nposters & signs\nsign language\nsocial networks\nthe written word	3	1	2026-07-10 18:58:13.49811	2026-07-10 18:58:13.49811	\N
2	KEY VOCABULARY	Communication	B Say, tell, speak	Complete the word maps with say, tell or speak.	1. your mind, two languages, for yourself, English very well, very quietly, loudly, fast, in public, a room full of people, TO, my friend, my mother on the phone\n2. hello, something interesting/important, good-bye, yes, no, TO ME, a lot about something, what you think, how you feel\n3. the truth, ME, what you want, a lie, HIM, what to do, a story, THEM, what you're thinking, a joke, SOMEBODY, yourself, ABOUT, your vacation, your family	3	1	2026-07-10 18:58:13.538227	2026-07-10 18:58:13.538227	\N
3	NOTICE	SAY & TELL	\N	\N	We use say + to + personal pronoun, e.g., What did he say to you?\nWe use tell + personal pronoun, e.g., Tell me what the problem is.	3	1	2026-07-10 18:58:13.541882	2026-07-10 18:58:13.541882	\N
4	TENSE REVIEW	Grammar	Present simple or present continuous	\N	A Present simple or present continuous?\na We use the present simple to refer to habits and routines. (1) \nb We use the present simple to refer to repeated actions or situations. I go to dance class every day.\nc We use the present simple to describe things that are generally true. Human communication is too complex.\nd We use the present continuous to talk about things that are currently happening. (2)	5	1	2026-07-10 18:58:30.553508	2026-07-10 18:58:30.553508	\N
5	TENSE REVIEW	Grammar	Past simple or present perfect	\N	B Past simple or present perfect?\ne We use the past simple to talk about completed actions in the past. (3) \nf We use the past simple to talk about habitual actions in the past. I went to dance class every day.\ng We use the present perfect to talk about experiences we have had in our life up to the present. We do not necessarily say when they happened. (4)	5	1	2026-07-10 18:58:30.560803	2026-07-10 18:58:30.560803	\N
6	TENSE REVIEW	Grammar	Future: will or going to	\N	C Future: will or going to?\nh We use both will and going to to make predictions. (5) make us more introverted.\ni We use going to to talk about intentions and plans. (6)	5	1	2026-07-10 18:58:30.567804	2026-07-10 18:58:30.567804	\N
7	QUESTION FORMS	Grammar	\N	\N	Yes/no questions do not need a question word. The auxiliary verb always comes (1)before / after the subject except with questions with the verb to be.\nDid you make the sign?\nWh- questions begin with a question word such as how, which, what, who, why, where and when. Some wh- question words can also combine with other words. Add more examples.\nHow much/many/old/(2) __________ ...?\nWhat sort/kind/type...?\nIn object questions the question word is the object of the verb.\nWhat did you make? We made a sign.\nThe auxiliary always comes (3)before / after the subject. We use do and did to form questions in the present and past simple.\nSubject questions start with who, what, which or how much/many. The question word is the subject of the verb.\nWho made the sign? We made the sign.\nThere is no subject pronoun and we (4)need / don't need to use do/did in the present and past simple.\nWho made the sign? NOT Who they did make the sign?\nSee page 36 for grammar reference and more practice.	7	1	2026-07-10 18:58:50.154992	2026-07-10 18:58:50.154992	\N
8	NOTICE	Questions ending with prepositions	\N	\N	We often put prepositions at the end of a question.\nWhat is he talking about? Who do you live with?	7	1	2026-07-10 18:58:50.159681	2026-07-10 18:58:50.159681	\N
9	STATE & DYNAMIC VERBS	Grammar	A State verbs	\N	State verbs describe an emotion, a thought or a sense. They are not usually used in a continuous form.\nI don't see very well without glasses NOT I'm not seeing very well without glasses.\nWe often use the verbs of the senses (see, hear, smell, taste, feel) with can or could.\nI can see some light and color.\n(1)\n(2)	9	1	2026-07-10 18:59:06.603674	2026-07-10 18:59:06.603674	\N
10	STATE & DYNAMIC VERBS	Grammar	B Dynamic verbs	\N	Dynamic (or action) verbs describe actions we decide to perform. We use dynamic verbs with continuous verb forms to talk about an action that is in progress.\nI'm listening to a really interesting podcast.\n(3)\n(4)\nSome verbs can be both state verbs and dynamic verbs, e.g., see.\nI can't see without glasses. (see = sense)\nI'm seeing Jane on Friday. (see = meet)\nSee page 36 for grammar reference and more practice.	9	1	2026-07-10 18:59:06.614146	2026-07-10 18:59:06.614146	\N
11	NOTICE	HOW'S EVERYTHING? / HOW'S IT GOING?	\N	\N	These are common conversation starters. They are more informal than How are you?	10	1	2026-07-10 18:59:15.216298	2026-07-10 18:59:15.216298	\N
12	STRESS	Pronunciation	\N	Listen to the statements and questions in 6a. Underline the main stress. Listen again and repeat with the correct stress.	1.8 Listen to the statements and questions in 6a.\nUnderline the main stress.\nDo you know something?\nListen again and repeat with the correct stress.	10	1	2026-07-10 18:59:15.224546	2026-07-10 18:59:15.224546	\N
13	KEY VOCABULARY	Reading	A Types of reading material	Match at least one word or phrase to images a–f.	blog dictionary e-mail encyclopedia instruction manual letter magazine newspaper notes novel reference book script (for movie or play) short story travel guide text message	13	1	2026-07-10 18:59:38.177469	2026-07-10 18:59:38.177469	\N
14	KEY VOCABULARY	Reading	B Reading verbs	Complete the definitions using the verbs in 3a.	leaf/___ through a newspaper, notes, a novel: to look at something quickly and superficially, sometimes just turning the pages\n___ at pages/the lines of a book: to look at something for a very short time\n___ out loud a speech, a statement: to speak the words aloud as you read\n___ out a piece of news, a news story, a text message: to look at something to see what information it can give you\n___ up information, a word in a dictionary to use a reference book or website to find specific information\n___ down a screen, a text message: to use a cursor, your finger or mouse to move the text down on a screen	13	1	2026-07-10 18:59:38.197407	2026-07-10 18:59:38.197407	\N
15	SPEAKING & VOCABULARY	Books & genres	\N	Work in pairs. Add the words in the box to the two groups. Use a dictionary to help you.	1 Different kinds of books\n2 Different types or genres of fiction (novels or movies)\n\nWords:\naction/adventure, anthology, autobiography, biography, comedy, crime/detective, fiction, historical, horror, humorous, love story, manual, nonfiction, novel, picture book, cookbook, romantic, science fiction, storybook, textbook, war	14	1	2026-07-10 18:59:46.391962	2026-07-10 18:59:46.391962	\N
16	PAST SIMPLE & PAST CONTINUOUS	Grammar	\N	\N	We often use the (1) __________ to talk about single events, especially when we are telling a story. She paid her bill and left.\nWe often use the (2) __________ to explain the background to the story and describe a situation or action that was in progress at the time. She was waiting under a tree.\nSee page 37 for grammar reference and more practice.	15	1	2026-07-10 18:59:56.575605	2026-07-10 18:59:56.575605	\N
17	PAST PERFECT & PAST SIMPLE	Past perfect	A	\N	We use the past perfect to\n• talk about an event that happened before a point in time in the past\n(1) ____________\n• describe a situation that was in progress up to a point in time in the past.\n(2) ____________\nWe form the past perfect with had + past participle.	17	1	2026-07-10 19:00:15.250016	2026-07-10 19:00:15.250016	\N
18	PAST PERFECT & PAST SIMPLE	Past perfect & past simple	B	\N	We use the past simple to describe the main events in the story. We use the past perfect to explain that one event happened before another.\n(3) ____________\nSee page 37 for grammar reference and more practice.	17	1	2026-07-10 19:00:15.258895	2026-07-10 19:00:15.258895	\N
19	CLIFF-HANGER	Vocabulary	\N	\N	1 a melodramatic TV series in which each episode ends in suspense\n2 a situation full of suspense at the end of a chapter in a book, a scene in a movie or an episode in a radio or TV series\n3 a dramatic situation where the outcome is uncertain up to the very end	18	1	2026-07-10 19:00:21.888136	2026-07-10 19:00:21.888136	\N
20	USED TO & WOULD	Grammar	\N	\N	We can use both used to and would to talk about things that happened regularly in the past or past habits.\nExamples:\n(1) __________________________________\n(2) __________________________________\nWe can use used to to talk about feelings, states and actions.\nThey used to read them over and over. (action)\nPeople used to be anxious to read the next installment. (feeling)\nWe can only use would with actions, not with feelings.\nFeelings: They used to love the stories. NOT They would love the stories.\nActions: They would wait anxiously for the next installment. They used to wait anxiously for the next installment.\nNOTE: In questions and negative forms there's no d at the end of use.\nDid you use to read a lot as a child?\nNo, I didn't use to like reading very much.\nSee page 37 for grammar reference and more practice.	19	1	2026-07-10 19:00:32.210467	2026-07-10 19:00:32.210467	\N
21	STRESS	Agreeing and disagreeing	\N	Listen to the phrases in 4. Underline the main stress. Listen again and repeat with the correct stress.	I don't agree at all.	20	1	2026-07-10 19:00:41.260362	2026-07-10 19:00:41.260362	\N
22	KEY VOCABULARY	Art	A Works of art	Match the words in the box to images a-f. There is one extra term.	drawing exhibition graffiti installation mural painting photo sculpture street art statue work of art	23	1	2026-07-10 19:01:06.181865	2026-07-10 19:01:06.181865	\N
23	KEY VOCABULARY	Art	B -ed and -ing adjectives	\N	-ed and -ing adjectives are formed from verbs that describe emotional reactions.\ninterest interested interesting\nAdjectives that end in -ed describe emotional reactions and responses. They usually follow a linking verb such as be, seem, look.\nI was interested in the photos.\nAdjectives that end in -ing describe the thing, place or person that provokes the emotion.\nThe photos were interesting.	23	1	2026-07-10 19:01:06.185114	2026-07-10 19:01:06.185114	\N
24	NOTICE	ADJECTIVES	\N	\N	We can combine a noun and an -ing verb to create adjectives.\nthought-provoking\nbreathtaking\nmind-blowing\nUse each adjective to describe one of the works of art.	23	1	2026-07-10 19:01:06.188866	2026-07-10 19:01:06.188866	\N
25	portrait	Vocabulary	\N	\N	noun [countable] a painting, drawing or photograph of a person, especially their face. Portraits can take many forms, e.g., a painting, a photo or a caricature.	24	1	2026-07-10 19:01:14.57778	2026-07-10 19:01:14.57778	\N
26	GRADABLE & ABSOLUTE ADJECTIVES	Gradable & absolute adjectives	A Gradable & absolute adjectives	\N	Some adjectives are gradable—we can make them stronger or weaker: it's fairly nice (weak), it's very nice (strong).\nExamples: good, (1) __________ (2) __________\nOther adjectives are absolute—the quality either exists or it doesn't. They cannot be made stronger or weaker.\nExamples: fascinating, (3) __________ and (4) __________.	25	1	2026-07-10 19:01:24.786942	2026-07-10 19:01:24.786942	\N
27	GRADABLE & ABSOLUTE ADJECTIVES	Gradable & absolute adjectives	B Modifying gradable & absolute adjectives	\N	To make gradable adjectives stronger use very or (5) __________ : very small Chinese characters\nTo make gradable adjectives weaker use pretty or fairly: It's fairly difficult.\nTo emphasize absolute adjectives use (6) __________ , absolutely or completely: I find this work absolutely fascinating.\nWe cannot use absolutely, completely and (7) __________ with gradable adjectives. We cannot use (8) __________ , very and fairly with absolute adjectives.\nWe can use really to add information about both gradable and absolute adjectives.\nIt's really nice. It's really stunning.	25	1	2026-07-10 19:01:24.791326	2026-07-10 19:01:24.791326	\N
28	AS ... AS, COMPARATIVES & SUPERLATIVES	As ... as	A	\N	We use as + adjective + as to show the similarity between two things.\n(1)\nWe use not as + adjective + as to show the difference.\n(2)	27	1	2026-07-10 19:01:44.245762	2026-07-10 19:01:44.245762	\N
29	AS ... AS, COMPARATIVES & SUPERLATIVES	Modifying comparatives & superlatives	B	\N	• Comparative adjectives\nWe use a lot, much, far to show a big difference.\n(3)\nWe use a little, a little bit, slightly to show a small difference.\n(4)\n• Superlative adjectives\nWe use by far to emphasize a superlative adjective.\n(5)	27	1	2026-07-10 19:01:44.251864	2026-07-10 19:01:44.251864	\N
30	NOTICE FUN	Vocabulary	\N	\N	We can use fun as both a noun and an adjective.\nThis is great fun. (noun)\nIt was a fun day out. (adjective)\nWe say more fun/most fun.\nPlaying tennis is much more fun than watching it!	27	1	2026-07-10 19:01:44.255642	2026-07-10 19:01:44.255642	\N
31	ADJECTIVES & ADVERBS	Adjectives & adverbs of manner	\N	\N	Adjectives add information about people, things or places. They can come...\n• before a noun: He has a great beard.\n• after a linking verb (be, get, look, feel): It sounds strange, but it's true.\nAdverbs of manner add information about how we do something. They usually come after the verb they are describing. It works beautifully.\nNOTE: We do not use adverbs after linking verbs: It sounds beautiful. NOT It sounds beautifully.	29	1	2026-07-10 19:01:59.664599	2026-07-10 19:01:59.664599	\N
32	ADJECTIVES & ADVERBS	-ly adverbs	\N	Complete the blanks	Many adverbs of manner are formed by adding -ly to an adjective:\nbeautiful → (1) ___________ , easy → easily, gentle → gently\nNOTE: Not all words that end in -ly are adverbs. Some are adjectives: (2) ___________, lovely, etc.\nSome adjectives and adverbs are the same.\n(3) ___________, (4) ___________, late, early.\nI had a late night. (adjective) I worked late that night. (adverb)\nNOTE: The adverb form of good is (5) ___________.\nSee page 38 for grammar reference and more practice.	29	1	2026-07-10 19:01:59.667498	2026-07-10 19:01:59.667498	\N
33	STRESS	Functional language	Adding emphasis	Listen again to the statements in 5a. Underline the main stress. What I like is that it matches what's inside. Listen again and repeat with the correct stress.	3.9 Listen again to the statements in 5a.\nUnderline the main stress.\nWhat I like is that it matches what's inside.\nListen again and repeat with the correct stress.	30	1	2026-07-10 19:02:09.452077	2026-07-10 19:02:09.452077	\N
\.


--
-- Data for Name: book_unit; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.book_unit (id, number, title, grammar, vocabulary, reading_listening, pronunciation, book_page, book_id, created_at, updated_at, deleted_at) FROM stdin;
1	1	COMMUNICATION	{"Tense review","Question forms","State & dynamic verbs"}	{Communication,Senses}	{"Describing photographs","Behind the Curtain","Four interviews"}	{"-es & -ed verb endings","Intonation: Stress"}	2	1	2026-07-10 18:57:58.958833	2026-07-10 18:57:58.958833	\N
2	2	A GOOD READ	{"Past simple & past continuous","Past perfect & past simple","Used to & would"}	{Reading,"Books & genres"}	{"Two extracts from a novel","Descriptions of three plays","Cell Phone Novels","Discussing four novels","Talking about manga"}	{"Used to/use to","Intonation: Stress"}	12	1	2026-07-10 18:57:58.966527	2026-07-10 18:57:58.966527	\N
3	3	ART EVERYWHERE	{"Gradable & absolute adjectives","As ... as, comparatives & superlatives","Adjectives & adverbs"}	{Art,"Gradable & absolute adjectives","People watching"}	{"A Portrait Is Worth a Thousand Words","A newspaper article","Describing artwork"}	{"Word stress for emphasis","Intonation: Stress"}	22	1	2026-07-10 18:57:58.972374	2026-07-10 18:57:58.972374	\N
\.


--
-- Data for Name: bot; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.bot (id, phone, name, prompt, model, created_at, updated_at, deleted_at) FROM stdin;
1	51936081148	ICPNA STUDIO	### [REGLA DE ORO DE OBLIGADO CUMPLIMIENTO]\n¡NO PUEDES ENVIAR RESPUESTAS DE TEXTO PLANO DIRECTAMENTE!\nToda interacción con el usuario debe realizarse a través de una herramienta (tool).\n- Para hablar, responder, saludar o explicar: Llama a la herramienta "send_text_message" con tu mensaje como parámetro.\n- Para enviar un audio de libro: Llama a "send_audio_libro_message".\n- Para enviar un audio general (transcripción/voz): Llama a "send_audio_message".\n- Para enviar imágenes: Llama a "send_image_libro_message".\n- Queda totalmente prohibido responder directamente con texto conversacional fuera de una herramienta. Tu única salida válida debe ser la ejecución de una herramienta.\n\nEres "ICPNA STUDIO", un asistente virtual educativo y avanzado, exclusivo para WhatsApp, diseñado para estudiantes del Instituto Cultural Peruano Norteamericano (ICPNA). Tu misión es facilitar el estudio desde dispositivos móviles, entregando el contenido del libro virtual (audios, transcripciones, traducciones y respuestas) directamente en el chat, de forma rápida, cómoda e interactiva.\n\n### 1. ROL Y PERSONALIDAD\n- Eres un compañero de estudio inteligente, paciente y motivador.\n- Entiendes perfectamente el contexto académico del ICPNA (preparación para el ALP, Student Book, Workbook, grammar, vocabulary, etc.).\n- Tu tono es amigable y cercano, pero directo al grano. Los usuarios de móvil quieren respuestas rápidas, no saludos largos.\n- Te comunicas en un español claro, pero utilizas términos en inglés con naturalidad según el contexto de la clase.\n\n### 2. CAPACIDADES Y FLUJO DE TRABAJO\nEstás conectado a un sistema que te permite procesar y enviar Texto, Audio e Imágenes mediante herramientas.\n- **Audios del Libro:** El usuario te pedirá audios por su numeración (ej. "1.7" o "5.3"). Llama a "send_audio_libro_message" para enviar el archivo de audio correspondiente.\n- **Transcripciones y Traducciones:** Cuando el usuario lo solicite, llama a "send_text_message" con el texto exacto del audio en inglés. Si pide ayuda extra, envíale la traducción en español llamando a "send_text_message".\n- **Respuestas de Ejercicios:** El usuario usará coordenadas: Página + Sección + Letra/Número (ej. "Página 17, sección 1, pregunta A"). Busca en tu base de conocimiento y proporciona la respuesta exacta o la explicación de la gramática llamando a "send_text_message".\n- **Análisis de Imágenes:** Si el usuario te envía la foto de su libro físico, analiza la imagen, identifica de qué página y ejercicio se trata, y pregúntale qué recurso necesita llamando a "send_text_message".\n- **Notas de Voz:** Si el usuario te envía un audio hablando, se procesará y se te enviará como texto. Responde a su petición usando la herramienta adecuada.\n\n### 3. REGLAS ESTRICTAS DE FORMATO (EXCLUSIVO WHATSAPP)\nLos parámetros de texto que envíes a "send_text_message" deben estar formateados exclusivamente para WhatsApp. El Markdown tradicional de doble asterisco (**negrita**) está PROHIBIDO porque rompe la interfaz de WhatsApp. Usa:\n- Negritas: usa un solo asterisco. Ejemplo: *texto* (PROHIBIDO usar **texto**).\n- Cursivas: usa guion bajo. Ejemplo: _texto_.\n- Tachado: usa virgulilla. Ejemplo: ~texto~.\n- Código/Monoespaciado: usa tres acentos graves. Ejemplo: ```texto```.\n- Enlaces y Links: PROHIBIDO usar hipervínculos estilo [texto](url). Debes enviar la URL directa, cruda y limpia. Ejemplo: https://myenglishlab.com\n- Listas: Usa guiones simples (-) o números (1., 2.).\n- Estructura Visual: Mantén párrafos muy cortos (máximo 3-4 líneas). Intercala emojis 🎧📖✍️ para darle dinamismo, pero sin saturar.\n\nRECUERDA: Toda respuesta debe encapsularse en una llamada a una herramienta. Si respondes con texto sin invocar una herramienta, el usuario nunca recibirá tu mensaje.	gemini	2026-07-10 18:53:48.706855	2026-07-10 18:53:48.706855	\N
\.


--
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.chats (id, enabled, remote, bot_id, user_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: comandos_ejecutados; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.comandos_ejecutados (id, nombre, ejecutado_en) FROM stdin;
1	v002_001_set_users.sql	2026-07-10 19:27:57.97189
\.


--
-- Data for Name: instance; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.instance (id, bot_id, whatsapp_type, provider_type, business_id, phone_number_id, display_phone_number, waba_id, token, created_at, updated_at, deleted_at) FROM stdin;
1	1	business	meta	1793146138173503	909519762251702	+51987654321	1221915833237632	EAAPOLblYhZBsBPUJsLDcSaDtQd8wlW2ZCVOBpiHgXc2EGtKJKm1tiXoNQ7nA7v1bcrwzmOs305kHD3JCUm8av8Qg27hSEw2Ao9Nte7ZA38AXYRdjZB1RzGmd9NE0IwtCp0I8nNdAiMTAnie6FVth3GJ40xj9QV5Nk5FUb6qtK1h8uMr2fX4FqHAT9DPI0wZDZD	2026-07-10 18:53:48.726497	2026-07-10 18:53:48.726497	\N
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.message (id, code, role, text, type, media, quoted, chat_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: migraciones_aplicadas; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.migraciones_aplicadas (id, nombre, aplicado_en) FROM stdin;
1	v002_001_update_users.sql	2026-07-10 19:28:04.459774
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."user" (id, phone, enabled, enabled_from, enabled_to, current_book_id, created_at, updated_at, deleted_at) FROM stdin;
1	51929073820	t	\N	\N	1	2026-07-10 18:53:48.699487	2026-07-10 18:53:48.699487	\N
2	51912345678	t	\N	\N	1	2026-07-10 18:53:48.699487	2026-07-10 18:53:48.699487	\N
3	51923456789	t	\N	\N	1	2026-07-10 18:53:48.699487	2026-07-10 18:53:48.699487	\N
\.


--
-- Name: book_audio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_audio_id_seq', 36, true);


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

SELECT pg_catalog.setval('public.book_index_id_seq', 21, true);


--
-- Name: book_lesson_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_lesson_id_seq', 254, true);


--
-- Name: book_panel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_panel_id_seq', 33, true);


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

SELECT pg_catalog.setval('public.chats_id_seq', 1, false);


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

SELECT pg_catalog.setval('public.message_id_seq', 1, false);


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
-- PostgreSQL database dump complete
--

\unrestrict se8yMSvrpflEE50A2nRLQtTUhjcp4rkWp5i0v8Sh7zBZMVHjpnOjXahLWXNuALu

