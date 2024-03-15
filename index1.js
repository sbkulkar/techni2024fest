document.addEventListener("DOMContentLoaded", function() {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function(card, index) {
      card.addEventListener("click", function() {
          switch (index) {
              case 0:
                  window.location.href = "https://forms.gle/XjMsattk56uynuBE7";
                  break;
              case 1:
                  window.location.href = "https://forms.gle/Rh2Ru2eRqUHpcXx86"; // Replace with the actual link for the second card
                  break;
              case 2:
                  window.location.href = "https://forms.gle/PbtzqTPH5uabRNPX8"; // Replace with the actual link for the third card
                  break;
              case 3:
                  window.location.href = "https://forms.gle/m4idyAuzrAXQRqdz5"; // Replace with the actual link for the fourth card
                  break;
              case 4:
                  window.location.href = "https://forms.gle/KgeSfmKt2BkAKaT88"; // Replace with the actual link for the fifth card
                  break;
              case 5:
                  window.location.href = "https://forms.gle/8RWxGKhnWTg6pwNF6"; // Replace with the actual link for the sixth card
                  break;
              default:
                  break;
          }
      });
  });
});
