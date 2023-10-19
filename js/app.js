
// main.js used for all HTML path

(function () {

  // ======================= Multiple-assined variables ====================
    let body = document.querySelector('body');
    let mainContainer = document.querySelector('#mainContainer');
    let dropdown = document.querySelectorAll('.dropdown');

    console.log('window.machMedia:- ', window.matchMedia('(max-width: 768px)'));
    const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
    let touchSupported = window.matchMedia('(pointer: coarse)').matches;  // A finger on a touchscreen is a coarse pointer
    let pointerFineSupported = window.matchMedia('(pointer: fine)').matches; // A mouse or stylus is a fine pointer
    
  // SECTION: =============== Header, Navigator, and Footer (scroll-up)
  // ================================================================
  // let header = document.querySelector('header');
  let header = document.querySelector('.header');   // ########### header
  let navBar = document.querySelector('.nav-bar');
  let sticky = navBar.offsetTop;
  console.log('sticky is ', sticky);

  let scrollToTopEl = document.querySelector('#scrollToTop'); // Footer (scrool-up)
  let stickyPosition = 600;

  // Function-1
  addMultipleEvent(window, 'resize scroll load orientationchange', utillFunction);
  addMultipleEvent(document, 'resize scroll load orientationchange', utillFunction);

  function utillFunction(){
    let offSetWidth = body.offsetWidth;
    console.log('offSetWidth is ', offSetWidth);
    if (offSetWidth > 1006) {    // = 1024px
      dropdown?.forEach((li) => {
        li.classList.add("dropdown-wrapper");
      }) 
    }
    else {
      dropdown?.forEach((li) => {
        li.classList.remove("dropdown-wrapper");
      })
    }

    if (window.scrollY >= stickyPosition) {
      scrollToTopEl.classList.remove("scroll-up");
    } else {
      scrollToTopEl.classList.add("scroll-up");
    }
  }

  scrollToTopEl.addEventListener('click', scrollToTopFn, false);
  function scrollToTopFn() {
    window.scrollTo({
      top: 0,
        behavior: "smooth"
    });
  }

  // SECTION: ============================================= Navigator
  // ================================================================

  dropdown?.forEach(li => {
    let firstChiledElement = li.children[0]; 
    let secondChildElemet = firstChiledElement.children[1]; 
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

    // SECTION: =========================================== Footer-Date
    // ================================================================
    let footer_2 = document.querySelector('#_footer');
    let footerDate = footer_2.querySelector('#footerDate');

    const today = new Date();
    const year = today.getFullYear();

    footerDate.innerHTML = '<p>&copy ' + year + ' Parkland College. All rights reserved.</p>';




    // SECTION: =============================================== Training
    // ================================================================

    // ### Pop-up-info
    let pop_up_containerd = document.querySelectorAll('.pop-up-container');
    let pop_up_close = document.querySelectorAll('.pop-up-close');

    pop_up_containerd.forEach(divEl => {
        divEl.addEventListener('click', popUpInfo, false);
    });
    pop_up_close.forEach(spanEl => {
        spanEl.addEventListener('click', popUpClose, false);
    });

    function popUpInfo(e) {
        let target = e.target;
        let parentP, parentDiv, inner_pop_up;
        if(target.nodeName.toLowerCase() == 'i') {
            parentP = target.parentNode.parentNode;
            parentDiv = parentP.parentNode;
            inner_pop_up = parentDiv.querySelector('.inner-pop-up');
            inner_pop_up.style.display = 'flex';
        }
        if(target.nodeName.toLowerCase() == 'span') {
            parentP = target.parentNode;
            parentDiv = parentP.parentNode;
            inner_pop_up = parentDiv.querySelector('.inner-pop-up');
            inner_pop_up.style.display = 'flex';
        }
    }

    function popUpClose (e) {
        let target = e.target;
        let parentSpan, parentDiv;
        if(target.nodeName.toLowerCase() == 'i') {
            parentSpan = target.parentNode;
            parentDiv = parentSpan.parentNode.parentNode;
            parentDiv.style.display = 'none';
        }

        if(target.nodeName.toLowerCase() == 'span') {
            parentDiv = target.parentNode.parentNode;
            parentDiv.style.display = 'none';
        }
    }



    // GENERIC: ============================ For Hover/Touch link effect
    // ================================================================

    // ##### Li hover/touch effect of bottom border line
    // NOTE: Applied on: Addmission;

    let hover_effect = document.querySelectorAll('._li-hover-effect');
    let hoverUl; 
  
    if (hover_effect) {
        hover_effect.forEach(parent => {
            hoverUl = parent.querySelectorAll('ul');
            LinkWaraper();
            console.log('hoverEl length', hoverUl.length);
        })
    }
   
    function LinkWaraper() {  
        hoverUl?.forEach(ul => {
          if(pointerFineSupported) {
            addEvent(ul, 'mouseover', linkMouseover);
          }
          if(touchSupported) {
            addEvent(ul, 'touchmove', linkTouchmove);  // Four touch screen
          }
        });
    
        function linkMouseover() {
            let liEl = this.querySelectorAll('li');
            liEl?.forEach(li => {
                addEvent(li, 'mouseover', function() {
                    let aLink = li.firstElementChild;
                    if(aLink) {
                        if(aLink.nodeName.toLowerCase() == 'a') {
                            aLink.classList.add('_hover-link');
                        }
                    }
                });
                addEvent(li, 'mouseout', function() {
                    let aLink = li.firstElementChild;
                    if(aLink) {
                        if(aLink.nodeName.toLowerCase() == 'a') {
                            aLink.classList.remove('_hover-link');
                        }
                    }
                });
            });
        }
        function linkTouchmove() {
            let liEl = this.querySelectorAll('li');
            liEl?.forEach(li => {
                addEvent(li, 'touchmove', function() {
                    let aLink = li.firstElementChild;
                    if(aLink) {
                        if(aLink.nodeName.toLowerCase() == 'a') {
                            aLink.classList.add('_hover-link');
                            aLink.style.backgroundSize = "100% 2px";
                        } 
                    }
                    
                });
                addEvent(li, 'touchend', function() {
                    let aLink = li.firstElementChild;
                    if(aLink) {
                        if(aLink.nodeName.toLowerCase() == 'a') {
                            aLink.classList.remove('_hover-link');
                        }  
                    }
                });
            });
        }
    }
   

    // ##### Li list-style  
    // NOTE: Applied on: Addmission;

    let list_style = document.querySelectorAll('._li-list-style');
    let listUl;

    if (list_style) {
        list_style.forEach(ul => {
            listUl = ul.querySelectorAll('ul');
            listStyle();
            console.log('listUl length', listUl.length);
        })
    }

    function listStyle() {  
        if(listUl) {
            listUl.forEach(ul => {
                ul.classList.add('_list-style');
            })
        }
    }
   

    // ##### Roteting Cards  
    // NOTE: Applied on: Traning;

    let card = document.querySelectorAll('.card');
    let card_front, card_back;

    card?.forEach(el => {
        if(pointerFineSupported) {
            addEvent(el, 'mouseover', function () {
                card_front = this.querySelector('.card-front');
                card_back = this.querySelector('.card-back');
                card_front.style.transform = 'rotateY(-180deg)';
                card_back.style.transform = 'rotateY(0deg)';
            });
            addEvent(el, 'mouseout', function () {
                card_front = this.querySelector('.card-front');
                card_back = this.querySelector('.card-back');
                card_front.style.transform = 'rotateY(0deg)';
                card_back.style.transform = 'rotateY(180deg)';
            });
        }

        if(touchSupported) {
            let card_rotate = document.querySelectorAll('.card-rotate');
            card_rotate.forEach(rotate => {
                rotate.style.display = 'block';
            })
            addEvent(el, 'click', function (e) {
                let target = getTarget(e);
                if ( target.nodeName.toLowerCase() == "button" ) {  
                    let attr = target.getAttributeNode('class');
                    if(attr.value == 'card-rotate') {
                        let btnParent = target.parentNode.parentNode;       
                        btnParent.classList.toggle('cardhover');
                    } 
                }
            });
        }
    });

    // ##### For All 'Detail' Element

    let detailsEl = document.querySelectorAll('details');
    let parentDetail, parentSummary;

    detailsEl?.forEach(detail => {
        if(pointerFineSupported) {
            detail.classList.add('hovers');
            addEvent(detail, 'click', function (e) {
                let target = getTarget(e);
                if(target.nodeName.toLowerCase() == 'summary') {
                    parentDetail = target.parentNode;
                    parentDetail.classList.toggle('active');
                    parentDetail.classList.toggle('hovers');
                }
                if(target.nodeName.toLowerCase() == 'p') {
                    parentSummary = target.parentNode;
                    parentDetail = parentSummary.parentNode;
                    parentDetail.classList.toggle('active');
                    parentDetail.classList.toggle('hovers');
                }
                if(target.nodeName.toLowerCase() == 'strong') {
                    parentSummary = target.parentNode.parentNode;
                    parentDetail = parentSummary.parentNode;
                    parentDetail.classList.toggle('active');
                    parentDetail.classList.toggle('hovers');
                }
            });
        }

        if(touchSupported) {
            addEvent(detail, 'click', function (e) {
                let target = getTarget(e);
                if(target.nodeName.toLowerCase() == 'summary') {
                    parentDetail = target.parentNode;
                    parentDetail.classList.toggle('active');
                }
                if(target.nodeName.toLowerCase() == 'p') {
                    parentSummary = target.parentNode;
                    parentDetail = parentSummary.parentNode;
                    parentDetail.classList.toggle('active');
                }
                if(target.nodeName.toLowerCase() == 'strong') {
                    parentSummary = target.parentNode.parentNode;
                    parentDetail = parentSummary.parentNode;
                    parentDetail.classList.toggle('active');
                }
            });
            addEvent(detail, 'touchmove', function() {
                detail.classList.add('touch');
            });
            addEvent(detail, 'touchend', function() {
                detail.classList.remove('touch');
            });
        }
    });

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

    function checkedTrue() {
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
    function checkedFalse() {
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




}())
