# Mockatalog

## Mock Shop Items Catalog API

Provide an easily configurable mock API for testing eCommerce applications, for instance headless commerce apps.

## Set Up

### How to set up a simple Firebase® database

Go to [Firebase](https://console.firebase.google.com/) and create a new Firebase project. (I chose 'mockatalog' for name.)

[Install Firebase CLI](https://firebase.google.com/docs/cli/),
for instance with npm:

```bash
npm install -g firebase-tools
```

Then check the availability of your recently set-up project:

```bash
firebase login
npm install -g firebase-tools
```

Initialize new Firebase project locally:

```bash
firebase init
```

Select "Functions" and "Hosting" from the appearing menu. Then choose "Use an existing project" and pick the Firebase project you created before (for me 'mockatalog').

Link Firebase project ID (available with ```firebase projects:list```) with current directory:

```bash
# my project id is 'mockkatalog' use yours accordingly if you pick another name
firebase use --add mockatalog
``` 

Google cloud services may create costs, so you may need to have to set up billing for the next steps (else you'll see an error like ```Billing must be enabled for activation of service(s) 'cloudbuild.googleapis.com,containerregistry.googleapis.com' to proceed```).

```bash
firebase deploy
```

After that finishes successfully you should see a welcome page under your [project URL](https://mockatalog.web.app/).

### Local debugging

Run Firebase locally (see [details](https://firebase.google.com/docs/functions/local-emulator)):

```bash
firebase emulators:start
```

Locally hosted function can then be reviewed and debugged under ```http://localhost:5001/mockatalog/us-central1/api/say/hello```

### Additional information

- [Starting point](https://medium.com/@hossainkhan/create-your-own-mock-api-server-with-express-js-and-firebase-for-free-9dba2bfbc754) for this project