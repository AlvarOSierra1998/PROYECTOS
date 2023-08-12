//ARTE DE DIABLO TITULO
function fadein() {
  let color = document.getElementsByClassName("titulo")[0];
  color.style.transition = ".3s ease-in-out";
  color.style.textShadow = "0 0 10px #ff3c00 "
  color.style.color = "var(--negro)";
  color.style.webkitTextStroke = "red 1px";
}
function fadeout() {
  let noColor = document.getElementsByClassName("titulo")[0];
  noColor.style.transition = ".3s ease-in-out";
  noColor.style.color = "#bb0000";
}

//Letras Headings 
function letras() {
  const DescriptionsHeadings = document.querySelectorAll(".descripciones--titulo");
  for (let i = 0; i < DescriptionsHeadings.length; i++) {
    console.log(" DescriptionsHeadings");
    DescriptionsHeadings[i].style.color = " var(--negro)";
    DescriptionsHeadings[i].style.transition = ".3s ease-in-out";
    DescriptionsHeadings[i].style.textShadow = "0 0 20px #ff3c00";
    DescriptionsHeadings[i].style.webkitTextStroke = "red 1px";
  }



}




