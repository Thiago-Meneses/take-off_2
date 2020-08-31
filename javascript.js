function begin(){  //START TEST
    var c_btn = document.getElementById('btn') //REMOVE BEGIN BUTTON
    c_btn.remove()
    
    for ( x=1 ; x<=1 ; x++) {  //CRIAR 20 QUESTOES, `FOR` E INUTIL FOI USADO APENAS PARA DIMINUIR O TAMANHO
    //BOTÕES CADA QUESTÃO
    var q1 = document.createElement('input')
    q1.setAttribute('type'    , 'button'    )
    q1.setAttribute('id'      , 'q1'        )
    q1.setAttribute('value'   , '1º QUESTÃO')
    q1.setAttribute('onclick' , 'q1()'      )
    document.getElementById('questions').appendChild(q1)
        
    var q2 = document.createElement('input')
    q2.setAttribute('type'    , 'button'    )
    q2.setAttribute('id'      , 'q2'        )
    q2.setAttribute('value'   , '2º QUESTÃO')
    q2.setAttribute('onclick' , 'q2()'      )
    document.getElementById('questions').appendChild(q2)

    var q3 = document.createElement('input')
    q3.setAttribute('type'    , 'button'    )
    q3.setAttribute('id'      , 'q3'        )
    q3.setAttribute('value'   , `3º QUESTÃO`)
    q3.setAttribute('onclick' , 'q3()'      )
    document.getElementById('questions').appendChild(q3)

    var q4 = document.createElement('input')
    q4.setAttribute('type'    , 'button'    )
    q4.setAttribute('id'      , 'q4'        )
    q4.setAttribute('value'   , `4º QUESTÃO`)
    q4.setAttribute('onclick' , 'q4()'      )
    document.getElementById('questions').appendChild(q4)

    var q5 = document.createElement('input')
    q5.setAttribute('type'    , 'button'    )
    q5.setAttribute('id'      , 'q5'        )
    q5.setAttribute('value'   , `5º QUESTÃO`)
    q5.setAttribute('onclick' , 'q5()'      )
    document.getElementById('questions').appendChild(q5)

    var q6 = document.createElement('input')
    q6.setAttribute('type'    , 'button'    )
    q6.setAttribute('id'      , 'q6'        )
    q6.setAttribute('value'   , `6º QUESTÃO`)
    q6.setAttribute('onclick' , 'q6()'      )
    document.getElementById('questions').appendChild(q6)

    var q7 = document.createElement('input')
    q7.setAttribute('type'    , 'button'    )
    q7.setAttribute('id'      , 'q7'        )
    q7.setAttribute('value'   , `7º QUESTÃO`)
    q7.setAttribute('onclick' , 'q7()'      )
    document.getElementById('questions').appendChild(q7)

    var q8 = document.createElement('input')
    q8.setAttribute('type'    , 'button'    )
    q8.setAttribute('id'      , 'q8'        )
    q8.setAttribute('value'   , `8º QUESTÃO`)
    q8.setAttribute('onclick' , 'q8()'      )
    document.getElementById('questions').appendChild(q8)

    var q9 = document.createElement('input')
    q9.setAttribute('type'    , 'button'    )
    q9.setAttribute('id'      , 'q9'        )
    q9.setAttribute('value'   , `9º QUESTÃO`)
    q9.setAttribute('onclick' , 'q9()'      )
    document.getElementById('questions').appendChild(q9)

    var q10 = document.createElement('input')
    q10.setAttribute('type'    , 'button'     )
    q10.setAttribute('id'      , 'q10'        )
    q10.setAttribute('value'   , `10º QUESTÃO`)
    q10.setAttribute('onclick' , 'q10()'      )
    document.getElementById('questions').appendChild(q10)

    var q11 = document.createElement('input')
    q11.setAttribute('type'    , 'button'     )
    q11.setAttribute('id'      , 'q11'        )
    q11.setAttribute('value'   , `11º QUESTÃO`)
    q11.setAttribute('onclick' , 'q11()'      )
    document.getElementById('questions').appendChild(q11)

    var q12 = document.createElement('input')
    q12.setAttribute('type'    , 'button'     )
    q12.setAttribute('id'      , 'q12'        )
    q12.setAttribute('value'   , `12º QUESTÃO`)
    q12.setAttribute('onclick' , 'q12()'      )
    document.getElementById('questions').appendChild(q12)

    var q13 = document.createElement('input')
    q13.setAttribute('type'    , 'button'     )
    q13.setAttribute('id'      , 'q13'        )
    q13.setAttribute('value'   , `13º QUESTÃO`)
    q13.setAttribute('onclick' , 'q13()'      )
    document.getElementById('questions').appendChild(q13)

    var q14 = document.createElement('input')
    q14.setAttribute('type'    , 'button'     )
    q14.setAttribute('id'      , 'q14'        )
    q14.setAttribute('value'   , `14º QUESTÃO`)
    q14.setAttribute('onclick' , 'q14()'      )
    document.getElementById('questions').appendChild(q14)

    var q15 = document.createElement('input')
    q15.setAttribute('type'    , 'button'     )
    q15.setAttribute('id'      , 'q15'        )
    q15.setAttribute('value'   , `15º QUESTÃO`)
    q15.setAttribute('onclick' , 'q15()'      )
    document.getElementById('questions').appendChild(q15)

    var q16 = document.createElement('input')
    q16.setAttribute('type'    , 'button'     )
    q16.setAttribute('id'      , 'q16'        )
    q16.setAttribute('value'   , `16º QUESTÃO`)
    q16.setAttribute('onclick' , 'q16()'      )
    document.getElementById('questions').appendChild(q16)

    var q17 = document.createElement('input')
    q17.setAttribute('type'    , 'button'     )
    q17.setAttribute('id'      , 'q17'        )
    q17.setAttribute('value'   , `17º QUESTÃO`)
    q17.setAttribute('onclick' , 'q17()'      )
    document.getElementById('questions').appendChild(q17)

    var q18 = document.createElement('input')
    q18.setAttribute('type'    , 'button'     )
    q18.setAttribute('id'      , 'q18'        )
    q18.setAttribute('value'   , `18º QUESTÃO`)
    q18.setAttribute('onclick' , 'q18()'      )
    document.getElementById('questions').appendChild(q18)

    var q19 = document.createElement('input')
    q19.setAttribute('type'    , 'button'     )
    q19.setAttribute('id'      , 'q19'        )
    q19.setAttribute('value'   , `19º QUESTÃO`)
    q19.setAttribute('onclick' , 'q19()'      )
    document.getElementById('questions').appendChild(q19)

    var q20 = document.createElement('input')
    q20.setAttribute('type'    , 'button'     )
    q20.setAttribute('id'      , 'q20'        )
    q20.setAttribute('value'   , `20º QUESTÃO`)
    q20.setAttribute('onclick' , 'q20()'      )
    document.getElementById('questions').appendChild(q20)
    //
    }

    // CREATE QUESTION PARAGRAPH
    var create_p     = document.createElement('p')
    create_p.setAttribute('id' , 'p1')
    create_p.innerHTML = 'Qual é o limite vertical superior do espaco aereo inferior'
    document.getElementById('questions').appendChild(create_p)
    //

    for ( x=1 ; x<=1 ; x++ ) { //CRIAR 4 ALTERNATIVAS, `FOR` E INUTIL FOI USADO APENAS PARA DIMINUIR O TAMANHO
    //CRIAR 1 ALTERNATIVA
        var create_radio1   = document.createElement('input')
        create_radio1.type  = 'radio'
        create_radio1.id    = 'radio1'
        create_radio1.value = 'radio'
        create_radio1.name  = 'alternatives'

        var label_1         = document.createElement('label_1')
        label_1.htmlFor     = 'radio1'

        var description_1   = document.createTextNode('FL 100 INCLUSIVE')
        label_1.appendChild(description_1)

        var newline_1       = document.createElement('br')

        var questions       = document.getElementById('questions')
        questions.appendChild(create_radio1)
        questions.appendChild(label_1)
        questions.appendChild(newline_1)
    //

    //CRIAR 2 ALTERNATIVA
        var create_radio2   = document.createElement('input')
        create_radio2.type  = 'radio'
        create_radio2.id    = 'radio2'
        create_radio2.value = 'radio'
        create_radio2.name  = 'alternatives'

        var label_2         = document.createElement('label_2')
        label_2.htmlFor     = 'radio2'

        var description_2   = document.createTextNode('FL 245 INCLUSIVE')
        label_2.appendChild(description_2)

        var newline_2       = document.createElement('br')

        questions.appendChild(create_radio2)
        questions.appendChild(label_2)
        questions.appendChild(newline_2)
    //

    //CRIAR 3 ALTERNATIVA
        var create_radio3   = document.createElement('input')
        create_radio3.type  = 'radio'
        create_radio3.id    = 'radio3'
        create_radio3.value = 'radio'
        create_radio3.name  = 'alternatives'

        var label_3         = document.createElement('label_3')
        label_3.htmlFor     = 'radio3'

        var description_3   = document.createTextNode('FL 245 EXCLUSIVE')
        label_3.appendChild(description_3)

        var newline_3       = document.createElement('br')

        questions.appendChild(create_radio3)
        questions.appendChild(label_3)
        questions.appendChild(newline_3)
    //

    //CRIAR 4 ALTERNATIVA
        var create_radio4   = document.createElement('input')
        create_radio4.type  = 'radio'
        create_radio4.id    = 'radio4'
        create_radio4.value = 'radio'
        create_radio4.name  = 'alternatives'

        var label_4         = document.createElement('label_4')
        label_4.htmlFor     = 'radio4'

        var description_4   = document.createTextNode('FL 100 EXCLUSIVE')
        label_4.appendChild(description_4)

        var newline_4       = document.createElement('br')

        questions.appendChild(create_radio4)
        questions.appendChild(label_4)
        questions.appendChild(newline_4)
    //
    }
}

function q1(){

}
function q2(){
    var desc = document.createTextNode('TESTE')
    label_2.appendChild(desc)

    questions.appendChild(label_2)

    var create_radio2   = document.createElement('input')
    create_radio2.type  = 'radio'
    create_radio2.id    = 'radio2'
    create_radio2.value = 'radio'
    create_radio2.name  = 'alternatives'

    var label_2         = document.createElement('label_2')
    label_2.htmlFor     = 'radio2'

    var description_2   = document.createTextNode('FL 245 INCLUSIVE')
    label_2.appendChild(description_2)

    var newline_2       = document.createElement('br')

    questions.appendChild(create_radio2)
    questions.appendChild(label_2)
    questions.appendChild(newline_2)
}
function q3(){
    window.alert('hi')
}
function q4(){
    window.alert('hi')
}
function q5(){
    window.alert('hi')
}
function q6(){
    window.alert('hi')
}
function q7(){
    window.alert('hi')
}
function q8(){
    window.alert('hi')
}
function q9(){
    window.alert('hi')
}
function q10(){
    window.alert('hi')
}
function q11(){
    window.alert('hi')
}
function q12(){
    window.alert('hi')
}
function q13(){
    window.alert('hi')
}
function q14(){
    window.alert('hi')
}
function q15(){
    window.alert('hi')
}
function q16(){
    window.alert('hi')
}
function q17(){
    window.alert('hi')
}
function q18(){
    window.alert('hi')
}
function q19(){
    window.alert('hi')
}
function q20(){
    window.alert('hi')
}









/*
    for ( x=1 ; x<=20 ; x++ ) { //CREATE 20 BUTTONS, ONE FOR EACH QUESTION

        q_btn = document.createElement('input')
        q_btn.setAttribute('type', 'button')
        q_btn.setAttribute('id', `q_${x}`)
        q_btn.setAttribute('value', `${x}º QUESTÃO`)
        q_btn.setAttribute('onclick' , `q${x}`)
        document.getElementById('questions').appendChild(q_btn)
    }





switch (document.getElementsByTagName('input').getAttribute('id')) {
    case q_5:
        alert('hi')
        break;
    default:
        alert(document.getElementById('q_5').getAttribute('id'))
}
*/

/*
    var x = document.querySelector('input').getAttribute('id')
    window.alert(x)
*/