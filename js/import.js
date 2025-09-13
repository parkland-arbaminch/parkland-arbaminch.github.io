
// import.js is used to create a HTML template of Header, Navigator, and Footer for different paths in the project


(function () {
    let setUrl = {};
    let className = {};
    let pathnameTruth =  new Array();
    let _header = document.querySelector('.header');
    let _navigator = document.querySelector('.nav-bar');
    let _footer = document.querySelector('.footer-container');
    let mainPathname = ['home', 'admissions.html', 'academics.html', 'coc.html', 'training.html', 'news_events.html', 
                    'undergraduate.html', 'diploma.html', 'postgraduate.html', 'continuing.html', 
                    'degree.html', 'diploma_program.html', 'masters.html', 'distance.html',
                    'level-1.html', 'level-2.html', 'level-3.html', 'level-4.html',
                    'eng-language.html', 'accounting-skill.html', 'computer-skill.html', 'web-development.html', 'engineering-software.html', 'statistical-software.html', 'research-protocol.html',
                    '06_spss.html', '06_r.html', '06_stata.html', '06_sas.html', '06_epi-info.html', '06_satscan.html',
                    'news.html', 'event.html',
                    'news1.html', 'news2.html', 'news3.html', 'news4.html', 'news5.html', 'news6.html', 'news7.html',
                    'news8.html', 'news9.html', 'news10.html',
                    'event1.html', 'event2.html', 'event3.html',
                    'about-us.html', 'contact-us.html', 'president-message.html', 'video.html', 'gallery.html',
                    'news11.html', 'news12.html',
                    'e-library.html', 'crop-production.html', 'animal-production.html', 'natural-resource-conservation.html', 'animal-health.html', 'tour-operation.html',
                    'news13.html', 'news14.html',
                    'jobs_and_vacancies.html', 'event4.html', 'event5.html', 'event6.html']
    ;

    // let mainPathname = ['home', 'ad', 'ac', 'coc', 'tr', 'ne'];

    // =================== External CSS, Scripts, and Favi-con ==================
    document.head.insertAdjacentHTML(
        "beforeend",
        "<link rel='icon' type='image/jpg' href='../../assets/img/logo/parkland2.jpg'>" + 
        "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'>"
    );
    
    // SECTION: ==================== Header =======================
    _header.insertAdjacentHTML("afterbegin", mainHeaderFn());


    // SECTION: ==================== Navigator ====================

    let location = window.location.href;
    console.log('Window location is:-', location);

    let url = new URL(location);
    console.log('URL location is- ', url);

    let path_name = url.pathname;
    console.log('Pathname is:- ', path_name);

    function checkPathname() {
        mainPathname.forEach((pathname) => {
            pathnameTruth.push(checkPathnameTruth(pathname).toString()) ;
        })
    }
    checkPathname()

    function checkPathnameTruth(pathname) {
        let path = path_name.split('/');
        // console.log('split path is:- ', path);
        let cont = [];
        path.forEach((pn) => {
            if(pn.toLowerCase() === pathname.toLowerCase())
            cont.push('true');
        });
        
        return cont.includes('true');

        // let isInclude = path_name.toLowerCase().includes(pathname.toLowerCase());
        // return isInclude;
    }
    console.log('pathnameTruth is', pathnameTruth);

    let setInnerPath = { 
        base: '../',
        ad: '../ad/',
        ac: '../ac/',
        coc: '../coc/',
        tr: '../tr/',
        ne: '../ne/',
        ho: '../ho/',
        
        ad1: 'ad/',
        ac2: 'ac/',
        coc3: 'coc/',
        tr4: 'tr/',
        ne5: 'ne/',
        ho6: 'ho/',

    }

    function setClassName() {
        if(pathnameTruth.indexOf('true') === 0) { /** Home */
            className.home = 'active';
        } else {
            className.home = '';
        }

        if(pathnameTruth.indexOf('true') === 1) { /** Admission */
            className.ad = 'active';
            setUrl.ad = 'admissions.html';

            setInnerPath.base = '';
            setInnerPath.ad = '';
        } else {
            className.ad = '';
            setUrl.ad = '../ad/admissions.html';
        }

        if(pathnameTruth.indexOf('true') === 2) {  /** Academics */
            className.ac = 'active';
            setUrl.ac = 'academics.html';

            setInnerPath.base = '';
            setInnerPath.ac = '';
        } else {
            className.ac = '';
            setUrl.ac = '../ac/academics.html';
        }

        if(pathnameTruth.indexOf('true') === 3) {  /** COC */
            className.coc = 'active';
            setUrl.coc = 'coc.html';

            setInnerPath.base = '';
            setInnerPath.coc = '';

        } else {
            className.coc = '';
            setUrl.coc = '../coc/coc.html';
        }

        if(pathnameTruth.indexOf('true') === 4) {  /** Traning */
            className.tr = 'active';
            setUrl.tr = 'training.html';

            setInnerPath.base = '';
            setInnerPath.tr = '';

        } else {
            className.tr = '';
            setUrl.tr = '../tr/training.html';
        }

        if(pathnameTruth.indexOf('true') === 5) {  /** News and Events */
            className.ne = 'active';
            setUrl.ne = 'news_events.html';

            setInnerPath.base = '';
            setInnerPath.ne = '';

        } else {
            className.ne = '';
            setUrl.ne = '../ne/news_events.html';
        }

        /* ############### Admission  */
        if(pathnameTruth.indexOf('true') === 6) {  /** Undergraduate */
            className.ad = 'active';
            setInnerPath.base = '';
            setInnerPath.ad = '';
        } else if(pathnameTruth.indexOf('true') === 7) {  /** Diploma */
            className.ad = 'active';
            setInnerPath.base = '';
            setInnerPath.ad = '';
        } else if(pathnameTruth.indexOf('true') === 8) {  /** Postgraduate */
            className.ad = 'active';
            setInnerPath.base = '';
            setInnerPath.ad = '';
        } else if(pathnameTruth.indexOf('true') === 9) {  /** Continuing */
            className.ad = 'active';
            setInnerPath.base = '';
            setInnerPath.ad = '';
        } else if(pathnameTruth.indexOf('true') === 10) {  /* ############## Academic */ /** Academic - Degree  */
            className.ac = 'active';
            setInnerPath.base = '';
            setInnerPath.ac = '';
        } else if(pathnameTruth.indexOf('true') === 11) {  /** Academic - Diploma  */
            className.ac = 'active';
            setInnerPath.base = '';
            setInnerPath.ac = '';
        } else if(pathnameTruth.indexOf('true') === 12) {  /** Academic - Postgraduate  */
            className.ac = 'active';
            setInnerPath.base = '';
            setInnerPath.ac = '';
        } else if(pathnameTruth.indexOf('true') === 13) {  /** Academic - Continuing and distance  */
            className.ac = 'active';
            setInnerPath.base = '';
            setInnerPath.ac = '';
        } else if(pathnameTruth.indexOf('true') === 14) {  /* ############## COC */ /** COC - Level-1  */
            className.coc = 'active';
            setInnerPath.base = '';
            setInnerPath.coc = '';
        } else if(pathnameTruth.indexOf('true') === 15) {  /** COC - Level-2  */
            className.coc = 'active';
            setInnerPath.base = '';
            setInnerPath.coc = '';
        } else if(pathnameTruth.indexOf('true') === 16) {  /** COC - Level-3  */
            className.coc = 'active';
            setInnerPath.base = '';
            setInnerPath.coc = '';
        } else if(pathnameTruth.indexOf('true') === 17) {  /** COC - Level-4  */
            className.coc = 'active';
            setInnerPath.base = '';
            setInnerPath.coc = '';
        } else if(pathnameTruth.indexOf('true') === 18) {  /* ############## Training */ /** Training - eng-language */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 19) {  /** Training - accounting-skill */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 20) {  /** Training - computer-skills */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 21) {  /** Training - web-development */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 22) {  /** Training - engineering-software */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 23) {  /** Training - statistical-software */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 24) {  /** Training - research-protocol */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 25) {  /** Training - statistical-software - SPSS */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 26) {  /** Training - statistical-software - R */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 27) {  /** Training - statistical-software - STATA */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 28) {  /** Training - statistical-software - SAS */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 29) {  /** Training - statistical-software - EpiInfo */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 30) {  /** Training - statistical-software - SaTScan */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 31) {  /** News and Events - All News */
            className.ne = 'active';
            setInnerPath.base = '';
            setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 32) {  /** News and Events - All Event */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 33) {  /** News and Events - All News - news1 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 34) {  /** News and Events - All News - news2 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 35) {  /** News and Events - All News - news3 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 36) {  /** News and Events - All News - news4 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 37) {  /** News and Events - All News - news5 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 38) {  /** News and Events - All News - news6 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 39) {  /** News and Events - All News - news7 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 40) {  /** News and Events - All News - news8 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 41) {  /** News and Events - All News - news9 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 42) {  /** News and Events - All News - news10 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 43) {  /** News and Events - All Event - event1 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 44) {  /** News and Events - All Event - event2 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 45) {  /** News and Events - All Event - event3 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 46) {  /** Home - about-us/html */
          className.ho = 'active';
          setInnerPath.base = '';
          setInnerPath.ho = '';
        } else if(pathnameTruth.indexOf('true') === 47) {  /** Home - contact-us.html */
          className.ho = 'active';
          setInnerPath.base = '';
          setInnerPath.ho = '';
        } else if(pathnameTruth.indexOf('true') === 48) {  /** Home - president-message.html */
          className.ho = 'active';
          setInnerPath.base = '';
          setInnerPath.ho = '';
        } else if(pathnameTruth.indexOf('true') === 49) {  /** Home - vedio.html */
          className.ho = 'active';
          setInnerPath.base = '';
          setInnerPath.ho = '';
        } else if(pathnameTruth.indexOf('true') === 50) {  /** Home - gallery.html */
          className.ho = 'active';
          setInnerPath.base = '';
          setInnerPath.ho = '';
        } else if(pathnameTruth.indexOf('true') === 51) {  /** News and Events - All News - news11 */
            className.ne = 'active';
            setInnerPath.base = '';
            setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 52) {  /** News and Events - All News - news12 */
            className.ne = 'active';
            setInnerPath.base = '';
            setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 53) {  /** Training - Digital Library */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 54) {  /** Training - Digital Library - Crop production */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 55) {  /** Training - Digital Library - Animal production */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 56) {  /** Training - Digital Library - Natural Resource... */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 57) {  /** Training - Digital Library - Animal Health */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 58) {  /** Training - Digital Library - Tour operation */
            className.tr = 'active';
            setInnerPath.base = '';
            setInnerPath.tr = '';
        } else if(pathnameTruth.indexOf('true') === 59) {  /** News and Events - All News - news13 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 60) {  /** News and Events - All News - news14 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 61) {  /** Home - jobs_and_vacancies.html */
          className.ho = 'active';
          setInnerPath.base = '';
          setInnerPath.ho = '';
        } else if(pathnameTruth.indexOf('true') === 62) {  /** News and Events - All Event - event4 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 63) {  /** News and Events - All Event - event5 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else if(pathnameTruth.indexOf('true') === 64) {  /** News and Events - All Event - event6 */
          className.ne = 'active';
          setInnerPath.base = '';
          setInnerPath.ne = '';
        } else {
        // className.ad = '';
        // setUrl.ad = '../ad/admissions.html';
        }
    }
    setClassName();

    _navigator.insertAdjacentHTML('afterbegin', mainNavigatorFn(className));


    // SECTION: ==================== Footer ====================

    _footer.insertAdjacentHTML("afterbegin", mainFooterFn());


    // =================== Functions ========================
    // =================== Function for Header ==============

    function mainHeaderFn () {
        return `
            <header>
                <div class="header-container">
                    <div class="header-container-one">
                        <a href="../../">
                            <h1>
                                <span class="_en">Welcome to Parkland College | Arba Minch</span>
                                <span class="_am hide-lang">ወደ ፓርክላንድ ኮሌጅ እንኳን በደህና መጡ</span>
                            </h1>
                        </a>
                    </div>
                    <div class="header-container-two">
                        <div class="header-section">
                            <span><i class="bi bi-question-circle"></i></span>
                            <p>
                                <span class="_en">Have a question</span><span class="_am hide-lang">ጥያቄ አሉዎት</span>?
                            </p>
                        </div>
                        <div class="header-section">
                            <a href="tel:+251910287028"><span><i class="bi bi-telephone"></i></span> 0910287028</a>
                            <p>or</p>
                            <a href="tel:+251910828357"> 0910828357</a>
                        </div>
                        <div class="header-section">
                            <a href="mailto:parkland.college20@gmail.com">
                                <span><i class="bi bi-envelope-at"></i></span> parkland.college20@gmail.com
                            </a>
                        </div>
                        <div class="header-section">
                            <p><span><i class="bi bi-envelope-paper"></i></span> 2156</p>
                        </div>
                    </div>
                </div>
            </header>
        `
    }   


    // =================== Function for Navigator ==============

    function mainNavigatorFn(className) {
        return `
            <nav class ="nav-container">
                <div class="logo">
                    <a href="../../"><img src="../../assets/img/logo/parkland2.jpg" alt="Parkland-College-Logo"></a>
                    <a class="home" href="../../"><h1>Parkland College <br> <span>Arba Minch</span></h1></a>
                </div>

                <div class="nav-list">
                    <ul id="MenuItems" class="menu-items" is="expanding-list">
                        <li class="nav-link-wrapper no-link-wrapper">
                            <a class="${className.ho} dropdown-no-link" href="../../">
                                <i class="bi bi-houses"></i>Home
                            </a>
                        </li>

                        <li class="nav-link-wrapper dropdown"> 
                            <div class="inner-wrapper">
                                <a class="${className.ad} dropdown-link" href="${setUrl.ad}">
                                    <i class="bi bi-r-square-fill"></i>Admissions
                                </a>
                                <span class="dropdown-closed nav-span-two"></span>
                            </div>
                            <ul class="dropdown-list">
                                <li><a href="${setInnerPath.base}${setInnerPath.ad}undergraduate.html">Undergraduate</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.ad}diploma.html">Diploma</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.ad}postgraduate.html">Postgraduate</a></li>   
                                <li><a href="${setInnerPath.base}${setInnerPath.ad}continuing.html">Continuing & Distance</a></li>
                            </ul>
                        </li>

                        <li class="nav-link-wrapper dropdown">
                            <div class="inner-wrapper">
                                <a class="${className.ac} dropdown-link" href="${setUrl.ac}">
                                    <i class="bi bi-mortarboard-fill"></i>Academics 
                                </a>
                                <span class="dropdown-closed nav-span-two"></span>
                            </div>
                            <ul class="dropdown-list">
                                <li><a href="${setInnerPath.base}${setInnerPath.ac}degree.html">Undergraduate Programs</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.ac}diploma_program.html">Diploma Programs</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.ac}masters.html">Postgraduate Programs</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.ac}distance.html">Continuing & Distance Education</a></li>
                            </ul>  
                        </li>

                        <li class="nav-link-wrapper dropdown">
                            <div class="inner-wrapper">
                                <a class="${className.coc} dropdown-link" href="${setUrl.coc}">
                                    <i class="bi bi-patch-check-fill"></i>COC
                                </a>
                                <span class="dropdown-closed nav-span-two"></span>
                            </div>
                            <ul class="dropdown-list">
                                <li><a href="${setInnerPath.base}${setInnerPath.coc}level-1.html">Level-1</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.coc}level-2.html">Level-2</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.coc}level-3.html">Level-3</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.coc}level-4.html">Level-4</a></li>
                            </ul>  
                        </li>

                        <li class="nav-link-wrapper dropdown">
                            <div class="inner-wrapper">
                                <a class="${className.tr} dropdown-link" href="${setUrl.tr}">
                                    <i class="bi bi-book-half"></i>Training 
                                </a>
                                <span class="dropdown-closed nav-span-two"></span>
                            </div>
                            <ul class="dropdown-list">
                                <li><a href="${setInnerPath.base}${setInnerPath.tr}eng-language.html">English Language</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.tr}accounting-skill.html">Accounting & Taxation</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.tr}computer-skill.html">Computer Skills</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.tr}web-development.html">Web Development</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.tr}engineering-software.html">Engineering Software</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.tr}statistical-software.html">Statistical Software</a></li>
                                <li><a href="${setInnerPath.base}${setInnerPath.tr}research-protocol.html">Research Protocol</a></li>
                            </ul>  
                        </li>

                        <li class="nav-link-wrapper no-link-wrapper">
                            <a class="${className.ne} dropdown-no-link" href="${setUrl.ne}">
                                <i class="bi bi-newspaper"></i>News & Events
                            </a>
                        </li>
                    </ul>
                    
                </div>

                <div class="lang-menu">
                    <div class="switch">
                        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox">
                        <label for="language-toggle"></label>
                        <span class="on">EN</span><span class="off">አማ</span>
                    </div>
                    <div class="menu-container">
                        <button id="menu-small-size" class="menu-icon">
                            <span class="menu-span"></span>
                            <span class="menu-span"></span>
                        </button>
                    </div>
                </div>
            </nav>
        `
    }

   
    // =================== Function for Footer ==============

    function mainFooterFn() {
        return `
            <footer>
                <div class="inner-footer-container-1 _grid-column-4">
                    <div class="col">
                        <h2>Information About</h2>
                        <ul>
                            <li><a href="${setInnerPath.base}${setInnerPath.ho}about-us.html">About us</a></li>
                            <li><a href="#">Staffs</a></li>
                            <li><a href="#">Course fees & scholarship</a></li>
                            <li><a href="${setInnerPath.base}${setInnerPath.tr}e-library.html">Libraries</a></li>
                            <li><a href="#">Strategic plan</a></li>
                            <li><a href="#">Parkland's research</a></li>
                            <li><a href="#">Conferences at Parkland</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Information For</h2>
                        <ul>
                            <li><a href="#">Current Parkland students</a></li>
                            <li><a href="#">Current Parkland staff</a></li>
                            <li><a href="#">Prospective Undergraduate students</a></li>
                            <li><a href="#">Prospective Diploma students</a></li>
                            <li><a href="#">Prospective Postgraduate students</a></li>
                            <li><a href="#">Prospective Distance learning students</a></li>
                            <li><a href="#">Prospective Continuing education students</a></li>
                            <li><a href="#">Teachers</a></li>
                            <li><a href="#">Alumni</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="${setInnerPath.base}${setInnerPath.ho}contact-us.html">Any questions? Contact us</a></li>
                            <li><a href="${setInnerPath.base}${setInnerPath.ho}president-message.html">President Message</a></li>
                            <li><a href="${setInnerPath.base}${setInnerPath.ho}jobs_and_vacancies.html">Jobs & vacancies</a></li>
                            <li><a href="#">Term dates</a></li>
                            <li><a href="#">Map</a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Systems</h2>
                        <ul>
                            <li><a href="#">Parkland mail</a></li>
                            <li><a href="${setInnerPath.base}${setInnerPath.tr}e-library.html">Digital library</a></li>
                            <li><a href="#">E-learning</a></li>
                        </ul>
                    </div>
                </div>

                <div class="inner-footer-container-2">
                    <span id="footerDate"></span>
                    <p id="myElement" class="nuna">Powerd by <a href="#">NuNa WebTech</a></p>
                </div>

                <div id="scrollToTop" class="scroll-up">
                    <div class="scrollToTop">
                        <i class="bi bi-chevron-up"></i>
                    </div>
                </div>
            </footer>
        `
    }

}());
