function clearInfo() {
	let authorName = document.getElementById("author_name");
	let bookTitle = document.getElementById("book_title");
	let description = document.getElementById("description");

	authorName.value = null;
    bookTitle.value = null;
	description.value = null;
}

document.getElementById("clear_info").addEventListener("click", clearInfo);