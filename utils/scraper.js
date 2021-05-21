const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const Articles = require("../api/models/Articles");
const Information = require("../api/models/Information");
const moment = require("moment");

const Scrape = (user) => {
  (async () => {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(
      `https://scholar.google.com/citations?user=${user.google_scholar_id}&hl=en`
    );
    const content = cheerio.load(await page.content());
    const articles = [];
    // scraping articles
    content(".gsc_a_tr").each(function (index, element) {
      let inner = content(this);
      let article_name = inner.find(".gsc_a_at").text();
      let author = inner.find(".gs_gray").eq(0).text();
      let info = inner.find(".gs_gray").eq(1).text();
      let citations = inner.find(".gsc_a_c").text();
      let linkToCitations = inner.find(".gsc_a_ac").attr("href")
      publicationYear = inner.find(".gsc_a_y").text();

      let article = {
        article_name,
        author,
        info,
        citations: Number(citations) || "",
        category: "",
        scholar_id: user.google_scholar_id,
        user_id: user._id,
        publicationYear,
        updatedAt: "",
        linkToCitations,
      };
      articles.push(article);
    });
    // checking if already scraped and stored
    const allArticles = await Articles.find({ user_id: user._id });
    // if not scraped and stored before insert all
    if (allArticles.length === 0) {
      await Articles.insertMany(articles);
    } else {
      // update All
      for (let a of articles) {
        for (let aa of allArticles) {
          if (a.article_name === aa.article_name) {
            a.updatedAt = new Date();
            await Articles.updateOne({ _id: aa._id }, a);
          }
        }
      }
    }
    // if user does not have any information
    let information = { scholar_id: user.google_scholar_id, user_id: user._id };
    content("#gsc_rsb_st").each(function (index, element) {
      let inner = content(this);
      let totalCitations = inner.find(".gsc_rsb_std").eq(0).text();
      let citationsSince2016 = inner.find(".gsc_rsb_std").eq(1).text();
      let totalHIndex = inner.find(".gsc_rsb_std").eq(2).text();
      let hIndexSince2016 = inner.find(".gsc_rsb_std").eq(3).text();
      let totalI10Index = inner.find(".gsc_rsb_std").eq(4).text();
      let i10IndexSince2016 = inner.find(".gsc_rsb_std").eq(5).text();

      information = {
        totalCitations: Number(totalCitations),
        citationsSince2016: Number(citationsSince2016),
        totalHIndex: Number(totalHIndex),

        hIndexSince2016: Number(hIndexSince2016),
        totalI10Index: Number(totalI10Index),
        i10IndexSince2016: Number(i10IndexSince2016),
        citationsLastWeek: 0,

        hIndexLastWeek: 0,
        i10IndexLastWeek: 0,
        i10IndexLastMonth: 0,
        hIndexLastMonth: 0,
        citationsLastMonth: 0,

        citationsToday: 0,
        hIndexToday: 0,
        i10IndexToday: 0,

        profileview: 0,
        fullTextDownload: 0,
        publicationView: 0,
        scholar_id: user.google_scholar_id,
        user_id: user._id,
      };
    });
    const infoCheck = await Information.findOne({ user_id: user._id });
    if (infoCheck === null) {
      const info = await Information.create(information);
      info.dailyDataRecord = moment(info.updatedAt).add(1, "days");
      info.weekDateRecord = moment(info.updatedAt).add(7, "days");
      info.monthDataRecord = moment(info.updatedAt).add(30, "days");
      await info.save();
    } else {
      let currentDate = moment(new Date());
      if (currentDate < infoCheck.weekDateRecord) {
        if (
          infoCheck.totalCitations &&
          infoCheck.totalHIndex &&
          infoCheck.totalI10Index
        ) {
          let hIndexLastWeek =
            information.hIndexSince2016 - infoCheck.hIndexSince2016;
          information.hIndexLastWeek += hIndexLastWeek;

          let citationsLastWeek =
            information.citationsSince2016 - infoCheck.citationsSince2016;
          information.citationsLastWeek += citationsLastWeek;

          let i10IndexLastWeek =
            information.i10IndexSince2016 - infoCheck.i10IndexSince2016;
          information.i10IndexLastWeek += i10IndexLastWeek;
        }
      } else {
        information.citationsLastWeek = 0;
        information.hIndexLastWeek = 0;
        information.i10IndexLastWeek = 0;
        information.weekDateRecord = moment(infoCheck.updatedAt).add(7, "days");
      }

      if (currentDate < infoCheck.monthDataRecord) {
        if (
          infoCheck.totalCitations &&
          infoCheck.totalHIndex &&
          infoCheck.totalI10Index
        ) {
          let hIndexLastMonth =
            information.hIndexSince2016 - infoCheck.hIndexSince2016;
          information.hIndexLastMonth += hIndexLastMonth;

          let citationsLastMonth =
            information.citationsSince2016 - infoCheck.citationsSince2016;
          information.citationsLastMonth += citationsLastMonth;

          let i10IndexLastMonth =
            information.i10IndexSince2016 - infoCheck.i10IndexSince2016;
          information.i10IndexLastMonth += i10IndexLastMonth;
        }
      } else {
        information.citationsLastMonth = 0;
        information.hIndexLastMonth = 0;
        information.i10IndexLastMonth = 0;
        information.monthDataRecord = moment(infoCheck.updatedAt).add(
          30,
          "days"
        );
      }
      if (currentDate < infoCheck.dailyDataRecord) {
        if (
          infoCheck.totalCitations &&
          infoCheck.totalHIndex &&
          infoCheck.totalI10Index
        ) {
          let hIndexToday =
            information.hIndexSince2016 - infoCheck.hIndexSince2016;
          information.hIndexToday += hIndexToday;

          let citationsToday =
            information.citationsSince2016 - infoCheck.citationsSince2016;
          information.citationsToday += citationsToday;

          let i10IndexToday =
            information.i10IndexSince2016 - infoCheck.i10IndexSince2016;
          information.i10IndexToday += i10IndexToday;
        }
      } else {
        information.citationsToday = 0;
        information.hIndexToday = 0;
        information.i10IndexToday = 0;
        information.dailyDataRecord = moment(infoCheck.updatedAt).add(
          1,
          "days"
        );
      }

      information.updatedAt = new Date();
      await Information.updateOne({ _id: infoCheck._id }, information);
    }
    browser.close();
  })();
  return true;
};
module.exports = Scrape;
