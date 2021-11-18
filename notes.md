1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.


/**
 * map
 */
const fnames = ['joel', 'kevin', 'raul', 'kile']
const nameCaps = fnames.map((fname) => `${fname[0].toUpperCase()}${fname.slice(1)}`)
console.log(nameCaps); //['Joel', 'Kevin', 'Raul', 'Kile']

const nums = [1,2,3,4,5]
const squared = nums.map((num) => num ** 2)
console.log(squared); //[1,4,9,16,25]

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const wrap = pokemon.map((poke) => `<p>${poke}</p>`)
console.log(wrap); //["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]

export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "wedding-photography.png",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]