const card = document.querySelector('.card');
const loading = document.querySelector('.container')
let no_of_images = 10;

function randomImages(){
    for (let i = 0; i < no_of_images; i++) {
    fetch('https://source.unsplash.com/random')
    .then(res => {
        let img = document.createElement('img');
        img.src = res.url;
        card.appendChild(img)
    })
    }
}

// this function will run 25 times and will give us 25 random images




window.onscroll = () => {
    const{ clientHeight, scrollHeight, scrollTop } = document.documentElement;
    // by this we'll know that if we reached to the bottom of the page
    if(scrollTop + clientHeight + 1 >= scrollHeight){
        // this will ensure that the loading animation will only be visible when we reached to the bottom of the page 
        // and there are no images to show
        loading.classList.add('show');
        randomImages();

    }else{
        loading.classList.remove('show')
    }
}