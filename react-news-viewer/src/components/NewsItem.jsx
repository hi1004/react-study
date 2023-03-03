import React from 'react';
import styled from 'styled-components';

const NewsItem = ({ article, language }) => {
  const { title, description, url, urlToImage, author, publishedAt, source } =
    article;
  let lang = language;
  if (lang === 'jp') lang = 'ja';

  const localeString = new Date(publishedAt).toLocaleString(lang, {
    timeZone: 'UTC',
  });

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="news">
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noreferrer">
              <img src={urlToImage} alt="thumbnail" />
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                {source.name}
              </div>
            </a>
          </div>

          <div className="contents">
            <a href={url} target="_blank" rel="noreferrer">
              <h2>{title}</h2>
              <p className="description">{description}</p>
              <div style={{ textAlign: 'right' }}>
                <p className="author">{author}</p>
                <p className="time">{localeString}</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </NewsItemBlock>
  );
};

export default React.memo(NewsItem);

const NewsItemBlock = styled.div`
  .news {
    display: flex;

    .thumbnail {
      margin-right: 1rem;
      img {
        display: block;
        width: 160px;
        height: 100px;
        object-fit: cover;
      }
    }
    .contents {
      a {
        color: #000;
        text-decoration: none;
        h2 {
          margin: 0;
        }

        .description {
          margin: 0;
          line-height: 1.5;
          margin-top: 0.5rem;
          white-space: normal;
        }
        .author,
        .time {
          font-size: 0.85rem;
          color: #7e7e7e;
        }
      }
      &:hover h2 {
        text-decoration: underline;
      }
    }
    &:first-child {
      padding: 2.5rem 0;
    }

    & + & {
      padding: 2.5rem 0;
      border-top: 1px solid #ccc;
    }
  }
`;
