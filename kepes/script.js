const gallery = document.getElementById("gallery")

const images = ["Pain PNG 2.png", "Pain PNG 3.png", "Pain PNG 4.png"]

images.forEach(img => {
    let image = document.createElement('img')
    let url = 'images' + '\\' + img
    image.src = url
    gallery.appendChild(image)
})