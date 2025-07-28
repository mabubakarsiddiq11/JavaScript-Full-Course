// const coding = ["js", 'ruby', "python", "java" ] 

// ForEach Loop Return nhi krta..
// const result = coding.forEach((item) => {
//     console.log(item)
//     return item
// } )
// console.log(result)



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num <= 4
// } )
// console.log(newNums)



const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Fiction",
        pages: 180,
        isAvailable: true,
        rating: 4.5
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction",
        pages: 281,
        isAvailable: false,
        rating: 4.8
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian",
        pages: 428,
        isAvailable: true,
        rating: 4.7
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Romance",
        pages: 432,
        isAvailable: true,
        rating: 4.6
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy",
        pages: 310,
        isAvailable: true,
        rating: 4.9
    }
]; 

// just filter method usage

let filterBook = books.filter((bk) => bk.genre ===  "Romance") // 1st Filter
 filterBook = books.filter((bk) => { //2nd Filter
    return  bk.pages >=  400  && bk.genre === "Romance"
})
console.log(filterBook)