-- TERMINAL COMMAND: pg_dump -d nameOfDatabase; 
-- Purpose: pg_dump creates a back-up of your database by extracting it(database) into a script file.
-- Create nameOfFile.sql file(in db folder) on server side, paste & save pg_dump script file, need to comment out info after "SET"
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: authors; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.authors (
    id integer NOT NULL,
    name character varying(100),
    post_id integer NOT NULL
);


ALTER TABLE public.authors OWNER TO tpl522_10;

--
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.authors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.authors_id_seq OWNER TO tpl522_10;

--
-- Name: authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.authors_id_seq OWNED BY public.authors.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(50),
    post character varying(5000) NOT NULL,
    image text,
    date date NOT NULL
);


ALTER TABLE public.posts OWNER TO tpl522_10;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO tpl522_10;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: subscribers; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.subscribers (
    id integer NOT NULL,
    email text
);


ALTER TABLE public.subscribers OWNER TO tpl522_10;

--
-- Name: subscribers_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.subscribers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subscribers_id_seq OWNER TO tpl522_10;

--
-- Name: subscribers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.subscribers_id_seq OWNED BY public.subscribers.id;


--
-- Name: authors id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.authors ALTER COLUMN id SET DEFAULT nextval('public.authors_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: subscribers id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.subscribers ALTER COLUMN id SET DEFAULT nextval('public.subscribers_id_seq'::regclass);


--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.authors (id, name, post_id) FROM stdin;
1	George R. R. Martin	2
2	Stephanie Meyer	1
3	Stephen King	3
8	\N	4
9	\N	5
11	\N	7
13	Joe Smith	15
15	Joe Smith	786
16	Jasne	17
17	Joe Smith	19
18	Joe Smith	45
19	Joe Smith	98
20	Joe Smith	67
21	Joe Smith	59
22	Joe Smith	879
24	Jasne	789
25	Joe Smith	123
26	Joe Smith	4562
27	Joe Smith	7689
28	Jasne	3464
29	Joe Smith	786
30	Jasne	7869
31	Jasne	7567
32	Joe Smith	7643
33	Jasne	345623
34	Jasne	563
35	Joe Smith	6734
36	no post	4567237
37	no author	3623
38	vwe	6783457
39	Joe Smith	256
40	no author	57
41	Joe Smith	56
42	Joe Smith	56
43	Joe Smith	57
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.posts (id, title, post, image, date) FROM stdin;
1	House of Dragons, Latest Episode(Season1, Ep8)	Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.	http://dummyimage.com/132x100.png/dddddd/000000"	2022-10-16
2	Twilight, Reimagined in Westoros	In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.	http://dummyimage.com/130x100.png/cc0000/ffffff	2019-09-23
3	Holiday Meal Recipes from It Chapter Two,	Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.	http://dummyimage.com/193x100.png/5fa2dd/ffffff	2019-12-20
21	Jack and The Beanstalk	sv	\N	2022-10-05
22	Jack and The Beanstalk	Truth or fiction, I delve into the longtime favorite of readers.	\N	2022-10-13
23	Apple	s vdkjnsdjkvn	\N	2022-09-28
24	Jack and The Beanstalk	Truth or fiction, I delve into the longtime favorite of readers.	\N	2022-09-27
25	Jack and The Beanstalk	Truth or fiction, I delve into the longtime favorite of readers.	\N	2022-10-11
26	Jack and The Beanstalk	Truth or fiction, I delve into the longtime favorite of readers.	\N	2022-10-11
27	Jack and The Beanstalk	Testing my code is here	\N	2022-10-18
28	Jack and The Beanstalk	Truth or fiction, I delve into the longtime favorite of readers.	\N	2022-10-03
29	Jack and The Beanstalk	Truth or fiction, I delve into the longtime favorite of readers.	\N	2022-10-11
30	Jack and The Beanstalk	s vdkjnsdjkvn	\N	2022-10-04
31	Jack and The Beanstalk	Testing my code is here	\N	2022-10-11
32	apple	apple	\N	2022-10-02
33	commented out author	no author	\N	2022-10-03
34	dvsd	test	\N	2022-10-11
35	testing	testgavd	\N	2022-10-11
36	apple	Testing my code is here	\N	2022-10-27
37	dvsd	s vdkjnsdjkvn	\N	2022-10-04
38	apple	vsdvsd	\N	2022-09-27
39	apple	fwe	\N	2022-10-04
57	Apple	Testing my code is here	\N	2022-10-11
56	Jack and The Beanstalk	Truth or fiction, I delve into the longtime favorite of readers.	\N	2022-09-28
\.


--
-- Data for Name: subscribers; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.subscribers (id, email) FROM stdin;
1	jsmith@gmail.com
2	jsmithson@gmail.com
\.


--
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.authors_id_seq', 43, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.posts_id_seq', 39, true);


--
-- Name: subscribers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.subscribers_id_seq', 2, true);


--
-- Name: authors authors_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: subscribers subscribers_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.subscribers
    ADD CONSTRAINT subscribers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--