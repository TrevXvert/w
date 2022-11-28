const menuBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (menuBurger) {
   menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

/*scrollTo*/

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         if (menuBurger.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            menuBurger.classList.remove('_active');
            menuBody.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

/*scrollTo*/



const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_mobile')

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener('click', function (e) {
            menuArrow.parentElement.classList.toggle('_active')
         })
      }
   }
} else {
   document.body.classList.add('_comp')
}


const sliderFirst = new Swiper('.project__slider', {
   // Optional parameters
   function addZero(num) {
      return(num > 9) ? num : '0' + num;
   },
loop: true,
   slidesPerView: 1,
      slideToClickedSlide: true,
         thumbs: {
   swiper: {
      el: '.project-image__slider',
         slidesPerView: 8,
            spaceBetween: 5,
      },
},
pagination: {
   el: '.project__slider-pagination',
      clickable: true,
         type: 'bullets',
   },
breakpoints: {
   320: {
      pagination: {
         el: '.project__slider-pagination',
            clickable: true,
               type: 'bullets',
         },
   },
   767: {
   },
},
}
)




const swiper = new Swiper('.swiper',
   {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      effect: "fade",
      autoplay: {
         delay: 5000,
      },
      autoplay: {
         delay: 5000,
      },



      // If we need pagination

      pagination: {
         el: '.swiper-pagination',
         type: 'fraction',

         formatFractionCurrent: addZero,
         formatFractionTotal: addZero,
         renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '<span class="swiper-pagination-slash">|</span>' + '<span class="' + totalClass + '"></span>';
         },
      },

      // Navigation arrows
      navigation: {
         nextEl: '.slider__arrow--right',
         prevEl: '.slider__arrow--left',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,

      },
   },
);

// const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
// const loadMapBlock = document.querySelector('._load-map');
// const windowHeight = document.documentElement.clientHeight;
// const loadMoreBlock = document.querySelector('._load-more');



// let lazyImagesPositions = [];
// if (lazyImages.length > 0) {
//    lazyImages.forEach(img => {
//       if (img.dataset.src || img.dataset.srcset) {
//          lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
//          lazyScrollCheck();
//       }
//    });
// }

// window.addEventListener('scroll', lazyScroll);

// function lazyScroll() {
//    if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
//       lazyScrollCheck();
//    }
//    // if (!loadMapBlock.classList.contains('_loaded')) {
//    //    getMap();
//    // }
//    if (!loadMoreBlock.classList.contains('_loading')) {
//       loadMore();
//    }
// }

// function lazyScrollCheck() {
//    let imgIndex = lazyImagesPositions.findIndex(
//       item => pageYOffset > item - windowHeight
//    );
//    if (imgIndex >= 0) {
//       if (lazyImages[imgIndex].dataset.src) {
//          lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
//          lazyImages[imgIndex].removeAttribute('data-src');
//       } else if (lazyImages[imgIndex].dataset.src) {
//          lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
//          lazyImages[imgIndex].removeAttribute('data-srcset');
//       }
//       delete lazyImagesPositions[imgIndex];
//    }
// }


// function getMap() {
//    const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
//    if (pageYOffset > loadMapBlockPos - windowHeight) {
//       const loadMapUrl = loadMapBlock.dataset.map;
//       if (loadMapUrl) {
//          loadMapBlock.insertAdjacentHTML(
//             "beforeend",
//             `<iframe src="${loadMapUrl}" style="border: 0;" allowfullscreen="" loading="lazy"></iframe>`
//          )
//       };
//       loadMapBlock.classList.add('_loaded')
//    }
// }

// function loadMore() {
//    const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + pageYOffset;
//    const loadMoreBlockHeight = loadMoreBlock.offsetHeight;

//    if (pageYOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight) {
//       getContent();
//    }
// }

// async function getContent() {
//    if (!document.querySelector('._loading-icon')) {
//       loadMoreBlock.insertAdjacentHTML(
//          "beforeend",
//          `<div class="_loading-icon"></div>`
//       );
//    }
//    loadMoreBlock.classList.add('_loading');

//    let response = await fetch("_more.html", {
//       method: 'GET',
//    });
//    if (response.ok) {
//       let result = await response.text();
//       loadMoreBlock.insertAdjacentHTML('beforeend', result);
//       loadMoreBlock.classList.remove('_loading');
//       if (document.querySelector('._loading-icon')) {
//          document.querySelector('._loading-icon').remove();
//       }
//    } else {
//       alert('Ошибка')
//    }
// }













// /**
//  * @typedef {Object} dNode
//  * @property {HTMLElement} parent
//  * @property {HTMLElement} element
//  * @property {HTMLElement} to
//  * @property {string} breakpoint
//  * @property {string} order
//  * @property {number} index
//  */

// /**
//  * @typedef {Object} dMediaQuery
//  * @property {string} query
//  * @property {number} breakpoint
//  */

// /**
//  * @param {'min' | 'max'} type
//  */
// export function useDynamicAdapt(type = 'min') {
//    const className = '_dynamic_adapt_'
//    const attrName = 'data-da'

//    /** @type {dNode[]} */
//    const dNodes = getDNodes()

//    /** @type {dMediaQuery[]} */
//    const dMediaQueries = getDMediaQueries(dNodes)

//    dMediaQueries.forEach((dMediaQuery) => {
//       const matchMedia = window.matchMedia(dMediaQuery.query)
//       // массив объектов с подходящим брейкпоинтом
//       const filteredDNodes = dNodes.filter(({ breakpoint }) => breakpoint === dMediaQuery.breakpoint)
//       const mediaHandler = getMediaHandler(matchMedia, filteredDNodes)
//       matchMedia.addEventListener('change', mediaHandler)

//       mediaHandler()
//    })

//    function getDNodes() {
//       const result = []
//       const elements = [...document.querySelectorAll(`[${attrName}]`)]

//       elements.forEach((element) => {
//          const attr = element.getAttribute(attrName)
//          const [toSelector, breakpoint, order] = attr.split(',').map((val) => val.trim())

//          const to = document.querySelector(toSelector)

//          if (to) {
//             result.push({
//                parent: element.parentElement,
//                element,
//                to,
//                breakpoint: breakpoint ?? '767',
//                order: order !== undefined ? (isNumber(order) ? Number(order) : order) : 'last',
//                index: -1,
//             })
//          }
//       })

//       return sortDNodes(result)
//    }

//    /**
//     * @param {dNode} items
//     * @returns {dMediaQuery[]}
//     */
//    function getDMediaQueries(items) {
//       const uniqItems = [...new Set(items.map(({ breakpoint }) => `(${type}-width: ${breakpoint}px),${breakpoint}`))]

//       return uniqItems.map((item) => {
//          const [query, breakpoint] = item.split(',')

//          return { query, breakpoint }
//       })
//    }

//    /**
//     * @param {MediaQueryList} matchMedia
//     * @param {dNodes} items
//     */
//    function getMediaHandler(matchMedia, items) {
//       return function mediaHandler() {
//          if (matchMedia.matches) {
//             items.forEach((item) => {
//                moveTo(item)
//             })

//             items.reverse()
//          } else {
//             items.forEach((item) => {
//                if (item.element.classList.contains(className)) {
//                   moveBack(item)
//                }
//             })

//             items.reverse()
//          }
//       }
//    }

//    /**
//     * @param {dNode} dNode
//     */
//    function moveTo(dNode) {
//       const { to, element, order } = dNode
//       dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement)
//       element.classList.add(className)

//       if (order === 'last' || order >= to.children.length) {
//          to.append(element)

//          return
//       }

//       if (order === 'first') {
//          to.prepend(element)

//          return
//       }

//       to.children[order].before(element)
//    }

//    /**
//     * @param {dNode} dNode
//     */
//    function moveBack(dNode) {
//       const { parent, element, index } = dNode
//       element.classList.remove(className)

//       if (index >= 0 && parent.children[index]) {
//          parent.children[index].before(element)
//       } else {
//          parent.append(element)
//       }
//    }

//    /**
//     * @param {HTMLElement} element
//     * @param {HTMLElement} parent
//     */
//    function getIndexInParent(element, parent) {
//       return [...parent.children].indexOf(element)
//    }

//    /**
//     * Функция сортировки массива по breakpoint и order
//     * по возрастанию для type = min
//     * по убыванию для type = max
//     *
//     * @param {dNode[]} items
//     */
//    function sortDNodes(items) {
//       const isMin = type === 'min' ? 1 : 0

//       return [...items].sort((a, b) => {
//          if (a.breakpoint === b.breakpoint) {
//             if (a.order === b.order) {
//                return 0
//             }

//             if (a.order === 'first' || b.order === 'last') {
//                return -1 * isMin
//             }

//             if (a.order === 'last' || b.order === 'first') {
//                return 1 * isMin
//             }

//             return 0
//          }

//          return (a.breakpoint - b.breakpoint) * isMin
//       })
//    }

//    function isNumber(value) {
//       return !isNaN(value)
//    }
// }



const spoilersArray = document.querySelectorAll('[data-spoilers]');
if (spoilersArray.length > 0) {
   const spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
      return !item.dataset.spoilers.split(",")[0];
   });



   if (spoilersRegular.length > 0) {
      initSpoilers(spoilersRegular);
   }



   const spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
      return item.dataset.spoilers.split(",")[0];
   });



   if (spoilersMedia.length > 0) {
      const breakpointsArray = [];
      spoilersMedia.forEach(item => {
         const params = item.dataset.spoilers;
         const breakpoint = {};
         const paramsArray = params.split(",");
         breakpoint.value = paramsArray[0];
         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
         breakpoint.item = item;
         breakpointsArray.push(breakpoint);
      });



      let MediaQueries = breakpointsArray.map(function (item) {
         return '(' + item.type + "-width:" + item.value + "px)," + item.value + ',' + item.type;
      });
      MediaQueries = MediaQueries.filter(function (item, index, self) {
         return self.indexOf(item) === index;
      });



      MediaQueries.forEach(breakpoint => {
         const paramsArray = breakpoint.split(",");
         const mediaBreakpoint = paramsArray[1];
         const mediaType = paramsArray[2];
         const matchMedia = window.matchMedia(paramsArray[0]);

         const spoilersArray = breakpointsArray.filter(function (item) {
            if (item.value === mediaBreakpoint && item.type === mediaType) {
               return true;
            }
         });

         matchMedia.addListener(function () {
            initSpoilers(spoilersArray, matchMedia);
         });
         initSpoilers(spoilersArray, matchMedia);
      });
   }

   function initSpoilers(spoilersArray, matchMedia = false) {
      spoilersArray.forEach(spoilersBlock => {
         spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
         if (matchMedia.matches || !matchMedia) {
            spoilersBlock.classList.add("_init");
            initSpoilerBody(spoilersBlock);
            spoilersBlock.addEventListener("click", setSpoilerAction);
         } else {
            spoilersBlock.classList.remove("_init");
            initSpoilerBody(spoilersBlock, false);
            spoilersBlock.removeEventListener("click", setSpoilerAction);
         }
      });
   }



   function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
      const spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
      if (spoilerTitles.length > 0) {
         spoilerTitles.forEach(spoilerTitle => {
            if (hideSpoilerBody) {
               spoilerTitle.removeAttribute('tabindex');
               if (!spoilerTitle.classList.contains("_active")) {
                  spoilerTitle.nextElementSibling.hidden = true;
               }
            } else {
               spoilerTitle.setAttribute("tabindex", "-1");
               spoilerTitle.nextElementSibling.hidden = false;
            }
         });
      }
   }



   function setSpoilerAction(e) {
      const el = e.target;
      if (el.hasAttribute("data-spoiler") || el.closest('[data-spoiler]')) {
         const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
         const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
         const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
         if (!spoilersBlock.querySelectorAll('._slide').length) {
            if (oneSpoiler && !spoilerTitle.classList.contains('_active')) {
               hideSpoilersBody(spoilersBlock);
            }
            spoilerTitle.classList.toggle('_active');
            _slideToggle(spoilerTitle.nextElementSibling, 500);
         }
         e.preventDefault();
      }
   }

   function hideSpoilersBody(spoilersBlock) {
      const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');
      if (spoilerActiveTitle) {
         spoilerActiveTitle.classList.remove('_active');
         _slideUp(spoilerActiveTitle.nextElementSibling, 500);
      }
   }
}




let _slideUp = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
         target.hidden = true;
         target.style.removeProperty('height');
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideDown = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (target.hidden) {
         target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
         target.style.removeProperty('height');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideToggle = (target, duration = 500) => {
   if (target.hidden) {
      return _slideDown(target, duration);
   } else {
      return _slideUp(target, duration);
   }
}


