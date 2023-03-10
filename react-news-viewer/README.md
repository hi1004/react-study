# ð News Search Viewer ð°

![img](https://user-images.githubusercontent.com/80688093/223093741-92806cec-eebd-46c0-9105-479a59fa7cbd.png)

## 1. ãã­ã¸ã§ã¯ãç´¹ä»

### ð æ¦è¦

> - React ã§ News API ãé£åãã`Newsæ¤ç´¢ã¢ããªã±ã¼ã·ã§ã³`ã§ãã
> - ä»ã¾ã§åå¼·ããåå®¹ãçãããAPI ãä½¿ã£ãã¬ã¹ãã³ã·ã Web ã¢ããªã±ã¼ã·ã§ã³ã§ãã

- éçºæé : `2023.03.03 ~ 2023.03.06`

## 2. éçºç°å¢

### 2.1 æè¡

| ãã­ã³ãã¨ã³ã                                                                                                                                                                                                                            | ããã¯ã¨ã³ã                   | ãã¼ã¸ã§ã³ãã¤ã·ã¥ã¼ç®¡ç                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <br><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><br> | `News APIæä¾(ç¡æã©ã¤ã»ã³ã¹)` | <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"><br/><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> |

- âNews API ãç¡æã©ã¤ã»ã³ã¹ã§ä½¿ã£ã¦ããããã`100åã¾ã§ãµã¼ãã¼ã«è¦è«`ã§ãã¾ãã
- â ç¡æã©ã¤ã»ã³ã¹ã® News API ã¯`ã­ã¼ã«ã«ç°å¢(https://localhost:3000)`ã§ããä½¿ããªãã£ããããããã­ã¤ãã¦ãæ­£å¸¸ã«åãã¾ããã
- â ãã¼ã¿ã¯åæããã®ãã¥ã¼ã¹ã«ãã¦ãã¾ãã

### 2.2 ããã±ã¼ã¸ã¢ã¸ã¥ã¼ã«

<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white"> <img src="https://img.shields.io/badge/Create_React_App-09D3AC?style=for-the-badge&logo=Create React App&logoColor=white"><br/><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"><br/> <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/react_virtualized-0B556A?style=for-the-badge&logoColor=white">

## 3. News API

- api/axios.js
  ```js
  import axios from 'axios';

  const instance = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
      apiKey: process.env.REACT_APP_APIKEY,
      searchIn: 'title',
    },
  });
  export default instance;
  ```
- api/request.js
  ```js
  const request = {
    fetchEverything: `/everything?q`, // æ¤ç´¢
    fetchTopHeadlines: '/top-headlines?', //ãããã©ã¤ã³
  };
  export default request;
  ```
- src/app.js [[åç§]](https://github.com/hi1004/react-study/blob/main/react-news-viewer/src/App.js#L24-L73)


## 3. ã³ã¢æ©è½

### 3.1 æ¤ç´¢

![search](https://user-images.githubusercontent.com/80688093/223126597-743eceac-7de8-4a9b-8f81-22293f13cb23.gif)

ð æ¤ç´¢ããåã`åæãã¼ã¸ã§ã¯ãããã©ã¤ã³ãã¥ã¼ã¹`ãè¡¨ç¤ºãããããã«ãªã£ã¦ãã¾ããï¼ãããã©ã¤ã³ãã¥ã¼ã¹ã¯æ¤ç´¢æ¬ãç©ºæ¬ã®æãè¡¨ãã¾ãï¼

ð åè¨èªãã¨ã«`ã­ã¼ã¯ã¼ãã§æ¤ç´¢`ããã¨ãããããããã®æå ±ãå¾ããã¾ãã

ð `æ¤ç´¢çµæããªãå ´åã¯çµæããªãã¡ãã»ã¼ã¸ãåºå`ãã¾ãã

ð `æ¤ç´¢çµæã¯æå¤§100å`ã¾ã§ãã¦ãã¾ãã

### 3.2 è¨èªè¨­å®

![lang](https://user-images.githubusercontent.com/80688093/223119560-e7ccfe83-be61-4f4e-ba4e-0e8b65d178ec.gif)

ð `æ¥æ¬èª(Default)ãéå½èªãè±èªã®ä¸­ã§ä¸ã¤ã®è¨èª`ãé¸ã¹ãæ¤ç´¢ã§ããããã«ãªã£ã¦ãã¾ãã

ð æ¤ç´¢çµæãè¨­å®ããè¨èªã«ãã£ã¦ç°ãªãã¾ãã

### 3.3 æ´åã ã­ã¼ã¯ã¼ãã«ãã¤ã©ã¤ã
![sort](https://user-images.githubusercontent.com/80688093/223132396-ae00e082-e37a-4d97-8172-b62f9dc619d8.gif)

ð `è¨èªãå«ããè¨äºãæå®ããã½ã¼ãé ã«ä¸¦ã¹ã`ãã¨ã¯[NewsApi](https://newsapi.org/docs/endpoints/everything)ã®å¬å¼ææ¸ã§åèãã¾ããã

ð `ææ°(Default)`ã`é¢é£`ã`äººæ°`

ð `all(Default)`ã`title`ã`title + content`

ð æ¤ç´¢ããã­ã¼ã¯ã¼ããåºã¥ããåè¨äºã®ã¿ã¤ãã«ãã³ã³ãã³ããã`ä¸è´ããã­ã¼ã¯ã¼ãã«ãã¤ã©ã¤ãããæ©è½`ã§ãã

### 3.4 ã¬ã¹ãã³ã·ã Web
![respo](https://user-images.githubusercontent.com/80688093/223123640-cd3ffe89-b07c-4bf8-be63-106c1a150e2d.gif)

### 3.5 æ§è½æé©å

ð `react_virtualized`ã§ä¸è¦ãªã³ã³ãã¼ãã³ãã®ã¬ã³ããªã³ã°ãé²ãã¾ããã

ð `useCallback()`,`React.memo()`ãå¿è¦ãªæã§ä½¿ããæ§è½ãä¸ãã¾ããã

