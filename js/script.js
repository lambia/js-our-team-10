const teamMembers = [
	{
		name: "Marco Bianchi",
		role: "Designer",
		email: "marcobianchi@team.com",
		img: "img/male1.png"
	},
	{
		name: "Laura Rossi",
		role: "Front-end Developer",
		email: "laurarossi@team.com",
		img: "img/female1.png"
	},
	{
		name: "Giorgio Verdi",
		role: "Back-end Developer",
		email: "giorgioverdi@team.com",
		img: "img/male2.png"
	},
	{
		name: "Marta Ipsum",
		role: "SEO Specialist",
		email: "martarossi@team.com",
		img: "img/female2.png"
	},
	{
		name: "Roberto Lorem",
		role: "SEO Specialist",
		email: "robertolorem@team.com",
		img: "img/male3.png"
	},
	{
		name: "Daniela Amet",
		role: "Analyst",
		email: "danielaamet@team.com",
		img: "img/female3.png"
	}
];

function renderCards() {
	const containerElement = document.getElementById("cards-container");
	let htmlCards = "";

	for (const teamMember of teamMembers) {

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

renderCards();

document.getElementById("addBtn").addEventListener("click", function () {

	if (teamMembers.length == 6) {
		teamMembers.push({
			name: "Luca Lambiase",
			role: "Teacher",
			email: "luca@lambia.it",
			img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
		});

		renderCards();
		document.getElementById("addBtn").remove();
	}

});