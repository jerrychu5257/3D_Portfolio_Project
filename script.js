import WebGLScene from './Experience/webGLScene'
import WebGLPlay from './Experience/webGLPlay'
import WebGLContact from './Experience/webGLContact.js'

// Call 3D Experience
const webGLScene = new WebGLScene()
const webGLPlay = new WebGLPlay()
const webGLContact = new WebGLContact()

/*
* Switch Pages
*/
function showHome(){
    // change font weight
    console.log('logo CLicked!')
    $("#navAbout").css("font-weight", "normal")
    $("#navWork").css("font-weight", "normal")
    $("#navPlayground").css("font-weight", "normal")
    $("#navContact").css("font-weight", "normal")

    // close all pages and show
    $("#home").css("display", "flex")
    $("#about").css("display", "none")
    $("#work").css("display", "none")
    $("#playground").css("display", "none")
    $("#contact").css("display", "none")

    // Scroll to top
    const targetElement = document.querySelector(".footerHome");
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // 平滑滚动
    });
}
function showAbout(){
    // change font weight
    console.log('About CLicked!')
    $("#navAbout").css("font-weight", "bold")
    $("#navWork").css("font-weight", "normal")
    $("#navPlayground").css("font-weight", "normal")
    $("#navContact").css("font-weight", "normal")

    // close all pages and show
    $("#home").css("display", "none")
    $("#about").css("display", "flex")
    $("#work").css("display", "none")
    $("#playground").css("display", "none")
    $("#contact").css("display", "none")

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
}
function showWork(){
    // change font weight
    console.log('work CLicked!')
    $("#navAbout").css("font-weight", "normal")
    $("#navWork").css("font-weight", "bold")
    $("#navPlayground").css("font-weight", "normal")
    $("#navContact").css("font-weight", "normal")

    // close all pages and show
    $("#home").css("display", "none")
    $("#about").css("display", "none")
    $("#work").css("display", "flex")
    $("#playground").css("display", "none")
    $("#contact").css("display", "none")

    // Scroll to top
    const targetElement = document.querySelector(".footerWork");
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // 平滑滚动
    });
}
function showPlayground(){
    // change font weight
    console.log('playground CLicked!')
    $("#navAbout").css("font-weight", "normal")
    $("#navWork").css("font-weight", "normal")
    $("#navPlayground").css("font-weight", "bold")
    $("#navContact").css("font-weight", "normal")

    // close all pages and show
    $("#home").css("display", "none")
    $("#about").css("display", "none")
    $("#work").css("display", "none")
    $("#playground").css("display", "flex")
    $("#contact").css("display", "none")

    // Scroll to top
    const targetElement = document.querySelector(".footerPlayground");
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // 平滑滚动
    });
}
function showContact(){
    // change font weight
    console.log('contact CLicked!')
    $("#navAbout").css("font-weight", "normal")
    $("#navWork").css("font-weight", "normal")
    $("#navPlayground").css("font-weight", "normal")
    $("#navContact").css("font-weight", "bold")

    // close all pages and show
    $("#home").css("display", "none")
    $("#about").css("display", "none")
    $("#work").css("display", "none")
    $("#playground").css("display", "none")
    $("#contact").css("display", "flex")

    // Scroll to top
    const targetElement = document.querySelector(".footerContact");
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // 平滑滚动
    });
}

// NavigationBar
document.getElementById('logo').addEventListener('click', showHome)
document.getElementById('navAbout').addEventListener('click', showAbout)
document.getElementById('navWork').addEventListener('click', showWork)
document.getElementById('navPlayground').addEventListener('click', showPlayground)
document.getElementById('navContact').addEventListener('click', showContact)
// Button
document.getElementById('myprojects').addEventListener('click', showWork)
// Footer
const footerNavHomes = document.getElementsByClassName('footerHome')
for(let i=0; i<footerNavHomes.length; i++)
{
    footerNavHomes[i].addEventListener('click', showHome)
}
const footerNavAbouts = document.getElementsByClassName('footerAbout')
for(let i=0; i<footerNavAbouts.length; i++)
{
    footerNavAbouts[i].addEventListener('click', showAbout)
}
const footerNavWorks = document.getElementsByClassName('footerWork')
for(let i=0; i<footerNavWorks.length; i++)
{
    footerNavWorks[i].addEventListener('click', showWork)
}
const footerNavPlaygrounds = document.getElementsByClassName('footerPlayground')
for(let i=0; i<footerNavPlaygrounds.length; i++)
{
    footerNavPlaygrounds[i].addEventListener('click', showPlayground)
}
const footerNavContacts = document.getElementsByClassName('footerContact')
for(let i=0; i<footerNavContacts.length; i++)
{
    footerNavContacts[i].addEventListener('click', showContact)
}


/*
* About - change text and color
*/ 
function changeBlue(){
    $("#hoverText").text("Rationality")
    $("#hoverText").css("color", '#20D7FF')
}
function changeRed(){
    $("#hoverText").text("Passion")
    $("#hoverText").css("color", '#FF5B5B')
}
function changeGreen(){
    $("#hoverText").text("Experimental Spirit")
    $("#hoverText").css("color", '#43D310')
}
function changeYellow(){
    $("#hoverText").text("Curiosity")
    $("#hoverText").css("color", '#EDE40F')
}

document.getElementById('hoverBlue').addEventListener('mouseover', changeBlue)
document.getElementById('hoverRed').addEventListener('mouseover', changeRed)
document.getElementById('hoverGreen').addEventListener('mouseover', changeGreen)
document.getElementById('hoverYellow').addEventListener('mouseover', changeYellow)

/**
 * Work - Change button color & image
 */
function displayAll(){
    // change button to onclick
    $('#displayAll').css("color", 'white')
    $('#displayAll').css("border", '0px solid')
    $('#displayAll').css("background-color", '#A88567')

    // change other button to default
    $('#display3D').css("color", 'black')
    $('#display3D').css("border", '1px solid black')
    $('#display3D').css("background-color", 'white') 

    $('#displayMG').css("color", 'black')
    $('#displayMG').css("border", '1px solid black')
    $('#displayMG').css("background-color", 'white')

    $('#displayUIUX').css("color", 'black')
    $('#displayUIUX').css("border", '1px solid black')
    $('#displayUIUX').css("background-color", 'white')

    $('#displayIxD').css("color", 'black')
    $('#displayIxD').css("border", '1px solid black')
    $('#displayIxD').css("background-color", 'white')

    $('#displayElse').css("color", 'black')
    $('#displayElse').css("border", '1px solid black')
    $('#displayElse').css("background-color", 'white')

    //fliter all class and add "show"
    const projectItems = document.querySelectorAll('.project')

    projectItems.forEach(item =>{
        if(item.classList.contains('All')){
            item.classList.add('show')
        }else{
            item.classList.remove('show')
        }
    })

}
function display3D(){
    // change button to onclick
    $('#display3D').css("color", 'white')
    $('#display3D').css("border", '0px solid')
    $('#display3D').css("background-color", '#A88567')

    // change other button to default
    $('#displayAll').css("color", 'black')
    $('#displayAll').css("border", '1px solid black')
    $('#displayAll').css("background-color", 'white') 

    $('#displayMG').css("color", 'black')
    $('#displayMG').css("border", '1px solid black')
    $('#displayMG').css("background-color", 'white')

    $('#displayUIUX').css("color", 'black')
    $('#displayUIUX').css("border", '1px solid black')
    $('#displayUIUX').css("background-color", 'white')

    $('#displayIxD').css("color", 'black')
    $('#displayIxD').css("border", '1px solid black')
    $('#displayIxD').css("background-color", 'white')

    $('#displayElse').css("color", 'black')
    $('#displayElse').css("border", '1px solid black')
    $('#displayElse').css("background-color", 'white')

    // fliter all class and add "show"
    const projectItems = document.querySelectorAll('.project')

    projectItems.forEach(item =>{
        if(item.classList.contains('3D')){
            item.classList.add('show')
        }else{
            item.classList.remove('show')
        }
    })

}
function displayMG(){
    // change button to onclick
    $('#displayMG').css("color", 'white')
    $('#displayMG').css("border", '0px solid')
    $('#displayMG').css("background-color", '#A88567')

    // change other button to default
    $('#displayAll').css("color", 'black')
    $('#displayAll').css("border", '1px solid black')
    $('#displayAll').css("background-color", 'white') 

    $('#display3D').css("color", 'black')
    $('#display3D').css("border", '1px solid black')
    $('#display3D').css("background-color", 'white')

    $('#displayUIUX').css("color", 'black')
    $('#displayUIUX').css("border", '1px solid black')
    $('#displayUIUX').css("background-color", 'white')

    $('#displayIxD').css("color", 'black')
    $('#displayIxD').css("border", '1px solid black')
    $('#displayIxD').css("background-color", 'white')

    $('#displayElse').css("color", 'black')
    $('#displayElse').css("border", '1px solid black')
    $('#displayElse').css("background-color", 'white')

    // fliter all class and add "show"
    const projectItems = document.querySelectorAll('.project')

    projectItems.forEach(item =>{
        if(item.classList.contains('MG')){
            item.classList.add('show')
        }else{
            item.classList.remove('show')
        }
    })
}
function displayUIUX(){
    // change button to onclick
    $('#displayUIUX').css("color", 'white')
    $('#displayUIUX').css("border", '0px solid')
    $('#displayUIUX').css("background-color", '#A88567')

    // change other button to default
    $('#displayAll').css("color", 'black')
    $('#displayAll').css("border", '1px solid black')
    $('#displayAll').css("background-color", 'white') 

    $('#displayMG').css("color", 'black')
    $('#displayMG').css("border", '1px solid black')
    $('#displayMG').css("background-color", 'white')

    $('#display3D').css("color", 'black')
    $('#display3D').css("border", '1px solid black')
    $('#display3D').css("background-color", 'white')

    $('#displayIxD').css("color", 'black')
    $('#displayIxD').css("border", '1px solid black')
    $('#displayIxD').css("background-color", 'white')

    $('#displayElse').css("color", 'black')
    $('#displayElse').css("border", '1px solid black')
    $('#displayElse').css("background-color", 'white')

    // fliter all class and add "show"
    const projectItems = document.querySelectorAll('.project')

    projectItems.forEach(item =>{
        if(item.classList.contains('UIUX')){
            item.classList.add('show')
        }else{
            item.classList.remove('show')
        }
    })
}
function displayIxD(){
    // change button to onclick
    $('#displayIxD').css("color", 'white')
    $('#displayIxD').css("border", '0px solid')
    $('#displayIxD').css("background-color", '#A88567')

    // change other button to default
    $('#displayAll').css("color", 'black')
    $('#displayAll').css("border", '1px solid black')
    $('#displayAll').css("background-color", 'white') 

    $('#displayMG').css("color", 'black')
    $('#displayMG').css("border", '1px solid black')
    $('#displayMG').css("background-color", 'white')

    $('#displayUIUX').css("color", 'black')
    $('#displayUIUX').css("border", '1px solid black')
    $('#displayUIUX').css("background-color", 'white')

    $('#display3D').css("color", 'black')
    $('#display3D').css("border", '1px solid black')
    $('#display3D').css("background-color", 'white')

    $('#displayElse').css("color", 'black')
    $('#displayElse').css("border", '1px solid black')
    $('#displayElse').css("background-color", 'white')

    // fliter all class and add "show"
    const projectItems = document.querySelectorAll('.project')

    projectItems.forEach(item =>{
        if(item.classList.contains('IxD')){
            item.classList.add('show')
        }else{
            item.classList.remove('show')
        }
    })
}
function displayElse(){
    // change button to onclick
    $('#displayElse').css("color", 'white')
    $('#displayElse').css("border", '0px solid')
    $('#displayElse').css("background-color", '#A88567')

    // change other button to default
    $('#displayAll').css("color", 'black')
    $('#displayAll').css("border", '1px solid black')
    $('#displayAll').css("background-color", 'white') 

    $('#displayMG').css("color", 'black')
    $('#displayMG').css("border", '1px solid black')
    $('#displayMG').css("background-color", 'white')

    $('#displayUIUX').css("color", 'black')
    $('#displayUIUX').css("border", '1px solid black')
    $('#displayUIUX').css("background-color", 'white')

    $('#displayIxD').css("color", 'black')
    $('#displayIxD').css("border", '1px solid black')
    $('#displayIxD').css("background-color", 'white')

    $('#display3D').css("color", 'black')
    $('#display3D').css("border", '1px solid black')
    $('#display3D').css("background-color", 'white')

    // fliter all class and add "show"
    const projectItems = document.querySelectorAll('.project')

    projectItems.forEach(item =>{
        if(item.classList.contains('Else')){
            item.classList.add('show')
        }else{
            item.classList.remove('show')
        }
    })
}
document.getElementById('displayAll').addEventListener('click', displayAll)
document.getElementById('display3D').addEventListener('click', display3D)
document.getElementById('displayMG').addEventListener('click', displayMG)
document.getElementById('displayUIUX').addEventListener('click', displayUIUX)
document.getElementById('displayIxD').addEventListener('click', displayIxD)
document.getElementById('displayElse').addEventListener('click', displayElse)

// mouseenter & mouseleave
const imageContainer = document.querySelectorAll('.container')

for(let i=0; i<imageContainer.length; i++)
{
    const overlay = imageContainer[i].querySelector('.overlay')
    // 添加事件监听器
    imageContainer[i].addEventListener('mouseenter', function() {
        overlay.style.opacity = '1' // 鼠标移入时显示遮罩层
    })

    imageContainer[i].addEventListener('mouseleave', function() {
        overlay.style.opacity = '0' // 鼠标移出时隐藏遮罩层
    })
}


