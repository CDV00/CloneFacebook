///csroll-nap
var owl = $('.owl-carousel');
owl.owlCarousel({
  margin: 0,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    300: {
      items: 2
    },
    600: {
      items: 3
    },
    900: {
      items: 4
    },
    1200: {
      items: 5
    }

  }
})

///
const gallery = document.querySelector('.paginated_gallery');
const gallery_scroller = gallery.querySelector('.gallery_scroller');
const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;



gallery.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
gallery.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

// For paginated scrolling, simply scroll the gallery one item in the given
// direction and let css scroll snaping handle the specific alignment.
function scrollToNextPage() {
  gallery_scroller.scrollBy(540, 0);
}
function scrollToPrevPage() {
  gallery_scroller.scrollBy(-540, 0);
}

function updateAlignment(event) {
  const alignment = event.target.value;
  for (item of gallery.querySelectorAll('.gallery_scroller > div'))
    item.style.scrollSnapAlign = alignment;

  // Currently changing scroll alignment does not force a re-snap in Chrome.
  // This is a bug: http://crbug.com/866127
  // In meantime, if desired a scroll snap can be triggered using a small 
  // scripted scroll e.g.: `gallery_scroller.scrollBy(1, 0);`
}

function hidenGlass(){
  document.getElementById("Glass").hidden = true;
}

function showGlass() {
  document.getElementById("Glass").hidden = false;
}


///




