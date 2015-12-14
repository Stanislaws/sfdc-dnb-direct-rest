function selectAllCheckboxes(obj,receivedInputID){
    var inputCheckBox = document.getElementsByTagName("input");                  
    for(var i=0; i<inputCheckBox.length; i++){          
        if(inputCheckBox[i].id.indexOf(receivedInputID)!=-1){                                     
            inputCheckBox[i].checked = obj.checked;
        }
    }
}
