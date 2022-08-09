window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {         
  showButtomFloat()

 
}

function showButtomFloat() {

    if (scrollY >= 200) {
      buttomFloat.classList.add('show')
    } else {
      buttomFloat.classList.remove('show')
    }
  }

//   --------------changeLayout--------------

function changeLayout() {
    const elementBody = document.querySelector('body');
    const elementButton = document.querySelector('button svg');
    const elementH1 = document.querySelector('header h1');
    const elementSpan = document.querySelector('header  span');
    const elementH2 = document.querySelector('section h2');
    // const ElementLi2 = document.querySelector('button');
    // const ElementSpan = document.querySelector('span');
    // const ElementFooter = document.querySelector('footer'); 


    elementBody.classList.add('newStyle')
    elementButton.classList.add('newStyle')
    elementH1.classList.add('newStyle')
    elementSpan.classList.add('newStyle')
    elementH2.classList.add('newStyle')

    setTimeout(function() {
        elementBody.classList.remove('newStyle')
        elementButton.classList.remove('newStyle')
        elementH1.classList.remove('newStyle')
        elementSpan.classList.remove('newStyle')
        elementH2.classList.remove('newStyle')
    }, 5000)
}



  