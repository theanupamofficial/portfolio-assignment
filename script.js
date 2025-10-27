// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// close notice
const noticeBtn = document.getElementById("closeNotice");
if (noticeBtn) noticeBtn.addEventListener("click", () => noticeBtn.parentElement.remove());

// typewriter effect (Developer / Designer)
const words = ["Developer.", "Designer."];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
  currentWord = words[i];
  typedText.textContent = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(type, 120);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1300);
    } else {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 200);
    }
  }
}
type();
