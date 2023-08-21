import './Button.scss';
const Button = ({ setClass, text, link, target }) => {
  return (
    <div className='button'>
      <a className='main-button' href='/#' target='_blank' rel='noreferrer'>
        {text}
      </a>
    </div>
  );
};

export default Button;
