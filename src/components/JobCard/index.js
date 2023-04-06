import {Link} from 'react-router-dom'

import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    title,
    rating,
    employmentType,
    jobDescription,
    packagePerAnnum,
    location,
    id,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`}>
      <li className="li">
        <img src={companyLogoUrl} alt="company logo" />
        <h1>{title}</h1>
        <p>{rating}</p>
        <p>{location}</p>
        <p>{employmentType}</p>
        <p>{packagePerAnnum}</p>
        <h1>Description</h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}
export default JobCard
