import express from 'express';

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// NPM Node packages for logos
app.use('/logos', express.static('node_modules/programming-languages-logos/src'));

app.get('/', (req, res) => {
   res.render('index')
});

app.get('/cpp', async (req, res) => {
   const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent('C++')}`;

   const response = await fetch(url);
   const language = await response.json();

   res.render('cpp', { language });
});

app.get('/python', async (req, res) => {

   const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent('Python_(Programming_Language)')}`;

   const response = await fetch(url);
   const language = await response.json();

   res.render('python', {language});
});

app.get('/java', async (req, res) => {
   const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent('Java_(Programming_Language)')}`;

   const response = await fetch(url);
   const language = await response.json();

   res.render('java', {language});
});

app.get('/javascript', async (req, res) => {
   const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent('Javascript')}`;

   const response = await fetch(url);
   const language = await response.json();

   res.render('javascript', {language});
});


// An attempt to create dynamic pages as shown in lab 4 where it would display data
// depending on the URL's name. This would work, creating tabs as needed in the <nav> partials.
// However, due to the requirement of having more than 4 views files, I am using it to display 
// Lua website only instead. Either way this is the finished template 
app.get('/language', async (req, res) => {
   const languageName = req.query.name;

   const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(languageName)}`;

   const response = await fetch(url);
   const language = await response.json();

   res.render('language', { language });
});

app.listen(3000, () => {
   console.log('server started');
});
