<img width="987" alt="스크린샷 2024-01-10 오후 1 12 58" src="https://github.com/nvnhong/the-ongi-calendar/assets/134766917/4be0654c-2f54-41c8-b9d7-23e61dae44c5">

# 2024 소망달력
2024년에 꼭 이루고 싶은 소망이 있다면 글 또는 이미지를 업로드합니다.  
일정기간동안 수집된 데이터는 실제 달력이 되어 사용자에게 전달됩니다.  

<br />

### 🗓️ 개발 기간
2023.12.08 - 12.15

<br />

### ⚙️ 사용 기술
| 기술명 | 설명 |
|:-:|:--|
| React | 컴포넌트 기반 아키텍처를 재사용성이 높고 유지보수가 용이합니다. 작은 컴포넌트들을 조합하여 복잡한 UI를 쉽게 만들 수 있습니다. 프로젝트에서 달력은 특정 모양이 재사용되는 상황이 있기에 컴포넌트 기반 아키텍처를 지닌 React를 선택했습니다. 단방향 데이터 흐름을 따르기 때문에 데이터의 흐름이 예측 가능하고 디버깅이 쉽습니다. 이로써 애플리케이션의 상태 관리를 효율적으로 할 수 있습니다.|
| Material UI | MUI는 다양한 UI 컴포넌트를 제공하며, 사용이 간편하고 일관성 있습니다. 필요에 따라 커스터마이징이 가능하다는 장점이 있습니다. 해당 프로젝트는 개발 기간이 일주일 정도 주어졌습니다. 빠른 시간 내에 endDate를 맞추기 위해 해당 라이브러리를 사용했습니다. |
| React-cookie | React 환경에서 사용하기 위해 설계된 라이브러리로, React 컴포넌트의 상태와 함께 사용하기 용이합니다. 일정 시간이 지나면 로그아웃 되는 기능 및 '하루만 다시 보지 않기' 팝업을 구성하기 위해 해당 라이브러리를 선택했습니다. |
| React-router | React로 SPA를 개발할 때, react-router를 사용하면 `<a>`태그를 사용할 때보다 페이지 간의 전환이 부드럽게 이루어져 사용자 경험을 향상시킵니다. |
| Vercel | GitHub와 연동하여 코드가 업데이트될 때 자동으로 빌드 및 배포하는 기능을 제공합니다. 단기간에 개발하는 프로젝트 특성 상 빠른 배포를 위해 vercel을 사용했습니다. |

<br />

### ✈️ 주요 기능 
- 로그인
- 월별 달력 및 이미지 보기
- 소망(Text) 생성/조회/수정/삭제
- 이미지 생성/조회/삭제

<br />

### 🙋‍♀️ 팀원 소개
- **프론트엔드** : [홍미경](https://github.com/nvnhong)
- **백엔드** : [장지예](https://github.com/Jang-JIye)
- **기획** : 최지연

<br />

### 참고링크
- 서비스 주소 : https://the-ongi-calendar.vercel.app
- 백엔드 깃허브 : https://github.com/Jang-JIye/yearEnd
- 프로젝트(기획부터 제작까지) : https://mimi-kkokko.notion.site/8e01aca0cd9146aa93cd53a603ac5da7?pvs=4
