# Fantasy General Conference

[My Notes](notes.md)

> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documenation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

- [x] Proper use of Markdown in README.md
- [x] A concise and compelling elevator pitch in your README.md
- [x] Description of key features in your README.md
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in your README.md.

### Elevator pitch

I have enjoyed listening to the messages of General Conference, but I also love to guess where temples will be announced. This has become a family friendly prediction competition! The goal of the game is to have the highest score by predicting who will speak and when, where temples are announced, tie colors, and a few other topics. To make it easier to play with friends in different places, this will allow anyone to login, select their predictions, and watch their results compete with others during the sessions. My hope is to make this program simple and enjoyable! A game that's light-hearted, fun, and invites others to tune into the messages of General Conference!

### Design

![FGC_Design](https://github.com/user-attachments/assets/b2f2a4aa-9973-47ff-9460-10e4732e3f69)

Here are three drawings that depict the three main pages of the program. The left-most illustration is the **Login** page. The middle illustration is the **Prediction** page. The right-most illustration is the **Scoreboard** page.  

**Login**  

This page includes boxes to input a username and email. There is also a space for text/image displaying the title.  

**Prediction**  

This page contains a group of categories and interactive boxes or menus to select answers and set predictions. There are also a few buttons which allow for selecting different pages and locking a user's answers.  

**Scoreboard**  

This page updates as answers and scores are submitted. The page displays the user with their score in comparison with other participating users.  

```mermaid
sequenceDiagram
    actor Joshua
    actor Michael
    actor Website
    Joshua->>Website: Joshua +3 point(s)
    Website -->>Michael: Joshua +3 point(s)
    Michael->>Website: Michael +1 point(s)
    Website -->>Joshua: Michael +1 point(s)
```

### Key features

- Page for registering or login 
- Ability to select user answers for their prediction
- Ability to alter predictions
- Ability for user to lock prediction
- Scoreboard of users and their scores
- Admin can access and input the correct answers

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses HTML to provide a simple structure to the needed pages. A few HTML pages will be used for the login, predictions, and scoreboard pages.
- **CSS** - Uses CSS to improve the visual design and apply color to the display.
- **React** - A page containing components that are reactive to the user and their prediction input.
- **Service** - The backend service provides prediction options and retrieves the user's selection.
- **DB/Login** - Users register and login before they can fill out their predicitons. User information and predictions are safely stored in a database.
- **WebSocket** - As each user inputs their predictions, their scores are broadcasted to other users in the form of a scoreboard.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://minijosh.click).  
I deployed my server with an elastic IP address linked to my custom domain name (`minijosh.click`). On this server, I also have a security group enabled as well as capabilites for subdomain access.  

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I completed the HTML pages for a login/index page, a guess pages for inputs, and a score page!
- [x] **Proper HTML element usage** - I used HTML elements in a way to be organized and clear in their purpose.
- [x] **Links** - I included links to the different pages of my HTML documents and my GitHub
- [x] **Text** - I included text for display, descriptions and placeholders
- [x] **3rd party API placeholder** - I have placeholders for a random dog photo as a greeting profile image, and will verify that emails are accurate after attempting to login/creat an account
- [x] **Images** - I use some images within my Guess page and on the index page
- [x] **Login placeholder** - I included a login placeholder, including options for a username, email, and password
- [x] **DB data placeholder** - My data placeholder is in the form of the inputs and scoreboard for storing and comparing inputs
- [x] **WebSocket placeholder** - The scoreboard will update the scores as guesses are inserted and compared with answers

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I used CSS to interact with various parts of the main content, but I also fixed a header and footer in place for navigation and crediting.
- [x] **Navigation elements** - I included CSS with my navigational elements so they were accessible on different formats of a screen and responsive.
- [x] **Responsive to window resizing** - The webpage is responsive to the windows resizing and mobile rotation.
- [x] **Application elements** - I used CSS to style and format elements within my HTML.
- [x] **Application text content** - I used CSS by applying fonts and resizing my text.
- [x] **Application images** - I used CSS to alter included images to my liking.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I used Vite to bundle and deploy my startup.  
- [x] **Components** - Respective jsx and component files are available for each page.  
- [x] **Router** - I completed routing between all of the pages of my startup. Including Login, Guess, and Scores.  

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - All of the functionality is present or mocked out. It is not currently the cleanest and has a few bugs, but I hope to work those out with time and more review of React P2.
- [x] **Hooks** - Hooks are present to catch events, modify variables, and a few other functions.

> I still have some parts to iron out in terms of cleanliness, bugs, and/or data flow, but it'll continue to be worked on to make it work smoother and more accurately to what I am imagining. P.S, the scores/answer key is currently hardcoded, so 'a' and '4' will get you the most points ;)

```mermaid
classDiagram
  User --> Login
  Login --> Auth
  Auth --> If-Yes
  Auth --> If-No
  If-Yes --> Guess-Page
  If-No --> Warn
  Warn --> User
  User --> Create
  Create --> Store-Profile
  Store-Profile --> Guess-Page

  Guess --> Input-Guess
  Input-Guess --> Submit
  Submit --> Create-Guess
  Create-Guess --> Local-Storage
  Submit --> Lock-Boxes
  Input-Guess --> Clear-Guess
  Clear-Guess --> Remove-Input

  Scores --> Compare
  Compare --> Update-Profile
  Update-Profile --> Table-Data
  Table-Data --> Scoreboard
  Update-Profile --> User-Score
```

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - Express and other packages are installed. They're set up to run the service file and sets base cases.
- [x] **Static middleware for frontend** - Middleware is implemented for the static files.
- [x] **Calls to third party endpoints** - I included a third party endpoint to call a dog api for photos and gifs. This is located on `login.jsx`.
- [x] **Backend service endpoints** - Multiple endpoints are set up to post and send data via front/backend.
- [x] **Frontend calls service endpoints** - The frontend calls data through endpoints and then changes and displays variables provided by the endpoint calls.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **User registration** - I completed this portion. The DB holds accounts and users correctly
- [x] **User login and logout** - Completed. Checks for token, matches, and other data
- [x] **Stores data in MongoDB** - Completed. Stores users and scoreboard objects
- [x] **Stores credentials in MongoDB** - Credentials are stored within DB
- [x] **Restricts functionality based on authentication** - Complete. Not able to access Guess and Score without logging in or creating an account

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Backend listens for WebSocket connection** - I completed some functions to hold and collect events.
- [x] **Frontend makes WebSocket connection** - A message displays when the websocket connects.
- [x] **Data sent over WebSocket connection** - Data is collected and modified in preparation for displayed.
- [x] **WebSocket data displayed** - Data is displayed in the center of the page.
- [x] **Application is fully functional** - Elements update and are displayed as expected.
