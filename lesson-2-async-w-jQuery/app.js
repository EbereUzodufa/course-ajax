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


   
    
	function addImage(data){
		// debugger; //Pause let's se what's inside you
		let htmlContent = '';
		// const data = JSON.parse(this.responseText);

		if (data && data.results && data.results[0]) {
			console.log(data.results);
			let images = data.results;
			// for (var i = data.results.length - 1; i >= 0; i--) {
			// 	let images = data.results[i];
			// 	responseContainer.insertAdjacentHTML('afterbegin', '<figure><images src = "' + images.urls.regular + '" alt="' + searchedForText + '"><figcaption>' + searchedForText + ' by ' + images.user.name + '</figcaption></figure>');
			// }
			htmlContent = images.map(image=> `<figure><img src ="${image.urls.regular}" alt=" ${searchedForText}"><figcaption>${searchedForText} by ${image.user.name}</figcaption></figure>`
				).join('');
			// console.log(htmlContent);
			responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
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