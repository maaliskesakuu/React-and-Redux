
// localStorage is a temporary browser storage that doesn't get deleted on page refresh
// localStorage doesnt have expiration time
// localStorage is not availabe in Safari incognito mode and is cleared after a private or 
// incognito browsing in other browsers.
var customScript = localStorage.getItem('customScript');

if (customScript !== null) { // if user has not set any customScript, the result will be null
    var scriptEl = document.createElement('script'); // create a <script> element
    scriptEl.src = customScript; // set <script> element to point to the given link

    document.head.appendChild(scriptEl); // append the <script> to the page header
} else { // if no customScript is found, do nothing but leave a message
    console.log('No custom script found. ');
}