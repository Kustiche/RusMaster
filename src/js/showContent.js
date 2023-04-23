const servicesCard = document.querySelectorAll(".services__card");

servicesCard.forEach((card) => {
	card.addEventListener("click", (event) => {
		const cardBtn = card.querySelector(".services__button-more");
		const hiddenItem = card.querySelectorAll(".services__item--hidden");

		if (cardBtn == event.target) {
			hiddenItem.forEach((item) => {
				item.classList.toggle("active");
			});
			cardBtn.textContent =
				cardBtn.textContent == "Подробнее" ? "Скрыть" : "Подробнее";
		}
	});
});
