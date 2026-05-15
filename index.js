
const copyMessage = document.getElementById("copy-message")

document.getElementById("get-color-btn").addEventListener("click",()=>{
    const colorType = document.getElementById("mode-selector").value.toLowerCase()
    const selectedColor = document.getElementById("color-selector").value
    const cleanHex = selectedColor.slice(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=${colorType}&count=5`)
    .then((res) => res.json())
    .then((data) => {
        data.colors.forEach((color, index) => {
            document.getElementById(`box${index+1}`).style.backgroundColor = color.hex.value
            document.getElementById(`hex${index+1}`).textContent = color.hex.value
 
            })
        })
    })
        document.querySelectorAll(".hex-code-text").forEach((hex)=>{
            hex.addEventListener("click", ()=>{
                navigator.clipboard.writeText(hex.textContent)
                copyMessage.style.display = "block"
                setTimeout(() => {
                    copyMessage.style.display = "none"
                }, 1000);
            })
        })
    


