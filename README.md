# Portfólio · João Pedro Oliveira

Meu site pessoal, com os projetos de IA, dados e desenvolvimento web que estão no meu GitHub. É HTML, CSS e JavaScript puros, sem framework e sem etapa de build.

## O que tem no site

- **Sobre:** formação (Ciência da Computação na USCS) e como eu gosto de trabalhar.
- **Projetos em destaque:**
  - [OpenFinance Intelligence](https://github.com/oliveiradev06/OPEN-FINANCE-INTELLIGENCE): plataforma full stack que analisa dados de Open Finance e aponta oportunidades comerciais explicáveis (FastAPI, scikit-learn, Next.js).
  - [Case PLD](https://github.com/oliveiradev06/case-PLD): triagem antilavagem com regras em pandas e um agente LLM que redige os pareceres, com ferramentas expostas via MCP.
- **Outros projetos:** [Fullstack Auth](https://github.com/oliveiradev06/tarefa-sexta), [Análise de Salários](https://github.com/oliveiradev06/-Analise-de-Salarios-na-Area-de-Dados) e [COVID-19 no Comércio](https://github.com/oliveiradev06/dados-covid19).
- **Tecnologias** e **contato**.

## Rodando localmente

Basta abrir o `index.html` no navegador. Se preferir um servidor local:

```bash
python -m http.server 8000
```

e acessar http://localhost:8000.

## Publicando no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**, branch `portifolio-joao` e pasta `/ (root)`.
3. Depois de alguns minutos o site fica em `https://oliveiradev06.github.io/<nome-do-repositório>/`.

## Estrutura

```
index.html                 página única com todas as seções
style.css                  estilos (tema escuro, responsivo)
script.js                  destaque do menu e ano do rodapé
img/joao.jpg               foto de perfil
img/favicon.svg            ícone da aba
img/projetos/              prints dos projetos
curriculo/                 currículo em PDF
```
