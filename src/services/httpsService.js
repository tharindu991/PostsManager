/*
 * Author: Tharindu Seneviratne
 * Date: 26/01/2020
 *
 * Main https service for handle API calls
 */
import axios from 'axios';
import Config from 'react-native-config';
import dotenvParseVariables from 'dotenv-parse-variables';
const ENV = dotenvParseVariables({API_BASE_URL: Config.API_BASE_URL});

export default axios.create({
  baseURL: ENV.API_BASE_URL,
  responseType: 'json',
});
