
const sharePanel=document.getElementById('share-panel');
const avatar=document.getElementById('avatar');
const namedate=document.getElementById('name-date');
const shareIcon=document.getElementById('share-icon');
const authorPanel=document.getElementById('author');
const main=document.getElementById('main');
const cancel=document.getElementById('cancel');

sharePanel.style.display="none";
console.log(screen.availWidth);



shareIcon.addEventListener('click', function a(){

    if(screen.availWidth<=600){    
sharePanel.style.display="flex";
authorPanel.style.display="none";
main.style.borderRadius=0;}

else 
{
    sharePanel.style.display="flex";
    sharePanel.style.position="absolute";
    main.style.position="relative";
    sharePanel.style.bottom="8rem";
    sharePanel.style.right="-6rem";
    sharePanel.style.width="21rem";
    sharePanel.style.borderRadius="1rem";
   

}

});



cancel.addEventListener('click', function a(){
    sharePanel.style.display="none";
    authorPanel.style.display="flex";
    main.style.borderRadius="0 0 1rem 1rem";
    
    });
    
