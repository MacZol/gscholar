import { SendSecure } from "../helper";
import Swal from "sweetalert2";

async function getArticles(props) {
  let res = await SendSecure("get", "/account/articles");
  if (res.type === "error") {
    if (res.msg === "not found") {
      return [];
    } else {
      Swal.fire("Error", res.msg, "error");
      props.history.push("/");
    }
  } else {
    return res.articles;
  }
}

async function getMessages(props) {
  let res = await SendSecure("get", "/account/messages");
  if (res.type === "error") {
    if (res.msg === "not found") {
      return [];
    } else {
      Swal.fire("Error", res.msg, "error");
      props.history.push("/messages");
    }
  } else {
    return res.messages;
  }
}

async function getMessage(props, id) {
  let res = await SendSecure("get", `/account/message/${id}`);
  if (res.type === "error") {
    if (res.msg === "not found") {
      return [];
    } else {
      Swal.fire("Error", res.msg, "error");
      props.history.push("/messages");
    }
  } else {
    return res.messages;
  }
}

async function getAlerts(props) {
  let res = await SendSecure("get", "/account/alerts");
  if (res.type === "error") {
    if (res.msg === "not found") {
      return [];
    } else {
      Swal.fire("Error", res.msg, "error");
      props.history.push("/alerts");
    }
  } else {
    return res.alerts;
  }
}

async function getProfile(props) {
  let res = await SendSecure("get", "/account/profile");
  if (res.type === "error") {
    Swal.fire("Error", res.msg, "error");
    props.history.push("/");
  } else {
    return res.user;
  }
}
async function getAlert(props, id) {
  let res = await SendSecure("get", `/account/alert/${id}`);
  if (res.type === "error") {
    Swal.fire("Error", res.msg, "error");
    props.history.push("/");
  } else {
    return res.alert;
  }
}
async function getInformation(props) {
  let res = await SendSecure("get", "/account/information");
  if (res.type === "error") {
    if (res.msg === "not found") {
      return {};
    } else {
      Swal.fire("Error", res.msg, "error");
      props.history.push("/");
    }
  } else {
    return res.information;
  }
}

async function getGraphInformation(props, time) {
  let res = await SendSecure("get", `/account/information/${time}`);
  if (res.type === "error") {
    if (res.msg === "time limit") {
      return [];
    } else {
      Swal.fire("Error", res.msg, "error");
      props.history.push("/metrics");
    }
  } else {
    return res;
  }
}

export {
  getArticles,
  getInformation,
  getAlerts,
  getAlert,
  getProfile,
  getMessages,
  getMessage,
  getGraphInformation,
};
