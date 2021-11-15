const { statusCode, responseMessage } = require('../globals');
const { resFormatter } = require('../utils');
const trialService = require('../services/trialService.js');
const logger = require('../utils/logger');
const { ValidationError } = require('../utils/errors/commonError');


// 상세 페이지 API
module.exports.getTrialDetail = async (req, res, next) => {
  try {
    const { trialId } = req.params;
    if (trialId === undefined)
      throw new ValidationError();

  } catch (err) {
    next(err);
  }
}


// 리스트 페이지 API
module.exports.getTrials = async (req, res, next) => {
  try {
    const { page, limit } = req.query;

    if (page === undefined || limit === undefined)
      throw new ValidationError();

  } catch (err) {
    next(err);
  }
}


// 검색 API
module.exports.searchTrials = async (req, res, next) => {
  try {
    const { name, type, department, page, limit } = req.query;

    if (name === undefined || type === undefined || department === undefined
      || page === undefined || limit === undefined)
      throw new ValidationError();

  } catch (err) {
    next(err);
  }
}
