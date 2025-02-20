# 프로그라피 10th FE 사전 과제 요구사항

## 📌 필수 요구사항 (구현 스팩)

1️⃣ **리크루팅 진행 단계를 표시합니다.**

- 지원자의 진행 상황을 직관적으로 확인할 수 있어야 합니다.
- 참고 이미지
  <img width="727" alt="Image" src="https://github.com/user-attachments/assets/3249213d-41e1-4ae9-8cc2-5c183bf859de" />

2️⃣ **제출하기 버튼을 누르기 전까지 리크루팅 폼 데이터가 유지되어야 합니다.**

- 사용자가 작성 중인 데이터를 실수로 잃지 않도록 저장되어야 합니다.
- react-hook-form을 사용하여 폼 데이터를 관리하며, localStorage를 활용해 사용자가 페이지를 이탈하더라도 기존 데이터를 유지하도록 구현하였습니다.

3️⃣ **필수 입력 항목이 있으며, 필수 항목을 입력하기 전까지는 다음 단계로 넘어갈 수 없어야 합니다.**

- 필수 입력 항목이 누락되었을 경우, 제출이 차단되어야 합니다.
- react-hook-form의 required 옵션을 사용하여 필수 입력 항목을 지정하였으며, 해당 항목이 입력되지 않을 경우 유효성 검사를 통해 제출을 차단하도록 구현하였습니다.

4️⃣ **다음 단계로 넘어갈 경우, 필수 입력 항목이 누락되었을 때 경고 표시 및 알림이 제공되어야 합니다.**

- 사용자가 어떤 항목을 입력해야 하는지 명확하게 안내해야 합니다.
- 참고 이미지
  <img width="683" alt="Image" src="https://github.com/user-attachments/assets/52ec9362-8b6e-423e-be31-1b4085c9fea0" />

5️⃣ **특정 항목에 대한 예시 데이터를 표시해야 합니다.**

- 사용자가 올바르게 입력할 수 있도록 가이드 역할을 하는 예시 데이터를 제공합니다.(placeholder)
- 참고 이미지
  <img width="648" alt="Image" src="https://github.com/user-attachments/assets/674e53a6-2025-4c07-8692-300fdbf38d95" />

6️⃣ **API 통신을 위한 리크루팅 폼 데이터를 구성해야 합니다.**

- 백엔드와의 연동을 위해 JSON 또는 FormData 형태로 데이터를 변환하여 전송해야 합니다.
- 출하기 클릭 시 폼 데이터를 JSON 형식으로 전송할 수 있도록한 코드를 주석해 두었음

## 💡 추가 UI/UX 개선 사항

- **지원서 페이지를 벗어날 경우 경고 모달 표시**

  - 사용자가 `apply` 페이지를 벗어나려 하면 **"현재 페이지가 저장이 되지 않았습니다."** 모달이 표시되어, 실수로 나가는 것을 방지해야 합니다.
  - 참고 이미지
    <img width="588" alt="Image" src="https://github.com/user-attachments/assets/ab11ba79-3233-4d6e-b93e-e5da729a55f0" />

- **로컬 스토리지를 이용한 자동 저장 기능**

  - 리크루팅 폼 데이터를 localStorage에 **자동 저장**하여, 사용자가 페이지를 새로고침하거나 다시 방문해도 데이터를 복구할 수 있어야 합니다.
  - loaclStorage 이미지
    <img width="805" alt="Image" src="https://github.com/user-attachments/assets/951f1a93-49e2-452a-a066-28997d3bb5df" />

- **이전 작성 내용 불러오기 기능**
  - 사용자가 다시 `apply` 페이지에 방문하면 **"이전에 저장된 폼 데이터가 있습니다. 불러오시겠습니까?"** 모달을 띄워 선택할 수 있도록 합니다.
  - 참고 이미지
    <img width="671" alt="Image" src="https://github.com/user-attachments/assets/1c141787-618a-49ae-9f4b-6806f5394368" />

## 🚀 Getting Started

```bash
$ yarn dev
```
