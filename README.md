# 포트폴리오 - Redux를 활용한 상품 관리

이 프로젝트는 Redux를 사용하여 간단한 상품 관리 기능을 구현한 예시입니다. Redux를 이용하여 상태를 관리하고 React 컴포넌트에서 이를 활용하는 방법을 보여줍니다.

## 기술 스택

- React
- Redux
- styled-components

## Redux 소개

Redux는 JavaScript 애플리케이션의 상태 관리 라이브러리로, 예측 가능하고 테스트 가능한 상태 관리를 제공합니다. 이 프로젝트에서 Redux를 사용하여 전역 상태를 효율적으로 관리하고 다양한 컴포넌트 간의 데이터 교류를 간소화했습니다.

Redux의 주요 개념은 다음과 같습니다:

- **액션(Action)**: 상태 변화를 일으킬 때 발생하는 객체로, `type` 필드를 가지고 있습니다. 예를 들어, 상품 목록을 설정하는 액션인 `SET_PRODUCTS`와 선택된 상품을 설정하는 액션인 `SET_SELECTED_PRODUCT`이 있습니다.

- **리듀서(Reducer)**: 액션의 타입에 따라 상태를 어떻게 변화시킬지 정의하는 순수 함수입니다. 이 프로젝트에서는 `rootReducer` 함수를 통해 각 액션에 대한 상태 변화를 처리하고 있습니다.

- **스토어(Store)**: 애플리케이션의 상태를 담고 있는 단일 객체입니다. Redux에서는 `createStore` 함수를 사용하여 스토어를 생성하고, `Provider` 컴포넌트를 통해 하위 컴포넌트에 상태를 제공합니다.

Redux를 사용하면 상태 관리를 중앙 집중화하여 애플리케이션의 복잡성을 줄이고 데이터 흐름을 예측 가능하게 만들 수 있습니다.

## 설치 및 실행 방법

```bash
# 프로젝트 클론
git clone https://github.com/your/repository.git

# 프로젝트 폴더로 이동
cd project-folder

# 의존성 설치
npm install

# 애플리케이션 실행
npm start

```
