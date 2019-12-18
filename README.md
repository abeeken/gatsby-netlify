# Gatsby Netlify

A basic starter to get a Netlify blog up and running with Gatsby. Includes:

* Some scaffolding for flat pages
* Some components
* A main stylesheet
* Scss support
* Helmet support
* Basic Blog Posts
* Automatic post slug generation
* Gatsby image support
* Featured images
* Auto generated, paginated blog post list

## Usage

From your command line

    gatsby new name-of-site https://github.com/abeeken/gatsby-netlify.git
    cd name-of-site

Remove any test posts in src/pages/blog and any images in static/assets

Publish your site to GitHub and change the repo setting in static/admin/config.yml to your-username/your-repo-name

Follow the instructions on https://docs.netlify.com/visitor-access/oauth-provider-tokens/#using-an-authentication-provider to set up authentication

    gatsby develop

To start building locally and your admin url on Netlify to add content

Blog post pagination is limited to 2 posts per page - change this in gatsby-node.js

    const postsPerPage = X

Enjoy!