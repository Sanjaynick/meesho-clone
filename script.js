let container = document.querySelector('.products-list')   

fetch('https://raw.githubusercontent.com/Sanjaynick/meesho-clone/refs/heads/main/products.json')
.then(res => res.json())
.then((data) => {
    data.map((product) => {
        let subContainer = document.createElement('div')
        subContainer.classList.add('sub-container')

        let productDiv = document.createElement('div')
        productDiv.classList.add('product-div')

        let imgDiv = document.createElement('div')
        imgDiv.classList.add('img')

        let productImage = document.createElement('img')
        productImage.classList.add('product-image')
        productImage.src = product.image

        let contentDiv = document.createElement('div')
        contentDiv.classList.add('content-div')

        let productTitle = document.createElement('p')
        productTitle.classList.add('product-title')
        productTitle.textContent = product.title

        let productPrice = document.createElement('p')
        productPrice.classList.add('product-price')
        productPrice.textContent = `₹ ${product.price}`

        let productDel = document.createElement('p')
        productDel.classList.add('product-del')
        productDel.textContent = product.option

        let ratingDiv = document.createElement('div')
        ratingDiv.classList.add('rating-div')

        let productRating = document.createElement('p')
        productRating.classList.add('product-rating')
        productRating.textContent = `${product.rating.rate} ★`

        let productRatingCount = document.createElement('p')
        productRatingCount.classList.add('product-count')
        productRatingCount.textContent = `${product.rating.count} Reviews`


        imgDiv.appendChild(productImage)
        productDiv.appendChild(imgDiv)
        productDiv.appendChild(contentDiv)
        contentDiv.appendChild(productTitle)
        contentDiv.appendChild(productPrice)
        contentDiv.appendChild(productDel)
        contentDiv.appendChild(ratingDiv)
        ratingDiv.appendChild(productRating)
        ratingDiv.appendChild(productRatingCount)
        subContainer.appendChild(productDiv)
        container.appendChild(subContainer)
    })
})
           
           
           
            

           
            