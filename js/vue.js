const {
    createApp,
    mount
} = Vue;

const app = createApp({
    data() {

        document.addEventListener("DOMContentLoaded", () => {
            fetchDAta();
            printData();

        });

        const fetchDAta = async () => {
            try {
                loadingData(true);

                const response = await fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json');
                const data = await response.json();

                printData(data);


            } catch (error) {

            } finally {
                loadingData(false)
            }
        };

        const loadingData = (estado) => {
            const loading = document.querySelector('#loading')
            if (estado) {
                loading.classList.remove("d-none");
            } else {
                loading.classList.add("d-none");
            }
        };

        const printData = (data) => {

            const arrayChars = data;
            const wrapCharacter = document.querySelector("#ul");
            const templateCharacter = document.querySelector("#character-min").content;
            const fragment = document.createDocumentFragment();
            .0

            arrayChars.forEach((item) => {

                const clone = templateCharacter.cloneNode(true);
                clone.querySelector("li").style.backgroundImage = "url(" + item.image + ")";
                clone.querySelector("li").setAttribute("id", item.id-1);
                fragment.appendChild(clone);

            });

            wrapCharacter.appendChild(fragment)
            document.querySelector("#ul > li").classList.add("active")
            barrido();
            printCard(data);

        };

        const printCard = (data) => {

            const arrayCard = data;
            var characterActive = document.getElementsByClassName("active")[0].id


            const wrapCard = document.querySelector("#dynamic-cards");
            const templateCard = document.querySelector("#template-card").content;
            const clone = templateCard.cloneNode(true);
            const fragment = document.createDocumentFragment();



            clone.querySelector("h2").textContent = arrayCard[characterActive].name;

            const arrayAffiliations = arrayCard[characterActive].affiliations;    
            for (var i = 0; i < arrayAffiliations.length; i++) {

                const item = document.createElement("li");
                const text = document.createTextNode(arrayCard[characterActive].affiliations[i]);

                item.appendChild(text);
                clone.querySelector("#list1").appendChild(item);
            }

            
            const arrayMasters = arrayCard[characterActive].masters;
            for (var i = 0; i < arrayMasters.length; i++) {

                const item = document.createElement("li");
                const text = document.createTextNode(arrayCard[characterActive].masters[i]);

                item.appendChild(text);
                clone.querySelector("#list2").appendChild(item);
            }

            clone.querySelector(".home-box > span").textContent = arrayCard[characterActive].homeworld;

            clone.querySelector(".race-box > span").textContent = arrayCard[characterActive].species;

            console.log(arrayCard)

            fragment.appendChild(clone);
            wrapCard.appendChild(fragment)
            
            var btnArrow = document.getElementById('arrow1')
            btnArrow.addEventListener("click", desplegar1)

        };

    }
});