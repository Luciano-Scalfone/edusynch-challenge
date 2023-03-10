# Welcome to Crypto Synch

This project is a crypto coin platform prototype. At its home page is possible to see information about the platform and at dashboard page, it behaves like a crypto wallet (still in progress).

This is a mobie first project. So try to run it in different devices (still in progress*).

\* Currently this project is a mobile only project. If you open it at desktop devices its possible to see all the data but the user experience won't be too smoothy. 

## Available Scripts

To install the dependencies run:

### `npm install`

To set up the front-end. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This project uses json-server to run a fake API, that simulate backend-integration. 
To set up the fake API. In the project directory, you can run:

### `npm run fake-api`

OBS.: json-server will setup a server at port 8080, make sure this port its not being used. Or run the json-server script in another port with:

### `npx json-server --watch db.json -p <NEW_PORT>`

### `npm test`

Launches the test runner in the interactive watch mode.

## Prototype

This project prototype is based at this [figma design](https://www.figma.com/file/B8scopEM014WR4Oh58UaDb/%5BEduSynch%5D--Front-End-Test?node-id=1%3A528&t=lS8okgm2HwXA52eb-0) 

## For The Interviewrs

Hello, folks.

For this project, I gave my best to follow the best development practices and to deliver a horizontal slice of the project fully independent. Given the time and the hands involved in this project (just my hands haha) I had to take some decisions in order to deliver what I judged would be the best way to let you know my development skills.
That said, I tried to develop everything on my own and avoiding the usage of external libraries. I also followed the TDD process, and Typescrips instead of Javascript, which in my point of view, is what I see companies using the most for business projects. This whole context decreased my development speed, once TS is more verbose and TDD itself reduce the development speed. Besides that, I tried to not sacrifice processes and code quality in order to deliver faster. I also tried to implement a very simple user authentication and make sure GDPR is being followed.

I wish I had more time to go deeper into components test with Enzyme along with jest, and also to implement a token strategy for authenticated users.

Thank you for the opportunity and time you dedicated to this process. Be aware that I enjoyed a lot to work on this prototype.

I look foward to hearing from you.
