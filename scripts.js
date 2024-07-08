function showContent(section) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the clicked nav item
    const activeNavItem = document.querySelector(`.nav-item[onclick="showContent('${section}')"]`);
    activeNavItem.classList.add('active');

    // Hide all content items
    const contentItems = document.querySelectorAll('.content');
    contentItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show the selected content item
    const activeContentItem = document.getElementById(section);
    activeContentItem.classList.add('active');
}

function enableEdit(id) {
    document.getElementById(id).disabled = false;
}

function saveChanges() {
    const inputs = document.querySelectorAll('.account-section input');
    inputs.forEach(input => {
        input.disabled = true;
    });
}

function cancelChanges() {
    // Logic to reset changes if needed
    const inputs = document.querySelectorAll('.account-section input');
    inputs.forEach(input => {
        input.disabled = true;
    });
}