const inputFileButton = document.getElementById("inputFilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputNumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton); 

function clickFileButton(){
    arquivo = document.getElementById("inputfile");//InputFile é a parte do "Escolher Arquivo"

    var fr=new FileReader();

    // TRY TESTA UM BLOCO DE CODIGO.
//---------------------------------------------------------------//
  

try{ //Try para tratar esse erro em específico, poderia usar em tudo, porém, poderia dar erro por ele não conseguir identificar qual erro em especifico que foi.
    fr.readAsText(arquivo.files[0]); // 0 pois pode ter vários
    fr.onload=function(){
        info = fr.result;
        document.getElementById('outputfile').textContent=fr.result;

    }

    info =  document.getElementById('outputfile').textContent
    if (fr.result == ''){
        console.log(info)
        throw 'Nao foi possivel ler o arquivo selecionado';
    }
}
//O 'IF' pode ser a mesma coisa que o try, porém, ele executará com possibilidades bem menores que o TRY
 

//------------------------------------------------------------//   
    
    catch (erro){
   
    console.log(erro);
    alert(erro);

}

//-------------------------------------------------------//
    finally{
     alert("Obrigado pela visita");
    }

}
//throw -> Ele irá indicar (mostrar para a gente) qual que foi o erro no código


//------------------------------------------------------------------------------------//



function clickNumberButton (){
// OK  1) Inserir um campo de input com a mensagem "informe um valor entre 5 a 10"
// OK 2) Verifica se é nulo, se for, lança exception "Informe um valor" 
// OK 3) Verifica se é maior que 5 e menor que 10, se não for, lança exception 
// "Informe um valor maior que 5 e menor que 10"
// 4) Se o try falhar, lançar exception "Erro + erro javascript"
// 5) No finnaly informar "O número escolhido foi + " numero


 number = document.getElementById ("inputnumber").value;
 
 try{
    if (number == '') throw 'Informe o valor!';
    if (number<5 || number>10) throw 'Informe um valor maior que 5 e menor que 10';
    throw 'O número escolhido foi:'+ number
}


//---------------------------------------------------------------------------------//

catch (erro){
 console.log(erro)
 alert('Erro + errojavascript')
 document.getElementById("outputnumber").innerHTML = erro;
}

finally{
    alert('O numero escolhido foi:'+number)
}
}
