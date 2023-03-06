import React, { useCallback } from 'react';
import styled from 'styled-components';
import { List } from 'react-virtualized';
import NewsItem from './NewsItem';

const NewsList = ({ newsInfo, loading, language, text }) => {
  const rowRenderer = useCallback(
    ({ key, index, style }) => {
      const listItem = newsInfo[index];

      return (
        <NewsListBlock key={key} style={style}>
          <NewsItem article={listItem} language={language} text={text} />
        </NewsListBlock>
      );
    },
    [newsInfo],
  );

  if (!newsInfo?.length && !loading) {
    return (
      <div
        style={{
          width: '100%',
          height: 600,
          position: 'absolute',
          bottom: 0,
        }}
      >
        {text && (
          <Message>
            {(language === 'jp' && (
              <h2>{`"${text}"の検索結果がありません。`}</h2>
            )) ||
              (language === 'ko' && (
                <h2>{`"${text}"의 검색결과가 없습니다.`}</h2>
              )) ||
              (language === 'en' && (
                <h2>{`No search result for "${text}"`}</h2>
              ))}
          </Message>
        )}
      </div>
    );
  }

  if (loading) {
    return (
      <NewsListBlock
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          bottom: 0,
          background: 'transparent',
        }}
      >
        <Loading />
      </NewsListBlock>
    );
  }

  return (
    <List
      className="NewsList"
      width={window.innerWidth - 400}
      height={600}
      rowCount={newsInfo.length}
      rowHeight={400}
      rowRenderer={rowRenderer}
      list={newsInfo}
      style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}
    />
  );
};

export default React.memo(NewsList);

const NewsListBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  background: radial-gradient(#000000, transparent);

  &:first-child {
    width: 100%;
    padding: 2.5rem;
    box-sizing: border-box;
  }

  & + & {
    padding: 2.5rem;
    border-top: 1px solid #faf5f580;
  }
`;

const Loading = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 3px solid #fff;
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
const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
`;
