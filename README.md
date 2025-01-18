Technologies Used:
React.js: Core framework for building the user interface.
Redux: For state management and fetching data from db.json.
Slick React Slider: For adding a responsive and interactive product carousel.
Firebase: For authentication (Google email-based login).
CSS/Bootstrap: For styling and responsive design.

Features:

Home Page:

A visually appealing homepage with a slider created using Slick React Slider to display promotional content or featured fitness products.
Authentication:

Integrated Firebase Authentication for secure login.
Users can log in using their Google account.
Access Restriction: Users must log in to buy products. If a user attempts to purchase a product without logging in, they are redirected to the login page.
Product Listing:

Products are fetched dynamically from a local db.json file using Redux.
Each product has a dedicated description, price, and an option to add to the cart.
Filtering Options:
By Price: Allows users to filter products within a specific price range.
By Name: Users can sort or filter products alphabetically.
Product Details Page:

Clicking on a product redirects users to its Description Page.
The page contains detailed information about the selected product, including:
Name
Price
Features
Add-to-Cart option

Cart Page:

Displays all products added to the cart by the user.
Shows the total amount based on the selected products.
Provides options to update the cart or proceed to checkout.
Responsive Design:

The website is fully responsive and optimized for devices of all sizes, ensuring a seamless user experience on mobile, tablet, and desktop screens.

Workflow:

Login/Register:
New users must log in via Google authentication.
Upon successful login, users can browse and purchase products.
Browse and Filter:
Browse products using sliders and filter based on preferences.
Product Details:
View detailed information about any product.
Add to Cart:
Add desired products to the cart.
View the cart summary and the total price of selected items.
Checkout:
Proceed to checkout after reviewing the cart.
Key Benefits:
User-Friendly: Easy-to-navigate design with clear workflows.
Secure: Uses Firebase for secure authentication.
Dynamic Filtering: Allows users to quickly find products based on price and name.
Modern UI: Responsive and visually engaging design for all device types.
This project demonstrates expertise in React, Redux, Firebase, and modern web development techniques to create a robust and user-focused e-commerce platform.
