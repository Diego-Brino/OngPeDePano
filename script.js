document.getElementById('textArea').hidden = true;

function checarBox() {

    var checar = document.getElementById('botaoOutro').checked;

    if (checar == true)
        document.getElementById('textArea').hidden = false;
    else
        document.getElementById('textArea').hidden = true;
}

function validarForm() {
    
    var valido = false;

    var checkBoxes = new Array(6);
    checkBoxes = document.getElementsByClassName('checkBox');

    for (var i = 0; i < checkBoxes.length; i++) { // Validar checkboxes
        if (checkBoxes[i].checked == true) {
            valido = true;
            break;
        }
    }

    var campos = new Array(4);
    campos = document.getElementsByClassName('campo');

    for (var i = 0; i < campos.length; i++) { // Validar campos
        if (campos[i].value == "") {
            valido = false;
            break;
        }
    }

    if(document.getElementById('textArea').hidden == false){  // Validar Outro textarea
        if(document.getElementById('textArea').value == ""){
            valido = false;
        }
    }

    if (valido == false) {
        alert('Preencha todos os campos e selecione ao menos uma opção!');
    }
    else{
        document.getElementById('form').submit();
    }

    //Resetar form
    document.getElementById('textArea').hidden = true;

    for (var i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false;
    }
}