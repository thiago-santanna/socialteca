interface ICreateBooksDto{
    name: string
    author: string
    isbn: string
    publication_year: string
    pages: number
    synopsis: string
}

interface IUpdateBooksDto{
    id: string
    name: string
    author: string
    isbn: string
    publication_year: string
    pages: number
    synopsis: string
}

interface IFindBooks {
    name: string
    author: string
    isbn: string
}

export {ICreateBooksDto, IUpdateBooksDto, IFindBooks}