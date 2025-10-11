# Get Started Steps

## Getting Ready

> If you don't have **git** installed follow this guide:
> [How to Install Git on Mac and Windows! (Beginner's Guide)](https://www.youtube.com/watch?v=7ouVv6PFZGc)

## The Installation
Now let's create a local directory on your system and then clone the repo

    mkdir ~/blog
    cd ~/blog
    # This will clone the cf_blog to your ~/blog floder
    git clone https://github.com/seefor/cf_blog.git .

```
    git remote remove origin
```
-   **Add your new repository as a remote origin:**

Copy the HTTPS or SSH URL of your newly created GitHub repository. Then, add it as the  `origin`  remote for your local repository.

```
    git remote add origin <your_repository_url>
```
Replace  `<your_repository_url>`  with the URL of your new GitHub repository.

-   **Push the code to your new repository:**

Finally, push the contents of your local repository to your new GitHub repository. The  `-u`  flag sets the upstream branch, so future  `git push`  commands will automatically know where to push.

```
    git push -u origin master
```

If your main branch is named differently (e.g.,  `main`), adjust  `master`  accordingly.
## Running it for FREE with Cloudflare Pages 

   1. Push to GitHub: Commit and push your code to your GitHub repository.
   2. Connect to Cloudflare Pages:
       * Go to Cloudflare Pages (https://pages.cloudflare.com/).
       * Click "Create a project" → "Connect to Git".
       * Select your repository.
   3. Configure build settings:
       * Framework preset: Astro
       * Build command: npm run build
       * Build output directory: dist
       * Root directory: / (leave empty)
   4. Deploy: Click "Save and Deploy".

## To Create a new Blog post
   1. Create a new Markdown file inside the src/content/blog/ directory. For example:
   `touch src/content/blog/my-new-post.md`

2. Add frontmatter and content to the new file. The frontmatter is the metadata for your post, and it's written in YAML format at the top of your Markdown file. Here is an example:

        1     ---
        2     title: 'Your Post Title'
        3     description: 'A brief description of your post'
        4     pubDate: 2024-01-15
        5     author: 'Your Name'
        6     tags: ['tag1', 'tag2', 'tag3']
        7     featured: false
        8     draft: false
        9     image: '/blog/post-image.jpg'
       10     ---
       11 
       12     Your post content goes here...

  3. Commit and push your changes to your GitHub repository.
```
    git add .
    git commit -m "Add new blog post: Your Post Title"
    git push 
```
