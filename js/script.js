const apiURL = "https://boolean-teachers.github.io/mock/api/members/";

function renderCards(dati) {
	const containerElement = document.getElementById("cards-container");
	let htmlCards = "";

	for (const teamMember of dati) {

		const card = `<div class="card">
		<img class="card-img" src="${teamMember.img}" alt="${teamMember.name}" />
		<div class="card-content">
			<h3>${teamMember.name}</h3>
			<div class="role">${teamMember.role}</div>
			<a href="mailto:${teamMember.email}">${teamMember.email}</a>
		</div>
	</div>`;

		htmlCards += card;

	}

	containerElement.innerHTML = htmlCards;
}

axios.get(apiURL).then(r => {

	renderCards(r.data);

}).catch(err => {
	console.log("Errore: ", err.message);
	document.getElementById("cards-container").innerHTML = "Errore chiamata alla web-api";

}).finally(() => {
	console.log("Chiamata terminata");
});