
function detectBrowser(browser){
    if (browser === 'Edge'){
        console.log("Edge를 사용중이시네요.");
    } else if (["Chrome", "Firefox", "Safari", "Opera"].includes(browser)){
        console.log("저희 서비스가 지원하는 브라우저를 사용중이시네요.")
    } else{
        alert("현재 페이지가 괜찮아 보이길 바랍니다!")
    }
}