window.onload = function(){
    let container = document.querySelector('#canvas');
  
  // Set the hieght, width, and background color of our container
  // center it horizontally with margin = auto
  // and use grid layout to make the boxes nice. 
  let current_color = "pink"

  let colorChoices = ['pink', 'orange', 'yellow', 'green', 'blue', 'purple'];
for(let color of colorChoices) {
  // Code to create each box of the pallet here...
}
  
  container.style.backgroundColor = 'yellow';
  container.style.margin = 'auto';
  container.style.display = 'grid';
  container.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)'

  for(let i = 0; i < 400; i++) {
    let box = document.createElement('span');
    box.style.border = '1px solid black';
    box.style.backgroundColor = 'blue';
    box.style.height = '8px';
    box.style.width = '8px'
    let clickBtn = document.querySelector('#click-button')
    container.appendChild(box);
    clickBtn.addEventListener('click', function(event) {
      alert("You clicked the labeled: " + clickBtn.innerText);
    })

    // querySelectorAll gets ALL the matching elements, not just one
  let unclickables = document.querySelectorAll('.untouchable');
  for(let unclickable of unclickables) {
    unclickable.addEventListener('mouseenter', randomlyMoveElement);
  }
}
