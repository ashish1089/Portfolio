function mobileNav() {
    const headerBtn = document.querySelector(".header__bars");
    const mobileNav = document.querySelector(".mobile-nav")
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
    // State
    let isMobileNaveOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNaveOpen = !isMobileNaveOpen;
        if (isMobileNaveOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden'; 
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'; 
        }
        console.log(isMobileNaveOpen);  
    })

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNaveOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
}

export default mobileNav;