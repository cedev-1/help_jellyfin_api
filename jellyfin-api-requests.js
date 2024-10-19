const apiUrl = "URL";
const apiKey = "API";
const idUser = "ID-USER";
const idLibrary = "ID-LIBRARY";


async function getUserId() {
    try {
        const response = await fetch(`${apiUrl}/Users?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Error : ${response.statusText}`);
        }
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
        return data;

    } catch (err) {
        console.error(`Erreur: ${err.message}`);
        return null;
    }
}

// getUserId();


async function fetchMovies() {
    try {
        const response = await fetch(`${apiUrl}/Items?api_key=${apiKey}&ParentId=${idLibrary}&IncludeItemTypes=Movie&Recursive=true`);
        if (!response.ok) {
            throw new Error(`Error : ${response.statusText}`);
        }
        const data = await response.json();
        const movies = data.Items;
        console.log(JSON.stringify(movies, null, 2)); 
    } catch (err) {
        console.error(`Erreur: ${err.message}`);
    }
}
// fetchMovies();


async function getAllLibraryId() {
    try {
        const response = await fetch(`${apiUrl}/Items?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Error : ${response.statusText}`);
        }
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    
    } catch (err) {
        console.error(`Erreur: ${err.message}`);
    }
}
// getAllLibraryId();
