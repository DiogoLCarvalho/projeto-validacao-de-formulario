# Validação de Formulários :clipboard:

![Captura de tela 2021-11-25 104348](https://user-images.githubusercontent.com/84794798/143452743-2fcdb5ee-ae85-4190-80ab-ba5fdda8ac99.png)

## Teste por este link: :exclamation: :exclamation:
https://diogolcarvalho.github.io/projeto-validacao-de-formulario/

## Explicação JS :keyboard:

<p align="justify">
A variável form - que se encontra na tag form no HTML - executa o <b>preventDefault</b>, para restaurar efeitos que a tag form tem como padrão e também impedindo o efeito de <b>Capturing e Bubbling</b>, pois se não tivesse este efeito, a tag form já enviaria os dados do usuário sem a verificação. Depois executa a função <i>verificarDados</i> ao clicar no botão.
</p>

![Captura de tela 2021-11-25 105006](https://user-images.githubusercontent.com/84794798/143453310-c629cd7c-b95e-4f95-820d-1179a4f1ec02.png)

<p align="justify">
A função <i>verificarDados</i>  resgata os dados e os coloca em uma variável. Depois há uma verificação de cada campo do input. No exemplo, há a verificação do input do primeiro nome, verificando se o campo está vazio, se sim, executa a função <i>jogarErro</i>, se não, <i>jogarSucesso</i> é executado. 
</p>

![Captura de tela 2021-11-25 110532](https://user-images.githubusercontent.com/84794798/143455588-24f7f8c0-781f-477f-9de4-59df089c55ff.png)

<p align="justify">
Essas funções recebem como valor os campos. De acordo com a verificação de erro ou acerto, o <i>ClassName</i> adiciona uma classe de erro ou sucesso. 
</p>

![Captura de tela 2021-11-25 110957](https://user-images.githubusercontent.com/84794798/143456259-18b2bf04-0f5d-421d-8564-f6152dc54d8f.png)

<p align="justify">
Essas classes criam efeitos de erro e sucesso respectivamentes: 
</p>

![Captura de tela 2021-11-25 111452](https://user-images.githubusercontent.com/84794798/143457000-a9b089e8-42be-4b71-8ab3-94e2592fe5b7.png)
![Captura de tela 2021-11-25 111435](https://user-images.githubusercontent.com/84794798/143457029-f2c8dd2b-a198-4f03-97b0-14607fc35ea4.png)

<p align="justify">

Existem outros tipos de verificação de acordo com o necessário, como a senha que verifica se uma é igual a outra, ou a verificação do gênero que apenas muda a cor da borda, sem adicionar uma classe. Em especial, a verificação do email tem uma função especial. 

</p>

![Captura de tela 2021-11-25 112123](https://user-images.githubusercontent.com/84794798/143458244-c1ee8f8e-2e9e-430d-b69b-7078897b1357.png)

<p align="justify">
A função <i>isEmail</i> é um <b>regex</b> que verifica o email. 
</p>

![Captura de tela 2021-11-25 112741](https://user-images.githubusercontent.com/84794798/143458989-742fbe90-090b-4eff-bf5c-b8c2d65d165e.png)

### Detalhes a mencionar :exclamation:

<p align="justify">
Ainda tem a verificação do telefone - que verifica se é um número e se é maior que oito dígitos - e o botão de checagem - que apenas verifica se o botão está <i>checked</i> ou não - 
</p>

## Obrigado pela atenção :exclamation:
* Criado por <a href="https://github.com/DiogoLCarvalho" target="_blank">Diogo Lima Carvalho</a>. 
