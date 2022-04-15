document.addEventListener('DOMContentLoaded', function(){
    
document.querySelector('#btn').addEventListener('click',function(){
    chrome.tabs.executeScript({
        code: 'document.getElementsByClassName("my-booking__place-name")[0].innerText' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        let text = results
        document.querySelector("#result").innerHTML = concatCode(text);
        document.getElementById("copy").style.display = "block";
        return results
    });
})

function concatCode(text){
    if(text[0] == null)
        return 'EST.BH.MG.2/' + document.querySelector('#texto').value
    else
        return 'EST.BH.MG.2/' + text
}

document.querySelector('#copy').addEventListener('click',function(){
    var text = document.getElementById("result");
    navigator.clipboard.writeText(text.innerText);
    
    document.getElementById("after").style.display = "block";
})
 
})