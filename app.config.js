import { getCurrentDomain } from "./src/Components/CommonFunction/CommonFunction";
const ApiBaseUrl = getCurrentDomain();
console.log("ApiBaseUrl", ApiBaseUrl);
const AppConfig = {
  endPoints: {
    companyUrl: `${ApiBaseUrl}/searchDetail`,
    groupSummary: `${ApiBaseUrl}/groupSummary`,
  },
  constantItems: {
    continueButton: `Continue`
  }
};
 
export default AppConfig;