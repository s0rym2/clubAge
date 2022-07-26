const club = +prompt("age")
if (2022-club < 18){
    document.write(`
    <div class="block">
    <img src="https://www.pharmacosmetica.ru/files/pharmacosmetica/reg_images/eh99989408043-1.jpg" alt="">
    </div>
    `)
}
if (2022-club > 18){
    document.write(`
    <div class="block">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/dtPAIBvSPAs" title="The Sound of Istanbul - Gölge (Club Remix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `)
}

