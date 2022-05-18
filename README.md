# myhome
https://ny0011.github.io/myhome/

0. 환경 설정
1. 스타일 설정
   1. 태그 style 지정
      - 일반 태그와 framer-motion 사용 태그 분리
   2. Theme 색 지정
      - 기본 배경 어둡게
   3. font 지정
   4. emoji icon 지정
2. 검색 UI 만들기
   1. 검색 버튼
      - On : 검색 창 + 닫기 버튼
      - Off : 검색 버튼
3. 북마크 UI 만들기
   1. 북마크 토글 버튼
   2. 북마크 리스트

### 5/1 1st check 발표 완료

---

4. 북마크 데이터 구성
   - 최대 6개 추가 가능
   - (임시) local storage에 저장되도록 구성
5. 북마크 UI 수정
   - 데이터가 0개부터 5개 있을 때 추가 버튼 보여주기
   - 추가버튼 누르면 Form UI 띄우기
     - 북마크 이름
     - 북마크 URL
   - 북마크 수정/삭제 버튼 추가
   - (아이디어)
     - 북마크 이름이 가운데에서 빙글빙글 도는 애니메이션 만들기
     - 참고
       - https://codepen.io/hy16/pen/LYbEvjy
       - https://davidlozzi.com/2021/01/19/animating-in-a-circular-fashion-with-css-and-reactjs/
     - 북마크 이름들 가운데에 달 띄워두기...?
     - 유튜브 채널 링크 북마크는 클릭할 때 아래쪽에 채널의 최신 영상 import
       - 만약 이전에 본 영상이라면 영상을 보여주지 않음

- 전체 배경화면 남색 -> 하늘색 그라데이션
- 다음 스텝을 위한 NestJS 스터디

### 5/22 2nd check

---

(가안)

- 메모장 UI 만들기
  - todo 리스트를 만들까 하다가 그냥 3줄짜리 메모장 + 저장버튼을 만들면 되지 않을까? 싶음
- 백엔드 구성해서 데이터를 cloud server를 사용해서 저장
  - 사용처
    - 로그인 구축
    - 사용자 별 북마크 데이터 저장
    - 게시판 같은 커뮤니티?
  - AWS는 무료 기간 지나서 NBP 요금 알아봐야함
  - vercel, netlify, heroku, firebase 알아보기
- (New!) 강서/강남/동탄 집값 추이 분석 툴
  - 3년 내 이사 계획.....
