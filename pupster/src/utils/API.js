import axios from "axios";

const authKey = "9d4a8986921972b65754ea0809d47c84:12:74623931";
const baseURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

const topic = "";
const year = 0;
const topicURL = baseURL + "&q=" + topic;

function yearSearch(year) {
	const yearURL = baseURL + "&begin_date=" + year;

  	if (parseInt(year)) {
    	year += "0101";
    	console.log("yearURL", yearURL)
  	}
  yearSearch(yearURL);
};


export default {
  getTopic: function(topic) {
    return axios.get(topicURL);
  },
  getYear: function() {
    return axios.get(yearSearch());
  }
};


