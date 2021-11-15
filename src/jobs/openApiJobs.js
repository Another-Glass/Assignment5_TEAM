const cron = require('node-cron');
const axios = require('axios');
const md5 = require('md5');
const secretKey = require('../configs').secretKey.openApiSecretKey;

const trialService = require('../services/trialService')

const logger = require('../utils/logger.js');
const logtag = 'src:batch';
const { createOrUpdateTrials } = require('../services/trialService.js');

function startOpenApiBatch() {
  cron.schedule('*/10 * * * * *', () => {
    getOpenApiData();
  });
}

async function getOpenApiData() {
  let page = 1;
  let totalCount = 0;
  let url = '';

  while (1) {
    try {
      url =
        'https://api.odcloud.kr/api/3074271/v1/uddi:cfc19dda-6f75-4c57-86a8-bb9c8b103887?page=' +
        page +
        '&perPage=100&serviceKey=' +
        secretKey;

      const res = await axios.get(url);

      // 더 이상 받아올게 없으면 종료
      totalCount += res.data.currentCount;
      if (res.data.currentCount <= 0) {
        logger.logWithTag('total : ' + totalCount, logtag);
        break;
      }

      // 임상정보 오브젝트마다 해쉬값을 만들어서 넣어줌
      let trials = res.data.data;
      trials.map(trial => {
        let hash = md5(trial);
        trial.hash = hash;
        return trial;
      });

      await createOrUpdateTrials(trials);

      page++;
      logger.logWithTag(trials[0], logtag);
    } catch (err) {
      logger.logWithTag(err, logtag);
      break;
    }
  }
}

module.exports.startOpenApiBatch = startOpenApiBatch;

module.exports.getOpenApiData = getOpenApiData;