# backend

「rails-react-auth」のバックエンド。

## セットアップ

```
$ docker-compose build
$ docker-compose up -d
$ docker-compose run api rails db:create
$ docker-compose run api rails db:migrate
```

<img width="1661" alt="68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3638383835342f66356634346336302d613762652d346633342d616438652d3035646466613135373434312e706e67" src="https://user-images.githubusercontent.com/51913879/119179994-9c096480-baaa-11eb-9290-e366c4f6c55f.png">

[http://localhost/3001](http://localhost/3001) にアクセスしていつもの画面が表示されればOK。
