import * as heading from './3D/src/headings/main-heading/main-heading.js'
import * as wall from './3D/src/wall/components/wall.js'

/* GENERAL UTILS */
const classNameValid = (idOrClassName) => document.querySelector(idOrClassName) != null ? true : false

/* DATE UTILS */
const getYear = () => new Date().getFullYear()

/* FUNCTIONAL UTILS */
const compose = (f, g) => x => f(g(x))

const pipe = x => (...fns) => fns.map(f => f(x))
    .reduce((acc, v) => acc && v, true)

/* WEB-VR */
const isWebXrAvailable = (windowContext) => "xr" in windowContext?.navigator ?  true : false

const makeWebVrLinkVisible = (idOrClassName) => {

    const vrLink = document.querySelector(idOrClassName)

    if (vrLink != null) {
        vrLink.style.visibility = "visible"
        return true
    } else {
        vrLink.style.visibility = "hidden"
        return false
    }
}

const main = (() => {

    'use strict';

    const __window = window

    const copyrightFooter = document.querySelector("#copyright")

    copyrightFooter.innerHTML = `&copy; GMTLABS-SA ${getYear()}`


    if (isWebXrAvailable(__window)) {
        const vrLink = document.querySelector(".vr-link")

        let vrLinkState = false

        vrLink.addEventListener("click", () => {
            const twoDimensionalBody = document.querySelector("#body-2d")
            const threeDimensionalBody = document.querySelector("#body-3d")

            if(vrLinkState === false) {
                twoDimensionalBody.style.visibility = "hidden"
                threeDimensionalBody.style.visibility = "visible"
                vrLinkState = !vrLinkState
            } else {
                twoDimensionalBody.style.visibility = "visible"
                threeDimensionalBody.style.visibility = "hidden"
                vrLinkState = !vrLinkState
            }
        })
    }
})()