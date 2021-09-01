const cocktailContainer = document.querySelector(".cocktail-container");
const searchInput = document.querySelector("#search-field");
const fetchCocktail = async () => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
        const response = await fetch(url);
        const data = await response.json();
        displayCocktail(data.drinks);
        searchInput.value = "";
    }
    catch (error) {
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("text-center");
        errorMessage.innerHTML = `
            <img src="https://a-k-saad.github.io/BD-Meal/images/error.png" alt="" class="error-img">
            <h1 class="text-danger">OOPS! <span class="text-light">No results found for</span> "${searchInput.value}"!</h1>
            <h3 class="text-warning">Please try again!</h3>
        `;
        cocktailContainer.appendChild(errorMessage);
        searchInput.value = "";
    }
}
const displayCocktail = cocktails => {
    cocktailContainer.textContent = "";
    cocktails.map(cocktail => {
        console.log(cocktail)
        const singleCocktail = document.createElement("div");
        singleCocktail.classList.add("col-12", "col-md-4", "col-lg-3", "p-2", "mx-auto");
        singleCocktail.innerHTML = `
            <div class="p-2 bg-light d-grid">
                <img src="${cocktail.strDrinkThumb}" alt="" class="w-100">
                <h4 class="text-center">${cocktail.strDrink}</h4>
                <p class="text-center">${cocktail.strInstructions.slice(0, 25)}</p>
            </div>
    `;
        cocktailContainer.appendChild(singleCocktail);
    });
}
const normalFetch = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=f`;
    fetch(url)
        .then(response => response.json())
        .then(data => normalDisplay(data.drinks))
}
const normalDisplay = cocktails => {
    cocktailContainer.textContent = "";
    cocktails.map(cocktail => {
        console.log(cocktail)
        const singleCocktail = document.createElement("div");
        singleCocktail.classList.add("col-12", "col-md-4", "col-lg-3", "p-2", "mx-auto");
        singleCocktail.innerHTML = `
            <div class="p-2 bg-light d-grid">
                <img src="${cocktail.strDrinkThumb}" alt="" class="w-100">
                <h4 class="text-center pt-3">${cocktail.strDrink}</h4>
                <p class="text-center">${cocktail.strInstructions.slice(0, 25)}</p>
            </div>
    `;
        cocktailContainer.appendChild(singleCocktail);
    });
}
normalFetch();