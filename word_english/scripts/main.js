var myImage = document.querySelector('img');
var btn1 = document.querySelector('button 1');
var btn2 = document.querySelector('button class="previous"');

function nextpicture() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'worddeck/20221110-1.jpg') {
      myImage.setAttribute ('src','worddeck/20221110-2.jpg');
    } 
    else if(mySrc === 'worddeck/20221110-2.jpg') {
      myImage.setAttribute ('src','worddeck/20221110-3.jpg');
    }
    else if(mySrc === 'worddeck/20221110-3.jpg') {
        myImage.setAttribute ('src','worddeck/20221110-4.jpg');
      }
    else if(mySrc === 'worddeck/20221110-4.jpg') {
        alert("這是最後一頁了")
      }
}




function previouspicture() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'worddeck/20221110-3.jpg') {
      myImage.setAttribute ('src','worddeck/20221110-2.jpg');
    } 
    else if(mySrc === 'worddeck/20221110-4.jpg') {
      myImage.setAttribute ('src','worddeck/20221110-3.jpg');
    }
    else if(mySrc === 'worddeck/20221110-2.jpg') {
        myImage.setAttribute ('src','worddeck/20221110-1.jpg');
      }
    else if(mySrc === 'worddeck/20221110-1.jpg') {
        alert("這是第一頁了")
      }
}

btn1.onclick = function() {
    nextpicture();
}

btn2.onclick = function() {
    previouspicture();
}
