# Fantasy General Conference

[My Notes](notes.md)

**Current Plans // Next Steps**  
*Sat, Jan 11th | Morning*  
- [x] Complete elevator pitch  
- [x] Complete WebSocket and DB/Login descriptions  
- [ ] Draft design image

*Sat, Jan 11th | Evening*  
- [x] Complete key features
- [x] Complete Service and React descriptions


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
- **CSS** - Uses CCS to provide simple styles and color to the display.
- **React** - A page containing components that are reactive to the user and their prediction input.
- **Service** - The backend service provides prediction options and retrieves the user's selection.
- **DB/Login** - Users register and login before they can fill out their predicitons. User information and predictions are stored in a database.
- **WebSocket** - As each user inputs their predictions, their scores are broadcasted to other users in the form of a scoreboard.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
