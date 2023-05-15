# **Stitches PoC**
## Introdução
Neste arquivo iremos apresentar a prova de conceito (PoC) do Stitches, o que é, o porque iremos usar ao invés do CSS puro, dentre outros pontos.
## O que é Stitches?
Stitches é uma biblioteca de CSS-in-Java, que quer dizer basicamente escrever os componentes do Css e propriedades na própria linguagem do Javascript.
Usamos Stitches para uma maior facilidade e manutenabilidade do código.
## Principais Funcionalidades do Stitches
* Variants:

Como mostrado na imagem a seguir, variantes permite variações de medida na mesma propriedade, as quais são reconhecidades pelo próprio javascript na atribuição da propriedade a um componente.

![Exemplo de uso de Variants](https://www.javascript.christmas/assets/stitches-03.png)

* Custom Tokens:

Com essa funcionalidade podemos customizar objetos com valores de cores ou outros valores desejados, nos permitindo chamar ao longo do código o objeto correspondente ao valor desejado e não ter que memorizar qual valor está sendo atribuído por todo o projeto.

![Exemplo de uso de Custom Tokens](https://www.javascript.christmas/assets/stitches-02.png)

![Outro uso de Custom Tokens](https://github.com/xnd-dev/ipas/assets/71663097/b823ee70-b386-43b8-aef4-33c6bd76fa34)

* Themes:

Stitches permite uma forma bem fácil de criar temas próprios.

![Exemplo de uso de Themes](https://github.com/xnd-dev/ipas/assets/71663097/e0e4b873-15d0-4d5e-b9f4-a654f4685ddf)

* Utils:

Com o Utils podemos criar nossas próprias propriedades, combinação de propriedades...

![Exemplo de uso de Utils](https://github.com/xnd-dev/ipas/assets/71663097/f161e38d-4668-42d4-8623-2a99f6d1d551)

## Considerações Finais
Além de todas essas funcionalidades o Stitches traz a vantagem de variáveis de escopo, o que quer dizer que os valores atribuídos aos componentes naquela parte do projeto, não afetarão todos os componentes do projeto, permitindo estilizar um botão em uma página sem se preocupar em afetar todos os demais botões das outras páginas.

# Como instalar?

![Instalação](https://github.com/xnd-dev/ipas/assets/71663097/6d80f04e-803e-4ed3-a1f5-d9cfc6b2e864)

# Importando

![importando](https://github.com/xnd-dev/ipas/assets/71663097/0b8d7a3f-a447-4431-9fcb-0913287ba744)

# Referências
* [Site oficial](https://stitches.dev/)
* [Documentação original](https://stitches.dev/docs/installation)
* [Documentação traduzida](https://stitches-docs-pt.vercel.app/docs/introduction)
* [Blog de alguns exemplos utilizado](https://www.javascript.christmas/2020/15)
