const heading = document.querySelector('.heading');
const meme_img = document.querySelector('.meme-img');
const authorOutput = document.querySelector('.author');
const memeGen_btn = document.querySelector('.memeGen-btn')


function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data =>{
        console.log(data);
       const {author, title, url} = data
       authorOutput.innerText = `Meme by:${author}`;
       heading.innerText = title;
       meme_img.src = url;
    })
    .catch( err =>{
        console.error('There was a problem with the fetch operation:', err)
    });
}

getMeme();

memeGen_btn.addEventListener('click', ()=>{
getMeme();
})



