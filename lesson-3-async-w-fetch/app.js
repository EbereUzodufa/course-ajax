(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
	    headers: {
	        Authorization: 'Client-ID abc123'
	    }
	}).then(function(response) {
	    return response.json();
	}).then(addImage);

	function addImage(data) {
	    debugger;
	}
})();
