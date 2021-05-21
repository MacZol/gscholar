const Information = require("../../models/Information");
const HIndexDaily = require("../../models/HIndexDaily");
const CitationsDaily = require("../../models/CitationsDaily");
const I10IndexDaily = require("../../models/I10IndexDaily");
const moment = require("moment");
const helper = require("../../../utils/helper");
// Retrieve information and statistics
exports.GetInformation = async (req, res) => {
  try {
    let information = await Information.findOne({ user_id: req.data.id });
    if (information === null) {
      res.json({
        type: "error",
        msg: "User does not have any information to his name",
      });
    } else {
      res.json({
        type: "success",
        information,
      });
    }
  } catch (e) {
    console.error(e);
  }
};
// Daily graph creation
exports.SendDailyGraphicalInformation = async (req, res) => {
  try {
    let user_id = req.data.id;
    let pastWeekDate = moment(new Date()).subtract(7, "days").toDate();
    let citations = await CitationsDaily.aggregate([
      { $match: { $and: [{ date: { $gte: pastWeekDate } }, { user_id }] } },
      { $limit: 7 },
      { $project: { _id: 1, citations: 1, day: 1 } },
    ]);

    let hIndex = await HIndexDaily.aggregate([
      { $match: { $and: [{ date: { $gte: pastWeekDate } }, { user_id }] } },
      { $limit: 7 },
      { $project: { _id: 1, hIndex: 1, day: 1 } },
    ]);

    let i10Index = await I10IndexDaily.aggregate([
      { $match: { $and: [{ date: { $gte: pastWeekDate } }, { user_id }] } },
      { $limit: 7 },
      { $project: { _id: 1, i10Index: 1, day: 1 } },
    ]);

    if (citations.length === 0 && hIndex.length === 0 && i10Index === 0) {
      res.json({
        type: "error",
        msg: "time limit",
      });
    } else {
      let newCitations = [],
        newHIndex = [],
        newI10Index = [];
      for (let c of citations) {
        let obj = {
          day: c.day,
          citations: c.citations,
        };
        newCitations.push(obj);
      }
      for (let c of hIndex) {
        let obj = {
          day: c.day,
          hIndex: c.hIndex,
        };
        newHIndex.push(obj);
      }
      for (let c of i10Index) {
        let obj = {
          day: c.day,
          i10index: c.i10Index,
        };
        newI10Index.push(obj);
      }
      res.json({
        type: "success",
        citations: newCitations,
        hIndex: newHIndex,
        i10Index: newI10Index,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
// Monthly graph creation. And then I can be the same.
exports.SendMonthlyGraphicalInformation = async (req, res) => {
  try {
    let user_id = req.data.id;
    let pastYearDate = moment("2021-01-01").toDate();
    let currentDate = moment(new Date()).toDate();
    let getMonthsInIndex = helper.getMonths(pastYearDate, currentDate);
    let months = [];

    for (let m of getMonthsInIndex) {
      let mm = helper.dayOfMonthAsString(m);
      months.push(mm);
    }

    let citations = [],
      hIndex = [],
      i10Index = [];

    for (let m of months) {
      let c = await CitationsDaily.aggregate([
        {
          $match: {
            $and: [{ user_id }, { month: m }, { date: { $gte: pastYearDate } }],
          },
        },
        {
          $group: {
            _id: null,
            month: { $first: "$month" },
            citations: { $sum: "$citations" },
          },
        },
      ]);
      if (c.length > 0) {
        citations.push(c[0]);
      }
      let h = await HIndexDaily.aggregate([
        {
          $match: {
            $and: [{ user_id }, { month: m }, { date: { $gte: pastYearDate } }],
          },
        },
        {
          $group: {
            _id: null,
            month: { $first: "$month" },
            hIndex: { $sum: "$hIndex" },
          },
        },
      ]);
      if (h.length > 0) {
        hIndex.push(h[0]);
      }
      let i = await I10IndexDaily.aggregate([
        {
          $match: {
            $and: [{ user_id }, { month: m }, { date: { $gte: pastYearDate } }],
          },
        },
        {
          $group: {
            _id: null,
            month: { $first: "$month" },
            i10Index: { $sum: "$i10Index" },
          },
        },
      ]);
      if (i.length > 0) {
        i10Index.push(i[0]);
      }
    }
    if (citations.length === 0 && hIndex.length === 0 && i10Index === 0) {
      res.json({
        type: "error",
        msg: "time limit",
      });
    } else {
      let newCitations = [],
        newHIndex = [],
        newI10Index = [];
      for (let c of citations) {
        let obj = {
          month: c.month,
          citations: c.citations,
        };
        newCitations.push(obj);
      }
      for (let c of hIndex) {
        let obj = {
          month: c.month,
          hIndex: c.hIndex,
        };
        newHIndex.push(obj);
      }
      for (let c of i10Index) {
        let obj = {
          month: c.month,
          i10index: c.i10Index,
        };
        newI10Index.push(obj);
      }
      res.json({
        type: "success",
        citations: newCitations,
        hIndex: newHIndex,
        i10Index: newI10Index,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
