const imags=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control_pre');
const next_btn=document.querySelector('.control_next');

let n=0;

function changeSlide()
{
    for (let i = 0; i < imags.length; i++) {
        imags[i].style.display='none'; 
    }
    imags[n].style.display='block';
    

}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0)
    {
        n--;
    }
    else{
        n=imags.length-1;
    }
    changeSlide();
})
next_btn.addEventListener('click',(e)=>{
    if(n<imags.length-1)
    {
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})
const scrollcontainer=document.querySelectorAll('.products');
for(const item of scrollcontainer)
{
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    });
    
}