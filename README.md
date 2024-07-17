<div align="center">
<h1 style="font-weight: semibold; font-size: 32px;">bitDESK</h1>
<h2 align="center">Made with Next.js 14, Typescript and TailwindCSS. ⚛</h2>
</div>

&nbsp;

<p align="center">
  <a href="#Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#License">License</a>
</p>

<p align="center">
 <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=04D361&labelColor=281F3D" alt="License" />
  <img src="https://img.shields.io/github/repo-size/jhonatan-oliveiradev/devdesk?label=forks&message=MIT&color=04D361&labelColor=281F3D" alt="Forks" />
  <img src="https://img.shields.io/github/stars/jhonatan-oliveiradev/devdesk?label=stars&message=MIT&color=04D361&labelColor=14061f" alt="Stars" />
</p>
&nbsp;
&nbsp;
&nbsp;

<div align="center">

![Cover](./public/preview.png)

</div>

&nbsp;

## 📖 Sobre o projeto

O projeto **bitDESK** é um sistema de gerenciamento de clientes e chamados desenvolvido com as principais tecnologias do mercado.Todo o projeto foi desenvolvido com Next.js, interface e backend. Além disso, a aplicação utiliza de Typescript para manter um padrão seguro, Prisma ORM para gerar os esquemas de banco de dados, priorizando uma boa arquitetura e limpa e escalável. O banco de dados está sendo gerenciado via MongoDB. A aplicação possui sistema de login via Google e a autenticação é gerenciada via NextAuth. TailwindCSS junto ao shadcn-ui foram responsáveis pela estilização minimalista e moderna da interface.

## 💻 Tecnologias utilizadas no projeto

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https:www.tailwindcss.com/)
- [shadcn-ui](https://ui.shadcn.com)
- [PrismaORM](https://www.prisma.io)
- [NextAuth](https://next-auth.js.org/getting-started/example)
- [MongoDB](https://www.mongodb.com)

## 🌿 Branches

- `main` projeto finalizado.

## 🎨 Protótipo do projeto

O protótipo do projeto foi desenvolvido no Figma e você pode visualizá-lo [aqui](https://www.figma.com/)

Você pode conferir o deploy da aplicação [aqui](https://devdesk-nine.vercel.app).

## 📝 Licença

Este projeto está sob a licença MIT. Consulte a [LICENÇA](./LICENSE) para obter mais informações.

## 🗄️ Estrutura de pastas

O projeto está estruturado da seguinte forma:

- 📁 `public`
- 📁 `src`
  - 📁 `api`
    - 📁 `auth`
    - 📁 `customer`
    - 📁 `ticket`
  - 📁 `dashboard`
    - 📁 `components`
    - 📁 `customer`
    - 📁 `new`
    - ⚛️ `layout.tsx`
    - ⚛️ `page.tsx`
  - 📁 `open`
  - ⚛️ `page.tsx`
  - ⚛️ `layout.tsx`
  - ⚛️ `globals.scss`
  - 📁 `components`

## 🛠️ Instruções de execução

Siga as instruções abaixo para rodar o projeto em seu ambiente local:

1. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixar a versão mais recente do Node.js [aqui](https://nodejs.org).

2. Clone este repositório em seu computador ou faça o download do código fonte.

```bash
  git clone https://github.com/jhonatan-oliveiradev/devdesk.git
```

3. Abra o terminal e navegue até o diretório raiz do projeto.

4. Instale as dependências do projeto executando o seguinte comando:

```bash
  npm install
```

5. Após a conclusão da instalação das dependências, inicie o servidor de desenvolvimento local com o comando:

```bash
  npm run dev

  ou

  yarn dev
```

6. O servidor local será iniciado e você poderá acessar o projeto no seu navegador através do seguinte endereço:

```bash
  http://localhost:3000
```

Caso a porta 3000 estiver em uso, automaticamente o Next.js irá subir na próxima porta livre da máquina.

Se deseja alterar a porta padrão na qual a aplicação tentará subir, você pode modificar a porta no arquivo `next.config.js`.

Agora você está pronto para explorar o projeto em seu ambiente local!

## 🚀 Deploy

Para realizar o deploy do projeto, você pode utilizar o Vercel, plataforma de deploy da Next.js.

1. Acesse o site da [Vercel](https://vercel.com) e crie uma conta.

2. Após criar a conta, clique em "Import Project" e selecione o repositório do projeto.

3. Configure as variáveis de ambiente necessárias para o projeto.

4. Clique em "Deploy" e aguarde o deploy ser finalizado.

Agora você tem o projeto disponível em produção!

<hr>

<div align="center">

Feito com 💜 por [Jhonatan Oliveira](https://jhonatanoliveira.com).

</div>