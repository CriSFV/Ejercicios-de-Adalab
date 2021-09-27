const LiDetail = (props) => {
  return (
    //da especie de error porque no está compilado, en el compilado no da el error porque el rel está pintado
    <a
      className={props.className}
      href={props.href}
      rel={props.rel}
      target={props.openInNewtab ? '_blank' : ''}
    >
      {props.title}
    </a>
  );
};
export default LiDetail;
