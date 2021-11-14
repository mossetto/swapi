window.scrollTo(1000,1000);
var btnArrow = document.getElementById('arrow1')
btnArrow.addEventListener("click", desplegar1)

function desplegar1(btnArrow){
    
    var alianceBox = document.getElementById('aliance-box')
    var listOne = document.getElementById('list1')
    var listOneH = document.getElementById('list1').offsetHeight
    var listOneChilds = document.getElementById('list1').children.length - 1
    var totalHeight = 26*listOneChilds

    if(listOneH == "50"){
        listOne.style.height = totalHeight+'px'
        btnArrow.style.transform = "rotate(180deg)"
        alianceBox.style.marginBottom= -totalHeight+'px'
        alianceBox.style.borderBottom= "2px solid"
        alianceBox.style.minHeight = "120px"
        alianceBox.style.padding= "12px"
        alianceBox.style.animationDelay = "0";
        alianceBox.style.animationName= "blaser"
        alianceBox.style.animationIterationCount = "infinite"
        
        document.getElementById('masters-box').style.marginBottom= "12px"
        document.getElementById('masters-box').style.borderBottom= "0"
        document.getElementById('list2').style.height= "50px"
        
    }else{
        alianceBox.style.animationIterationCount = "1"
        listOne.style.height = "50px"
        btnArrow.style.transform = "rotate(0deg)"
        alianceBox.style.marginBottom= "12px"
        alianceBox.style.borderBottom= "0"
    }
}

var btnArrow2 = document.getElementById('arrow2')
btnArrow2.addEventListener("click", desplegar2)

function desplegar2(){
    
    var masterBox = document.getElementById('masters-box')
    var ListTwo = document.getElementById('list2')
    var ListTwoH = document.getElementById('list2').offsetHeight
    var listTwoChilds = document.getElementById('list2').children.length - 1
    var totalHeight = 26*listTwoChilds

    if(ListTwoH == "50"){
        ListTwo.style.height = totalHeight+'px'
        btnArrow2.style.transform = "rotate(180deg)"
        masterBox.style.marginBottom= -totalHeight+'px'
        masterBox.style.borderBottom= "2px solid"
        masterBox.style.animationName= "blaser"
        masterBox.style.animationIterationCount = "infinite"
        document.getElementById('aliance-box').style.marginBottom= "12px"

    }else{
        ListTwo.style.height = "50px"
        btnArrow2.style.transform = "rotate(0deg)"
        masterBox.style.marginBottom= "12px"
        masterBox.style.borderBottom= "0"
        masterBox.style.animationIterationCount = "1"

    }
}

function barrido(){

    var ulChilds = document.getElementById('ul').children.length

    for(let count = 0; count < ulChilds; count++){


        var delayInMilliseconds = 200*count; 
        setTimeout(function() {
            document.getElementById('ul').children[count].style.opacity="1"
            document.getElementById('ul').children[count].style.marginLeft="0px"
        }, delayInMilliseconds);

        var delayInMilliseconds2 = 230*count; 
        setTimeout(function() {
            document.getElementById('ul').children[count].style.marginLeft="20px"
        }, delayInMilliseconds2);
        
    }
}

// apply active class to click

function selected(element){

    const items = document.querySelectorAll("#ul > li")
    
    for (var i = 0; i < items.length; i++ ){
        items[i].classList.remove('active');

    }
    element.classList.add('active');

}


