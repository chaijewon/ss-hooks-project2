import React,{useReducer} from "react";
/*
       ==================
        이벤트 => 발생 => state값 변경
                         =====
                         공통 사용 변수
       ==================
         => 공통으로 사용
            ============
            이벤트 , 값이 변경
            ======  =========
            action , state
            ======
             type => 함수호출 (X) => 요청
         function A()
         {
             const [name,setName]=useState('') => local
             const [sex,setSex]=useState('') => local
             const [age,setAge]=useState(1) => local
             return (
                <div>
                  <B name={name}/> => 매개변수를 통해서 전송
                  <C sex={sex}/>
                  <D age={age}/>
                </div>
             )
         }
       ==================
         function B(props)
         {
         }
       ==================
         function C(props)
         {
         }
       ==================
         function D(props)
         {

         }
       ==================
 */
// state={movie:[]}
function reducer(state,action){
   switch (action.type) {
       case 'MOVIE_REAL':
           return {
               movie:[
                   /* 1 */
                   {

                       "mno" : 1,
                       "title" : "인비저블맨 (2020)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F6f7e0d87352effe5822812efb79509bee64a68d3",
                       "score" : 6.7,
                       "genre" : "공포",
                       "regdate" : "2020.02.26 개봉",
                       "time" : "124분",
                       "grade" : "15세이상관람가",
                       "director" : "(감독) 리 워넬",
                       "actor" : "(주연) 엘리자베스 모스",
                       "story" : "모든 것을 통제하려는 소시오패스 남자에게서 도망친 세실리아 그의 자살 소식과 함께 상속받게 된 거액의 유산 하지만 그날 이후, 누구에게도 보이지 않는 존재가 느껴지기 시작했다!",
                       "type" : 1
                   },

                   /* 2 */
                   {

                       "mno" : 2,
                       "title" : "1917 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2Ff9e87dc2c95d52f792bb2db809c62ac3f24dabf7",
                       "score" : 7.3,
                       "genre" : "전쟁/드라마",
                       "regdate" : "2020.02.19 개봉",
                       "time" : "119분",
                       "grade" : "15세이상관람가",
                       "director" : "(감독) 샘 멘데스",
                       "actor" : "(주연) 조지 맥케이, 딘 찰스 채프먼",
                       "story" : "두 명의 병사, 하나의 미션! 그들이 싸워야 할 것은 적이 아니라 시간이었다! 제1차 세계대전이 한창인 1917년. 독일군에 의해 모든 통신망이 파괴된 상황 속에서 영국군 병사 '스코필드'(조지 맥케이)와 '블레이크'(딘-찰스 채프먼)에게 하나의 미션이 주어졌다. 함정에 빠진 영국군 부대의 수장 '매켄지' 중령(베네딕트 컴버배치)에게 '에린무어' 장군(콜린 퍼스)의 공격 중지 명령을 전하는 것! 둘은 1600명의 아군과 '블레이크'의 형(리차드 매든)을 구하기 위해 전쟁터 한복판을 가로지르며 사투를 이어가는데...",
                       "type" : 1
                   },

                   /* 3 */
                   {

                       "mno" : 3,
                       "title" : "다크 워터스 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2F8311f1e8e7c4838003ff704e436f1e588fb1f0fc",
                       "score" : 9.3,
                       "genre" : "드라마",
                       "regdate" : "2020.03.11 개봉",
                       "time" : "127분",
                       "grade" : "12세이상관람가",
                       "director" : "(감독) 토드 헤인즈",
                       "actor" : "(주연) 마크 러팔로, 앤 해서웨이",
                       "story" : "인류의 99%는 이미 중독되었다 제작진의 충격 고발 실화 젖소 190마리의 떼죽음 메스꺼움과 고열에 시달리는 사람들 기형아들의 출생 그리고, 한 마을에 퍼지기 시작한 중증 질병들... 대기업의 변호를 담당하는 대형 로펌의 변호사 ‘롭 빌럿’(마크 러팔로)은 세계 최대의 화학기업 듀폰의 독성 폐기물질(PFOA) 유출 사실을 폭로한다. 그는 사건을 파헤칠수록 독성 물질이 프라이팬부터 콘택트렌즈, 아기 매트까지 우리 일상 속에 침투해 있다는 끔찍한 사실을 알게 되고 자신의 커리어는 물론 아내 ‘사라’(앤 해서웨이)와 가족들, 모든 것을 건 용기 있는 싸움을 시작한다. 대한민국에서도 일어나고 있는 현재진행형 실화가 공개된다",
                       "type" : 1
                   },

                   /* 4 */
                   {

                       "mno" : 4,
                       "title" : "작은 아씨들 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1d80cc8636c644aabd2597fc090183101579244282177",
                       "score" : 7.5,
                       "genre" : "드라마/로맨스/멜로",
                       "regdate" : "2020.02.12 개봉",
                       "time" : "135분",
                       "grade" : "전체관람가",
                       "director" : "(감독) 그레타 거윅",
                       "actor" : "(주연) 시얼샤 로넌, 엠마 왓슨, 플로렌스 퓨, 엘리자 스캔런, 로라 던, 티모시 샬라메, 메릴 스트립",
                       "story" : "Dear women 그해 겨울, 사랑스러운 자매들을 만났다 배우가 되고 싶은 첫째 메그(엠마 왓슨) 작가가 되고 싶은 둘째 조(시얼샤 로넌) 음악가가 되고 싶은 셋째 베스(엘리자 스캔런) 화가가 되고 싶은 막내 에이미(플로렌스 퓨) 이웃집 소년 로리(티모시 샬라메)는 네 자매를 우연히 알게되고 각기 다른 개성의 네 자매들과 인연을 쌓아간다. 7년 후, 어른이 된 그들에겐 각기 다른 숙제가 놓이게 되는데…",
                       "type" : 1
                   },

                   /* 5 */
                   {

                       "mno" : 5,
                       "title" : "지푸라기라도 잡고 싶은 짐승들 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2F1eb1d9d691e8ff57dfe489610bf2ea5407f8a99a",
                       "score" : 6.9,
                       "genre" : "범죄/스릴러",
                       "regdate" : "2020.02.19 개봉",
                       "time" : "108분",
                       "grade" : "청소년관람불가",
                       "director" : "(감독) 김용훈",
                       "actor" : "(주연) 전도연, 정우성, 배성우, 윤여정, 신현빈, 정만식, 진경, 정가람, 김준한",
                       "story" : "[모든 것은 돈 가방과 함께 시작되었다.] 사라진 애인 때문에 사채 빚에 시달리며 한 탕을 꿈꾸는 태영. 아르바이트로 가족의 생계를 이어가는 가장 중만. 과거를 지우고 새 인생을 살기 위해 남의 것을 탐하는 연희. 벼랑 끝에 몰린 그들 앞에 거액의 돈 가방이 나타나고, 마지막 기회라 믿으며 돈 가방을 쫓는 그들에게 예기치 못한 사건들이 발생한다. [“큰돈 들어왔을 땐 아무도 믿음 안돼”] 고리대금업자 박사장, 빚 때문에 가정이 무너진 미란, 불법체류자 진태, 가족의 생계가 먼저인 영선, 기억을 잃은 순자까지... 절박한 상황 속 서로 속고 속이며 돈 가방을 쫓는 그들은 인생을 바꿀 수 있는 마지막 한탕을 계획한다.",
                       "type" : 1
                   }

               ]
           }
       case 'MOVIE_SHC':
           return {
               movie:[
                   /* 6 */
                   {

                       "mno" : 6,
                       "title" : "정직한 후보 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F08bddecf7d26414585157598e5e453031579576516419",
                       "score" : 7.6,
                       "genre" : "코미디",
                       "regdate" : "2020.02.12 개봉",
                       "time" : "104분",
                       "grade" : "12세이상관람가",
                       "director" : "(감독) 장유정",
                       "actor" : "(주연) 라미란, 김무열, 나문희, 윤경호",
                       "story" : "어제까진 뻥쟁이, 오늘부턴 정직한 후보?! 거짓말이 제일 쉬운 3선 국회의원 '주상숙'에게 청천벽력이 떨어진다. 하루아침에 거짓말은 1도 할 수 없는 '진실의 주둥이'를 갖게 된 것! 최고의 무기인 '거짓말'을 잃자 그녀의 인생은 송두리째 흔들리게 되는데... 웃음 빵! 속이 뻥! 뚫리는 통쾌한 웃음 폭격이 시작된다!",
                       "type" : 1
                   },

                   /* 7 */
                   {

                       "mno" : 7,
                       "title" : "세인트 아가타 (2018)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa5c48f58c954c1b08ffe613d95623bfdfda5344c",
                       "score" : 4.9,
                       "genre" : "공포",
                       "regdate" : "2020.03.19 개봉",
                       "time" : "103분",
                       "grade" : "청소년관람불가",
                       "director" : "(감독) 대런 린 보우스만",
                       "actor" : "(주연) 사브리나 컨, 캐롤린 헨니시, 코트니 핼버슨",
                       "story" : "어느 시골, 미혼모 ‘메리’는 경제적인 이유로 남자친구 ‘지미’와 떨어져 외딴 수녀원에서 새로운 삶을 시작하게 된다. 그곳에서 어린 미혼모들은 겁에 질린 표정으로 그녀를 맞이하고, 엄격한 규율 속 알 수 없는 공포감에 휩싸인 ‘메리’는 점차 수녀원에 감춰진 충격적인 비밀들을 알게 되는데… 한번 발을 들이면 절대 벗어날 수 없는 곳, 반드시 살아서 나가야만 한다!",
                       "type" : 1
                   },

                   /* 8 */
                   {

                       "mno" : 8,
                       "title" : "시원찮은 그녀를 위한 육성방법 피날레 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F53c3951732a34bbcad717a9be981bbec1579084043086",
                       "score" : 7.1,
                       "genre" : "애니메이션/로맨스/멜로/드라마",
                       "regdate" : "2020.02.27 개봉",
                       "time" : "114분",
                       "grade" : "12세이상관람가",
                       "director" : "(감독) 카메이 칸타, 시바타 아키히사",
                       "actor" : "(주연) 마츠오카 요시츠구, 야스노 키요노",
                       "story" : "어느 봄날, 아키 토모야는 벚꽃이 흩날리는 언덕길에서 운명적으로 만난 소녀 '카토 메구미'를 메인 히로인으로 삼아서 동인 게임을 제작하기로 마음을 먹는다. 미술부 소속이지만 동인 일러스트레이터로도 활동 중인 ‘사와무라 스펜서 에리리’, 우등생이면서 라이트노벨 작가로도 활약하고 있는 3학년 선배 ‘카스미가오카 우타하’를 영입한 그는, 게임 제작 동아리 ‘블레싱 소프트웨어’를 결성해서 시행착오 끝에 첫 작품을 발표한다. 에리리와 우타하는 인기 크리에이터 코사카 아카네가 기획을 맡은 대작 게임 [필즈 크로니클]의 개발 멤버로 스카우트된다. 한편 블레싱 소프트웨어 대표인 토모야는 서클 활동을 이어 나가면서 일러스트레이터인 하시마 이즈미, 프로듀서인 하시마 이오리, 음악 밴드 아이시 테일의 효도 미치루, 그리고 부대표 메구미와 함께 신작 게임의 개발을 시작하는데… 에리리와 우타하의 대작은 어떻게 될 것인가? 토모야와 메구미의 관계에 변화가?! 과연 블레싱 소프트웨어의 신작의 행방은? 시원찮은 히로인을 둘러싼 청춘 그래피티, 그랜드 피날레.",
                       "type" : 1
                   },

                   /* 9 */
                   {

                       "mno" : 9,
                       "title" : "작가 미상 (2018)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2Fc744e067e5808fdae73e7912e1f6ce4289957764",
                       "score" : 9.0,
                       "genre" : "드라마/스릴러",
                       "regdate" : "2020.02.20 개봉",
                       "time" : "189분",
                       "grade" : "청소년관람불가",
                       "director" : "(감독) 플로리안 헨켈 폰 도너스마르크",
                       "actor" : "(주연) 톰 쉴링, 폴라 비어",
                       "story" : "2차 세계대전 전후의 독일, 삶도 사랑도 혼란하던 시기, 미술학도 쿠르트는 죽은 이모와 같은 이름의 여인 엘리를 만나 사랑에 빠진다. 사랑과 예술이 무르익을수록 쿠르트는 세상이 숨긴 진실과 가까워지는데.. 사랑, 정치, 예술.. 모든 것이 혼란스럽던 순간, 하나뿐인 진실이 떠오른다",
                       "type" : 1
                   },

                   /* 10 */
                   {

                       "mno" : 10,
                       "title" : "젠틀맨 (2020)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2F24957778d17a376a08765a121450bb5d9f53a496",
                       "score" : 7.5,
                       "genre" : "범죄/액션",
                       "regdate" : "2020.02.26 개봉",
                       "time" : "113분",
                       "grade" : "청소년관람불가",
                       "director" : "(감독) 가이 리치",
                       "actor" : "(주연) 매튜 맥커너히, 휴 그랜트, 콜린 파렐, 찰리 허냄",
                       "story" : "정글에는 법칙이 있고, 범죄에도 품격이 있다! 유럽을 장악한 업계의 절대강자 '믹키 피어슨'(매튜 맥커너히)은 자신이 세운 마리화나 제국을 걸고 돈이라면 무엇이든 벌이는 미국의 억만장자와의 빅딜을 시작한다. 소문을 듣고 찾아온 무법자 '드라이 아이'(헨리 골딩)와 돈 냄새를 맡은 사립탐정 '플레처'(휴 그랜트)까지 게임에 끼어들게 되면서 오랫동안 지켜온 정글의 질서는 점점 무너지기 시작하는데… 2월 26일, 고품격 범죄 오락의 신세계가 펼쳐진다!",
                       "type" : 1
                   },

               ]
           }
       case 'MOVIE_BOX':
           return {
               movie:[
                   /* 11 */
                   {

                       "mno" : 11,
                       "title" : "울프 콜 (2017)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2Fb0abcee7752076eb7309fd5e50d0419c2c709207",
                       "score" : 8.4,
                       "genre" : "액션/스릴러",
                       "regdate" : "2020.03.05 개봉",
                       "time" : "116분",
                       "grade" : "15세이상관람가",
                       "director" : "(감독) 안토닌 보드리",
                       "actor" : "(주연) 프랑수와 시빌, 오마르 사이",
                       "story" : "보이지 않는다! 들리지 않는다! 눈과 귀를 속이는 핵 잠수함 전쟁! 대통령 명령으로 적진에 핵 미사일 발사를 준비하는 ‘무적함’(SSBN)과 이를 호위하는 핵 추진 공격 잠수함 ‘티탄함’(SSN) 하지만 음파 탐지(SONAR)를 통해 적의 충격적인 비밀을 알아차린 해군은 핵 미사일 발사 10초를 남기고 사상 최악의 핵 전쟁을 막기 위해 사투를 벌이는데…",
                       "type" : 1
                   },

                   /* 12 */
                   {

                       "mno" : 12,
                       "title" : "용길이네 곱창집 (2018)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F09c3dedb57a9c3345f3ed409d9433dd7f3bb352f",
                       "score" : 7.6,
                       "genre" : "가족/드라마",
                       "regdate" : "2020.03.12 개봉",
                       "time" : "128분",
                       "grade" : "15세이상관람가",
                       "director" : "(감독) 정의신",
                       "actor" : "(주연) 김상호, 이정은, 마키 요코, 이노우에 마오, 오타니 료헤이, 오오이즈미 요, 사쿠라바 나나미",
                       "story" : "“설령, 어제가 어떤 날이든 내일은 분명 좋은 날이 올 것이다” 1969년, 고도성장이 한창이던 일본 오사카 공항 근처의 판자촌 동네. 그곳에 전쟁을 겪고 일본으로 건너와 뿌리를 내려 살아가던 사람들이 있었다. 좁디좁은 ‘용길이네 곱창집’ 한 켠에 모여 술 한 잔에 시름을 털어내며 차별과 무시를 꿋꿋하게 버틴다. 가족이 있기에 오늘보다 나은 내일에 대한 희망을 버리지 않고 앞으로 나아간다.",
                       "type" : 1
                   },

                   /* 13 */
                   {

                       "mno" : 13,
                       "title" : "타오르는 여인의 초상 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0dac835c9bb841f7be4a6e59436865541576829054165",
                       "score" : 8.2,
                       "genre" : "로맨스/멜로/드라마",
                       "regdate" : "2020.01.16 개봉",
                       "time" : "121분",
                       "grade" : "15세이상관람가",
                       "director" : "(감독) 셀린 샴마",
                       "actor" : "(주연) 노에미 메랑, 아델 아에넬",
                       "story" : "“후회하지 말고 기억해” 초상화를 그리는 화가 마리안느(노에미 멜랑)는 원치 않는 결혼을 앞둔 귀족 아가씨 엘로이즈(아델 에넬)의 결혼 초상화 의뢰를 받는다. 엘로이즈 모르게 그림을 완성해야 하는 마리안느는 비밀스럽게 그녀를 관찰하며 알 수 없는 묘한 감정의 기류에 휩싸이게 된다. 잊을 수 없는, 잊혀지지 않을 사랑의 기억을 마주하게 할 걸작을 만난다!",
                       "type" : 1
                   },

                   /* 14 */
                   {

                       "mno" : 14,
                       "title" : "리암 갤러거 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fdong-test%2Fbd77f1f4d0f4a315fb67544910bfbb7179908ee4",
                       "score" : 9.8,
                       "genre" : "다큐멘터리",
                       "regdate" : "2020.03.12 개봉",
                       "time" : "85분",
                       "grade" : "15세이상관람가",
                       "director" : "(감독) 찰리 라이트닝, 가빈 피츠제럴드",
                       "actor" : "(주연) 리암 갤러거",
                       "story" : "\"나답게 사는 게 로큰롤이야\" 로큰롤 역사상 가장 위대한 밴드 오아시스의 프론트맨 리암 갤러거. 형 노엘 갤러거와의 불화, 갑작스러운 밴드 해체, 그리고 사생활 문제까지... 밴드도, 노래도 없었던 시간을 뒤로하고 사랑하는 일을 할 마지막 기회를 찾아 마이크 스탠드 앞으로 돌아간 리암 갤러거는 음악을 통해 이제껏 세상이 알지 못했던 무대 뒤 자신의 진짜 삶을 이야기 한다. 3월 12일, 다 같이 Rock ‘N’ Roll!",
                       "type" : 1
                   },

                   /* 15 */
                   {

                       "mno" : 15,
                       "title" : "나이브스 아웃 (2019)",
                       "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F21bd40df541c43bbbd6a8058e21bacce1574236016658",
                       "score" : 8.0,
                       "genre" : "미스터리/스릴러",
                       "regdate" : "2019.12.04 개봉",
                       "time" : "130분",
                       "grade" : "12세이상관람가",
                       "director" : "(감독) 라이언 존슨",
                       "actor" : "(주연) 다니엘 크레이그, 크리스 에반스, 아나 드 아르마스",
                       "story" : "베스트셀러 미스터리 작가가 85세 생일에 숨진 채 발견된다. 그의 죽음의 원인을 파헤치기 위해 경찰과 함께 탐정 브누아 블랑이 파견 되는데…",
                       "type" : 1
                   }

               ]
           }
   }
}
function App2()
{
    const [state,dispatch]=useReducer(reducer,{
        movie:[]
    })

    const html=state.movie.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="#" target="_blank">
                    <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                        <div className="caption">
                            <p>{m.title}</p>
                        </div>
                </a>
            </div>
        </div>
    )
    return (
        <div className={"container"}>
            <div className={"row"}>
                <button className={"btn btn-sm btn-primary"} onClick={()=>dispatch({type:'MOVIE_REAL'})}>현재상영영화</button>
                <button className={"btn btn-sm btn-danger"} onClick={()=>dispatch({type:'MOVIE_SHC'})}>개봉예정영화</button>
                <button className={"btn btn-sm btn-warning"} onClick={()=>dispatch({type:'MOVIE_BOX'})}>박스오피스</button>
            </div>
            <div className={"row"}>
                {html}
            </div>
        </div>
    )
}

export default App2;