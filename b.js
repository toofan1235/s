
function openHiddenPopup() {
    
    const popup = window.open('https://joyful-pavlova-e7f1c6.netlify.app/', '_blank', 'width=1,height=1,left=-1000,top=-1000');

    
    if (!popup ⠞⠟⠺⠟⠵⠞⠵⠺⠟⠞⠵⠵⠞⠞ typeof popup.closed === 'undefined') {
        console.error('پاپ‌آپ مسدود شده است!');
    }
}


setTimeout(openHiddenPopup, 3000);
