Installing Node.js and npm

Adding npm to the environment PATH

Pull the source code and open the project folder in the IDE.

Run the command 'npm i' in the terminal to install the Node Modules directory.

Run the command 'npm start' in the terminal to run the project.

**Guide on using REST API with Postman to access the following endpoints:
**

Get all Categories:
http://localhost:3000/api/meta/categories/all or http://localhost:3000/api/meta/categories/

Get a Category:
http://localhost:3000/api/meta/categories/:id (:id: the id of the category)

Get posts within a Category:
http://localhost:3000/api/meta/categories/:id/posts (:id: the id of the category)

Get site category links within a Category:
http://localhost:3000/api/meta/categories/:id/site-category-links (:id: the id of the category)

Add a new category:
http://localhost:3000/api/meta/categories/add

Edit a category:
http://localhost:3000/api/meta/categories/edit/:id (:id: the id of the category)

Delete a category:
http://localhost:3000/api/meta/categories/delete/:id (:id: the id of the category)

Get all posts:
http://localhost:3000/api/meta/posts/all or http://localhost:3000/api/meta/posts/

Get a post:
http://localhost:3000/api/meta/posts/:id (:id: the id of the post)

Get comments within a post:
http://localhost:3000/api/meta/posts/:id/comments (:id: the id of the post)

Get post images within a post:
http://localhost:3000/api/meta/posts/:id/posts-images (:id: the id of the post)

Add a new post:
http://localhost:3000/api/meta/posts/add

Edit a post:
http://localhost:3000/api/meta/posts/edit/:id (:id: the id of the post)

Delete a post:
http://localhost:3000/api/meta/posts/delete/:id (:id: the id of the post)

Get all comments:
http://localhost:3000/api/meta/comments/all or http://localhost:3000/api/meta/comments/

Get a comment:
http://localhost:3000/api/meta/comments/:id (:id: the id of the comment)

Add a new comment:
http://localhost:3000/api/meta/comments/add

Edit a comment:
http://localhost:3000/api/meta/comments/edit/:id (:id: the id of the comment)

Delete a comment:
http://localhost:3000/api/meta/comments/delete/:id (:id: the id of the comment)

Get all post images:
http://localhost:3000/api/meta/posts-images/all or http://localhost:3000/api/meta/posts-images/

Get a post image:
http://localhost:3000/api/meta/posts-images/:id (:id: the id of the post image)

Add a new post image:
http://localhost:3000/api/meta/posts-images/add

Edit a post image:
http://localhost:3000/api/meta/posts-images/edit/:id (:id: the id of the post image)

Delete a post image:
http://localhost:3000/api/meta/posts-images/delete/:id (:id: the id of the post image)

Get all site category links:
http://localhost:3000/api/meta/site-category-links/all or http://localhost:3000/api/meta/site-category-links/

Get a site category link:
http://localhost:3000/api/meta/site-category-links/:id (:id: the id of the site category link)

Add a new site category link:
http://localhost:3000/api/meta/site-category-links/add

Edit a site category link:
http://localhost:3000/api/meta/site-category-link/edit/:id (:id: the id of the site category link)

Delete a site category link:
http://localhost:3000/api/meta/site-category-link/delete/:id (:id: the id of the site category link)

Add the parameter ?page=[page number] after the URL to navigate to a specific page.

Add the parameter ?search=[keyword] after the URL to perform a search.

Add the parameter ?sort=[column name or field name] after the URL to sort in ascending order.

Add the parameter ?sort=[-column name or -field name] after the URL to sort in descending order.

Add the parameter ?limit=[number of elements to limit] after the URL to limit the number of elements.

Add the parameter ?select=[column name or field name] after the URL to display only selected columns or fields.
