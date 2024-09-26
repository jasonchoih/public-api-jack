// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse, faTruck, faTerminal, faEarthAmericas, faDatabase, faSignsPost, faCoins, faAt, faGamepad, faFolderOpen, faVial, faWallet, faBriefcase, faMusic, faPersonRunning, faBurger, faCloudBolt, faKey } from "@fortawesome/free-solid-svg-icons";
// // 
// const apis = [
//     {
//         id:1,
//         title: 'Abstract Geolocation API',
//         img: 'abstract',
//         category: 'geocoding',
//         type: 'api_key',
//         description: `Abstract IP geolocation API provides developers from small startups to big technology companies with a fast and robust API to get the location of any IP worldwide. With Abstract, you can get the city, region and country of any IP. In addition, Abstract IP Geolocation API provides you with timezone and coordinates data so you can build the most delightful experience for your developers. Whether it's for content personalisation, fraud detection or GDPR compliance, Abstract covers a variety of use cases thanks to its extensive and robust platform currently used by 100,000 developers worldwide in companies like Google or Shopify. Freelancers and indiehackers can enjoy an extensive free plan serving up to 20,000 calls per month.`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '9',
//             calls: 20000
//         }
//     },
//     {
//         id:2,
//         title: 'Instagram Feed API',
//         img: 'instagram_api',
//         category: 'social',
//         type: 'api_key',
//         description: `A simple & easy way to access your instagram feed with REST API without code. If you are looking to add your Instagram feed into your website then this is so easy. If you don't want to do backend to access your Instagram data.`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '9',
//             calls: 900
//         }
//     },
//     {
//         id:3,
//         title: 'Currency Exchange',
//         img: 'cx',
//         category: 'currency',
//         type: 'api_key',
//         description: `Get Currency exchange rates JSON API for real-time of 144 Countries with simple REST API.`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '9',
//             calls: 900
//         }
//     },
//     {
//         id:4,
//         title: 'Uptime Robot',
//         img: 'uptime-robot',
//         category: 'development',
//         type: 'api_key',
//         description: `Uptime Robot is a tool that keeps Monitors the status of your applications and notifies when it gets down, up through email. Using Uptime Robot API build your custom status page.`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '9',
//             calls: 900
//         }
//     },
//     {
//         id:5,
//         title: 'Open Weather',
//         img: 'ow',
//         category: 'weather',
//         type: 'api_key',
//         description: `Make Open Weather API and bypass the free limit without code. Open Weather is most famous API to get Current weather and forecasts in your city with their open API with Access Token.`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '9',
//             calls: 900
//         }
//     },
//     {
//         id:6,
//         title: 'Telegram API',
//         img: 'telegram',
//         category: 'social',
//         type: 'api_key',
//         description: `Read and write Telegram data. One of the favorite place for developers, enthusiasts and people who want to build customer solutions on the go. You can raise an entire community around the Telegram API.`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '0',
//             calls: ''
//         }
//     },
//     {
//         id:7,
//         title: 'Webflow CMS API',
//         img: 'webflow',
//         category: 'data_access',
//         type: 'api_key',
//         description: `Get your webflow CMS collections data as JSON API without any backend. Webflow is a website builder in the browser without any coding knowledge. Nowadays many companies using this tool to make marketing pages, marketplace websites, and building blogs.`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '0',
//             calls: ''
//         }
//     },
//     {
//         id:8,
//         title: 'Google Sheet API',
//         img: 'google-sheet',
//         category: 'data_access',
//         type: 'api_key',
//         description: `Everyone knows about google sheet and the use cases. People using Google sheet to make daily logs, meeting notes, Quick MVP in Sheet and People also building Website with Google Sheet. So, you can access the Google Sheet data with NoCode API and integrate into your system.`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '0',
//             calls: ''
//         }
//     },
//     {
//         id:9,
//         title: 'RSS JSON Parser',
//         img: 'xml',
//         category: 'development',
//         type: 'api_key',
//         description: `RSS Json parser API parse your RSS feed URL into JSON response with single API call`,
//         specification: {
//             plan: 'freemium',
//             trial: 'Yes',
//             price: '0',
//             calls: ''
//         }
//     },
// ]
// // 
// const _blogs = {
//     javascript: ['Top 5 JavaScript Courses for Web Development', '4', '#a6d2f1'],
//     screenshot: ['How to make a Screenshot API with Nodejs puppeteer and vercel', '7', '#d5ecdc'],
//     simple: ['Build Simple API with Nodejs and MongoDB', '17', '#f2fcf1'],
//     cache: ['Caching with redis in NodeJS APIs', '6', '#dda49e'],
//     free: ['Free hosting for Node.js API applications', '3', '#9abae7'],
//     glitch: ['How to use glitch to build Node.js APIs', '4', '#a4d3f0'],
//     python: ['Build Python API with MongoDB and Deploy on Heroku', '1', '#919ad9'],
//     node: ['Rate limit in Node.js APIs with Redis', '1', '#ec8c94']
// }
// // 
// const _category = {
//     'home': ['Home', <FontAwesomeIcon size='xs' icon={faHouse} />],
//     'transportation':[ 'Transportation', <FontAwesomeIcon size='xs' icon={faTruck} />],
//     'development': ['Development', <FontAwesomeIcon size='xs' icon={faTerminal} />],
//     'open_data': ['Open Data', <FontAwesomeIcon size='xs' icon={faEarthAmericas} />],
//     'data_access':[ 'Data Access', <FontAwesomeIcon size='xs' icon={faDatabase} />],
//     'geocoding': ['Geocoding', <FontAwesomeIcon size='xs' icon={faSignsPost} />],
//     'currency': ['Currency Echange', <FontAwesomeIcon size='xs' icon={faCoins} />],
//     'social': ['Social', <FontAwesomeIcon size='xs' icon={faAt} />],
//     'games_comics': ['Games & Comics', <FontAwesomeIcon size='xs' icon={faGamepad} />],
//     'media': ['Media', <FontAwesomeIcon size='xs' icon={faFolderOpen} />],
//     'science': ['Science',<FontAwesomeIcon size='xs' icon={faVial} />],
//     'finance': ['Finance', <FontAwesomeIcon size='xs' icon={faWallet} />],
//     'jobs': ['Jobs', <FontAwesomeIcon size='xs' icon={faBriefcase} />],
//     'music': ['Music', <FontAwesomeIcon size='xs' icon={faMusic} />],
//     'sport_fitness': ['Sport & Fitness', <FontAwesomeIcon size='xs' icon={faPersonRunning} />],
//     'food_drink': ['Food & Drink', <FontAwesomeIcon size='xs' icon={faBurger} />],
//     'weather': ['Weather', <FontAwesomeIcon size='xs' icon={faCloudBolt} />]
// }
// // 
// const _type = {
//     // 'api_key' : ['apiKey', <FontAwesomeIcon size='xs' icon={faKey} />]
//     'api_key' : ['apiKey', <fa class="fa fa-2xs">&#xf084;</fa>]
// }
// const _plan = {
//     'free' : ['Freemium', ''],
//     'subscription' : ['Subscription', ''],
// }
// const _trial = {
//     'yes': ['Yes', ''],
//     'no': ['No', ''],
// }
// // 
// const _featured = {
//     'yes': ['Yes', ''],
//     'no': ['No', ''],
// }

// // 
// export {
//     apis,
//     _blogs,
//     _category,
//     _type,
//     _plan,
//     _trial,
//     _featured
// }

const cats = [
  [ 36, 'Analytics', 'f201' ],
  [ 22, 'Animals', 'f1b0' ],
  [ 29, 'Anime', 'f26c' ],
  [ 37, 'Anti-Malware', 'f717' ],
  [ 34, 'Art & Design', 'f53f' ],
  [ 26, 'Automation', 'f118' ],
  [ 40, 'Books', 'f518' ],
  [ 43, 'Business', 'f64a' ],
  [ 30, 'Calendar', 'f133' ],
  [ 25, 'Cloud Storage & File Sharing', 'f0ee' ],
  [ 6, 'Currency Echange', 'f51e' ],
  [ 4, 'Data Access', 'f1c0' ],
  [ 23, 'Data Validation', 'f00c' ],
  [ 2, 'Development', 'f120' ],
  [ 38, 'Dictionaries', 'f02d' ],
  [ 17, 'Documents & Productivity', 'f058' ],
  [ 41, 'Environment', 'e587' ],
  [ 11, 'Finance', 'f555' ],
  [ 15, 'Food & Drink', 'f805' ],
  [ 8, 'Games & Comics', 'f11b' ],
  [ 5, 'Geocoding', 'f277' ],
  [ 20, 'Government', 'f19c' ],
  [ 19, 'Health', 'f479' ],
  [ 42, 'IoT', 'f6ff' ],
  [ 12, 'Jobs', 'f0f2' ],
  [ 18, 'Machine Learning', 'f544' ],
  [ 31, 'Marketing', 'f140' ],
  [ 9, 'Media', 'f07c' ],
  [ 13, 'Music', 'f001' ],
  [ 32, 'News', 'f1ea' ],
  [ 3, 'Open Data', 'f57d' ],
  [ 27, 'Personality', 'f0c0' ],
  [ 24, 'Photography', 'f083' ],
  [ 10, 'Science', 'f492' ],
  [ 28, 'Security', 'f3ed' ],
  [ 21, 'Shopping', 'f07a' ],
  [ 7, 'Social', '40' ],
  [ 14, 'Sport & Fitness', 'f70c' ],
  [ 46, 'Sports & Fitness', 'f84a' ],
  [ 33, 'Text Analysis', 'e098' ],
  [ 1, 'Transportation', 'f0d1' ],
  [ 35, 'URL Shorteners', 'f0c1' ],
  [ 39, 'Vehicle', 'f1b9' ],
  [ 47, 'Video', 'f03d' ],
  [ 16, 'Weather', 'f76c' ]
]
// 
const stat = [{category:'home'}]
for(let i in cats){
  const v = cats[i]
  stat.push({
    category: v[1].toLowerCase().replace(/ /g, "_")
  })
}
// 
export {
    cats,
    stat
}