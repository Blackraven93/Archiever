# Archiever Router

## Global
- Home(홈) -> /
- search(검색) -> /search
- interview(인터뷰) -> /interview
- F&Q(문의) -> /faq (문의하기 따로 만들 것 https://playentry.org/faq)
- login(로그인) -> /login

## Join
- join(회원가입) -> /join
- 이용약관 -> /join/...
- 개인정보 -> /join/privacy
- 마케팅 -> /join/...

## Users
- profile(프로필) -> /users/:id
- edit(회원정보 수정) -> /users/:id/edit
- delete(회원 삭제) -> /users/:id/delete
- archive(동영상 보관함) -> /users/:id/archive

## Videos
- video(영상 서비스) -> /videos/:id
- upload(업로드) -> /videos/:id/upload
- edit(영상 수정) -> /videos/:id/edit
- delete(영상 삭제) -> /videos/:id/delete
- comments(영상 댓글) -> /videos/:id/comment/:id
- comments delete(댓글 삭제) -> /videos/:id/comment/:id/delete


