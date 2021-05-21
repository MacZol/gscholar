const User = require("../api/models/User");
const Alert = require("../api/models/Alert");
const Information = require("../api/models/Information");
const CitationsDaily = require("../api/models/CitationsDaily");
const HIndexDaily = require("../api/models/HIndexDaily");
const I10IndexDaily = require("../api/models/I10IndexDaily");
const Messages = require("../api/models/Messages");
const moment = require("moment");
const Scrape = require("./scraper");
const helper = require("./helper");

const scrape = async () => {
  const users = await User.find();
  let scraped = false;
  if (users.length > 0) {
    for (let user of users) {
      if (user.google_scholar_id && user.isEmailVerified) {
        scraped = Scrape(user);
      }
    }
  }
  if (scraped) {
    console.log("Data Scaped And Stored For All Users");
  } else {
    console.log("No users found for scraping");
  }
};

const sendMail = async () => {
  let alerts = await Alert.find();
  for (let alert of alerts) {
    let information = await Information.findOne({ user_id: alert.user_id });
    let mailData = {};
    // let text = "";

    if (alert.citations) {
      mailData.citations = information.totalCitations;
      mailData.citationsLastWeek = information.citationsLastWeek;
    }
    if (alert.hIndex) {
      mailData.hIndex = information.totalHIndex;
      mailData.hIndexLastWeek = information.hIndexLastWeek;
    }

    let text = "",
      head = "";
    for (let m in mailData) {
      head += `
        <th  style="border:1px solid black; border-collapse:collapse;"> ${m.toUpperCase()} </th>
      `;
      text += `
      <td  style="border:1px solid black; border-collapse:collapse;"> ${mailData[m]} </td>
      `;
    }

    let finalString = `
 <!DOCTYPE html>
<html>
<head>
    <style>
        #mail {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 50%;
        }
        .mail-display{
            display: flex;
            justify-content: center;

        }
        
        #mail td, #mail th {
            border: 1px solid #ddd;
            padding: 8px;
        }
        
        #mail tr:nth-child(even){background-color: #f2f2f2;}
        
        #mail tr:hover {background-color: #ddd;}
        
        #mail th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #464647;
            color: white;
        }
        h2, .button-class ,h3{
            display: flex;
            justify-content: center;
        }
        .button-class{
            margin-top: 20px ;
            
        }
        button{
            background-color: #464647;
            cursor: pointer;
            padding: 1rem;
            border:none;
        }
        button:hover{
            background-color: #1b1b22;

        }
        a{
            text-decoration: none;
            color: white;
        }
        .image-section{
            display: flex;
            justify-content: center;
            margin: 40px 0 40px 0;
        }
    </style>
</head>
<body>
    <section class="section-all">
        <div class="image-section">
            <img alt="photo" src="http://13.126.135.69:4000/logo.jpg">
        </div>
        <div>
            <h2>Hey, Your ${alert.schedule} update for ${alert.alert_name}</h2>
        </div>
        <div class="mail-display">
            <table  id="mail">
            <thead>
                <tr>
                  ${head}
                </tr>
              </thead>
              <tbody>
                <tr>
                  ${text}
                </tr>
              </tbody>
           </table>
        </div>
           <h3>Click The Button To View More</h3>
        <div class="button-class">
        <button><a href="http://13.126.135.69:4000/" style="color:white;" target="_blank">Go to profile</a></button>
    </div>
    </section>
</body>
</html>
  `;

    helper.send_email("mkzolyniak@gmail.com", "hello", finalString);
    let currentTime = moment(new Date());
    if (currentTime > alert.sendMailAt) {
      // message logging and storing part is remaining
      // just a sample mail
      helper.send_email(
        alert.email,
        `${alert.schdeule} ${alert.alert_name}`,
        finalString
      );
      // storing the message for viewing purpose
      let messageData = {
        user_id: alert.user_id,
        message: finalString,
        name: alert.alert_name,
        ...mailData,
      };
      await Messages.create(messageData);
      // after the mail is sent we again have to change the mailing time
      if (alert.schedule === "weekly") {
        alert.sendMailAt = moment(alert.sendMailAt).add(7, "days");
      } else if (alert.schedule === "bi-weekly") {
        alert.sendMailAt = moment(alert.sendMailAt).add(14, "days");
      } else if (alert.schedule === "monthly") {
        alert.sendMailAt = moment(alert.sendMailAt).add(30, "days");
      }
      await alert.save();
    }
  }
};
// This function runs every day and uploads data to the database, to be used by the Graphs
const dailyDataLog = async () => {
  const users = await User.find();
  if (users.length > 0) {
    for (let user of users) {
      if (user.isEmailVerified) {
        let currentTime = new Date();
        let day = helper.dayOfWeekAsString(currentTime.getDay());
        let month = helper.dayOfMonthAsString(currentTime.getMonth());
        const information = await Information.findOne({ user_id: user._id });
        if (information !== null) {
          let citationsDaily = {
            user_id: information.user_id,
            citations: information.citationsToday,
            day,
            month,
          };
          await CitationsDaily.create(citationsDaily);
          let hIndexDaily = {
            user_id: information.user_id,
            hIndex: information.hIndexToday,
            day,
            month,
          };
          await HIndexDaily.create(hIndexDaily);
          let i10IndexDaily = {
            user_id: information.user_id,
            i10Index: information.i10IndexToday,
            day,
            month,
          };
          await I10IndexDaily.create(i10IndexDaily);
        }
      }
      console.log("Daily Data Logged For All Counts increased");
    }
  }
};

module.exports = { scrape, sendMail, dailyDataLog };
