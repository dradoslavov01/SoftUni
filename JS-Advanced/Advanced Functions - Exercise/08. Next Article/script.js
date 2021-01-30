function getArticleGenerator(articles) {
    const div = document.getElementById('content');
    function showNext() {
        if(articles.length > 0) {
           const text = articles.shift(); 
           const content = document.createElement('article'); 
           content.textContent = text;
           div.appendChild(content);
        }          
    }
    return showNext;
}
