const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e;t.startBtn.addEventListener("click",(()=>{t.body.style.backgroundColor||(e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.setAttribute("disabled",""),t.stopBtn.removeAttribute("disabled"))})),t.stopBtn.addEventListener("click",(()=>{t.body.style.backgroundColor&&(clearInterval(e),t.body.style.backgroundColor="",t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","true"))}));
//# sourceMappingURL=01-color-switcher.59853f77.js.map
