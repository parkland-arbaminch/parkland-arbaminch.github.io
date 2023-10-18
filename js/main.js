// index.js file is mainly used for home-page template

(function () {
    
    // GENERIC: ======================================== Truncated Text
    // ================================================================
    // Truncated Text with link
    let extra_long_link = document.querySelectorAll('.extra-long-link');
    let long_link = document.querySelectorAll('.long-link');
    let medium_link = document.querySelectorAll('.medium-link');
    let small_link_plus = document.querySelectorAll('.small-link-plus');
    let small_link = document.querySelectorAll('.small-link');
  
    // Truncated Text without link
    let extra_long_text = document.querySelectorAll('.extra-long-text');
    let long_text = document.querySelectorAll('.long-text');
    let medium_text = document.querySelectorAll('.medium-text');
    let small_text_plus = document.querySelectorAll('.small-text-plus');
    let small_text = document.querySelectorAll('.small-text');
  
    // Truncated Text with link
    truncatedTextLink(extra_long_link, 1000);
    truncatedTextLink(long_link, 500);
    truncatedTextLink(medium_link, 150);
    truncatedTextLink(small_link_plus, 100);
    truncatedTextLink(small_link, 50);
    
    // Truncated Text without link
    truncatedText(extra_long_text, 1000);
    truncatedText(long_text, 500);
    truncatedText(medium_text, 150);
    truncatedText(small_text_plus, 100);
    truncatedText(small_text, 50);
    
    // Truncated Text with link
    function truncatedTextLink(element, textlength) {
      element.forEach(el => {
        // let textElement = text.children[0];
        let textElement = el.querySelectorAll('.text-link');
        textElement.forEach(textEl => {
          let inputText = textEl.textContent.trim();
          if (inputText.length > textlength) {
            console.log('value', inputText.length);
            let truncatedText = inputText.substring(0, textlength) + "...";
            textEl.textContent = truncatedText;
          }
        })
      })
    }
    
    // Truncated Text without link
    function truncatedText(element, textlength) {
      element.forEach(el => {
        // let textElement = text.children[0];
        let textElement = el.querySelectorAll('.text');
        textElement.forEach(textEl => {
          let inputText = textEl.textContent.trim();
          if (inputText.length > textlength) {
            console.log('value', inputText.length);
            if (textlength >= 101) {
              let truncatedText = inputText.substring(0, textlength) + "...";
              let truncated_text = document.createElement("p");
              // let readMoreBtn = document.createElement("button");
              let readMoreBtn = document.createElement("span");
              truncated_text.setAttribute("class", "truncated-text");
              truncated_text.textContent = truncatedText;
              el.appendChild(truncated_text);
              const attributes = {
                class: 'readMoreBtn',
                dataReadLess: 'Show less',
                dataReadMore: 'Show more',
              };
              
              setMultipleAttributes(readMoreBtn, attributes);
              el.appendChild(readMoreBtn);
              
              readMoreBtn.style.display = "inline";
              readMoreBtn.addEventListener('click', toggleText, false);
            }
            else {
              textEl.textContent = inputText.substring(0, textlength) + "...";
              textEl.style.display = 'block'
            }
          } else {
            textEl.style.display = "block";
          }
        })
      })
    }
  
    function toggleText() {
      let parentElement = this.parentNode;
      parentElement.classList.toggle("expanded");
    }
    
}());