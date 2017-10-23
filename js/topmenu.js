var btntop = document.getElementById('top_nav'),
    dropContent = document.getElementById('top_drop_content');

btntop.addEventListener('click', function(){
    btntop.classList.toggle("btncol");
    dropContent.classList.toggle("show");
});

document.addEventListener('click', function(e){
    if (!e.target.matches('.nav_el')) {
        dropContent.classList.remove('show');
      }
});
