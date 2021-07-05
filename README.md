# Portfolio 

## Objective
Creating Portfolio

### Maintainer 
<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>NUID</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>Naresh Agrawal</td>
            <td>001054600</td>
        </tr>
    </tbody>
</table>

## Technology Stack
* React
* GitHub API
* GitHub pages

## Prerequisites
* React
* npm

## Setup And Deployment

1. Clone the repository

   ```bash
     https://github.com/nareshagrawal/nareshagrawal.github.io.git
   ```

2. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

3. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

4. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

5. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<github-username>.github.io/"
   ```

6. After editing run the following bash commands to run website locally:

   ```bash
   $ npm install
   $ npm start
   ```

7. To deploy website:
* Create repository of name [<github-username>.github.io]
* Copy source code to [<github-username>.github.io] repository

   ```bash
    $ npm run build
    $ npm run deploy
   ```

   Or for deployment at \<github-username>.github.io, refer [pages.js](./pages.js)

8. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<github-username>.github.io/home
   ```

9. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 6.