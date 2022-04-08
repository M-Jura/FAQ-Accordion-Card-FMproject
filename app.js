const q = document.querySelectorAll(".question");
const a = document.querySelectorAll(".answer");

for (let i = 0; i < q.length; i++) {
  q[i].addEventListener("click", () => {
    q[i].classList.toggle("active");
    a[i].classList.toggle("show");
  });
}