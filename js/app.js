document.querySelectorAll('.sidebar__submenu').forEach(e => {
    e.querySelector('.sidebar__menu__dropdown').onclick = (event) => {
        event.preventDefault()
        e.querySelector('.sidebar__menu__dropdown .dropdown__icon').classList.toggle('active')

        let dropdown_content = e.querySelector('.sidebar__menu__dropdown__content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length

        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'

    }
})


// Navigation tabs

function openContent(contentName,parentNode) {
    var index;
    var contentArr = document.getElementsByClassName("tab__nav");
    var contentID = document.getElementById(contentName);
    var mainTitle = document.getElementById('main-title');

    for (index = 0; index < contentArr.length; index++) {
        contentArr[index].style.display = "none";  
    }
    contentID.style.display = "block";
    mainTitle.innerHTML = contentID.getAttribute("data-navigation");
    toggleActiveNav(parentNode);
}

function toggleActiveNav(target) {
    var index;
    var navItem = document.getElementsByClassName("nav__item");

    for (index = 0; index < navItem.length; index++) {
        if (navItem[index].classList.contains('active'))
            navItem[index].classList.remove('active');  
    }

    document.getElementById(target).classList.add('active');
}


function toggleAddress() {

    var addressToggle = document.getElementById("chckAddress");
    var div_address_info = document.getElementById("div-perm-addinfo");
    var div_address_brgy = document.getElementById("div-perm-addbrgy");
    var div_address_city = document.getElementById("div-perm-addcity");
    var div_address_code = document.getElementById("div-perm-addcode");

    if (addressToggle.checked == true) {
        div_address_info.style.display = "none";
        div_address_brgy.style.display = "none";
        div_address_city.style.display = "none";
        div_address_code.style.display = "none";
    } else {
        div_address_info.style.display = "flex";
        div_address_brgy.style.display = "flex";
        div_address_city.style.display = "flex";
        div_address_code.style.display = "flex";
    }
}


var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  var lineHeight = 0;
  lineHeight = el.scrollHeight + 1;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + lineHeight + 'px';
  },0);
}


// Dark Mode Toggle

let darkmode_toggle = document.querySelector('#dark-mode-toggle')

darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    document.querySelector('body').classList.toggle('dark')
    darkmode_toggle.querySelector('.dark__mode__switch').classList.toggle('active')
    // setDarkChart(document.querySelector('body').classList.contains('dark'))
}

let overlay = document.querySelector('.overlay')
let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}