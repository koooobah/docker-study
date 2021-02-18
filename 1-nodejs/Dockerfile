# baseImage를 설정합니다.
FROM node:lts

# work directory를 설정함으로서 이미지의 기본 디렉토리와 내가 사용하는 디렉토리를 구분합니다.
WORKDIR /usr/src/app

# package.json을 먼저 도커 컨테이너 내부에 넘기고 npm install을 함으로서 캐싱효과를 받는다.
COPY package*.json .

# package.json의 맵핑된 패키지들을 설치합니다.
RUN npm install

# 모든 파일/폴더를 도커 컨테이너 내부에 넘깁니다.
# .dockerignore을 통해 node_modules가 도커 컨테이너 내부로 이동하지 않게 합니다.
COPY . .

# 노출할 도커 컨테이너의 포트입니다.
EXPOSE 8080

CMD ["npm", "start"]
