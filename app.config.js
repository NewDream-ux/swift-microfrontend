import { getCurrentDomain } from "./src/Components/CommonFunction/CommonFunction";
const ApiBaseUrl = getCurrentDomain();
console.log("ApiBaseUrl", ApiBaseUrl);
const AppConfig = {
  endPoints: {
    companyUrl: `${ApiBaseUrl}/searchDetail`,
    advanceSearchUrl: `${ApiBaseUrl}/advanceSearchDetail`,
    groupSummary: `${ApiBaseUrl}/groupSummary`,
    groupView: `${ApiBaseUrl}/viewhierarchyDetails`,
  },
  constantItems: {
    continueButton: `Continue`,
    groupView:`Group View`,
    groupHierarchyView:`Group Hierarchy View`,
    homeImageAlt:`Home_Image`
  }
};
 
export default AppConfig;