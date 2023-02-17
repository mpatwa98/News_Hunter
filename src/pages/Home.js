import React, { useState, useEffect } from "react";
import { dataList } from "../data/data.js";

function Home({ category, apikey, country }) {
  const [news, setNews] = useState(dataList);

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}`;

  const updateNews = async () => {
    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();

    if (response.status === "error" || !data) {
      console.log("error");
      console.log(response.message);
    } else {
      console.log(url);
      setNews(data);
      console.log(data);
      console.log("news found");
    }
  };

  useEffect(() => {
    document.title = `News Hunter - ${capitalizeFirstLetter(category)}`;
    updateNews();
  }, [category, country]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
          <div className=" w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
                Top {capitalizeFirstLetter(category)} Headlines
              </h1>
              <div className="h-1 w-50 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {news.articles.map((e, id) => {
              return (
                <div key={id}>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg">
                      <img
                        className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                        src={e.urlToImage}
                        alt="news"
                      />
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {e.title}
                      </h2>
                      <p className="leading-relaxed text-base">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
