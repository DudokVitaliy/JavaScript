export class Post{
    constructor(header, text)
    {
        this.header = header;
        this.text = text;
        this.date = new Date().toLocaleDateString;
    }
    get ()
    {
        return `
        <article>
            <h2>${this.header}</h2>
            <p>${this.text}</p>
            <p>${this.date}</p>
        </article>
        `
    }
}