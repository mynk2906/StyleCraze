
import {navbar,fun} from "./components/navbar.js";
import footer from "./components/footer.js";
import {leftImageRC,threeImages} from "./components/leftImageRC.js";
import care from "./components/careSection.js";


document.getElementById('navbar-makeup').addEventListener('mousemove',()=>{
    let images=[];
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/07/750-Top-10-Lakme-Bridal-Salon-Packages-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/09/750-Top-10-Lakme-Bridal-Salon-Packages-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/03/290-100-Most-Beautiful-Indian-Bridal-Looks-277960493-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/02/8-Things-To-Consider-For-Your-Bridal-Makeup-Package-1-267x300.jpg.webp');
    document.getElementById('navbar-hover-section').innerHTML=navbar(images);
    fun("one");
})
document.querySelector('#header-inner-1').addEventListener('mouseover',()=>{

    document.getElementById('navbar-hover-section').innerHTML=null;
})
document.getElementById('front-end-lower-section').addEventListener('mouseover',()=>{

    document.getElementById('navbar-hover-section').innerHTML=null;
})

document.getElementById('navbar-hair-color').addEventListener('mousemove',()=>{
    let images=[];
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2012/08/Ultra-Shiny-And-Glossy-Hair-Secrets-No-One-Tells-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/02/13-Top-Winter-Hair-Care-Tips-For-Healthy-Locks-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/01/10-Simple-Treatments-For-Dandruff-On-Eye-Lashes-And-Eyebrows-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/05/How-To-Make-Brown-Sugar-Scrub-For-Scalp-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2012/12/Permanent-Hair-Straightening-Everything-You-Need-To-Know-Banner-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/01/185-10-unknown-benefits-of-sesame-oil-for-hair_668673961-267x300.jpg.webp');
    document.getElementById('navbar-hover-section').innerHTML=navbar(images);
    fun("one");
})

document.getElementById('navbar-skin-care').addEventListener('mousemove',()=>{
    let images=[];
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2018/12/Hormonal-Acne-How-To-Treat-It-Effectively-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/03/Cystic-Acne-%E2%80%93-What-Is-It-And-How-To-Cure-It-2-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/02/How-To-Prevent-Pimples-And-Acne-Naturally-Tips-And-Home-Remedies-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/06/Vitamin-E-Oil-For-Acne-How-Effective-Is-It-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2014/09/828_11-Effective-Ways-To-Use-Baking-Soda-For-Treating-Acne_iStock-469617628-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/07/Is-Sesame-Oil-Good-For-Acne-Banner-267x300.jpg.webp');
    document.getElementById('navbar-hover-section').innerHTML=navbar(images);
    fun("one");
})

document.getElementById('navbar-hairstyle').addEventListener('mousemove',()=>{
    let images=[];
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/07/21-Luscious-Long-Bobs-Styling-Ideas-To-Inspire-You-2-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2014/02/Top-10-Japanese-Short-Bob-Hairstyles-You-Should-Try-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/05/10-Back-View-Of-Bob-Hairstyles-To-Inspire-You-1-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2014/01/50-Most-Popular-Bob-Shaped-Hairstyles-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/06/86-60-Bob-Haircuts-For-Black-Women-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/05/Chic-Feathered-Hairstyles-Banner-267x300.jpg.webp');
    document.getElementById('navbar-hover-section').innerHTML=navbar(images);
    fun("one");
})

document.getElementById('navbar-health').addEventListener('mousemove',()=>{
    let images=[];
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2013/08/20-Best-Jogging-Tips-For-Better-Health-And-Fitness-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/02/20-Best-Health-Benefits-Of-Physical-Exercise-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2021/08/12-Best-Bodyweight-Hamstring-Exercises-For-Fit-And-Strong-Legs-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2015/02/10-Amazing-Health-Benefits-Of-Evening-Walk-3-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2014/10/How-To-Do-Hip-Thrusts-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2014/09/18-Amazing-Benefits-Of-Silva-Method-Meditation-1-267x300.jpg.webp');
    document.getElementById('navbar-hover-section').innerHTML=navbar(images);
    fun("one");
})

document.getElementById('navbar-news').addEventListener('mousemove',()=>{
    let images=[];
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2022/07/Top-6-Be-Bodywise-Products-with-Reviews-Absolute-Must-haves-for-Womens-Health-Care-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2018/05/Anushka-Sharma-Seems-To-Have-Found-A-New-Love-In-Her-Life-%E2%80%93-Which-She-Swears-By-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2022/04/Brilliant-Ways-To-De-tan-And-Flaunt-Your-Glowing-Skin-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2022/06/henna-model-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2022/06/How-Henna-Has-Remained-An-Evergreen-Beauty-Ingredient-Through-The-Ages-267x300.jpg.webp');
    images.push('https://cdn2.stylecraze.com/wp-content/uploads/2022/06/Did-you-know-facial-bleach-has-emerged-as-a-great-alternative-to-threading-and-waxing-facial-hair-267x300.jpg.webp');
    document.getElementById('navbar-hover-section').innerHTML=navbar(images);
    fun("one");
})


// makeup section *************** 
let makeUp = ()=>{
    document.getElementById('makeup-1').innerHTML=leftImageRC("MAKEUP","https://cdn2.stylecraze.com/wp-content/uploads/2021/12/How-To-Apply-Makeup-Like-A-Pro--A-Step-By-Step-Tutorial-1.jpg.webp");
    let one="images/6-Best-Ways-To-Dry-Your-Nail-Polish-Faster.jpg.webp";
    let two="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/How-To-Do-Eyebrow-Slits.jpg.webp";
    let three="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/7-Different-Nail-Shapes-And-How-To-Achieve-Them.jpg.webp";
    document.getElementById('makeup-2').innerHTML=threeImages(one,two,three);
}
makeUp();

// hair care section
document.getElementById('hair-care-secton-1').innerHTML=care("HAIR CARE");
// ***************

// makeup section *************** 
let hairStyle = ()=>{
    document.getElementById('hair-style-1').innerHTML=leftImageRC("HAIR STYLE","https://cdn2.stylecraze.com/wp-content/uploads/2012/12/50-Best-Short-Wavy-Hairstyles-For-Women-To-Try-In-2022.jpg.webp");
  let one="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/40-Braided-Hairstyles-For-Long-Hair.jpg.webp";
  let two="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/30-Awesome-Ash-Blonde-Hair-Color-Ideas-For-Women-To-Try.jpg.webp";
  let three="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/40-Adorable-Short-Hairstyles-For-Black-Women-To-Inspire-You.jpg.webp";
    document.getElementById('hair-style-2').innerHTML=threeImages(one,two,three);
}
hairStyle();

// slin care section
document.getElementById('skin-care-secton-1').innerHTML=care("SKIN CARE");
// ***************

let healthWellness = ()=>{
    document.getElementById('health-wellness-1').innerHTML=leftImageRC("HEALTH & WELLNESS","https://cdn2.stylecraze.com/wp-content/uploads/2019/01/6-Power-Foods-That-Boost-Dopamine-Levels-1.jpg.webp");
  let one="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/3-day-7-day-Detox-Diet-Plan-For-Weight-Loss-That-Really-Work.jpg.webp";
  let two="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Best-Exercises-For-Reducing-Belly-Fat-At-Home-And-Expert-Tips.jpg.webp";
  let three="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/11-Barbell-Exercises-For-Women-To-Shed-Fat-And-Tone-Up.jpg.webp";
    document.getElementById('health-wellness-2').innerHTML=threeImages(one,two,three);
}
healthWellness();

document.getElementById('footer').innerHTML=footer();