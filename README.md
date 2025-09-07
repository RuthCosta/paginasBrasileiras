# Páginas Brasileiras

Embora muitas vezes subestimada, a literatura brasileira é riquíssima. Possuindo obras de grande impacto social, cultural e científico, com grandes pensadores de renome como José de Alencar, Machado de Assis, Lima Barreto, Manuel Bandeira, Clarisse Lispecto, Ariano Suassuna, dentre outros autores que marcaram gerações nas suas épocas e estilos literários respectivos, nossa literatura merece reconhecimento e destaque.

Dito isto, o presente projeto tem como objetivo mostar um pouco do estilo Realista e Naturalista brasileiro, movimento surgido em 1881 com o objetivo de expor e denunciar injustiças na sociedade da época. Criamos um site chamado “Páginas Brasileiras”, onde o usuário irá encontar um breve resumo sobre os estilos, suas características, autores e principais obras.

[![status do projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)](https://github.com/seu-usuario/seu-projeto)

## Funcionalidades
- Mostrar um pequeno resumo sobre o movimento realista brasileiro;
- Mostrar algumas características do Realismo-Naturalismo no Brasil;
- Destacar os autores realista brasileiros: seu período de vida, suas principais obras e um pouco do seu estilo de escrita.

## Tecnologias Utilizadas
- Html + CSS + JavaScript
- Git + GitHub
- Deepseek (utilizada para extrair informações sobre a literatura realista e naturalista brasileira)

## Pré-requisitos
- Java toolkit
- Git

## Como executar
1. **Clone o repositório:**
```bash
git clone https://github.com/RuthCosta/paginasBrasileiras.git
```
2. **Entre no diretório:**
```bash
cd paginasBrasileiras
```
3. **Abra front-end no navegador**
## Funções Exigidas
1. **Função Lambda**
```bash
// Recebe o objeto “a” (autor) e retorna um string com seu período de vida.
const formatDates = a => `${a.birth} — ${a.death}`;

// Também utilizada em eventos
authorLabel.addEventListener('mouseenter', makeHoverHandler(author.works));
    authorLabel.addEventListener('mouseleave', makeLeaveHandler(author.works));
```
2. **List Comprehension**
```bash
// Em “author.works” foi aplicado “workToNode” que combina filter + map para simular uma list comprehension
const listComprehension = (arr, mapFn, filterFn = () => true) => arr.filter(filterFn).map(mapFn);
listComprehension(author.works,w=>workToNode(w)).forEach(n=>pop.appendChild(n));
```
3. **Closure**
```bash
// Cria um manipulador de eventos que lembra da lista de obras
const makeHoverHandler = (works) => {
  return (ev) => {
    const pop = ev.currentTarget.querySelector('.popover');
    if(pop) pop.style.display = 'block';
  };
};
// A variável "open" persiste entre as chamadas, permitindo que o botão alterne entre “Detalhes” e “Fechar”
const makeToggleHandler = (createDetailNode) => {
  let open = false; // variável preservada pela closure
  return () => {
    open = !open;
    // lógica de abrir/fechar detalhes
  };
};
```
4. **Funcões de Alta Ordem**
```bash
// Recebe uma função “fn” e retorna uma função que aplica “fn” a cada elemento do um array:
const mapToHtml = (fn) => (arr) => arr.map(fn);
// Também utilizada no toggle:
const makeToggleHandler = (createDetailNode) => { ... return () => { ... } };
```
## Contribuição
| Aluno | Matrícula | Contribuição |
|-------| --------- | ------------ |
| Ruth de Fátima da Costa Silva | 2222906 | Código |
| Maria de Fátima dos Santos Mourão | 2323870 | Código |
| Thaís Sousa da Silva | 2319193 | Testes |
| Júlio Costa Moraes Neto | 2327091 | Documentação |
| Francisco Willame de Oliveira Silva | 2326290 | Documentação |




