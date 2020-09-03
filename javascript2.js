var correct_answers = 0
function q1(){
    var corret = document.getElementById('l1').checked
    document.getElementById('question_header').innerHTML = '1. A linha média imaginária que une o bordo de ataque ao bordo de fuga denomina-se:'
    document.getElementById('l1').innerHTML = 'CordaX'
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
    document.getElementById('l3').innerHTML = 'Queda na sustentação e um grande aumento do arrasto.X'
    document.getElementById('l4').innerHTML = 'Aumento brusco na sustentação e um grande aumento do arrasto.'
    if ( document.getElementById('l3').checked == true )
        correct_answers += 1
}
function q3(){
    document.getElementById('question_header').innerHTML = '3. O conjunto cuja forma e localização resultam na produção de força aerodinâmica negativa é conhecido como:'
    document.getElementById('l1').innerHTML = 'Aileron/Spoiler'
    document.getElementById('l2').innerHTML = 'Estabilizador/ProfundorX'
    document.getElementById('l3').innerHTML = 'Empenagem/Plano Fixo Horizontal'
    document.getElementById('l4').innerHTML = 'Leme de Direção/Plano Fixo Vertical'
    if ( document.getElementById('l3').checked == true )
        correct_answers += 1
}
function q4(){
    document.getElementById('question_header').innerHTML = '4. A resultante do peso sustentado por cada metro quadrado das asas define a carga: '
    document.getElementById('l1').innerHTML = 'AlarX'
    document.getElementById('l2').innerHTML = 'Paga'
    document.getElementById('l3').innerHTML = 'Útil'
    document.getElementById('l4').innerHTML = 'Máxima'
    if ( document.getElementById('l1').checked == true )
        correct_answers += 1
}
function q5(){
    document.getElementById('question_header').innerHTML = '5. Em um voo reto e nivelado, o ar escoa por um aerofólio assimétrico com:'
    document.getElementById('l1').innerHTML = 'Maior velocidade no intradorso'
    document.getElementById('l2').innerHTML = 'Maior velocidade no extradorsoX'
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
    document.getElementById('l4').innerHTML = 'De máxima autonomiaX'
}
function q7(){
    document.getElementById('question_header').innerHTML = '7. O ângulo de ataque é formado pela linha do(a):'
    document.getElementById('l1').innerHTML = 'Corda e o vento relativo.X'
    document.getElementById('l2').innerHTML = 'Corda e o eixo longitudinal.'
    document.getElementById('l3').innerHTML = 'Horizonte e o vento relativo.'
    document.getElementById('l4').innerHTML = 'Horizonte e o eixo longitudinal.'
}
function q8(){
    document.getElementById('question_header').innerHTML = '8. 86º Farenheit equivalem em Celsius a:'
    document.getElementById('l1').innerHTML = '4ºC'
    document.getElementById('l2').innerHTML = '15ºC'
    document.getElementById('l3').innerHTML = '23ºC'
    document.getElementById('l4').innerHTML = '30ºCX'
}
function q9(){
    document.getElementById('question_header').innerHTML = '9. A parte traseira do aerofólio, por onde escoam os filetes de ar do vento relativo denomina-se:'
    document.getElementById('l1').innerHTML = 'Bordo de fuga.X'
    document.getElementById('l2').innerHTML = 'Cambra inferior.'
    document.getElementById('l3').innerHTML = 'Cambra superior.'
    document.getElementById('l4').innerHTML = 'Centro de pressão.'
}
function q10(){
    document.getElementById('question_header').innerHTML = '10. A ação da aceleração da gravidade, sobre um determinado corpo, denomina-se:'
    document.getElementById('l1').innerHTML = 'Peso.X'
    document.getElementById('l2').innerHTML = 'Massa.'
    document.getElementById('l3').innerHTML = 'Tração.'
    document.getElementById('l4').innerHTML = 'Potência.'
}
function q11(){
    document.getElementById('question_header').innerHTML = '11. Dentre as alternativas abaixo, aquela que "não" altera a autonomia de uma aeronave é o(a)'
    document.getElementById('l1').innerHTML = 'Vento nuloX'
    document.getElementById('l2').innerHTML = 'Temperatura'
    document.getElementById('l3').innerHTML = 'Coeficiente de Sustentação'
    document.getElementById('l4').innerHTML = 'Peso de decolagem no limite'
}
function q12(){
    document.getElementById('question_header').innerHTML = '12. Considerando-se as partículas de ar sobre um aerofólio, é correto afirmar que a(as):'
    document.getElementById('l1').innerHTML = 'Pressão no extradorso é maior que no intradorso.'
    document.getElementById('l2').innerHTML = 'Partículas do extradorso alcançam o bordo de fuga primeiro.'
    document.getElementById('l3').innerHTML = 'Partículas do intradorso e do extradorso alcançam o bordo de fuga ao mesmo tempo.X'
    document.getElementById('l4').innerHTML = 'Eficiência aeronadinâmica será maior quando as partículas do extradorso não alcançarem o bordo de fuga.'
}
function q13(){
    document.getElementById('question_header').innerHTML = '13. O movimento em torno do eixo transversal denomina-se:'
    document.getElementById('l1').innerHTML = 'Guinada.'
    document.getElementById('l2').innerHTML = 'Rolamento.'
    document.getElementById('l3').innerHTML = 'Cabragem ou PicagemX'
    document.getElementById('l4').innerHTML = 'Canbagem ou inclinaçãr lateral.'
}
function q14(){
    document.getElementById('question_header').innerHTML = '14. Em um voo reto e nivelado com velocidade constante pode-se afirmar que:'
    document.getElementById('l1').innerHTML = 'As quatro forças se anulam.X'
    document.getElementById('l2').innerHTML = 'A sustentação é maior que o peso.'
    document.getElementById('l3').innerHTML = 'O arrasto é menor que a tração.'
    document.getElementById('l4').innerHTML = 'As quatro forças interagem, aumentando a sustentação.'
}
function q15(){
    document.getElementById('question_header').innerHTML = '15. O compensador do aileron esquerdo, sendo comandado para cima, faz com que a asa:'
    document.getElementById('l1').innerHTML = 'Direita role para a direita, em torno do eixo lateral.'
    document.getElementById('l2').innerHTML = 'Esquerda role para a direita, em torno do eixo lateral.'
    document.getElementById('l3').innerHTML = 'Direita role para a direita, em torno do exi transversal.'
    document.getElementById('l4').innerHTML = 'Esquerda role para a direita, em torno do eixo longitudinal.X'
}
function q16(){
    document.getElementById('question_header').innerHTML = '16. O centro de pressão é definido como:'
    document.getElementById('l1').innerHTML = 'A relação entre a envergadura e a corda.'
    document.getElementById('l2').innerHTML = 'O ponto de aplicação da resultante aerodinâmica.X'
    document.getElementById('l3').innerHTML = 'O ponto de interseção dos três eixos imaginários.'
    document.getElementById('l4').innerHTML = 'O ângulo formado pela corda do aerofólio e a direção do vento relativo.'
}
function q17(){
    document.getElementById('question_header').innerHTML = '17. A razão existente entre a sustentação e o peso da aeronave denomina-se:'
    document.getElementById('l1').innerHTML = 'Fator carga.X'
    document.getElementById('l2').innerHTML = 'Alongamento.'
    document.getElementById('l3').innerHTML = 'Envergadura.'
    document.getElementById('l4').innerHTML = 'Coeficiente de sustentação.'
}
function q18(){
    document.getElementById('question_header').innerHTML = '18. A utilização de flapes durante o pouso porporciona maior:'
    document.getElementById('l1').innerHTML = 'Alcance.'
    document.getElementById('l2').innerHTML = 'Velocidade.'
    document.getElementById('l3').innerHTML = 'Razão de descida.'
    document.getElementById('l4').innerHTML = 'Ângulo de descida.X'
}
function q19(){
    document.getElementById('question_header').innerHTML = '19. O turbilhonamento na ponta das asas é formado pela:'
    document.getElementById('l1').innerHTML = 'Rugosidade da superfície.'
    document.getElementById('l2').innerHTML = 'Alta velocidade de cruzeiro.'
    document.getElementById('l3').innerHTML = 'Forma aerodinâmica do bordo de ataque.'
    document.getElementById('l4').innerHTML = 'Pressão do ar quando é maior no intradorso do que no extradorso da asa.X'
}
function q20(){
    document.getElementById('question_header').innerHTML = '20. Para uma determinada altitude, os fatores variáveis para o cálculo da resistência ao avanço são:'
    document.getElementById('l1').innerHTML = 'Área do aerofólio e velocidade.'
    document.getElementById('l2').innerHTML = 'Área do aerofólio e ângulo de ataque.'
    document.getElementById('l3').innerHTML = 'Coeficiente de arrasto e velocidade.'
    document.getElementById('l4').innerHTML = 'Densidade de aerofólio e coeficiente de arrasto.'
}


function finish(){
    var right  = [1 , 7 , 10 , 13 , 18 , 24 , 25 , 32 , 33 , 37 , 41 , 47 , 51 , 53 , 60 , 62 , 65 , 72 , 76 , 77]
    var points = 0
    var array_values
    var check
    for ( x=0 ; x<5 ; x++ ){
        array_values = right[x]
        check = document.getElementById(`alt${array_values}`).checked
        if( check == true )
            points++
    }
    let wrong = 20 - points
    //CREATE TABLE
        var create_table = document.createElement('table')
        create_table.setAttribute('id', 'result_table')
        document.body.appendChild(create_table)
    //

    //CREATE FIRST TABLE ROW
        var tr1 = document.createElement('tr')

        var create_th_resultado = document.createElement('th')
        create_th_resultado.setAttribute('colspan', 2)
        create_th_resultado.setAttribute('id' , 'resultado')
        tr1.appendChild(create_th_resultado)
        var th_resultado_desc = document.createTextNode('Resultado')
        create_th_resultado.appendChild(th_resultado_desc)

        create_table.appendChild(tr1)
    //

    //CREATE SECOND TABLE ROW
        var tr2 = document.createElement('tr')

        var td_scorretas = document.createElement('td')
        tr2.appendChild(td_scorretas)
        var scorretas_total = document.createTextNode('Corretas')
        tr2.appendChild(scorretas_total)

        var td_serradas = document.createElement('td')
        tr2.appendChild(td_serradas)
        var serradas_total = document.createTextNode('Erradas')
        tr2.appendChild(serradas_total)

        create_table.appendChild(tr2)
    //

    //CREATE THIRD TABLE ROW
        var tr3 = document.createElement('tr')

        var th_corretas = document.createElement('th')
        tr3.appendChild(th_corretas)
        var corretas_total = document.createTextNode(points)
        tr3.appendChild(corretas_total)

        var th_erradas = document.createElement('th')
        tr3.appendChild(th_erradas)
        var corretas_total = document.createTextNode(wrong)
        tr3.appendChild(corretas_total)

        create_table.appendChild(tr3)
    //

}