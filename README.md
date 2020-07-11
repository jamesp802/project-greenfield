# Project Greenfield

## [Scripts](/package.json)

=======

# project-greenfield

# productinfo

=======

This is a mock-up of a client-facing retail web-portal.

These are the scripts in package JSON

```
$ npm run start <- starts a development server //Use this for all dev
$ npm run build <- creates production bundle // See server notes
$ npm run test <- runs tests
```

## [Server](/server/index.js)

Because our information comes from the blackbox, this server will only be used to serve the production bundle upon deployment.

```
$ npm build <- builds a production bundle
$ node ./server <- runs express server
```

[Production Build from Express](http://localhost:8080/) is serving production bundle

## [App](/src/components/App.js)

Mounted to 'root' element in index.html

Currently housing the react-router-dom BrowserRouter, Switch and Routes.

- BrowserRouter is renamed 'Router'
- When the app is mounted, the url will be checked through the router. The router will then render out the component matching the url path.

* 'http://localhost:3000/' has a path of '/' and thus render's the Home component
* 'http://localhost:3000/product/' has a path of '/product' and thus render's the product component

* variable paths are done as normal, i.e. '/product/:id' will render the component designated by the Route regardless following url parameter.

## [**Optimization**](/server/index.js)

[webpack config](/webpack.config.js)

**Challenge**: Large network payload producing low performance in critical categories such as time to interactive, contentful paint and meaningful paint.

Progress of performance optimization is documentated below, using Google Lighthouse to test performances.

**Time to Interactive, First Contentful Paint and Meaningful Paint were reduce by over 50%**
<details>
<summary>Before Optimizations:</summary>
<br>
<img src='https://i.imgur.com/YjpjiVy.png' width='50%'/>
</details>

<details>
<summary>GZIP Bundle delivered via express server optimization results:</summary>
<br>
<img src='https://i.imgur.com/FAIqUw2.png' width='50%'/>
</details>

<details>
<summary>Code refactor to load compressed images for thumbnails:</summary>
<br>
<img src='https://i.imgur.com/Gd19FTd.png' width='50%'/>
</details>

# [**Overview Component**](/src/components/overviewComponents)

### Main Contributor: **James Prytherch**

![](https://imgur.com/p5pe51u.png)


## **Live Demo**
<b>The FPS and Quality of this demo have been significantly reduced to be formatted in this document, please see optimization for accurate data on load times and smoothness of application.</b>

[**Imgur link to demo GIF**](https://i.imgur.com/P31fhAJ.gif')

## Main features:

- Product Details
- Photo Carousel
- Style, Size, Quantity Selection
- Add to cart
- Data Collection

## Contributions to overall project:


- Setup **express server**, and **react routes** to create accurate URL paths for individual product IDs.
- **Optimization** of network payloads compressing bundled files to GZIP and serving via express server

## Product Details Feature:

**Purpose**: Product Information files express a competance in retrieving data, and displaying the information dynamically to the user in a pleasant way. As well as, allowing teammembers to access critical information for their own components in a nonintrusive and cleanly way.

Queries API for product data based on the URL end point, adding to a shared store via Redux.

- [Redux Actions](/src/actions/overviewActions/productInfoActions.js)
- [Redux Reducers](/src/reducers/overviewReducers)
- [Store](/src/reducers/index.js)

This feature renders the other feature components, as well as the other widgets designed by group members.

### [Product Information I](/src/components/overviewComponents/productInfoHelpers/pricingNameReviews.js)

**Dynamically renders:**

- Product Name
- Category
- Style Name
  - Based on user's selection
- Style Selection Interface
  - Renders thumbnails of different styles available
  - User may click image to change style
- Pricing
  - Based on user selected style
  - Colored red if discounted price

### [Product Information II](/src/components/overviewComponents/productInfoHelpers/productDescription.js)

**Dynamically renders:**

- Product Description Text
- Features associated with product

## [Photo Carousel Feature:](/src/components/overviewComponents/productInfoHelpers/PhotoGallery.js)

**The photo carousel functionality is 100% custom design and implementation. Some of the key features are below.**

#### Default Carousel:

User may change the displayed image using the left and right arrows displayed.

- If a user navigates left or right more times than there are images, the carousel will repeat in the direction of navigation.
  - i.e. If the user navigated left on the first image, the last image would be displayed and vice-versa.

- The bottom of the currently displayed photo is darkened and bolded to indicate the current index.
- [Thumbnails](/src/components/overviewComponents/productInfoHelpers/thumbnails.js)
  - Compressed smaller images that display other attached photos for that product's style.
  - Clicking a thumbnail will display that image.
  - If there are more than 7 images for a selected style, an arrow down thumbnail will appear that, when clicked, displays remainding images in the same fashion
    - After a user has clicked the arrow down thumbnail, an arrow up thumbnail will display which will allow the user to navigate to previous thumbnail grouping.


- Clicking the displayed image will change the display to an expanded view...

### Expanded View Carousel:

- Hides the product information to the right of the default carousel
- Expands the carousel displayed image
- Navigation remains the same
  - Thumbnail style and location are changed however

- Click on the displayed image in expanded view will trigger the zoomed display...

### [**Hover Zoom and Pan Over Expanded Image:**](/src/components/overviewComponents/productInfoHelpers/zoom.js)

User will see a zoomed view of the product which can be panned over and navigated through the movement of the cursor over the image.

- Tracks user's mouse position relative to the image container
- A ratio is divised from the carousel dimensions
- The image is scaled to 2.5x original size


### [Style, Size, Quantity Selection Features:](/src/components/overviewComponents/productInfoHelpers/selectors.js)

**Dynamically renders:**
- [Styles available](/src/components/overviewComponents/productInfoHelpers/snapshotGallery.js)
- [Sizes available for selected style](/src/components/overviewComponents/productInfoHelpers/sizeDropDown.js)
- [Quantites available for selected style and size](/src/components/overviewComponents/productInfoHelpers/quantitySelect.js)
  * Maximum of 15 displayed
  * if not in stock, 'out of stock' message will appear in size selector

## **Add to Cart:**
- Validates size and quanitity selection
  * if no size or quantity selected, a warning message will display above the selectors notifying the user to make a selection.
- Posts user's selection to API, adding to the user's stored cart.

## **Data Collection:**
- Valuable data is collected when a user clicks on key components, the meta data is store using redux and may be posted to API for collection.
  * Data is tracked on iteractions with key components such as:
    - Photo Carousel
    - Style Selector
    - Size Selector
    - Add to Cart
  * How many interactions, and the time of the last interaction are stored

**Use case:** Company could see real data of how many styles, or photos a user browses before making a selection.  Company could correlate whether more photo browsing is more likely to produce a sale, and thus increase available images for products.
