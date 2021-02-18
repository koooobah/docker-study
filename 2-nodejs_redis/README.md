1. 레디스 이미지를 이용해 레디스 컨테이너를 실행합니다.

```
docker run -p 6379:6379 --name redis redis
```

2. 노드 이미지를 생성합니다.

```
docker build -t 2-nodejs .
```

3. 생성한 노드 이미지를 이용해 컨테이너를 실행시킵니다. 노드 컨테이너 내부에서 레디스 컨테이너를 사용할 수 있도록 link 시킵니다.

```
docker run -p 8080:8080 --link redis 2-nodejs_redis
```
