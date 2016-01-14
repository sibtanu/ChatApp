/**
 * Created by Sibtanu on 1/13/2016.
 */

/*This function adds a div element whenever the submit button is clicked.
The div element contains the name and the message to be displayed
 */
var count=0;
function displayNameAndMessage() {
    count=count+1;
    var show = document.getElementById('show');
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id","block"+count);/*generating unique id for div element for each click*/
    newDiv.innerHTML=document.getElementById("name").value+": "+" "+document.getElementById("message").value;
    show.appendChild(newDiv);/*appending newly created div as a child to the parent div */
    document.getElementById("message").value=null;/*this is to refresh the div message input box after submit is clicked*/
    checkSubmit();/*this is called again to disable the submit button once the message is posted*/
}
