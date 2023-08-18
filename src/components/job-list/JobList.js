import useFetch from '../fetch/useFetch';
import './JobList.scss';

const JobList = () => {
  const { data, error, isLoading } = useFetch(
    'https://api.talentlyft.com/v2/public/tttech-auto/jobs'
  );
  return (
    <ul className='jobs'>
      {!isLoading &&
        data.Results.map((job) => (
          <li className='job' key={job.Id}>
            <div className='job__title'>
              <a href={job.ShortlinkUrl} target='_blank'>
                {job.Title}
              </a>
            </div>
            <div className='job__location'>
              <p>{job.City},</p>
              <p>{job.Country}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default JobList;
