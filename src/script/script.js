const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {

    const idSelect = character.attributes.id.value;

    if(idSelect === 'ultron') return;

    const characterSelected = document.querySelector(".selected");
    characterSelected.classList.remove("selecionado");

    character.classList.add("selected");

    const imgPlayer1 = document.getElementById('character-player-1');
    imgPlayer1.src = `./src/img/${idSelect}.png`;

    const namePlayer1 = document.getElementById('name-player-1');
    const nameSelected = character.getAttribute('data-name');
    
    namePlayer1.innerHTML = nameSelected;
  });
});