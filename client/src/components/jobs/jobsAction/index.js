const data = [
  {
    id        : 1,
    time      : 5,
    photo     : 'https://cdn.filepicker.io/api/file/lzbnvGVsTtmImRQJC8at',
    business  : 'Gangilone Bros',
    position  : 'Shift Leader/Sandwich Cook',
    jobType   : 'Full Time',
    location  : 'San Diego, CA',
    applicant : 0,
  },
  {
    id        : 2,
    time      : 15,
    photo     : 'https://cdn.filepicker.io/api/file/C4FWvreRiOk6mhRmkzv3',
    business  : 'The Grass Skirt',
    position  : 'Security',
    jobType   : 'Part Time',
    location  : 'Encinitas, CA',
    applicant : 0,
  }
];

export const JOB_DATA = 'JOB_DATA';
export function fetchJobs(filterBy) {
  const request = data;
  return {
    type    : JOB_DATA,
    payload : request
  };
}
