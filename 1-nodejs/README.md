1. 도커 이미지를 빌드합니다.

```
docker build -t 1-nodejs .
```

2. 이미지를 실행합니다.

```
docker run -p 8080:8080 1-nodejs
```
