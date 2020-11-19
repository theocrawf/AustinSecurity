
//this is copy and pasted code, 
//more of a guidline, 
//pay no attention to that man behind the curtain

// const mediaQuery = window.matchMedia('(max-width: 700px)')

// function handleTabletChange(e) {
//     // Check if the media query is true
//     if (e.matches) {
//         // Then log the following message to the console
//         console.log('Media Query Matched!')
//     }
// }

// // Register event listener
// mediaQuery.addListener(handleTabletChange)

// // Initial check
// handleTabletChange(mediaQuery)

//function for expand button on diamond section
function show() {
    if (document.getElementById('hidden').style.display == 'none') {
        document.getElementById('hidden').style.display = 'block';
    } else {
        document.getElementById('hidden').style.display = 'none';
    }
}