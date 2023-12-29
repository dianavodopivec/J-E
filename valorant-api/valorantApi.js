const $containerCards = document.querySelector(".main-card-container");
const $searchBar = document.getElementById("searchbar");
const $containerCheckboxes = document.getElementById("checkbox-container");
const $fragment = document.createDocumentFragment();
const arrayCheckeds = [];
let checkeds = [];

//==== CHARACTER AND CHECKBOX PRINTER ====//
const printCharacters = (array) => {
  $containerCards.innerHTML = "";
  array.forEach((agent) => {
    const $card = document.createElement("div");
    $card.classList.add("card");

    const $imgContainer = document.createElement("div");
    $imgContainer.classList.add("card-img");
    $imgContainer.style.setProperty(
      "background-image",
      `url(${agent.background})`
    );

    const $img = document.createElement("img");
    $img.src = agent.fullPortrait;

    const $description = document.createElement("div");
    $description.classList.add("card-info");

    const $characterName = document.createElement("h2");
    $characterName.innerText = agent.displayName;

    $imgContainer.appendChild($img);

    $card.appendChild($imgContainer);

    $fragment.appendChild($card);
  });
  $containerCards.appendChild($fragment);
};

const printCheckbox = (array) => {
  array.forEach((category) => {
    const $label = document.createElement("label");
    $label.innerText = category;
    const $checkbox = document.createElement("input");
    $checkbox.type = "checkbox";
    $checkbox.dataset.id = category;
    $label.appendChild($checkbox);
    $fragment.appendChild($label);
  });
  $containerCheckboxes.appendChild($fragment);
};

//============ DELETE SOVA ============//
const deleteBuggeds = (array) => {
  const arrayNoBugs = array.filter((agent) => agent.role !== null);
  return arrayNoBugs;
};

//============== CHECKBOX & SEARCHBAR ==============//
const createCategories = (array) => {
  const filterCategories = array.map((agent) => agent.role.displayName);
  const unrepeatedCategories = [...new Set(filterCategories)];
  return unrepeatedCategories;
};

const checkboxActions = (array) => {
  $containerCheckboxes.addEventListener("change", (e) => {
    if (e.target.matches("input")) {
      const categoryId = e.target.dataset.id;
      if (e.target.checked === true && !arrayCheckeds.includes(categoryId)) {
        arrayCheckeds.push(categoryId);
      }
      if (e.target.checked === false) {
        const categoryToDelete = arrayCheckeds.findIndex(
          (category) => (category === e.target.dataset.id)
        );
        arrayCheckeds.splice(categoryToDelete, 1);
      }

      applyCrossFilter(array);
    }
  });
};

const applyCrossFilter = (array) => {
  const filteredByCheckbox = array.filter((agent) => {
    if (arrayCheckeds.length === 0) {
      return true; //En caso de no haber checkbox seleccionados retornará todos los agentes.
    } else {
      return arrayCheckeds.includes(agent.role.displayName);
    }
  });

  const textUser = $searchBar.value.toLowerCase(); //Acá obtengo el valor actual de la searchbar y luego lo almaceno.
  const filteredBySearch = filteredByCheckbox.filter((agent) =>
    agent.displayName.toLowerCase().includes(textUser)
  );

  if (filteredBySearch.length > 0) {
    printCharacters(filteredBySearch);
  } else {
    $containerCards.style.setProperty("color", "white");
    $containerCards.innerHTML = "Sorry! We couldn't find that agent 😓";
  }
};

const crossfilterFuncionality = (array) => {
  $searchBar.addEventListener("keyup", () => {
    applyCrossFilter(array);
  });
};

//============ VALORANT API ============//
const consumeApi = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (!response.ok) {
      throw {
        message: response.statusText || "Something went wrong 😔",
        status: response.status,
      };
    }
    const data = await response.json();
    const buggedAgents = data.data;
    const agents = deleteBuggeds(buggedAgents);
    const categories = createCategories(agents);
    printCharacters(agents);
    printCheckbox(categories);
    checkboxActions(agents);
    crossfilterFuncionality(agents);
  } catch (error) {
    console.error(error);
  }
};

consumeApi();
