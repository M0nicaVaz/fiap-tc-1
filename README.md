# FIAP - Tech Challenge 1: Aplicativo de Finanças

Este é um projeto de finanças desenvolvido como parte do Tech Challenge da FIAP. O objetivo foi colocar em prática os conceitos aprendidos na **Fase 1**.

## ✨ Funcionalidades

- Listagem e visualização de transações financeiras.
- Cadastro de novas receitas e despesas.
- Edição de transações existentes.
- Remoção de transações.
- Resumo financeiro com saldo total, total de receitas e total de despesas.
- Persistência de dados no `localStorage` do navegador.

## 💻 Acesso à Produção

Clique nos links abaixo para acessar os ambientes de produção:

- **[Projeto](https://fiap-tc-1.vercel.app/)**
- **[StoryBook](https://fiap-tc-1-storybook.vercel.app/)**

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para desenvolvimento de aplicações web.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript para tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS para estilização da UI.
- **[Storybook](https://storybook.js.org/)**: Ferramenta para documentação e desenvolvimento de componentes de UI.
- **[ESLint](https://eslint.org/)** e **[Prettier](https://prettier.io/)**: Ferramentas para garantir a qualidade e a consistência do código.
- **[Husky](https://typicode.github.io/husky/)**: Automação de hooks do Git para garantir a qualidade dos commits.
- **[Vercel](https://vercel.com/)** e **[GitHub Actions](https://github.com/features/actions)**: Plataformas para CI/CD e deploy da aplicação.

## 📂 Estrutura do Projeto

O projeto segue uma estrutura organizada para separar as responsabilidades e facilitar a manutenção:

```
src/
├── app/                # Rotas e páginas da aplicação (App Router)
├── assets/             # Ilustrações e componentes svg
├── components/         # Componentes React reutilizáveis
│   ├── form/           # Componentes exclusivos de formulários
│   ├── layout/         # Componentes comuns entre páginas
│   ├── ui/             # Componentes mais básicos de ui
│   └── transation/     # Componentes exclusivos da feature transaction
├── constants/          # Constantes globais (ex: rotas)
├── context/            # Provedores de contexto do React
├── hooks/              # Hooks customizados
├── lib/                # Lógica de negócio, serviços e repositórios
│   ├── factories/      # Camada de criação de objetos (criação de instâncias)
│   ├── repositories/   # Camada de acesso a dados (comunicação com localStorage)
│   ├── services/       # Camada de serviço (regras de negócio)
│   └── types/          # Definições de tipos e interfaces
├── stories/            # Stories do Storybook
├── styles/             # Estilos globais, padronização de cores e textos
└── utils/              # Funções utilitárias
```

Essa estrutura foi pensada para refletir uma arquitetura com boa legibilidade e manutenibilidade, respeitando o que foi aprendido nessa fase.

## 🛠️ Executando o Projeto Localmente

Para executar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) ou outro gerenciador de pacotes (Yarn, pnpm)

### Instalação e Execução

1.  Clone o repositório:
    ```bash
    git clone https://github.com/M0nicaVaz/fiap-tc-1.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd fiap-tc-1
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Crie um arquivo `.env` de acordo com o `.env.example`.
5.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

### Executando o Storybook

Para visualizar os componentes de forma isolada, execute o Storybook:

```bash
npm run storybook
```
