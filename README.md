# Teams

Usar o https://github.com/tleunen/babel-plugin-module-resolver
Para importar os arquivos de forma mais fácil. Olhar o arquivo `babel.config.js` para ver a configuração.

## Tipos de Navegação

### Stack Navigator

O Stack Navigator funciona com uma pilha de telas, onde cada nova tela é empilhada sobre a anterior. Esse modelo de navegação é útil para fluxos onde o usuário navega entre diferentes telas sequencialmente.

Características:

- As telas são empilhadas umas sobre as outras.
- O usuário pode voltar para a tela anterior (como um botão "Voltar").
- Ideal para fluxos como login, detalhes de produtos, ou qualquer navegação baseada em histórico.

### Tab Navigator

O Tab Navigator fornece uma navegação baseada em abas na parte inferior ou superior do aplicativo. Esse tipo de navegação é útil quando há diferentes seções principais no app que o usuário pode alternar rapidamente.

Características:

- Cada aba representa uma seção do app.
- Permite navegação entre telas sem perder o estado anterior.
- Comumente usado em aplicativos como redes sociais, e-commerce e streaming.

### Drawer Navigator

O Drawer Navigator cria um menu lateral ("drawer" ou "gaveta") que pode ser aberto deslizando a tela da borda ou tocando em um ícone de menu. Ele é ideal para aplicativos com muitas opções de navegação.

Características:

- Permite esconder e exibir o menu lateral conforme necessário.
- Ideal para apps com diversas opções, como configurações, categorias, e navegação extensiva.
- Oferece uma experiência mais organizada quando há muitas telas disponíveis.
