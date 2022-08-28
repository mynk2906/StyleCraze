let navbar2 = ()=>{
    return`
    <div class="container">
              
            <div class="row" id="header-inner-1">
            <div class="col-md-12 ">
                <div class="py-3">
                    <div class="row navbar-Div-1 ">
                        <div class="col-1 text-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" id="icon">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                        <div class="col-md-8 col-8 navbar-logo text-center" id="myLink1">
                            <div class="">
                                    <img class="navbar-logo-img"  src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt="">
                            </div>
                        </div>
                        <div class="col-11">
                            <div class="navbar-lower-section mt-2" id="myLinks2">
                                <ul class="">
                                    <li id="navbar-makeup"><a href="makeup/makeup.html">MAKEUP</a></li>
                                    <li id="navbar-hair-color"><a href="hair care/haircare.html">HAIR CARE</a></li>
                                    <li id="navbar-skin-care"><a href="skincare.html">SKIN CARE</a></li>
                                    <li id="navbar-hairstyle"><a href="hairstyle.html">HAIRSTYLES</a></li>
                                    <li id="navbar-health"><a href="">HEALTH & WELLNESS</a></li>
                                    <li id="navbar-news"><a href="">NEWS</a></li>
                                    <li id="navbar-tools"><a href="tools.html">TOOLS</a></li>
                                    <li id="navbar-products"><a href="production.html">PRODUCTS</a></li>
                                    <li id="navbar-about"><a href="">ABOUT US </a></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            </div>
                    
        </div>
    </div>`
}

let navbar2JS = ()=>{
    document.getElementById('icon').addEventListener('click',()=>{
        var x = document.getElementById("myLink1");
        var y = document.getElementById('myLinks2');
    
        if(x.style.display != "none") {
          x.style.display = "none";
          y.style.display = "block";
        }else{
          x.style.display = "block";
          y.style.display = "none";
        }
    })
}

export {navbar2,navbar2JS};
