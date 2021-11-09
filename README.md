# README
[OPTiM AI Camera](https://www.optim.cloud/services/ai-camera/)のAPI連携機能を利用し,会議室の混雑・利用状況を可視化するサンプルです。

バックエンドは[こちら](https://github.com/optim-corp/aicamera-api-sample-backend)から参照ください。

## 環境

```
- Node.js: 14.17.6
- Nuxt.js: 2.15.7
- tailwind CSS: 4.2.0
```

[.env.example](./.env.example) を参考に `.env` ファイルを作成し、以下の変数を設定してください。

- RAILS_HOST: `バックエンドのHOST`

## インストール

```sh
$ git clone https://github.com/optim-corp/aicamera-api-sample-frontend
$ cd aicamera-api-sample-frontend 
# install dependencies
$ npm install
```

## 起動

```sh
# serve with hot reload at localhost:3333
$ npm run dev
```

## 関連資料
- [OPTiM AI Camera | カメラを繋いですぐに使えるAI画像解析サービス](https://www.optim.cloud/services/ai-camera/)
- [OPTiM AI Camera Web API v1 (1.0.0)](https://developer-docs.camera-lite.ai.optim.cloud)

## License
[MIT License](./LICENSE)
