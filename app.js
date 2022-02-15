
 const ratio = .1
 const options = {
   root: null,
   rootMargin: '0px',
   threshold: ratio
 }


window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


function  toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');


   
    
    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.remove('reveal')
          observer.unobserve(entry.target)
        }
      })
    }
    
    document.documentElement.classList.add('reveal-loaded')
    window.addEventListener('DOMContentLoaded', function () {
      const observer = new IntersectionObserver(handleIntersect, options)
      document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r)
    
      })
    })
    
    
    let service = document.querySelector('div');
    let cercle  = document.querySelector('.cercle');
    let span  = document.querySelector('span');
    
    cercle.addEventListener('click', () => {
      if(document.span.classList.contains('cercle')) {
        document.cercle.backgroundColor= "#e95e50";
      }
    })
    
    
    
    
    
    