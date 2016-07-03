'use strict';

(function(){
    var example1 = document.querySelector('#example1');
    var example2 = document.querySelector('#example2');
    
    example1.innerHTML = appUrl + '/api/imagesearch/lolcats%20funny?offset=10';
    example1.href = appUrl + '/api/imagesearch/lolcats%20funny?offset=10';
    
    example2.innerHTML =  appUrl + '/api/latest/imagesearch/';
    example2.href =  appUrl + '/api/latest/imagesearch/';
})();