var correct_answers = 0
function q1(){
    var corret = document.getElementById('l1').checked
    document.getElementById('question_header').innerHTML = '1. A linha média imaginária que une o bordo de ataque ao bordo de fuga denomina-se:'
    document.getElementById('l1').innerHTML = 'Corda'
    document.getElementById('l2').innerHTML = 'Envergadura'
    document.getElementById('l3').innerHTML = 'Alongamento'
    document.getElementById('l4').innerHTML = 'Linha de Curvatura Média'
    if ( corret == true ) {
        correct_answers += 1
        alert('hi')
    }
}
function q2(){
    document.getElementById('question_header').innerHTML = '2. Aumentando-se o ângulo de ataque além do correspondente ao coeficiente de sustentação máximo ocorrerá um(a):'
    document.getElementById('l1').innerHTML = 'Queda brusca na sustentação e uma diminuição do arrasto.'
    document.getElementById('l2').innerHTML = 'Aumento brusco na sustentação e uma diminuição do arrasto.'
    document.getElementById('l3').innerHTML = 'Queda na sustentação e um grande aumento do arrasto.'
    document.getElementById('l4').innerHTML = 'Aumento brusco na sustentação e um grande aumento do arrasto.'
    if ( document.getElementById('l3').checked == true )
        correct_answers += 1
}
function q3(){
    document.getElementById('question_header').innerHTML = '3. O conjunto cuja forma e localização resultam na produção de força aerodinâmica negativa é conhecido como:'
    document.getElementById('l1').innerHTML = 'Aileron/Spoiler'
    document.getElementById('l2').innerHTML = 'Estabilizador/Profundor'
    document.getElementById('l3').innerHTML = 'Empenagem/Plano Fixo Horizontal'
    document.getElementById('l4').innerHTML = 'Leme de Direção/Plano Fixo Vertical'
    if ( document.getElementById('l3').checked == true )
        correct_answers += 1
}
function q4(){
    document.getElementById('question_header').innerHTML = '4. A resultante do peso sustentado por cada metro quadrado das asas define a carga: '
    document.getElementById('l1').innerHTML = 'Alar'
    document.getElementById('l2').innerHTML = 'Paga'
    document.getElementById('l3').innerHTML = 'Útil'
    document.getElementById('l4').innerHTML = 'Máxima'
    if ( document.getElementById('l1').checked == true )
        correct_answers += 1
}
function q5(){
    document.getElementById('question_header').innerHTML = '5. Em um voo reto e nivelado, o ar escoa por um aerofólio assimétrico com:'
    document.getElementById('l1').innerHTML = 'Maior velocidade no intradorso'
    document.getElementById('l2').innerHTML = 'Maior velocidade no extradorso'
    document.getElementById('l3').innerHTML = 'A mesma velocidade no intradorso e extradorso, nas baixas altitudes.'
    document.getElementById('l4').innerHTML = 'A mesma velocidade no intradorso e extradorso, nas grandes altitudes.'
    if ( document.getElementById('l2').checked == true )
        correct_answers += 1
} 
function q6(){
    document.getElementById('question_header').innerHTML = '6. A velocidade relativamente baixa que permite se voar o máximo tempo possível com dada quantidade de combustível é a velocidade:'
    document.getElementById('l1').innerHTML = 'Minima'
    document.getElementById('l2').innerHTML = 'De estol'
    document.getElementById('l3').innerHTML = 'De máximo alcance'
    document.getElementById('l4').innerHTML = 'De máxima autonomia'
}
function q7(){
    document.getElementById('question_header').innerHTML = '7. O ângulo de ataque é formado pela linha do(a):'
    document.getElementById('l1').innerHTML = 'Corda e o vento relativo.'
    document.getElementById('l2').innerHTML = 'Corda e o eixo longitudinal.'
    document.getElementById('l3').innerHTML = 'Horizonte e o vento relativo.'
    document.getElementById('l4').innerHTML = 'Horizonte e o eixo longitudinal.'
}
function q8(){
    document.getElementById('question_header').innerHTML = '8. 86º Farenheit equivalem em Celsius a:'
    document.getElementById('l1').innerHTML = '4ºC'
    document.getElementById('l2').innerHTML = '15ºC'
    document.getElementById('l3').innerHTML = '23ºC'
    document.getElementById('l4').innerHTML = '30ºC'
}
function q9(){
    document.getElementById('question_header').innerHTML = '9. A parte traseira do aerofólio, por onde escoam os filetes de ar do vento relativo denomina-se:'
    document.getElementById('l1').innerHTML = 'Bordo de fuga.'
    document.getElementById('l2').innerHTML = 'Cambra inferior.'
    document.getElementById('l3').innerHTML = 'Cambra superior.'
    document.getElementById('l4').innerHTML = 'Centro de pressão.'
}
function q10(){
    document.getElementById('question_header').innerHTML = '10. A ação da aceleração da gravidade, sobre um determinado corpo, denomina-se:'
    document.getElementById('l1').innerHTML = 'Peso.'
    document.getElementById('l2').innerHTML = 'Massa.'
    document.getElementById('l3').innerHTML = 'Tração.'
    document.getElementById('l4').innerHTML = 'Potência.'
}
function q11(){
    document.getElementById('question_header').innerHTML = '11. Dentre as alternativas abaixo, aquela que "não" altera a autonomia de uma aeronave é o(a)'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q12(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q13(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q14(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q15(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q16(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q17(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q18(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q19(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}
function q20(){
    document.getElementById('question_header').innerHTML = 'jacare'
    document.getElementById('l1').innerHTML = 'okay'
    document.getElementById('l2').innerHTML = 'okayy'
    document.getElementById('l3').innerHTML = 'okayyy'
    document.getElementById('l4').innerHTML = 'okayyyy'
}

function finish(){
    alert(correct_answers)
}