const advantageButtons = document.querySelectorAll('.advantage__button');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');

advantageButtons.forEach((advantageButton, index) => {
  advantageButton.addEventListener('click', () => {
    advantageItemsContent.forEach((advantageItemContent, j) => {
      if (index === j) {
        advantageButtons[j].classList.add('advantage__button_active');
        advantageItemsContent[j].classList.add('advantage__item-content_active');
      } else {
        advantageButtons[j].classList.remove('advantage__button_active');
        advantageItemsContent[j].classList.remove('advantage__item-content_active');
      }
    })
  })
})
