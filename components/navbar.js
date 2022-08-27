let navbar = (images) =>{
    return`
        <div class="row" >
            <div class="col-12" >
                <div class="row">
                    <div class="col-12 navbar-lower-section navbar-hover-top-section" >
                        <ul>
                            <li id="one">Bridal Makeup</li>
                            <li id="two">Celebraty Makeup</li>
                            <li id="three">Eye Make up</li>
                            <li id="four">Face Makeup</li>
                            <li id="five">Lip Make up</li>
                            <li id="six">Makeup Ideas</li>
                            <li id="seven">Mehandi Design</li>
                            <li id="eight">Nail Art</li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 navbar-second-part">
                        <ul>
                            <li>
                                <img src="${images[0]}" alt="">
                                <p>100 Most Beautiful Indian Bridal Makeup Looks You’ll Love</p>
                            </li>
                            <li>
                                <img src="${images[1]}" alt="">
                                <p>100 Most Beautiful Indian Bridal Makeup Looks You’ll Love</p>
                            </li>
                            <li>
                                <img src="${images[2]}" alt="">
                                <p>100 Most Beautiful Indian Bridal Makeup Looks You’ll Love</p>
                            </li>
                            <li>
                                <img src="${images[3]}" alt="">
                                <p>100 Most Beautiful Indian Bridal Makeup Looks You’ll Love</p>
                            </li>
                            <li>
                                <img src="${images[4]}" alt="">
                                <p>100 Most Beautiful Indian Bridal Makeup Looks You’ll Love</p>
                            </li>
                            <li>
                                <img src="${images[5]}" alt="">
                                <p>100 Most Beautiful Indian Bridal Makeup Looks You’ll Love</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>`
}

let fun = (cond) =>{
    document.getElementById(cond).style.backgroundColor="white";
}

export  {navbar,fun};