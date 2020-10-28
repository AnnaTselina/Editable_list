//функция сохранения и вывода текста, полученного в поле
document.getElementById('add').onclick = function() {
    
    var text = document.getElementById('in').value;
    if (text.length == 0) {return Error;}
    let newLi = document.createElement('li');
    newLi.innerHTML = text;
    newLi.setAttribute('onclick', 'getNewText(this)')
    document.getElementById('out').append(newLi);
    document.getElementById('in').value = null; //обнуляет текстовое поле
    checkButton();
  
};

//Функция забизейбливания кнопки "Убрать"
const checkButton = () => {
    if (document.getElementById('out').children.length == 0) {
        document.getElementById('remove').disabled = true;} 
        else {document.getElementById('remove').disabled = false;}
};


//функция, которая убирает последний элемент при нажатии "Убрать"
document.getElementById('remove').onclick = function() {
    var lastLi = document.getElementById('out').lastElementChild; //достали элемент
    lastLi.parentNode.removeChild(document.getElementById('out').lastElementChild);
    checkButton();
}

//При наведени фокуса на элемент li
    var text = "", editing = false, obj = null;
        function getNewText(elem) {
                if(!editing) {
                        text = elem.innerHTML;
                        var input = "<input type='text' onblur='edit(this.value)' id = 'newField'/>";
                        elem.innerHTML = input;
                        document.getElementById('newField').focus();
                        document.getElementById('newField').value = text;
                        editing = true;
                        obj = elem;
                }
        }
        
        function edit(value) {
                if(value != '') {
                        obj.innerHTML = value;
                }else obj.innerHTML = text;
                editing = false;
            }