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

    
	const unsplashRequest = new XMLHttpRequest();

	unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
	unsplashRequest.onload = addImage;
	unsplashRequest.setRequestHeader('Authorization', 'Client-ID df9fe15869df312f5a3741bfd362aa3f8fd1e383285bd735d64418dcec526d1b');
	unsplashRequest.send();

	function addImage(){
		// debugger; //Pause let's se what's inside you
		let htmlContent = '';
		const data = JSON.parse(this.responseText);

		if (data && data.results && data.results[0]) {
			console.log(data.results);
			for (var i = data.results.length - 1; i >= 0; i--) {
				let img = data.results[i];
				htmlContent += `<figure>
					<img src = "${img.urls.regular}" alt="${searchedForText}">
					<figcaption>${searchedForText} by ${img.user.name}</figcaption>
				</figure>`;
			}
			// const firstImage = data.results[0];
			// htmlContent = `<figure>
			// 		<img src = "${firstImage.urls.regular}" alt="${searchedForText}">
			// 		<figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
			// 	</figure>`
		}
		else{
			htmlContent = '<div class="error-no-image">No Images Available</div>';
		}
		responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
	}

})();
