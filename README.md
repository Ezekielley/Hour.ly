## Hour.ly
## 1. Overview

Hour.ly is a shared calendar website where you are able to join groups known as *circles* that shares the same calendar. Within this calendar, you are able to view everyone else's schedules, what they are doing on a specific date and time, and where they will be at that moment. This can be used personally, academically, or professionally.

## 2. How to view it

Hour.ly can be viewed at `https://github.com/Ezekielley/Hour.ly/tree/main` by opening `index.html`, or by visiting the live site at `https://ezekielley.github.io/Hour.ly/`.

## 3. Pages and features

Week 1 - The first page: The **Circles** page allows you to navigate through your current circles, create a circle, or join a circle. Currently on week 1, it does not have any JavaScript interactivity.

Week 2 - The first page: finished. Features: The Circles page is the main dashboard of the website. This part of the page is where all your groups called "circles" are stored. Before accessing the main website, you can choose which of the groups you've joined to view which calendar you want to access. This page also allows you to create and host your own group, if you haven't joined one yet.
New feature added: We have utilized the `display: none;` property in CSS, and have added it to sections of each page. The current active page with the attribute is the circles page, and with JavaScript interactivity, the buttons have functions to remove the active status from a page and transfer it to the next ID, depending on which button you pressed (e.g. Calendars page). This would allow multiple HTML codes and pages in one file without having all of them displayed at once.

## 4. Project structure

The files remain in the main repository itself. The HTML is contained in `index.html`, CSS in the `styles-circles.css`, and JavaScript in `script-circles.js`

## 5. Screenshots

Week 1:
<img width="1917" height="820" alt="image" src="https://github.com/user-attachments/assets/b0ce1f2c-f2ca-4c4c-b506-fa0e22349f84" />

Week 2:
<img width="1917" height="862" alt="image" src="https://github.com/user-attachments/assets/3c4173f8-6ac8-44a2-8a50-dfaa641ac4dd" />
<img width="1917" height="857" alt="image" src="https://github.com/user-attachments/assets/fb3d98f2-3ce2-4fde-bc2b-1d779af3e4d1" />
<img width="1917" height="862" alt="image" src="https://github.com/user-attachments/assets/8aa0186a-a02c-41df-a666-4b82fb2731f5" />

## 6. Known issues and next steps

Week 1:
There are a lot of issues, broken, and unfinished things. Most prominent issue currently is not knowing how to connect three separate html files into one, and having it navigate through the navigation bar. Combining all three site pages is essential in making it smooth. The current solution we thought of (mostly suggested by AI) is by learning `.active` function, however we have yet to learn that concept. Next are the unfinished things, which are the calendar page and add event page. Future features would also be added once we learn the necessary concepts. These features would include (also what's unfinished): add an event to a calendar, add presets to make the join function work, and learn `openModal` for popups. (Week 2 edit: openModal was suggested by AI, however at that time I did not know that it was a custom function, however we figured it out that the pop-ups are linked to `.active` property in CSS.)

Week 2:
Last final steps to complete the website is to add the calendar page and add events page. The very foundation of the website is already finished, and I would say it's about 60% finished. The biggest hurdle was already fixed, and so the last remaining steps are the HTML and CSS layouts of the 2 pages, and the JavaScript interactivity of the website, which is the main part and purpose of the website. 




