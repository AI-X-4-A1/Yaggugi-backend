# Node.js 22.2.0 버전 사용
FROM node:22.2.0

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 설치를 위해 package.json과 package-lock.json을 복사합니다.
COPY package*.json ./

# 패키지 설치
RUN npm install

# 앱 소스 복사
COPY . .

# MySQL 데이터베이스 환경 설정을 위해 환경 변수를 전달받습니다.
# 이 환경 변수들은 .env 파일에서 제공됩니다.
COPY .env .env

# 포트 설정 (애플리케이션이 8080 포트를 사용함)
EXPOSE 8080

# 애플리케이션 실행
CMD ["npm", "start"]
