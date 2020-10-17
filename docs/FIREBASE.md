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

### Additional information

- [Starting point](https://medium.com/@hossainkhan/create-your-own-mock-api-server-with-express-js-and-firebase-for-free-9dba2bfbc754) for this project