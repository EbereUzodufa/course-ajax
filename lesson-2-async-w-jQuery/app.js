/* eslint-env jquery */

(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');
	searchedForText = 'hippos';
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });


   
    
	function addImage(images){
		// debugger; //Pause let's se what's inside you
		let htmlContent = '';
		// const data = JSON.parse(this.responseText);

		if (images && images.results && images.results[0]) {
			console.log(images.results);
			for (var i = images.results.length - 1; i >= 0; i--) {
				let img = images.results[i];
				responseContainer.insertAdjacentHTML('afterbegin', '<figure><img src = "' + img.urls.regular + '" alt="' + searchedForText + '"><figcaption>' + searchedForText + ' by ' + img.user.name + '</figcaption></figure>');
			}
		}
		else{
			htmlContent = '<div class="error-no-image">No Images Available</div>';
		}
		// responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
	} 
	$.ajax({
    	url:`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
    	headers: {Authorization: 'Client-ID df9fe15869df312f5a3741bfd362aa3f8fd1e383285bd735d64418dcec526d1b'}
    }).done(addImage);

})();