import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('books')
class Book{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string

    @Column()
    author: string

    @Column()    
    isbn: string

    @Column()
    publication_year: string

    @Column()
    pages: number

    @Column()
    synopsis: string
    
    @Column()
    status: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date    
}

export default Book
