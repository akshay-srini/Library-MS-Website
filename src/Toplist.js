import react from "react"
import Booksinfo from "./Booksinfo"



export default function Toplist () {
    return (
        <section className="toplist" id="toplist">
            <h1 className="topname">Top 12 most recommended books</h1>
            <div className="contacts">
            <Booksinfo  
                img= "http://127.0.0.1:5500/book1.png"
                title = "Sapiens"
                name = "Yuval Noah Harari"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book2.png"
                title = "The Alchemist"
                name = "Paulo Coelho"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book3.png"
                title = "Thinking, Fast and Slow"
                name = "Daniel Kahneman"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book4.png"
                title = "Zero to One"
                name = "Peter Thiel"
            />
            <Booksinfo  
                img= "http://127.0.0.1:5500/book5.png"
                title = "The 4-Hour Workweek"
                name = "Tim Ferriss"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book6.png"
                title = "Meditations"
                
                name = "Marcus Aurelius"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book7.png"
                title = "Influence"
                name = "Robert B. Cialdini, PhD"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book8.png"
                title = "The Hard Thing About Hard Things"
                name = "Ben Horowitz"
            />
            <Booksinfo  
                img= "http://127.0.0.1:5500/book9.png"
                title = "Shoe Dog"
                
                name = "Phil Knight"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book10.png"
                title = "Atlas Shrugged"
                
                name = "Ayn Rand"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book11.png"
                title = "Principles"
                
                name = "Ray Dalio"
            />
            <Booksinfo  
                img="http://127.0.0.1:5500/book12.png"
                title = "Man's Search for Meaning"
                
                name = "Viktor E. Frankl"
            />
        </div>
        </section>
        )
}