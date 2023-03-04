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
  const defaultProfile =
    'https://cdn.clien.net/web/api/file/F01/12204564/221a6c7811486c.png?w=850&h=30000';
  const handleImgError = e => {
    e.target.src = defaultProfile;
  };

  return (
    <NewsItemVirtualized>
      <NewsItemBlock>
        <div className="news">
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noreferrer">
              {urlToImage ? (
                <img src={urlToImage} alt={source} onError={handleImgError} />
              ) : (
                <img src={defaultProfile} alt={404} />
              )}

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                {source.name}
              </div>
            </a>
          </div>

          <div className="contents">
            <a href={url} target="_blank" rel="noreferrer">
              <h2>{title}</h2>
              <p className="description">{description}</p>
              <div className="detail">
                <p className="author">{author}</p>
                <p className="time">{localeString}</p>
              </div>
            </a>
          </div>
        </div>
      </NewsItemBlock>
    </NewsItemVirtualized>
  );
};

export default React.memo(NewsItem);
const NewsItemVirtualized = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  & + & {
    border-top: 1px solid #ccc;
  }
`;

const NewsItemBlock = styled.div`
  box-sizing: border-box;

  .news {
    display: flex;
    @media screen and (max-width: 1065px) {
      flex-direction: column;
    }
    .imageBox {
      width: 100%;
      height: 200px;
      background-repeat: no-repeat;
      background-size: contain;
    }

    .thumbnail {
      margin-right: 1rem;
      @media screen and (max-width: 1065px) {
        margin: 0 auto;
      }
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
          @media screen and (max-width: 1065px) {
            display: none;
          }
        }
        .detail {
          font-size: 0.85rem;
          color: #7e7e7e;
          text-align: right;
          margin-top: 0.5rem;
          @media screen and (max-width: 1065px) {
            text-align: center;
          }
        }
      }
      &:hover h2 {
        text-decoration: underline;
      }
    }
  }
`;
