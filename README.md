## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/attackcom/attackcom.github.io/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

{% raw %} 
<link type="text/css" rel="stylesheet" href="css/style.css">
<script src=“js/kouling.js“></script>
<audio style="display:none; height: 0" id="bgmusic" preload="auto" src="bgm/nyancat.mp3" loop="loop"></audio>
<script>
function autoPlayAudio2() {
document.addEventListener('DOMContentLoaded', function () {    function audioAutoPlay() {        var audio = document.getElementById('bgmusic');            audio.play();        document.addEventListener("WeixinJSBridgeReady", function () {            audio.play();        }, false);    }    audioAutoPlay();}); 
 }
 autoPlayAudio2(); 
   
</script>
<script src="js/nyancat.js"></script>
{% endraw %}

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/attackcom/attackcom.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
