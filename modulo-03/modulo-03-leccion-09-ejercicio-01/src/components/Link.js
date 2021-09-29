import '../styles/App.scss';
import LiDetail from './LinkDetail';

const Li = (props) => {
  return (
    <div className='menu'>
      <li className={props.className}>
        <LiDetail
          className='link'
          href='https://adalab.es/blog/'
          rel='noreferrer'
          title='Blog'
          openInNewtab={props.openInNewtab}
        />
      </li>
      <li className={props.className}>
        <LiDetail
          className='link'
          href='https://adalab.es/contacto/'
          rel='noreferrer'
          title='Contacto'
        />
      </li>
    </div>
  );
};
Li.defaultProps = {
  openInNewtab: 'false',
};
export default Li;
