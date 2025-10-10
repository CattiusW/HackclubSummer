function updatePageTitle() {
  
  const currentDateTime = new Date();
  const formattedHours = String(currentDateTime.getHours()).padStart(2, '0');
  const formattedMinutes = String(currentDateTime.getMinutes()).padStart(2, '0');
  
  const timeString = `${formattedHours}:${formattedMinutes}`;
  document.title = "Cassius' Site | "+timeString;
}

setInterval(updatePageTitle, 60);
updatePageTitle();
hash()
function hash() {
    const params = new URLSearchParams(window.location.search);
    redirect()
    function redirect() {
        if (params.has('url')) {
            let url = params.get('url')
            let red = "https://" + atob(url);
            window.location.replace(red);
        }else if (params.has('mail')) {
            window.location.replace("https://mailhide.io/e/PYSevtvr");
        } else if (params.has('github')) {
            window.location.replace("https://github.com/cattiusw");
        } else if (params.has('roll')) {
            window.location.replace("/rickroll.mp4");
        } else if (params.has('/')) {
            window.history.back();
        }
    }
}
