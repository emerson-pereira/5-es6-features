const getGithubUser = async (username) => {
	const response = await fetch(`https://api.github.com/users/${username}`);
	const user = await response.json();
	console.log(user);
};
  
getGithubUser('emersoonpereiira');

/*
{
	login: "emersoonpereiira",
    name: "Emerson Pereira",
    url: "https://api.github.com/users/emersoonpereiira",
    ...    
}
*/
