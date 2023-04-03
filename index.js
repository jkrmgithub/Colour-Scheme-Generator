// Variables:

const colourInput = document.getElementById("colour-input")
const schemeInput = document.getElementById("scheme-input")
const colourButton = document.getElementById("colour-button")


// Event listener
colourButton.addEventListener("click", function(){
    const colourSelected = colourInput.value
    const schemeSelected = schemeInput.value
    // Need to remove # from hex code
    noHashHex = noHashHex = colourSelected.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${noHashHex}&mode=${schemeSelected}&count=5`)
    .then(res => res.json())
    .then(color => {
        const hexOne = color.colors[0].hex.value
        const hexTwo = color.colors[1].hex.value
        const hexThree = color.colors[2].hex.value
        const hexFour = color.colors[3].hex.value
        const hexFive = color.colors[4].hex.value
        
        
        // Background colours
        document.getElementById("cl-1").style.backgroundColor = hexOne
        document.getElementById("cl-2").style.backgroundColor = hexTwo
        document.getElementById("cl-3").style.backgroundColor = hexThree
        document.getElementById("cl-4").style.backgroundColor = hexFour
        document.getElementById("cl-5").style.backgroundColor = hexFive
        
        // Hex codes
        document.getElementById("hex-1").innerHTML = `<p>${hexOne}</p>`
        document.getElementById("hex-2").innerHTML = `<p>${hexTwo}</p>`
        document.getElementById("hex-3").innerHTML = `<p>${hexThree}</p>`
        document.getElementById("hex-4").innerHTML = `<p>${hexFour}</p>`
        document.getElementById("hex-5").innerHTML = `<p>${hexFive}</p>`
        })
})
