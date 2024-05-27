function findBook() {
	let authorName = document.getElementById("author_name");
	let bookTitle = document.getElementById("book_title");
    let description = document.getElementById("description");

    let author_Name = authorName.value;
    let book_Title = bookTitle.value;

    var authors = new Array("Thomas Mann", "James Joyce", "E. M. Forster", "Isabel Allende", "Isabel Allende");
    var titles = new Array("Death in Venice", "A portrait of the artist as a young man", "A room with a view", "The house of spirits", "Of love and shadows");
    var descriptions = new Array("One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self.",
    "This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character.",
    "This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson.",
    "Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship.",
    "The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship.");

    if(author_Name.toString()=='') {
        for (var i = 0; i<titles.length; i++) {
            if(book_Title.toString() == titles[i]) {
                authorName.value = authors[i];
                description.value = descriptions[i];
                return;
            }
        }
        description.value = "Book not found";  
    }

    else if (book_Title.toString()=='') {
        for (var i = 0; i<authors.length; i++) {
            if(author_Name.toString() == authors[i]) {
                bookTitle.value = titles[i];
                description.value = descriptions[i];
                return;
            }
        }  
        description.value = "book not found";  
    }

    else {
        for (var i = 0; i<authors.length; i++) {
            if(author_Name.toString() == authors[i] && book_Title.toString() == titles[i]) {
                description.value = descriptions[i];
                return;
            }
        }
        description.value = "book not found";  
    }
}

document.getElementById("find_book").addEventListener("click", findBook);