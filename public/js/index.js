const getYear = () => new Date().getFullYear()

const copyrightFooter = document.querySelector("#copyright")

copyrightFooter.innerHTML = `&copy; GMTLABS-SA ${getYear()}`
