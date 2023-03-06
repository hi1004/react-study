# 🔍 News Search Viewer 📰

![img](https://user-images.githubusercontent.com/80688093/223093741-92806cec-eebd-46c0-9105-479a59fa7cbd.png)

## 1. プロジェクト紹介

### 📌 概要

> - React で News API を連動した`News検索アプリケーション`です。
> - 今まで勉強した内容を生かし、API を使ったレスポンシブ Web アプリケーションです。

- 開発期間 : `2023.03.03 ~ 2023.03.06`

## 2. 開発環境

### 2.1 技術

| フロントエンド                                                                                                                                                                                                                            | バックエンド                   | バージョン、イシュー管理                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <br><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><br> | `News API提供(無料ライセンス)` | <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"><br/><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> |

- ❗News API を無料ライセンスで使っているため、`100回までサーバーに要請`できます。
- ❗ 無料ライセンスの News API は`ローカル環境(https://localhost:3000)`でしか使えなかったため、デプロイしても正常に動きません。
- ❗ データは先月からのニュースにしています。

### 2.2 パッケージモジュール

<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white"> <img src="https://img.shields.io/badge/Create_React_App-09D3AC?style=for-the-badge&logo=Create React App&logoColor=white"><br/><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"><br/> <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/react_virtualized-0B556A?style=for-the-badge&logoColor=white">

## 3. コア機能

### 3.1 検索

![search](https://user-images.githubusercontent.com/80688093/223126597-743eceac-7de8-4a9b-8f81-22293f13cb23.gif)

📌 検索する前、`初期ページではヘッドラインニュース`が表示されるようになっています。（ヘッドラインニュースは検索欄が空欄の時、表れます）

📌 各言語ごとに`キーワードで検索`すると、よりたくさんの情報が得られます。

📌 `検索結果がない場合は結果がないメッセージを出力`します。

📌 `検索結果は最大100個`までしています。

### 3.2 言語設定

![lang](https://user-images.githubusercontent.com/80688093/223119560-e7ccfe83-be61-4f4e-ba4e-0e8b65d178ec.gif)

📌 `日本語(Default)、韓国語、英語の中で一つの言語`を選べ、検索できるようになっています。

📌 検索結果も設定した言語によって異なります。

### 3.3 整列、 キーワードにハイライト
![sort](https://user-images.githubusercontent.com/80688093/223132396-ae00e082-e37a-4d97-8172-b62f9dc619d8.gif)

📌 `言語を含め、記事が指定したソート順に並べる`ことは[NewsApi](https://newsapi.org/docs/endpoints/everything)の公式文書で参考しました。

📌 `最新(Default)`、`関連`、`人気`

📌 `all(Default)`、`title`、`title + content`

📌 検索したキーワードを基づき、各記事のタイトルやコンテンツから`一致したキーワードにハイライトする機能`です。

### 3.4 レスポンシブ Web
![respo](https://user-images.githubusercontent.com/80688093/223123640-cd3ffe89-b07c-4bf8-be63-106c1a150e2d.gif)

### 3.5 性能最適化

📌 `react_virtualized`で不要なコンポーネントのレンダリングを防げました。

📌 `useCallback()`,`React.memo()`を必要な所で使い、性能を上げました。
