const ThreeDots = document.querySelector('.three-dots');
const containerr = document.querySelector('.containerr');
const cut = document.querySelector('.cut');
ThreeDots.addEventListener("click",()=>{
    containerr.style.width = '50vw';
    containerr.style.transition = 'all 0.6s ease';
    
});
cut.addEventListener("click",()=>{
    containerr.style.width = '0';
    containerr.style.transition = 'all 0.6s ease';
})
