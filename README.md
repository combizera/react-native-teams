# Teams

Projeto da Rocketseat. Trilha de React Native

## Tipos de Navegação

### Stack Navigator

O Stack Navigator funciona com uma pilha de telas, onde cada nova tela é empilhada sobre a anterior. Esse modelo de navegação é útil para fluxos onde o usuário navega entre diferentes telas sequencialmente.

**Características:**

- As telas são empilhadas umas sobre as outras.
- O usuário pode voltar para a tela anterior (como um botão "Voltar").
- Ideal para fluxos como login, detalhes de produtos, ou qualquer navegação baseada em histórico.

### Tab Navigator

O Tab Navigator fornece uma navegação baseada em abas na parte inferior ou superior do aplicativo. Esse tipo de navegação é útil quando há diferentes seções principais no app que o usuário pode alternar rapidamente.

**Características:**

- Cada aba representa uma seção do app.
- Permite navegação entre telas sem perder o estado anterior.
- Comumente usado em aplicativos como redes sociais, e-commerce e streaming.

### Drawer Navigator

O Drawer Navigator cria um menu lateral ("drawer" ou "gaveta") que pode ser aberto deslizando a tela da borda ou tocando em um ícone de menu. Ele é ideal para aplicativos com muitas opções de navegação.

**Características:**

- Permite esconder e exibir o menu lateral conforme necessário.
- Ideal para apps com diversas opções, como configurações, categorias, e navegação extensiva.
- Oferece uma experiência mais organizada quando há muitas telas disponíveis.

---

## Prop Drilling

O **Prop Drilling** ocorre quando uma prop precisa ser passada por vários componentes intermediários até chegar ao componente que realmente precisa dela. Esse padrão pode tornar o código mais difícil de manter e escalar, pois cada componente intermediário precisa explicitamente passar a prop adiante.

### Como evitar Prop Drilling?

- **Context API**: Criar um contexto global para armazenar e acessar os dados sem precisar passar props manualmente.
- **Redux/Zustand**: Usar uma biblioteca de gerenciamento de estado para centralizar os dados da aplicação.
- **Custom Hooks**: Criar hooks personalizados que encapsulam a lógica e podem ser usados em diferentes componentes sem necessidade de passar props manualmente.

Exemplo de **Prop Drilling**:

```jsx
function Parent() {
  const user = "João";
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <Text>{user}</Text>;
}
```

Nesse caso, `user` precisa ser passado por `Child` até `GrandChild`, mesmo que `Child` não use a prop.

Com **Context API**, podemos evitar isso:

```jsx
const UserContext = createContext();

function Parent() {
  return (
    <UserContext.Provider value="João">
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const user = useContext(UserContext);
  return <Text>{user}</Text>;
}
```

Agora, `GrandChild` acessa `user` diretamente do contexto, sem precisar passar por `Child`.

---

## Async Storage

O **Async Storage** é uma API do React Native usada para armazenar dados de forma persistente no dispositivo do usuário. Ele funciona de maneira assíncrona e permite salvar pequenas quantidades de dados, como preferências do usuário ou informações de sessão.

### Como usar Async Storage?

Instale a biblioteca:

```sh
npm install @react-native-async-storage/async-storage
```

### Salvando e recuperando dados

```jsx
import AsyncStorage from "@react-native-async-storage/async-storage";

// Salvando um valor
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Erro ao salvar dados", error);
  }
};

// Recuperando um valor
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Erro ao recuperar dados", error);
  }
};
```

### Removendo dados

```jsx
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao remover dados", error);
  }
};
```

---

## UseEffect

O `useEffect` é um Hook do React que permite executar efeitos colaterais em componentes funcionais. Ele é usado para ações como chamadas de API, assinaturas de eventos e manipulação de estados globais.

### Regras básicas do `useEffect`

- **Executa após o primeiro render** (por padrão).
- **Pode ser disparado em respostas a mudanças de dependências**.
- **Deve retornar uma função de limpeza** se for necessário limpar efeitos colaterais.

### Exemplo básico

```jsx
useEffect(() => {
  console.log("O componente montou");
}, []); // Executa apenas uma vez
```

### Executando quando uma variável muda

```jsx
useEffect(() => {
  console.log("Estado atualizado:", count);
}, [count]);
```

### Limpando efeitos colaterais

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Executando");
  }, 1000);

  return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
}, []);
```

### `useFocusEffect`

O `useFocusEffect` é um Hook do React Navigation que executa efeitos quando a tela está em foco.

Exemplo:

```jsx
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

useFocusEffect(
  useCallback(() => {
    console.log("fetching groups");
    fetchGroups();
  }, [])
);
```

**Explicação:**

- A função dentro de `useFocusEffect` será chamada **toda vez que a tela ganhar foco**.
- Isso é útil para atualizar dados quando o usuário volta para uma tela.
- `useCallback` evita recriar a função desnecessariamente, melhorando a performance.

---
