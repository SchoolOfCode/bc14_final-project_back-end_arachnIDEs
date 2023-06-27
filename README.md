# arachnIDEs present:

![Help Me Help You logo](./horizontal_logo.jpg "Help Me Help You")

<div align="center">
<img src="./help-me-help-you-qr-code.png" alt="QR Code" width="200"/>

[Help Me Help You](https://helpme-helpyou-favour.netlify.app/)

<p><em>Connect with your local community to give and receive favours, skills, and support.  
  
From moving flats to feeding cats - we have it covered.</em></p>

</div>

## 📖 Contents 📖

- [Authors](#authors)
- [Problem and Solution](#🧐-problem-and-solution-💡)
- [Instructions or Demo video](#📹-instructions-or-demo-video-📹)
- [Tech Stack](#💻-tech-stack-💻)
- [Future Scope](#🤩-future-scope-🤩)
- [How to deploy locally](#⚙️-how-to-deploy-locally-⚙️)
- [API](#🤙-api-calls-🤙)
- [Acknowledgements](#🙏-acknowledgements-🙏)

## Authors

---

[Catherine Broadbent](https://github.com/CGreen789)  
[Christopher Webb](https://github.com/Webbocoder)  
[Mohammed Farah](https://github.com/Mfar121)  
[Olga Khristoliubova](https://github.com/olgaKhristo)  
[Sarah Salmean](https://github.com/sarahsalmean)  
[Tom Webb](https://github.com/tomwebb2022)

## 🧐 Problem and Solution 💡

---

In a post-Covid world, many people are struggling with a lack of a support system. This struggle is compounded by a cost-of-living crisis, preventing individuals from meeting their basic and auxiliary needs, whether due to financial issues or physical limitations.
Developing community cohesion is a challenge that requires effort from members within the community, many of whom are also struggling with the cost of living.

Our solution to this problem is the development of a platform called 'Help Me Help You.'
'Help Me Help You' will bring communities together by enabling users to post and request help from other members of their local community. Instead of paying for services, our users will be able to offer a service in return. Additionally, our app will provide an opportunity for altruistic individuals in the community to offer their services without asking for anything in return.
'Help Me Help You' aims to enhance community cohesion and alleviate the cost of living for those who utilize the app.

## 📹 Instructions or Demo video 📹

---

(post link to video here)

## 💻 Tech Stack 💻

---

#### Front-End

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

#### Back-End

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)  
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)  

#### Testing

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

#### Planning and Design

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)

## 🤩 Future Scope 🤩

---

As we had a very tight 5 weeks to complete the project (of which only 2.5 weeks were spent coding), we tried to limit the scope of our project. Given more time, we would have developed more features to create a more complete user experience that does not require the user to leave the app. This would include, but not be limited to:

- [ ] A feedback system allowing users to rate each other using a 1-5 star system, with an attached comment.
- [ ] An in-app messaging system allowing different users to have a private conversation without having to leave the platform. Currently, clicking the "Contact User" button will open the user's email client and input the other user's email address.
- [ ] A proximity feature, showing you how close/far another user is from you. At the moment, it only displays the borough in which a user resides.
- [ ] A few extra pages, including a potential blog, news page, and testimonials page.

## ⚙️ How to deploy locally ⚙️

---

We have provided a link for the hosted version of the application above, but if you would like to run it locally please take the following steps:

### Clone the project

        https://github.com/SchoolOfCode/bc14_final-project_back-end_arachnIDEs.git

### Install the required dependencies

        npm install

### Start the server

        npm run dev



## 🤙 API Calls 🤙


| HTTP Method | Path            |  Request Body (JSON)    | Response Body (JSON)          | Status Code | Result                         |
| ----------- | --------------- |  ---------------------- | ----------------------------- | ----------- | ------------------------------ |
| GET         | /api/listings               |                         | Array of guest listings | 200         | Get all listings                |
| POST        | /api/listings          | New guest listing | New guest listing       | 201         | Adds a new guest listing to the Give Help Page               |

## 🙏 Acknowledgements 🙏

---

A huge thank you to [School Of Code](https://www.schoolofcode.co.uk/) for allowing us to take part in this course and providing us with the skills to complete this project. We would also like to thank the wider tech community for providing us with so many resources to use in our project.
