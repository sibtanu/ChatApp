/**
 * Created by Sibtanu on 1/13/2016.
 */
function checkSubmit(){
    var formElements = document.forms["nameMessageForm"].elements;/*getting all form elements*/
    var canSubmit = true;

    for (var i = 0; i < formElements.length; i++) {/*to iterate over each form element*/
        if (formElements[i].value.length == 0||formElements[i].value==null) {/*checking if field is empty*/
            canSubmit = false;/*set value to false if field is empty*/
        }
    }
    if (canSubmit) {
        document.getElementById('submitbutton').disabled = false;/*this is to enable the button in the html form*/
    }
    else{
        document.getElementById('submitbutton').disabled = true;/*this is to disable the button in the html form*/
    }
}