const festivals = [
    {
        name: "Navratri & Garba",
        location: "Gujarat",
        region: "west",
        description: "A nine-night vibrant festival celebrated with traditional Garba & Dandiya Raas folk dances around a sacred lamp.",
        image: "navratri.jpg"
    },
    {
        name: "Diwali (Festival of Lights)",
        location: "Across India",
        region: "north",
        description: "The nation-wide festival of lights celebrated with earthen diyas, vibrant rangolis, fireworks, and sweet feasts.",
        image: "diwali.jpg"
    },
    {
        name: "Holi (Festival of Colors)",
        location: "Uttar Pradesh & North India",
        region: "north",
        description: "A jubilant spring festival celebrated with gulal colors, music, thandai, and traditional Lathmar celebrations in Mathura.",
        image: "holi.jpg"
    },
    {
        name: "Onam & Vallam Kali",
        location: "Kerala",
        region: "south",
        description: "Kerala's harvest festival honoring King Mahabali, featuring Pookkalam flower carpets, Onam Sadya, and snake boat races.",
        image: "onam.jpg"
    },
    {
        name: "Pongal",
        location: "Tamil Nadu",
        region: "south",
        description: "Four-day Tamil harvest festival thanking Sun God Surya, celebrated with boiling sweet rice in clay pots and Jallikattu.",
        image: "pongal.jpg"
    },
    {
        name: "Durga Puja",
        location: "West Bengal",
        region: "east",
        description: "Grand UNESCO recognized carnival showcasing magnificent pandals, Dhunuchi dance, and idol immersion ceremonies.",
        image: "durga-puja.jpg"
    },
    {
        name: "Bihu Festival",
        location: "Assam",
        region: "east",
        description: "Assam's spring harvest festival celebrated with joyous Bihu dance in Muga silk attire and Dhol drums.",
        image: "bihu.jpg"
    },
    {
        name: "Hornbill Festival",
        location: "Nagaland",
        region: "east",
        description: "The 'Festival of Festivals' bringing together 17 indigenous Naga tribes at Kisama for warrior dances, music, and crafts.",
        image: "hornbill.jpg"
    },
    {
        name: "Chhath Puja",
        location: "Bihar & Jharkhand",
        region: "east",
        description: "Sacred Vedic festival dedicated to Sun God Surya and Chhathi Maiya, performed at riverbanks during sunset and sunrise.",
        image: "chhath.jpg"
    },
    {
        name: "Puri Ratha Yatra",
        location: "Odisha",
        region: "east",
        description: "Monumental chariot procession where Lord Jagannath's massive wooden chariots are pulled by millions of devotees.",
        image: "ratha-yatra.jpg"
    },
    {
        name: "Ganesh Chaturthi",
        location: "Maharashtra",
        region: "west",
        description: "Grand 10-day festival welcoming Lord Ganesha, celebrated with dhol-tasha beats, orange gulal, and immersion processions.",
        image: "ganesh-chaturthi.jpg"
    }
];


const container =
    document.getElementById(
        "festivalContainer"
    );


function displayFestivals(data) {

    container.innerHTML = "";


    if (data.length === 0) {

        container.innerHTML =
            "<p>No festivals found.</p>";

        return;
    }


    data.forEach((festival, index) => {

        const card =
            document.createElement("div");

        card.className =
            "festival-card";


        card.innerHTML = `

            <img
                src="${festival.image}"
                alt="${festival.name}"
            >

            <div class="festival-content">

                <h2>
                    ${festival.name}
                </h2>

                <div class="festival-location">
                    📍 ${festival.location}
                </div>

                <p>
                    ${festival.description}
                </p>

                <button
                    class="festival-btn"
                    onclick="showFestival(${index})"
                >
                    Discover →
                </button>

            </div>
        `;


        container.appendChild(card);

    });

}


/* FILTER */

function filterFestivals(region) {

    if (region === "all") {

        displayFestivals(festivals);

        return;
    }


    const filtered =
        festivals.filter(
            festival =>
                festival.region === region
        );


    displayFestivals(filtered);

}


/* SEARCH */

document
    .getElementById("festivalSearch")
    .addEventListener(
        "input",
        function () {

            const search =
                this.value.toLowerCase();


            const filtered =
                festivals.filter(
                    festival =>

                        festival.name
                            .toLowerCase()
                            .includes(search)

                        ||

                        festival.location
                            .toLowerCase()
                            .includes(search)
                );


            displayFestivals(filtered);

        }
    );


/* MODAL */

function showFestival(index) {

    const festival =
        festivals[index];


    document.getElementById(
        "modalImage"
    ).src = festival.image;


    document.getElementById(
        "modalTitle"
    ).textContent = festival.name;


    document.getElementById(
        "modalLocation"
    ).textContent =
        "📍 " + festival.location;


    document.getElementById(
        "modalDescription"
    ).textContent =
        festival.description;


    document.getElementById(
        "festivalModal"
    ).style.display = "flex";

}


function closeFestival() {

    document.getElementById(
        "festivalModal"
    ).style.display = "none";

}


/* CLOSE WHEN CLICKING OUTSIDE */

window.onclick = function (event) {

    const modal =
        document.getElementById(
            "festivalModal"
        );


    if (event.target === modal) {

        closeFestival();

    }

};


/* INITIAL LOAD */

displayFestivals(festivals);
