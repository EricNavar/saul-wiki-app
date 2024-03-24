# Better Call Saul Wiki

This app is a Wiki for the show Better Call Saul. It's a good show. The purpose of this is to demo Contentful.

https://better-call-saul-wiki.ericnavar.com/

## Running the project

If you are interested in recreating the project from the workshop, do the following:

### Configure contentful

- Create a contentful account (it is free)
- Create a contentful space
- Add a contentful model for a content type `article` with the following attributes
  - `content`: Rich Text
  - `title`: Short Text
  - `description`: Long Text
  - `thumbnail`: Asset
- Populate content. Remember to add one of the following tags:
  - lore, location, character, season (all tags are public)

### Environment variables

Create a `.env` file in the root directory. Add the follow environment variables:
```
REACT_APP_SPACE_ID=
REACT_APP_ACCESS_TOKEN=
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
