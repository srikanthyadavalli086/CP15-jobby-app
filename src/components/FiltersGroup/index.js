import ProfileSection from '../ProfileSection'

import './index.css'

const FiltersGroup = props => {
  const {
    salaryRangesList,
    employmentTypesList,
    changeSalaryRange,
    changeEmploymentType,
  } = props

  const renderSalaryRangesList = () =>
    salaryRangesList.map(salary => {
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)

      return (
        <li className="li" key={salary.salaryRangeId} onChange={onChangeSalary}>
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name="salary"
          />
          <label htmlFor={salary.salaryRangeId} className="check-label">
            {salary.label}
          </label>
        </li>
      )
    })

  const renderSalaryRange = () => (
    <>
      <h1>Type of Employment</h1>
      <ul>{renderSalaryRangesList()}</ul>
    </>
  )

  const renderEmploymentTypesList = () =>
    employmentTypesList.map(employ => {
      const onChangeEmployType = event =>
        changeEmploymentType(event.target.value)

      return (
        <li
          className="li"
          key={employ.employmentTypeId}
          onChange={onChangeEmployType}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employ.employmentTypeId}
            value={employ.employmentTypeId}
          />
          <label htmlFor={employ.employmentTypeId} className="check-label">
            {employ.label}
          </label>
        </li>
      )
    })

  const renderEmploymentType = () => (
    <>
      <h1>Salary Range</h1>
      <ul>{renderEmploymentTypesList()}</ul>
    </>
  )

  return (
    <div className="bg-container">
      <ProfileSection className="profile-con" />
      {renderSalaryRange()}
      {renderEmploymentType()}
    </div>
  )
}
export default FiltersGroup
