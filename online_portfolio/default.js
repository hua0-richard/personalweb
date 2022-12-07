const button = document.querySelector(".light");
const theme = document.querySelector("#theme-link"); 
const titleIcon = document.querySelector("#title-link");

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

// hover state descriptions
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const resume = document.getElementById("resume");
 

linkedin.addEventListener("mouseover", function() {
    if (window.innerWidth < 900) {
        return;
    }
    document.getElementById("bp1").style.display = "block";
    document.getElementById("bp1").style.position = "absolute";
});

linkedin.addEventListener("mouseleave", function() {
    document.getElementById("bp1").style.display = "none";
}); 

github.addEventListener("mouseenter", function() {
    if (window.innerWidth < 900) {
        return;
    }
    document.getElementById("bp2").style.display = "block";
    document.getElementById("bp2").style.position = "absolute";

});

github.addEventListener("mouseleave", function() {
    document.getElementById("bp2").style.display = "none";
});

resume.addEventListener("mouseenter", function() {
    if (window.innerWidth < 900) {
        return;
    }
    document.getElementById("bp3").style.display = "block";
    document.getElementById("bp3").style.position = "absolute";

});

resume.addEventListener("mouseleave", function() {
    document.getElementById("bp3").style.display = "none";
});


