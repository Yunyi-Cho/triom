# TriOm 배포 파일 업로드 안내

배포 주소:

https://Yunyi-Cho.github.io/triom/?tab=classroom&lang=ko#/triom

업로드할 로컬 폴더:

`C:\Users\user\Documents\Codex\2026-05-27\4\deliverables\triom_github_pages_site_ready`

이 폴더 안의 모든 파일과 폴더를 GitHub 저장소 루트에 업로드합니다.

## 권장 순서

1. GitHub 저장소 `Yunyi-Cho/triom` 열기
2. `Add file` > `Upload files` 선택
3. 위 로컬 폴더 안의 파일과 폴더 전체 선택 후 드래그 앤 드롭
4. Commit message: `Deploy TriOm static site`
5. `Commit changes` 클릭
6. `Actions` 탭에서 `Deploy TriOm to GitHub Pages` 실행 완료 확인
7. `Settings` > `Pages`에서 주소 확인

## 참고

- 가장 큰 파일은 약 10.3MB로 GitHub 웹 업로드 한도보다 작게 조정됨
- 원래 큰 `naviom_dataset.json`은 22개 JSON 조각으로 분할됨
- `data/naviom_dataset_manifest.json`을 통해 앱이 자동 병합 로딩
