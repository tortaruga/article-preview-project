const shareButton = document.getElementById('share-button');
const tooltip = document.getElementById('tooltip');
const shareIcons = document.getElementById('share-icons');
const authorInfo = document.querySelector('.author-info');
const articleFooter = document.getElementById('article-footer');

// shareButton.addEventListener('click', () => {
//     if (window.matchMedia('(min-width: 728px)').matches) {
//        tooltip.classList.toggle('hidden');
//        shareButton.classList.toggle('change-background');
//        if (shareButton.src.includes('icon-share-white.svg')) {
//            shareButton.src = './images/icon-share.svg';
//        } else {
//         shareButton.src = './images/icon-share-white.svg';
//        }       
//     } else {
//       shareIcons.classList.toggle('hidden');
//       authorInfo.classList.toggle('hidden');
//       articleFooter.classList.toggle('change-background');
//     }
// }
// )

shareButton.addEventListener('click', () => {
  if (window.innerWidth >= 728) {
    tooltip.classList.toggle('hidden');
       shareButton.classList.toggle('change-background');
       if (shareButton.src.includes('icon-share-white.svg')) {
           shareButton.src = './images/icon-share.svg';
       } else {
        shareButton.src = './images/icon-share-white.svg';
       }
  } else {
      shareIcons.classList.toggle('hidden');
      authorInfo.classList.toggle('hidden');
      articleFooter.classList.toggle('change-background');
    }
})