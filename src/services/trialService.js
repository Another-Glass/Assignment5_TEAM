const models = require('../models');
const { InternalServerError } = require('http-errors');
const { EntityNotExistError, ValidationError } = require('../utils/errors/commonError');
const logger = require('../utils/logger');
const logTag = 'src:transaction';

/**
 * 상세조회
 * data.trialId
 */
exports.readTrial = async (data)=>{
  try{

  }catch(err){
    throw err;
  }
}

/**
 * 목록조회
 * data.page
 * data.limit
 */
exports.readTrialList = async (data)=>{
  try{

  }catch(err){
    throw err;
  }
}

/**
 * 검색
 * data.name
 * data.type
 * data.department
 * data.page
 * data.limit
 */
exports.searchTrials = async (data)=>{
  try{

  }catch(err){
    throw err;
  }
}

/**
 * 생성 혹은 변경
 * data = {
 *          '과제명': 'Lymphoma Study for Auto-PBSCT',
 *          '과제번호': 'C100002',
 *          '연구기간': '1년',
 *          '연구범위': '단일기관',
 *          '연구종류': '관찰연구',
 *          '연구책임기관': '가톨릭대 서울성모병원',
 *          '임상시험단계(연구모형)': '코호트',
 *          '전체목표연구대상자수': '',
 *          '진료과': 'Hematology',
 *           hash: '3449c9e5e332f1dbb81505cd739fbf3f'
 *        }
 */
exports.createOrUpdateTrials= async (data)=>{
  try{

  }catch(err){
    throw err;
  }
	
}