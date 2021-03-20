export default interface ICreateBooksDto{
    name: string
    author: string
    isbn: string
    publication_year: string
    pages?: number
    synopsis?: string
}