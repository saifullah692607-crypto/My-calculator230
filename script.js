const display = document.getElementById('display');

function apeareddisplay(val){
    if(val === '='){
        try{
            display.value = eval (display.value);
        }
        catch(error){
          display.value('error');
        }
    }else{
        display.value += val;
    }
}


function cleardisplay() {
    display.value = '';
}

function deletlist(){
    display.value = display.value.slice(0, -1);
} 








