# React Hook Form 으로 Sortable 상태 관리

## 고민해 볼만한 주제

### Provider
해당 라이브러리도 과도한 props 의 중첩을 막기 위해 React context api 기반으로 provider 를 제공  
하지만 provider 로 감싸면 입력창 하나하느의 isDirty(최초수정) 상태가 변할때 전체적으로 돔을 렌더링함
이를 막기 위해서는 input 에서 memo 를 통해 isDirty의 변화를 감지해야함

https://react-hook-form.com/advanced-usage#FormProviderPerformance

**하지만 Provider 는 사용하면 좋을 것 같다.**

### Design System
해당 라이브러리를 사용하기 위해서는 register 과정이 만드시 필요한데,
이렇게 되면 디자인 시스템 컴포넌트를 한 번 랩핑해서 사용해야한다. 그리고 해당 디자인 시스템에서도 register 를 바로 사용하지 못하고, useController 를 이용해야함

해결방법
1. 해당 라이브러리에 종속적인 디자인 시스템 작성
2. Provider 를 이용해 디자인 시스템 라이브러리에서 바로 상태에 접근할 수 있도록 변경, 해당 코드로 결국 라이브러리에 종속적인 컴포넌트가 되어버림
3. useController 를 이용해서 디자인 시스템 컴포넌트 랩핑 컴포넌트 작성 (현재 사용해봄)
4. customHook 을 이용해서 아래 예제를 잘 짜봄 (시도 예정)
```typescript jsx
import React, { useEffect } from "react";
import { Input, Select, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";

const defaultValues = {
  select: "",
  input: ""
};

function App() {
  const { register, handleSubmit, setValue, reset, watch } = useForm({ defaultValues });
  const selectValue = watch("select"); // 요 기능
  const onSubmit = data => console.log(data);

  useEffect(() => {
    register({ name: "select" }); // 요 기능
  }, [register]);

  const handleChange = e => setValue("select", e.target.value); // 요 기능

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select value={selectValue} onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
      <Input {...register("input")} />
      
      <button type="button" onClick={() => reset({ ...defaultValues })}>Reset</button>
      <input type="submit" />
    </form>
  );
}
```

### 배열형태의 데이터 다루기
useFieldArray 를 사용해도 괜찮음, 실제로 제공하는 메서드들이 많아서 유용했음
다만 사용하지는 않지만 보내야하는 값들은 register를 별도로 해줘야 하는 것 같음
해당 정렬 예제에서는 id 데이터가 있지만 실제 submit 단계에서 자동으로 잡히지 않은 해당 property도 컨트롤할 수 있게끔 변경이 필요함  
https://react-hook-form.com/api/usefieldarray

### 전역 상태관리
스탭 별로 넘어가는 form 을 구현해야하는 경우에는 redux 나, mobx 등 상태관리의 도움을 받는 것이 좋을 것 같다.  

**기존 form 플로우**   
폼 입력 -> submit -> 서버 요청

**step 이 존재하는 경우 플로우**  
step1 폼 입력 -> submit -> action dispatch -> step2 이동 -> step2 폼 입력 -> submit -> action dispatch -> 제출(store 에 있는 데이터 기반)

https://react-hook-form.com/advanced-usage#WizardFormFunnel


### 역할 분리
만약 현재 구조에 해당 폼이 들어간다면 mobx 와는 확실히 차이가 있을 것 같다.  
mobx 는 class 구조이기 때문에 컴포넌트의 lifecycle 영역에 침범하지 못함  
따라서 관리하는 상태와 컴포넌트의 생명주기를 따로 관리하기 떄문에 페이지난 form 당 두개의 파일이 나옴

하지만 요건 깔끔하게 react custom hook 으로 떼어서 사용할 수 있음
렌더링 시 서버 api 해야하는 경우 자연스럽게 바로 form setValue 하면 됨

### 로직과 상태가 묶여 있어야 한다.
class 를 사용한 mobx 패턴에서는 해당 부분에 특화되어 있다.  
해당 부분은 미흡한 것 같음 Controller 라는 컴포넌트로 Container Component 의 역할을 할 수는 있지만 mobx 에 비해 매끄럽지 않음  
https://react-hook-form.com/api/usecontroller/controller

### 타입스크립트  
히트다 👍 어지간한건 타입 문제 없이 돌아갈 수 있을 것 같다.  
https://react-hook-form.com/ts


### 결론  
mobx 를 고도화해서 사용하기 전까지는 사용할 만하다. 일단 문서화가 잘되어 있어서 러닝커브가 적다.  
실제로 현재 mobx 고도화하는 방향이 해당 방향과 비슷하다. 만약 mobx 고도화가 일찍 끝난다면 mobx 를 쓸지도...? ㅎ