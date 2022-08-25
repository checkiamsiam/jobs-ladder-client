import { combineReducers } from "redux";
import currentEmployeeReducer from "./currentEmployeeReducer";
import getCandidateReducer from "./getCandidateReducer";
import getCompanyReducer from "./getCompanyReducer";
import getJobTitleReducer from "./getJobTitleReducer";
import getTaskReducer from "./getTaskReducer";
import jobPostReducer from "./jobPostReducer";
import recallApiReducer from "./recallApiReducer";

const rootReducer = combineReducers({
  jobPostState: jobPostReducer,
  currentEmployeeData: currentEmployeeReducer,
  recallApi: recallApiReducer,
  getTasks: getTaskReducer,
  getJobTitles: getJobTitleReducer,
  getCandidates: getCandidateReducer,
  getCompany : getCompanyReducer ,
});

export default rootReducer;
