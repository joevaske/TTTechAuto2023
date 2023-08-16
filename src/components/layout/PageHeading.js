import './PageHeading.scss';

const PageHeading = ({ title }) => {
  return (
    <div className='page-heading'>
      <h2>{title}</h2>
    </div>
  );
};

export default PageHeading;
