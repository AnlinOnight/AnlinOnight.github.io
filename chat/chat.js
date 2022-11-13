var btn = document.querySelector('button');

function createParagraph() {
    const para = document.createElement('p');
    let chat = prompt('輸入你的留言.');
    para.textContent = chat;
    document.body.appendChild(para);
  }

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }
