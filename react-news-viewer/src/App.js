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
      setNewsInfo(res.data.articles);
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  }, [text, language, sortBy]);

  useEffect(() => {
    if (!text.trim()) return;
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
          <MdSearch className="search-icon" />
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
      />
    </div>
  );
}

export default App;

const SearchFormBlock = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  .search-bar {
    width: 350px;
    height: 35px;
    border-radius: 5px;
    border: solid 1px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    .search-icon {
      width: 37px;
      height: 25px;
      border-right: 1px solid rgba(0, 0, 0, 0.3);
      padding: 0 0.5rem;
    }
    input {
      width: 100%;
      border: none;
      margin-left: 10px;
      overflow: auto;
      font-size: 1rem;
      transition: 0.4s;
      &:focus {
        outline: none;
        transition: 0.4s;
      }
    }
    select {
      outline: none;
      border: none;
      cursor: pointer;
      border-left: 1px solid rgba(0, 0, 0, 0.3);
      padding: 0 0.3rem;
      height: 25px;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 0.9rem;
    }
  }
`;
