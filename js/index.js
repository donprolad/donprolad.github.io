const app = (() => {

    'use strict';

    const __window = window
    const getYear = () => new Date().getFullYear()

    const isWebXrAvailable = (windowContext) => "xr" in windowContext?.navigator ?  "WebXR is available" : "WebXR is not available"

    const copyrightFooter = document.querySelector("#copyright")

    copyrightFooter.innerHTML = `&copy; GMTLABS-SA ${getYear()}`

    console.log(isWebXrAvailable(__window))

})()