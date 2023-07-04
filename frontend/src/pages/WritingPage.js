function WritingPage( ) {

    
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="local-nav">
                <a href="#web-servers">Web Servers</a>
                <a href="#frontend-design">Frontend Design</a>
                <a href="#optimizing-images">Optimizing Images</a>
                <a href="#cascading-stylesheets">Cascading Stylesheets</a>
            </nav>
            <article id="web-servers">
                <h3>Web Servers</h3>
                <p>The <strong>file</strong> in a website is the HTML file that will be automatically opened up first in a folder of HTML files.</p>
                <p>The first difference is that the index file on the local computer is titled "index.html" while the one on the web server is
                    titled "a1-spisakj/". This is because I opened the index file on the <strong>web server</strong> was automatically opened, while I manually
                    opened the index file on the local computer. The other differences are that the web server shows two more files being successfully
                    executed, those two being "executor.js" and "favicon.io". The favicon is shown on the tab, which contains the OSU graphic.
                </p>
                <p>The "favicon.io" file has a <strong>200 code</strong> because it was automatically included by OSU and thus successfully executed. However, since
                    we didn't write a <strong>.js</strong> or <strong>.css</strong> file and include it in the folder, they weren't successfully executed.
                </p>
                <p>The <strong>scheme</strong> in the <strong>URL</strong> is <strong>https</strong>, which is the secure version of <strong>http</strong>.
                    The <strong>host domain</strong> is "oregonstate.edu", with a <strong>subdomain</strong> of "engr", and a
                    subdomain within that of "web". The <strong>path to the resource</strong> is "~spisakj/CS%20290/M1/a1-spisakj/".
                </p>
            </article>
            <article id="frontend-design">
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong> is the practice of making the experience for users as great as possible. This includes the <strong>visual design</strong>,
                    the way the user interacts with the page, and the visual design <strong>GUI (graphical user interface)</strong>. The design should be consistent in look and
                    feel to maximize <strong>usability</strong> and enjoyment from the user. The colors, icons, fonts, media, and navigation/GUI should appeal to the user and make
                    an attractive website that fits together.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>The site should be accurate at getting what the user wants and intends. Every action taken should get the user to the place they intended.</dd>
                    <dt>Efficient</dt>
                    <dd>The process should be fast and not take too long. The path to different resources shouldn't be unnecessarily long, either.</dd>
                    <dt>Easy to navigate</dt>
                    <dd>The user should be able to understand the functionality on their own and remember for next time. They shouldn't need someone to explain it to them.</dd>
                    <dt>Error-free</dt>
                    <dd>There should not be any problems the user encounters when navigating the site. This means that all errors and potential errors need to be dealt with prior.</dd>
                    <dt>Enjoyable</dt>
                    <dd>The user should feel content with the site and want to come back in the future. They should be engaged and be pleased with how it looks and feels.</dd>
                </dl>
                <p>Page layout tags section off the website content and put it into different categories. For example, definition lists are usually used for definitions,
                    while normal lists can hold other types of information. Paragraphs usually have text, and articles usually have multiple paragraphs. Sections contain
                    articles. Not only does this make the content more organized, but it helps machines like <strong>search engine robots</strong> and <strong>screen readers</strong>
                    understand what each section is for, and then be able to match users to what they are searching for. If someone searches "juggling skills" it could get them to a
                    page with a header that says "juggling skills."
                </p>
                <p>The <strong>anchor tag</strong> has an "href" attribute where you put the URL of the page or section you want it to go to. When the user
                    clicks on it, they will be directed to it. What is between the anchor tags will determine what actually spells out in text.
                    Text anchors are typically used to jump to a specific section on a page, like a specific heading. <strong>Navigation</strong> on the other
                    hand is used to describe the links that go from page to page or section to section, often times included in a <strong>menu</strong> or
                    <strong>drop-down</strong> format.
                </p>
            </article>
            <article id="optimizing-images">
                <h3>Optimizing Images</h3>
                <p>These are the six main specifications for images on the web:
                    <ul>
                        <li>Descriptive file name: Being very specific about what the image is will help robots guide users to your page. You should be detailed but concise with these descriptions.</li>
                        <li>Small file size: Images should load fast for the user, which means their sizes shouldn't be too large. You can also use srcset and sizes attributes to change the image resolution based on the device.</li>
                        <li>Exact size: You must make sure that the images you include are the proper size for their containers, or they will load very slowly.</li>
                        <li>Correct file format: different types of images must be in different file types. For example, online images are usually with the extension .JPG and transparent images must be .PNG</li>
                        <li>Reduced resolution: Different monitors are capable of rendering different resolutions. We can keep this in mind by allowing for images to have different resolutions based on the device.</li>
                        <li>Color mode: Different types of images require different color modes. Specifically, RBG is used for .PNG, .JPG, .SVG, and .WebP, and Indexed is used for .GIF.</li>
                    </ul>
                </p>
                <p>The best file format for photos which usually contain a large variety of colors and tones is .JPEG, which is a lossy compression format that balances image quality and file size.
                    For line-art, .PNG is great because it is a lossless compression format that can keep the quality high after compressing images with sharp edges and colors. Another option is
                    .GIF, which can support animations.
                </p>
            </article>
            <article id="cascading-stylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>While HTML and JavaScript can be very useful on their own, true customization can only be achieved through CSS. CSS can target specific components of a website or app and specify how they look and behave.
                    This can improve the usability of the content and even help web designers stick to the colors that their brand uses.
                </p>
                <p>The first way to incorporate styles is by linking an external CSS file. This is the most efficient method and will apply to the whole website. You can also embed the styles within a "style" tag, or even just inline
                    in an element with an attribute and value. These two methods might be more convenient for the designer. The last two methods use JavaScript. You can use template literals to apply the styles or manipulate the Document
                    Object Model (DOM) in regular JavaScript to achieve the same effect.
                </p>
            </article>
         </>
    );

}

export default WritingPage;