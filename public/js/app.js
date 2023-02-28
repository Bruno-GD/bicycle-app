const routes = {
    '/': HomePage,
    '/bikes': BikesPage,
}

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname].innerHTML;

let current = document.querySelector('.active');
const navigateTo = (pathname, el) => {
    // window.history.pushState() is used to update the URL without reloading the page
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    // Update the content of the page
    rootDiv.innerHTML = routes[window.location.pathname].innerHTML;
    current.classList.remove('active');
    el.classList.add('active');
    // Update the current variable
    current = el;
}

// This event listener is triggered when the user clicks on a link
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname].innerHTML;
}