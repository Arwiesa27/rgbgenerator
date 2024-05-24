const merah = document.querySelector('.sMerah');
const hijau = document.querySelector('.sHijau');
const biru = document.querySelector('.sBiru');
const desc1 = document.querySelector('.desc1');
const desc2 = document.querySelector('.desc2');
const desc3 = document.querySelector('.desc3');


merah.addEventListener("input", function () {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  desc1.innerHTML = r;
});
hijau.addEventListener("input", function () {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  desc2.innerHTML = g;
});
biru.addEventListener("input", function () {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  desc3.innerHTML = b;
});