class Book {
    #title;
    #author;
    #isAvailable;

constructor(title, author) {
    this.#title = title;
    this.#author = author;
    this.#isAvailable = True;
}
getTitle() {
    return this.#title;
}
getAuthor() {
    return this.#author;
}
isAvailable() {
    return this.#isAvailable;
}
checkoutBook() {
    if (this.#isAvailable) {
        this.#isAvailable = False;
        console.log(`Ви взяли книгу "${this.#title}" автора ${this.#author}.`);
    } 
    else {
        console.log(`Вибачте "${this.#title}" недоступна.`);
    }
}
}

class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    checkoutBook(title) {
        const book = this.books.find((b) => b.getTitle() === title);
        if (book && book.isAvailable()) {
            book.checkoutBook();
        }
        else if (!book.isAvailable()) {
            console.log(`Вибачте "${title}" недоступна.`);
        }
        else if (!book)
            console.log(`Книга "${title}" не знайдена в бібліотеці.`);
            }
        }

    viewAvailableBooks() {
        console.log("Достпні книги:");
        this.books.forEach(book);
    }

const myLibrary = new Library();
const book1 = new Book("Цирцея", "Мадлер Міллер");
const book2 = new Book("Руйнація", "Ентоні Рейнольдс");
const book3 = new Book("Кайдашева сім'я", "Іван Нечуй-Левицький");
const book4 = new Book("Полон", "Валерія Суботіна");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("Полон");
myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("Полон");