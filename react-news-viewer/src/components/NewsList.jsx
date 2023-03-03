import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsList = ({ newsInfo, loading, language }) => {
  if (loading) {
    return (
      <NewsListBlock>
        <Loading />
      </NewsListBlock>
    );
  }

  if (!newsInfo) return null;

  return (
    <NewsListBlock>
      {newsInfo.map(article => (
        <NewsItem key={article.url} article={article} language={language} />
      ))}
    </NewsListBlock>
  );
};

export default React.memo(NewsList);

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  height: 680px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const Loading = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 3px solid red;
  border-top-color: transparent;
  animation: loadingAnimation 0.5s infinite linear;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes loadingAnimation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
