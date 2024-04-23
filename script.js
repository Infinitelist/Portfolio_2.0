/* Rutherford Labbe: 12-10-2023 */

/* --------------------------------------------------------- Section Divider ------------------------------------------------------------- */

// Global variables - Text links
var linkOne = document.getElementById('website');
var linkTwo = document.getElementById('design');
var linkThree = document.getElementById('game');
var linkFour = document.getElementById('react');

// Global variables - Image sections
var imageSectionOne = document.getElementById('website_item');
var imageSectiontwo = document.getElementById('design_item');
var imageSectionThree = document.getElementById('game_item');
var imageSectionFour = document.getElementById('react_item');

/* --------------------------------------------------------- Section Divider ------------------------------------------------------------- */

// Global variable - Project images container
// Gets the number of children elements
var projectImageSectionCount = document.getElementById('project_img').childElementCount;

// List all the children elements inside an array
var projectImageSection = document.getElementById('project_img').children;

// Loops through all the children elements
for( var i = 0; i < projectImageSectionCount; i++){

    // At index 0 - Set children element to display block
    if(i == 0){
        projectImageSection[i].style.display = 'block';
    }

    // At index 1 - Set children element to display none
    else if(i == 1){
        projectImageSection[i].style.display = 'none';
    }

    // At index 2 - Set children element to display none
    else if(i == 2){
        projectImageSection[i].style.display = 'none';
    }

    // At index 3 - set children element to display none
    else if(i == 3){
        projectImageSection[i].style.display = 'none';
    }
}

/* --------------------------------------------------------- Section Divider ------------------------------------------------------------- */

// Navigation button highlighter - First button of the second navigation bar
linkOne.style.backgroundColor = 'var(--Malibu)';

// Click on links to remove or add the different image sections
linkOne.addEventListener('click', function(){
    imageSectionOne.style.display = 'block';
    imageSectiontwo.style.display = 'none';
    imageSectionThree.style.display = 'none';
    imageSectionFour.style.display = 'none';

    // Navigation button highlighter
    linkOne.style.backgroundColor = 'var(--Malibu)';
    linkTwo.style.backgroundColor = 'initial';
    linkThree.style.backgroundColor = 'initial';
    linkFour.style.backgroundColor = 'initial';

});

// Click on links to remove or add the different image sections
linkTwo.addEventListener('click', function(){
    imageSectionOne.style.display = 'none';
    imageSectiontwo.style.display = 'block';
    imageSectionThree.style.display = 'none';
    imageSectionFour.style.display = 'none';

    // Navigation button highlighter
    linkTwo.style.backgroundColor = 'var(--Malibu)';
    linkOne.style.backgroundColor = 'initial';
    linkThree.style.backgroundColor = 'initial';
    linkFour.style.backgroundColor = 'initial';

});

// Click on links to remove or add the different image sections
linkThree.addEventListener('click', function(){
    imageSectionOne.style.display = 'none';
    imageSectiontwo.style.display = 'none';
    imageSectionThree.style.display = 'block';
    imageSectionFour.style.display = 'none';

    // Navigation button highlighter
    linkThree.style.backgroundColor = 'var(--Malibu)';
    linkOne.style.backgroundColor = 'initial';
    linkTwo.style.backgroundColor = 'initial';
    linkFour.style.backgroundColor = 'initial';

});

// Click on links to remove or add the different image sections
linkFour.addEventListener('click', function(){
    imageSectionOne.style.display = 'none';
    imageSectiontwo.style.display = 'none';
    imageSectionThree.style.display = 'none';
    imageSectionFour.style.display = 'block';

    // Navigation button highlighter
    linkFour.style.backgroundColor = 'var(--Malibu)';
    linkOne.style.backgroundColor = 'initial';
    linkTwo.style.backgroundColor = 'initial';
    linkThree.style.backgroundColor = 'initial';

});

/* --------------------------------------------------------- Section Divider ------------------------------------------------------------- */

// Global variables - Navigation sections
var navOne = document.getElementById('nav_home');
var navTwo = document.getElementById('nav_project');
var navThree = document.getElementById('nav_link');

// First section position is restored after page reloads
document.addEventListener('DOMContentLoaded', function (){

    /* Button highlight color reset */
    navOne.style.backgroundColor = 'var(--Jade)';
    navOne.click();

    // Navigation button highlighter
    navOne.addEventListener('click', function(){
        navOne.style.backgroundColor = 'var(--Jade)';
        navTwo.style.backgroundColor = 'initial';
        navThree.style.backgroundColor = 'initial';
    })

    // Navigation button highlighter
    navTwo.addEventListener('click', function(){
        navTwo.style.backgroundColor = 'var(--Jade)';
        navOne.style.backgroundColor = 'initial';
        navThree.style.backgroundColor = 'initial';
    })

    // Navigation button highlighter
    navThree.addEventListener('click', function(){
        navThree.style.backgroundColor = 'var(--Jade)';
        navOne.style.backgroundColor = 'initial';
        navTwo.style.backgroundColor = 'initial';
    })

});

/* --------------------------------------------------------- Section Divider ------------------------------------------------------------- */

