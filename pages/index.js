import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState, useStoreActions } from "easy-peasy";
import absoluteUrl from "next-absolute-url";
import smartquotes from "smartquotes";
import Link from "next/link";

import { apiGet } from "../lib/utils";

// Import components
import Layout from "../components/layout";
import Quote from "../components/quote";

const Home = props => {
  // const { quotes } = props.data;

  return (
    <Layout title="Quoke">
      <div className={"container"}><h1>Welcome to Quoke</h1>
      
      <p className="lead">quoke - an open source project to collect and share quotations.</p>
      
      
      </div>
      
    </Layout>
  );
};

{/* {quotes.map((quote, iteration) => {
          return (
            <Quote
              quote={quote}
              key={iteration}
              isLinked={true}
              isTruncated={true}
            />
          );
        })} */}

// Home.getInitialProps = async ({ req, query }) => {
//   let data = {};

//   const quotesPerPage = 5;
//   let skip = 0;

//   data.quotes = await apiGet(
//     req,
//     `/api/get-quotes?limit=${quotesPerPage}&skip=${skip}`
//   );

//   return { data: data };
// };

export default Home;

/* <div className={css.root}>
<div className={css.content}>
  <h1>Discover some inspirational quotes today</h1>
  <h2>
    What is this?{" "}
    <Link href="/about">
      <a>Learn more</a>
    </Link>
  </h2>
</div>
<hr />
<div className={css.quotesContainer}>
  {quotes.map((quote, index) => (
    <div key={index} className={css.quote}>
      <Link href={"/quote/[slug]"} as={`/quote/${quote.slug}`}>
        <a>{truncate(quote.text, 30)}</a>
      </Link>
    </div>
  ))}

  <div className={css.pagination}>
    <Link href="/page/[page]" as="/page/2">
      <a>Next &gt;</a>
    </Link>
  </div>
</div>
</div> */

// Home.getInitialProps = async ({ req, query }) => {
//   let data = {};

//   const quotesPerPage = 5;
//   let skip = 0;

//   if (cache) data = cache;
//   else {
//     data.quotes = await apiGet(
//       req,
//       `/api/get-quotes?limit=${quotesPerPage}&skip=${skip}`
//     );
//   }

//   return { data: data };
// };
