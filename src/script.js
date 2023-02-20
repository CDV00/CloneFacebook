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
let height = 15;

const parentTextArea = document.getElementById("demo");
const post = document.getElementById("myBtn");

var heightParentTextArea = parseInt(parentTextArea.offsetHeight);

function auto_height(textArea) {
  textArea.style.height = "94px";
  textArea.style.height = (textArea.scrollHeight)+"px";
    //
    parentTextArea.style.height = "94px";
    

    


    parentTextArea.style.height=(parentTextArea.scrollHeight)+"px";
    //
    const main =document.getElementById("main");
    
    main.style.height = "400px";
    main.style.height=(main.scrollHeight)+"px";
    //
    
    //
    if(parentTextArea.scrollHeight > heightParentTextArea){
      heightParentTextArea = parentTextArea.scrollHeight;
      height = (height - 1);
      main.style.top = height+"%";
    }  
    //
    if(parentTextArea.scrollHeight < heightParentTextArea){
      heightParentTextArea = parentTextArea.scrollHeight;

      height = (height + 1);
      main.style.top = height+"%";
    } 
    //alert("aa");
    var a = textArea.value.length;
    if(a>0){
      post.disabled = false;
      post.style.backgroundColor = "#2374e1";
      post.classList.add("hoverActive");
    }
    else{
      
      post.disabled = true;
      post.style.backgroundColor = "#616162";
      post.classList.remove("hoverActive");
    }
}
///
function CloseNewPost() {
  document.getElementById("newPost").style.display="none";
}
function OpenNewPost() {
  document.getElementById("newPost").style.display="block";
}