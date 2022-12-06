const button = document.querySelector(".light");
const theme = document.querySelector("#theme-link"); 
const titleIcon = document.querySelector("#title-link");

button.addEventListener("click", function() {
    if (theme.getAttribute("href") == "defaultLightMaster.css") {
        theme.href = "defaultDarkMaster.css"
        titleIcon.href = "darkTitle.png"
    }
    else {
        theme.href = "defaultLightMaster.css"
        titleIcon.href = "lightTitle.png"
    }
});


//custom themes 
const scheme1 = document.querySelector("#b1")
const scheme2 = document.querySelector("#b2")
const scheme3 = document.querySelector("#b3")
const scheme4 = document.querySelector("#b4")
const randomChoice = document.querySelector("#randomChoice")

scheme1.addEventListener("click", function() {
    theme.href="theme1.css"
    titleIcon.href="title1.png"
});

scheme2.addEventListener("click", function() {
    theme.href="theme2.css"
    titleIcon.href="title2.png"
});

scheme3.addEventListener("click", function() {
    theme.href="theme3.css"
    titleIcon.href="title3.png"
});

scheme4.addEventListener("click", function() {
    theme.href="theme4.css"
    titleIcon.href="title4.png"
});

// random theme 
function chooseTheme () {
    const randomTheme = Math.random()
    if (randomTheme >= 0 && randomTheme < 0.25 ) {
        theme.href = "theme1.css"
        titleIcon.href="title1.png"
    }

    else if (randomTheme >= 0.25 && randomTheme < 0.5) {
        theme.href = "theme2.css"
        titleIcon.href="title2.png"
    }

    else if (randomTheme >= 0.5 && randomTheme < 0.75) {
        theme.href = "theme3.css"
        titleIcon.href="title3.png"
    }

    else {
        theme.href = "theme4.css"
        titleIcon.href="title4.png"
    }
}

randomChoice.addEventListener("click", function() {
    chooseTheme();
});

filterSelection("all") 

function filterSelection(c) {
    var x;
    var i; 
    x = document.getElementsByClassName("projectDisplay");
    if (c == "all") c = "";

    for (i = 0; i < x.length; i++) {
        removeClass (x[i], "showprojectDisplay");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "showprojectDisplay");
    }
}

function addClass(element, name) {
    var i;
    var arr1;
    var arr2; 

    arr1 = element.className.split(" ");
    arr2 = name.split(" "); 

    for (i = 0; i < arr2.length; i ++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i]; 
        }
    }
}

function removeClass(element, name) {
    var i; 
    var arr1; 
    var arr2; 

    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }

    element.className = arr1.join(" "); 
}

var btnContainer = document.getElementById("bContain");
var filters = btnContainer.getElementsByClassName("fbutton");

for (var i = 0;  i < filters.length; i++) {
    filters[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

// smooth scrolling 

(function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

// expand descriptions
const expand5 = document.getElementById("elab5");
const expand4 = document.getElementById("elab4");
const expand3 = document.getElementById("elab3");
const expand2 = document.getElementById("elab2");
const expand1 = document.getElementById("elab1");

expand5.addEventListener("click", function() {
    const chevronDown = document.getElementsByClassName("fa-chevron-down");
    const chevronUp = document.getElementsByClassName("fa-chevron-up");
    const desc = document.getElementById("elabDesc5"); 
    if (desc.style.display == "inline") {
        chevronDown[0].style.display = "inline";
        chevronUp[0].style.display = "none";
        desc.style.display = "none";
    } else {
        desc.style.display = "inline";
        chevronDown[0].style.display = "none";
        chevronUp[0].style.display = "inline";
    }
});

expand4.addEventListener("click", function() {
    const chevronDown = document.getElementsByClassName("fa-chevron-down");
    const chevronUp = document.getElementsByClassName("fa-chevron-up");
    const desc = document.getElementById("elabDesc4"); 
    if (desc.style.display == "inline") {
        chevronDown[1].style.display = "inline";
        chevronUp[1].style.display = "none";
        desc.style.display = "none";
    } else {
        desc.style.display = "inline";
        chevronDown[1].style.display = "none";
        chevronUp[1].style.display = "inline";
    }
});

expand3.addEventListener("click", function() {
    const chevronDown = document.getElementsByClassName("fa-chevron-down");
    const chevronUp = document.getElementsByClassName("fa-chevron-up");
    const desc = document.getElementById("elabDesc3"); 
    if (desc.style.display == "inline") {
        chevronDown[2].style.display = "inline";
        chevronUp[2].style.display = "none";
        desc.style.display = "none";
    } else {
        desc.style.display = "inline";
        chevronDown[2].style.display = "none";
        chevronUp[2].style.display = "inline";
    }
});

expand2.addEventListener("click", function() {
    const chevronDown = document.getElementsByClassName("fa-chevron-down");
    const chevronUp = document.getElementsByClassName("fa-chevron-up");
    const desc = document.getElementById("elabDesc2"); 
    if (desc.style.display == "inline") {
        chevronDown[3].style.display = "inline";
        chevronUp[3].style.display = "none";
        desc.style.display = "none";
    } else {
        desc.style.display = "inline";
        chevronDown[3].style.display = "none";
        chevronUp[3].style.display = "inline";
    }
});

expand1.addEventListener("click", function() {
    const chevronDown = document.getElementsByClassName("fa-chevron-down");
    const chevronUp = document.getElementsByClassName("fa-chevron-up");
    const desc = document.getElementById("elabDesc1"); 
    if (desc.style.display == "inline") {
        chevronDown[4].style.display = "inline";
        chevronUp[4].style.display = "none";
        desc.style.display = "none";
    } else {
        desc.style.display = "inline";
        chevronDown[4].style.display = "none";
        chevronUp[4].style.display = "inline";
    }
});

// hover state descriptions
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const resume = document.getElementById("resume");
 

linkedin.addEventListener("mouseover", function() {
    if (window.innerWidth < 900) {
        return;
    }
    document.getElementById("bp1").style.display = "block";
});

linkedin.addEventListener("mouseleave", function() {
    document.getElementById("bp1").style.display = "none";
}); 

github.addEventListener("mouseenter", function() {
    if (window.innerWidth < 900) {
        return;
    }
    document.getElementById("bp2").style.display = "block";
});

github.addEventListener("mouseleave", function() {
    document.getElementById("bp2").style.display = "none";
});

resume.addEventListener("mouseenter", function() {
    if (window.innerWidth < 900) {
        return;
    }
    document.getElementById("bp3").style.display = "block";
});

resume.addEventListener("mouseleave", function() {
    document.getElementById("bp3").style.display = "none";
});


