class Cardnews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "by" + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newImage = document.createElement("img")
        newImage.src = this.getAttribute("photo")
        cardRight.appendChild(newImage)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot

    }
    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .container{
                margin: 250px;
            }
            img{
                width: 200px;
            }
        
            .card{
                width: 720px;
                border: solid 1px gray;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 13px -5px 47px 15px #000;
            }
            .card-left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            span{
            font-weight: 600;
            margin-bottom: 8px;
            }
            a{
            text-decoration: none;
            font-size: 30px;
            font-weight: 600;
            color: rgb(99, 96, 96);
            }
            `;
        return style
    }
}

customElements.define("card-news", Cardnews)