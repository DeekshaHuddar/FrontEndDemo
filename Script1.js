function toggleBox(id) {
    // Get all boxes
    const boxes = document.querySelectorAll('.box');

    // Loop through all boxes and collapse them
    boxes.forEach(box => {
        if (box.id !== id) {
            box.classList.remove('expanded');
        }
    });


    // Toggle the selected box
    const selectedBox = document.getElementById(id);
    selectedBox.classList.toggle('expanded');
   // selectedBox.style.borderBlockColor = "limegreen";


    // Check the radio button when box is expanded
    const radioButton = selectedBox.querySelector('input[type="radio"]');
    radioButton.checked = !radioButton.checked;
}

/*.custom - radio {
    display: flex;
    align - items: center;
    font - size: 18px;
    color: darkslategrey;
    cursor: pointer;
}
*/






