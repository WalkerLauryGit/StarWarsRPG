let heroes = [
  {
    name: "Anakin Skywalker",
    img: '/images/anakinwallpaper.jpg',
    alt: 'Anaking Skywalker',
    description: `Skywalker was born in the year 41 BBY before moving to the Outer Rim planet Tatooine during the Age of the Republic. Although he had a mother, the slave Shmi Skywalker, the truth about his parentage was that Anakin had no father—leading Jedi Master Qui-Gon Jinn to suspect that Skywalker's conception was the work of the midi-chlorians. Recognizing the boy's unprecedented connection to the Force, Jinn was determined to see Skywalker trained as a member of the Jedi Order, the task of which ultimately fell to his Padawan Obi-Wan Kenobi following Jinn's death by Darth Maul in 32 BBY.`
  },
  {
    name: 'obi-Wan Kenobi',
    img: '/images/obiwan.jpg',
    alt: 'Obi-Wan',
    description: `Following the end of the Battle of Naboo, Kenobi was promoted to the rank of Jedi Knight by the Council, with Yoda reluctantly accepting his decision to train Skywalker. Kenobi was later present during Jinn's funeral, where he informed the boy that he would become a Jedi. Later on, Kenobi, alongside his new Padawan and several members of the Jedi Council, took part in a victory celebration in Theed`
  },
  {
    name: 'Mace Windu',
    img: '/images/mace.jpg',
    alt: 'Mace Windu',
    description: `Windu and the Jedi prevented the execution of Kenobi, as well as Skywalker and Amidala, both of whom traveled to Geonosis with the intention to help Kenobi, but were quickly confronted by an overwhelming force of battle droids.[6] The Jedi fought bravely,[3] destroying many battle droids in the process, but also sustained a large number of casualties. During the fight, Windu swiftly killed Jango Fett with relative ease, decapitating the bounty hunter, as Boba Fett—a clone whom Jango regarded as a son—watched in horror`
  }
]

let planets = [
  {
    name: "geonosis",
    img: "/images/geonosis.jpg",
    alt: "large red planet full of craters",
    description: `Situated in the Geonosis system of the Arkanis sector in the Outer Rim Territories, the planet of Geonosis was 43,000 light years from the Galactic Core, and less than a parsec away from the neighboring Outer Rim planet of Tatooine. It was the homeworld of the Geonosians, a species of sentient insectoids. It had a breathable atmosphere, but an arid climate. Its irradiated surface was covered in harsh, rocky deserts, marked by mesas and buttes. Both its rocks and sky were tinted in shades of red. Surface water was scarce, amounting to only 5% of the entire total planetary surface. However, Geonosis had frequent flash floods. From space, it could be seen that Geonosis had awe-inspiring rocky rings. The planet was orbited by fifteen moons, four of which were major.`
  },
  {
    name: 'coruscant',
    img: '/images/corusant.jpg',
    alt: 'Large city that covers the whole planet',
    description: `From space, Coruscant's luminosity was slightly dimmed by the planet's hazy cloud cover. The planet's weather patterns were affected by the troposphere-piercing buildings that covered the planet's surface. Inside the tallest buildings, enormous differences of temperature and air pressure from top to bottom produced unusual and unpredictable microclimates As such, Coruscant had its own weather-control system. Thousands of years of development destroyed the planet's ancient mountains and seas. Monument Plaza housed the top of Coruscant's last remaining mountain peak.

    There were 24 hours in a Coruscant day, and 365 days in a Coruscant year. Owing to its importance in galactic history, the galaxy used a dating system standardized on Coruscant, and the planet's galactic coordinates were 0-0-0 despite it not being the exact geographical center of the galaxy.`
  },
  {
    name: 'ilum',
    img: '/images/ilum.jpg',
    alt: 'Large icey planet',
    description: `Ilum's main feature was its Jedi temple, hidden beneath a large cliff of ice. Beneath that temple was the planet's massive complex of crystal caves where a vast quantity of kyber crystals could be found, and the site of the Gathering. The remainder of Ilum's surface was barren, save for canyons and mountains, though there were also forests on Ilum's surface.`
  },
  {
    name: 'Korriban',
    img: '/images/korriban.jpg',
    alt: 'Large barren planet, home to the sith',
    description: `A world of mountains and red sands, Moraband was abandoned after widespread devastation during numerous wars. Located on the surface was the Valley of the Dark Lords, a wasteland filled with the tombs of ancient Sith Lords such as Darth Bane.`
  }
]

  heroes.forEach(hero =>{
    // Creating the outer div for all the info
    let infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    infoDiv.classList.add('row', 'no-padding', 'no-margin');

    //Creating the img div with class img
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('img-container', 'col', 's12', 'm12', 'l6', 'xl6', 'no-padding');

    //Create the image 
    let img = document.createElement('img');
    img.src = hero.img
    img.alt = hero.alt
    img.classList.add('responsive-img')
    
    //append img to img div
    imgDiv.appendChild(img)
    
    //Create description div with class information
    let informationDiv = document.createElement('div')
    informationDiv.classList.add('col', 's12', 'm12', 'l6', 'xl6', 'no-padding')


    //Create name div
    let nameDiv = document.createElement('div')
    nameDiv.classList.add('name')
    nameDiv.textContent = hero.name

    //Create the description
    let descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('description')

    //create paragraph element inside description div
    let descriptionParagraph = document.createElement('p')
    descriptionParagraph.textContent = hero.description

    //add paragraph to descriptionDiv
    descriptionDiv.appendChild(descriptionParagraph)

    //take informationdiv and append descriptionDiv and namediv to it

    informationDiv.appendChild(nameDiv)
    informationDiv.appendChild(descriptionDiv)

    //Take info div, append img div and informationdiv to it

    infoDiv.appendChild(imgDiv)
    infoDiv.appendChild(informationDiv);

    //append everything to the body
    document.getElementById('heroes').appendChild(infoDiv)
  })

  planets.forEach(planet => {
    // Creating the outer div for all the info
    let infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    infoDiv.classList.add('row', 'no-padding', 'no-margin');

    //Creating the img div with class img
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('img-container', 'col', 's12', 'm12', 'l6', 'xl6', 'no-padding');


    //Create the image 
    let img = document.createElement('img');
    img.src = planet.img
    img.alt = planet.alt
    img.setAttribute('id', img.name);
    img.classList.add('responsive-img')
    //append img to img div
    imgDiv.appendChild(img)
    
    //Create description div with class information
    let informationDiv = document.createElement('div')
    informationDiv.classList.add('col', 's12', 'm12', 'l6', 'xl6', 'no-padding')


    //Create name div
    let nameDiv = document.createElement('div')
    nameDiv.classList.add('name')
    nameDiv.textContent = planet.name

    //Create the description
    let descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('description')

    //create paragraph element inside description div
    let descriptionParagraph = document.createElement('p')
    descriptionParagraph.textContent = planet.description

    //add paragraph to descriptionDiv
    descriptionDiv.appendChild(descriptionParagraph)

    //take informationdiv and append descriptionDiv and namediv to it

    informationDiv.appendChild(nameDiv)
    informationDiv.appendChild(descriptionDiv)

    //Take info div, append img div and informationdiv to it

    infoDiv.appendChild(imgDiv)
    infoDiv.appendChild(informationDiv);

    //append everything to the body
    document.getElementById('planets').appendChild(infoDiv)
  })