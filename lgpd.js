//requisição da url para o back-end
let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';

//parte do HTML
let lgpdHtml = `
<div class="lgpd">
  <div class="lgpd--left">
      Nós utilizamos cookie para melhorar sua experiência do usuário
      Para conferir detalhadamente todos os cookies utilizados, leia nossa <a href="">Política de privacidade</a>
  </div>

  <div class="lgpd--rigth">
    <button>ok</button>
  </div>
</div>
  <link rel="stylesheet" href="lgpd.css">
`;


let lsContent = localStorage.getItem('lgpd');
if(!lsContent){
  document.body.innerHTML += lgpdHtml

  let lgpdArea= document.querySelector('.lgpd');
  let lgpdButton = lgpdArea.querySelector('button');

  // cara deu ok e o banner da tela some
  lgpdButton.addEventListener('click',async () =>{
    lgpdArea.remove();
    //prox passo e fazer uma requisição para o servidor que ira gerar um cod único para o usuario
    let result = await fetch(lgpdUrl);
    let json = await result.json();

    if(json.error != ''){
      let id = '123'; //json.id
      localStorage.setItem('lgpd', '123'/*id*/);
    }
    
  });
}