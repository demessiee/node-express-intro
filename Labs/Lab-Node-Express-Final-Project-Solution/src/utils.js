/* Function: getAppliedJobs
    Input: candidateId(String) //contains an email of a candidate
    Input: jobList //contains a list of job objects that the function will reference
    Output: Returns a list of all jobs within jobList that was applied to by the candidate (include the full job object schema)
/****/
function getAppliedJobs(candidateId,jobList){
    //used to assist GET /candidates/candidate/:id/jobs 
    return jobList.filter( x => x.candidates.includes(candidateId))
    
}

/* Function: searchJobs
    Input: searchQuery(String) //contains the search query the function will search for
    Input: jobList //contains a list of job objects that the function will reference
    Output: Returns a list of all jobs within jobList that contain the search query within the title, company name or skills list
/****/
function searchJobs(searchQuery, jobList){
//used to assist GET /jobs/search/:search
    return jobList.filter( x => x.title.includes(searchJobs) || x.company_id.includes(searchQuery) || x.skills.includes(searchQuery) )
}

/* Function: filterCandidate
    Input: candidate //contains a candidate object that the function will reference
    Input: job //contains a job object that the function will reference
    Output: Returns a new job object with the candidate id added to the end of the job object's candidate list. If the candidate has the required years of experience or more and has all of the required skills in the job object's skill list, then add the candidate id to the end of the job object's qualified list.
/****/
function filterCandidate(candidate,job){
//used to assist PUT /jobs/job/:id/apply/:candidateId 
    if(parseFloat(candidate.years_of_experience) >= parseFloat(job.years_of_experience_required) && job.skills.filter( x => candidate.skills.includes(x)).length === job.skills.length  ){
        return {...job, candidates:[...job.candidates,candidate.id],qualified:[...job.qualified,candidate.id]}
    }
    else{
        return {...job, candidates:[...job.candidates,candidate.id]}
    }


}

module.exports = {
    getAppliedJobs,
    searchJobs,
    filterCandidate
}