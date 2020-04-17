var inputElement = document.querySelector("input");
var buttonElement = document.querySelector("button");
var ulElement = document.querySelector("ul");

var reposList = JSON.parse(localStorage.getItem("list_repos")) || [];

function renderRepositories()
{
    ulElement.innerHTML = '';

    for(repo of reposList)
    {
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(repo);

        itemElement.appendChild(itemText);

        ulElement.appendChild(itemElement);
    }
}


buttonElement.onclick = function(){

    var usrText = inputElement.value;

    axios.get('https://api.github.com/users/'+usrText+'/repos')
    .then(function(response){

        reposList = [];

        var repos = response.data;

        for(repo of repos){
           reposList.push(repo.name);
        }

        renderRepositories();
        saveToStorage();
    })
    .catch(function(error){
        console.log(error);
    })

}

function saveToStorage(){
    localStorage.setItem('list_repos',reposList);
}


renderRepositories();

