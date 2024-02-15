const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
eval(urlParams.get("js_code"));
