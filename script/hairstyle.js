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


