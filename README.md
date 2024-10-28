#🌟 프로젝트 소개


이 프로젝트는 YouTube의 주요 기능을 모방하여 구현한 클론코딩 프로젝트입니다. 서버 사이드 렌더링(SSR)을 기반으로 하며, 사용자가 영상을 녹화하거나 업로드하고, 재생하며 댓글을 작성 및 삭제할 수 있는 기능을 제공합니다.

🛠️ 기능


회원가입 및 로그인: 사용자는 회원가입 후 로그인이 가능합니다.
영상 녹화 및 업로드: 사용자는 직접 영상을 녹화하거나, 기존 영상을 업로드할 수 있습니다.
영상 재생: 업로드된 영상을 사이트에서 바로 재생할 수 있습니다.
댓글 작성 및 삭제: 영상에 대한 댓글을 작성 및 삭제할 수 있습니다.
AWS S3 연동: 사용자가 업로드한 영상 파일은 AWS S3에 저장됩니다.


📌 기술 스택


프론트엔드
JavaScript
Pug: 템플릿 엔진을 사용하여 서버 사이드 렌더링 구현
백엔드
Node.js
Express: 서버 프레임워크
Mongoose: MongoDB와 연동하여 데이터 저장
Multer: 파일 업로드 및 처리 (S3에 파일 저장)
AWS S3: 영상 파일 저장소
배포
fly.io: 서버 배포
AWS S3: 영상 파일 저장소

🚀 설치 및 실행 방법
프로젝트 클론

bash
코드 복사
[git clone https://github.com/your-username/your-youtube-clone.git](https://github.com/SungminPark1997/wetube-reloaded.git)
cd your-youtube-clone
환경 변수 설정 프로젝트 루트 디렉토리에 .env 파일을 생성하고 아래와 같이 환경변수를 설정합니다.

plaintext
코드 복사
MONGO_URI=your_mongo_db_connection_string
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_region
S3_BUCKET_NAME=your_s3_bucket_name
SESSION_SECRET=your_session_secret
의존성 설치

bash
코드 복사
npm install
서버 실행

bash
코드 복사
npm start
접속: 브라우저에서 http://localhost:4000으로 이동하여 프로젝트를 확인합니다.

📂 구성
회원 관리: 회원가입 및 로그인 기능
영상 관리: 사용자는 영상을 녹화, 업로드, 재생, 삭제할 수 있습니다.
댓글 관리: 영상에 대한 댓글 작성 및 삭제 기능을 제공합니다.
🗂️ 폴더 구조
php
코드 복사
📁 your-youtube-clone
├── 📁 src
│   ├── 📁 client              # FE(js,scss)
│   ├── 📁 controllers         # 각 기능별 로직을 관리하는 컨트롤러
│   ├── 📁 models              # MongoDB 모델 정의
│   ├── 📁 routes              # Express 라우팅 관리
│   ├── 📁 views               # Pug 템플릿 파일들
│   ├── 📁 middlewares         # 미들웨어 (인증, 파일 처리 등)
│   ├── init.js                # Express 애플리케이션 설정
│   └── server.js              # 서버 실행 파일



🤝 기여
이 프로젝트는 학습을 목적으로 하여 진행된 클론코딩 프로젝트입니다. 여러분의 피드백과 아이디어는 언제나 환영합니다.

