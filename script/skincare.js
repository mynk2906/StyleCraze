
data.map(function(elem){

    let div = document.createElement('div');

    let img = document.createElement('img');
    img.src = elem.card;

    let title = document.createElement('p');
    title.innerText = elem.truncate_content;

    let author = document.createElement('p');
    author.innerText = "BY " + elem.pull;
    author.setAttribute("id", "writer");

    div.append(img, title, author);
    document.getElementById('container').append(div);
})

document.getElementById("bar").addEventListener("click", function(){
  showNav();
})

function showNav(){
  // clicked++;
  // console.log(clicked);
  document.getElementById("categories").style.visibility = "visible";
  document.getElementById("logo").style.visibility = "hidden";
  document.getElementById("categories").style.marginTop = "-70px";
  document.getElementById("bar").style.marginTop = "-70px";
}

// if(clicked%2===0){
//   document.getElementById("bar").addEventListener("click", function(){
//     hideNav();
//   })
// }

// function hideNav(){
//   document.getElementById("categories").style.visibility = "hidden";
// }


document.getElementById("makeupHover").addEventListener("click", function(){
  showMakeup();
})
function showMakeup(){
  window.location.href = "makeup.html";
}

document.getElementById("haircareHover").addEventListener("click", function(){
  showHaircare();
})
function showHaircare(){
  window.location.href = "haircare.html";
}

document.getElementById("skincareHover").addEventListener("click", function(){
  showSkincare();
})
function showSkincare(){
  window.location.href = "skincare.html";
}

document.getElementById("hairstylesHover").addEventListener("click", function(){
  showHairstyles();
})
function showHairstyles(){
  window.location.href = "hairstyles.html";
}

document.getElementById("healthHover").addEventListener("click", function(){
  showHealth();
})
function showHealth(){
  window.location.href = "health.html";
}

document.getElementById("newsHover").addEventListener("click", function(){
  showNews();
})
function showNews(){
  window.location.href = "news.html";
}

document.getElementById("logo").addEventListener("click", function(){
  window.location.href = "index.html"
})

document.getElementById("firstArticle").addEventListener("click", function(){
  window.location.href = "skincareArticle.html";
})