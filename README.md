# COSMO Portfolio Template

This is a space-themed portfolio template that's easy to use and fully responsive. It comes in English by default and lets you add one more language if you need it. Just update the JSON files in the `assets/` folder to make it your own. No coding needed.

![Preview](img/og-image.png)

[View the Demo](https://hwahyeon.github.io/cosmo-portfolio-template/)

## How to Use

1. Click `"Use this template"` at the top of the repository to create your own copy.
2. Open the project folder and go to the `assets/` directory.
3. Edit the JSON files with your own information
4. Deploy your site → [How to deploy with GitHub Pages](#how-to-deploy-with-github-pages)

## Template Structure

This template is made up of the following sections:

- Intro
- Projects
- Open Source Contributions
- Skills & Tools
- Contact Me

There are 6 JSON files in the `assets/` folder. Let's go through how to use each one step by step.

### 1. `meta.json`

This file contains general site metadata and personal information.

- Basic info like name, email, and location
- Links to GitHub, LinkedIn, NPM, and Codepen
- `extraLang` field for multilingual support
- Open Graph metadata like ogTitle, ogDescription, and ogImage
- Footer content

If you leave the GitHub, LinkedIn, NPM, or Codepen fields empty, they will be automatically hidden on the site.

About `extraLang`:
In `meta.json`, there is a field like this:

```json
"extraLang": {
  "label": ""
}
```

Fill in the `label` with the name of the additional language you want to support. This label will appear on the language toggle button in the top right corner of the website.
For example, to support Greek, you can enter `"Ελληνικά"`.

While `meta.json` only holds the label, all other JSON files use the ex key to represent content in this additional language.

#### Example:

```json
"en": "Hi, my name is John Doe.",
"ex": "Γεια, με λένε John Doe."
```

If you want to support German, set the `label` in `meta.json` like this:

```json
"extraLang": {
  "label": "Deutsch"
}
```

Then write the German content under the `ex` key in the other JSON files:

```json
"en": "Hi, my name is John Doe.",
"ex": "Hallo, ich heiße John Doe."
```

### 2. `intro.json`

This file contains the introduction message shown in the Intro section at the top of the page.
You can provide different versions for each language.
As explained earlier, enter your additional language content under the `ex` key.

### 3. `categories.json`

This file defines the category options used to filter your projects.
Each project in `projects.json` must reference one of the keys defined here.

### 4. `projects.json`

This file lists all your projects.

- Each project has a unique `id`, which you can define freely.

However, the preview image must match the `id` and be stored in the `/img/projects/` folder with the filename `{id}.png`.

Example:

```json
{
  "id": "p007",
  ...
}
```

→ Image file: `/img/projects/p007.png`

### 5. `opensource.json`

This file contains a list of your open source contributions.

- You can specify the contribution type (`pull request` or `issue`)

- Include the corresponding `pull request` or `issue` number for each item

### 6. `skills.json`

This file lists the technologies and tools you use.

- Each skill has a unique `id`

- The corresponding logo image should be stored as `/img/logo/{id}.svg`

Example:

```json
{
  "id": "javascript"
}
```

→ Image file: `/img/logo/javascript.svg`

## How to Deploy with GitHub Pages

To publish your portfolio using GitHub Pages:

1. Go to your repository's **Settings** → **Pages**

2. Under Source, choose **Deploy from a branch**

3. Select the branch (`main`) and set the folder to `/ (root)`

4. After saving, your site will be available within a few minutes at:

```text
https://your-username.github.io/your-repo-name/
```
