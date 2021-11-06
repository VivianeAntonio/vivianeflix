var listaFilmes = [
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/14/20028635.jpg",
  "https://br.web.img3.acsta.net/pictures/210/079/21007978_20130523175557996.jpg",
  "https://br.web.img3.acsta.net/pictures/19/04/03/18/23/2539612.jpg",
  "https://br.web.img2.acsta.net/pictures/17/12/07/16/09/2291532.jpg",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG",
  "https://br.web.img2.acsta.net/pictures/18/08/15/13/09/1891759.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Twilight_Poster.jpg/250px-Twilight_Poster.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/16/10/19/01/57/552532.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg"
];

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img src=" + listaFilmes[indice] + ">");
}