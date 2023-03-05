import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import axios from './api/axios';
import request from './api/request';
import './App.css';
import NewsList from './components/NewsList';
import TheHeader from './components/TheHeader';

function App() {
  const [text, setText] = useState('');
  const [headLineInfo, setHeadLineInfo] = useState(null);
  const [newsInfo, setNewsInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('jp');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [searchIn, setSearchIn] = useState('');
  const inputEl = useRef();

  const handleChange = e => {
    setText(e.target.value);
  };

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(
        `${request.fetchEverything}=${decodeURI(
          text,
        )}&language=${language}&sortBy=${sortBy}&searchIn=${searchIn}`,
      );

      // 중복 기사 제거
      const filterNews = res.data.articles.filter(
        (arr, index, callback) =>
          index === callback.findIndex(t => t.title === arr.title),
      );

      setNewsInfo(filterNews);
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  }, [text, language, sortBy, searchIn]);

  const fetchHeadLineData = useCallback(async () => {
    try {
      let country = 'jp';
      if (language === 'ko') country = 'kr';
      if (language === 'en') country = 'us';
      const res = await axios.get(
        `${request.fetchTopHeadlines}country=${country}`,
      );
      setHeadLineInfo(res.data.articles);
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  }, [language]);

  useEffect(() => {
    if (!text.trim() || !text.length) {
      setNewsInfo(headLineInfo);
      return;
    }
    fetchData();
    setLoading(true);
  }, [text, fetchData, headLineInfo]);

  useEffect(() => {
    fetchHeadLineData();
  }, [fetchHeadLineData]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const onLanguageSelect = e => {
    setLanguage(e.target.value);
    inputEl.current.focus();
  };
  const onSortBy = e => {
    setSortBy(e.target.value);
    inputEl.current.focus();
  };
  const onSearchIn = e => {
    setSearchIn(e.target.value);
    inputEl.current.focus();
  };

  const sortByLanguage = [
    { jp: { publishedAt: '最新', relevancy: '関連', popularity: '人気' } },
    { ko: { publishedAt: '최근', relevancy: '관련', popularity: '인기' } },
    { en: { publishedAt: 'Latest', relevancy: 'Related', popularity: 'Hot' } },
  ];

  const [sortByData] = sortByLanguage
    .filter(obj => obj[language])
    .map(obj => obj[language]);

  if (!headLineInfo) return null;

  return (
    <div className="App">
      <TheHeader />
      <SearchFormBlock onSubmit={handleSubmit}>
        <div className="search-bar">
          <div className="search">
            <MdSearch className="search-icon" />
          </div>

          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Search"
            ref={inputEl}
          />
          <div className="selections">
            <select onChange={onLanguageSelect}>
              <option value="jp" defaultValue>
                日本語
              </option>
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
            <select onChange={onSortBy}>
              <option value="publishedAt" defaultValue>
                {sortByData.publishedAt}
              </option>
              <option value="relevancy">{sortByData.relevancy}</option>
              <option value="popularity">{sortByData.popularity}</option>
            </select>
            <select onChange={onSearchIn}>
              <option value="" defaultValue>
                all
              </option>
              <option value="title">title</option>
              <option value="title,content">title + content</option>
            </select>
          </div>
        </div>
      </SearchFormBlock>

      <NewsList
        text={text}
        newsInfo={newsInfo}
        loading={loading}
        language={language}
        fetchData={fetchData}
      />
    </div>
  );
}

export default App;

const SearchFormBlock = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 700px);
  padding: 0 1rem;

  .search-bar {
    width: 600px;
    height: 60px;
    border-radius: 5px;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.2rem;
    .search {
      display: flex;
      align-items: center;
      justify-content: center;

      .search-icon {
        width: 37px;
        height: 25px;
        border-right: 1px solid rgb(202 103 103 / 30%);
        padding-right: 1rem;
        color: #fff;
      }
    }

    input {
      width: 100%;
      border: none;

      overflow: auto;
      font-size: 1.4rem;
      color: #fff;
      transition: 0.4s;
      background-color: transparent;
      &:focus {
        outline: none;
        transition: 0.4s;
      }
      &::placeholder {
        color: #ccc;
      }
    }
    .selections {
      display: flex;
      width: 100%;
      select {
        outline: none;
        border: none;
        font-size: 1.1rem;
        color: #fff;
        cursor: pointer;
        padding: 0 1.2rem;
        height: 25px;
        font-family: 'Noto Sans JP', sans-serif;
        background-color: transparent;
        background: transparent;
        option {
          background-color: #000;
          padding: 3px 0;
        }
      }
    }

    @media screen and (max-width: 800px) {
      flex-direction: column;
      height: auto;
      padding: 1rem;
      gap: 1rem;

      .search {
        width: 100%;
        justify-content: flex-start;
      }
      .selections {
        justify-content: flex-end;
        border-top: 1px solid #fff;
        padding-top: 1rem;
      }
    }
  }
`;
