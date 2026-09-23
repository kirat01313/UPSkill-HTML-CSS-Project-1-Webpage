# Casa do Funcho

Landing page de uma marca fictícia de rebuçados artesanais de funcho da ilha da Madeira.

Projeto 1 do Módulo 4 (HTML e CSS) — programa UpSkill, IPCA.

---

## Porquê este tema

O tema era livre. Escolhi um produto regional artesanal por três razões concretas:

**1. A história já existe e é verdadeira.** Em 1419, quando os navegadores portugueses chegaram à ilha, encontraram a baía coberta de funcho bravo (*Foeniculum vulgare*) — e foi por isso que lhe chamaram **Funchal**. Uma marca de rebuçados de funcho da Madeira não precisa de inventar um posicionamento: já nasce com um nome que explica a origem de uma capital. É um gancho que prende e que se lembra. E realmente existem os rebuçados e são comercializados.

**2. Produto artesanal pede narrativa, não catálogo.** Um rebuçado de 3,50 € não se vende por especificações. Vende-se pelo que representa: a colheita à mão, o tacho de cobre, as três gerações. Isso encaixa perfeitamente numa *landing page* — uma página única, lida de cima a baixo, onde a ordem das secções conta uma história, o que se faz bem só com HTML e CSS que é o foco do trabalho.

---

## Porque é que esta estrutura vende

As nove secções não estão por ordem estética. Seguem um **funil de conversão**: cada uma responde a uma objeção diferente do visitante, pela ordem em que essas objeções aparecem na cabeça dele.

### 1. Header fixo — a ação está sempre à mão
O cabeçalho usa `position: sticky`, por isso acompanha o scroll. O visitante nunca tem de voltar ao topo para navegar ou agir. Numa página longa, obrigar a subir é perder gente pelo caminho.

### 2. Hero — três segundos para justificar a visita
É o que decide se a pessoa fica ou fecha o separador. Por isso concentra quatro sinais:

- **A etiqueta** ("Tradição familiar desde 1938 · Câmara de Lobos") dá credibilidade imediata, antes de qualquer texto de venda.
- **O título** ("O doce que deu nome *ao Funchal*") entrega o gancho histórico numa linha. O itálico dourado no "ao Funchal" força o olho a parar exatamente na palavra que interessa.
- **Dois botões, não um.** "Ver coleção de sabores" para quem já está convencido; "A nossa história" para quem ainda não está. Se fosse um único botão obrigaria 0os dois tipos de visitante ao mesmo caminho e perderia um deles.
- **A barra de destaques** (100% natural · tachos de cobre · origem demarcada) responde às três dúvidas mais óbvias antes de elas serem feitas.

### 3. Sabores — o produto aparece cedo, com o preço à vista
Seis cartões com fotografia, descrição e **preço visível**. Esconder o preço cria atrito: o visitante assume que é caro e desiste. Mostrá-lo logo filtra quem não é cliente e tranquiliza quem é. São seis opções, suficiente para haver escolha, poucas o bastante para não paralisar a decisão.

Sendo um produto alimentar, a fotografia faz o trabalho pesado. Por isso os cartões têm `aspect-ratio` e `object-fit: cover`: todas as imagens ficam do mesmo tamanho e a grelha lê-se como um conjunto, não como seis coisas soltas. Foram todas geradas com IA utilizando a ferramente do Google Gemini.

### 4. História — para um produto artesanal, a história *é* o produto
É aqui que a marca deixa de competir com rebuçados de supermercado. O layout assimétrico (5fr / 7fr) dá peso à fotografia do atelier sem roubar espaço ao texto, e a citação destacada do confeiteiro de 3.ª geração põe uma cara humana na marca. Mesmo em dispositivos móveis ainda fica com uma boa estrutura.

### 5. Como é feito — é isto que justifica o preço
Quatro passos numerados com **números específicos**: colheita das 06h às 09h, 18 horas de maceração, 145 °C exatos. A especificidade é o que separa "artesanal" de marketing vazio — qualquer marca diz que é artesanal, poucas dizem a que temperatura e todos os outros detalhes.

É a secção que transforma "5 € por um saco de rebuçados?" em "5 € por isto é barato". A numeração é feita com `counter-increment` em CSS, não escrita à mão: se um dia se acrescentar um passo, renumera-se sozinha.

### 6. Formatos — a escolha é guiada, não deixada ao acaso
Quatro opções de compra com um cartão em destaque ("Mais popular"). Isto é deliberado: um preço sozinho não tem contexto, mas **três preços lado a lado criam uma referência**. A saqueta de 3,50 € faz o pacote familiar parecer razoável; a caixa de 18,50 € faz o mesmo pacote parecer económico. 

O quarto cartão (a granel / hotelaria) existe para um comprador completamente diferente, restaurantes e hotéis.

### 7. Testemunhos — prova social imediatamente antes da conversão
Está colocada a seguir aos preços e antes do formulário, que é o ponto de maior hesitação. Ver que outras pessoas já compraram reduz o risco percebido exatamente no momento em que ele é maior.

### 8. Newsletter — recupera quem não compra hoje
A maioria dos visitantes de uma primeira visita não compra. Sem esta secção, saem sem deixar rasto. Pedir um email é o compromisso mais baixo que existe — e transforma uma visita perdida num contacto futuro.

Repare-se que a página **não termina a pedir uma compra**, termina a pedir um email. A ação final é sempre a de menor atrito.

### 9. Rodapé — provar que o negócio existe
Morada física, telefone e certificação. Para uma marca pequena e desconhecida, isto não é enchimento: é a diferença entre parecer um negócio real e parecer uma página anónima.

---

## Decisões de design

A paleta vem da paisagem da ilha:

| Cor | Valor | De onde vem |
|---|---|---|
| Verde funcho | `#2A5A3B` | A planta e as encostas |
| Castanho madeira | `#5C3D2E` | Os tachos de cobre e a madeira do atelier |
| Dourado antigo | `#C5A059` | A calda de açúcar e o mel de cana |
| Cremes | `#FDF9EF` / `#F7F3E9` | Papel envelhecido — reforça a ideia de tradição |

Duas famílias tipográficas com funções separadas: **Playfair Display** (serifada) nos títulos, para o lado histórico e artesanal; **Plus Jakarta Sans** (sem serifa) no texto corrido, para legibilidade. Um único tipo de letra faria a página parecer ou antiquada demais ou moderna demais.

Os fundos alternam entre creme e creme mais escuro de secção para secção. Isso cria separação sem precisar de linhas ou caixas, e ajuda o olho a perceber onde acaba um bloco e começa o outro.

---

## Tecnologias

- **HTML5** semântico (`header`, `main`, `section`, `article`, `figure`, `blockquote`, `address`)
- **CSS3** — Grid, Flexbox, variáveis, `counter-increment`, media queries
- **JavaScript** — cru.
- **Google Fonts** — Playfair Display + Plus Jakarta Sans

## Funcionalidades

- **Tema escuro** — alternado por botão, guardado em `localStorage` entre visitas
- **Ano automático** no rodapé, via JavaScript
- **Responsivo** — três *breakpoints*: desktop, tablet (≤1024px) e telemóvel (≤768px)
- **Acessibilidade** — link de salto para o conteúdo, `:focus-visible`, `prefers-reduced-motion`, textos alternativos em todas as imagens

## Estrutura

```
├── index.html
├── css/
│   └── style.css        17 secções comentadas
├── js/
│   └── script.js
├── assets/
│   └── img/
└── README.md
```

## Como ver

Abrir o `index.html` num navegador. Não precisa de servidor nem de instalação.

---

## Autor

Tarik Chaia — IPCA / UpSkill 2026 - linkedin.com/in/tarik-guaranho/

## Docente

Rodrigo Costa - linkedin.com/in/rfcosta85/