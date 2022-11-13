let search = document.querySelector("#sb");
let addmovie = document.querySelector("#am");
let footer = document.querySelector("footer");
let favouritemovie;
let fun = (event) => {
  let favourite = document.querySelector("#fm").value;
  favouritemovie = favourite.toUpperCase();
  let einfoname = document.querySelector("#einfo").value;
  let einfovalue = document.querySelector("#text").value;
  let word = `${favouritemovie} -${einfoname} : ${einfovalue}`;
  let ul = document.querySelector("#ul");
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.append(word);
  li.append(a);
  ul.append(li);
  footer = ul.textContent;
  event.preventDefault();
};

let fun2 = () => {
  let input = document.querySelector("#fbts");
  let filter = input.value.toUpperCase();
  favouritemovie = [favouritemovie];
  let f2 = document.querySelector("#f2");
  for (let i = 0; i < favouritemovie.length; i++) {
    if (favouritemovie[i].includes(filter)) {
      f2 = f2.append(favouritemovie[i]);
      f2 = favouritemovie[i];
    } else {
      f2 = "Not Found";
    }
  }
};
addmovie.addEventListener("click", fun);
search.addEventListener("click", fun2);
