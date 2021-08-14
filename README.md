# pumprofessionals.org
Next.js overview documentation guide: https://docs.google.com/document/d/1ElPavrzWHcNjwqCyV2-TlAyOdshDsEC0lc215Xf_VhM/edit

Our website is built with [Next.js](https://nextjs.org/).

## Getting Started

You should clone the repository as described in the [github-git-practice](https://github.com/PuMProfessionals/github-git-practice) repository and install your node modules with ```npm install```. Afterwards go into you root project folder ```pump-web-v2``` and add the following ```.env``` file:

```
NEXT_PUBLIC_SERVICE_ID=service_id
NEXT_PUBLIC_TEMPLATE_ID=template_id
NEXT_PUBLIC_USER_ID=user_id
DATABASE_URL="database_url"
```

You will have to ask Sharon for the specific ids to work on certain areas, granting you need these permissions, but these values should get you started so the server does not crash.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting-started with the database
We use ```Prisma``` for our ORM and use ```PostgreSQL``` for our database (in ```prisma``` folder). We also have a cache incase anything goes wrong found in ```cache/cache.js```. 
Feel free to read the ```Prisma``` documentation.

To update the cache, run ```npm run cache-posts``` to run the script. This is just a backup
option if our database fails but it is used in some utility files as well.

To run the database run 
```npx prisma generate``` and ```npx prisma studio``` to open up the db at ```localhost:5555```. You will need to get the correct ```postgresql``` variable from me. 
Feel free to PM if it is needed. To seed the database, run ```npx prisma db seed --preview-feature```

If the database schema is changed run ```npx prisma migrate dev --name <name-of-migration>```
## Troubleshooting with husky
No pre-commits? Run the following commands 
```
npm uninstall husky

npm install -D husky@4

npm install -D husky
```

## Writing to our blog
Each blog template is written in ```Markdown``` and will require some ```html``` but you won't actually need to know too much to be successful. Here's a sample file of what it looks like:
```
---
title: Interview Do's and Don'ts
date: 01/13/2021
releaseBatch: January 2021
summary: So you sent in your resumé, wrote a cover letter, answered some written questions, and finally landed an interview – but what’s next? 
authors: ["Lucy Zhao"]
tags: ["Interviews", "Pathways", "Skills"]
---
<div>
<h1> A Sample Blog Application </h1>
My journey of (seriously) programming started at me horribly failing at a hackathon. 
I had never used Git before, and my teammate could not quite connect the backend with the frontend
of our project. So, coming into my third hackathon at SheHacks V, I felt more prepared with more experience, but I really only had the <a href="https://shehacks.ca/" target="_blank" rel="noopener noreferrer">SheHacks website</a>

<div align="center">
    <figure>
        <img src="/blog/january-2021/she-hacks.png" alt="Shehacks banner" width="500"/>
        <figcaption>Hackathon banner
        </figcaption>
    </figure>
</div>

</div>
```

The top portion is called the frontmatter and it is what is used to show the relevant information of your blog post to your users. This MUST be at the top of all of your google docs.
```
---
title: Interview Do's and Don'ts // title of your blog
date: 01/13/2021 // publication date
releaseBatch: January 2021 // MONTH YEAR of blog release
summary: So you sent in your resumé, wrote a cover letter, answered some written questions, and finally landed an interview – but what’s next? // Insert a summary of your blog
authors: ["Lucy Zhao"] // INSERT RELATIVE AUTHORS HERE
tags: ["Interviews", "Pathways", "Skills"] // INSERT RELEVANT TAGS HERE
---
```

Any time you want to insert a title please include ```<h1>TITLE</h1>```. So if I wanted the title of my section to be Donuts I would input ```<h1>Donuts</h1>```

Any time you add an image please use the following template:
```
<div align="center">
    <figure>
        <img src="/blog/<RELEASE_NAME>/<NAME_OF_YOUR_IMAGE>" alt=<DESCRIPTION_OF_YOUR_IMAGE> width="500"/>
        <figcaption>
        <IMAGE_CAPTION>
        </figcaption>
    </figure>
</div>
```

and change anything in ```<BOLDED_LETTERS>```. If my blog post was being released in January 2021 and my image name was named ```she-hacks.png```, I would name the following:
```
<div align="center">
    <figure>
        <img src="/blog/january-2021/she-hacks.png" alt="Hackathon banner" width="500"/>
        <figcaption>Hackathon banner
        </figcaption>
    </figure>
</div>
```

Please also DOWNLOAD your image and place it in the IMAGES folder within the google drive that has all your posts. Make sure the naming is the same as what you put as the name of your image. E.g. if I want the ```she-hacks.png``` page to be added, I would name my image ```she-hacks.png``` and put it into the images folder.

The alternative text and caption can be the same but anything in figcaption is basically a caption of your image! If you don't need one, just delete figcaption like below!
```
<div align="center">
    <figure>
        <img src="/blog/january-2021/she-hacks.png" alt="Hackathon banner" width="500"/>
    </figure>
</div>
```

Any time you add an external link please use:
```
<a href=<EXTERNAL_LINK> target="_blank" rel="noopener noreferrer"><TEXT THAT SUMMARIZES LINK HERE></a>
```

For example if I want to go to the SheHacks page, which has the website https://shehacks.ca/ and I want it to be clicked on SheHacks website, I would insert the following:
```<a href="https://shehacks.ca/" target="_blank" rel="noopener noreferrer">SheHacks website</a>```

I used this template for my personal website and it's worked really well. To see the RAW text (what the template should look like): https://raw.githubusercontent.com/xsharonhe/personal-portfolio-v2/main/_projects/bridge-it.mdx

To see what it actually shows on the page you can visit: https://www.sharonhe.me/projects/bridge-it
