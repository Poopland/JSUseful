setInterval(() => {
    let purchased = document.getElementsByClassName("amount icon-robux-container")
    let total = 0
    for (let i=0;i<purchased.length;i++){
        total += Number(purchased[i].childNodes[2].textContent.replace(",",""))
    }
    
    document.getElementsByClassName("amount")[0].textContent = "Total : " + total
}, 100)
