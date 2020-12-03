const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// LINKS
let A1 = document.getElementsByTagName('A')[0];
A1.append(siteContent["nav"]["nav-item-1"]);

let A2 = document.getElementsByTagName('A')[1];
A2.append(siteContent["nav"]["nav-item-2"]);

let A3 = document.getElementsByTagName('A')[2];
A3.append(siteContent["nav"]["nav-item-3"]);

let A4 = document.getElementsByTagName('A')[3];
A4.append(siteContent["nav"]["nav-item-4"]);

let A5 = document.getElementsByTagName('A')[4];
A5.append(siteContent["nav"]["nav-item-5"]);

let A6 = document.getElementsByTagName('A')[5];
A6.append(siteContent["nav"]["nav-item-6"]);

// CTA

let bigWords = document.getElementsByClassName('cta-text')[0].getElementsByTagName('H1')[0];
bigWords.append(siteContent['cta']['h1']);
let lineBreak = document.createElement("br");


let getStartedButton = document.getElementsByClassName("cta-text")[0].getElementsByTagName("BUTTON")[0];
getStartedButton.append(siteContent['cta']['button']);



//middle image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])