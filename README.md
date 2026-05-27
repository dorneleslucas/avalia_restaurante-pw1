# Avalia Restaurante

Projeto educacional de Programacao Web feito com HTML e CSS para apresentar restaurantes, destacar opcoes e preparar telas para avaliacoes.

## Objetivo

O site simula uma plataforma simples onde usuarios podem conhecer restaurantes antes de escolher onde comer. A estrutura visual ja deixa espaco para uma futura implementacao com JavaScript, DOM e localStorage.

## Paginas

- `index.html`: pagina inicial alternativa na raiz do projeto.
- `home/index.html`: pagina principal com apresentacao do projeto.
- `destaques/index.html`: catalogo de restaurantes com filtros visuais por valor, tipo e status de funcionamento.
- `feedback/index.html`: formulario visual para avaliar restaurante, atendimento, custo, qualidade da comida e comentario geral.
- `login/index.html`: tela visual de login.
- `cadastro/index.html`: tela visual de cadastro.

## Arquivos principais

- `style.css`: estilos globais do projeto.
- `scripts/destaques.js`: arquivo reservado para a logica dos filtros da pagina de destaques.
- `scripts/feedback.js`: arquivo reservado para capturar os dados da avaliacao pelo DOM.
- `scripts/localStorage.js`: arquivo reservado para salvar e recuperar dados no localStorage.

## Observacao sobre a logica

Nesta etapa foram criados apenas HTML e CSS. Os arquivos JavaScript foram deixados prontos para receber a implementacao futura, sem regras de DOM ou localStorage aplicadas ainda.

## Possiveis proximos passos

- Filtrar os cards de restaurantes usando os campos da pagina `destaques`.
- Salvar avaliacoes no localStorage pela pagina `feedback`.
- Exibir avaliacoes salvas em uma lista.
- Integrar login e cadastro com dados armazenados localmente.
