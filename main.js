let isMenuOpen = true;

const toggleBtn=document.getElementById('toggle-btn');
toggleBtn.addEventListener('click',(e)=>{
  
    const sidebar=document.querySelector('.sidebar');
    if(sidebar.dataset.status==='thin'){
      sidebar.dataset.status='all';
    }else{
      sidebar.dataset.status='thin';
    }
})
window.addEventListener('resize',(e)=>{

})