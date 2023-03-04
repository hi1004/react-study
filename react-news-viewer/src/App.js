import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import axios from './api/axios';
import request from './api/request';
import './App.css';
import NewsList from './components/NewsList';

function App() {
  const [text, setText] = useState('');
  const [newsInfo, setNewsInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('jp');
  const [sortBy, setSortBy] = useState('publishedAt');
  const inputEl = useRef();

  const handleChange = e => {
    setText(e.target.value);
  };

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(
        `${request.fetchEverything}=${decodeURI(
          text,
        )}&language=${language}&sortBy=${sortBy}`,
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
  }, [text, language, sortBy]);

  useEffect(() => {
    if (!text.trim()) {
      setNewsInfo(null);
      return;
    }
    fetchData();
    setLoading(true);
  }, [text, fetchData]);

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

  const sortByLanguage = [
    { jp: { publishedAt: '最新', relevancy: '関連', popularity: '人気' } },
    { ko: { publishedAt: '최근', relevancy: '관련', popularity: '인기' } },
    { en: { publishedAt: 'Latest', relevancy: 'Related', popularity: 'Hot' } },
  ];

  const [sortByData] = sortByLanguage
    .filter(obj => obj[language])
    .map(obj => obj[language]);

  return (
    <div className="App">
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
  height: calc(100vh - 600px);

  .search-bar {
    width: 600px;
    height: 60px;
    border-radius: 5px;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    .search {
      display: flex;
      align-items: center;
      justify-content: center;

      .search-icon {
        width: 37px;
        height: 25px;
        border-right: 1px solid rgb(202 103 103 / 30%);
        padding-right: 1rem;
      }
    }

    input {
      width: 100%;
      border: none;
      margin-left: 1.4rem;
      overflow: auto;
      font-size: 1.4rem;
      transition: 0.4s;
      background-color: transparent;
      &:focus {
        outline: none;
        transition: 0.4s;
      }
    }
    select {
      outline: none;
      border: none;
      font-size: 1.1rem;
      cursor: pointer;
      border-left: 1px solid rgb(202 103 103 / 30%);
      padding: 0 1rem;
      height: 25px;
      font-family: 'Noto Sans JP', sans-serif;
      background-color: transparent;
    }
  }
`;
