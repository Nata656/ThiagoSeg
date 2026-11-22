# ThiagoSeg – Site de Segurança do Trabalho

Site institucional feito em **React + Vite** com **React Router**.

## Rodar no computador

```bash
npm install
npm run dev
```

Abre em http://localhost:5173

## Gerar versão para publicar

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, telefone, WhatsApp, e-mail, endereço, redes sociais | `src/data/site.js` |
| Textos das páginas de serviço | `src/data/services.js` |
| Cores e fontes | `src/index.css` |
| Fotos dos banners | `public/images/` + campo `image` de cada página |

## Páginas

- `/` Home
- `/quem-somos`
- `/gestao-integrada`
- `/servicos/saude-ocupacional`, `/servicos/treinamentos`, `/servicos/solucao`, `/servicos/esocial`, `/servicos/nr-12`
- `/contato`
