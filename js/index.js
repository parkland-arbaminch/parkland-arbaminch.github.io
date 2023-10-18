// index.js file is mainly used for home-page template

(function () {
  
  // =========================================== Multiple-assined variables
  let body = document.querySelector('body');
  let mainContainer = document.querySelector('#mainContainer');
  let dropdown = document.querySelectorAll('.dropdown');
  let root_container = document.querySelector('.root-container');
  let container_one = document.querySelector('.container-one'); // ########## root_container

  let location = window.location.href;
  console.log('Window location is:-', location);

  let url = new URL(location);
  console.log('URL location is- ', url);
  
  // SECTION: =============== Header, Navigator, and Footer (scroll-up)
  // =================================================================
  
  // let header = document.querySelector('header');
  let header = document.querySelector('.header');   // ########### header
  let navBar = document.querySelector('.nav-bar');
  let sticky = navBar.offsetTop;
  console.log('sticky is ', sticky);

  let scrollToTopEl = document.querySelector('#scrollToTop'); // Footer (scrool-up)
  let stickyPosition = 600;
  

  // Function-1
  addMultipleEvent(window, 'resize scroll load', utillFunction);

  function utillFunction(){
    let offSetHeight = body.offsetHeight;
    console.log('offSetHeight is ', offSetHeight);
    if (offSetHeight > 1006) {    // = 1024px
      stickyNav();
      header.style.display = 'block';  // ########
      dropdown.forEach((li) => {
        li.classList.add("dropdown-wrapper");
      }) 
    }
    else {
      header.style.display = 'none';
      navBar.classList.add("sticky-nav");
      dropdown.forEach((li) => {
        li.classList.remove("dropdown-wrapper");
      })
      // main_one.style.top = '80px';    // #########
      setStyleTop(80);
    }

    if (window.scrollY >= stickyPosition) {
      scrollToTopEl.classList.remove("scroll-up");
    } else {
      scrollToTopEl.classList.add("scroll-up");
    
    }
  }

  function stickyNav() {
    if (window.scrollY >= sticky) {
      navBar.classList.add("sticky-nav");
      // main_one.style.top = '80px';    // ########
      setStyleTop(80);
    } else {
      navBar.classList.remove("sticky-nav");
      // main_one.style.top = '0';   // ########
      setStyleTop(0);
    }
  }
  
  let numberOfChildren = mainContainer.childElementCount;
  console.log('numberOfChildren', numberOfChildren);
  function setStyleTop(n) {
      for(let i=0; i< numberOfChildren; i++) {
          if(i >= 2) {
              mainContainer.children[i].style.top = `${n}px`;
          }
      }
  }

  scrollToTopEl.addEventListener('click', scrollToTopFn, false);
  function scrollToTopFn() {
    window.scrollTo({
      top: 0,
        behavior: "smooth"
    });
  }



  
  // window.addEventListener('scroll', stickyScrolllUp, false);
  

  // function stickyScrolllUp() {
  //   if (window.scrollY >= stickyPosition) {
  //     scrollToTopEl.classList.remove("scroll-up");
  //   } else {
  //     scrollToTopEl.classList.add("scroll-up");
    
  //   }
  // }

  

  // SECTION: ============================================= Navigator
  // ================================================================

  // ######## PART-ONE: For Min-width: 1024x

  function navWaraper() {
    console.log('li length', dropdown.length);
    dropdown.forEach(a => {
      addEvent(a, 'mouseover', navMouseover);
      addEvent(a, 'mouseout', navMouseout);
    });
    function navMouseover() {
      // let navSpanOne = this.firstElementChild.firstElementChild.firstElementChild.nextElementSibling;
      let divElement =  this.firstElementChild;
      let aElement = divElement.firstElementChild;
      let navSpanOne = aElement.firstElementChild.nextElementSibling;
      navSpanOne.classList.remove('dropdown-closed');
      navSpanOne.classList.add('dropdown-open');
    }
    function navMouseout() {
      let divElement =  this.firstElementChild;
      let aElement = divElement.firstElementChild;
      let navSpanOne = aElement.firstElementChild.nextElementSibling;
      navSpanOne.classList.remove('dropdown-open');
      navSpanOne.classList.add('dropdown-closed');
    }
  }
  navWaraper()

  // ######## PART-TWO: For Max-width: 1024px

  dropdown.forEach(li => {
    let firstChiledElement = li.children[0];    // newly added
    let secondChildElemet = firstChiledElement.children[1];     // let secondChildElemet = li.children[1];
    if(secondChildElemet) {
      addEvent(secondChildElemet, 'click', dropDownToggle);
    }
    
  });
  function dropDownToggle(e){
    const target = getTarget(e); 
    const parentElemet = target.parentNode.parentNode;
    parentElemet.classList.toggle('open');
  }


  // SECTION-PART: ===================== Menu Icon - Max-Width 1024px
  // ================================================================

  let menusSmallSize = document.querySelector('#menu-small-size');
  let menuIcon = document.querySelector('.menu-icon');
  let navContainer = document.querySelector('.nav-container');
  let nav_list = document.querySelector('.nav-list');    // ############ navContainer
  let menu_container = document.querySelector('.menu-container');

  nav_list.style.left="-100%";  // ###########
  let btnChild = menu_container.firstElementChild;

  addEvent(menusSmallSize, 'click', () => {
    menusSmallSize.classList.toggle('active');
  })

  addEvent(btnChild, 'click', menuToggle);

  function menuToggle(){
    if (nav_list.style.left=="-100%") {
      nav_list.style.left="0";
    }
    else {
      nav_list.style.left="-100%";
    }     
  }


  // SECTION: ================================================ Slider
  // ================================================================

  const slides = document.querySelectorAll('.slider-wrapper figure');
  let slider = document.querySelector('#slider');
  let slideIndex = 0;
  let autoSlide;
  const slideInterval = 4000; // milliseconds

  let preSliderBtn = slider.children[1];
  let nextSliderBtn = slider.children[2];

  addEvent(preSliderBtn, 'click', prevSlide);
  addEvent( nextSliderBtn, 'click', nextSlide);

  function showSlide(n) {
      slides.forEach(slide => slide.style.display = "none");
      slides[n].style.display = "block";
  }
  function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
      slideIndex = 0;
      }
      showSlide(slideIndex);
  }
  function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
      slideIndex = slides.length - 1;
      }
      showSlide(slideIndex);
  }
  function startAutoSlide() {
      autoSlide = setInterval(() => {
      nextSlide();
      }, slideInterval);
  }
  function stopAutoSlide() {
      clearInterval(autoSlide);
  }
  showSlide(slideIndex);
  startAutoSlide();


  // SECTION: ========================================= Container-two
  // ================================================================

  const inner_container_two = document.querySelector('.inner-container-two');
  if (isTouchDevice) {
    addEvent(inner_container_two, 'touchmove', function(e) { touchMove(e, 'ic-two-touch')} );
    addEvent(inner_container_two, 'touchend', function(e) { touchEnd(e, 'ic-two-touch')});
  }
  function touchMove(e, name) {
    let target = getTarget(e);
    if ( target.nodeName.toLowerCase() == "img" ) {
      target.classList.add(name);
    }
  }
  function touchEnd(e, name) {
    let target = getTarget(e);
    if ( target.nodeName.toLowerCase() == "img" ) {
      target.classList.remove(name);
    }
  }
        

  // SECTION: ================================================ Footer
  // ================================================================

  function setDate() {
    const today = new Date();
    const year = today.getFullYear();
    let footerDate =  document.querySelector('#footerDate');
    footerDate.innerHTML = '<p>&copy ' + year + ' Parkland College. All rights reserved.</p>';
  }
  setDate();


  // ##### For Language Change
  // NOTE: For language of Amharic and English
  
  let languageToggle = document.getElementById("language-toggle");
  let amharicLang  = document.querySelectorAll('._am');
  let englishLang  = document.querySelectorAll('._en');

  if(!localStorage.getItem('checkboxState')) {
      languageStorage();  
    } else {
    setLanguage();
  }

  function languageStorage() {
    localStorage.setItem("checkboxState", languageToggle.checked);
    setLanguage();
  }

  function setLanguage() {
    let storedValue = localStorage.getItem("checkboxState");
    if (storedValue === "true") {
      languageToggle.checked = true;
      checkedTrue();
    } else {
      languageToggle.checked = false;
      checkedFalse();
    }
  }

  function checkedTrue () {
    if(amharicLang) {
      amharicLang.forEach(am => {
        am.classList.remove('hide-lang');
      });
    }
    if(englishLang) {
      englishLang.forEach(en => {
        en.classList.add('hide-lang');
      });
    }
  }
  function checkedFalse () {
    if(amharicLang) {
      amharicLang.forEach(am => {
        am.classList.add('hide-lang');
      });
    }
    if(englishLang) {
      englishLang.forEach(en => {
        en.classList.remove('hide-lang');
      });
    }
  }

  languageToggle.addEventListener("change", languageStorage);



}());

