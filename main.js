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
    const elementButton = document.querySelector('button');
    const elementSvg = document.querySelector('button svg');
    const elementH1 = document.querySelector('header h1');
    const elementSpan = document.querySelector('header span');
    const elementH2 = document.querySelector('section h2');
    const elementSection2 = document.querySelector('.section2 h2');
    const elementSection3 = document.querySelector('.section3 h2');
    const elementP = document.querySelector('section ul li div p');
    const elementP2 = document.querySelector('.section2  li div p');
    const elementP3 = document.querySelector('.section3  li div p');
    


    elementBody.classList.add('newStyle')
    elementButton.classList.add('newStyle')
    elementSvg.classList.add('newStyle')
    elementH1.classList.add('newStyle')
    elementSpan.classList.add('newStyle')
    elementH2.classList.add('newStyle')
    elementSection2.classList.add('newStyle');
    elementSection3.classList.add('newStyle');
    elementP.classList.add('newStyle')
    elementP2.classList.add('newStyle')
    elementP3.classList.add('newStyle')


    setTimeout(function() {
        elementBody.classList.remove('newStyle')
        elementButton.classList.remove('newStyle')
        elementSvg.classList.remove('newStyle')
        elementH1.classList.remove('newStyle')
        elementSection2.classList.remove('newStyle');
        elementSection3.classList.remove('newStyle');
        elementSpan.classList.remove('newStyle')
        elementH2.classList.remove('newStyle')
        elementP.classList.remove('newStyle')
        elementP2.classList.remove('newStyle')
        elementP3.classList.remove('newStyle')

    }, 9000)

  //   setTimeout(function() {
  //   elementSpan.classList.add('newStyle2')
  // }, 3000)
}



  