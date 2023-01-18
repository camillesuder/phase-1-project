// javascript code and functionality
const bearDiv = document.querySelector("#bear-collection")
const newBearForm = document.querySelector(".form")

const handleLike = (likeCount) => {
    let num = parseInt(likeCount.innerText)
    num+=1
    likeCount.innerHTML = num + ` Likes`
}



const handleSubmit = (e) => {
    e.preventDefault();
    newBearObj = {}
    newBearObj.name = e.target.name.value
    newBearObj.bellyBadge = e.target.bellyBadge.value
    newBearObj.home = e.target.home.value
    newBearObj.image = e.target.image.value
    newBearObj.likes = e.target.likes.value
    console.log("Form Submitted")
    renderBears(newBearObj)
    e.target.reset()
  }
  
const handleEnlarge = (bearImage) => {
    console.log("HELLO")
    bearImage.style.height = "300px"
    bearImage.style.width = "300px"
}



newBearForm.addEventListener("submit", handleSubmit);



const renderBears = (bearObj) => {
    const bearCard = document.createElement("div")
    const bearName = document.createElement("p")
    const bearBelly = document.createElement("p")
    const bearHome = document.createElement("p")
    const likeCount = document.createElement("p")
    const bearImage = document.createElement("img")
    const likeButton = document.createElement("button")

    likeButton.addEventListener("click", () => (handleLike(likeCount)))
    bearImage.addEventListener("mouseover", () => (handleEnlarge(bearImage)))

    bearImage.classList.add("bear-img")
    likeButton.classList.add("btn")
    bearCard.classList.add("bear-card")

    likeButton.innerText = "♥"
    likeCount.innerText = `${bearObj.likes} Likes`
    bearName.innerText = `Name: ${bearObj.name}`
    bearBelly.innerText = `Belly Badge: ${bearObj.bellyBadge}`
    bearHome.innerText = `Home: ${bearObj.home}`
    bearImage.alt = bearObj.name
    bearImage.src = bearObj.image
    
    bearCard.append(bearImage, bearName, bearBelly, bearHome, likeCount, likeButton)
    bearDiv.appendChild(bearCard)
    
}



const fetchData = () => {
    fetch("http://localhost:3000/carebears")
       .then(response => response.json())
       .then(data => data.forEach(renderBears))
}
fetchData()
