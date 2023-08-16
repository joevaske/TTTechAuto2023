import './Paragraph.scss';
import parse from 'html-react-parser';

const Paragraph = ({ text, align }) => {
  return (
    <p className='paragraph' style={{ textAlign: { align } }}>
      {parse(text)}
    </p>
  );
};

export default Paragraph;
