let judul = "Akira"
function ubah() {
  document.getElementById("title").innerText = judul;
}
function tgcodepict() {
  let box = document.getElementById("kodegambar");
  let btn = document.getElementById("btncodepict");

  if (box.style.display === "none") {
    box.style.display = "block";
    btn.innerText = "Sembunyikan";
  }
  else {
    box.style.display = "none";
    btn.innerText = "Lihat kode";
  }
}
function tgcodeembr() {
  let box = document.getElementById("kodebiteks");
  let btn = document.getElementById("btncodeembr");
  
  if (box.style.display === "none") {
    box.style.display = "block";
    btn.innerText = "Sembunyikan";
  }
  else {
    box.style.display = "none";
    btn.innerText = "Lihat kode";
  }
}
function tgcodeall() {
  let box = document.getElementsByClassName("semuakode");
  let allbtn = document.getElementById("showallcode");
  
  let buka = box[0].style.display === "none";
  
  for (let i = 0; i < box.length; i++) {
    box[i].style.display = buka ? "block" : "none";
  }
  
  allbtn.innerText = buka
    ? "Sembunyikan semua kode"
    : "Lihat semua kode";
}