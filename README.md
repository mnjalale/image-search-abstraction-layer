<body>
   <div class="container">
       <h1>Image Search Abstraction Layer</h1>
       <h3>How to use it:</h3>
       <blockquote>
           <ol>
               <li>Pass a search string as a parameter and you will get the image URLs, alt text and page urls for a set of images relating to the search string</li>
               <li>You can paginate through the responses by adding a ?offset=2 parameter</li>
               <li>You can get a list of the most recently submitted search strings</li>
           </ol>
       </blockquote>
       <h3>Example search usage:</h3>
        <p>[appUrl]/imagesearch/lolcats%20funny?offset=10</p>
       <br/>
       <h3>Example recently submitted search usage:</h3>
       <p>[appUrl]/latest/imagesearch/</p>
      
   </div>
</body>
