
function escreverFrase() {
    var frase = "- Mestre Yoda";
    var texto = document.getElementById("yoda");
    var letras = frase.split("");
    var i = 0;
    var intervalo = setInterval(function() {
      if (i < letras.length) {
        texto.innerHTML += letras[i];
        i++;
      } else {
        clearInterval(intervalo);
  setTimeout(function() {
        texto.innerHTML = "";
        escreverFrase();
      }, 500);
    }
  }, 200);
}
    function Click1() { 
        
 document.getElementById("frase1").innerHTML = "<br>Trabalhei, ainda no Brasil, na empresa <b>MIX COLLOR</b>, como <b>Menor Aprendiz</b> do setor <br>de <b>Design Gráfico</b>. Foi uma boa experiência que me acrescentou bastante conhecimento de Design e programas como Photoshop e CorelDraw";

}
function Click2() { 
 document.getElementById("frase1").innerHTML = "<br>Durante estes anos, trabalhei na cervejaria <b>100 Montaditos</b> para pagar a minha <br> faculdade de Relações Internacionais e o curso técnico de Web Development.<br> Além disso, fui voluntário do Núcleo de Apoio à Proteção Ambiental, no setor de <b>Marketing</b>";
} 
function Click3() { 
 document.getElementById("frase1").innerHTML = "<br>Atualmente, estou estudando novas tecnologias Back-End <b>(mySQL e PHP)</b> <br>e realizando alguns trabalhos como freelancer, principalmente através das plataformas <b>Wordpress</b> e <b>Shopify</b>.";
}
function Unclick() { 
  document.getElementById("frase1").innerHTML = "Agora que você me conhece melhor, vamos conhecer <br> um pouco da minha carreira profissional? :) <br> Comecei a trabalhar aos 18 anos de idade e, hoje aos 24 anos, já percorri diversas áreas e estou em busca do meu sonho de progredir profissionalmente no ramo da tecnologia e crescer junto à alguma empresa! <br><br> <b>Deslize o mouse no selecionador ao lado e veja as minhas experiências!</b></p>";    
                                            }
