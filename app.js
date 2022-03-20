const watchView =() =>{
    fetch('https://pixabay.com/api/?key=15674931-a9d714b6e9d654524df198e00&q=watch&image_type=photo&pretty=true')
    .then(res =>res.json())
    .then(data=> display(data))
}


const display= watchs =>{

watchs.map(watch => console.log(watch))
}

watchView()